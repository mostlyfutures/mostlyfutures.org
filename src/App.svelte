<script lang="ts">
  import { onMount } from 'svelte';
  
  let navMenu: HTMLElement;
  let hamburgerMenu: HTMLElement;

  onMount(() => {
    // Google Analytics setup
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-4FK2QXK688');

    // Hamburger menu functionality
    if (hamburgerMenu && navMenu) {
      hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  });
</script>

<svelte:head>
  <title>MostlyFutures</title>
  <meta
    name="description"
    content="Explore the world of stocks, crypto, futures, and NFTs with MostlyFutures. Start your trading journey today and learn how to trade for beginners"
  />
  <meta
    name="keywords"
    content="stocks, crypto, futures, NFTs, trading, invest, beginners, start trading, gallery, start trading, start stocks, start investing, where to start investing, robinhood"
  />
  <meta name="author" content="MostlyFutures" />
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-4FK2QXK688"
  ></script>
</svelte:head>

<a href="index2.html" class="info-circle">i</a>
<div class="hamburger-menu" bind:this={hamburgerMenu}>
  <span></span>
  <span></span>
  <span></span>
</div>
<nav class="nav-menu" bind:this={navMenu}>
  <a href="crypto-intro.html">Crypto Introduction</a>
  <a href="trading-intro.html">Trading</a>
  <a href="/mfSart/landing.html">Sart</a>
</nav>
<div class="main-content">
  <div class="compass-container">
    <div class="compass"></div>
  </div>
  <h1>MostlyFutures</h1>
  <div class="subtitle-text">
    Explore the world of trading and cryptocurrency
  </div>
  <div class="links">
    <div class="link-card">
      <a href="crypto-intro.html">How to Buy Crypto</a>
    </div>
    <div class="link-card">
      <a href="trading-intro.html">Learn Trading</a>
    </div>
    <div class="link-card">
      <a href="nfts.html">NFT Gallery</a>
    </div>
    <div class="link-card">
      <a href="/mfDex/dex.html">Start Trading</a>
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
    background: linear-gradient(135deg, #1e40af, #3b82f6);
    color: #fff;
    padding: 2rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .hamburger-menu {
    display: block;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    cursor: pointer;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
  }

  .hamburger-menu span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: white;
    transition: 0.3s;
  }

  .compass-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .compass {
    font-size: 20px;
    animation: spin 1s infinite linear;
    align-items: center;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background: rgba(30, 64, 175, 0.95);
    backdrop-filter: blur(10px);
    padding-top: 60px;
    transition: 0.3s;
    z-index: 999;
  }

  :global(.nav-menu.active) {
    right: 0;
  }

  .nav-menu a {
    display: block;
    padding: 15px 30px;
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    transition: 0.3s;
  }

  .nav-menu a:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    .hamburger-menu {
      display: block;
    }
    .links {
      display: flex;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
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

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .main-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 5em;
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: fadeIn 1s ease-out;
    text-align: center;
  }

  .subtitle-text {
    font-size: 1.5em;
    font-weight: 800;
    margin-bottom: 4rem;
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    opacity: 0;
    animation: fadeIn 1s ease-out 0.3s forwards;
    text-align: center;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    animation: fadeIn 1s ease-out 0.3s backwards;
  }

  .link-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    margin-left: -2.17px;
    overflow: hidden;
    transition: all 0.3s ease;
    animation: slideIn 0.5s ease-out backwards;
  }

  @media only screen and (max-width: 768px) {
    .link-card {
      margin-left: 0;
      margin-right: -7.5px;
    }
  }

  .link-card:nth-child(1) {
    animation-delay: 0.4s;
  }
  .link-card:nth-child(2) {
    animation-delay: 0.6s;
  }
  .link-card:nth-child(3) {
    animation-delay: 0.8s;
  }
  .link-card:nth-child(4) {
    animation-delay: 1s;
  }
  .link-card:nth-child(5) {
    animation-delay: 1.2s;
  }
  .link-card:nth-child(6) {
    animation-delay: 1.4s;
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

  .info-circle {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    transition: all 0.3s ease;
    animation: fadeIn 1s ease-out 1.2s backwards;
  }

  .info-circle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3em;
    }
    .info-circle {
      width: 35px;
      height: 35px;
      font-size: 1em;
    }
  }
</style>
