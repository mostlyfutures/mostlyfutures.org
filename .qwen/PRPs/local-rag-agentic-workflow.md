---
name: "Local RAG Agentic Workflow - Free LLM Integration"
description: "PRP for building a RAG agentic workflow that connects to local LLMs (Qwen/Deepseek) on home server, with dynamic MCP tool management and automatic knowledge base enhancement"
---

## Original Story

Build a RAG agentic workflow system that:
- Connects to local LLMs like Qwen or Deepseek running on a home server
- Allows dynamic addition/removal of MCP tools at runtime
- Provides knowledge base management (add/remove content)
- Includes automatic background research and knowledge base enhancement
- Uses only free/open-source components (no paid APIs)
- Runs entirely on local infrastructure

## Story Metadata

**Story Type**: Feature
**Estimated Complexity**: High
**Primary Systems Affected**: MCP Server, Local LLM Integration, Knowledge Base, Background Processing

---

## CONTEXT REFERENCES

[Auto-discovered documentation and patterns]

- `/Users/gdove/Desktop/zeda/context-engineering-intro/use-cases/mcp-server/` - Existing MCP server implementation patterns
- `/Users/gdove/Desktop/zeda/PRPs-agentic-eng/PRPs/crypto-analytics-dashboard.md` - Similar agentic workflow structure
- `https://ollama.ai/` - Local LLM serving documentation
- `https://github.com/QwenLM/Qwen` - Qwen model documentation
- `https://github.com/deepseek-ai/DeepSeek-LLM` - Deepseek model documentation
- `/Users/gdove/Desktop/zeda/PRPs-agentic-eng/PRPs/templates/prp_story_task.md` - PRP template structure

---

## IMPLEMENTATION TASKS

[Task blocks in dependency order - each block is atomic and testable]

### SETUP src/local_llm_integration.py:

- IMPLEMENT: LocalLLMClient class for connecting to Ollama/Qwen/Deepseek servers
- PATTERN: Follow existing MCP server connection patterns in mcp-server/src/
- IMPORTS: import aiohttp, asyncio, json, typing
- GOTCHA: Handle connection timeouts and model loading states
- **VALIDATE**: `python -c "from src.local_llm_integration import LocalLLMClient; print('✓ Import successful')"`

### CREATE src/rag_engine.py:

- IMPLEMENT: RAGEngine class with vector storage and retrieval
- PATTERN: Use FAISS or ChromaDB for vector operations (free alternatives)
- IMPORTS: import faiss, numpy, sentence_transformers
- GOTCHA: Handle embedding model loading and dimension mismatches
- **VALIDATE**: `python -c "from src.rag_engine import RAGEngine; engine = RAGEngine(); print('✓ RAG engine initialized')"`

### CREATE src/mcp_tool_manager.py:

- IMPLEMENT: MCPToolManager class for dynamic tool addition/removal
- PATTERN: Follow MCP protocol specifications for tool registration
- IMPORTS: import asyncio, typing, json
- GOTCHA: Validate tool schemas before registration
- **VALIDATE**: `python -c "from src.mcp_tool_manager import MCPToolManager; mgr = MCPToolManager(); print('✓ Tool manager initialized')"`

### CREATE src/knowledge_base_manager.py:

- IMPLEMENT: KnowledgeBaseManager class for content CRUD operations
- PATTERN: Integrate with RAGEngine for automatic indexing
- IMPORTS: import os, pathlib, typing
- GOTCHA: Handle different file formats (txt, md, pdf) with appropriate parsers
- **VALIDATE**: `python -c "from src.knowledge_base_manager import KnowledgeBaseManager; kb = KnowledgeBaseManager(); print('✓ KB manager initialized')"`

### CREATE src/auto_research_agent.py:

