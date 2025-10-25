<script lang="ts">
	import ComingSoonCard from '$lib/components/ComingSoonCard.svelte';
	import { formatCurrency, formatPercentage, formatCompactNumber } from '$lib/utils';
	import { dexPools, rwaAssets, type DexPool, type RwaAsset } from '$lib/data/mockData';

	const metrics = [
		{ label: 'Total Value Locked', value: '$168.44B', change: '+4.3%', changeType: 'positive' },
		{ label: 'Trading Volume (24h)', value: '$23.1B', change: '+12.5%', changeType: 'positive' },
		{ label: 'Open Interest', value: '$8.9B', change: '-2.1%', changeType: 'negative' },
		{ label: 'Liquidations (24h)', value: '$142M', change: '-8.3%', changeType: 'negative' }
	];

	const protocols = [
		{ name: 'Hyperliquid', chain: 'Arbitrum', tvl: '$2.4B', volume24h: '$890M', change24h: '+5.2%', oi: '$1.2B' },
		{ name: 'dYdX', chain: 'Ethereum', tvl: '$1.8B', volume24h: '$670M', change24h: '+3.1%', oi: '$980M' },
		{ name: 'GMX', chain: 'Arbitrum', tvl: '$1.2B', volume24h: '$420M', change24h: '-1.8%', oi: '$680M' },
		{ name: 'Vertex', chain: 'Arbitrum', tvl: '$890M', volume24h: '$310M', change24h: '+8.4%', oi: '$540M' },
		{ name: 'Aevo', chain: 'Ethereum', tvl: '$680M', volume24h: '$280M', change24h: '+2.7%', oi: '$420M' }
	];

	const analyticsFeatures = [
		{ title: 'Liquidation Heatmaps', description: 'Real-time liquidation data across protocols with historical patterns and risk zones.', category: 'Risk Analytics', icon: '🔥' },
		{ title: 'Volume Profile Analysis', description: 'Multi-timeframe volume profiles showing price acceptance zones and high-volume nodes.', category: 'Trading', icon: '📊' },
		{ title: 'On-Chain Flow Tracking', description: 'Visualize large wallet movements and institutional flows with bubble maps and sankey diagrams.', category: 'On-Chain', icon: '🗺️' },
		{ title: 'Funding Rate Aggregator', description: 'Track funding rates across all perpetual exchanges to identify arbitrage opportunities.', category: 'Derivatives', icon: '💰' },
		{ title: 'Cross-Exchange Orderbook', description: 'Aggregated orderbook depth from DEXs and CEXs for unified market liquidity view.', category: 'Trading', icon: '📚' },
		{ title: 'Prediction Markets Dashboard', description: 'Aggregate prediction market odds and compute implied probabilities for macro events.', category: 'Predictions', icon: '🎯' }
	];

	// Feature flags (enable/disable sections)
	const SHOW_DEX_ANALYTICS = true;
	const SHOW_RWA_ANALYTICS = true;

	// DEX Pools filters and sorting
	let chainFilter: 'All' | 'Arbitrum' | 'Ethereum' | 'Polygon' = 'All';
	let timeframe: '24h' | '7d' | '30d' = '24h';
	let dexSortKey: 'pool' | 'tvl' | 'volume' | 'fees' | 'apr' = 'fees';
	let dexSortDir: 'asc' | 'desc' = 'desc';

	function getVolume(p: DexPool) {
		return timeframe === '24h' ? p.volume24h : timeframe === '7d' ? p.volume7d : p.volume30d;
	}
	function getFees(p: DexPool) {
		return timeframe === '24h' ? p.fees24h : timeframe === '7d' ? p.fees7d : p.fees30d;
	}
	function getApr(p: DexPool) {
		return timeframe === '24h' ? (p.fees24h / Math.max(p.tvl, 1)) * 365 * 100 : timeframe === '7d' ? p.apr7d : p.apr30d;
	}

	$: filteredDex = dexPools.filter((p) => chainFilter === 'All' || p.chain === chainFilter);
	$: sortedDex = [...filteredDex].sort((a, b) => {
		let av = 0, bv = 0;
		if (dexSortKey === 'pool') { av = a.pool.localeCompare(b.pool); bv = 0; return dexSortDir === 'asc' ? av : -av; }
		if (dexSortKey === 'tvl') { av = a.tvl; bv = b.tvl; }
		if (dexSortKey === 'volume') { av = getVolume(a); bv = getVolume(b); }
		if (dexSortKey === 'fees') { av = getFees(a); bv = getFees(b); }
		if (dexSortKey === 'apr') { av = getApr(a); bv = getApr(b); }
		return dexSortDir === 'asc' ? av - bv : bv - av;
	});

	function setDexSort(key: typeof dexSortKey) {
		if (dexSortKey === key) {
			dexSortDir = dexSortDir === 'asc' ? 'desc' : 'asc';
		} else {
			dexSortKey = key;
			dexSortDir = key === 'pool' ? 'asc' : 'desc';
		}
	}

	// RWA filters and sorting
	let rwaClass: 'All' | 'Treasury' | 'Real Estate' | 'Private Credit' | 'Commodities' = 'All';
	let rwaIssuer = 'All';
	let rwaSortKey: 'asset' | 'issuer' | 'yield' | 'maturity' | 'chain' = 'yield';
	let rwaSortDir: 'asc' | 'desc' = 'desc';

	let issuerOptions: string[] = [];
	let filteredRwa: RwaAsset[] = [];
	let sortedRwa: RwaAsset[] = [];

	$: issuerOptions = ['All', ...Array.from(new Set(rwaAssets.map((a) => a.issuer)))];
	$: filteredRwa = rwaAssets.filter((a) => (rwaClass === 'All' || a.class === rwaClass) && (rwaIssuer === 'All' || a.issuer === rwaIssuer));
	$: sortedRwa = [...filteredRwa].sort((a, b) => {
		if (rwaSortKey === 'asset') return rwaSortDir === 'asc' ? a.asset.localeCompare(b.asset) : b.asset.localeCompare(a.asset);
		if (rwaSortKey === 'issuer') return rwaSortDir === 'asc' ? a.issuer.localeCompare(b.issuer) : b.issuer.localeCompare(a.issuer);
		if (rwaSortKey === 'maturity') return (rwaSortDir === 'asc' ? (a.maturity || '').localeCompare(b.maturity || '') : (b.maturity || '').localeCompare(a.maturity || ''));
		if (rwaSortKey === 'chain') return rwaSortDir === 'asc' ? a.chain.localeCompare(b.chain) : b.chain.localeCompare(a.chain);
		// yield
		return rwaSortDir === 'asc' ? a.yieldPct - b.yieldPct : b.yieldPct - a.yieldPct;
	});

	function setRwaSort(key: typeof rwaSortKey) {
		if (rwaSortKey === key) {
			rwaSortDir = rwaSortDir === 'asc' ? 'desc' : 'asc';
		} else {
			rwaSortKey = key;
			rwaSortDir = key === 'asset' || key === 'issuer' || key === 'chain' ? 'asc' : 'desc';
		}
	}
