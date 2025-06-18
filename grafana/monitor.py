from prometheus_client import start_http_server, Gauge
import os, sys
import pickle
import paramiko
import time

# Metrics to track
cpu_usage_gauge = Gauge('cpu_usage', 'CPU usage of the server', ['server'])
gpu_usage_gauge = Gauge('gpu_usage', 'GPU usage of the server', ['server', "gpu_id"])
gpu_memory_total_gauge = Gauge('gpu_memory_total', 'Total GPU memory in MB', ['server', 'gpu_id'])
gpu_memory_used_gauge = Gauge('gpu_memory_used', 'Used GPU memory in MB', ['server', 'gpu_id'])
gpu_memory_free_gauge = Gauge('gpu_memory_free', 'Free GPU memory in MB', ['server', 'gpu_id'])
gpu_power_gauge = Gauge('gpu_power', 'GPU power in watts', ['server', 'gpu_id'])
gpu_temperature_gauge = Gauge('gpu_temperature', 'GPU temperature (C)', ['server', 'gpu_id'])
gpu_process_memory_used_gauge = Gauge('gpu_process_memory_used', 'Process-level GPU memory usage information', ['server', 'gpu_id', 'username'])

# Server details
servers = {
    "heart": {"host": "heart.cs.uchicago.edu", "username": "yihua98"},
    #"nature": {"host": "nature.cs.uchicago.edu", "username": "yihua98"},
    "farewell": {"host": "farewell.cs.uchicago.edu", "username": "yihua98"},
    #"silver": {"host": "silver.cs.uchicago.edu", "username": "yihua98"},
    "ziyizhang": {"host": "ziyizhang.cs.uchicago.edu", "username": "yihua"}
}


gpu_map = {} # a mapping of <server, gpu_bus_id> -> <gpu_index, total_memory>

active_user_memory_usage = {} # a mapping of <server> -> <<user_name, gpu_id> -> <total memory>>


def get_username_by_pid(client: paramiko.SSHClient, pid):
    command = f"ps -aux | grep {pid} | awk '{{if ($2 == {pid}) print $1}}'"
    stdin, stdout, stderr = client.exec_command(command)
    usernames = stdout.read().decode('utf-8').strip().split("\n")
    if len(usernames) > 1:
        print(f"WARNING: found more than 1 username for pid {pid}:", usernames)
    if len(usernames) == 0:
        print(f"WARNING: process {pid} not found!")
        return ""
    return usernames[0]

