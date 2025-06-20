#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/../.." && pwd )"
cd "$SCRIPT_DIR"


MODEL=accounts/zhuohangu/deployedModels/llama-v3p1-8b-instruct-iqgw0cs8
BASE_URL=http://0.0.0.0:8002
KEY=test

# Configuration
NUM_USERS_WARMUP=60
NUM_USERS=60
NUM_ROUNDS=20
SYSTEM_PROMPT=1000
CHAT_HISTORY=20000
ANSWER_LEN=100
USE_SHAREGPT=false
NAME=test
SERVING_INDEX=0
SPEC_FILE_PATH=0-bench-specs/routing/4-spec.yaml
LMBENCH_SESSION_ID=0

# If QPS values are provided, use them; otherwise use default
# if [ $# -gt 14 ]; then
#     QPS_VALUES=("${@:15}")
# else
#     QPS_VALUES=(3)  # Default QPS value
# fi
QPS_VALUES=(3)

# init-user-id starts at 1, will add 400 each iteration
INIT_USER_ID=1

warmup() {
    local qps=$1
    echo "Warming up with QPS=$qps..."
    python3 "${SCRIPT_DIR}/multi-round-qa-infinite.py" \
        --num-users "$NUM_USERS_WARMUP" \
        --num-rounds "$NUM_ROUNDS" \
        --qps "$QPS_VALUES" \
        --shared-system-prompt "$SYSTEM_PROMPT" \
        --user-history-prompt "$CHAT_HISTORY" \
        --answer-len $ANSWER_LEN \
        --model "$MODEL" \
        --base-url "$BASE_URL" \
        --init-user-id "$INIT_USER_ID" \
        --output /tmp/warmup.csv \
        --log-interval 30 \
        --time $((NUM_USERS_WARMUP / 2)) \
        --request-with-user-id
}

run_benchmark() {
    local qps=$1
    local output_file="../../4-latest-results/${KEY}_synthetic_output_${qps}.csv"

    # warmup with current init ID
    # warmup

    # actual benchmark with same init ID
    echo "Running benchmark with QPS=$qps..."
    python3 "${SCRIPT_DIR}/multi-round-qa-infinite.py" \
        --num-users "$NUM_USERS" \
        --shared-system-prompt "$SYSTEM_PROMPT" \
        --user-history-prompt "$CHAT_HISTORY" \
        --answer-len "$ANSWER_LEN" \
        --num-rounds "$NUM_ROUNDS" \
        --qps "$qps" \
        --model "$MODEL" \
        --base-url "$BASE_URL" \
        --init-user-id "$INIT_USER_ID" \
        --output "$output_file" \
        --time 200 \
        --request-with-user-id \
        --reset-duration 300

    sleep 10

    # increment init-user-id by NUM_USERS_WARMUP
    INIT_USER_ID=$(( INIT_USER_ID + NUM_USERS_WARMUP ))
}

# Run benchmarks for each QPS value
for qps in "${QPS_VALUES[@]}"; do
    run_benchmark "$qps"

    # Change to project root before running summarize.py
    cd "$PROJECT_ROOT"

    python3 "4-latest-results/post-processing/summarize.py" \
        "4-latest-results/${KEY}_synthetic_output_${qps}.csv" \
        NAME="$NAME" \
        KEY="$KEY" \
        WORKLOAD="synthetic" \
        NUM_USERS_WARMUP="$NUM_USERS_WARMUP" \
        NUM_USERS="$NUM_USERS" \
        NUM_ROUNDS="$NUM_ROUNDS" \
        SYSTEM_PROMPT="$SYSTEM_PROMPT" \
        CHAT_HISTORY="$CHAT_HISTORY" \
        ANSWER_LEN="$ANSWER_LEN" \
        QPS="$qps" \
        USE_SHAREGPT="$USE_SHAREGPT" \
        SERVING_INDEX="$SERVING_INDEX" \
        SPEC_FILE_PATH="$SPEC_FILE_PATH" \
        LMBENCH_SESSION_ID="$LMBENCH_SESSION_ID" \
        AUTO_UPLOAD="${LMBENCH_AUTO_UPLOAD:-false}" \
        API_URL="${LMBENCH_API_URL:-http://localhost:3001/upload}"

    # Change back to script directory
    cd "$SCRIPT_DIR"
done

# Debugging:
# python3 "4-latest-results/post-processing/summarize.py" \
#     "4-latest-results/stack_synthetic_output_0.7.csv" \
#     KEY="stack" \
#     WORKLOAD="synthetic" \
#     NUM_USERS_WARMUP="750" \
#     NUM_USERS="350" \
#     NUM_ROUNDS="20" \
#     SYSTEM_PROMPT="0" \
#     CHAT_HISTORY="20000" \
#     ANSWER_LEN="1000" \
#     QPS="0.7" \
#     USE_SHAREGPT="false"

# Hard coded command to try at terminal
# python3 "3-workloads/synthetic/multi-round-qa.py" \
#     --num-users "300" \
#     --shared-system-prompt "0" \
#     --user-history-prompt "5000" \
#     --answer-len "100" \
#     --num-rounds "20" \
#     --qps "0.7" \
#     --model "mistralai/Mistral-7B-Instruct-v0.2" \
#     --base-url "http://localhost:30080/v1/" \
#     --init-user-id "1" \
#     --output "4-latest-results/stack_synthetic_output_0.7.csv" \
#     --time 100

# curl http://localhost:30080/v1/chat/completions \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer dmxsbV94eHh4eHh4eHh4eHh4" \
#   -d '{
#     "model": "mistralai/Mistral-7B-Instruct-v0.2",
#     "messages": [
#       {"role": "system", "content": "You are a helpful assistant."},
#       {"role": "user", "content": "Tell me a fun fact about whales."}
#     ],
#     "temperature": 0.7
#   }'