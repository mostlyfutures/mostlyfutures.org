<svelte:head>
  <title>MostlyFutures</title>
</svelte:head>

<div class="main-content">
  <div class="compass-container">
    
  </div>
  <h1>MostlyFutures</h1>
  <div class="subtitle-text">A Standerd Appchain</div>
  <div class="links">
    <div class="link-card">
      <a href="/crypto-intro">How to Buy Crypto</a>
    </div>
    <div class="link-card">
      <a href="/trading-intro">Learn Trading</a>
    </div>
    <div class="link-card">
      <a href="/nfts">NFT Gallery</a>
    </div>
    <div class="link-card">
      <a href="/dex">Start Trading</a>
    </div>
  </div>
</div>

<style>
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
    animation: slideIn 1s ease-out 0.5s forwards;
    text-align: center;
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

  .links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1200px;
    animation: slideIn 1s ease-out 1s backwards;
  }

  .link-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
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

  @media (max-width: 768px) {
    h1 {
      font-size: 3em;
    }
    .links {
      grid-template-columns: 1fr;
    }
  }
</style>