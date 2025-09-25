<svelte:head>
  <title>MostlyFutures - NFT Gallery</title>
</svelte:head>

<a href="/" class="back-button">Back</a>
<h1 style="animation: fadeIn 1s ease-out; margin-bottom: 0.4rem;">NFTs</h1>
<p style="text-align: center; max-width: 600px; margin: 0.4rem auto 2rem; line-height: 1.6; animation: fadeIn 1s ease-out 0.3s backwards;">a collection of my life digitized</p>
<div class="link-card">
  <a href="https://opensea.io/mostlyfutures" target="_blank">NFT Gallery</a>
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

  h1 {
    font-size: 4em;
    font-weight: 800;
    margin-top: 80px;
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
  }

  p {
    color: #fff;
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
    margin: 0 auto;
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

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5em;
      margin-top: 60px;
    }
  }
</style>