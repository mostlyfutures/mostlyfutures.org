<script lang="ts">
  import type { Post } from '$lib/data/posts';
  import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
  export let post: Post;
</script>

<article class="group bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-200">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0">
      <Tooltip content={post.title} placement="top">
        <div>
          <AnimatedIcon size={48} color="#468BE6" variant="book" />
        </div>
      </Tooltip>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-foreground group-hover:text-tufts-blue transition-colors">{post.title}</h3>
      <p class="text-sm text-muted-foreground mt-1">{post.date} • {post.tags?.join(', ')}</p>
      <p class="mt-3 text-base text-muted-foreground">{post.excerpt}</p>
    </div>
  </div>
</article>
