<script lang="ts">
  import { posts } from '$lib/data/posts';
  import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<svelte:head>
  <title>MostlyFutures — Blog</title>
</svelte:head>

<section class="container mx-auto px-4 py-20">
  <div class="max-w-4xl mx-auto text-center mb-12">
    <h1 class="text-4xl font-bold text-foreground">MostlyFutures — Educational Web3 Blog</h1>
    <p class="text-muted-foreground mt-4">Practical guides, tutorials, and explainers for Web3 builders and traders.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each posts as post}
      <BlogCard {post} />
    {/each}
  </div>
</section>
