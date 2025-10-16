<script lang="ts">
	export let data: number[] = [];
	export let width: number = 120;
	export let height: number = 40;
	export let color: string = '#8b5cf6'; // purple by default
	export let lineWidth: number = 2;
	export let fill: boolean = false;
	
	$: points = createPath(data);
	$: fillPath = fill ? createFillPath(data) : '';
	
	function createPath(values: number[]): string {
		if (values.length === 0) return '';
		
		const min = Math.min(...values);
		const max = Math.max(...values);
		const range = max - min || 1;
		
		const xStep = width / (values.length - 1);
		
		return values
			.map((value, index) => {
				const x = index * xStep;
				const y = height - ((value - min) / range) * height;
				return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
			})
			.join(' ');
	}
	
	function createFillPath(values: number[]): string {
		if (values.length === 0) return '';
		const path = createPath(values);
		return `${path} L ${width} ${height} L 0 ${height} Z`;
	}
</script>

<svg {width} {height} class="inline-block" viewBox="0 0 {width} {height}" preserveAspectRatio="none">
	{#if fill && fillPath}
		<path
			d={fillPath}
			fill={color}
			opacity="0.1"
		/>
	{/if}
	{#if points}
		<path
			d={points}
			fill="none"
			stroke={color}
			stroke-width={lineWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{/if}
</svg>
