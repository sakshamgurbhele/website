#!/bin/bash
set -e

PROJECT_DIR="/home/ubuntu/website"
WEB_ROOT="/var/www/html"

echo "==> Updating package list..."
sudo apt-get update -y -qq

# Install Node.js if not present
if ! command -v node &>/dev/null; then
  echo "==> Installing Node.js..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
else
  echo "==> Node.js already installed: $(node -v)"
fi

# Install nginx if not present
if ! command -v nginx &>/dev/null; then
  echo "==> Installing nginx..."
  sudo apt-get install -y nginx
else
  echo "==> nginx already installed: $(nginx -v 2>&1)"
fi

# Install dependencies and build
echo "==> Installing npm dependencies..."
cd "$PROJECT_DIR"
npm install

echo "==> Building project..."
npm run build

# Deploy to web root
echo "==> Deploying to $WEB_ROOT..."
sudo rm -rf "$WEB_ROOT"/*
sudo cp -r "$PROJECT_DIR/dist/"* "$WEB_ROOT/"

# Apply nginx config
echo "==> Applying nginx config..."
sudo cp "$PROJECT_DIR/nginx.conf" /etc/nginx/sites-available/default

# Enable and start nginx
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl restart nginx

echo ""
echo "==> Done! Site is live."
