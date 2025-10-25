<script lang="ts">
	import AIAgentInterface from '$lib/components/AIAgentInterface.svelte';
</script>

<svelte:head>
	<title>AI Agent | MostlyFutures</title>
	<meta name="description" content="AI-powered SvelteKit project editor using PydanticAI and AG-UI protocol" />
</svelte:head>

<div class="ai-agent-page">
	<header class="page-header">
		<div class="container">
			<h1>🤖 AI Project Editor</h1>
			<p class="description">
				Interact with an AI agent that can analyze, read, and edit this SvelteKit project in real-time.
				The agent uses PydanticAI and the AG-UI protocol for seamless frontend-backend communication.
			</p>
		</div>
	</header>

	<main class="main-content">
		<div class="container">
			<AIAgentInterface agentUrl="http://localhost:9001/agent" />
		</div>
	</main>
</div>

<style>
	.ai-agent-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	}

	.page-header {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding: 40px 0;
		color: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.page-header h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 15px;
		text-align: center;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	.description {
		font-size: 1.2rem;
		text-align: center;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.main-content {
		padding: 40px 0;
	}

	.main-content .container {
		background: white;
		border-radius: 12px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		min-height: 600px;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.description {
			font-size: 1rem;
		}

		.page-header {
			padding: 30px 0;
		}

		.main-content {
			padding: 20px 0;
		}

		.container {
			padding: 0 15px;
		}
	}
</style>