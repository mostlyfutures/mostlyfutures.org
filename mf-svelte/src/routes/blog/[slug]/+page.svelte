<script lang="ts">
  import { posts } from '$lib/data/posts';
  import { page } from '$app/stores';
  let slug = '';
  $: slug = $page.params.slug;
  const post = posts.find(p => p.slug === slug);
</script>

<svelte:head>
  <title>{post ? post.title : 'Post not found'}</title>
</svelte:head>

{#if post}
<section class="container mx-auto px-4 py-16 max-w-3xl">
  <h1 class="text-3xl font-bold text-foreground mb-4">{post.title}</h1>
  <p class="text-sm text-muted-foreground mb-8">{post.date} • {post.tags?.join(', ')}</p>
  <article class="prose dark:prose-invert">{@html post.content.replace(/\n/g, '<br/>')}</article>
</section>
{:else}
<section class="container mx-auto px-4 py-16 max-w-3xl text-center">
  <h1 class="text-2xl font-semibold">Post not found</h1>
  <p class="text-muted-foreground mt-2">Check the blog index for available posts.</p>
</section>
{/if}
