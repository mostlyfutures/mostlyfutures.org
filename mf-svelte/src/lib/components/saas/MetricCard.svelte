<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { formatPercentage } from "$lib/utils.js";
	import type { DashboardMetric } from "$lib/data/mockData.js";
	import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';

	// Icon mapping - in a real app, you'd use a proper icon library
	const getIconComponent = (iconName: string) => {
		// This is a placeholder - you'd import actual icons from lucide-svelte
		return iconName;
	};

	export let metric: DashboardMetric;
</script>

<Card.Root>
	<Card.Content class="p-6">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-sm font-medium text-muted-foreground">{metric.label}</p>
				<p class="text-2xl font-bold">{metric.value}</p>
			</div>
			<div class="h-8 w-8 text-muted-foreground">
				<Tooltip content={metric.label} placement="top">
					<div>
						<AnimatedIcon size={32} color="#468BE6" variant="default" />
					</div>
				</Tooltip>
			</div>
		</div>
		
		<div class="mt-4 flex items-center text-sm">
			<span class={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
				metric.changeType === 'positive' 
					? 'bg-green-100 text-green-800' 
					: metric.changeType === 'negative'
					? 'bg-red-100 text-red-800'
					: 'bg-gray-100 text-gray-800'
			}`}>
				{formatPercentage(metric.change)}
			</span>
			<span class="ml-2 text-muted-foreground">vs last month</span>
		</div>
	</Card.Content>
</Card.Root>