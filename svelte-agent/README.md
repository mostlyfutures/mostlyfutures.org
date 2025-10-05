# SvelteKit Editor Agent

A PydanticAI agent for editing SvelteKit projects using the AG-UI protocol.

## Features

- **Project Analysis**: Analyze SvelteKit project structure and file organization
- **File Operations**: Read, write, and create files within the SvelteKit project
- **Component Creation**: Create new Svelte components with proper structure
- **Route Management**: List and manage SvelteKit route files
- **Real-time State**: Track agent operations and project changes in real-time

## Setup

1. **Install Dependencies**:
   ```bash
   cd svelte-agent
   uv sync
   ```

2. **Configure Environment**:
   ```bash
   # Edit .env file and add your OpenAI API key
   OPENAI_API_KEY=sk-your-actual-openai-api-key-here
   ```

3. **Update Project Path** (if needed):
   ```bash
   # In .env file, update the path to your SvelteKit project
   SVELTEKIT_PROJECT_PATH=/path/to/your/sveltekit/project
   ```

## Usage

1. **Start the Agent Server**:
   ```bash
   uv run dev
   ```

2. **Agent Endpoints**:
   - Agent: `http://localhost:9001/agent`
   - Health Check: `http://localhost:9001/health`

## Agent Tools

The agent provides the following tools for SvelteKit project editing:

### `analyze_project_structure()`
Analyzes the entire SvelteKit project and returns:
- Total file count
- Svelte files list
- TypeScript/JavaScript files
- Route files
- Component files

### `read_file(file_path: str)`
Reads the contents of any file in the project.
- **Parameters**: `file_path` - Relative path from project root
- **Returns**: File content and operation status

### `write_file(file_path: str, content: str)`
Writes content to a file in the project.
- **Parameters**: 
  - `file_path` - Relative path from project root
  - `content` - Content to write to the file
- **Security**: Automatically validates paths are within project directory

### `list_route_files()`
Lists all route files in the `src/routes` directory.
- **Returns**: Array of route file paths

### `create_svelte_component(component_name: str, component_content: str)`
Creates a new Svelte component in the components directory.
- **Parameters**:
  - `component_name` - Name of the component (automatically adds .svelte extension)
  - `component_content` - Svelte component code
- **Location**: Saves to `src/lib/components/`

## Frontend Integration

To integrate with a frontend application:

1. **Install AG-UI Client**:
   ```bash
   npm install @ag-ui/client
   ```

2. **Use HttpAgent to Connect**:
   ```typescript
   import { HttpAgent } from '@ag-ui/client';
   
   const agent = new HttpAgent({
     url: 'http://localhost:9001/agent',
     headers: {}
   });
   ```

3. **Run Agent with Parameters**:
   ```typescript
   const result = await agent.runAgent({
     userMessage: "Analyze the project structure and create a new component"
   });
   ```

## Example Integration

See the `frontend-example` directory for a complete example of integrating the agent with a web application.

## Security

- All file operations are validated to ensure they stay within the SvelteKit project directory
- Environment variables are required for OpenAI API access
- Agent only operates on the configured project path

## Troubleshooting

1. **OpenAI API Key Error**: Make sure you've set a valid `OPENAI_API_KEY` in the `.env` file
2. **Project Path Error**: Verify the `SVELTEKIT_PROJECT_PATH` points to a valid SvelteKit project
3. **Permission Errors**: Ensure the agent has read/write permissions to the project directory