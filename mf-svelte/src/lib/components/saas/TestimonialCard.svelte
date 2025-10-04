<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import type { Testimonial } from "$lib/data/mockData.js";

	export let testimonial: Testimonial;
</script>

<Card.Root class="h-full">
	<Card.Header>
		<div class="flex items-center gap-1 mb-2">
			{#each Array(5) as _, i}
				<span class={`text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
			{/each}
		</div>
		<Card.Description class="text-base leading-relaxed">
			"{testimonial.content}"
		</Card.Description>
	</Card.Header>
	
	<Card.Footer class="flex items-center gap-3 pt-4">
		{#if testimonial.avatar}
			<img 
				src={testimonial.avatar} 
				alt={testimonial.name}
				class="w-10 h-10 rounded-full object-cover"
			/>
		{:else}
			<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
				<span class="text-sm font-medium">{testimonial.name.charAt(0)}</span>
			</div>
		{/if}
		<div>
			<p class="font-medium text-sm">{testimonial.name}</p>
			<p class="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
		</div>
	</Card.Footer>
</Card.Root>