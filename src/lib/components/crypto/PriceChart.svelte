<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import {
		Chart as ChartJS,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	} from 'chart.js';
	import type { ChartOptions, ChartData } from 'chart.js';
	import { formatCurrency, formatDate } from '$lib/utils/format';
	import type { HistoricalPriceData, ChartDataPoint } from '$lib/types/crypto';

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	export let data: HistoricalPriceData | null = null;
	export let coinName: string = '';
	export let timeRange: '1d' | '7d' | '30d' | '1y' = '7d';
	export let height: string = '400px';

	let chartContainer: HTMLCanvasElement;
	let chartInstance: ChartJS | null = null;

	$: if (data && data.prices) {
		updateChart();
	}

	async function updateChart() {
		if (!data || !data.prices || !chartContainer) return;

		await tick();

		if (chartInstance) {
			chartInstance.destroy();
		}

		// Process data based on time range
		let labels: string[] = [];
		let prices: number[] = [];

		if (data.prices.length > 0) {
			const priceData = data.prices.map(([timestamp, price]) => ({
				timestamp,
				price
			}));

			// Filter by time range
			const now = Date.now();
			let filteredData: ChartDataPoint[] = [];

			switch (timeRange) {
				case '1d':
					filteredData = priceData.filter(p => now - p.timestamp <= 24 * 60 * 60 * 1000);
					break;
				case '7d':
					filteredData = priceData.filter(p => now - p.timestamp <= 7 * 24 * 60 * 60 * 1000);
					break;
				case '30d':
					filteredData = priceData.filter(p => now - p.timestamp <= 30 * 24 * 60 * 60 * 1000);
					break;
				case '1y':
					filteredData = priceData;
					break;
			}

			// Sort by timestamp
			filteredData.sort((a, b) => a.timestamp - b.timestamp);

			// Generate labels and values
			labels = filteredData.map(p => new Date(p.timestamp).toLocaleDateString());
			prices = filteredData.map(p => p.price);
		}

		const ctx = chartContainer.getContext('2d');
		if (!ctx) return;

		chartInstance = new ChartJS(ctx, {
			type: 'line',
			data: {
				labels,
				datasets: [{
					label: `${coinName} Price`,
					data: prices,
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.1)',
					borderWidth: 2,
					fill: true,
					tension: 0.4,
					pointRadius: 0,
					pointHoverRadius: 4
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				animation: {
					duration: 500,
					easing: 'easeOutQuart'
				},
				scales: {
					x: {
						ticks: {
							maxTicksLimit: 10
						}
					},
					y: {
						beginAtZero: false,
						ticks: {
							callback: (value) => formatCurrency(value as number, 2)
						}
					}
				},
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgb(59, 130, 246)',
						borderWidth: 1,
						callbacks: {
							label: (context) => formatCurrency(context.parsed.y, 2),
							afterLabel: (context) => {
								const date = new Date(context.parsed.x);
								return `Date: ${formatDate(date)}`;
							}
						}
					}
				},
				interaction: {
					mode: 'index',
					intersect: false
				}
			}
		});
	}

	onDestroy(() => {
		if (chartInstance) {
			chartInstance.destroy();
		}
	});
</script>

<canvas bind:this={chartContainer} class="w-full" style="height: {height};">
	{#if !data || data.prices.length === 0}
		<div class="flex items-center justify-center h-full text-gray-500">
			<p>Loading chart data...</p>
		</div>
	{/if}
</canvas>
