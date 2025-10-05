<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
  <title>MostlyFutures - NFT Gallery</title>
  <meta name="description" content="Explore our collection of digital assets and NFTs" />
</svelte:head>

<a href="/" class="back-button">Back</a>

<h1 style="animation: fadeIn 1s ease-out; margin-bottom: 0.4rem;">NFTs</h1>
<p style="text-align: center; max-width: 600px; margin: 0.4rem auto 2rem; line-height: 1.6; animation: fadeIn 1s ease-out 0.3s backwards;">a collection of my life digitized</p>

<div class="link-card">
  <a href="https://opensea.io/mostlyfutures" target="_blank">NFT Gallery</a>
</div>

<Hero

  title="NFT Gallery" 

  subtitle="A collection of my life digitized - Explore unique digital assets on the blockchain"<style>

  primaryCta={{ text: 'View on OpenSea', href: 'https://opensea.io/mostlyfutures' }}  .back-button {

  secondaryCta={{ text: 'Learn About NFTs', href: '/crypto-intro' }}    position: fixed;

/>    top: 20px;

    left: 20px;

<section class="content-section">    background: rgba(255, 255, 255, 0.1);

  <div class="container">    backdrop-filter: blur(10px);

    <div class="content-card">    padding: 10px 20px;

      <h2>What are NFTs?</h2>    border-radius: 8px;

      <p>    color: white;

        NFTs (Non-Fungible Tokens) are unique digital assets verified using blockchain technology. Unlike     text-decoration: none;

        cryptocurrencies such as Bitcoin or Ethereum, each NFT has a distinct value and cannot be exchanged     transition: all 0.3s ease;

        on a one-to-one basis.    z-index: 1001;

      </p>  }

      <p>

        NFTs can represent ownership of digital art, collectibles, music, videos, virtual real estate, and more.   .back-button:hover {

        They provide creators with new ways to monetize their work and give collectors verifiable proof of ownership     background: rgba(255, 255, 255, 0.2);

        and authenticity.  }

      </p>

    </div>  h1 {

    font-size: 4em;

    <div class="gallery-card">    font-weight: 800;

      <div class="gallery-content">    margin-top: 80px;

        <div class="gallery-icon">🎨</div>    background: linear-gradient(to right, #60a5fa, #93c5fd);

        <h3>Visit Our OpenSea Collection</h3>    -webkit-background-clip: text;

        <p>Explore our complete NFT collection on OpenSea, the world's largest NFT marketplace.</p>    background-clip: text;

        <a href="https://opensea.io/mostlyfutures" target="_blank" class="btn btn-primary">    color: transparent;

          View Collection    text-align: center;

          <span class="arrow">→</span>  }

        </a>

      </div>  p {

    </div>    color: #fff;

    font-size: 1.1em;

    <div class="info-grid">  }

      <div class="info-card">

        <div class="info-icon">🔒</div>  .link-card {

        <h3>Secure Ownership</h3>    background: rgba(255, 255, 255, 0.05);

        <p>Blockchain technology ensures verifiable and immutable proof of ownership.</p>    backdrop-filter: blur(10px);

      </div>    border-radius: 12px;

    overflow: hidden;

      <div class="info-card">    transition: all 0.3s ease;

        <div class="info-icon">💎</div>    width: 100%;

        <h3>Digital Scarcity</h3>    max-width: 500px;

        <p>Each NFT is unique or part of a limited edition, creating genuine digital scarcity.</p>    animation: fadeIn 0.5s ease-out;

      </div>    margin: 0 auto;

  }

      <div class="info-card">

        <div class="info-icon">🌐</div>  .link-card a {

        <h3>Global Marketplace</h3>    color: #fff;

        <p>Buy, sell, and trade NFTs with collectors worldwide on decentralized platforms.</p>    text-decoration: none;

      </div>    padding: 1.2rem;

    </div>    display: block;

  </div>    font-size: 1.1em;

</section>    font-weight: 500;

    letter-spacing: 0.5px;

<style>    text-align: center;

  .content-section {  }

    padding: 4rem 1rem 6rem;

  }  .link-card:hover {

    transform: translateY(-2px);

  .container {    background: rgba(255, 255, 255, 0.1);

    max-width: 1100px;    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

    margin: 0 auto;  }

  }

  @keyframes fadeIn {

  .content-card {    from {

    background: rgba(17, 24, 39, 0.6);      opacity: 0;

    backdrop-filter: blur(12px);      transform: translateY(-20px);

    border: 1px solid rgba(99, 102, 241, 0.3);    }

    border-radius: 1.5rem;    to {

    padding: 3rem;      opacity: 1;

    margin-bottom: 2rem;      transform: translateY(0);

  }    }

  }

  .content-card h2 {

    font-size: 2rem;  @media (max-width: 768px) {

    font-weight: 800;    h1 {

    margin-bottom: 1.5rem;      font-size: 2.5em;

    background: linear-gradient(to right, #e0e7ff, #c7d2fe);      margin-top: 60px;

    -webkit-background-clip: text;    }

    background-clip: text;  }

    color: transparent;</style>
  }

  .content-card p {
    color: rgba(229, 231, 235, 0.9);
    line-height: 1.8;
    font-size: 1.0625rem;
    margin-bottom: 1.5rem;
  }

  .content-card p:last-child {
    margin-bottom: 0;
  }

  .gallery-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
    border: 1px solid rgba(99, 102, 241, 0.4);
    border-radius: 1.5rem;
    padding: 4rem 2rem;
    margin-bottom: 3rem;
  }

  .gallery-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .gallery-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  .gallery-content h3 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: white;
  }

  .gallery-content p {
    color: rgba(209, 213, 219, 0.9);
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.6;
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

  .arrow {
    transition: transform 0.3s ease;
  }

  .btn-primary:hover .arrow {
    transform: translateX(3px);
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .info-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .info-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .info-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: white;
  }

  .info-card p {
    color: rgba(209, 213, 219, 0.8);
    line-height: 1.6;
    font-size: 0.9375rem;
  }

  @media (max-width: 768px) {
    .content-card {
      padding: 2rem;
    }

    .gallery-card {
      padding: 3rem 1.5rem;
    }
  }
</style>
