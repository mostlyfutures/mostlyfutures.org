<script lang="ts">
  import { onMount } from 'svelte';
  
  let isScrolled = false;
  let mobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="header" class:scrolled={isScrolled}>
  <div class="header-container">
    <div class="header-content">
      <!-- Logo -->
      <div class="logo-section">
        <a href="/" class="logo">
          <span class="logo-icon">🧭</span>
          <span class="logo-text">Mostlyfutures</span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <a href="/crypto-intro" class="nav-link">Crypto</a>
        <a href="/trading-intro" class="nav-link">Trading</a>
        <a href="/nfts" class="nav-link">NFTs</a>
        <a href="/contact" class="nav-link">Contact</a>
      </nav>

      <!-- CTA Buttons -->
      <div class="cta-buttons">
        <a href="/landing" class="btn btn-secondary">Get Started</a>
        <a href="https://www.mostlyfutures.finance" target="_blank" class="btn btn-primary">
          Start Trading
          <span class="arrow">→</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" on:click={toggleMobileMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="mobile-menu">
      <a href="/crypto-intro" class="mobile-nav-link" on:click={toggleMobileMenu}>Crypto</a>
      <a href="/trading-intro" class="mobile-nav-link" on:click={toggleMobileMenu}>Trading</a>
      <a href="/nfts" class="mobile-nav-link" on:click={toggleMobileMenu}>NFTs</a>
      <a href="/contact" class="mobile-nav-link" on:click={toggleMobileMenu}>Contact</a>
      <div class="mobile-cta">
        <a href="/landing" class="btn btn-secondary" on:click={toggleMobileMenu}>Get Started</a>
        <a href="https://www.mostlyfutures.finance" target="_blank" class="btn btn-primary" on:click={toggleMobileMenu}>
          Start Trading
        </a>
      </div>
    </div>
  {/if}
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    padding: 1rem 0;
  }

  .header.scrolled {
    background: rgba(17, 24, 39, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  }

  .header-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(12px);
    border-radius: 1rem;
    padding: 0.75rem 1.5rem;
    border: 1px solid rgba(99, 102, 241, 0.3);
    position: relative;
  }

  .header.scrolled .header-content {
    background: transparent;
    border: none;
  }

  .logo-section {
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25rem;
    transition: opacity 0.3s ease;
  }

  .logo:hover {
    opacity: 0.8;
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .logo-text {
    background: linear-gradient(to right, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .desktop-nav {
    display: none;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
    }
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #60a5fa, #a78bfa);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .nav-link:hover {
    color: white;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }

  .cta-buttons {
    display: none;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .cta-buttons {
      display: flex;
    }
  }

  .btn {
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-secondary {
    background: rgba(75, 85, 99, 0.6);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(107, 114, 128, 0.5);
  }

  .btn-secondary:hover {
    background: rgba(75, 85, 99, 0.8);
    border-color: rgba(107, 114, 128, 0.7);
  }

  .btn-primary {
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    color: white;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.16);
  }

  .btn-primary:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-1px);
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .btn-primary:hover .arrow {
    transform: translateX(2px);
  }

  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    .mobile-menu-btn {
      display: none;
    }
  }

  .mobile-menu-btn span {
    display: block;
    width: 24px;
    height: 2px;
    background: white;
    transition: all 0.3s ease;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(17, 24, 39, 0.95);
    backdrop-filter: blur(12px);
    border-radius: 1rem;
    margin-top: 1rem;
    border: 1px solid rgba(99, 102, 241, 0.3);
  }

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }

  .mobile-nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.5rem;
    transition: color 0.3s ease;
  }

  .mobile-nav-link:hover {
    color: white;
  }

  .mobile-cta {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(99, 102, 241, 0.2);
  }

  .mobile-cta .btn {
    width: 100%;
    justify-content: center;
  }
</style>
