<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import {
		Chart as ChartJS,
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	} from 'chart.js';
	import type { ChartOptions } from 'chart.js';
	import type { HistoricalPriceData } from '$lib/types/crypto';
	import { formatNumber, formatDate } from '$lib/utils/format';

	export let data: HistoricalPriceData | null = null;
	export let height: string = '300px';
	export let timeRange: '1d' | '7d' | '30d' = '7d';

	let chartContainer: HTMLCanvasElement;
	let chartInstance: ChartJS | null = null;

	$: if (data && data.total_volumes) {
		updateChart();
	}

	async function updateChart() {
		if (!data || !data.total_volumes || !chartContainer) return;

		await tick();

		if (chartInstance) {
			chartInstance.destroy();
		}

		// Process volume data
		let labels: string[] = [];
		let volumes: number[] = [];

		if (data.total_volumes && data.total_volumes.length > 0) {
			const volumeData = data.total_volumes.map(([timestamp, volume]) => ({
				timestamp,
				volume
			}));

			// Filter by time range
			const now = Date.now();
			let filteredData = volumeData.filter(v => {
				switch (timeRange) {
					case '1d':
						return now - v.timestamp <= 24 * 60 * 60 * 1000;
					case '7d':
						return now - v.timestamp <= 7 * 24 * 60 * 60 * 1000;
					case '30d':
						return now - v.timestamp <= 30 * 24 * 60 * 60 * 1000;
					default:
						return true;
				}
			});

			// Sort by timestamp
			filteredData.sort((a, b) => a.timestamp - b.timestamp);

			// Generate labels and values
			labels = filteredData.map(v => new Date(v.timestamp).toLocaleDateString());
			volumes = filteredData.map(v => v.volume);
		}

		const ctx = chartContainer.getContext('2d');
		if (!ctx) return;

		chartInstance = new ChartJS(ctx, {
			type: 'bar',
			data: {
				labels,
				datasets: [{
					label: 'Trading Volume',
					data: volumes,
					backgroundColor: 'rgba(99, 102, 241, 0.6)',
					borderColor: 'rgb(99, 102, 241)',
					borderWidth: 1,
					borderRadius: 4,
					borderSkipped: false
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				animation: {
					duration: 400,
					easing: 'easeOutQuart'
				},
				scales: {
					x: {
						ticks: {
							maxTicksLimit: 8,
							maxRotation: 45
						}
					},
					y: {
						beginAtZero: true,
						ticks: {
							callback: (value) => formatNumber(value as number, 0)
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
						borderColor: 'rgb(99, 102, 241)',
						borderWidth: 1,
						callbacks: {
							label: (context) => formatNumber(context.parsed.y, 0),
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
	{#if !data || !data.total_volumes || data.total_volumes.length === 0}
		<div class="flex items-center justify-center h-full text-gray-500">
			<p>No volume data available</p>
		</div>
	{/if}
</canvas>
