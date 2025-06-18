#!/usr/bin/env bash
set -euo pipefail

BACKENDS=(
  "http://localhost:8000"
  "http://localhost:8010"
  "http://localhost:8020"
)
PORTS=(
  8001
  8011
  8021
)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="${SCRIPT_DIR}/logs"

start() {
  mkdir -p "${LOG_DIR}"
  for idx in "${!BACKENDS[@]}"; do
    backend_url="${BACKENDS[$idx]}"
    port="${PORTS[$idx]}"
    echo "Starting proxy #$((idx+1)): ${backend_url} → port ${port}"
    nohup python "${SCRIPT_DIR}/proxy.py" \
      --backend-url "${backend_url}" \
      --port "${port}" \
      > "${LOG_DIR}/proxy_${port}.out" \
      2> "${LOG_DIR}/proxy_${port}.err" &
  done
  echo "Launched ${#BACKENDS[@]} proxies."
}

stop() {
  for port in "${PORTS[@]}"; do
    pid=$(lsof -t -i tcp:"${port}" || true)
    if [[ -n "$pid" ]]; then
      echo "Stopping proxy on port ${port} (PID ${pid})"
      kill "${pid}"
    else
      echo "No proxy listening on port ${port}"
    fi
  done
}

case "${1:-}" in
  start) start ;;
  stop)  stop  ;;
  *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac
