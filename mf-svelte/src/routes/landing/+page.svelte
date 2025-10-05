<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
</script>

<svelte:head>
  <title>MostlyFutures - Start Your Trading Journey</title>
  <meta name="description" content="Begin your cryptocurrency and trading journey with comprehensive guides and tools." />
</svelte:head>

<Hero 
  title="Start Your Trading Journey" 
  subtitle="From beginner to expert - we'll guide you every step of the way"
  primaryCta={{ text: 'Start Trading Now', href: 'https://www.mostlyfutures.finance' }}
  secondaryCta={{ text: 'Learn the Basics', href: '/crypto-intro' }}
/>

<section class="steps">
  <div class="container">
    <div class="section-header">
      <h2>Your Path to Success</h2>
      <p>Follow these simple steps to get started</p>
    </div>

    <div class="steps-grid">
      <div class="step">
        <div class="step-number">1</div>
        <h3>Learn the Basics</h3>
        <p>Start with our comprehensive guides on cryptocurrency and trading fundamentals.</p>
        <a href="/crypto-intro" class="step-link">Get Started →</a>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Choose Your Market</h3>
        <p>Explore different trading markets - crypto, stocks, futures, or forex.</p>
        <a href="/trading-intro" class="step-link">Learn More →</a>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Start Trading</h3>
        <p>Put your knowledge into practice with our secure trading platform.</p>
        <a href="https://www.mostlyfutures.finance" class="step-link">Begin Trading →</a>
      </div>
    </div>
  </div>
</section>

<section class="features-section">
  <div class="container">
    <div class="features-grid">
      <FeatureCard 
        icon="💰"
        title="How to Buy Crypto"
        description="Simple guide to purchasing your first cryptocurrency"
        href="/crypto-intro"
      />

      <FeatureCard 
        icon="📈"
        title="Trading Strategies"
        description="Learn proven strategies from experienced traders"
        href="/trading-intro"
      />

      <FeatureCard 
        icon="🎨"
        title="NFT Gallery"
        description="Discover and collect unique digital assets"
        href="/nfts"
      />
    </div>
  </div>
</section>

<style>
  .steps {
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

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .step {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .step:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .step-number {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 auto 1.5rem;
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
  }

  .step h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  .step p {
    color: rgba(209, 213, 219, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .step-link {
    color: #60a5fa;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .step-link:hover {
    color: #93c5fd;
  }

  .features-section {
    padding: 4rem 1rem 6rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
</style>