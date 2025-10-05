"""
SvelteKit Editor Agent - PydanticAI agent for editing SvelteKit projects

This agent provides tools to read, analyze, and edit SvelteKit project files
using the AG-UI protocol for frontend-agent communication.
"""

from __future__ import annotations

import os
import asyncio
from pathlib import Path
from typing import Optional, Dict, Any, List
from pydantic import BaseModel, Field
from pydantic_ai import Agent, RunContext
from pydantic_ai.ag_ui import StateDeps
from ag_ui.core import StateSnapshotEvent, EventType
import aiofiles
from fastapi import FastAPI, HTTPException
import uvicorn
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
SVELTEKIT_PROJECT_PATH = os.getenv("SVELTEKIT_PROJECT_PATH", "/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte")
AGENT_NAME = os.getenv("AGENT_NAME", "sveltekit_editor")

class FileOperation(BaseModel):
    """Represents a file operation (read, write, delete)."""
    path: str = Field(description="Relative path to the file within the SvelteKit project")
    operation: str = Field(description="Operation type: 'read', 'write', 'delete', 'create'")
    content: Optional[str] = Field(default=None, description="File content for write operations")
    success: bool = Field(default=False, description="Whether the operation was successful")
    error: Optional[str] = Field(default=None, description="Error message if operation failed")

class ProjectAnalysis(BaseModel):
    """Analysis of the SvelteKit project structure."""
    total_files: int = Field(description="Total number of files in the project")
    svelte_files: List[str] = Field(default_factory=list, description="List of .svelte files")
    ts_files: List[str] = Field(default_factory=list, description="List of .ts files") 
    js_files: List[str] = Field(default_factory=list, description="List of .js files")
    routes: List[str] = Field(default_factory=list, description="List of route files")
    components: List[str] = Field(default_factory=list, description="List of component files")

class AgentState(BaseModel):
    """State for the SvelteKit editing agent."""
    current_task: str = Field(default="", description="Current task being performed")
    project_analysis: Optional[ProjectAnalysis] = Field(default=None, description="Project structure analysis")
    recent_operations: List[FileOperation] = Field(default_factory=list, description="Recent file operations")
    active_files: List[str] = Field(default_factory=list, description="Files currently being worked on")

# Initialize agent
agent = Agent('openai:gpt-4o-mini', deps_type=StateDeps[AgentState])

@agent.tool_plain
async def analyze_project_structure() -> StateSnapshotEvent:
    """Analyze the SvelteKit project structure and return file information."""
    try:
        project_path = Path(SVELTEKIT_PROJECT_PATH)
        
        if not project_path.exists():
            raise FileNotFoundError(f"SvelteKit project not found at {SVELTEKIT_PROJECT_PATH}")
        
        svelte_files = []
        ts_files = []
        js_files = []
        routes = []
        components = []
        total_files = 0
        
        # Walk through the project directory
        for file_path in project_path.rglob("*"):
            if file_path.is_file():
                total_files += 1
                relative_path = str(file_path.relative_to(project_path))
                
                # Skip node_modules and .svelte-kit directories
                if "node_modules" in relative_path or ".svelte-kit" in relative_path:
                    continue
                
                if file_path.suffix == ".svelte":
                    svelte_files.append(relative_path)
                    if "src/routes" in relative_path:
                        routes.append(relative_path)
                    elif "src/lib/components" in relative_path:
                        components.append(relative_path)
                elif file_path.suffix == ".ts":
                    ts_files.append(relative_path)
                elif file_path.suffix == ".js":
                    js_files.append(relative_path)
        
        analysis = ProjectAnalysis(
            total_files=total_files,
            svelte_files=svelte_files[:20],  # Limit to first 20 for display
            ts_files=ts_files[:10],  # Limit to first 10
            js_files=js_files[:10],  # Limit to first 10
            routes=routes,
            components=components
        )
        
        updated_state = {
            "current_task": "Project analysis completed",
            "project_analysis": analysis.model_dump()
        }
        
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )
        
    except Exception as e:
        updated_state = {
            "current_task": f"Project analysis failed: {str(e)}"
        }
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )

@agent.tool_plain
async def read_file(file_path: str) -> StateSnapshotEvent:
    """Read the contents of a file in the SvelteKit project."""
    try:
        project_path = Path(SVELTEKIT_PROJECT_PATH)
        full_path = project_path / file_path
        
        # Security check - ensure file is within project directory
        if not str(full_path.resolve()).startswith(str(project_path.resolve())):
            raise ValueError("File path is outside the project directory")
        
        if not full_path.exists():
            raise FileNotFoundError(f"File not found: {file_path}")
        
        async with aiofiles.open(full_path, 'r', encoding='utf-8') as f:
            content = await f.read()
        
        operation = FileOperation(
            path=file_path,
            operation="read",
            content=content[:2000] + "..." if len(content) > 2000 else content,  # Truncate for display
            success=True
        )
        
        updated_state = {
            "current_task": f"Read file: {file_path}",
            "recent_operations": [operation.model_dump()],
            "active_files": [file_path]
        }
        
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )
        
    except Exception as e:
        operation = FileOperation(
            path=file_path,
            operation="read",
            success=False,
            error=str(e)
        )
        
        updated_state = {
            "current_task": f"Failed to read file: {file_path}",
            "recent_operations": [operation.model_dump()]
        }
        
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )

@agent.tool_plain
async def write_file(file_path: str, content: str) -> StateSnapshotEvent:
    """Write content to a file in the SvelteKit project."""
    try:
        project_path = Path(SVELTEKIT_PROJECT_PATH)
        full_path = project_path / file_path
        
        # Security check - ensure file is within project directory
        if not str(full_path.resolve()).startswith(str(project_path.resolve())):
            raise ValueError("File path is outside the project directory")
        
        # Create directory if it doesn't exist
        full_path.parent.mkdir(parents=True, exist_ok=True)
        
        async with aiofiles.open(full_path, 'w', encoding='utf-8') as f:
            await f.write(content)
        
        operation = FileOperation(
            path=file_path,
            operation="write",
            content=content[:500] + "..." if len(content) > 500 else content,  # Truncate for display
            success=True
        )
        
        updated_state = {
            "current_task": f"Wrote file: {file_path}",
            "recent_operations": [operation.model_dump()],
            "active_files": [file_path]
        }
        
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )
        
    except Exception as e:
        operation = FileOperation(
            path=file_path,
            operation="write", 
            success=False,
            error=str(e)
        )
        
        updated_state = {
            "current_task": f"Failed to write file: {file_path}",
            "recent_operations": [operation.model_dump()]
        }
        
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )

@agent.tool_plain
async def list_route_files() -> StateSnapshotEvent:
    """List all route files in the SvelteKit src/routes directory."""
    try:
        project_path = Path(SVELTEKIT_PROJECT_PATH)
        routes_path = project_path / "src" / "routes"
        
        if not routes_path.exists():
            raise FileNotFoundError("Routes directory not found")
        
        route_files = []
        for file_path in routes_path.rglob("*.svelte"):
            relative_path = str(file_path.relative_to(project_path))
            route_files.append(relative_path)
        
        updated_state = {
            "current_task": f"Listed {len(route_files)} route files",
            "active_files": route_files[:10]  # Show first 10 files
        }
        
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )
        
    except Exception as e:
        updated_state = {
            "current_task": f"Failed to list route files: {str(e)}"
        }
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )

@agent.tool_plain
async def create_svelte_component(component_name: str, component_content: str) -> StateSnapshotEvent:
    """Create a new Svelte component in the components directory."""
    try:
        # Ensure component name ends with .svelte
        if not component_name.endswith('.svelte'):
            component_name += '.svelte'
        
        file_path = f"src/lib/components/{component_name}"
        
        # Use the write_file tool to create the component
        result = await write_file(file_path, component_content)
        
        # Update the result to reflect component creation
        updated_state = result.snapshot.copy()
        updated_state["current_task"] = f"Created Svelte component: {component_name}"
        
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )
        
    except Exception as e:
        updated_state = {
            "current_task": f"Failed to create component {component_name}: {str(e)}"
        }
        return StateSnapshotEvent(
            type=EventType.STATE_SNAPSHOT,
            snapshot=updated_state
        )

# Create AG-UI app
app = agent.to_ag_ui(deps=StateDeps(AgentState()))

# FastAPI setup
fastapi_app = FastAPI(title='SvelteKit Editor Agent')
fastapi_app.mount('/agent', app, 'SvelteKit Editor Agent')

@fastapi_app.get('/health')
def health():
    """Health check endpoint."""
    return {"status": "ok", "agent": AGENT_NAME, "project_path": SVELTEKIT_PROJECT_PATH}

def main():
    """Main function to start the FastAPI server."""
    port = int(os.getenv("PORT", "9001"))
    host = os.getenv("HOST", "0.0.0.0")
    
    print(f"🚀 Starting SvelteKit Editor Agent on {host}:{port}")
    print(f"📁 SvelteKit Project Path: {SVELTEKIT_PROJECT_PATH}")
    print(f"🤖 Agent Name: {AGENT_NAME}")
    print(f"🔗 Agent Endpoint: http://{host}:{port}/agent")
    print(f"❤️ Health Check: http://{host}:{port}/health")
    
    uvicorn.run(fastapi_app, host=host, port=port)

if __name__ == "__main__":
    main()

__all__ = ["main", "agent", "fastapi_app"]