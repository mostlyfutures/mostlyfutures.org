<script lang="ts">
	import type { CryptoAsset } from '$lib/types/crypto';
	import { formatCurrency, formatPercent } from '$lib/utils/format';

	export let asset: CryptoAsset;
	export let showChart: boolean = false;

	$: priceChange = asset.price_change_percentage_24h;
	$: isPositive = priceChange >= 0;
</script>

<a 
	href={`/markets/${asset.id}`}
	class="group block bg-white dark:bg-gray-900 rounded-lg p-4 hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-800 hover:border-robinhood-blue"
>
	<div class="flex items-start justify-between mb-3">
		<div class="flex items-center space-x-3">
			{#if asset.image}
				<img 
					src={asset.image} 
					alt={asset.name}
					class="w-10 h-10 rounded-full"
				/>
			{/if}
			<div>
				<h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-robinhood-blue transition-colors">
					{asset.name}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 uppercase">
					{asset.symbol}
				</p>
			</div>
		</div>
		
		{#if asset.market_cap_rank}
			<span class="text-xs font-medium text-gray-400 dark:text-gray-500">
				#{asset.market_cap_rank}
			</span>
		{/if}
	</div>

	<div class="space-y-2">
		<div class="flex items-baseline justify-between">
			<span class="text-2xl font-bold text-gray-900 dark:text-white">
				{formatCurrency(asset.current_price)}
			</span>
			
			<span 
				class={`text-sm font-semibold px-2 py-1 rounded ${
					isPositive 
						? 'text-crypto-green bg-crypto-green/10' 
						: 'text-crypto-red bg-crypto-red/10'
				}`}
			>
				{isPositive ? '+' : ''}{formatPercent(priceChange)}
			</span>
		</div>

		{#if showChart && asset.sparkline_in_7d?.price}
			<div class="h-12 flex items-end space-x-0.5">
				{#each asset.sparkline_in_7d.price.slice(-20) as price, i}
					<div 
						class={`flex-1 rounded-t ${isPositive ? 'bg-crypto-green/30' : 'bg-crypto-red/30'}`}
						style="height: {(price / Math.max(...asset.sparkline_in_7d.price)) * 100}%"
					></div>
				{/each}
			</div>
		{/if}

		<div class="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
			<div>
				<p class="text-xs text-gray-500 dark:text-gray-400">Market Cap</p>
				<p class="text-sm font-medium text-gray-900 dark:text-white">
					{formatCurrency(asset.market_cap, 0)}
				</p>
			</div>
			<div>
				<p class="text-xs text-gray-500 dark:text-gray-400">Volume 24h</p>
				<p class="text-sm font-medium text-gray-900 dark:text-white">
					{formatCurrency(asset.total_volume, 0)}
				</p>
			</div>
		</div>
	</div>
</a>
