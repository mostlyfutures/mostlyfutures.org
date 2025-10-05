# 🤖 SvelteKit AI Agent Integration

A complete integration of **PydanticAI** + **AG-UI Protocol** + **SvelteKit** that enables AI-powered editing of your SvelteKit project in real-time.

## 🎯 What This Solves

You wanted to use **CopilotKit with PydanticAI and ag-ui** to edit your SvelteKit project. However, CopilotKit is React-specific. This solution provides:

- ✅ **Framework-Agnostic Integration**: Uses AG-UI client directly with SvelteKit
- ✅ **PydanticAI Backend**: Python agent with OpenAI integration
- ✅ **Real-time Communication**: WebSocket-like event streaming
- ✅ **File Editing Capabilities**: Read, write, create, and analyze project files
- ✅ **Visual Interface**: Beautiful Svelte UI for agent interaction

## 🏗️ Architecture

```
┌─────────────────┐    HTTP/AG-UI     ┌─────────────────┐    File I/O    ┌─────────────────┐
│                 │ ◄─────────────── │                 │ ◄──────────── │                 │
│  SvelteKit      │                  │  PydanticAI     │               │  mf-svelte/     │
│  Frontend       │                  │  Agent Server   │               │  (Your Project) │
│  :5173/ai-agent │ ─────────────── ► │  :9001/agent    │ ──────────── ► │                 │
│                 │    AG-UI Events   │                 │   Read/Write   │                 │
└─────────────────┘                  └─────────────────┘                └─────────────────┘
```

## 🚀 Quick Start

### 1. Automated Setup

```bash
# Run the setup script (recommended)
./setup-ai-agent.sh
```

### 2. Manual Setup

**Backend (PydanticAI Agent):**
```bash
cd svelte-agent
uv sync
# Edit .env and add your OpenAI API key
echo "OPENAI_API_KEY=sk-your-key-here" >> .env
uv run dev  # Starts on http://localhost:9001
```

**Frontend (SvelteKit):**
```bash
cd mf-svelte  
npm install
npm run dev  # Starts on http://localhost:5173
```

### 3. Access the AI Agent

Visit: **http://localhost:5173/ai-agent**

## 🔧 Agent Capabilities

### File Operations
- **`analyze_project_structure()`** - Scan and analyze the entire SvelteKit project
- **`read_file(path)`** - Read any file in the project
- **`write_file(path, content)`** - Write/update files with new content
- **`list_route_files()`** - List all route files in src/routes
- **`create_svelte_component(name, content)`** - Create new components

### Security Features
- ✅ Path validation (prevents directory traversal)
- ✅ Project boundary enforcement
- ✅ File type restrictions
- ✅ Content length limits for UI display

### State Management
- Real-time agent state updates
- Operation history tracking
- Active file monitoring
- Error handling and reporting

## 💬 Usage Examples

### Natural Language Commands

**"Analyze my project structure"**
→ Scans all files, shows routes/components count

**"Read the main layout file"**  
→ Displays content of `src/routes/+layout.svelte`

**"Create a new component called UserCard that displays user info"**
→ Generates and saves a new Svelte component

**"List all my route files"**
→ Shows all files in `src/routes/`

**"Update the navigation to include a new link"**
→ Modifies the Navigation component

### Quick Actions (One-Click)
- 📊 **Analyze Project** - Full project structure scan
- 🗂️ **List Routes** - Show all route files
- 🧩 **Create Component** - Generate example component

## 🎨 Frontend Features

### Real-time Agent State
- Current task display
- Project analysis metrics (file counts, routes, components)
- Recent operations with success/error status
- Active files being worked on

### Interactive Chat
- Natural language queries
- Streaming responses
- Operation history
- Error handling

### Visual Feedback
- Connection status indicator
- Loading states
- Success/error styling
- Professional dark/light theme

## 🔌 Technical Integration

