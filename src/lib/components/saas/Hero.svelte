<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>

<section class="relative overflow-hidden bg-background">
  <!-- Solid background -->
  <div class="absolute inset-0 bg-alice-blue dark:bg-cool-black"></div>
  
  <!-- Grid pattern -->
  <div class="absolute inset-0 bg-grid-mostlyfutures dark:bg-grid-dark"></div>	<div class="relative container mx-auto px-4 py-24 sm:py-32">
		<div class="max-w-4xl mx-auto text-center">
			<!-- Announcement badge -->
			<div class="mb-8">
				<span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
					🎉 New: Advanced AI Trading Signals
				</span>
			</div>
			
			<!-- Heading -->
			<h1 class="text-4xl font-bold tracking-tight text-cool-black sm:text-6xl lg:text-7xl">
				Master Trading with
				<span class="text-tufts-blue font-bold">
					Professional Tools
				</span>
			</h1>
			
			<!-- Subheading -->
			<p class="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
				Join thousands of traders who use our platform to trade crypto, forex, and futures with confidence. 
				Learn from experts, get real-time signals, and track your performance.
			</p>
			
			<!-- CTA Buttons -->
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button size="lg" class="text-base px-8 py-3" asChild>
					<a href="/markets">
						Explore Markets →
					</a>
				</Button>
				<Button variant="outline" size="lg" class="text-base px-8 py-3">
					▶ Watch Demo
				</Button>
			</div>
			
			<!-- Stats -->
			<div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
				<div class="flex flex-col items-center">
					<div class="text-2xl font-bold text-foreground">50K+</div>
					<div class="text-sm text-muted-foreground">Active Traders</div>
				</div>
				<div class="flex flex-col items-center">
					<div class="text-2xl font-bold text-foreground">$2B+</div>
					<div class="text-sm text-muted-foreground">Trading Volume</div>
				</div>
				<div class="flex flex-col items-center">
					<div class="text-2xl font-bold text-foreground">98%</div>
					<div class="text-sm text-muted-foreground">Uptime</div>
				</div>
				<div class="flex flex-col items-center">
					<div class="text-2xl font-bold text-foreground">24/7</div>
					<div class="text-sm text-muted-foreground">Support</div>
				</div>
			</div>
		</div>
	</div>
	
  

</section>