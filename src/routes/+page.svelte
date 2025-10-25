<script lang="ts">
  import Hero from '$lib/components/saas/Hero.svelte';
  import FeatureCard from '$lib/components/saas/FeatureCard.svelte';
  import TestimonialCard from '$lib/components/saas/TestimonialCard.svelte';
  import { Button } from '$lib/components/ui/button';
  import { features, testimonials } from '$lib/data/mockData.js';
</script>

<svelte:head>
  <title>Mostlyfutures - Professional Trading Platform</title>
  <meta name="description" content="Master trading with professional tools, education, and community. Trade crypto, forex, and futures with confidence." />
</svelte:head>

<Hero />

<!-- Features Section -->
<section class="py-24 bg-muted/50">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        Everything you need to 
        <span class="text-tufts-blue font-bold">
          succeed in trading
        </span>
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Comprehensive tools, education, and community support to help you become a profitable trader
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <FeatureCard {feature} />
      {/each}
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-24">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        Trusted by traders worldwide
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Join thousands of successful traders who have transformed their trading with our platform
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each testimonials as testimonial}
        <TestimonialCard {testimonial} />
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4 text-center">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
        Ready to start your trading journey?
      </h2>
      <p class="text-lg mb-8 opacity-90">
        Join thousands of traders who are already using Mostlyfutures to grow their wealth. 
        Start with our free plan and upgrade as you grow.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" class="text-base px-8">
          Start Free Trial →
        </Button>
        <Button size="lg" variant="outline" class="text-base px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
          View Pricing
        </Button>
      </div>
    </div>
  </div>
</section>