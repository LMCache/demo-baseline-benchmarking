from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse
import httpx
import time
from typing import Dict, Any, Callable, Awaitable
import logging
from contextlib import asynccontextmanager
import argparse
from prometheus_client import Histogram, generate_latest, CONTENT_TYPE_LATEST, Gauge
from starlette.responses import Response

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Parse command line arguments
def parse_args():
    parser = argparse.ArgumentParser(description='FastAPI Proxy Server')
    parser.add_argument('--backend-url', 
                       default="http://localhost:8000",
                       help='URL of the backend server (default: http://localhost:8000)')
    parser.add_argument('--host',
                       default="0.0.0.0",
                       help='Host to bind the server to (default: 0.0.0.0)')
    parser.add_argument('--port',
                       type=int,
                       default=8001,
                       help='Port to bind the server to (default: 8001)')
    return parser.parse_args()

# Configuration
args = parse_args()
BACKEND_URL = args.backend_url

# Prometheus metrics
response_time_histogram = Histogram(
    'time_to_first_byte_seconds',
    'Response time of proxied requests',
    ['url', 'endpoint'],
    buckets=(0.1, 0.5, 1.0, 2.0, 5.0, 10.0, 30.0, 60.0, float("inf"))
)

request_duration_histogram = Histogram(
    'request_duration_seconds',
    'Time elapsed between response start and end',
    ['url', 'endpoint'],
    buckets=(0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1.0, float("inf"))
)

decoding_throughput_gauge = Gauge(
    "vllm_decoding_throughput_tokens_per_second",
    "Decoding throughput (tokens per second) per server",
    ["server"],
)

# Dictionary to store special endpoint handlers
endpoint_handlers: Dict[str, Callable[[Request, str], Awaitable[Any]]] = {}

def register_endpoint_handler(path: str):
    """Decorator to register special endpoint handlers"""
    def decorator(func: Callable[[Request, str], Awaitable[Any]]):
        endpoint_handlers[path] = func
        return func
    return decorator

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize httpx client
    app.state.client = httpx.AsyncClient(timeout=30.0)
    logger.info(f"Started httpx client, proxying to {BACKEND_URL}")
    yield
    # Cleanup httpx client
    await app.state.client.aclose()
    logger.info("Closed httpx client")

app = FastAPI(lifespan=lifespan)

@app.middleware("http")
async def add_response_time(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    logger.info(f"Request to {request.url.path} took {process_time:.4f} seconds")
    return response

async def stream_response(response: httpx.Response, url: str, endpoint: str):
    async for chunk in response.aiter_bytes():
        yield chunk

async def stream_response_from_request(request: Request, url: str, endpoint: str):
    target_url = f"{BACKEND_URL}/{endpoint}"
    body = await request.body()
    headers = dict(request.headers)
    headers.pop("host", None)
    query_params = dict(request.query_params)

    client = request.app.state.client

    start = time.time()
    prev_time = None
    chunk_count = 0
    async with client.stream(
        method=request.method,
        url=target_url,
        params=query_params,
        headers=headers,
        content=body
    ) as response:
        response_time = time.time() - start
        response_time_histogram.labels(url=url, endpoint=endpoint).observe(response_time)
        response.raise_for_status()
        async for chunk in response.aiter_bytes():
            chunk_count += 1
            yield chunk
        decoding_throughput_gauge.labels(server=BACKEND_URL).set(chunk_count / (time.time() - response_time - start))
        request_duration_histogram.labels(url=url, endpoint=endpoint).observe(time.time() - start)

async def completion_proxy_handler(request: Request, path: str):
    """Handler for completion endpoint"""
    await request.body()

    return StreamingResponse(
        stream_response_from_request(request, BACKEND_URL, path),
        status_code=200,
        headers={"Content-Type": "text/plain"},
        media_type="text/plain"
    )

async def default_proxy_handler(request: Request, path: str):
    """Default handler for proxying requests to the backend"""
    target_url = f"{BACKEND_URL}/{path}"
    body = await request.body()
    headers = dict(request.headers)
    headers.pop("host", None)
    query_params = dict(request.query_params)
    
    start_time = time.time()

    return StreamingResponse(
        stream_response_from_request(request, BACKEND_URL, path),
        status_code=200,
        headers={"Content-Type": "text/plain"},
        media_type="text/plain"
    )

    # === DEBUG ===: should not be triggered
    
    try:
        response = await request.app.state.client.request(
            method=request.method,
            url=target_url,
            params=query_params,
            headers=headers,
            content=body
        )
        
        response_time = time.time() - start_time
        logger.info(f"Backend response time for {path}: {response_time:.4f} seconds")
        
        # Record response time in Prometheus
        response_time_histogram.labels(url=BACKEND_URL, endpoint=path).observe(response_time)
        
        return StreamingResponse(
            stream_response(response, BACKEND_URL, path),
            status_code=response.status_code,
            headers=dict(response.headers),
            media_type=response.headers.get("content-type")
        )
        
    except Exception as e:
        logger.error(f"Error proxying request to {target_url}: {str(e)}")
        return JSONResponse({"error": str(e)}, status_code=500)

# Example of a special endpoint handler
@register_endpoint_handler("inference/v1/completions")
async def handle_completion_endpoint(request: Request, path: str):
    return await completion_proxy_handler(request, path)

@register_endpoint_handler("inference/v1/chat/completions")
async def handle_chat_completion_endpoint(request: Request, path: str):
    return await completion_proxy_handler(request, path)

@register_endpoint_handler("metrics")
async def handle_metrics_endpoint(request: Request, path: str):
    """Handle metrics endpoint"""
    return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)

@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"])
async def proxy(request: Request, path: str):
    """Main proxy endpoint that dispatches to appropriate handler"""
    # Check if there's a special handler for this path
    logger.info(f"Proxying request to {path}")
    handler = endpoint_handlers.get(path, default_proxy_handler)
    
    # Call the appropriate handler
    return await handler(request, path)


if __name__ == "__main__":
    import uvicorn
    logger.info(f"Starting proxy server on {args.host}:{args.port}")
    uvicorn.run(app, host=args.host, port=args.port)
