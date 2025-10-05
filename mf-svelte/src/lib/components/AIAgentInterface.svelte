<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { HttpAgent } from '@ag-ui/client';
	import type { RunAgentResult } from '@ag-ui/client';
	
	// Agent state interface
	interface AgentState {
		current_task: string;
		project_analysis?: {
			total_files: number;
			svelte_files: string[];
			ts_files: string[];
			js_files: string[];
			routes: string[];
			components: string[];
		};
		recent_operations: Array<{
			path: string;
			operation: string;
			content?: string;
			success: boolean;
			error?: string;
		}>;
		active_files: string[];
	}
	
	// Reactive stores
	export let agentUrl = 'http://localhost:9001/agent';
	let agent: HttpAgent;
	let isConnected = false;
	let isLoading = false;
	let error: string | null = null;
	let userMessage = '';
	let chatHistory: Array<{type: 'user' | 'agent', message: string, timestamp: Date}> = [];
	
	// Agent state store
	const agentState: Writable<AgentState | null> = writable(null);
	
	// Initialize agent connection
	onMount(() => {
		try {
			agent = new HttpAgent({
				url: agentUrl,
				headers: {
					'Accept': 'text/event-stream',
					'Content-Type': 'application/json'
				}
			});
			isConnected = true;
			console.log('🤖 Agent connected:', agentUrl);
		} catch (e) {
			error = `Failed to connect to agent: ${e}`;
			console.error(error);
		}
	});
	
	onDestroy(() => {
		if (agent) {
			agent.abortRun();
		}
	});
	
	// Send message to agent
	async function sendMessage() {
		if (!agent || !userMessage.trim()) return;
		
		isLoading = true;
		error = null;
		
		// Add user message to chat
		chatHistory = [...chatHistory, {
			type: 'user',
			message: userMessage.trim(),
			timestamp: new Date()
		}];
		
		const currentMessage = userMessage.trim();
		userMessage = '';
		
		try {
			const result = await agent.runAgent(
				{
					messages: [{ role: 'user', content: currentMessage }]
				},
				{
					onStateChange: (state) => {
						// Update agent state when it changes
						agentState.set(state as AgentState);
					},
					onMessageUpdate: (message) => {
						// Handle streaming message updates
						console.log('Agent message update:', message);
					}
				}
			);
			
			// Add agent response to chat
			if (result.newMessages && result.newMessages.length > 0) {
				const lastMessage = result.newMessages[result.newMessages.length - 1];
				if (lastMessage.role === 'assistant') {
					chatHistory = [...chatHistory, {
						type: 'agent',
						message: lastMessage.content || 'Response completed',
						timestamp: new Date()
					}];
				}
			}
			
		} catch (e) {
			error = `Agent error: ${e}`;
			console.error('Agent error:', e);
		} finally {
			isLoading = false;
		}
	}
	
	// Quick action functions
	async function analyzeProject() {
		userMessage = 'Analyze the project structure and show me all the routes and components';
		await sendMessage();
	}
	
	async function listRoutes() {
		userMessage = 'List all the route files in the project';
		await sendMessage();
	}
	
	async function createComponent() {
		userMessage = 'Create a new Svelte component called "EditableCard" that has props for title and content, and emits edit and delete events';
		await sendMessage();
	}
	
	// Handle enter key in textarea
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	}
	
	// Format timestamp
	function formatTime(date: Date): string {
		return date.toLocaleTimeString('en-US', { 
			hour12: false, 
			hour: '2-digit', 
			minute: '2-digit' 
		});
	}
</script>

