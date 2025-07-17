#!/bin/bash

# OpenAI Chat Frontend Setup Script
echo "🚀 Setting up OpenAI Chat Frontend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "❌ Node.js version $NODE_VERSION is not supported. Please install Node.js 18+ and try again."
    exit 1
fi

echo "✅ Node.js $NODE_VERSION detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run the frontend:"
    echo ""
    echo "  Development server:"
    echo "  npm run dev"
    echo ""
    echo "  Production build:"
    echo "  npm run build"
    echo "  npm start"
    echo ""
    echo "📖 Open http://localhost:3000 in your browser"
    echo ""
    echo "💡 Make sure your OpenAI Chat API backend is running on http://localhost:8000"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi 