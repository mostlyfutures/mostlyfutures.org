<footer class="footer">
  <div class="footer-container">
    <!-- Footer Top -->
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo">
          <span class="logo-icon">🧭</span>
          <span class="logo-text">Mostlyfutures</span>
        </div>
        <p class="brand-description">
          Your gateway to cryptocurrency and trading education. Learn, trade, and grow with confidence.
        </p>
      </div>

      <div class="footer-links">
        <div class="link-column">
          <h3>Learn</h3>
          <a href="/crypto-intro">Crypto Introduction</a>
          <a href="/trading-intro">Trading Basics</a>
          <a href="/nfts">NFT Gallery</a>
        </div>

        <div class="link-column">
          <h3>Platform</h3>
          <a href="/landing">Get Started</a>
          <a href="https://www.mostlyfutures.finance" target="_blank">Start Trading</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div class="link-column">
          <h3>Resources</h3>
          <a href="https://www.amazon.com/dp/B0DXN4P2P4" target="_blank">Books</a>
          <a href="/#">Documentation</a>
          <a href="/#">FAQ</a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p class="copyright">
        © {new Date().getFullYear()} Mostlyfutures. All rights reserved.
      </p>
      <div class="footer-bottom-links">
        <a href="/#">Privacy Policy</a>
        <a href="/#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: rgba(17, 24, 39, 0.95);
    border-top: 1px solid rgba(70, 139, 230, 0.2);
    padding: 4rem 1rem 2rem;
    margin-top: 6rem;
  }

  .footer-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    .footer-top {
      grid-template-columns: 1.5fr 2fr;
    }
  }

  .footer-brand {
    max-width: 24rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .logo-icon {
    font-size: 2rem;
  }

  .logo-text {
    color: #468BE6;
  }

  .brand-description {
    color: rgba(156, 163, 175, 1);
    line-height: 1.6;
    font-size: 0.9375rem;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }

  .link-column h3 {
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .link-column a {
    display: block;
    color: rgba(156, 163, 175, 1);
    text-decoration: none;
    font-size: 0.9375rem;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  .link-column a:hover {
    color: #468BE6;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(75, 85, 99, 0.5);
  }

  @media (min-width: 768px) {
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .copyright {
    color: rgba(156, 163, 175, 1);
    font-size: 0.875rem;
  }

  .footer-bottom-links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-bottom-links a {
    color: rgba(156, 163, 175, 1);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;
  }

  .footer-bottom-links a:hover {
    color: #468BE6;
  }
</style>
