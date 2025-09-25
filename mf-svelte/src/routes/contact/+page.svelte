<svelte:head>
  <title>Contact MostlyFutures</title>
</svelte:head>

<div class="header">Contact me at</div>
<div class="email">mostlyfutures@gmail.com</div>
<a href="/" class="back-button">Back</a>

<style>
  :global(main) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
  }

  .header {
    font-size: 1.5em;
    margin-bottom: 1rem;
    animation: fadeIn 1s ease-out;
    font-weight: 500;
  }

  .email {
    font-size: 2.2em;
    word-wrap: break-word;
    margin-bottom: 2rem;
    animation: fadeIn 1s ease-out 0.3s backwards;
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
    text-align: center;
  }

  .back-button {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1em;
    cursor: pointer;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s ease;
    animation: fadeIn 1s ease-out 0.6s backwards;
    backdrop-filter: blur(10px);
  }

  .back-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
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
    .email {
      font-size: 1.8em;
    }
  }
</style>