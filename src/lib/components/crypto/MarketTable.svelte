<script lang="ts">
	import type { CryptoAsset } from '$lib/types/crypto';
	import { formatCurrency, formatNumber, formatPercent, getChangeColorClass } from '$lib/utils/format';

	export let assets: CryptoAsset[] = [];
	export let sortBy: 'market_cap' | 'price' | 'volume' | 'change_24h' = 'market_cap';
	export let sortOrder: 'asc' | 'desc' = 'desc';

	function handleSort(field: typeof sortBy) {
		if (sortBy === field) {
			sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			sortBy = field;
			sortOrder = 'desc';
		}
	}

	$: sortedAssets = [...assets].sort((a, b) => {
		let aVal: number, bVal: number;
		
		switch (sortBy) {
			case 'market_cap':
				aVal = a.market_cap;
				bVal = b.market_cap;
				break;
			case 'price':
				aVal = a.current_price;
				bVal = b.current_price;
				break;
			case 'volume':
				aVal = a.total_volume;
				bVal = b.total_volume;
				break;
			case 'change_24h':
				aVal = a.price_change_percentage_24h;
				bVal = b.price_change_percentage_24h;
				break;
			default:
				aVal = a.market_cap_rank || 0;
				bVal = b.market_cap_rank || 0;
		}
		
		return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
	});
</script>

<div class="overflow-x-auto">
	<table class="w-full">
		<thead>
			<tr class="border-b border-gray-200 dark:border-gray-800">
				<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
					#
				</th>
				<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
					Asset
				</th>
				<th 
					class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-robinhood-blue"
					on:click={() => handleSort('price')}
				>
					Price
					{#if sortBy === 'price'}
						<span class="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
					{/if}
				</th>
				<th 
					class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-robinhood-blue"
					on:click={() => handleSort('change_24h')}
				>
					24h %
					{#if sortBy === 'change_24h'}
						<span class="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
					{/if}
				</th>
				<th 
					class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-robinhood-blue hidden md:table-cell"
					on:click={() => handleSort('market_cap')}
				>
					Market Cap
					{#if sortBy === 'market_cap'}
						<span class="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
					{/if}
				</th>
				<th 
					class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-robinhood-blue hidden lg:table-cell"
					on:click={() => handleSort('volume')}
				>
					Volume (24h)
					{#if sortBy === 'volume'}
						<span class="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
					{/if}
				</th>
				<th class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden xl:table-cell">
					7d Chart
				</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedAssets as asset (asset.id)}
				<tr class="border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
					<td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
						{asset.market_cap_rank || '-'}
					</td>
					<td class="px-4 py-4 whitespace-nowrap">
						<a href={`/markets/${asset.id}`} class="flex items-center space-x-3 hover:text-robinhood-blue transition-colors">
							{#if asset.image}
								<img src={asset.image} alt={asset.name} class="w-8 h-8 rounded-full" />
							{/if}
							<div>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									{asset.name}
								</div>
								<div class="text-xs text-gray-500 dark:text-gray-400 uppercase">
									{asset.symbol}
								</div>
							</div>
						</a>
					</td>
					<td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900 dark:text-white">
						{formatCurrency(asset.current_price)}
					</td>
					<td class="px-4 py-4 whitespace-nowrap text-right text-sm font-semibold">
						<span class={getChangeColorClass(asset.price_change_percentage_24h)}>
							{asset.price_change_percentage_24h >= 0 ? '+' : ''}{formatPercent(asset.price_change_percentage_24h)}
						</span>
					</td>
					<td class="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-white hidden md:table-cell">
						{formatNumber(asset.market_cap)}
					</td>
					<td class="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-white hidden lg:table-cell">
						{formatNumber(asset.total_volume)}
					</td>
					<td class="px-4 py-4 whitespace-nowrap hidden xl:table-cell">
						{#if asset.sparkline_in_7d?.price}
							<div class="h-12 w-32 flex items-end space-x-0.5">
								{#each asset.sparkline_in_7d.price.slice(-20) as price}
									<div 
										class={`flex-1 rounded-t ${asset.price_change_percentage_24h >= 0 ? 'bg-crypto-green/40' : 'bg-crypto-red/40'}`}
										style="height: {(price / Math.max(...asset.sparkline_in_7d.price)) * 100}%"
									></div>
								{/each}
							</div>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	{#if assets.length === 0}
		<div class="text-center py-12 text-gray-500 dark:text-gray-400">
			<p>No assets found</p>
		</div>
	{/if}
</div>
