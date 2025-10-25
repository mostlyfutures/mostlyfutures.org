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
	import type { OHLCVData } from '$lib/types/crypto';
	import { formatCurrency, formatDate } from '$lib/utils/format';

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	export let data: OHLCVData[] = [];
	export let height: string = '400px';
	export let timeRange: '1h' | '4h' | '1d' | '1w' = '1d';

	let chartContainer: HTMLCanvasElement;
	let chartInstance: ChartJS | null = null;

	$: if (data.length > 0) {
		updateChart();
	}

	async function updateChart() {
		if (!data || data.length === 0 || !chartContainer) return;

		await tick();

		if (chartInstance) {
			chartInstance.destroy();
		}

		// Filter data by time range
		let filteredData: OHLCVData[] = data;

		// For simplicity, show last N candles based on time range
		const now = Date.now();
		switch (timeRange) {
			case '1h':
				filteredData = data.filter(d => now - d.timestamp <= 60 * 60 * 1000);
				break;
			case '4h':
				filteredData = data.filter(d => now - d.timestamp <= 4 * 60 * 60 * 1000);
				break;
			case '1d':
				filteredData = data.slice(-24); // Last 24 hours
				break;
			case '1w':
				filteredData = data.slice(-168); // Last 7 days (24*7)
				break;
		}

		// Sort by timestamp
		filteredData.sort((a, b) => a.timestamp - b.timestamp);

		const labels = filteredData.map(d => new Date(d.timestamp).toLocaleString());
		const opens = filteredData.map(d => d.open);
		const highs = filteredData.map(d => d.high);
		const lows = filteredData.map(d => d.low);
		const closes = filteredData.map(d => d.close);

		const ctx = chartContainer.getContext('2d');
		if (!ctx) return;

		chartInstance = new ChartJS(ctx, {
			type: 'bar',
			data: {
				labels,
				datasets: [
					{
						label: 'Open',
						data: opens,
						backgroundColor: 'rgba(59, 130, 246, 0.3)',
						borderColor: 'rgb(59, 130, 246)',
						borderWidth: 1,
						barPercentage: 0.8,
						categoryPercentage: 0.9
					},
					{
						label: 'Close',
						data: closes,
						backgroundColor: 'rgba(34, 197, 94, 0.3)',
						borderColor: 'rgb(34, 197, 94)',
						borderWidth: 1,
						barPercentage: 0.8,
						categoryPercentage: 0.9
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				animation: {
					duration: 300,
					easing: 'easeOutQuart'
				},
				scales: {
					x: {
						ticks: {
							maxTicksLimit: 10,
							maxRotation: 45
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
						display: true,
						position: 'top'
					},
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgb(59, 130, 246)',
						borderWidth: 1,
						callbacks: {
							label: (context) => {
								if (context.dataset.label === 'Open') {
									return `Open: ${formatCurrency(context.parsed.y, 2)}`;
								} else {
									return `Close: ${formatCurrency(context.parsed.y, 2)}`;
								}
							},
							afterLabel: (context) => {
								const date = new Date(context.parsed.x);
								return `Time: ${formatDate(date, true)}`;
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
	{#if data.length === 0}
		<div class="flex items-center justify-center h-full text-gray-500">
			<p>No chart data available</p>
		</div>
	{/if}
</canvas>
