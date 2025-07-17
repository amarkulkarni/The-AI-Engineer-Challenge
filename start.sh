#!/bin/bash

# 🚀 Unified OpenAI Chat App Startup Script
# This script can start the app in different modes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 OpenAI Chat App Startup Script${NC}"
echo "============================================="

# Function to check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ and try again.${NC}"
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2)
    echo -e "${GREEN}✅ Node.js $NODE_VERSION detected${NC}"
}

# Function to check if Python is installed  
check_python() {
    if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null; then
        echo -e "${RED}❌ Python is not installed. Please install Python 3.8+ and try again.${NC}"
        exit 1
    fi
    
    if command -v python3 &> /dev/null; then
        PYTHON_CMD="python3"
    else
        PYTHON_CMD="python"
    fi
    
    PYTHON_VERSION=$($PYTHON_CMD --version | cut -d' ' -f2)
    echo -e "${GREEN}✅ Python $PYTHON_VERSION detected${NC}"
}

# Function to start the unified Next.js app (recommended)
start_unified() {
    echo -e "${BLUE}🎯 Starting Unified Next.js App (Frontend + API)${NC}"
    echo "This mode provides everything in one place!"
    
    check_node
    
    cd frontend
    
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    
    echo -e "${GREEN}🚀 Starting development server...${NC}"
    echo "Frontend: http://localhost:3000"
    echo "API: http://localhost:3000/api"
    echo ""
    npm run dev
}

# Function to start both frontend and backend separately  
start_separate() {
    echo -e "${BLUE}🔧 Starting Frontend and Backend Separately${NC}"
    echo "This mode runs the original FastAPI backend + Next.js frontend"
    
    check_node
    check_python
    
    # Start backend in background
    echo -e "${YELLOW}🔧 Starting FastAPI backend...${NC}"
    cd api
    
    if [ ! -d "venv" ]; then
        echo "Creating virtual environment..."
        $PYTHON_CMD -m venv venv
    fi
    
    source venv/bin/activate 2>/dev/null || source venv/Scripts/activate 2>/dev/null
    pip install -r requirements.txt
    
    echo "Backend starting on http://localhost:8000"
    $PYTHON_CMD app.py &
    BACKEND_PID=$!
    
    # Wait a moment for backend to start
    sleep 3
    
    # Start frontend
    cd ../frontend
    echo -e "${YELLOW}🎨 Starting Next.js frontend...${NC}"
    echo "Frontend starting on http://localhost:3000"
    npm install
    npm run dev &
    FRONTEND_PID=$!
    
    # Wait for user to stop
    echo -e "${GREEN}✅ Both services are running!${NC}"
    echo "Press Ctrl+C to stop both services"
    
    trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT
    wait
}

# Function to start only the backend
start_backend_only() {
    echo -e "${BLUE}🔧 Starting Backend Only${NC}"
    
    check_python
    
    cd api
    
    if [ ! -d "venv" ]; then
        echo "Creating virtual environment..."
        $PYTHON_CMD -m venv venv
    fi
    
    source venv/bin/activate 2>/dev/null || source venv/Scripts/activate 2>/dev/null
    pip install -r requirements.txt
    
    echo -e "${GREEN}🚀 Starting FastAPI backend...${NC}"
    echo "Backend: http://localhost:8000"
    echo "Docs: http://localhost:8000/docs"
    $PYTHON_CMD app.py
}

# Show menu
echo ""
echo "Choose how to start the app:"
echo ""
echo "1) 🎯 Unified App (Recommended) - Everything in one Next.js app"
echo "2) 🔧 Separate Services - FastAPI backend + Next.js frontend"  
echo "3) 🛠️  Backend Only - Just the FastAPI backend for testing"
echo "4) ❓ Help - Show more information"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        start_unified
        ;;
    2)
        start_separate
        ;;
    3)
        start_backend_only
        ;;
    4)
        echo ""
        echo -e "${BLUE}📚 Help Information${NC}"
        echo "============================================="
        echo ""
        echo -e "${GREEN}Option 1 - Unified App (Recommended):${NC}"
        echo "• Single Next.js app with built-in API routes"
        echo "• Easiest to deploy and manage"
        echo "• Perfect for Vercel deployment"
        echo "• All features in one place"
        echo ""
        echo -e "${YELLOW}Option 2 - Separate Services:${NC}"
        echo "• Traditional setup with FastAPI + Next.js"
        echo "• Good for testing individual components"
        echo "• Runs on separate ports (3000 + 8000)"
        echo ""
        echo -e "${BLUE}Option 3 - Backend Only:${NC}"
        echo "• Just the FastAPI backend for API testing"
        echo "• Useful for debugging or API development"
        echo ""
        echo "Run this script again to start the app!"
        ;;
    *)
        echo -e "${RED}Invalid choice. Please run the script again and choose 1-4.${NC}"
        exit 1
        ;;
esac 