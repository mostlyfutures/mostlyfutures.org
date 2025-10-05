<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
	import { navLinks } from "$lib/data/mockData.js";
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center space-x-4">
				<a href="/" class="flex items-center space-x-2">
					<span class="font-bold text-xl text-tufts-blue">
						Mostlyfutures
					</span>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-6">
				{#each navLinks as link}
					<a 
						href={link.href}
						class={`text-sm font-medium transition-colors hover:text-primary ${
							$page.url.pathname === link.href 
								? 'text-primary' 
								: 'text-muted-foreground'
						}`}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- CTA Buttons -->
			<div class="hidden md:flex items-center space-x-4">
				<Button variant="ghost" size="sm">
					Sign In
				</Button>
				<Button size="sm">
					Get Started
				</Button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<Button variant="ghost" size="icon" on:click={toggleMobileMenu}>
					{#if mobileMenuOpen}
						<span class="h-5 w-5">✕</span>
					{:else}
						<span class="h-5 w-5">☰</span>
					{/if}
				</Button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t py-4">
				<div class="flex flex-col space-y-3">
					{#each navLinks as link}
						<a 
							href={link.href}
							class={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 ${
								$page.url.pathname === link.href 
									? 'text-primary' 
									: 'text-muted-foreground'
							}`}
							on:click={() => mobileMenuOpen = false}
						>
							{link.label}
						</a>
					{/each}
					<div class="flex flex-col space-y-2 pt-4 border-t">
						<Button variant="ghost" size="sm" class="justify-start">
							Sign In
						</Button>
						<Button size="sm" class="justify-start">
							Get Started
						</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>