- IMPLEMENT: AutoResearchAgent class for background knowledge enhancement
- PATTERN: Use local LLM for research planning and execution
- IMPORTS: import asyncio, aiohttp, bs4, newspaper3k (free web scraping)
- GOTCHA: Implement rate limiting and respect robots.txt
- **VALIDATE**: `python -c "from src.auto_research_agent import AutoResearchAgent; agent = AutoResearchAgent(); print('✓ Research agent initialized')"`

### CREATE src/agentic_workflow.py:

- IMPLEMENT: AgenticWorkflow orchestrator class
- PATTERN: Combine all components with async task management
- IMPORTS: import asyncio, logging, typing
- GOTCHA: Handle component failures gracefully with fallback modes
- **VALIDATE**: `python -c "from src.agentic_workflow import AgenticWorkflow; wf = AgenticWorkflow(); print('✓ Workflow initialized')"`

### CREATE src/api/routes.py:

- IMPLEMENT: FastAPI routes for workflow management
- PATTERN: Follow existing API patterns in mcp-server
- IMPORTS: from fastapi import FastAPI, HTTPException; from src.agentic_workflow import AgenticWorkflow
- GOTCHA: Implement proper error handling and response formatting
- **VALIDATE**: `python -c "from src.api.routes import app; print('✓ API routes loaded')"`

### CREATE src/background_tasks.py:

- IMPLEMENT: Background task scheduler for auto-research
- PATTERN: Use APScheduler for cron-like task management
- IMPORTS: from apscheduler.schedulers.asyncio import AsyncIOScheduler
- GOTCHA: Handle task overlaps and resource constraints
- **VALIDATE**: `python -c "from src.background_tasks import setup_scheduler; print('✓ Background tasks configured')"`

### CREATE config/local_llm_config.yaml:

- IMPLEMENT: Configuration for different local LLM setups
- PATTERN: YAML configuration with environment variable support
- GOTCHA: Include fallback configurations for different hardware setups
- **VALIDATE**: `python -c "import yaml; config = yaml.safe_load(open('config/local_llm_config.yaml')); print('✓ Config loaded')"`

### CREATE tests/test_local_llm_integration.py:

- IMPLEMENT: Unit tests for LLM connectivity
- PATTERN: Mock HTTP responses for testing
- IMPORTS: import pytest, unittest.mock
- GOTCHA: Test both success and failure scenarios
- **VALIDATE**: `pytest tests/test_local_llm_integration.py -v`

### CREATE tests/test_rag_engine.py:

- IMPLEMENT: Unit tests for RAG functionality
- PATTERN: Test vector operations and retrieval accuracy
- IMPORTS: import pytest, numpy
- GOTCHA: Test with various document sizes and types
- **VALIDATE**: `pytest tests/test_rag_engine.py -v`

### CREATE tests/test_mcp_tool_manager.py:

- IMPLEMENT: Unit tests for dynamic tool management
- PATTERN: Test tool registration and removal
- IMPORTS: import pytest, unittest.mock
- GOTCHA: Test schema validation and error handling
- **VALIDATE**: `pytest tests/test_mcp_tool_manager.py -v`

### CREATE tests/test_auto_research.py:

- IMPLEMENT: Unit tests for background research
- PATTERN: Mock web scraping and LLM responses
- IMPORTS: import pytest, unittest.mock
- GOTCHA: Test rate limiting and content filtering
- **VALIDATE**: `pytest tests/test_auto_research.py -v`

### CREATE docker-compose.yml:

- IMPLEMENT: Container setup for local LLM serving
- PATTERN: Use Ollama containers with GPU support
- GOTCHA: Include resource limits and volume mounts
- **VALIDATE**: `docker-compose config`

### CREATE README.md:

- IMPLEMENT: Comprehensive setup and usage documentation
- PATTERN: Include hardware requirements and troubleshooting
- GOTCHA: Document all free alternatives and setup steps
- **VALIDATE**: `markdownlint README.md`

### UPDATE pyproject.toml:

