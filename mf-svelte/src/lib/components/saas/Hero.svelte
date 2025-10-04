<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>

<section class="relative overflow-hidden bg-background">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
  
  <!-- Grid pattern -->
  <div class="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25"></div>	<div class="relative container mx-auto px-4 py-24 sm:py-32">
		<div class="max-w-4xl mx-auto text-center">
			<!-- Announcement badge -->
			<div class="mb-8">
				<span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
					🎉 New: Advanced AI Trading Signals
				</span>
			</div>
			
			<!-- Heading -->
			<h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
				Master Trading with
				<span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
				<Button size="lg" class="text-base px-8 py-3">
					Start Trading →
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
	
  
  <!-- Bottom fade -->
  <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
</section><style>
	.bg-grid-slate-200\/50 {
		background-image: url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_17_17)'%3e%3cg clip-path='url(%23clip1_17_17)' opacity='0.5'%3e%3cpath d='M.5 40V.5H40' stroke='%23e2e8f0' stroke-miterlimit='10'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_17_17'%3e%3cpath fill='%23fff' d='M0 0h40v40H0z'/%3e%3c/clipPath%3e%3cclipPath id='clip1_17_17'%3e%3cpath fill='%23fff' d='M0 0h40v40H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
	}
	
	.dark .bg-grid-slate-700\/25 {
		background-image: url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_17_17)'%3e%3cg clip-path='url(%23clip1_17_17)' opacity='0.25'%3e%3cpath d='M.5 40V.5H40' stroke='%23374151' stroke-miterlimit='10'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_17_17'%3e%3cpath fill='%23fff' d='M0 0h40v40H0z'/%3e%3c/clipPath%3e%3cclipPath id='clip1_17_17'%3e%3cpath fill='%23fff' d='M0 0h40v40H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
	}
</style>