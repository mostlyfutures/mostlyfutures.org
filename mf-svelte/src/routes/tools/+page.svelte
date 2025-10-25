<script lang="ts">
	import ComingSoonCard from '$lib/components/ComingSoonCard.svelte';

	const toolsFeatures = [
		{
			title: 'Decentralized Persistent & Mutable RAGs',
			description: 'Decentralized Retrieval-Augmented Generation knowledge bases that are persistent and mutable, available for sale.',
			category: 'AI/ML',
			icon: '🤖'
		},
		{
			title: 'Decentralized ZK Persistent RAGs',
			description: 'Zero-Knowledge proof based persistent RAG systems for private and secure knowledge management.',
			category: 'Privacy',
			icon: '🔐'
		},
		{
			title: 'RAG Knowledge Based Pinning SaaS',
			description: 'Software-as-a-Service platform for pinning and managing RAG knowledge bases in a decentralized manner.',
			category: 'Infrastructure',
			icon: '📌'
		},
		{
			title: 'ZK-Based Escrow Service',
			description: 'Zero-Knowledge based escrow service for secure exchange of any goods. May integrate X402 protocol.',
			category: 'DeFi',
			icon: '🛡️'
		},
		{
			title: 'Crypto Lending & Collateral Platform',
			description: 'Lend out any crypto and use it as collateral to borrow any cryptocurrency, stablecoin, or stock.',
			category: 'DeFi',
			icon: '💰'
		},
		{
			title: 'ZK Forum',
			description: 'Privacy-focused anonymous forum powered by Zero-Knowledge proofs.',
			category: 'Social',
			icon: '💬'
		},
		{
			title: 'Trading Charts with Persistent Workspace',
			description: 'TradingView-style charts that save your edits and workspace configurations.',
			category: 'Trading',
			icon: '📉'
		},
		{
			title: 'ZK Photo Storage GUI',
			description: 'User-friendly interface for storing photos with Zero-Knowledge privacy guarantees.',
			category: 'Storage',
			icon: '📷'
		},
		{
			title: 'ZK Coordinate Saver',
			description: 'Privacy-preserving location and coordinate storage system with ZK proofs.',
			category: 'Privacy',
			icon: '📍'
		}
	];
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mb-12">
		<h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-tufts-blue to-jordy-blue bg-clip-text text-transparent">
			Tools
		</h1>
		<p class="text-lg text-muted-foreground">
			Cutting-edge decentralized tools, ZK-powered privacy solutions, and DeFi infrastructure for the next generation of web3.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each toolsFeatures as feature}
			<ComingSoonCard
				title={feature.title}
				description={feature.description}
				category={feature.category}
				icon={feature.icon}
			/>
		{/each}
	</div>
</div>
