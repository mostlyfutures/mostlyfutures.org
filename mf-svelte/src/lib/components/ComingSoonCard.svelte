<script lang="ts">
	import * as Card from "$lib/components/ui/card";

	interface Props {
		title: string;
		description: string;
		category?: string;
		icon?: string;
	}

	let { title, description, category, icon }: Props = $props();
</script>

<Card.Root class="h-full hover:shadow-lg transition-all duration-300 border-dashed border-2 opacity-75 hover:opacity-100">
	<Card.Header>
		<div class="mb-4 flex items-center gap-3">
			<div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-tufts-blue/20 to-jordy-blue/20">
				{#if icon}
					<span class="text-2xl">{icon}</span>
				{:else}
					<span class="text-2xl">✨</span>
				{/if}
			</div>
		</div>
		<Card.Title class="text-xl flex items-center gap-2">
			{title}
			<span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-tufts-blue/10 text-tufts-blue">
				Coming Soon
			</span>
		</Card.Title>
	</Card.Header>

	<Card.Content>
		<Card.Description class="text-base leading-relaxed">
			{description}
		</Card.Description>

		{#if category}
			<div class="mt-4">
				<span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-alice-blue text-cool-black">
					{category}
				</span>
			</div>
		{/if}
	</Card.Content>
</Card.Root>
