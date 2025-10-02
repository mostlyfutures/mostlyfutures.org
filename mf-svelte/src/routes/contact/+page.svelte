<script lang="ts"><svelte:head>

  import Hero from '$lib/components/Hero.svelte';  <title>Contact MostlyFutures</title>

</script></svelte:head>



<svelte:head><div class="header">Contact me at</div>

  <title>Contact - MostlyFutures</title><div class="email">mostlyfutures@gmail.com</div>

  <meta name="description" content="Get in touch with the MostlyFutures team" /><a href="/" class="back-button">Back</a>

</svelte:head>

<style>

<Hero   :global(main) {

  title="Get in Touch"     min-height: 100vh;

  subtitle="Have questions? We'd love to hear from you"    display: flex;

  primaryCta={{ text: 'Send Email', href: 'mailto:mostlyfutures@gmail.com' }}    flex-direction: column;

  secondaryCta={{ text: 'Start Trading', href: 'https://www.mostlyfutures.finance' }}    align-items: center;

/>    justify-content: center;

    padding: 2rem;

<section class="contact-section">    box-sizing: border-box;

  <div class="container">  }

    <div class="contact-card">

      <div class="contact-info">  .header {

        <div class="contact-icon">✉️</div>    font-size: 1.5em;

        <h2>Email Us</h2>    margin-bottom: 1rem;

        <a href="mailto:mostlyfutures@gmail.com" class="email-link">    animation: fadeIn 1s ease-out;

          mostlyfutures@gmail.com    font-weight: 500;

        </a>  }

        <p>We typically respond within 24 hours</p>

      </div>  .email {

    </div>    font-size: 2.2em;

    word-wrap: break-word;

    <div class="info-grid">    margin-bottom: 2rem;

      <div class="info-card">    animation: fadeIn 1s ease-out 0.3s backwards;

        <div class="info-icon">📚</div>    background: linear-gradient(to right, #60a5fa, #93c5fd);

        <h3>Educational Resources</h3>    -webkit-background-clip: text;

        <p>Access our comprehensive guides on crypto and trading</p>    background-clip: text;

        <a href="/crypto-intro" class="card-link">Learn More →</a>    color: transparent;

      </div>    font-weight: 700;

    text-align: center;

      <div class="info-card">  }

        <div class="info-icon">🚀</div>

        <h3>Trading Platform</h3>  .back-button {

        <p>Start trading with our secure and user-friendly platform</p>    background: rgba(255, 255, 255, 0.1);

        <a href="https://www.mostlyfutures.finance" class="card-link">Get Started →</a>    color: white;

      </div>    border: none;

    padding: 1rem 2rem;

      <div class="info-card">    font-size: 1em;

        <div class="info-icon">🎨</div>    cursor: pointer;

        <h3>NFT Collection</h3>    text-decoration: none;

        <p>Explore our unique digital art and collectibles</p>    border-radius: 12px;

        <a href="/nfts" class="card-link">View Gallery →</a>    transition: all 0.3s ease;

      </div>    animation: fadeIn 1s ease-out 0.6s backwards;

    </div>    backdrop-filter: blur(10px);

  }

    <div class="social-card">

      <h3>Follow Our Journey</h3>  .back-button:hover {

      <p>Stay updated with the latest news and insights from MostlyFutures</p>    background: rgba(255, 255, 255, 0.2);

      <div class="social-links">    transform: translateY(-2px);

        <a href="https://opensea.io/mostlyfutures" target="_blank" class="social-link">  }

          <span class="social-icon">🌊</span>

          <span>OpenSea</span>  @keyframes fadeIn {

        </a>    from {

        <a href="https://www.mostlyfutures.finance" target="_blank" class="social-link">      opacity: 0;

          <span class="social-icon">📈</span>      transform: translateY(-20px);

          <span>Trading</span>    }

        </a>    to {

      </div>      opacity: 1;

    </div>      transform: translateY(0);

  </div>    }

</section>  }



<style>  @media (max-width: 768px) {

  .contact-section {    .email {

    padding: 4rem 1rem 6rem;      font-size: 1.8em;

  }    }

  }

  .container {</style>
    max-width: 1100px;
    margin: 0 auto;
  }

  .contact-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
    border: 1px solid rgba(99, 102, 241, 0.4);
    border-radius: 1.5rem;
    padding: 4rem 2rem;
    margin-bottom: 3rem;
  }

  .contact-info {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  .contact-info h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: white;
  }

  .email-link {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(to right, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
    margin-bottom: 1rem;
    transition: opacity 0.3s ease;
  }

  .email-link:hover {
    opacity: 0.8;
  }

  .contact-info p {
    color: rgba(209, 213, 219, 0.8);
    font-size: 1rem;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
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
    margin-bottom: 1rem;
  }

  .card-link {
    color: #60a5fa;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .card-link:hover {
    color: #93c5fd;
  }

  .social-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 3rem 2rem;
    text-align: center;
  }

  .social-card h3 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: white;
  }

  .social-card p {
    color: rgba(209, 213, 219, 0.8);
    margin-bottom: 2rem;
    font-size: 1.0625rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(75, 85, 99, 0.6);
    border: 1px solid rgba(107, 114, 128, 0.5);
    border-radius: 0.75rem;
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: rgba(75, 85, 99, 0.8);
    transform: translateY(-2px);
  }

  .social-icon {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .contact-card {
      padding: 3rem 1.5rem;
    }

    .social-links {
      flex-direction: column;
    }

    .social-link {
      width: 100%;
      justify-content: center;
    }
  }
</style>
