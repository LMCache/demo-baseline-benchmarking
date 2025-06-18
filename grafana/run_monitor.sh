#!/bin/bash

while true; do
    curr_time=$(date +"%Y-%m-%d_%T")
    python3 -u monitor.py 2>&1 | tee logs/${curr_time}.log
    sleep 5
done
