<script lang="ts">
  export let title: string;
  export let description: string;
  export let icon: string = '🚀';
  export let href: string | null = null;
</script>

{#if href}
  <a {href} class="feature-card">
    <div class="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div class="learn-more">
      Learn more <span class="arrow">→</span>
    </div>
  </a>
{:else}
  <div class="feature-card static">
    <div class="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
{/if}

<style>
  .feature-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.3s ease;
    text-decoration: none;
    display: block;
    position: relative;
    overflow: hidden;
  }

  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .feature-card:hover::before {
    opacity: 1;
  }

  .feature-card:not(.static):hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.3);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: white;
    position: relative;
    z-index: 1;
  }

  p {
    color: rgba(209, 213, 219, 0.8);
    line-height: 1.6;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .learn-more {
    color: #60a5fa;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    z-index: 1;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .feature-card:hover .arrow {
    transform: translateX(4px);
  }

  .static {
    cursor: default;
  }
</style>
