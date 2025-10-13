<script lang="ts">
	import ComingSoonCard from '$lib/components/ComingSoonCard.svelte';

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
			icon: '🔍'
		},
		{
			title: 'Aggregated Crypto Data & Charts',
			description: 'Emulate DeFi Llama style aggregated cryptocurrency data and charts for funding rates, liquidation maps, and open interest.',
			category: 'Derivatives',
			icon: '📈'
		},
		{
			title: 'Cross-Chain Aggregated Order Book',
			description: 'View an order book aggregated across all chains and exchanges for complete market depth visibility.',
			category: 'Trading',
			icon: '📖'
		},
		{
			title: 'Pre-IPO Companies Data',
			description: 'Access Pre-IPO company information and stock chart price data.',
			category: 'Equities',
			icon: '🏢'
		},
		{
			title: 'Prediction Market Data Aggregation',
			description: 'View aggregated prediction market data including odds of rate cuts and other macro events.',
			category: 'Predictions',
			icon: '🎯'
		}
	];
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mb-12">
		<h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-tufts-blue to-jordy-blue bg-clip-text text-transparent">
			Data
		</h1>
		<p class="text-lg text-muted-foreground">
			Comprehensive market data, analytics, and insights across crypto, equities, and prediction markets.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each dataFeatures as feature}
			<ComingSoonCard
				title={feature.title}
				description={feature.description}
				category={feature.category}
				icon={feature.icon}
			/>
		{/each}
	</div>
</div>