</script>

<svelte:head>
	<title>Advanced Analytics - Crypto Market Data</title>
	<meta name="description" content="Comprehensive cryptocurrency analytics including liquidation maps, volume profiles, on-chain data, and protocol metrics." />
</svelte:head>

<div class="min-h-screen bg-background">
	<div class="bg-gradient-to-b from-tufts-blue/10 to-background border-b border-border">
		<div class="container mx-auto px-4 py-12">
			<h1 class="text-4xl font-bold mb-3 bg-gradient-to-r from-tufts-blue to-jordy-blue bg-clip-text text-transparent">
				Advanced Crypto Analytics
			</h1>
			<p class="text-lg text-muted-foreground max-w-3xl">
				Comprehensive market intelligence, liquidation maps, volume profiles, and on-chain analytics. 
				Inspired by top-tier analytics platforms with DeFi Llama-style aggregated data.
			</p>
		</div>
	</div>

	<div class="container mx-auto px-4 py-8">
		<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
			{#each metrics as m}
				<div class="p-5 rounded-xl bg-card border border-border hover:border-tufts-blue/50 transition-colors">
					<div class="text-sm text-muted-foreground mb-2">{m.label}</div>
					<div class="text-3xl font-bold mb-2">{m.value}</div>
					<div class="text-sm {m.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}">
						{m.change}
					</div>
				</div>
			{/each}
		</section>

		<section class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
			<div class="lg:col-span-2 p-6 rounded-xl bg-card border border-border">
				<div class="flex justify-between items-center mb-4">
					<h3 class="text-xl font-semibold">Liquidation Map & Price History</h3>
					<div class="flex gap-2 text-sm">
						<button class="px-3 py-1 rounded bg-tufts-blue/20 text-tufts-blue">1D</button>
						<button class="px-3 py-1 rounded hover:bg-muted">7D</button>
						<button class="px-3 py-1 rounded hover:bg-muted">30D</button>
					</div>
				</div>
				<div class="h-96 flex items-center justify-center bg-muted/20 rounded">
					<div class="text-center text-muted-foreground">
						<div class="text-4xl mb-2">📈</div>
						<div>Liquidation heatmap visualization</div>
						<div class="text-sm mt-1">Multi-exchange aggregated data</div>
					</div>
				</div>
			</div>

			<div class="p-6 rounded-xl bg-card border border-border">
				<h3 class="text-xl font-semibold mb-4">Volume Profile</h3>
				<div class="h-96 flex items-center justify-center bg-muted/20 rounded">
					<div class="text-center text-muted-foreground">
						<div class="text-4xl mb-2">📊</div>
						<div>Volume distribution</div>
						<div class="text-sm mt-1">POC & value areas</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mb-8 p-6 rounded-xl bg-card border border-border">
			<h3 class="text-xl font-semibold mb-4">Protocol Rankings</h3>
			<div class="overflow-x-auto">
				<table class="w-full text-left">
					<thead class="border-b border-border">
						<tr class="text-sm text-muted-foreground">
							<th class="pb-3 font-semibold">Protocol</th>
							<th class="pb-3 font-semibold">Chain</th>
							<th class="pb-3 font-semibold">TVL</th>
							<th class="pb-3 font-semibold">Volume (24h)</th>
							<th class="pb-3 font-semibold">Change</th>
							<th class="pb-3 font-semibold">Open Interest</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each protocols as protocol}
							<tr class="hover:bg-muted/20 transition-colors">
								<td class="py-3 font-medium">{protocol.name}</td>
								<td class="py-3 text-muted-foreground">{protocol.chain}</td>
								<td class="py-3">{protocol.tvl}</td>
								<td class="py-3">{protocol.volume24h}</td>
								<td class="py-3 {protocol.change24h.startsWith('+') ? 'text-green-500' : 'text-red-500'}">
									{protocol.change24h}
								</td>
								<td class="py-3">{protocol.oi}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		{#if SHOW_DEX_ANALYTICS}
		<section class="mb-8 p-6 rounded-xl bg-card border border-border">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
				<h3 class="text-xl font-semibold">DEX Pools (Velo-style)</h3>
				<div class="flex flex-wrap gap-2 text-sm">
					<div class="flex items-center gap-2">
						<span class="text-muted-foreground">Chain:</span>
						<select bind:value={chainFilter} class="px-3 py-2 rounded border border-border bg-background">
							<option>All</option>
							<option>Arbitrum</option>
							<option>Ethereum</option>
							<option>Polygon</option>
						</select>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-muted-foreground">Timeframe:</span>
						<div class="flex gap-1">
							<button class={`px-3 py-1 rounded ${timeframe === '24h' ? 'bg-tufts-blue/20 text-tufts-blue' : 'hover:bg-muted'}`} on:click={() => timeframe = '24h'}>24h</button>
							<button class={`px-3 py-1 rounded ${timeframe === '7d' ? 'bg-tufts-blue/20 text-tufts-blue' : 'hover:bg-muted'}`} on:click={() => timeframe = '7d'}>7D</button>
							<button class={`px-3 py-1 rounded ${timeframe === '30d' ? 'bg-tufts-blue/20 text-tufts-blue' : 'hover:bg-muted'}`} on:click={() => timeframe = '30d'}>30D</button>
						</div>
					</div>
				</div>
			</div>
			<div class="overflow-x-auto">
				<table class="w-full text-left">
					<thead class="border-b border-border text-sm text-muted-foreground">
						<tr>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setDexSort('pool')}>Pool</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setDexSort('tvl')}>TVL</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setDexSort('volume')}>Volume ({timeframe})</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setDexSort('fees')}>Fees ({timeframe})</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setDexSort('apr')}>APR</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each sortedDex as p}
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="py-3 font-medium">{p.pool} <span class="text-xs text-muted-foreground">({p.chain})</span></td>
							<td class="py-3">{formatCurrency(p.tvl)}</td>
							<td class="py-3">{formatCurrency(getVolume(p))}</td>
							<td class="py-3">{formatCurrency(getFees(p))}</td>
							<td class="py-3">{formatPercentage(getApr(p))}</td>
						</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
		{/if}

		{#if SHOW_RWA_ANALYTICS}
		<section class="mb-8 p-6 rounded-xl bg-card border border-border">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
				<h3 class="text-xl font-semibold">RWA Assets (rwa.xyz-style)</h3>
				<div class="flex flex-wrap gap-2 text-sm">
					<div class="flex items-center gap-2">
						<span class="text-muted-foreground">Class:</span>
						<select bind:value={rwaClass} class="px-3 py-2 rounded border border-border bg-background">
							<option>All</option>
							<option>Treasury</option>
							<option>Real Estate</option>
							<option>Private Credit</option>
							<option>Commodities</option>
						</select>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-muted-foreground">Issuer:</span>
						<select bind:value={rwaIssuer} class="px-3 py-2 rounded border border-border bg-background">
							{#each issuerOptions as issuer}
								<option>{issuer}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
			<div class="overflow-x-auto">
				<table class="w-full text-left">
					<thead class="border-b border-border text-sm text-muted-foreground">
						<tr>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setRwaSort('asset')}>Asset</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setRwaSort('issuer')}>Issuer</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setRwaSort('yield')}>Yield</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setRwaSort('maturity')}>Maturity</th>
							<th class="pb-3 font-semibold cursor-pointer" on:click={() => setRwaSort('chain')}>Chain</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each sortedRwa as a}
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="py-3 font-medium">{a.asset}</td>
							<td class="py-3 text-muted-foreground">{a.issuer}</td>
							<td class="py-3">{formatPercentage(a.yieldPct)}</td>
							<td class="py-3">{a.maturity || '—'}</td>
							<td class="py-3">{a.chain}</td>
						</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
		{/if}

		<section class="mb-8">
			<h3 class="text-2xl font-semibold mb-4">Analytics Tools</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each analyticsFeatures as feature}
					<ComingSoonCard
						title={feature.title}
						description={feature.description}
						category={feature.category}
						icon={feature.icon}
					/>
				{/each}
			</div>
		</section>

		<section class="p-6 rounded-xl bg-gradient-to-r from-tufts-blue/10 to-jordy-blue/10 border border-tufts-blue/30">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<div>
					<h4 class="text-lg font-semibold mb-2">Access Raw Data & APIs</h4>
					<p class="text-muted-foreground">
						Download historical data, query our REST API, or integrate WebSocket feeds for real-time analytics.
					</p>
				</div>
				<div class="flex gap-3">
					<a href="/api/data/export" class="px-4 py-2 rounded-lg bg-tufts-blue text-white hover:bg-tufts-blue/90 transition-colors">
						Export CSV
					</a>
					<a href="/api/docs" class="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
						API Docs
					</a>
				</div>
			</div>
		</section>
	</div>
</div>
