#!/usr/bin/env bash
set -euo pipefail

BACKENDS=(
  "http://192.168.49.2:$(kubectl get svc vllm-router-service -o=jsonpath='{.spec.ports[0].nodePort}')"
  "https://api.fireworks.ai/inference"
  "https://api.deepinfra.com/v1/openai"
)
PORTS=(
  8001
  8002
  8003
)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="${SCRIPT_DIR}/logs"

port_forward() {
  kubectl port-forward svc/vllm-router-service 30080:80  > "${LOG_DIR}/port_forward.out" \
      2> "${LOG_DIR}/port_forward.err" &
}

deploy() {
  helm repo add vllm https://vllm-project.github.io/production-stack
  helm install vllm vllm/vllm-stack -f synthetic/prod-stack.yaml
  RED='\033[0;31m'
  GREEN='\033[0;32m'
  YELLOW='\033[1;33m'
  NC='\033[0m' # No Color

  # Function to print status messages
  print_status() {
      echo -e "${GREEN}[INFO]${NC} $1"
  }

  print_error() {
      echo -e "${RED}[ERROR]${NC} $1"
  }

  print_warning() {
      echo -e "${YELLOW}[WARNING]${NC} $1"
  }

  # Default values
  POD_PREFIX="vllm"
  TIMEOUT_SECONDS=500
  VERBOSE=false
  while [[ $# -gt 0 ]]; do
    case $1 in
        --pod-prefix)
            POD_PREFIX="$2"
            shift 2
            ;;
        --timeout)
            TIMEOUT_SECONDS="$2"
            shift 2
            ;;
        --verbose)
            VERBOSE=true
            shift
            ;;
        --help)
            usage
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            usage
            exit 1
            ;;
    esac
  done

  # Validate inputs
  if ! [[ "$TIMEOUT_SECONDS" =~ ^[0-9]+$ ]]; then
      print_error "Timeout must be a positive integer"
      exit 1
  fi

  print_status "⏳ Waiting for all $POD_PREFIX pods to be in Running state"
  print_status "Timeout: ${TIMEOUT_SECONDS} seconds"

  # Track start time for timeout
  START_TIME=$SECONDS

  # Use the same approach as existing functionality tests
  while true; do
      # Get all pods containing the prefix in their name and check their status
      if ! kubectl get pods --no-headers | grep -q "$POD_PREFIX"; then
          print_warning "No $POD_PREFIX pods found yet. Checking again in 5 seconds..."
          sleep 5

          # Check timeout
          if [ $((SECONDS - START_TIME)) -gt "$TIMEOUT_SECONDS" ]; then
              print_error "❌ Timeout waiting for $POD_PREFIX pods to appear"
              print_error "No pods with prefix '$POD_PREFIX' found after ${TIMEOUT_SECONDS} seconds"
              kubectl get pods
              exit 1
          fi
          continue
      fi

      # Get pod status and readiness
      pod_status=$(kubectl get pods --no-headers | grep "$POD_PREFIX" | awk '{print $3}' | sort | uniq)
      pod_ready=$(kubectl get pods --no-headers | grep "$POD_PREFIX" | awk '{print $2}' | sort | uniq)

      if [ "$VERBOSE" = true ]; then
          print_status "Current pod status: $pod_status, Ready: $pod_ready"
          kubectl get pods | grep "$POD_PREFIX" || true
      fi

      # If all pods are Running and Ready (1/1), break the loop
      if [[ "$pod_status" == "Running" ]] && [[ "$pod_ready" == "1/1" ]]; then
          print_status "All $POD_PREFIX pods are now Ready and in Running state."
          break
      fi

      print_status "Not all $POD_PREFIX pods are ready yet. Current status: $pod_status, Ready: $pod_ready"
      print_status "Checking again in 5 seconds..."
      sleep 5

      # Check timeout
      if [ $((SECONDS - START_TIME)) -gt "$TIMEOUT_SECONDS" ]; then
          print_error "❌ Timeout waiting for $POD_PREFIX pods to be ready"
          print_error "Pods were not ready after ${TIMEOUT_SECONDS} seconds"
          print_error "Current pod status:"
          kubectl get pods | grep "$POD_PREFIX" || true
          print_error "Pod descriptions:"
          kubectl describe pods | grep -A 20 -B 5 "$POD_PREFIX" || true
          exit 1
      fi
  done

  # Show final pod status
  print_status "✅ All $POD_PREFIX pods are ready:"
  kubectl get pods | grep "$POD_PREFIX"

  print_status "🎉 Pod readiness check completed successfully in $((SECONDS - START_TIME)) seconds"
  # port_forward
  kubectl patch service vllm-router-service -p '{"spec":{"type":"NodePort"}}'
  # port=$(kubectl get svc vllm-router-service -o=jsonpath='{.spec.ports[0].nodePort}')
  echo "Node port: ${port}"
}

undeploy() {
  helm uninstall vllm
}

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
  deploy) deploy ;;
  undeploy) undeploy ;;
  *)
    echo "Usage: $0 {start|stop|deploy|undeploy}"
    exit 1
    ;;
esac