def get_server_usage(server_name, server_details):
    global active_user_memory_usage
    if server_name not in active_user_memory_usage:
        active_user_memory_usage[server_name] = {}

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(server_details['host'], username=server_details['username'])

    # Commands to get CPU and GPU usage. These commands might need to be adjusted based on your server setup.
    cpu_command = "top -bn1 | grep 'Cpu(s)' | grep -P '(....|...) id,' | awk '{print 100-$8}'"
    gpu_command = "nvidia-smi --query-gpu=index,utilization.gpu,memory.total,memory.used,memory.free,gpu_bus_id,power.draw,temperature.gpu --format=csv,noheader,nounits"
    gpu_user_command = "nvidia-smi --query-compute-apps=gpu_bus_id,pid,used_memory --format=csv,noheader,nounits"

    stdin, stdout, stderr = client.exec_command(cpu_command)
    cpu_usage = float(stdout.read().strip())
    cpu_usage_gauge.labels(server=server_name).set(cpu_usage)

    print("=============", server_name, "====================")
    print("CPU usage:", cpu_usage)
    stdin, stdout, stderr = client.exec_command(gpu_command)
    gpu_usages = stdout.read().decode('utf-8').strip().split("\n")
    for gpu_stat in gpu_usages:
        print(gpu_stat)
        gpu_id, utilization, memory_total, memory_used, memory_free, gpu_bus_id, power, temperature = gpu_stat.split(', ')
        gpu_usage_gauge.labels(server=server_name, gpu_id=gpu_id).set(float(utilization))
        gpu_memory_total_gauge.labels(server=server_name, gpu_id=gpu_id).set(float(memory_total))
        gpu_memory_used_gauge.labels(server=server_name, gpu_id=gpu_id).set(float(memory_used))
        gpu_memory_free_gauge.labels(server=server_name, gpu_id=gpu_id).set(float(memory_free))
        gpu_temperature_gauge.labels(server=server_name, gpu_id=gpu_id).set(float(temperature))
        gpu_power_gauge.labels(server=server_name, gpu_id=gpu_id).set(float(power))
        print(f"GPU {gpu_id} usage:", utilization)
        print(f"GPU {gpu_id} used mem:", memory_used)
        print(f"GPU {gpu_id} free mem:", memory_free)
        if (server_name, gpu_bus_id) not in gpu_map:
            gpu_map[(server_name, gpu_bus_id)] = (gpu_id, memory_total)

    stdin, stdout, stderr = client.exec_command(gpu_user_command)
    gpu_users = stdout.read().decode('utf-8').strip().split("\n")
    local_server_user_results = {}

    new_memory_usage = {}
    for gpu_user in gpu_users:
        if len(gpu_user) == 0:
            continue
        gpu_bus_id, pid, used_memory = gpu_user.split(", ")
        if (server_name, gpu_bus_id) in gpu_map:
            gpu_id, memory_total = gpu_map[(server_name, gpu_bus_id)]
        else:
            print(f"Error: unknown bus id {gpu_bus_id} found in server {server_name}")
        username = get_username_by_pid(client, pid)
        if username != "":
            key = (server_name, gpu_id, username)
            if key not in new_memory_usage:
                new_memory_usage[key] = 0
            new_memory_usage[key] += float(used_memory)
            #gpu_process_memory_used_gauge.labels(server=server_name, gpu_id=gpu_id, username=username, pid=pid).set(used_memory)
            print(f"User {username}, process {pid} used {used_memory} on GPU {gpu_id}")

    # update for the gauge
    for (sname, gpu_id, username), used_memory in new_memory_usage.items():
        if sname != server_name:
            continue
        gpu_process_memory_used_gauge.labels(server=server_name, gpu_id=gpu_id, username=username).set(used_memory)
        print(f"User {username} used {used_memory} on GPU {gpu_id}")

    # set the gauge to 0 if the users' processes has ended
    ended_keys = set(active_user_memory_usage[server_name].keys()) - set(new_memory_usage.keys())
    print("Ended keys:", ended_keys)
    for server_name, gpu_id, username in ended_keys:
        gpu_process_memory_used_gauge.labels(server=server_name, gpu_id=gpu_id, username=username).set(0)
        print(f"Memory usage for user {username} on GPU {gpu_id} has ended. Setting memory usage to 0.")
    
    # Update the active_user_memory_usage for the next monitoring cycle
    active_user_memory_usage[server_name] = new_memory_usage
    print()

    client.close()

def collect_metrics():
    for server_name, server_details in servers.items():
        try: 
            get_server_usage(server_name, server_details)
        except paramiko.ssh_exception.SSHException as e:
            print("Have ssh error when connecting to", server_name)

if __name__ == '__main__':
    # Start up the server to expose the metrics.
    start_http_server(10000)
    # Collect metrics every 30 seconds
    if os.path.isfile("users.pkl"):
        with open("users.pkl", "rb") as fin:
            active_user_memory_usage = pickle.load(fin)
            print(f"Loaded user usage information {active_user_memory_usage}")

    try:
        while True:
            collect_metrics()
            time.sleep(15)
    except KeyboardInterrupt:
        print("Received ctrl-C, cleaning up...")
    finally:
        print("Persisting user information...")
        with open("users.pkl", "wb") as fout:
            pickle.dump(active_user_memory_usage, fout, pickle.HIGHEST_PROTOCOL)
