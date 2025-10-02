<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
</script>

<svelte:head>
  <title>MostlyFutures - A Standard Appchain</title>
  <meta name="description" content="Your gateway to cryptocurrency and trading education. Learn, trade, and grow with confidence." />
</svelte:head>

<Hero 
  title="MostlyFutures" 
  subtitle="A Standard Appchain - Explore the world of trading and cryptocurrency"
  primaryCta={{ text: 'Get Started', href: '/landing' }}
  secondaryCta={{ text: 'Learn More', href: '/crypto-intro' }}
/>

<!-- Features Section -->
<section class="features">
  <div class="container">
    <div class="section-header">
      <h2>Everything you need to start trading</h2>
      <p>Comprehensive tools and education for your trading journey</p>
    </div>

    <div class="features-grid">
      <FeatureCard 
        icon="💰"
        title="How to Buy Crypto"
        description="Learn the fundamentals of purchasing cryptocurrency safely and securely. Get started with exchanges and wallets."
        href="/crypto-intro"
      />

      <FeatureCard 
        icon="📈"
        title="Learn Trading"
        description="Master the art of trading with our comprehensive guides covering stocks, futures, and forex markets."
        href="/trading-intro"
      />

      <FeatureCard 
        icon="🎨"
        title="NFT Gallery"
        description="Explore the world of NFTs and digital collectibles. Discover unique digital assets and blockchain art."
        href="/nfts"
      />

      <FeatureCard 
        icon="🚀"
        title="Start Trading"
        description="Ready to begin? Access our trading platform and start your journey to financial freedom."
        href="https://www.mostlyfutures.finance"
      />
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to start your trading journey?</h2>
      <p>Join thousands of traders who are already using MostlyFutures to grow their wealth.</p>
      <div class="cta-buttons">
        <a href="/landing" class="btn btn-primary">Get Started Free</a>
        <a href="/contact" class="btn btn-secondary">Contact Us</a>
      </div>
    </div>
  </div>
</section>

<style>
  .features {
    padding: 6rem 1rem;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-header h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #e0e7ff, #c7d2fe);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .section-header p {
    font-size: 1.25rem;
    color: rgba(156, 163, 175, 1);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .cta-section {
    padding: 6rem 1rem;
    margin: 4rem 0;
  }

  .cta-content {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 2rem;
    padding: 4rem 2rem;
    text-align: center;
    backdrop-filter: blur(12px);
  }

  .cta-content h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 800;
    margin-bottom: 1rem;
    color: white;
  }

  .cta-content p {
    font-size: 1.125rem;
    color: rgba(209, 213, 219, 0.9);
    margin-bottom: 2rem;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-primary {
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    color: white;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.16);
  }

  .btn-primary:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: rgba(75, 85, 99, 0.6);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(107, 114, 128, 0.5);
  }

  .btn-secondary:hover {
    background: rgba(75, 85, 99, 0.8);
  }
</style>