- ADD: All required dependencies (free/open-source only)
- PATTERN: Use poetry/pyproject for dependency management
- GOTCHA: Pin versions for stability, exclude paid services
- **VALIDATE**: `poetry check`

---

## Validation Loop

### Level 1: Syntax & Style (Immediate Feedback)

```bash
# Run after each file creation - fix before proceeding
ruff check src/ --fix     # Auto-format and fix linting issues
mypy src/                 # Type checking
ruff format src/          # Ensure consistent formatting

# Expected: Zero errors. If errors exist, READ output and fix before proceeding.
```

### Level 2: Unit Tests (Component Validation)

```bash
# Test each component as it's created
pytest tests/test_local_llm_integration.py -v
pytest tests/test_rag_engine.py -v
pytest tests/test_mcp_tool_manager.py -v
pytest tests/test_auto_research.py -v

# Full test suite
pytest tests/ -v --cov=src --cov-report=term-missing

# Expected: All tests pass. If failing, debug root cause and fix implementation.
```

### Level 3: Integration Testing (System Validation)

```bash
# Start Ollama container (if using Docker)
docker-compose up ollama -d

# Wait for model to load
sleep 30

# Start the workflow service
python -m src.main

# Test LLM connectivity
curl -X POST http://localhost:8000/api/llm/test \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'

# Test RAG functionality
curl -X POST http://localhost:8000/api/rag/search \
  -H "Content-Type: application/json" \
  -d '{"query": "test query"}'

# Test MCP tool management
curl -X POST http://localhost:8000/api/tools/add \
  -H "Content-Type: application/json" \
  -d '{"tool": {"name": "test_tool", "schema": {}}}'

# Expected: All endpoints return success responses
```

### Level 4: End-to-End Validation

```bash
# Full workflow test
curl -X POST http://localhost:8000/api/workflow/run \
  -H "Content-Type: application/json" \
  -d '{
    "task": "Research local LLM best practices",
    "use_rag": true,
    "auto_enhance_kb": true
  }'

# Check knowledge base growth
curl http://localhost:8000/api/knowledge/stats

# Test background research
sleep 300  # Wait for background task
curl http://localhost:8000/api/knowledge/stats

# Expected: Workflow completes, knowledge base grows automatically
```

---

## COMPLETION CHECKLIST

- [ ] All core components implemented and tested
- [ ] Local LLM integration working (Qwen/Deepseek/Ollama)
- [ ] RAG engine functional with vector search
- [ ] Dynamic MCP tool management operational
- [ ] Knowledge base CRUD operations working
- [ ] Auto-research background process running
- [ ] Full workflow orchestration functional
- [ ] API endpoints responding correctly
- [ ] Docker container setup complete
- [ ] Documentation comprehensive
- [ ] All tests passing
- [ ] No paid API dependencies

---

## Notes

**Free/Open-Source Dependencies Only:**
- Ollama (local LLM serving)
- Qwen/Deepseek models (open-source)
- FAISS/ChromaDB (vector databases)
- Sentence Transformers (embeddings)
- Newspaper3k/BeautifulSoup (web scraping)
- FastAPI (web framework)
- APScheduler (background tasks)

**Hardware Requirements:**
- GPU recommended for local LLM inference
- 16GB+ RAM for larger models
- SSD storage for knowledge base

**Security Considerations:**
- Local network only (no external exposure)
- Input validation on all API endpoints
- Rate limiting for research operations

**Scalability Notes:**
- Start with smaller models (7B parameters)
- Implement model switching for different tasks
- Cache embeddings to reduce computation

**Future Enhancements:**
- Multi-model support (switch between Qwen/Deepseek)
- Advanced RAG techniques (HyDE, query expansion)
- Plugin system for additional research sources
- Knowledge base versioning and rollback</content>
<parameter name="filePath">/Users/gdove/Desktop/zeda/PRPs-agentic-eng/PRPs/local-rag-agentic-workflow.md