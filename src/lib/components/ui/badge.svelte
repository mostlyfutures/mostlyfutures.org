<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLAttributes } from 'svelte/elements';

	type Variant = 'default' | 'secondary' | 'destructive' | 'outline';
	type Size = 'default' | 'sm';

	interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
		variant?: Variant;
		size?: Size;
	}

	let { variant = 'default', size = 'default', class: className, ...props } = $props<BadgeProps>();

	const classes = cn(
		'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
		variant === 'default' && 'border bg-primary text-primary-foreground hover:bg-primary/80',
		variant === 'secondary' && 'border bg-secondary text-secondary-foreground hover:bg-secondary/80',
		variant === 'destructive' && 'border bg-destructive text-destructive-foreground hover:bg-destructive/80',
		variant === 'outline' && 'text-foreground',
		size === 'default' && 'px-2 py-0.5 text-xs',
		size === 'sm' && 'px-1.5 py-0.5 text-xs',
		className
	);
</script>

<span {...props} class={classes}>
	<slot />
</span>
