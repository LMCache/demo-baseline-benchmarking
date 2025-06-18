# FastAPI Proxy Server

A high-performance proxy server built with FastAPI that forwards requests to a backend service while providing metrics and monitoring capabilities.

## Features

- Asynchronous request handling using FastAPI and httpx
- Prometheus metrics integration for monitoring
- Configurable backend URL and server settings
- Special endpoint handlers for different types of requests
- Response time tracking and logging
- Streaming response support

## Installation

1. Install the required dependencies:
```bash
pip install fastapi uvicorn httpx prometheus-client
```

## Usage

Run the proxy server with default settings:
```bash
bash proxy_ctl.sh start
bash proxy_ctl.sh stop
```

Modify the backend and port in `proxy_ctl.sh`.

### Command Line Arguments

The proxy server supports the following command line arguments:

- `--backend-url`: URL of the backend server (default: http://localhost:8000)
- `--host`: Host to bind the server to (default: 0.0.0.0)
- `--port`: Port to bind the server to (default: 8001)

Example with custom settings:
```bash
python proxy.py --backend-url http://my-backend:8000 --host 127.0.0.1 --port 8080
```

## Prometheus Metrics

The proxy server exports the following Prometheus metrics:

### time_to_first_byte_seconds
- **Type**: Histogram
- **Description**: Measures the response time of proxied requests
- **Labels**:
  - `url`: The backend URL
  - `endpoint`: The API endpoint being called
- **Buckets**: 0.1, 0.5, 1.0, 2.0, 5.0, 10.0, 30.0, 60.0, inf

### request_duration_seconds
- **Type**: Histogram
- **Description**: Measures the time elapsed since the request start to the request end.
- **Labels**:
  - `url`: The backend URL
  - `endpoint`: The API endpoint being called
- **Buckets**: 0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1.0, inf

### decoding throughput

### input / output qps

## Special Endpoints

The proxy server includes special handlers for the following endpoints:

- `/inference/v1/completions`: Handles completion requests
- `/inference/v1/chat/completions`: Handles chat completion requests
- `/metrics`: Exposes Prometheus metrics
