<script lang="ts">
  import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
  import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
  <title>NFTs - Mostlyfutures</title>
  <meta name="description" content="Explore Mostlyfutures NFT collection" />
</svelte:head>

<div class="nfts-page">
  <Hero
    title="NFT Collection"
    subtitle="Exclusive digital collectibles from the Mostlyfutures ecosystem"
    primaryCta={{ text: "View on OpenSea", href: "https://opensea.io" }}
  />

  <div class="container">
    <div class="info-section">
      <div class="icon-wrapper">
        <AnimatedIcon variant="rocket" size={64} color="#a855f7" />
      </div>
      <h2>Coming Soon</h2>
      <p class="lead">Our NFT collection is currently in development. Stay tuned for exclusive drops and community rewards.</p>
      
      <div class="features-grid">
        <div class="feature-card">
          <AnimatedIcon variant="shield" size={40} color="#60a5fa" />
          <h3>Verified Ownership</h3>
          <p>Blockchain-verified authenticity</p>
        </div>

        <div class="feature-card">
          <AnimatedIcon variant="users" size={40} color="#10b981" />
          <h3>Community Benefits</h3>
          <p>Exclusive access to trading tools</p>
        </div>

        <div class="feature-card">
          <AnimatedIcon variant="chart" size={40} color="#f59e0b" />
          <h3>Trading Perks</h3>
          <p>Special features for NFT holders</p>
        </div>
      </div>

      <div class="cta-section">
        <h3>Want to be notified?</h3>
        <p>Join our community to get early access to NFT drops</p>
        <a href="/community" class="cta-button">Join Community</a>
      </div>
    </div>
  </div>
</div>

<style>
  .nfts-page {
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .info-section {
    text-align: center;
  }

  .icon-wrapper {
    margin-bottom: 2rem;
    display: inline-flex;
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    color: white;
    margin-bottom: 1.5rem;
  }

  .lead {
    font-size: 1.25rem;
    color: rgba(229, 231, 235, 0.9);
    max-width: 600px;
    margin: 0 auto 4rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .feature-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .feature-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin: 1rem 0 0.5rem;
  }

  .feature-card p {
    color: rgba(209, 213, 219, 0.9);
  }

  .cta-section {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 3rem;
    margin-top: 4rem;
  }

  .cta-section h3 {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
  }

  .cta-section p {
    font-size: 1.125rem;
    color: rgba(229, 231, 235, 0.9);
    margin-bottom: 2rem;
  }

  .cta-button {
    display: inline-block;
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-2px);
  }
</style>