### AG-UI Client (SvelteKit)
```typescript
import { HttpAgent } from '@ag-ui/client';

const agent = new HttpAgent({
  url: 'http://localhost:9001/agent',
  headers: {}
});

// Run agent with message
const result = await agent.runAgent({
  userMessage: "Your command here"
});
```

### PydanticAI Agent (Python)
```python
from pydantic_ai import Agent
from pydantic_ai.ag_ui import StateDeps

agent = Agent('openai:gpt-4o-mini', deps_type=StateDeps[AgentState])

@agent.tool_plain
async def your_tool(param: str) -> StateSnapshotEvent:
    # Your logic here
    return StateSnapshotEvent(...)

app = agent.to_ag_ui(deps=StateDeps(AgentState()))
```

## 📂 File Structure

```
mostlyfutures.org/
├── svelte-agent/                    # PydanticAI Backend
│   ├── .env                        # Environment config
│   ├── pyproject.toml              # Python dependencies
│   ├── sveltekit_editor_agent.py   # Main agent code
│   └── README.md                   # Agent documentation
│
├── mf-svelte/                      # SvelteKit Frontend  
│   ├── src/
│   │   ├── routes/ai-agent/        # AI agent page
│   │   └── lib/components/
│   │       └── AIAgentInterface.svelte  # Main UI component
│   └── package.json                # Node dependencies (includes @ag-ui/client)
│
└── setup-ai-agent.sh              # Automated setup script
```

## 🔑 Environment Variables

**svelte-agent/.env:**
```bash
# Required
OPENAI_API_KEY=sk-your-openai-api-key-here

# Server Config  
PORT=9001
HOST=0.0.0.0

# Project Path
SVELTEKIT_PROJECT_PATH=/path/to/your/mf-svelte

# Agent Config
AGENT_NAME=sveltekit_editor
DEBUG=true
```

## 🚨 Troubleshooting

### Common Issues

**Agent won't start:**
- ✅ Check OpenAI API key is set in `.env`
- ✅ Verify Python dependencies: `cd svelte-agent && uv sync`
- ✅ Check port 9001 isn't in use

**Frontend can't connect:**
- ✅ Ensure agent server is running on port 9001
- ✅ Check browser console for CORS errors
- ✅ Verify AG-UI client is installed: `npm list @ag-ui/client`

**File operations fail:**
- ✅ Check `SVELTEKIT_PROJECT_PATH` in agent `.env`
- ✅ Verify file permissions
- ✅ Ensure paths stay within project directory

### Debug Mode

Set `DEBUG=true` in `svelte-agent/.env` for detailed logging.

## 🔄 Comparison with CopilotKit

| Feature | CopilotKit + PydanticAI | Our Solution |
|---------|------------------------|--------------|
| Framework Support | React Only | Any Framework (Svelte, Vue, Angular, etc.) |
| Agent Backend | PydanticAI ✅ | PydanticAI ✅ |  
| Protocol | Custom | AG-UI Standard |
| Real-time Updates | ✅ | ✅ |
| File Operations | Limited | Full File System Access |
| Setup Complexity | High | Automated Script |

## 🎯 Next Steps

1. **Add Your OpenAI API Key** to `svelte-agent/.env`
2. **Run the Setup Script**: `./setup-ai-agent.sh`
3. **Start Both Servers** (agent + SvelteKit)
4. **Visit** http://localhost:5173/ai-agent
5. **Start Chatting** with your AI agent!

## 🤝 Support

Need help? The agent can help you:
- Analyze your project structure
- Create new Svelte components  
- Read and modify existing files
- Understand your codebase organization

Just ask in natural language! The AI understands commands like:
- "Show me all my route files"
- "Create a new component for displaying user profiles"
- "Read the main navigation component"
- "Update this file with new content"

---

**Built with:** PydanticAI • AG-UI Protocol • SvelteKit • FastAPI • OpenAI GPT-4o-mini