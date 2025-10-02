<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let primaryCta: { text: string; href: string } = { text: 'Get Started', href: '/landing' };
  export let secondaryCta: { text: string; href: string } | null = null;
</script>

<section class="hero">
  <div class="hero-container">
    <!-- Animated Background Elements -->
    <div class="bg-gradient gradient-1"></div>
    <div class="bg-gradient gradient-2"></div>
    
    <div class="hero-content">
      <h1 class="hero-title">
        {title}
      </h1>
      <p class="hero-subtitle">
        {subtitle}
      </p>
      
      <div class="hero-ctas">
        <a href={primaryCta.href} class="btn btn-primary">
          <span>{primaryCta.text}</span>
          <span class="arrow">→</span>
        </a>
        {#if secondaryCta}
          <a href={secondaryCta.href} class="btn btn-secondary">
            {secondaryCta.text}
          </a>
        {/if}
      </div>

      <slot name="extra" />
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 1rem 4rem;
    overflow: hidden;
  }

  .hero-container {
    position: relative;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }

  .bg-gradient {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.5;
    animation: float 20s ease-in-out infinite;
  }

  .gradient-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, #6366f1 0%, transparent 70%);
    top: -200px;
    left: -200px;
  }

  .gradient-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #a78bfa 0%, transparent 70%);
    bottom: -150px;
    right: -150px;
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  .hero-content {
    position: relative;
    text-align: center;
    z-index: 1;
  }

  .hero-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(
      to right,
      #e0e7ff,
      #c7d2fe,
      #e0e7ff,
      #ddd6fe,
      #e0e7ff
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradient 6s linear infinite;
  }

  @keyframes gradient {
    to {
      background-position: 200% center;
    }
  }

  .hero-subtitle {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    color: rgba(199, 210, 254, 0.8);
    max-width: 48rem;
    margin: 0 auto 2.5rem;
    line-height: 1.6;
  }

  .hero-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
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
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.16),
                0 10px 30px -10px rgba(99, 102, 241, 0.5);
  }

  .btn-primary:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-2px);
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.16),
                0 15px 40px -10px rgba(99, 102, 241, 0.6);
  }

  .btn-secondary {
    background: linear-gradient(to bottom, rgb(31, 41, 55), rgba(31, 41, 55, 0.6));
    color: rgba(209, 213, 219, 1);
    border: 1px solid transparent;
    position: relative;
  }

  .btn-secondary::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(to right, rgb(31, 41, 55), rgb(55, 65, 81), rgb(31, 41, 55));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .btn-secondary:hover {
    background: linear-gradient(to bottom, rgb(55, 65, 81), rgba(55, 65, 81, 0.6));
  }

  .arrow {
    transition: transform 0.3s ease;
    color: rgba(255, 255, 255, 0.5);
  }

  .btn-primary:hover .arrow {
    transform: translateX(3px);
    color: white;
  }

  @media (max-width: 640px) {
    .hero-ctas {
      flex-direction: column;
      width: 100%;
      max-width: 20rem;
      margin: 0 auto;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
