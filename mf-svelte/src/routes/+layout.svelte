<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  
  let navMenu: HTMLElement;
  let hamburgerMenu: HTMLElement;

  onMount(() => {
    // Hamburger menu functionality
    if (hamburgerMenu && navMenu) {
      hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  });
</script>

<a href="/about" class="info-circle">i</a>
<div class="hamburger-menu" bind:this={hamburgerMenu}>
  <span></span>
  <span></span>
  <span></span>
</div>
<nav class="nav-menu" bind:this={navMenu}>
  <a href="/crypto-intro">Crypto Introduction</a>
  <a href="/trading-intro">Trading</a>
  <a href="/landing">Sart</a>
</nav>

<main>
  <slot />
</main>

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
    z-index: 1001;
  }

  .info-circle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
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

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>