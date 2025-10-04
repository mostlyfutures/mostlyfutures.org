<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import type { Feature } from "$lib/data/mockData.js";

	export let feature: Feature;
</script>

<Card.Root class="h-full hover:shadow-lg transition-shadow duration-300">
	<Card.Header>
		<div class="mb-4">
			<!-- Icon placeholder - in a real app, you'd use proper icons -->
			<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
				<span class="text-2xl">
					{#if feature.icon === 'trending-up'}📈
					{:else if feature.icon === 'book-open'}📚
					{:else if feature.icon === 'pie-chart'}📊
					{:else if feature.icon === 'users'}👥
					{:else if feature.icon === 'activity'}⚡
					{:else if feature.icon === 'smartphone'}📱
					{:else}🚀{/if}
				</span>
			</div>
		</div>
		<Card.Title class="text-xl">{feature.title}</Card.Title>
	</Card.Header>
	
	<Card.Content>
		<Card.Description class="text-base leading-relaxed">
			{feature.description}
		</Card.Description>
		
		<div class="mt-4">
			<span class={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
				feature.category === 'trading' ? 'bg-blue-100 text-blue-800' :
				feature.category === 'education' ? 'bg-green-100 text-green-800' :
				feature.category === 'analytics' ? 'bg-purple-100 text-purple-800' :
				'bg-orange-100 text-orange-800'
			}`}>
				{feature.category}
			</span>
		</div>
	</Card.Content>
</Card.Root>