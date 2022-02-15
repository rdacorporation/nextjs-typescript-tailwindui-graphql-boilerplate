#!/bin/sh
set -ea

if [ ! -f "package.json" ]; then
    echo "package.json not found"
    exit 1
fi

echo "Starting your app..."
CHOKIDAR_USEPOLLING=1
pm2-runtime start /srv/app/ecosystem.config.dev.yml --delay 5 --max-memory-restart 8G $@
