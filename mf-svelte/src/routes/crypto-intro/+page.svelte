<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
  <title>MostlyFutures - How to Buy Crypto</title>
  <meta name="description" content="Learn how to buy cryptocurrency safely and securely with our comprehensive guide." />
</svelte:head>

<Hero 
  title="How to Buy Crypto" 
  subtitle="A beginner's guide to purchasing cryptocurrency safely and securely"
  primaryCta={{ text: 'Start Trading', href: 'https://www.mostlyfutures.finance' }}
  secondaryCta={{ text: 'Learn More', href: 'https://www.amazon.com/dp/B0DXN4P2P4' }}
/>

<section class="content-section">
  <div class="container">
    <div class="content-card">
      <h2>Getting Started with Cryptocurrency</h2>
      <p>
        Buying crypto is simpler than most people think. Instead of complex exchanges or technical knowledge, 
        most people just need a user-friendly platform to get started. Cryptocurrency exchanges work similarly 
        to stock trading apps - you deposit money, select the crypto you want to buy, and confirm your purchase.
      </p>
      <p>
        The most important thing for beginners is choosing a reputable exchange with strong security, easy-to-use 
        interface, and available customer support. Once you've made your first purchase, you can either hold your 
        crypto for long-term investment or actively trade it as prices fluctuate.
      </p>
      <p>
        Many exchanges also offer educational resources to help you understand the technology behind different 
        cryptocurrencies and make more informed decisions about your investments.
      </p>
    </div>

    <div class="content-card highlight">
      <h2>What is Crypto?</h2>
      <p>
        The word "Crypto" is essentially an umbrella term for a new technology called Blockchain. Blockchain 
        technology uses code to facilitate an exchange of information instead of relying on humans which can be 
        prone to error, fraud, inefficiency problems, or just expensive in general.
      </p>
      <p>
        For example, rather than one person trusting the other party not to scam them the code in blockchain 
        will ensure the transaction is "trust-less" making the merchant relinquish the goods that money was sent for. 
        Blockchain can also use this "code" to automate human actions to eliminate human error.
      </p>
      <p>
        Imagine a world where instead of relying on a person to consistently give you the goods you paid for, 
        or information, a code makes sure you received what you paid for instead of relying on a merchant. 
        Blockchain technology can be used for data, voting systems, or any exchange of information.
      </p>
      <p>
        The biggest names in finance are already invested and actively using this technology. For example, 
        Blackrock, JPMorgan, USB, Donald Trump, and Elon Musk.
      </p>
    </div>

    <div class="cta-card">
      <h3>Ready to learn more?</h3>
      <p>Get our comprehensive guide to cryptocurrency</p>
      <a href="https://www.amazon.com/dp/B0DXN4P2P4" target="_blank" class="btn btn-primary">
        Get the Book
        <span class="arrow">→</span>
      </a>
    </div>
  </div>
</section>

<style>
  .content-section {
    padding: 4rem 1rem 6rem;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .content-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 3rem;
    margin-bottom: 2rem;
  }

  .content-card.highlight {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15));
    border-color: rgba(99, 102, 241, 0.4);
  }

  .content-card h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #e0e7ff, #c7d2fe);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
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

  .cta-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
    border: 1px solid rgba(99, 102, 241, 0.4);
    border-radius: 1.5rem;
    padding: 3rem;
    text-align: center;
  }

  .cta-card h3 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: white;
  }

  .cta-card p {
    color: rgba(209, 213, 219, 0.9);
    font-size: 1.125rem;
    margin-bottom: 2rem;
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

  @media (max-width: 768px) {
    .content-card {
      padding: 2rem;
    }
  }
</style>
    margin: 0 auto 2rem auto;
    line-height: 1.6;
    animation: fadeIn 0.5s ease-out;
    font-size: 1.1em;
  }

  .link-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 500px;
    animation: fadeIn 0.5s ease-out;
  }

  .link-card a {
    color: #fff;
    text-decoration: none;
    padding: 1.2rem;
    display: block;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-align: center;
  }

  .link-card:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  .content-section {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease;
    padding: 2rem;
  }

  :global(.content-section.visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .content-text {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 1.1em;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5em;
    }
    .main-content {
      padding: 1rem;
    }
    .content-section {
      padding: 1rem;
    }
  }
</style>