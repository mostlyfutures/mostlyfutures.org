<script lang="ts">
	import { formatCurrency, formatPercentage, formatCompactNumber } from '$lib/utils';
	import { cryptoAnalytics, marketOverview, fundingRateLeaderboard } from '$lib/data/mockData';
	import type { CryptoAssetAnalytics } from '$lib/data/mockData';

	// Selected asset and filtering
	let selectedSymbol: string = 'BTC';
	let searchQuery = '';
	let activeTab: 'top' | 'trending' | 'gainers' | 'losers' = 'top';
	let activeCategory: 'all' | 'defi' | 'layer1' | 'layer2' = 'all';

	// Sorting state
	let sortKey: keyof CryptoAssetAnalytics = 'marketCap';
	let sortDir: 'asc' | 'desc' = 'desc';

	// Sentiment mapping based on metrics
	function getSentiment(asset: CryptoAssetAnalytics): string {
		const profitPct = (asset.buyPressure / (asset.buyPressure + asset.sellPressure)) * 100;
		if (profitPct > 70) return 'Euphoria';
		if (profitPct > 60) return 'Optimism';
		if (profitPct > 50) return 'Hope';
		if (profitPct > 40) return 'Fear';
		if (profitPct > 30) return 'Anxiety';
		return 'Capitulation';
	}

	// Tab filtering
	$: filteredByTab = (() => {
		switch (activeTab) {
			case 'trending':
				return [...cryptoAnalytics].sort((a, b) => Math.abs(b.priceChange24h) - Math.abs(a.priceChange24h));
			case 'gainers':
				return [...cryptoAnalytics].filter(a => a.priceChange24h > 0).sort((a, b) => b.priceChange24h - a.priceChange24h);
			case 'losers':
				return [...cryptoAnalytics].filter(a => a.priceChange24h < 0).sort((a, b) => a.priceChange24h - b.priceChange24h);
			default:
				return cryptoAnalytics;
		}
	})();

	// Search filtering
	$: filteredAssets = filteredByTab.filter((a) =>
		a.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
		a.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Sorting
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

	// Sparkline data generator (simplified)
	function generateSparklineData(change: number): number[] {
		const points = 7;
		const data: number[] = [];
		const baseValue = 100;
		let current = baseValue;
		
		for (let i = 0; i < points; i++) {
			const variation = (Math.random() - 0.5) * 10;
			current += variation;
			data.push(current);
		}
		
		// Adjust last point to match the change
		data[points - 1] = baseValue + change;
		return data;
	}

	function createSparklinePoints(data: number[]): string {
		const width = 120;
		const height = 40;
		const max = Math.max(...data);
		const min = Math.min(...data);
		const range = max - min || 1;
		
		return data.map((val, i) => {
			const x = (i / (data.length - 1)) * width;
			const y = height - ((val - min) / range) * height;
			return `${x},${y}`;
		}).join(' ');
	}
</script>

<svelte:head>
	<title>Crypto Market Data & Analytics | Mostlyfutures</title>
	<meta name="description" content="Real-time cryptocurrency market data, prices, derivatives analytics, and on-chain metrics." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
	<!-- Top Stats Bar -->
	<div class="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
		<div class="container mx-auto px-4 py-3">
			<div class="flex flex-wrap gap-6 text-sm">
				<div class="flex items-center gap-2">
					<span class="text-slate-400">Market Cap:</span>
					<span class="font-semibold text-white">{formatCurrency(marketOverview.totalVolume24h)}</span>
					<span class="text-{marketOverview.totalVolumeChange24h >= 0 ? 'green' : 'red'}-400">
						{marketOverview.totalVolumeChange24h >= 0 ? '↑' : '↓'} {formatPercentage(Math.abs(marketOverview.totalVolumeChange24h))}
					</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-slate-400">24h Vol:</span>
					<span class="font-semibold text-white">{formatCurrency(marketOverview.totalVolume24h)}</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-slate-400">BTC Dominance:</span>
					<span class="font-semibold text-white">{marketOverview.btcDominance}%</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-slate-400">Fear & Greed:</span>
					<span class="font-semibold text-orange-400">{marketOverview.fearGreedIndex} {marketOverview.fearGreedLabel}</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-slate-400">ETH Gas:</span>
					<span class="font-semibold text-blue-400">12 Gwei</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="container mx-auto px-4 py-6">
		<!-- Header -->
		<div class="mb-6">
			<h1 class="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
				Cryptocurrency Market Data
			</h1>
			<p class="text-slate-400">
				Real-time prices, derivatives analytics, and on-chain metrics for top cryptocurrencies
			</p>
		</div>

		<!-- Tab Navigation & Search -->
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
			<!-- Tabs -->
			<div class="flex gap-2 overflow-x-auto pb-2">
				<button
					class="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap {activeTab === 'top' ? 'bg-blue-600 text-white' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'}"
					on:click={() => activeTab = 'top'}
				>
					Top
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap {activeTab === 'trending' ? 'bg-blue-600 text-white' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'}"
					on:click={() => activeTab = 'trending'}
				>
					Trending
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap {activeTab === 'gainers' ? 'bg-blue-600 text-white' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'}"
					on:click={() => activeTab = 'gainers'}
				>
					🔥 Gainers
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap {activeTab === 'losers' ? 'bg-blue-600 text-white' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'}"
					on:click={() => activeTab = 'losers'}
				>
					📉 Losers
				</button>
			</div>

			<!-- Search -->
			<div class="relative">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search assets..."
					class="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
				/>
				<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</div>
		</div>

		<!-- Data Table -->
		<div class="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden">
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="border-b border-slate-800 bg-slate-800/50">
							<th class="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">#</th>
							<th class="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white" on:click={() => setSort('name')}>
								Name
							</th>
							<th class="px-4 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white" on:click={() => setSort('price')}>
								Price
							</th>
							<th class="px-4 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white" on:click={() => setSort('priceChange24h')}>
								24h %
							</th>
							<th class="px-4 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white" on:click={() => setSort('volume24h')}>
								Volume
							</th>
							<th class="px-4 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white" on:click={() => setSort('marketCap')}>
								Market Cap
							</th>
							<th class="px-4 py-3 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
								Sentiment
							</th>
							<th class="px-4 py-3 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
								Last 7 Days
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-slate-800">
						{#each sortedAssets as asset, index}
						<tr class="hover:bg-slate-800/30 transition-colors cursor-pointer group" on:click={() => selectedSymbol = asset.symbol}>
							<td class="px-4 py-4 text-slate-400 text-sm">{index + 1}</td>
							<td class="px-4 py-4">
								<div class="flex items-center gap-3">
									<div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
										{asset.symbol.charAt(0)}
									</div>
									<div>
										<div class="font-semibold text-white group-hover:text-blue-400 transition-colors">{asset.name}</div>
										<div class="text-xs text-slate-400">{asset.symbol}</div>
									</div>
								</div>
							</td>
							<td class="px-4 py-4 text-right">
								<div class="font-semibold text-white">{formatCurrency(asset.price)}</div>
							</td>
							<td class="px-4 py-4 text-right">
								<div class="flex items-center justify-end gap-1">
									<span class="{asset.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}">
										{asset.priceChange24h >= 0 ? '▲' : '▼'}
									</span>
									<span class="font-medium {asset.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}">
										{formatPercentage(Math.abs(asset.priceChange24h))}
									</span>
								</div>
							</td>
							<td class="px-4 py-4 text-right text-slate-300 text-sm">{formatCurrency(asset.volume24h)}</td>
							<td class="px-4 py-4 text-right text-slate-300 text-sm">{formatCurrency(asset.marketCap)}</td>
							<td class="px-4 py-4 text-center">
								<span class="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300">
									{getSentiment(asset)}
								</span>
							</td>
							<td class="px-4 py-4">
								<div class="flex justify-center">
									<svg width="120" height="40" class="opacity-70 group-hover:opacity-100 transition-opacity">
										<polyline
											points={createSparklinePoints(generateSparklineData(asset.priceChange24h))}
											fill="none"
											stroke={asset.priceChange24h >= 0 ? '#4ade80' : '#f87171'}
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</td>
						</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<!-- Table Footer -->
			<div class="px-4 py-3 border-t border-slate-800 bg-slate-800/30 flex items-center justify-between text-sm text-slate-400">
				<div>
					Showing {sortedAssets.length} of {cryptoAnalytics.length} assets
				</div>
				<div class="flex gap-2">
					<button class="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors disabled:opacity-50" disabled>
						Previous
					</button>
					<button class="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
						Next
					</button>
				</div>
			</div>
		</div>

		<!-- Selected Asset Detail Panel -->
		{#if selectedAsset}
		<div class="mt-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-6">
			<div class="flex items-start justify-between mb-6">
				<div>
					<h2 class="text-2xl font-bold text-white mb-1">{selectedAsset.name} <span class="text-slate-400">({selectedAsset.symbol})</span></h2>
					<div class="flex items-baseline gap-3">
						<span class="text-3xl font-bold text-white">{formatCurrency(selectedAsset.price)}</span>
						<span class="text-lg {selectedAsset.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}">
							{selectedAsset.priceChange24h >= 0 ? '▲' : '▼'} {formatPercentage(Math.abs(selectedAsset.priceChange24h))}
						</span>
					</div>
				</div>
				<button class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
					Trade
				</button>
			</div>

			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">Market Cap</div>
					<div class="text-lg font-semibold text-white">{formatCurrency(selectedAsset.marketCap)}</div>
				</div>
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">Volume (24h)</div>
					<div class="text-lg font-semibold text-white">{formatCurrency(selectedAsset.volume24h)}</div>
				</div>
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">Funding Rate</div>
					<div class="text-lg font-semibold {selectedAsset.fundingRate >= 0 ? 'text-green-400' : 'text-red-400'}">
						{formatPercentage(selectedAsset.fundingRate)}
					</div>
				</div>
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">Open Interest</div>
					<div class="text-lg font-semibold text-white">{formatOI(selectedAsset.openInterest)}</div>
				</div>
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">CVD (24h)</div>
					<div class="text-lg font-semibold {selectedAsset.cvd24h >= 0 ? 'text-green-400' : 'text-red-400'}">
						{selectedAsset.cvd24h >= 0 ? '+' : ''}{formatCurrency(selectedAsset.cvd24h)}
					</div>
				</div>
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">Long/Short Ratio</div>
					<div class="text-lg font-semibold text-white">{selectedAsset.longShortRatio.toFixed(2)}</div>
				</div>
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">Whale Txns (24h)</div>
					<div class="text-lg font-semibold text-cyan-400">{selectedAsset.whaleTransactions24h}</div>
				</div>
				<div class="p-4 rounded-lg bg-slate-800/50">
					<div class="text-sm text-slate-400 mb-1">Buy/Sell Pressure</div>
					<div class="text-lg font-semibold text-white">{selectedAsset.buyPressure}%/{selectedAsset.sellPressure}%</div>
				</div>
			</div>
		</div>
		{/if}
	</div>
</div>
