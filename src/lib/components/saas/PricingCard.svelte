<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { formatCurrency } from "$lib/utils.js";
  import type { PricingPlan } from "$lib/data/mockData.js";

  export let plan: PricingPlan;
</script><Card.Root class={`relative ${plan.popular ? 'border-2 border-primary scale-105' : ''}`}>
	{#if plan.popular}
		<div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
			<span class="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
				Most Popular
			</span>
		</div>
	{/if}
	
	<Card.Header class="text-center">
		<Card.Title class="text-2xl">{plan.name}</Card.Title>
		<Card.Description>{plan.description}</Card.Description>
		<div class="mt-4">
			<span class="text-4xl font-bold">{formatCurrency(plan.price)}</span>
			<span class="text-muted-foreground">/{plan.billing}</span>
		</div>
	</Card.Header>
	
	<Card.Content>
		<ul class="space-y-3">
			{#each plan.features as feature}
				<li class="flex items-center gap-3">
					<span class="w-5 h-5 text-tufts-blue shrink-0">✓</span>
					<span class="text-sm">{feature}</span>
				</li>
			{/each}
		</ul>
	</Card.Content>
	
	<Card.Footer class="pt-6">
		<Button 
			variant={plan.popular ? 'default' : 'outline'} 
			class="w-full"
		>
			{plan.cta}
		</Button>
	</Card.Footer>
</Card.Root>