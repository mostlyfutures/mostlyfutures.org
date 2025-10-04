<script lang="ts">
  import '../app.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let { children } = $props();
</script>

<div class="min-h-screen bg-background text-foreground">
  <Navigation />
  
  <main>
    {@render children()}
  </main>

  <Footer />
</div>