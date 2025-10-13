<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { 
		marketData, 
		filteredMarketData, 
		searchQuery, 
		isLoadingMarketData, 
		marketDataError,
		loadMarketData,
		startAutoRefresh,
		topGainers,
		topLosers
	} from '$lib/stores/market';
	import MarketTable from '$lib/components/crypto/MarketTable.svelte';
	import PriceCard from '$lib/components/crypto/PriceCard.svelte';
	import { formatCurrency, formatPercent } from '$lib/utils/format';

	let stopAutoRefresh: (() => void) | null = null;
	let viewMode: 'table' | 'grid' = 'table';
	let selectedTab: 'all' | 'gainers' | 'losers' = 'all';

	onMount(async () => {
		// Load initial data
		await loadMarketData();
		
		// Start auto-refresh every 60 seconds
		stopAutoRefresh = startAutoRefresh(60000);
	});

	onDestroy(() => {
		if (stopAutoRefresh) {
			stopAutoRefresh();
		}
	});

	$: displayAssets = selectedTab === 'all' 
		? $filteredMarketData 
		: selectedTab === 'gainers' 
			? $topGainers 
			: $topLosers;
</script>

<svelte:head>
	<title>Crypto Markets - Live Prices & Data | Mostlyfutures</title>
	<meta name="description" content="Track real-time cryptocurrency prices, market cap, volume, and trends. Advanced crypto analytics dashboard with live data." />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-950">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-robinhood-blue to-robinhood-blue-dark text-white py-16">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl">
				<h1 class="text-4xl md:text-5xl font-bold mb-4">
					Cryptocurrency Markets
				</h1>
				<p class="text-xl text-blue-100 mb-8">
					Real-time prices, charts, and market data for thousands of cryptocurrencies
				</p>

				<!-- Search Bar -->
				<div class="relative max-w-2xl">
					<input 
						type="text"
						bind:value={$searchQuery}
						placeholder="Search assets by name or symbol..."
						class="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
					/>
					<svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<div class="container mx-auto px-4 py-8">
		<!-- Tabs -->
		<div class="flex items-center justify-between mb-6">
			<div class="flex space-x-2 bg-white dark:bg-gray-900 rounded-lg p-1 shadow-sm">
				<button
					on:click={() => selectedTab = 'all'}
					class={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
						selectedTab === 'all' 
							? 'bg-robinhood-blue text-white' 
							: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
					}`}
				>
					All Crypto
				</button>
				<button
					on:click={() => selectedTab = 'gainers'}
					class={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
						selectedTab === 'gainers' 
							? 'bg-robinhood-blue text-white' 
							: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
					}`}
				>
					🚀 Top Gainers
				</button>
				<button
					on:click={() => selectedTab = 'losers'}
					class={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
						selectedTab === 'losers' 
							? 'bg-robinhood-blue text-white' 
							: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
					}`}
				>
					📉 Top Losers
				</button>
			</div>

			<!-- View Toggle -->
			<div class="flex space-x-2 bg-white dark:bg-gray-900 rounded-lg p-1 shadow-sm">
				<button
					on:click={() => viewMode = 'table'}
					aria-label="Table view"
					class={`px-3 py-2 rounded-md text-sm transition-colors ${
						viewMode === 'table' 
							? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
							: 'text-gray-600 dark:text-gray-400'
					}`}
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
					</svg>
				</button>
				<button
					on:click={() => viewMode = 'grid'}
					aria-label="Grid view"
					class={`px-3 py-2 rounded-md text-sm transition-colors ${
						viewMode === 'grid' 
							? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
							: 'text-gray-600 dark:text-gray-400'
					}`}
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Loading State -->
		{#if $isLoadingMarketData && $marketData.length === 0}
			<div class="flex items-center justify-center py-20">
				<div class="text-center">
					<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-robinhood-blue mx-auto mb-4"></div>
					<p class="text-gray-600 dark:text-gray-400">Loading market data...</p>
				</div>
			</div>
		{:else if $marketDataError}
			<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
				<p class="text-red-600 dark:text-red-400 font-medium mb-2">Failed to load market data</p>
				<p class="text-red-500 dark:text-red-300 text-sm">{$marketDataError}</p>
				<button 
					on:click={() => loadMarketData()}
					class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
				>
					Try Again
				</button>
			</div>
		{:else}
			<!-- Market Data -->
			{#if viewMode === 'table'}
				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
					<MarketTable assets={displayAssets} />
				</div>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{#each displayAssets as asset (asset.id)}
						<PriceCard {asset} showChart={true} />
					{/each}
				</div>
			{/if}

			{#if displayAssets.length === 0 && $searchQuery}
				<div class="text-center py-12">
					<p class="text-gray-600 dark:text-gray-400">No assets found matching "{$searchQuery}"</p>
				</div>
			{/if}
		{/if}
	</div>
</div>
