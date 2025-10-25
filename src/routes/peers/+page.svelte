<script lang="ts">
	import ComingSoonCard from '$lib/components/ComingSoonCard.svelte';

	const peersFeatures = [
		{
			title: 'Peer Network',
			description: 'Connect with other traders, analysts, and crypto enthusiasts in a decentralized network.',
			category: 'Social',
			icon: '👥'
		},
		{
			title: 'Anonymous Authentication',
			description: 'Sign in anonymously with auto-generated secret wallets (Privy/BetterAuth integration).',
			category: 'Auth',
			icon: '🎭'
		},
		{
			title: 'Collaborative Trading',
			description: 'Share strategies, insights, and market analysis with your peers in real-time.',
			category: 'Trading',
			icon: '🤝'
		}
	];
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mb-12">
		<h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-tufts-blue to-jordy-blue bg-clip-text text-transparent">
			Peers
		</h1>
		<p class="text-lg text-muted-foreground">
			Connect, collaborate, and trade with a community of like-minded crypto enthusiasts and professionals.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each peersFeatures as feature}
			<ComingSoonCard
				title={feature.title}
				description={feature.description}
				category={feature.category}
				icon={feature.icon}
			/>
		{/each}
	</div>
</div>
