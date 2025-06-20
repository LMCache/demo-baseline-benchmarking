import os
import time
import asyncio

import gradio as gr
import pandas as pd
import openai

# ───────────────────────────────────────────────────────────────────────────────
# 1. CONFIGURE YOUR API CREDENTIALS & ENDPOINTS
# ───────────────────────────────────────────────────────────────────────────────
OURS_API_KEY        = os.environ.get("OURS_API_KEY", "dummy_api_key_for_ours")
OURS_BASE_URL       = os.environ.get("OURS_BASE_URL", "http://0.0.0.0:8001/v1")
OURS_MODEL          = "meta-llama/Llama-3.1-8B-Instruct"

FIREWORKS_API_KEY   = os.environ.get("FIREWORKS_API_KEY", "fw_3ZRkgxTnPVjigjPUTgCb38ot")
FIREWORKS_BASE_URL  = os.environ.get("FIREWORKS_BASE_URL", "http://0.0.0.0:8002/v1")
FIREWORKS_MODEL     = "accounts/zhuohangu/deployedModels/llama-v3p1-8b-instruct-wejcmmxe"

DEEPINFRA_API_KEY   = os.environ.get("DEEPINFRA_API_KEY", "1Ft8yuNBUkITVoVbCpyMMIsqglirxxpr")
DEEPINFRA_BASE_URL  = os.environ.get("DEEPINFRA_BASE_URL", "http://0.0.0.0:8003")
DEEPINFRA_MODEL     = "tensormesh/Meta-Llama-3.1-8B-Instruct"

API_CONFIG = {
    "Ours 🚀": {
        "api_key": OURS_API_KEY,
        "base_url": OURS_BASE_URL,
        "model": OURS_MODEL,
    },
    "Fireworks": {
        "api_key": FIREWORKS_API_KEY,
        "base_url": FIREWORKS_BASE_URL,
        "model": FIREWORKS_MODEL,
    },
    "DeepInfra": {
        "api_key": DEEPINFRA_API_KEY,
        "base_url": DEEPINFRA_BASE_URL,
        "model": DEEPINFRA_MODEL,
    },
}
ORDER = list(API_CONFIG.keys())

# ───────────────────────────────────────────────────────────────────────────────
# 2. HELPERS TO READ THE UPLOADED FILE
# ───────────────────────────────────────────────────────────────────────────────
def upload_and_display_txt(file_obj):
    if file_obj is None:
        return "⚠️ No file uploaded."
    try:
        with open(file_obj.name, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        return f"❌ Error reading file: {e}"
    

# ───────────────────────────────────────────────────────────────────────────────
# 3. ASYNC STREAMING CALL & TTFT MEASUREMENT
# ───────────────────────────────────────────────────────────────────────────────
async def call_api(name: str, prompt: str, max_tokens: int = 200):
    """
    Streams from the named API, captures first‐token latency, and returns:
      - formatted result string
      - a dict {"api": name, "ttft": <sec>}
    """
    cfg = API_CONFIG[name]
    client = openai.AsyncOpenAI(api_key=cfg["api_key"], base_url=cfg["base_url"])
    start = time.time()
    first_token_time = None
    full_text = ""
    try:
        response = await client.completions.create(
            prompt=prompt,
            model=cfg["model"],
            stream=True,
            max_tokens=max_tokens,
            temperature=0.0,
            stream_options={"include_usage": True},
        )
        async for chunk in response:
            if not chunk.choices:
                continue
            text = chunk.choices[0].text or ""
            if first_token_time is None and text != "":
                first_token_time = time.time()
            full_text += text
        end = time.time()
        ttft = (first_token_time - start) if first_token_time else 0.0
        total = end - start
        result = (
            f"✅ {name}: TTFT: {ttft:.3f}s | Total: {total:.3f}s\n"
            f"🧠 Output: {full_text.strip()}"
        )
        return result, {"api": name, "ttft": ttft}
    except Exception as e:
        return f"❌ {name} failed: {e}", {"api": name, "ttft": 0.0}

async def send_to_api(prompt: str, selected_apis: list, history: list):
    # No APIs chosen → show empty placeholder chart
    if not selected_apis:
        placeholder_df = pd.DataFrame({
            "api": ORDER,
            "ttft": [0.0] * len(ORDER),
            "color": ["ours" if n == "Ours 🚀" else "baseline" for n in ORDER],
        })
        return "⚠️ No API selected.", [], placeholder_df

    if not prompt or prompt.startswith("⚠️"):
        return "⚠️ Please upload a file with some text first.", history, gr.update()

    # Fire off all calls at once
    tasks = [call_api(name, prompt) for name in selected_apis]
    all_results = await asyncio.gather(*tasks)

    # Unpack results & histories
    results = [res for res, hist in all_results]
    latest_history = [hist for res, hist in all_results]

    # Build the bar‐plot DataFrame, reordering to match ORDER
    plot_df = (
        pd.DataFrame(latest_history)
          .set_index("api")
          .reindex(ORDER, fill_value=0.0)
          .reset_index()
    )
    plot_df["color"] = plot_df["api"].apply(lambda n: "ours" if n=="Ours 🚀" else "baseline")

    return "\n\n".join(results), latest_history, plot_df

# ───────────────────────────────────────────────────────────────────────────────
# 4. GRADIO UI LAYOUT
# ───────────────────────────────────────────────────────────────────────────────
with gr.Blocks() as demo:
    gr.Markdown("## 🔍 Upload context and chat!")

    with gr.Row():
        file_input = gr.File(label="Upload .txt File", file_types=[".txt"])
        api_selector = gr.CheckboxGroup(choices=ORDER, label="🔄 Which APIs should we call?")
        with gr.Column():
            submit_button = gr.Button("Submit", variant="secondary")
            api_status_output = gr.Textbox(label="📡 API Status", lines=5, interactive=False)

    text_output = gr.Textbox(label="📁 File Content", max_lines=7, interactive=False)

    gr.Markdown("## 📊 Time to First Token (TTFT)")
    ttft_plot = gr.BarPlot(
        pd.DataFrame({
            "api": ORDER,
            "ttft": [0.0]*len(ORDER),
            "color": ["ours"] + ["baseline"]*(len(ORDER)-1)
        }),
        x="api",
        y="ttft",
        color="color",
        color_map={"ours": "lightgreen", "baseline": "orange"},
        title="Ours vs. Baselines",
        x_title=" ",
        y_title="TTFT (s)",
        sort=ORDER,
    )

    ttft_state = gr.State(value=[])

    # Bind events
    file_input.upload(upload_and_display_txt, file_input, text_output)
    submit_button.click(
        send_to_api,
        inputs=[text_output, api_selector, ttft_state],
        outputs=[api_status_output, ttft_state, ttft_plot],
    )

if __name__ == "__main__":
    demo.launch()
