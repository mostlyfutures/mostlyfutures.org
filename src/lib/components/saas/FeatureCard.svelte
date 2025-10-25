<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import type { Feature } from "$lib/data/mockData.js";
	import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import { categoryIcon } from '$lib/components/icons';

	export let feature: Feature;
	
	$: icon = categoryIcon(feature.category);
</script>

<Card.Root class="h-full hover:shadow-lg transition-shadow duration-300">
	<Card.Header>
		<div class="mb-4">
			<Tooltip content={feature.title} placement="top">
				<div class="w-12 h-12 rounded-lg flex items-center justify-center">
					<AnimatedIcon size={40} color={icon.color} variant={icon.variant} />
				</div>
			</Tooltip>
		</div>
		<Card.Title class="text-xl">{feature.title}</Card.Title>
	</Card.Header>
	
	<Card.Content>
		<Card.Description class="text-base leading-relaxed">
			{feature.description}
		</Card.Description>
		
		<div class="mt-4">
			<span class={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
				feature.category === 'trading' ? 'bg-tufts-blue/10 text-tufts-blue' :
				feature.category === 'education' ? 'bg-jordy-blue/10 text-jordy-blue' :
				feature.category === 'analytics' ? 'bg-alice-blue text-cool-black' :
				'bg-primary/10 text-primary'
			}`}>
				{feature.category}
			</span>
		</div>
	</Card.Content>
</Card.Root>