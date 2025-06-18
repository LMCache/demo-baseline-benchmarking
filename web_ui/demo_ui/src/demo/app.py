import gradio as gr
import pandas as pd
import time
import requests
from data import df   
import json

API_ENDPOINTS = {
    "Ours 🚀": "PLACEHOLDER_URL",
    "Fireworks": "https://api.fireworks.ai/inference/v1/completions",
    "Together AI": "PLACEHOLDER_URL",
}
FIREWORKS_API_KEY = "fw_3ZRkgxTnPVjigjPUTgCb38ot"
ORDER = list(API_ENDPOINTS.keys())          # desired bar order


def upload_and_display_txt(file_obj):
    if file_obj is None:
        return "⚠️ No file uploaded."
    try:
        with open(file_obj.name, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        return f"❌ Error reading file: {e}"


def send_to_api(file_content: str, selected_apis: list, history: list):
    if not selected_apis:
        placeholder_df = pd.DataFrame({
            "api": ORDER,
            "ttft": [0.0] * len(ORDER),
            "color": ["ours" if name == "Ours 🚀" else "baseline" for name in ORDER]
        })
        return "⚠️ No API selected.", [], placeholder_df

    results, latest_history = [], []

    for name in selected_apis:
        if name != "Fireworks":
            results.append(f"🔶 {name}: placeholder\n")
            latest_history.append({"api": name, "ttft": 0.03})
            continue

        url = API_ENDPOINTS[name]
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {FIREWORKS_API_KEY}",
        }
        payload = {
            "model": "accounts/fireworks/models/llama-v3p1-8b-instruct",
            "prompt": "Tell me a short joke?",
            "max_tokens": 50,
            "stream": True,
        }

        start_time = time.perf_counter()
        try:
            resp = requests.post(url, headers=headers, json=payload, stream=True)
            resp.raise_for_status()
        except Exception as e:
            results.append(f"❌ {name} failed: {e}\n")
            latest_history.append({"api": name, "ttft": 0.0})
            continue

        full_output = []
        first_token_time = None

        for line in resp.iter_lines():
            if first_token_time is None:
                first_token_time = time.perf_counter()

            if not line or not line.startswith(b"data: "):
                continue
            try:
                payload = json.loads(line[len(b"data: "):])
                text = payload.get("choices", [{}])[0].get("text", "")
                full_output.append(text)
            except json.JSONDecodeError:
                continue

        end_time = time.perf_counter()
        ttft = first_token_time - start_time
        total_time = end_time - start_time
        full_output_str = "".join(full_output).strip()

        results.append(
            f"✅ {name}: {resp.status_code} — TTFT: {ttft:.3f}s | Total: {total_time:.3f}s\n🧠 Output: {full_output_str}\n"
        )
        latest_history.append({"api": name, "ttft": ttft})

    plot_df = (
        pd.DataFrame(latest_history)
        .set_index("api")
        .reindex(ORDER, fill_value=0.0)
        .reset_index()
    )
    plot_df["color"] = plot_df["api"].apply(
        lambda name: "ours" if name == "Ours 🚀" else "baseline"
    )

    return "".join(results), latest_history, plot_df

#  UI 
with gr.Blocks() as demo:
    gr.Markdown("## 🔍 Upload context and chat!")

    with gr.Row():
        file_input = gr.File(label="Upload .txt File", file_types=[".txt"])
        api_selector = gr.CheckboxGroup(
            choices=ORDER, label="🔄 Which APIs should we call?"
        )
        with gr.Column():
            submit_button = gr.Button("Submit", variant="secondary")
            api_status_output = gr.Textbox(
                label="📡 API Status", lines=5, interactive=False
            )

    text_output = gr.Textbox(label="📁 File Content", max_lines=7, interactive=False)

    # TTFT plot (bars sorted according to ORDER)
    gr.Markdown("## 📊 Time to First Token (TTFT)")
    ttft_plot = gr.BarPlot(
        pd.DataFrame({"api": ORDER, "ttft": [0.0] * len(ORDER), "color": ["ours"] + ["baseline"] * (len(ORDER) - 1)}),
        x="api",
        y="ttft",
        color="color",
        color_map={
            "ours": "lightgreen",
            "baseline": "orange",
        },
        title="Ours vs. Baselines",
        x_title=" ",
        y_title="TTFT (s)",
        sort=ORDER,
    )

    ttft_state = gr.State(value=[])

    file_input.upload(upload_and_display_txt, file_input, text_output)
    submit_button.click(
        send_to_api,
        inputs=[text_output, api_selector, ttft_state],
        outputs=[api_status_output, ttft_state, ttft_plot],
    )

if __name__ == "__main__":
    demo.launch()
