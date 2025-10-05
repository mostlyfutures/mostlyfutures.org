#!/bin/bash

# SvelteKit AI Agent Setup Script
# This script sets up the PydanticAI agent for editing SvelteKit projects

set -e

echo "🤖 Setting up SvelteKit AI Agent..."
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC} $1"
}

print_error() {
    echo -e "${RED}❌${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "svelte-agent/pyproject.toml" ]; then
    print_error "Please run this script from the mostlyfutures.org directory"
    exit 1
fi

echo "🔍 Checking prerequisites..."

# Check Python
if ! command -v python3 &> /dev/null; then
    print_error "Python 3 is required but not installed"
    exit 1
fi
print_status "Python 3 found"

# Check uv (Python package manager)
if ! command -v uv &> /dev/null; then
    print_warning "uv not found. Installing uv (recommended Python package manager)..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.cargo/bin:$PATH"
    if ! command -v uv &> /dev/null; then
        print_error "Failed to install uv. Please install manually: https://docs.astral.sh/uv/getting-started/installation/"
        exit 1
    fi
fi
print_status "uv package manager found"

# Check Node.js and npm
if ! command -v node &> /dev/null; then
    print_error "Node.js is required but not installed"
    exit 1
fi
print_status "Node.js found"

if ! command -v npm &> /dev/null; then
    print_error "npm is required but not installed"
    exit 1
fi
print_status "npm found"

echo ""
echo "🐍 Setting up Python agent..."

# Navigate to agent directory and install dependencies
cd svelte-agent

if [ ! -f ".venv/bin/activate" ]; then
    print_status "Creating Python virtual environment..."
    uv venv
fi

print_status "Installing Python dependencies..."
uv sync

print_status "Python agent setup complete"

echo ""
echo "🌐 Setting up SvelteKit frontend..."

# Navigate to SvelteKit directory
cd ../mf-svelte

print_status "Installing Node.js dependencies..."
npm install

print_status "SvelteKit frontend setup complete"

echo ""
echo "⚙️ Configuration..."

# Check if .env file exists and has OpenAI key
cd ../svelte-agent
if [ ! -f ".env" ]; then
    print_error ".env file not found in svelte-agent directory"
    exit 1
fi

if ! grep -q "OPENAI_API_KEY=sk-" .env; then
    echo ""
    print_warning "OpenAI API key not set!"
    echo "Please edit svelte-agent/.env and add your OpenAI API key:"
    echo "  OPENAI_API_KEY=sk-your-actual-api-key-here"
    echo ""
    echo "You can get an API key from: https://platform.openai.com/api-keys"
    echo ""
fi

# Verify project path
SVELTEKIT_PATH=$(grep "SVELTEKIT_PROJECT_PATH" .env | cut -d '=' -f2)
if [ ! -d "$SVELTEKIT_PATH" ]; then
    print_warning "SvelteKit project path in .env may be incorrect"
    echo "Current path: $SVELTEKIT_PATH"
    echo "Please verify the SVELTEKIT_PROJECT_PATH in svelte-agent/.env"
    echo ""
fi

echo ""
echo "🚀 Setup Complete!"
echo "=================="
echo ""
echo "To start the AI agent system:"
echo ""
echo "1. Start the PydanticAI agent server:"
echo "   cd svelte-agent"
echo "   uv run dev"
echo "   (Server will start on http://localhost:9001)"
echo ""
echo "2. In another terminal, start the SvelteKit dev server:"
echo "   cd mf-svelte"
echo "   npm run dev"
echo "   (Frontend will start on http://localhost:5173)"
echo ""
echo "3. Visit the AI Agent interface:"
echo "   http://localhost:5173/ai-agent"
echo ""
echo "🔧 Agent Features:"
echo "• Project structure analysis"
echo "• Read/write SvelteKit files"
echo "• Create Svelte components"
echo "• List routes and components"
echo "• Real-time state updates"
echo "• Chat-based interaction"
echo ""

if ! grep -q "OPENAI_API_KEY=sk-" .env; then
    print_warning "Don't forget to set your OpenAI API key in svelte-agent/.env!"
fi

echo "Happy coding! 🎉"