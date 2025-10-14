<script lang="ts">
	import FeatureCard from '$lib/components/saas/FeatureCard.svelte';
	import Hero from '$lib/components/saas/Hero.svelte';
	import { features as mockFeatures } from '$lib/data/mockData';

	// Local tools features (kept for specificity)
	const localTools = [
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
			icon: '📈'
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

	// Data features that should be moved to tools
	const dataFeatures = [
		{
			title: 'OI, Volume Profile & Multi-Timeframe Charts',
			description: 'View Open Interest, Volume Profile, and charts at different timeframes for comprehensive market analysis.',
			category: 'Analytics',
			icon: '📊'
		},
		{
			title: 'Arkham Intel Bubble Maps & Transaction History',
			description: 'Explore Arkham Intel bubble maps and transaction history for deep blockchain insights.',
			category: 'On-Chain',
			icon: '🔎'
		},
		{
			title: 'Aggregated Crypto Data & Charts',
			description: 'Emulate DeFi Llama style aggregated cryptocurrency data and charts for funding rates, liquidation maps, and open interest.',
			category: 'Derivatives',
			icon: '📉'
		},
		{
			title: 'Cross-Chain Aggregated Order Book',
			description: 'View an order book aggregated across all chains and exchanges for complete market depth visibility.',
			category: 'Trading',
			icon: '📚'
		}
	];

	// Features from landing page
	const landingFeatures = [
		{
			title: 'How to Buy Crypto',
			description: 'Simple guide to purchasing your first cryptocurrency',
			category: 'Education',
			icon: '💰'
		},
		{
			title: 'Trading Strategies',
			description: 'Learn proven strategies from experienced traders',
			category: 'Education',
			icon: '📈'
		},
		{
			title: 'NFT Gallery',
			description: 'Discover and collect unique digital assets',
			category: 'NFTs',
			icon: '🎨'
		}
	];

	// Dashboard features that could be considered tools
	const dashboardFeatures = [
		{
			title: 'Infinite Scroll Effect',
			description: 'Seamlessly browse through unlimited data with smooth infinite scrolling.',
			category: 'UX',
			icon: '∞'
		},
		{
			title: 'Advanced Trading Charts',
			description: 'Professional-grade charts with custom workspace saving like TradingView.',
			category: 'Trading',
			icon: '📊'
		},
		{
			title: 'Real-time Portfolio Analytics',
			description: 'Deep dive into your portfolio performance with advanced analytics and insights.',
			category: 'Analytics',
			icon: '📈'
		}
	];

	// Combine and normalize features from all sources, dedupe by title
	function normalize(f: any) {
		return {
			id: f.id || f.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
			title: f.title,
			description: f.description,
			icon: f.icon || '⚙️',
			category: (f.category || 'tool').toLowerCase()
		};
	}

	const combined = [
		...mockFeatures.map(normalize), 
		...localTools.map(normalize), 
		...dataFeatures.map(normalize),
		...landingFeatures.map(normalize),
		...dashboardFeatures.map(normalize)
	];
	
	const dedupMap = new Map();
	combined.forEach((f) => {
		if (!dedupMap.has(f.id)) dedupMap.set(f.id, f);
	});
	const aggregatedFeatures = Array.from(dedupMap.values());
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Use the SaaS hero for consistent look-and-feel -->
	<Hero 
		title="Trading Tools & Analytics Suite" 
		subtitle="Comprehensive suite of tools for cryptocurrency trading, analysis, and portfolio management"
	/>

	<section class="mt-12">
		<div class="mb-6">
			<h2 class="text-3xl font-bold tracking-tight">All Tools & Features</h2>
			<p class="text-muted-foreground text-lg mt-2">An aggregated view of features and tools from across the site. Filter, explore, and discover capabilities for trading, analytics, and DeFi.</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each aggregatedFeatures as feature}
				<!-- prefer the full FeatureCard when available -->
				<FeatureCard {feature} />
			{/each}
		</div>
	</section>
</div>
