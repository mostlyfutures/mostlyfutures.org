<script lang="ts">
  import FeatureCard from '$lib/components/saas/FeatureCard.svelte';
  import { Button } from '$lib/components/ui/button';
  import { features } from '$lib/data/mockData.js';
  
  const featureCategories = [
    { id: 'trading', name: 'Trading Tools', icon: '📊', color: 'blue' },
    { id: 'education', name: 'Education', icon: '👥', color: 'green' },
    { id: 'analytics', name: 'Analytics', icon: '⚡', color: 'purple' },
    { id: 'community', name: 'Community', icon: '🛡️', color: 'orange' }
  ];
  
  let selectedCategory: string | null = null;
  
  $: filteredFeatures = selectedCategory 
    ? features.filter(f => f.category === selectedCategory)
    : features;
</script>

<svelte:head>
  <title>Features - MostlyFutures</title>
  <meta name="description" content="Discover powerful trading tools, comprehensive education, advanced analytics, and vibrant community features." />
</svelte:head>

<div class="container mx-auto px-4 py-24">
  <!-- Header -->
  <div class="text-center mb-16">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
      Powerful features for 
      <span class="text-tufts-blue font-bold">
        serious traders
      </span>
    </h1>
    <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
      Everything you need to analyze markets, execute trades, and grow your portfolio with confidence.
    </p>
  </div>

  <!-- Feature Categories -->
  <div class="flex flex-wrap justify-center gap-4 mb-12">
    <Button 
      variant={selectedCategory === null ? 'default' : 'outline'}
      on:click={() => selectedCategory = null}
    >
      All Features
    </Button>
    {#each featureCategories as category}
      <Button 
        variant={selectedCategory === category.id ? 'default' : 'outline'}
        on:click={() => selectedCategory = category.id}
        class="capitalize"
      >
        <svelte:component this={category.icon} class="mr-2 h-4 w-4" />
        {category.name}
      </Button>
    {/each}
  </div>

  <!-- Features Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {#each filteredFeatures as feature}
      <FeatureCard {feature} />
    {/each}
  </div>

  <!-- Detailed Feature Sections -->
  <div class="space-y-24">
    <!-- Trading Tools Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-6">Advanced Trading Tools</h2>
        <p class="text-muted-foreground text-lg mb-6">
          Professional-grade tools designed to give you an edge in the markets. From real-time signals 
          to advanced charting, we provide everything you need to make informed trading decisions.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>AI-powered trading signals with 85%+ accuracy</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Real-time market data and news integration</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Advanced charting with 100+ technical indicators</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Risk management and position sizing tools</span>
          </li>
        </ul>
        <Button>
          Explore Trading Tools →
        </Button>
      </div>
      <div class="bg-alice-blue dark:bg-cool-black/20 rounded-2xl p-8">
        <!-- Placeholder for feature image/demo -->
        <div class="aspect-square bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center">
          <span class="text-6xl text-blue-500">📊</span>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="order-2 lg:order-1 bg-jordy-blue/20 dark:bg-cool-black/20 rounded-2xl p-8">
        <div class="aspect-square bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center">
          <span class="text-6xl text-green-500">👥</span>
        </div>
      </div>
      <div class="order-1 lg:order-2">
        <h2 class="text-3xl font-bold mb-6">Comprehensive Education</h2>
        <p class="text-muted-foreground text-lg mb-6">
          Learn from industry experts through our structured curriculum. Whether you're a beginner 
          or advanced trader, our educational resources will help you improve your skills and strategies.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Step-by-step courses from beginner to advanced</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Live webinars and market analysis sessions</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Interactive quizzes and practical exercises</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Certificates of completion for each course</span>
          </li>
        </ul>
        <Button>
          Start Learning →
        </Button>
      </div>
    </section>

    <!-- Analytics Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3ml font-bold mb-6">Portfolio Analytics</h2>
        <p class="text-muted-foreground text-lg mb-6">
          Track your performance with detailed analytics and insights. Understand your trading patterns, 
          identify areas for improvement, and optimize your strategies for better results.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Detailed performance tracking and reporting</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Risk analysis and drawdown protection</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Tax reporting and trade history export</span>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Custom dashboard with key metrics</span>
          </li>
        </ul>
        <Button>
          View Analytics →
        </Button>
      </div>
      <div class="bg-tufts-blue/20 dark:bg-cool-black/20 rounded-2xl p-8">
        <div class="aspect-square bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center">
          <span class="text-6xl text-purple-500">⚡</span>
        </div>
      </div>
    </section>
  </div>

  <!-- CTA Section -->
  <div class="text-center mt-24">
    <div class="bg-tufts-blue rounded-2xl p-12 text-white">
      <h2 class="text-3xl font-bold mb-4">Ready to experience these features?</h2>
      <p class="text-lg mb-8 opacity-90">
        Start your free trial today and see how our platform can transform your trading.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary">
          Start Free Trial
        </Button>
        <Button size="lg" variant="outline" class="bg-transparent border-white text-white hover:bg-white hover:text-primary">
          Schedule Demo
        </Button>
      </div>
    </div>
  </div>
</div>