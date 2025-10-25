<script lang="ts">
	import { page } from '$app/stores';
	import PriceChart from '$lib/components/crypto/PriceChart.svelte';
	import CandlestickChart from '$lib/components/crypto/CandlestickChart.svelte';
	import VolumeChart from '$lib/components/crypto/VolumeChart.svelte';
	import { formatCurrency, formatNumber, formatPercent, truncateAddress } from '$lib/utils/format';
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';

	export let data;
	export let symbol: string;

	$: asset = data.asset;
	$: historicalData = data.historicalData;
	$: ohlcvData = data.ohlcvData;

	let selectedTab = 'overview';
	let timeRange: '1d' | '7d' | '30d' = '7d';

	function setTab(tab: string) {
		selectedTab = tab;
	}

	function setTimeRange(range: string) {
		timeRange = range;
	}

	// Calculate current price change
	$: currentPrice = asset?.market_data?.current_price?.usd || 0;
	$: priceChange24h = asset?.market_data?.price_change_24h || 0;
	$: priceChangePercentage24h = asset?.market_data?.price_change_percentage_24h || 0;
	$: isPositive = priceChange24h >= 0;
</script>

<svelte:head>
	<title>{asset?.name || symbol} - Live Price & Charts | Mostlyfutures</title>
	<meta name="description" content="{asset?.name || symbol} live price, charts, market data, and analytics. Track {asset?.symbol?.toUpperCase() || symbol} with real-time updates." />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-950">
	<!-- Header -->
	<section class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
		<div class="container mx-auto px-4 py-6">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div class="flex items-center space-x-4">
					{#if asset?.image?.large}
						<img src={asset.image.large} alt={asset.name} class="w-16 h-16 rounded-full" />
					{/if}
					<div>
						<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
							{asset?.name || symbol}
						</h1>
						<p class="text-xl text-gray-500 dark:text-gray-400">
							{asset?.symbol?.toUpperCase() || symbol.toUpperCase()}
						</p>
					</div>
				</div>

				<div class="text-right">
					<div class="text-4xl font-bold text-gray-900 dark:text-white mb-1">
						{formatCurrency(currentPrice)}
					</div>
					<div class="flex items-center justify-end space-x-4">
						<span class={`text-2xl font-semibold ${
							isPositive ? 'text-crypto-green' : 'text-crypto-red'
						}`}>
							{isPositive ? '+' : ''}{formatPercent(priceChangePercentage24h)}
						</span>
						<span class="text-sm text-gray-500 dark:text-gray-400">24h</span>
					</div>
				</div>
			</div>

			<!-- Quick Stats -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
				<div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
					<p class="text-sm text-gray-600 dark:text-gray-400">Market Cap</p>
					<p class="text-lg font-semibold text-gray-900 dark:text-white">
						{formatNumber(asset?.market_data?.market_cap?.usd || 0)}
					</p>
				</div>
				<div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
					<p class="text-sm text-gray-600 dark:text-gray-400">Volume 24h</p>
					<p class="text-lg font-semibold text-gray-900 dark:text-white">
						{formatNumber(asset?.market_data?.total_volume?.usd || 0)}
					</p>
				</div>
				<div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
					<p class="text-sm text-gray-600 dark:text-gray-400">Circulating Supply</p>
					<p class="text-lg font-semibold text-gray-900 dark:text-white">
						{formatNumber(asset?.market_data?.circulating_supply || 0)}
					</p>
				</div>
				<div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
					<p class="text-sm text-gray-600 dark:text-gray-400">Rank</p>
					<p class="text-lg font-semibold text-gray-900 dark:text-white">
						#{asset?.market_cap_rank || 'N/A'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Tabs Navigation -->
	<section class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
		<div class="container mx-auto px-4">
			<div class="flex space-x-1 overflow-x-auto">
				<button
					on:click={() => setTab('overview')}
					class={`px-6 py-3 whitespace-nowrap border-b-2 font-medium transition-colors ${
						selectedTab === 'overview'
							? 'border-robinhood-blue text-robinhood-blue'
							: 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
					}`}
				>
					Overview
				</button>
				<button
					on:click={() => setTab('charts')}
					class={`px-6 py-3 whitespace-nowrap border-b-2 font-medium transition-colors ${
						selectedTab === 'charts'
							? 'border-robinhood-blue text-robinhood-blue'
							: 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
					}`}
				>
					Charts
				</button>
				<button
					on:click={() => setTab('analytics')}
					class={`px-6 py-3 whitespace-nowrap border-b-2 font-medium transition-colors ${
						selectedTab === 'analytics'
							? 'border-robinhood-blue text-robinhood-blue'
							: 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
					}`}
				>
					Analytics
				</button>
				<button
					on:click={() => setTab('news')}
					class={`px-6 py-3 whitespace-nowrap border-b-2 font-medium transition-colors ${
						selectedTab === 'news'
							? 'border-robinhood-blue text-robinhood-blue'
							: 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
					}`}
				>
					News
				</button>
			</div>
		</div>
	</section>

	<!-- Tab Content -->
	<div class="container mx-auto px-4 py-8">
		{#if selectedTab === 'overview'}
			<!-- Overview Tab -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<!-- Price Chart -->
				<div class="lg:col-span-2">
					<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
						<div class="flex items-center justify-between mb-4">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Price Chart</h3>
							<div class="flex space-x-2">
								<button on:click={() => setTimeRange('1d')} class="px-3 py-1 text-sm rounded {timeRange === '1d' ? 'bg-robinhood-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}">1D</button>
								<button on:click={() => setTimeRange('7d')} class="px-3 py-1 text-sm rounded {timeRange === '7d' ? 'bg-robinhood-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}">7D</button>
								<button on:click={() => setTimeRange('30d')} class="px-3 py-1 text-sm rounded {timeRange === '30d' ? 'bg-robinhood-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}">30D</button>
							</div>
						</div>
						<PriceChart data={historicalData} coinName={asset?.name || ''} timeRange={timeRange} height="500px" />
					</div>
				</div>

				<!-- Quick Stats Sidebar -->
				<div class="space-y-6">
					<!-- Market Stats -->
					<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
						<h4 class="font-semibold text-gray-900 dark:text-white mb-4">Market Stats</h4>
						<div class="space-y-3">
							<div class="flex justify-between">
								<span class="text-sm text-gray-600 dark:text-gray-400">ATH</span>
								<span class="text-sm font-medium text-gray-900 dark:text-white">
									{formatCurrency(asset?.market_data?.ath?.usd || 0)}
								</span>
							</div>
							<div class="flex justify-between">
								<span class="text-sm text-gray-600 dark:text-gray-400">ATL</span>
								<span class="text-sm font-medium text-gray-900 dark:text-white">
									{formatCurrency(asset?.market_data?.atl?.usd || 0)}
								</span>
							</div>
							<div class="flex justify-between">
								<span class="text-sm text-gray-600 dark:text-gray-400">Fully Diluted Valuation</span>
								<span class="text-sm font-medium text-gray-900 dark:text-white">
									{formatNumber(asset?.market_data?.fully_diluted_valuation?.usd || 0)}
								</span>
							</div>
						</div>
					</div>

					<!-- Actions -->
					<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
						<h4 class="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
						<div class="space-y-3">
							<Button class="w-full" variant="outline">
								Add to Watchlist
							</Button>
							<Button class="w-full bg-robinhood-blue hover:bg-robinhood-blue-dark">
								Set Price Alert
							</Button>
							<Button class="w-full" variant="ghost">
								Share Chart
							</Button>
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if selectedTab === 'charts'}
			<!-- Charts Tab -->
			<div class="space-y-8">
				<!-- Price Chart -->
				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
					<div class="flex items-center justify-between mb-4">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Price Chart</h3>
						<div class="flex space-x-2">
							<button on:click={() => setTimeRange('1d')} class="px-3 py-1 text-sm rounded {timeRange === '1d' ? 'bg-robinhood-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}">1D</button>
							<button on:click={() => setTimeRange('7d')} class="px-3 py-1 text-sm rounded {timeRange === '7d' ? 'bg-robinhood-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}">7D</button>
							<button on:click={() => setTimeRange('30d')} class="px-3 py-1 text-sm rounded {timeRange === '30d' ? 'bg-robinhood-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}">30D</button>
						</div>
					</div>
					<PriceChart data={historicalData} coinName={asset?.name || ''} timeRange={timeRange} height="500px" />
				</div>

				<!-- Candlestick Chart -->
				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Candlestick Chart</h3>
					<CandlestickChart data={ohlcvData} timeRange="1d" height="400px" />
				</div>

				<!-- Volume Chart -->
				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Volume</h3>
					<VolumeChart data={historicalData} timeRange={timeRange} height="300px" />
				</div>
			</div>
		{/if}

		{#if selectedTab === 'analytics'}
			<!-- Analytics Tab -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-4">Technical Indicators</h4>
					<div class="space-y-3">
						<div class="flex justify-between">
							<span class="text-sm text-gray-600 dark:text-gray-400">RSI (14)</span>
							<span class="text-sm font-medium text-gray-900 dark:text-white">65.2</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600 dark:text-gray-400">MACD</span>
							<span class="text-sm font-medium text-gray-900 dark:text-white">0.045</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600 dark:text-gray-400">Moving Average (50)</span>
							<span class="text-sm font-medium text-gray-900 dark:text-white">{formatCurrency(currentPrice * 0.95)}</span>
						</div>
					</div>
				</div>

				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-4">Market Metrics</h4>
					<div class="space-y-3">
						<div class="flex justify-between">
							<span class="text-sm text-gray-600 dark:text-gray-400">Fear & Greed Index</span>
							<span class="text-sm font-medium text-gray-900 dark:text-white">Greed (75)</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600 dark:text-gray-400">Social Sentiment</span>
							<span class="text-sm font-medium text-gray-900 dark:text-white">Bullish</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600 dark:text-gray-400">Whale Activity</span>
							<span class="text-sm font-medium text-gray-900 dark:text-white">High</span>
						</div>
					</div>
				</div>

				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-4">Price Alerts</h4>
					<div class="space-y-3">
						<Button class="w-full" variant="outline">
							Set Alert Above {formatCurrency(currentPrice * 1.05)}
						</Button>
						<Button class="w-full" variant="outline">
							Set Alert Below {formatCurrency(currentPrice * 0.95)}
						</Button>
						<p class="text-xs text-gray-500 dark:text-gray-400 text-center">
							Get notified when price hits your target
						</p>
					</div>
				</div>
			</div>
		{/if}

		{#if selectedTab === 'news'}
			<!-- News Tab -->
			<div class="space-y-6">
				<div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						{asset?.name} News & Updates
					</h3>
					<div class="space-y-4">
						<!-- Mock news items -->
						<div class="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
								<span class="text-gray-500 dark:text-gray-400">N</span>
							</div>
							<div class="flex-1">
								<h4 class="font-medium text-gray-900 dark:text-white">
									{asset?.name} Partnership Announcement
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<p class="text-xs text-gray-500 dark:text-gray-400 mt-2">2 hours ago</p>
							</div>
						</div>
						<div class="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
								<span class="text-gray-500 dark:text-gray-400">C</span>
							</div>
							<div class="flex-1">
								<h4 class="font-medium text-gray-900 dark:text-white">
									Market Analysis: {asset?.name} Technical Outlook
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
									Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
								</p>
								<p class="text-xs text-gray-500 dark:text-gray-400 mt-2">1 day ago</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
