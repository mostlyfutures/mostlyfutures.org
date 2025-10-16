<script lang="ts">
	import { formatCurrency, formatPercentage, formatCompactNumber } from '$lib/utils';
	import { cryptoAnalytics, marketOverview, fundingRateLeaderboard } from '$lib/data/mockData';
	import type { CryptoAssetAnalytics } from '$lib/data/mockData';
	import Sparkline from '$lib/components/Sparkline.svelte';

	// Feature flags
	const SHOW_COMPREHENSIVE = true;

	// Selected asset for detailed view
	let selectedSymbol: string = 'BTC';
	let searchQuery = '';
	let viewMode: 'overview' | 'derivatives' | 'onchain' | 'orderflow' = 'overview';
	
	// Tab filter
	let filterTab: 'top' | 'trending' | 'gainers' | 'losers' = 'top';

	// Filtering and sorting
	let sortKey: keyof CryptoAssetAnalytics = 'marketCap';
	let sortDir: 'asc' | 'desc' = 'desc';

	$: filteredAssets = cryptoAnalytics.filter((a) =>
		a.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
		a.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	$: sortedAssets = [...filteredAssets].sort((a, b) => {
		const av = a[sortKey];
		const bv = b[sortKey];
		if (typeof av === 'number' && typeof bv === 'number') {
			return sortDir === 'asc' ? av - bv : bv - av;
		}
		return 0;
	});

	$: selectedAsset = cryptoAnalytics.find((a) => a.symbol === selectedSymbol);

	function setSort(key: keyof CryptoAssetAnalytics) {
		if (sortKey === key) {
			sortDir = sortDir === 'asc' ? 'desc' : 'asc';
		} else {
			sortKey = key;
			sortDir = 'desc';
		}
	}

	function formatOI(value: number) {
		if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
		if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
		return formatCurrency(value);
	}
	
	function formatLargeNumber(value: number): string {
		if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
		if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
		if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M`;
		return formatCurrency(value);
	}
	
	function getSentimentColor(sentiment: string): string {
		const colors: Record<string, string> = {
			'Hope': 'bg-blue-500/10 text-blue-500 border-blue-500/30',
			'Fear': 'bg-red-500/10 text-red-500 border-red-500/30',
			'Optimism': 'bg-green-500/10 text-green-500 border-green-500/30',
			'Greed': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
			'Anxiety': 'bg-orange-500/10 text-orange-500 border-orange-500/30',
			'Denial': 'bg-purple-500/10 text-purple-500 border-purple-500/30',
			'Neutral': 'bg-gray-500/10 text-gray-500 border-gray-500/30',
		};
		return colors[sentiment] || colors['Neutral'];
	}
	
	function getSparklineColor(priceChange: number): string {
		return priceChange >= 0 ? '#10b981' : '#ef4444'; // green or red
	}
</script>

<svelte:head>
	<title>Comprehensive Crypto Analytics - Market Data & Derivatives</title>
	<meta name="description" content="Real-time cryptocurrency analytics: pricing, derivatives, funding rates, open interest, order flow, on-chain metrics, and wallet activity." />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Enhanced Metrics Bar (CoinMarketCap-style) -->
	<div class="bg-card border-b border-border py-2.5 px-4">
		<div class="container mx-auto flex items-center gap-6 text-xs overflow-x-auto">
			<div class="flex items-center gap-2 whitespace-nowrap">
				<span class="text-muted-foreground">Market Cap:</span>
				<span class="font-semibold">{formatCurrency(marketOverview.totalVolume24h)}</span>
				<span class="{marketOverview.totalVolumeChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
					{marketOverview.totalVolumeChange24h >= 0 ? '▲' : '▼'} {formatPercentage(Math.abs(marketOverview.totalVolumeChange24h))}
				</span>
			</div>
			<div class="flex items-center gap-2 whitespace-nowrap">
				<span class="text-muted-foreground">24h Vol:</span>
				<span class="font-semibold">{formatCurrency(marketOverview.totalVolume24h)}</span>
			</div>
			<div class="flex items-center gap-2 whitespace-nowrap">
				<span class="text-muted-foreground">BTC Dominance:</span>
				<span class="font-semibold">{marketOverview.btcDominance.toFixed(2)}%</span>
			</div>
			<div class="flex items-center gap-2 whitespace-nowrap">
				<span class="text-muted-foreground">Fear & Greed:</span>
				<span class="font-semibold">{marketOverview.fearGreedIndex}</span>
				<span class="text-orange-500">{marketOverview.fearGreedLabel}</span>
			</div>
			<div class="flex items-center gap-2 whitespace-nowrap">
				<span class="text-muted-foreground">ETH Gas:</span>
				<span class="font-semibold text-tufts-blue">12 Gwei</span>
			</div>
		</div>
	</div>

	<!-- Header -->
	<div class="bg-gradient-to-b from-background via-tufts-blue/5 to-background border-b border-border">
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-tufts-blue to-jordy-blue bg-clip-text text-transparent">
				Cryptocurrency Market Data
			</h1>
			<p class="text-muted-foreground">
				Real-time prices, derivatives analytics, and on-chain metrics for top cryptocurrencies
			</p>
		</div>
	</div>

	<div class="container mx-auto px-4 py-6">
		<!-- Market Overview Cards -->
		<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
			<div class="p-5 rounded-xl bg-card border border-border hover:border-tufts-blue/50 transition-colors">
				<div class="text-sm text-muted-foreground mb-2">24h Volume</div>
				<div class="text-3xl font-bold mb-2">{formatLargeNumber(marketOverview.totalVolume24h)}</div>
				<div class="text-sm {marketOverview.totalVolumeChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
					{formatPercentage(marketOverview.totalVolumeChange24h)}
				</div>
			</div>
			<div class="p-5 rounded-xl bg-card border border-border hover:border-tufts-blue/50 transition-colors">
				<div class="text-sm text-muted-foreground mb-2">Open Interest</div>
				<div class="text-3xl font-bold mb-2">{formatLargeNumber(marketOverview.totalOpenInterest)}</div>
				<div class="text-sm {marketOverview.totalOiChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
					{formatPercentage(marketOverview.totalOiChange24h)}
				</div>
			</div>
			<div class="p-5 rounded-xl bg-card border border-border hover:border-tufts-blue/50 transition-colors">
				<div class="text-sm text-muted-foreground mb-2">24h Liquidations</div>
				<div class="text-3xl font-bold mb-2">{formatLargeNumber(marketOverview.totalLiquidations24h)}</div>
				<div class="text-sm {marketOverview.totalLiquidationsChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
					{formatPercentage(marketOverview.totalLiquidationsChange24h)}
				</div>
			</div>
			<div class="p-5 rounded-xl bg-card border border-border hover:border-tufts-blue/50 transition-colors">
				<div class="text-sm text-muted-foreground mb-2">Fear & Greed Index</div>
				<div class="text-3xl font-bold mb-2">{marketOverview.fearGreedIndex}</div>
				<div class="text-sm text-orange-500">{marketOverview.fearGreedLabel}</div>
			</div>
		</section>

		<!-- Symbol Selector & View Tabs -->
		<section class="mb-6 p-5 rounded-xl bg-card border border-border">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div class="flex items-center gap-3">
					<div class="text-lg font-semibold">Asset:</div>
					<select bind:value={selectedSymbol} class="px-4 py-2 rounded border border-border bg-background text-lg font-medium">
						{#each cryptoAnalytics as asset}
							<option value={asset.symbol}>{asset.symbol} - {asset.name}</option>
						{/each}
					</select>
				</div>
				<div class="flex gap-2">
					<button class={`px-4 py-2 rounded ${viewMode === 'overview' ? 'bg-tufts-blue text-white' : 'bg-muted'}`} on:click={() => viewMode = 'overview'}>Overview</button>
					<button class={`px-4 py-2 rounded ${viewMode === 'derivatives' ? 'bg-tufts-blue text-white' : 'bg-muted'}`} on:click={() => viewMode = 'derivatives'}>Derivatives</button>
					<button class={`px-4 py-2 rounded ${viewMode === 'onchain' ? 'bg-tufts-blue text-white' : 'bg-muted'}`} on:click={() => viewMode = 'onchain'}>On-Chain</button>
					<button class={`px-4 py-2 rounded ${viewMode === 'orderflow' ? 'bg-tufts-blue text-white' : 'bg-muted'}`} on:click={() => viewMode = 'orderflow'}>Order Flow</button>
				</div>
			</div>
		</section>

		<!-- Selected Asset Detail View -->
		{#if selectedAsset}
		<section class="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- Price & Basic Info -->
			<div class="p-6 rounded-xl bg-card border border-border">
				<h3 class="text-xl font-semibold mb-4">{selectedAsset.name} ({selectedAsset.symbol})</h3>
				<div class="text-4xl font-bold mb-2">{formatCurrency(selectedAsset.price)}</div>
				<div class="text-lg {selectedAsset.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'} mb-4">
					{formatPercentage(selectedAsset.priceChange24h)} (24h)
				</div>
				<div class="grid grid-cols-2 gap-3 text-sm">
					<div>
						<div class="text-muted-foreground">Market Cap</div>
						<div class="font-medium">{formatCurrency(selectedAsset.marketCap)}</div>
					</div>
					<div>
						<div class="text-muted-foreground">Volume (24h)</div>
						<div class="font-medium">{formatCurrency(selectedAsset.volume24h)}</div>
					</div>
				</div>
			</div>

			<!-- Derivatives Metrics -->
			<div class="p-6 rounded-xl bg-card border border-border">
				<h3 class="text-xl font-semibold mb-4">Derivatives</h3>
				<div class="space-y-3 text-sm">
					<div class="flex justify-between">
						<span class="text-muted-foreground">Funding Rate</span>
						<span class="font-medium {selectedAsset.fundingRate >= 0 ? 'text-green-500' : 'text-red-500'}">
							{formatPercentage(selectedAsset.fundingRate)}
						</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">Open Interest</span>
						<span class="font-medium">{formatOI(selectedAsset.openInterest)}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">OI Change (24h)</span>
						<span class="font-medium {selectedAsset.oiChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
							{formatPercentage(selectedAsset.oiChange24h)}
						</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">Liquidations (24h)</span>
						<span class="font-medium">{formatCurrency(selectedAsset.liquidations24h)}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">Long/Short Ratio</span>
						<span class="font-medium">{selectedAsset.longShortRatio.toFixed(2)}</span>
					</div>
				</div>
			</div>

			<!-- On-Chain & Order Flow -->
			<div class="p-6 rounded-xl bg-card border border-border">
				<h3 class="text-xl font-semibold mb-4">On-Chain & Flow</h3>
				<div class="space-y-3 text-sm">
					<div class="flex justify-between">
						<span class="text-muted-foreground">Exchange Balance</span>
						<span class="font-medium">{formatCompactNumber(selectedAsset.exchangeBalance)}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">Balance Change (24h)</span>
						<span class="font-medium {selectedAsset.exchangeBalanceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
							{selectedAsset.exchangeBalanceChange24h >= 0 ? '+' : ''}{formatCompactNumber(selectedAsset.exchangeBalanceChange24h)}
						</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">Whale Txns (24h)</span>
						<span class="font-medium">{selectedAsset.whaleTransactions24h}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">CVD (24h)</span>
						<span class="font-medium {selectedAsset.cvd24h >= 0 ? 'text-green-500' : 'text-red-500'}">
							{selectedAsset.cvd24h >= 0 ? '+' : ''}{formatCurrency(selectedAsset.cvd24h)}
						</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">Buy/Sell Pressure</span>
						<span class="font-medium">{selectedAsset.buyPressure}% / {selectedAsset.sellPressure}%</span>
					</div>
				</div>
			</div>
		</section>
		{/if}

		<!-- All Assets Table with Enhanced UI -->
		<section class="mb-6 p-6 rounded-xl bg-card border border-border">
			<!-- Tab Filters (CoinMarketCap-style) -->
			<div class="flex items-center justify-between mb-6">
				<div class="flex items-center gap-2">
					<button 
						class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterTab === 'top' ? 'bg-tufts-blue text-white' : 'bg-muted hover:bg-muted/80'}`}
						on:click={() => filterTab = 'top'}
					>
						Top
					</button>
					<button 
						class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterTab === 'trending' ? 'bg-tufts-blue text-white' : 'bg-muted hover:bg-muted/80'}`}
						on:click={() => filterTab = 'trending'}
					>
						Trending
					</button>
					<button 
						class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${filterTab === 'gainers' ? 'bg-tufts-blue text-white' : 'bg-muted hover:bg-muted/80'}`}
						on:click={() => filterTab = 'gainers'}
					>
						🔥 Gainers
					</button>
					<button 
						class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${filterTab === 'losers' ? 'bg-tufts-blue text-white' : 'bg-muted hover:bg-muted/80'}`}
						on:click={() => filterTab = 'losers'}
					>
						📉 Losers
					</button>
				</div>
				<input 
					type="text" 
					bind:value={searchQuery} 
					placeholder="Search assets..." 
					class="px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-tufts-blue/50" 
				/>
			</div>
			
			<div class="overflow-x-auto">
				<table class="w-full text-left text-sm">
					<thead class="border-b border-border text-muted-foreground">
						<tr>
							<th class="pb-3 pr-4 font-semibold">#</th>
							<th class="pb-3 pr-4 font-semibold cursor-pointer hover:text-foreground transition-colors" on:click={() => setSort('symbol')}>
								NAME
							</th>
							<th class="pb-3 pr-4 font-semibold cursor-pointer hover:text-foreground transition-colors text-right" on:click={() => setSort('price')}>
								PRICE
							</th>
							<th class="pb-3 pr-4 font-semibold cursor-pointer hover:text-foreground transition-colors text-right" on:click={() => setSort('priceChange24h')}>
								24H %
							</th>
							<th class="pb-3 pr-4 font-semibold cursor-pointer hover:text-foreground transition-colors text-right" on:click={() => setSort('volume24h')}>
								VOLUME
							</th>
							<th class="pb-3 pr-4 font-semibold cursor-pointer hover:text-foreground transition-colors text-right" on:click={() => setSort('marketCap')}>
								MARKET CAP
							</th>
							<th class="pb-3 pr-4 font-semibold text-center">
								SENTIMENT
							</th>
							<th class="pb-3 font-semibold text-center">
								LAST 7 DAYS
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each sortedAssets as asset, index}
						<tr class="hover:bg-muted/20 transition-colors cursor-pointer group" on:click={() => selectedSymbol = asset.symbol}>
							<td class="py-4 pr-4 text-muted-foreground">{index + 1}</td>
							<td class="py-4 pr-4">
								<div class="flex items-center gap-3">
									<div class="w-8 h-8 rounded-full bg-gradient-to-br from-tufts-blue to-jordy-blue flex items-center justify-center text-white font-bold text-xs">
										{asset.symbol.charAt(0)}
									</div>
									<div>
										<div class="font-semibold">{asset.name}</div>
										<div class="text-xs text-muted-foreground">{asset.symbol}</div>
									</div>
								</div>
							</td>
							<td class="py-4 pr-4 text-right font-medium">
								{formatCurrency(asset.price)}
							</td>
							<td class="py-4 pr-4 text-right">
								<div class="flex items-center justify-end gap-1">
									<span class="{asset.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
										{asset.priceChange24h >= 0 ? '▲' : '▼'}
									</span>
									<span class="font-medium {asset.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}">
										{formatPercentage(Math.abs(asset.priceChange24h))}
									</span>
								</div>
							</td>
							<td class="py-4 pr-4 text-right text-muted-foreground">
								{formatCurrency(asset.volume24h)}
							</td>
							<td class="py-4 pr-4 text-right font-medium">
								{formatCurrency(asset.marketCap)}
							</td>
							<td class="py-4 pr-4">
								<div class="flex justify-center">
									<span class="px-3 py-1 rounded-full text-xs font-medium border {getSentimentColor(asset.sentiment)}">
										{asset.sentiment}
									</span>
								</div>
							</td>
							<td class="py-4">
								<div class="flex justify-center">
									<Sparkline 
										data={asset.sparklineData} 
										width={120} 
										height={40} 
										color={getSparklineColor(asset.priceChange24h)}
										lineWidth={2}
									/>
								</div>
							</td>
						</tr>
						{/each}
					</tbody>
				</table>
			</div>
			
			<div class="mt-4 text-sm text-muted-foreground">
				Showing {sortedAssets.length} of {cryptoAnalytics.length} assets
			</div>
		</section>

		<!-- Funding Rate Leaderboard -->
		<section class="mb-6 p-6 rounded-xl bg-card border border-border">
			<h3 class="text-xl font-semibold mb-4">Funding Rate Leaderboard</h3>
			<div class="overflow-x-auto">
				<table class="w-full text-left text-sm">
					<thead class="border-b border-border text-muted-foreground">
						<tr>
							<th class="pb-3 font-semibold">Pair</th>
							<th class="pb-3 font-semibold">Exchange</th>
							<th class="pb-3 font-semibold">Funding Rate</th>
							<th class="pb-3 font-semibold">Next Funding</th>
							<th class="pb-3 font-semibold">Open Interest</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each fundingRateLeaderboard as entry}
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="py-3 font-medium">{entry.pair}</td>
							<td class="py-3">{entry.exchange}</td>
							<td class="py-3 {entry.fundingRate >= 0 ? 'text-green-500' : 'text-red-500'}">
								{formatPercentage(entry.fundingRate)}
							</td>
							<td class="py-3 text-muted-foreground">{entry.nextFunding}</td>
							<td class="py-3">{formatOI(entry.openInterest)}</td>
						</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<!-- Chart Placeholder -->
		<section class="mb-6 p-6 rounded-xl bg-card border border-border">
			<h3 class="text-xl font-semibold mb-4">Price Chart & Technical Indicators</h3>
			<div class="h-96 flex items-center justify-center bg-muted/20 rounded">
				<div class="text-center text-muted-foreground">
					<div class="text-4xl mb-2">📈</div>
					<div>Interactive chart with TradingView integration</div>
					<div class="text-sm mt-1">Coming soon</div>
				</div>
			</div>
		</section>
	</div>
</div>
