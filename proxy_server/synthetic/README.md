# Production Stack

## Start server 

First use the following to start production stack deployment
```
helm repo add vllm https://vllm-project.github.io/production-stack
helm install vllm vllm/vllm-stack -f prod-stack.yaml
```

Then port forward:

```
kubectl port-forward svc/vllm-router-service 30080:80
```

After that, start the proxy server with 
```
python ../proxy.py --backend-url http://localhost:30080  --port 8000
```

Then run the benchmark script:

```
bash run_inf.sh meta-llama/Llama-3.1-8B-Instruct http://0.0.0.0:8000  no-prefix 60 60  20 1000 20000 100  false no-prefix 0 0-bench-specs/routing/4-spec.yaml 0.5 3
```

# Fireworks

Start the proxy server with:
```
python ../proxy.py --backend-url https://api.fireworks.ai/inference --port 8010
```

Then run the benchmark script with:

```
bash run_inf.sh accounts/zhuohangu/deployedModels/llama-v3p1-8b-instruct-bzq8sju6 http://0.0.0.0:8010  no-prefix 60 60  20 1000 20000 100  false no-prefix 0 0-bench-specs/routing/4-spec.yaml 0.5 3
```


