# Lab sever monitoring script

## Deployment

```bash
pip install -r requirement.txt
bash start.sh
```

The Grafana website will be opened on port 3000.

```bash
bash stop.sh
```

## Migration guide

Modify `prometheus.yml`.

## Username and password

```yaml
GF_SECURITY_ADMIN_USER: 'jcl'
GF_SECURITY_ADMIN_PASSWORD: 'shaoting'
```
