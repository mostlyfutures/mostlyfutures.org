<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
  <title>Contact - Mostlyfutures</title>
  <meta name="description" content="Get in touch with the Mostlyfutures team" />
</svelte:head>

<div class="container mx-auto px-4 py-24">

  <!-- Header -->  <!-- Header -->

  <div class="text-center mb-16">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
      Get in 
      <span class="text-tufts-blue font-bold">
        touch
      </span>
    </h1>
    <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
      Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
    </p>
  </div>



  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">  <div class="text-center">

    <!-- Email Card -->    <Card.Root class="max-w-md mx-auto">

    <Card.Root class="text-center">      <Card.Content class="p-8">

      <Card.Content class="p-8">        <div class="mb-6">

        <div class="text-6xl mb-6">📧</div>          <span class="text-6xl">�</span>

        <Card.Title class="text-2xl mb-4">Email Us</Card.Title>        </div>

        <a href="mailto:mostlyfutures@gmail.com" class="text-xl text-primary hover:underline font-medium block mb-4">        <Card.Title class="text-2xl mb-4">Email Us</Card.Title>

          mostlyfutures@gmail.com        <a href="mailto:mostlyfutures@gmail.com" class="text-xl text-primary hover:underline font-medium block mb-4">

        </a>          mostlyfutures@gmail.com

        <p class="text-muted-foreground mb-6">We typically respond within 24 hours</p>        </a>

        <Button class="w-full">        <p class="text-muted-foreground mb-6">We typically respond within 24 hours</p>

          Send Email        <Button>

        </Button>          <a href="mailto:mostlyfutures@gmail.com" class="no-underline text-white">Send Email</a>

      </Card.Content>        </Button>

    </Card.Root>      </Card.Content>

    </Card.Root>

    <!-- Support Card -->  </div>

    <Card.Root class="text-center"></div>

      <Card.Content class="p-8">    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));

        <div class="text-6xl mb-6">🛠️</div>    border: 1px solid rgba(99, 102, 241, 0.4);

        <Card.Title class="text-2xl mb-4">Support</Card.Title>    border-radius: 1.5rem;

        <p class="text-muted-foreground mb-4">    padding: 4rem 2rem;

          Technical support and platform assistance    margin-bottom: 3rem;

        </p>  }

        <p class="text-sm text-muted-foreground mb-6">

          Available Monday-Friday, 9 AM - 6 PM EST  .contact-info {

        </p>    text-align: center;

        <Button variant="outline" class="w-full">    max-width: 600px;

          Get Help    margin: 0 auto;

        </Button>  }

      </Card.Content>

    </Card.Root>  .contact-icon {

    font-size: 4rem;

    <!-- Community Card -->    margin-bottom: 1.5rem;

    <Card.Root class="text-center md:col-span-2 lg:col-span-1">  }

      <Card.Content class="p-8">

        <div class="text-6xl mb-6">💬</div>  .contact-info h2 {

        <Card.Title class="text-2xl mb-4">Community</Card.Title>    font-size: 2rem;

        <p class="text-muted-foreground mb-4">    font-weight: 800;

          Join our community for discussions and updates    margin-bottom: 1.5rem;

        </p>    color: white;

        <div class="space-y-3 mb-6">  }

          <a href="#" class="flex items-center justify-center gap-2 text-sm text-primary hover:underline">

            <span>📱</span> Discord  .email-link {

          </a>    display: inline-block;

          <a href="#" class="flex items-center justify-center gap-2 text-sm text-primary hover:underline">    font-size: 1.5rem;

            <span>🐦</span> Twitter    font-weight: 700;

          </a>    background: linear-gradient(to right, #60a5fa, #a78bfa);

          <a href="#" class="flex items-center justify-center gap-2 text-sm text-primary hover:underline">    -webkit-background-clip: text;

            <span>📖</span> Blog    background-clip: text;

          </a>    color: transparent;

        </div>    text-decoration: none;

        <Button variant="outline" class="w-full">    margin-bottom: 1rem;

          Join Community    transition: opacity 0.3s ease;

        </Button>  }

      </Card.Content>

    </Card.Root>  .email-link:hover {

  </div>    opacity: 0.8;

  }

  <!-- FAQ Section -->

  <div class="max-w-4xl mx-auto">  .contact-info p {

    <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>    color: rgba(209, 213, 219, 0.8);

    <div class="space-y-6">    font-size: 1rem;

      <Card.Root>  }

        <Card.Content class="p-6">

          <h3 class="text-lg font-semibold mb-3">How do I get started with Mostlyfutures?</h3>  .info-grid {

          <p class="text-muted-foreground">    display: grid;

            Simply create an account and explore our platform. We offer a comprehensive onboarding process    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

            to help you understand futures trading and our advanced tools.    gap: 2rem;

          </p>    margin-bottom: 3rem;

        </Card.Content>  }

      </Card.Root>

  .info-card {

      <Card.Root>    background: rgba(17, 24, 39, 0.6);

        <Card.Content class="p-6">    backdrop-filter: blur(12px);

          <h3 class="text-lg font-semibold mb-3">What are your trading fees?</h3>    border: 1px solid rgba(99, 102, 241, 0.3);

          <p class="text-muted-foreground">    border-radius: 1.5rem;

            We offer competitive trading fees starting at 0.1% for makers and 0.2% for takers.    padding: 2rem;

            Volume-based discounts are available for high-frequency traders.    text-align: center;

          </p>    transition: all 0.3s ease;

        </Card.Content>  }

      </Card.Root>

  .info-card:hover {

      <Card.Root>    transform: translateY(-4px);

        <Card.Content class="p-6">    border-color: rgba(99, 102, 241, 0.5);

          <h3 class="text-lg font-semibold mb-3">Is my data secure?</h3>  }

          <p class="text-muted-foreground">

            Yes, we use industry-leading security measures including 256-bit encryption,  .info-icon {

            cold storage for funds, and regular security audits to protect your assets and data.    font-size: 3rem;

          </p>    margin-bottom: 1rem;

        </Card.Content>  }

      </Card.Root>

  .info-card h3 {

      <Card.Root>    font-size: 1.25rem;

        <Card.Content class="p-6">    font-weight: 700;

          <h3 class="text-lg font-semibold mb-3">Do you offer customer support?</h3>    margin-bottom: 0.75rem;

          <p class="text-muted-foreground">    color: white;

            We provide 24/7 customer support through multiple channels including email, live chat,  }

            and our community forums. Our team is always ready to help.

          </p>  .info-card p {

        </Card.Content>    color: rgba(209, 213, 219, 0.8);

      </Card.Root>    line-height: 1.6;

    </div>    font-size: 0.9375rem;

  </div>    margin-bottom: 1rem;

</div>  }

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
