<script lang="ts">
  import { communityMembers, forumPosts, events } from '$lib/data/mockData';
  import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
  import Hero from '$lib/components/Hero.svelte';

  let selectedCategory = 'all';
  let categories = ['all', 'general', 'technical-analysis', 'strategy', 'tools'];

  $: filteredPosts = selectedCategory === 'all'
    ? forumPosts
    : forumPosts.filter(post => post.category === selectedCategory);
</script>

<svelte:head>
  <title>Community - Mostlyfutures</title>
  <meta name="description" content="Join the Mostlyfutures trading community" />
</svelte:head>

<div class="community-page">
  <Hero
    title="Join Our Community"
    subtitle="Connect with traders, share insights, and grow together"
    primaryCta={{ text: "Start Discussing", href: "#forum" }}
  />

  <div class="container">
    <section class="stats-section">
      <div class="stat-card">
        <AnimatedIcon variant="users" size={48} color="#60a5fa" />
        <div class="stat-content">
          <h3>{communityMembers.length}+</h3>
          <p>Active Members</p>
        </div>
      </div>
      <div class="stat-card">
        <AnimatedIcon variant="chart" size={48} color="#10b981" />
        <div class="stat-content">
          <h3>{forumPosts.length}+</h3>
          <p>Discussions</p>
        </div>
      </div>
      <div class="stat-card">
        <AnimatedIcon variant="rocket" size={48} color="#a855f7" />
        <div class="stat-content">
          <h3>{events.length}+</h3>
          <p>Upcoming Events</p>
        </div>
      </div>
    </section>

    <section id="forum" class="forum-section">
      <div class="section-header">
        <h2>Community Discussions</h2>
        <div class="category-filters">
          {#each categories as category}
            <button
              class="category-btn"
              class:active={selectedCategory === category}
              on:click={() => selectedCategory = category}
            >
              {category.replace('-', ' ')}
            </button>
          {/each}
        </div>
      </div>

      <div class="forum-posts">
        {#each filteredPosts as post}
          <div class="post-card">
            <div class="post-header">
              <div class="author-info">
                <div class="avatar" style="background: {post.author.avatar || '#6366f1'};">
                  {post.author.name[0]}
                </div>
                <div>
                  <div class="author-name">{post.author.name}</div>
                  <div class="post-meta">
                    <span class="badge badge-{post.category}">{post.category}</span>
                    <span class="date">{post.createdAt}</span>
                  </div>
                </div>
              </div>
              {#if post.pinned}
                <span class="pinned-badge">📌 Pinned</span>
              {/if}
            </div>

            <h3 class="post-title">{post.title}</h3>
            <p class="post-content">{post.content}</p>

            {#if post.tags && post.tags.length > 0}
              <div class="post-tags">
                {#each post.tags as tag}
                  <span class="tag">#{tag}</span>
                {/each}
              </div>
            {/if}

            <div class="post-footer">
              <div class="stats">
                <span>👍 {post.likes}</span>
                <span>💬 {post.replies}</span>
                <span>👁️ {post.views}</span>
              </div>
              {#if post.solved}
                <span class="solved-badge">✓ Solved</span>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="events-section">
      <h2>Upcoming Events</h2>
      <div class="events-grid">
        {#each events as event}
          <div class="event-card">
            <div class="event-date">
              <div class="month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
              <div class="day">{new Date(event.date).getDate()}</div>
            </div>
            <div class="event-content">
              <h3>{event.title}</h3>
              <p class="event-description">{event.description}</p>
              <div class="event-meta">
                <span>🕐 {event.duration}</span>
                <span class="badge badge-{event.type}">{event.type}</span>
              </div>
              <div class="event-footer">
                <span class="attendees">👥 {event.attendees} attending</span>
                <a href={event.registrationUrl || '#'} class="join-btn">Join Event</a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="members-section">
      <h2>Top Contributors</h2>
      <div class="members-grid">
        {#each communityMembers as member}
          <div class="member-card">
            <div class="member-avatar" style="background: {member.avatar};">
              {member.name[0]}
            </div>
            <h3>{member.name}</h3>
            <p class="member-role">{member.role}</p>
            <p class="member-bio">{member.bio}</p>
            <div class="member-stats">
              <div class="stat">
                <strong>{member.posts}</strong>
                <span>Posts</span>
              </div>
              <div class="stat">
                <strong>{member.reputation}</strong>
                <span>Reputation</span>
              </div>
            </div>
            <div class="member-badges">
              {#each member.badges as badge}
                <span class="badge-icon" title={badge}>{badge}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .community-page {
    min-height: 100vh;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  section {
    margin-bottom: 5rem;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: white;
    margin-bottom: 2rem;
  }

  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .stat-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
  }

  .stat-content h3 {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    margin: 0;
  }

  .stat-content p {
    color: rgba(209, 213, 219, 0.9);
    margin: 0;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .category-filters {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .category-btn {
    background: rgba(75, 85, 99, 0.6);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(107, 114, 128, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: capitalize;
  }

  .category-btn:hover,
  .category-btn.active {
    background: rgba(99, 102, 241, 0.6);
    border-color: rgba(99, 102, 241, 0.8);
  }

  .forum-posts {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .post-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .post-card:hover {
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .author-info {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .author-name {
    font-weight: 600;
    color: white;
  }

  .post-meta {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    margin-top: 0.25rem;
  }

  .date {
    font-size: 0.875rem;
    color: rgba(156, 163, 175, 1);
  }

  .badge {
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .badge-general {
    background: rgba(107, 114, 128, 0.4);
    color: rgba(209, 213, 219, 1);
  }

  .badge-technical-analysis {
    background: rgba(59, 130, 246, 0.4);
    color: rgba(147, 197, 253, 1);
  }

  .badge-strategy {
    background: rgba(168, 85, 247, 0.4);
    color: rgba(216, 180, 254, 1);
  }

  .badge-tools {
    background: rgba(16, 185, 129, 0.4);
    color: rgba(110, 231, 183, 1);
  }

  .badge-webinar {
    background: rgba(245, 158, 11, 0.4);
    color: rgba(253, 224, 71, 1);
  }

  .badge-workshop {
    background: rgba(236, 72, 153, 0.4);
    color: rgba(251, 207, 232, 1);
  }

  .badge-meetup {
    background: rgba(139, 92, 246, 0.4);
    color: rgba(196, 181, 253, 1);
  }

  .pinned-badge {
    background: rgba(245, 158, 11, 0.4);
    color: rgba(251, 191, 36, 1);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .post-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.75rem;
  }

  .post-content {
    color: rgba(209, 213, 219, 0.9);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .post-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .tag {
    background: rgba(75, 85, 99, 0.4);
    color: rgba(156, 163, 175, 1);
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(75, 85, 99, 0.4);
  }

  .stats {
    display: flex;
    gap: 1.5rem;
    color: rgba(156, 163, 175, 1);
  }

  .solved-badge {
    background: rgba(16, 185, 129, 0.4);
    color: rgba(110, 231, 183, 1);
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .events-grid {
    display: grid;
    gap: 2rem;
  }

  .event-card {
    display: flex;
    gap: 2rem;
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .event-card:hover {
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
  }

  .event-date {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #6366f1, #a855f7);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .event-date .month {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .event-date .day {
    font-size: 2rem;
    font-weight: 800;
  }

  .event-content {
    flex: 1;
  }

  .event-content h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
  }

  .event-description {
    color: rgba(209, 213, 219, 0.9);
    margin-bottom: 1rem;
  }

  .event-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 1rem;
  }

  .event-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .attendees {
    color: rgba(156, 163, 175, 1);
  }

  .join-btn {
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .join-btn:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-2px);
  }

  .members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  .member-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .member-card:hover {
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-4px);
  }

  .member-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    font-size: 2rem;
    margin: 0 auto 1rem;
  }

  .member-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
  }

  .member-role {
    color: rgba(96, 165, 250, 1);
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .member-bio {
    color: rgba(209, 213, 219, 0.9);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .member-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(75, 85, 99, 0.4);
    border-bottom: 1px solid rgba(75, 85, 99, 0.4);
    margin-bottom: 1rem;
  }

  .member-stats .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .member-stats strong {
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
  }

  .member-stats span {
    font-size: 0.75rem;
    color: rgba(156, 163, 175, 1);
    text-transform: uppercase;
  }

  .member-badges {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .badge-icon {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .section-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .event-card {
      flex-direction: column;
    }

    .event-date {
      width: 100%;
    }
  }
</style>
