<script lang="ts">
  import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';
</script>

<svelte:head>
  <title>Contact - Mostlyfutures</title>
  <meta name="description" content="Get in touch with the Mostlyfutures team" />
</svelte:head>

<div class="contact-page">
  <div class="container">
    <div class="header">
      <h1>Get in <span class="highlight">touch</span></h1>
      <p>Have questions? We'd love to hear from you.</p>
    </div>

    <div class="contact-grid">
      <div class="contact-card">
        <Tooltip content="Email us directly">
          <div class="card-content">
            <div class="icon">
              <AnimatedIcon variant="default" size={48} color="#60a5fa" />
            </div>
            <h3>Email Us</h3>
            <a href="mailto:mostlyfutures@gmail.com" class="contact-link">
              mostlyfutures@gmail.com
            </a>
            <p class="description">We typically respond within 24 hours</p>
          </div>
        </Tooltip>
      </div>

      <div class="contact-card">
        <Tooltip content="Get technical support">
          <div class="card-content">
            <div class="icon">
              <AnimatedIcon variant="shield" size={48} color="#10b981" />
            </div>
            <h3>Support</h3>
            <p class="description">Technical support and platform assistance</p>
          </div>
        </Tooltip>
      </div>

      <div class="contact-card">
        <Tooltip content="Join our community">
          <div class="card-content">
            <div class="icon">
              <AnimatedIcon variant="users" size={48} color="#a855f7" />
            </div>
            <h3>Community</h3>
            <p class="description">Join our community for discussions</p>
          </div>
        </Tooltip>
      </div>
    </div>
  </div>
</div>

<style>
  .contact-page {
    min-height: 100vh;
    padding: 6rem 2rem 4rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: white;
  }

  .highlight {
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .header p {
    font-size: 1.25rem;
    color: rgba(229, 231, 235, 0.9);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .contact-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2.5rem;
    transition: all 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .card-content {
    text-align: center;
  }

  .icon {
    margin-bottom: 1.5rem;
  }

  .contact-card h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  .contact-link {
    display: block;
    font-size: 1.25rem;
    color: #60a5fa;
    text-decoration: none;
    margin-bottom: 1rem;
  }

  .description {
    color: rgba(209, 213, 219, 0.9);
  }
</style>
