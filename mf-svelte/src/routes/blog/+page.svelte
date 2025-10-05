<script lang="ts">
  import { blogPosts } from '$lib/data/mockData';
  import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
  import Hero from '$lib/components/Hero.svelte';

  let selectedCategory = 'all';
  let selectedTag: string | null = null;

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags || [])));

  $: filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));
    return matchesCategory && matchesTag;
  });
</script>

<svelte:head>
  <title>Blog - Mostlyfutures</title>
  <meta name="description" content="Trading insights, market analysis, and educational content" />
</svelte:head>

<div class="blog-page">
  <Hero
    title="Trading Insights"
    subtitle="Market analysis, trading strategies, and educational content to help you succeed"
    primaryCta={{ text: "Latest Posts", href: "#posts" }}
  />

  <div class="container">
    <section class="filters-section">
      <div class="filter-group">
        <h3>Categories</h3>
        <div class="category-filters">
          {#each categories as category}
            <button
              class="filter-btn"
              class:active={selectedCategory === category}
              on:click={() => { selectedCategory = category; selectedTag = null; }}
            >
              {category}
            </button>
          {/each}
        </div>
      </div>

      {#if selectedTag}
        <div class="active-tag">
          <span>Filtering by: <strong>#{selectedTag}</strong></span>
          <button on:click={() => selectedTag = null} class="clear-tag">✕</button>
        </div>
      {/if}
    </section>

    <section id="posts" class="posts-section">
      <div class="stats-bar">
        <div class="stat">
          <AnimatedIcon variant="book" size={32} color="#60a5fa" />
          <span>{filteredPosts.length} {filteredPosts.length === 1 ? 'Post' : 'Posts'}</span>
        </div>
        <div class="stat">
          <AnimatedIcon variant="users" size={32} color="#10b981" />
          <span>{new Set(blogPosts.map(p => p.author)).size} Authors</span>
        </div>
        <div class="stat">
          <AnimatedIcon variant="chart" size={32} color="#a855f7" />
          <span>{categories.length - 1} Categories</span>
        </div>
      </div>

      <div class="posts-grid">
        {#each filteredPosts as post}
          <article class="post-card">
            {#if post.featuredImage}
              <div class="post-image">
                <img src={post.featuredImage} alt={post.title} />
                <div class="category-badge">{post.category}</div>
              </div>
            {:else}
              <div class="post-image placeholder">
                <AnimatedIcon variant="book" size={64} color="#6366f1" />
                <div class="category-badge">{post.category}</div>
              </div>
            {/if}

            <div class="post-content">
              <div class="post-meta">
                <span class="author">✍️ {post.author}</span>
                <span class="date">📅 {post.publishDate}</span>
                <span class="read-time">⏱️ {post.readTime} min read</span>
              </div>

              <h2 class="post-title">{post.title}</h2>
              <p class="post-excerpt">{post.excerpt}</p>

              {#if post.tags && post.tags.length > 0}
                <div class="post-tags">
                  {#each post.tags as tag}
                    <button 
                      class="tag" 
                      class:active={selectedTag === tag}
                      on:click={() => selectedTag = tag}
                    >
                      #{tag}
                    </button>
                  {/each}
                </div>
              {/if}

              <a href={`/blog/${post.id}`} class="read-more">
                Read Full Article →
              </a>
            </div>
          </article>
        {/each}
      </div>

      {#if filteredPosts.length === 0}
        <div class="no-results">
          <AnimatedIcon variant="default" size={80} color="#6b7280" />
          <h3>No posts found</h3>
          <p>Try selecting a different category or tag</p>
          <button on:click={() => { selectedCategory = 'all'; selectedTag = null; }} class="reset-btn">
            Reset Filters
          </button>
        </div>
      {/if}
    </section>

    <section class="tags-section">
      <h3>Popular Tags</h3>
      <div class="tags-cloud">
        {#each allTags as tag}
          <button 
            class="tag-cloud-item"
            class:active={selectedTag === tag}
            on:click={() => selectedTag = tag}
          >
            #{tag}
          </button>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .blog-page {
    min-height: 100vh;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  section {
    margin-bottom: 4rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
  }

  .filters-section {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
  }

  .filter-group {
    margin-bottom: 1rem;
  }

  .category-filters {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    background: rgba(75, 85, 99, 0.6);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(107, 114, 128, 0.5);
    padding: 0.5rem 1.25rem;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    text-transform: capitalize;
  }

  .filter-btn:hover,
  .filter-btn.active {
    background: rgba(99, 102, 241, 0.6);
    border-color: rgba(99, 102, 241, 0.8);
    transform: translateY(-2px);
  }

  .active-tag {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: rgba(99, 102, 241, 0.2);
    border: 1px solid rgba(99, 102, 241, 0.4);
    border-radius: 0.75rem;
    color: rgba(147, 197, 253, 1);
  }

  .clear-tag {
    background: rgba(239, 68, 68, 0.4);
    border: none;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .clear-tag:hover {
    background: rgba(239, 68, 68, 0.6);
  }

  .stats-bar {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    padding: 2rem;
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
  }

  .stats-bar .stat {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(229, 231, 235, 0.9);
    font-weight: 600;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 2rem;
  }

  .post-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .post-card:hover {
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-4px);
  }

  .post-image {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
  }

  .post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .post-card:hover .post-image img {
    transform: scale(1.05);
  }

  .post-image.placeholder {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(99, 102, 241, 0.9);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .post-content {
    padding: 2rem;
  }

  .post-meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.875rem;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 1rem;
  }

  .post-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .post-excerpt {
    color: rgba(209, 213, 219, 0.9);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .post-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .tag {
    background: rgba(75, 85, 99, 0.4);
    color: rgba(156, 163, 175, 1);
    border: 1px solid rgba(107, 114, 128, 0.3);
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .tag:hover,
  .tag.active {
    background: rgba(99, 102, 241, 0.4);
    color: rgba(147, 197, 253, 1);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .read-more {
    color: #60a5fa;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .read-more:hover {
    color: #93c5fd;
  }

  .no-results {
    text-align: center;
    padding: 4rem 2rem;
    color: rgba(156, 163, 175, 1);
  }

  .no-results h3 {
    font-size: 2rem;
    color: rgba(209, 213, 219, 0.9);
    margin: 1rem 0;
  }

  .reset-btn {
    margin-top: 1.5rem;
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .reset-btn:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-2px);
  }

  .tags-section {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
  }

  .tags-cloud {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .tag-cloud-item {
    background: rgba(75, 85, 99, 0.4);
    color: rgba(209, 213, 219, 0.9);
    border: 1px solid rgba(107, 114, 128, 0.3);
    padding: 0.5rem 1.25rem;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .tag-cloud-item:hover,
  .tag-cloud-item.active {
    background: rgba(99, 102, 241, 0.6);
    color: white;
    border-color: rgba(99, 102, 241, 0.8);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .posts-grid {
      grid-template-columns: 1fr;
    }

    .stats-bar {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
