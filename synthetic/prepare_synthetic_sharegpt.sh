#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

MODEL_URL=$1

wget https://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered/resolve/main/ShareGPT_V3_unfiltered_cleaned_split.json

python3 data_preprocessing.py --parse 1 --model-url "$MODEL_URL"

rm "ShareGPT_V3_unfiltered_cleaned_split.json"

