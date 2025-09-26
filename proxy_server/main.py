"""
FastAPI proxy → Fireworks.ai chat completions, with Prometheus metrics.

Run:
    export FIREWORKS_API_KEY="fw_xxx..."           # put your key here
    uvicorn main:app --host 0.0.0.0 --port 8000
"""

import os
import time
import json
import asyncio
import httpx                       # ← async replacement for 'requests'
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, Response
from prometheus_client import Counter, Histogram, generate_latest, CONTENT_TYPE_LATEST
from transformers import AutoTokenizer

# ---------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------
API_KEY  = os.getenv("FIREWORKS_API_KEY") or "REPLACE_WITH_FIREWORKS_API_KEY"
MODEL_ID = "accounts/zhuohangu/deployedModels/llama-v3p1-8b-instruct-jjumt4hs"
API_URL  = "https://api.fireworks.ai/inference/v1/chat/completions"

if API_KEY == "REPLACE_ME":
    raise RuntimeError("Please set FIREWORKS_API_KEY env var or edit main.py")

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Meta-Llama-3.1-8B-Instruct")

# ---------------------------------------------------------------------
# FastAPI + Prometheus
# ---------------------------------------------------------------------
app = FastAPI(title="Fireworks Proxy with Prom-Metrics")

REQUEST_COUNT = Counter(
    "fireworks: proxy_requests_total",
    "Total incoming requests",
    ["model"],
)
INPUT_TOKENS = Counter(
    "fireworks: proxy_input_tokens_total",
    "Sum of prompt tokens",
    ["model"],
)
OUTPUT_TOKENS = Counter(
    "fireworks: proxy_output_tokens_total",
    "Sum of completion tokens",
    ["model"],
)
TTFT = Histogram(
    "fireworks: proxy_time_to_first_token_seconds",
    "Latency from proxy → Fireworks response (non-streaming)",
    ["model"],
)
THROUGHPUT = Histogram(
    "fireworks:proxy_throughput_tokens_per_second",
    "completion_tokens / latency",
    ["model"],
)

# ---------------------------------------------------------------------
# Helper: async POST to Fireworks.ai
# ---------------------------------------------------------------------
async def call_fireworks(payload: dict) -> tuple[dict, float]:
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    payload = payload.copy()
    payload["model"] = MODEL_ID           # always enforce our model

    t0 = time.perf_counter()
    async with httpx.AsyncClient(timeout=60.0) as client:
        r = await client.post(API_URL, headers=headers, json=payload)
    latency = time.perf_counter() - t0

    return r, latency

# ---------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------
@app.post("/proxy")
async def proxy(request: Request):
    """
    Forward JSON body to Fireworks.ai and return its response.
    Prometheus metrics recorded:
        * request count
        * input / output token totals
        * TTFT (non-streaming latency)
        * throughput
    """
    try:
        incoming = await request.json()
    except json.JSONDecodeError:
        return JSONResponse(status_code=400, content={"error": "Invalid JSON"})

    # --- metrics: prompt token counting ------------------------------
    messages = incoming.get("messages", [])
    prompt_tokens = sum(
        len(tokenizer.encode(m.get("content", ""), add_special_tokens=False))
        for m in messages
    )
    model_lbl = MODEL_ID
    REQUEST_COUNT.labels(model=model_lbl).inc()
    INPUT_TOKENS.labels(model=model_lbl).inc(prompt_tokens)

    # --- forward to Fireworks ----------------------------------------
    fw_resp, latency = await call_fireworks(incoming)

    if fw_resp.status_code != 200:
        return JSONResponse(status_code=fw_resp.status_code, content=fw_resp.json())

    data = fw_resp.json()                     # full FW JSON
    completion_txt = data["choices"][0]["message"]["content"]
    completion_tokens = len(
        tokenizer.encode(completion_txt, add_special_tokens=False)
    )

    # --- metrics: completion side ------------------------------------
    OUTPUT_TOKENS.labels(model=model_lbl).inc(completion_tokens)
    TTFT.labels(model=model_lbl).observe(latency)
    if latency > 0:
        THROUGHPUT.labels(model=model_lbl).observe(completion_tokens / latency)

    return JSONResponse(content=data)


@app.get("/metrics")
def metrics():
    """Prometheus scrape endpoint."""
    return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)