<div class="agent-interface">
	<div class="header">
		<h2>🤖 SvelteKit AI Editor</h2>
		<div class="connection-status">
			{#if isConnected}
				<span class="status connected">● Connected</span>
			{:else}
				<span class="status disconnected">● Disconnected</span>
			{/if}
		</div>
	</div>
	
	{#if error}
		<div class="error">
			⚠️ {error}
		</div>
	{/if}
	
	<!-- Quick Actions -->
	<div class="quick-actions">
		<h3>Quick Actions</h3>
		<div class="action-buttons">
			<button 
				on:click={analyzeProject} 
				disabled={isLoading || !isConnected}
				class="action-btn analyze"
			>
				📊 Analyze Project
			</button>
			<button 
				on:click={listRoutes} 
				disabled={isLoading || !isConnected}
				class="action-btn routes"
			>
				🗂️ List Routes
			</button>
			<button 
				on:click={createComponent} 
				disabled={isLoading || !isConnected}
				class="action-btn component"
			>
				🧩 Create Component
			</button>
		</div>
	</div>
	
	<!-- Agent State Display -->
	{#if $agentState}
		<div class="agent-state">
			<h3>Agent State</h3>
			<div class="state-content">
				<div class="current-task">
					<strong>Current Task:</strong> {$agentState.current_task || 'Idle'}
				</div>
				
				{#if $agentState.project_analysis}
					<div class="project-analysis">
						<h4>Project Analysis</h4>
						<div class="analysis-grid">
							<div class="stat">
								<span class="label">Total Files:</span>
								<span class="value">{$agentState.project_analysis.total_files}</span>
							</div>
							<div class="stat">
								<span class="label">Routes:</span>
								<span class="value">{$agentState.project_analysis.routes?.length || 0}</span>
							</div>
							<div class="stat">
								<span class="label">Components:</span>
								<span class="value">{$agentState.project_analysis.components?.length || 0}</span>
							</div>
							<div class="stat">
								<span class="label">Svelte Files:</span>
								<span class="value">{$agentState.project_analysis.svelte_files?.length || 0}</span>
							</div>
						</div>
						
						{#if $agentState.project_analysis.routes?.length > 0}
							<div class="file-list">
								<h5>Routes:</h5>
								<ul>
									{#each $agentState.project_analysis.routes.slice(0, 5) as route}
										<li>{route}</li>
									{/each}
									{#if $agentState.project_analysis.routes.length > 5}
										<li class="more">... and {$agentState.project_analysis.routes.length - 5} more</li>
									{/if}
								</ul>
							</div>
						{/if}
					</div>
				{/if}
				
				{#if $agentState.active_files?.length > 0}
					<div class="active-files">
						<h4>Active Files</h4>
						<ul>
							{#each $agentState.active_files as file}
								<li>{file}</li>
							{/each}
						</ul>
					</div>
				{/if}
				
				{#if $agentState.recent_operations?.length > 0}
					<div class="recent-operations">
						<h4>Recent Operations</h4>
						{#each $agentState.recent_operations.slice(0, 3) as operation}
							<div class="operation" class:success={operation.success} class:error={!operation.success}>
								<div class="operation-header">
									<span class="op-type">{operation.operation.toUpperCase()}</span>
									<span class="file-path">{operation.path}</span>
									<span class="status-icon">{operation.success ? '✅' : '❌'}</span>
								</div>
								{#if operation.error}
									<div class="operation-error">{operation.error}</div>
								{/if}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
	
	<!-- Chat Interface -->
	<div class="chat-interface">
		<h3>Chat with AI Agent</h3>
		
		<div class="chat-history">
			{#each chatHistory as message}
				<div class="message {message.type}">
					<div class="message-header">
						<span class="sender">{message.type === 'user' ? '👤 You' : '🤖 Agent'}</span>
						<span class="timestamp">{formatTime(message.timestamp)}</span>
					</div>
					<div class="message-content">{message.message}</div>
				</div>
			{/each}
			
			{#if isLoading}
				<div class="message agent loading">
					<div class="message-header">
						<span class="sender">🤖 Agent</span>
						<span class="timestamp">Processing...</span>
					</div>
					<div class="message-content">
						<div class="loading-dots">
							<span></span><span></span><span></span>
						</div>
					</div>
				</div>
			{/if}
		</div>
		
		<div class="chat-input">
			<textarea
				bind:value={userMessage}
				on:keydown={handleKeydown}
				placeholder="Type your message to the AI agent... (Press Enter to send, Shift+Enter for new line)"
				rows="3"
				disabled={isLoading || !isConnected}
			></textarea>
			<button 
				on:click={sendMessage}
				disabled={isLoading || !isConnected || !userMessage.trim()}
				class="send-btn"
			>
				{isLoading ? '⏳' : '➤'} Send
			</button>
		</div>
	</div>
</div>

<style>
	.agent-interface {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		font-family: system-ui, sans-serif;
	}
	
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
		padding-bottom: 15px;
		border-bottom: 2px solid #e2e8f0;
	}
	
	.header h2 {
		margin: 0;
		color: #1a202c;
		font-size: 1.5rem;
	}
	
	.connection-status .status {
		font-weight: 500;
		padding: 4px 8px;
		border-radius: 12px;
		font-size: 0.875rem;
	}
	
	.status.connected {
		color: #059669;
		background-color: #d1fae5;
	}
	
	.status.disconnected {
		color: #dc2626;
		background-color: #fee2e2;
	}
	
	.error {
		background-color: #fef2f2;
		color: #dc2626;
		padding: 12px;
		border-radius: 6px;
		margin-bottom: 20px;
		border: 1px solid #fecaca;
	}
	
	.quick-actions {
		margin-bottom: 30px;
	}
	
	.quick-actions h3 {
		margin-bottom: 10px;
		color: #374151;
	}
	
	.action-buttons {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	
	.action-btn {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		padding: 10px 16px;
		border-radius: 6px;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s;
	}
	
	.action-btn:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
	}
	
	.action-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	
	.agent-state {
		background: #f8fafc;
		border-radius: 8px;
		padding: 20px;
		margin-bottom: 30px;
		border: 1px solid #e2e8f0;
	}
	
	.agent-state h3 {
		margin-top: 0;
		margin-bottom: 15px;
		color: #374151;
	}
	
	.current-task {
		background: white;
		padding: 10px;
		border-radius: 6px;
		margin-bottom: 15px;
		border-left: 4px solid #3b82f6;
	}
	
	.project-analysis {
		background: white;
		padding: 15px;
		border-radius: 6px;
		margin-bottom: 15px;
	}
	
	.analysis-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 10px;
		margin-bottom: 15px;
	}
	
	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		background: #f1f5f9;
		border-radius: 6px;
	}
	
	.stat .label {
		font-size: 0.75rem;
		color: #64748b;
		margin-bottom: 4px;
	}
	
	.stat .value {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1e293b;
	}
	
	.file-list, .active-files {
		background: white;
		padding: 15px;
		border-radius: 6px;
		margin-bottom: 10px;
	}
	
	.file-list h5, .active-files h4 {
		margin-top: 0;
		margin-bottom: 10px;
		color: #374151;
		font-size: 0.875rem;
	}
	
	.file-list ul, .active-files ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.file-list li, .active-files li {
		padding: 4px 0;
		font-family: monospace;
		font-size: 0.8rem;
		color: #4b5563;
	}
	
	.file-list li.more {
		color: #9ca3af;
		font-style: italic;
	}
	
	.recent-operations {
		background: white;
		padding: 15px;
		border-radius: 6px;
	}
	
	.recent-operations h4 {
		margin-top: 0;
		margin-bottom: 10px;
		color: #374151;
	}
	
	.operation {
		padding: 10px;
		border-radius: 4px;
		margin-bottom: 8px;
	}
	
	.operation.success {
		background: #f0fdf4;
		border-left: 3px solid #22c55e;
	}
	
	.operation.error {
		background: #fef2f2;
		border-left: 3px solid #ef4444;
	}
	
	.operation-header {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.875rem;
	}
	
	.op-type {
		background: #e2e8f0;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 600;
		font-size: 0.75rem;
	}
	
	.file-path {
		font-family: monospace;
		color: #4b5563;
	}
	
	.operation-error {
		margin-top: 4px;
		font-size: 0.75rem;
		color: #dc2626;
	}
	
	.chat-interface {
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		overflow: hidden;
	}
	
	.chat-interface h3 {
		margin: 0;
		padding: 15px 20px;
		background: #f8fafc;
		border-bottom: 1px solid #e2e8f0;
		color: #374151;
	}
	
	.chat-history {
		height: 400px;
		overflow-y: auto;
		padding: 20px;
	}
	
	.message {
		margin-bottom: 16px;
	}
	
	.message.user .message-content {
		background: #ddd6fe;
		color: #5b21b6;
		margin-left: 20px;
	}
	
	.message.agent .message-content {
		background: #e0f2fe;
		color: #0c4a6e;
		margin-right: 20px;
	}
	
	.message-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 6px;
		font-size: 0.8rem;
		color: #6b7280;
	}
	
	.message-content {
		padding: 12px 16px;
		border-radius: 12px;
		line-height: 1.5;
		white-space: pre-wrap;
	}
	
	.loading-dots {
		display: flex;
		gap: 4px;
	}
	
	.loading-dots span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #64748b;
		animation: loading 1.5s infinite;
	}
	
	.loading-dots span:nth-child(2) {
		animation-delay: 0.2s;
	}
	
	.loading-dots span:nth-child(3) {
		animation-delay: 0.4s;
	}
	
	@keyframes loading {
		0%, 60%, 100% {
			opacity: 0.3;
		}
		30% {
			opacity: 1;
		}
	}
	
	.chat-input {
		padding: 20px;
		border-top: 1px solid #e2e8f0;
		background: #f8fafc;
		display: flex;
		gap: 12px;
	}
	
	.chat-input textarea {
		flex: 1;
		border: 1px solid #d1d5db;
		border-radius: 6px;
		padding: 12px;
		font-family: inherit;
		font-size: 0.875rem;
		resize: vertical;
		min-height: 60px;
	}
	
	.chat-input textarea:focus {
		outline: none;
		border-color: #3b82f6;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}
	
	.send-btn {
		background: #3b82f6;
		color: white;
		border: none;
		border-radius: 6px;
		padding: 0 20px;
		cursor: pointer;
		font-weight: 500;
		transition: background 0.2s;
	}
	
	.send-btn:hover:not(:disabled) {
		background: #2563eb;
	}
	
	.send-btn:disabled {
		background: #9ca3af;
		cursor: not-allowed;
	}
</style>