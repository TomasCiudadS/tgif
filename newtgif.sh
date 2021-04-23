#!/usr/bin/env bash
set -euo pipefail

export DATE=$(date +"%Y-%m-%d")

envsubst < src/template.md.sh > src/"$DATE".md
