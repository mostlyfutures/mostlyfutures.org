<script lang="ts">
  import { onMount } from 'svelte';
  
  let contentSection: HTMLElement;

  onMount(() => {
    const handleScroll = () => {
      if (contentSection) {
        const contentPosition = contentSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (contentPosition < screenPosition) {
          contentSection.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:head>
  <title>MostlyFutures - Crypto</title>
</svelte:head>

<a href="/" class="back-button">Back</a>
<div class="main-content">
  <h1 style="animation: fadeIn 1s ease-out;">How to Buy Crypto</h1>
  <div class="crypto-description">
    Buying crypto is simpler than most people think. Instead of complex exchanges or technical knowledge, most people just need a user-friendly platform to get started. Cryptocurrency exchanges work similarly to stock trading apps - you deposit money, select the crypto you want to buy, and confirm your purchase. The most important thing for beginners is choosing a reputable exchange with strong security, easy-to-use interface, and available customer support. Once you've made your first purchase, you can either hold your crypto for long-term investment or actively trade it as prices fluctuate. Many exchanges also offer educational resources to help you understand the technology behind different cryptocurrencies and make more informed decisions about your investments.
  </div>
  <div class="link-card">
    <a href="https://www.amazon.com/dp/B0DXN4P2P4" target="_blank">Learn More About Crypto</a>
  </div>
</div>

<div bind:this={contentSection} class="content-section">
  <h1>What is Crypto?</h1>
  <p class="content-text">
    The word "Crypto" is essentially an umbrella term for a new technology
    called Blockchain. Blockchain technology uses code to facilitate an
    exchange of information instead of relying on humans which can be prone
    to error, fraud, inefficiency problems, or just expensive in general.
    For example, rather than one person trusting the other party not to scam
    them the code in blockchain will ensure the transaction is "trust-less"
    making the merchant relinquish the goods that money was sent for.
    Blockchain can also use this "code" to automate human actions to
    eliminate human error. Imagine a world where instead of relying on a
    person to consistently give you the goods you paid for, or information,
    a code makes sure you received what you paid for instead of relying on a
    merchant. Blockchain technology can be used for data, voting systems, or
    any exchange of information. The biggest names in finance are already
    invested and actively using this technology. For example, Blackrock,
    JPMorgan, USB, Donald Trump, and Elon Musk.
  </p>
</div>

<style>
  .back-button {
    position: fixed;
    top: 20px;
    left: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    z-index: 1001;
  }

  .back-button:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .main-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  h1 {
    font-size: 3.5em;
    font-weight: 800;
    margin-bottom: 2rem;
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
  }

  .crypto-description {
    text-align: center;
    max-width: 800px;
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