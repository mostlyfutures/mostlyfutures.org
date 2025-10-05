<script lang="ts">
  import { courses } from '$lib/data/mockData';
  import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';

  let selectedLevel = 'all';
  let selectedCategory = 'all';

  $: filteredCourses = courses.filter(course => {
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    return levelMatch && categoryMatch;
  });

  const levels = ['all', 'beginner', 'intermediate', 'advanced'];
  const categories = ['all', ...Array.from(new Set(courses.map(c => c.category)))];

  function formatPrice(price: number): string {
    return price === 0 ? 'Free' : `$${price}`;
  }
</script>

<svelte:head>
  <title>Education - Mostlyfutures</title>
  <meta name="description" content="Master trading with our comprehensive courses. From beginner cryptocurrency basics to advanced algorithmic trading strategies." />
</svelte:head>

<div class="education-page">
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1>Trading Education</h1>
        <p>Master the markets with expert-led courses designed for traders at every level. From cryptocurrency basics to advanced strategies, build the skills you need to trade with confidence.</p>
        
        <div class="stats-grid">
          <div class="stat-card">
            <Tooltip content="Total enrolled students across all courses">
              <div class="stat-content">
                <AnimatedIcon variant="users" size={32} color="#60a5fa" />
                <div>
                  <div class="stat-number">50K+</div>
                  <div class="stat-label">Students</div>
                </div>
              </div>
            </Tooltip>
          </div>
          <div class="stat-card">
            <Tooltip content="Expert instructors with real trading experience">
              <div class="stat-content">
                <AnimatedIcon variant="shield" size={32} color="#10b981" />
                <div>
                  <div class="stat-number">8</div>
                  <div class="stat-label">Expert Instructors</div>
                </div>
              </div>
            </Tooltip>
          </div>
          <div class="stat-card">
            <Tooltip content="Average course rating from student reviews">
              <div class="stat-content">
                <AnimatedIcon variant="lightning" size={32} color="#f59e0b" />
                <div>
                  <div class="stat-number">4.8★</div>
                  <div class="stat-label">Average Rating</div>
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="courses-section">
    <div class="container">
      <div class="filters">
        <div class="filter-group">
          <label for="level-filter">Level:</label>
          <select id="level-filter" bind:value={selectedLevel}>
            {#each levels as level}
              <option value={level}>{level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}</option>
            {/each}
          </select>
        </div>

        <div class="filter-group">
          <label for="category-filter">Category:</label>
          <select id="category-filter" bind:value={selectedCategory}>
            {#each categories as category}
              <option value={category}>{category === 'all' ? 'All Categories' : category}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="courses-grid">
        {#each filteredCourses as course}
          <div class="course-card">
            <div class="course-header">
              <div class="course-level level-{course.level}">{course.level}</div>
              <div class="course-price">{formatPrice(course.price)}</div>
            </div>
            
            <div class="course-content">
              <h3>{course.title}</h3>
              <p class="course-description">{course.description}</p>
              
              <div class="course-meta">
                <div class="meta-item">
                  <Tooltip content="Course duration">
                    <span class="meta-label">⏱️ {course.duration}</span>
                  </Tooltip>
                </div>
                <div class="meta-item">
                  <Tooltip content="Number of modules/lessons">
                    <span class="meta-label">📚 {course.modules} modules</span>
                  </Tooltip>
                </div>
                <div class="meta-item">
                  <Tooltip content="Currently enrolled students">
                    <span class="meta-label">👥 {course.students.toLocaleString()}</span>
                  </Tooltip>
                </div>
              </div>

              <div class="course-instructor">
                <span>By {course.instructor}</span>
                <div class="rating">
                  <span class="stars">⭐ {course.rating}</span>
                </div>
              </div>
            </div>

            <div class="course-footer">
              <button class="enroll-btn" class:free={course.price === 0}>
                {course.price === 0 ? 'Enroll Free' : 'Enroll Now'}
              </button>
            </div>
          </div>
        {/each}
      </div>

      {#if filteredCourses.length === 0}
        <div class="empty-state">
          <AnimatedIcon variant="book" size={64} color="#6b7280" />
          <h3>No courses found</h3>
          <p>Try adjusting your filters to see more courses.</p>
        </div>
      {/if}
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of successful traders who started their journey with our courses.</p>
        <div class="cta-buttons">
          <a href="/crypto-intro" class="btn btn-primary">Start with Crypto Basics</a>
          <a href="/contact" class="btn btn-secondary">Get Personal Guidance</a>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .education-page {
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero-section {
    padding: 6rem 0 4rem;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  }

  .hero-content {
    text-align: center;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hero-content p {
    font-size: 1.25rem;
    color: rgba(229, 231, 235, 0.9);
    max-width: 600px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .stat-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .stat-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-number {
    font-size: 1.75rem;
    font-weight: 800;
    color: white;
  }

  .stat-label {
    font-size: 0.9rem;
    color: rgba(156, 163, 175, 1);
  }

  .courses-section {
    padding: 4rem 0;
  }

  .filters {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .filter-group label {
    font-weight: 600;
    color: rgba(229, 231, 235, 0.9);
  }

  .filter-group select {
    background: rgba(17, 24, 39, 0.6);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: white;
    font-size: 0.9rem;
  }

  .filter-group select:focus {
    outline: none;
    border-color: rgba(99, 102, 241, 0.6);
  }

  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .course-card {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 1.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .course-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .course-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  }

  .course-level {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .level-beginner {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
  }

  .level-intermediate {
    background: rgba(251, 191, 36, 0.2);
    color: #fbbf24;
  }

  .level-advanced {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }

  .course-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #60a5fa;
  }

  .course-content {
    padding: 1.5rem;
  }

  .course-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
    line-height: 1.3;
  }

  .course-description {
    color: rgba(209, 213, 219, 0.9);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .course-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .meta-item {
    font-size: 0.9rem;
    color: rgba(156, 163, 175, 1);
  }

  .course-instructor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: rgba(156, 163, 175, 1);
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .stars {
    color: #fbbf24;
    font-weight: 600;
  }

  .course-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(99, 102, 241, 0.2);
  }

  .enroll-btn {
    width: 100%;
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .enroll-btn:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-1px);
  }

  .enroll-btn.free {
    background: linear-gradient(to bottom, #22c55e, #16a34a);
  }

  .enroll-btn.free:hover {
    background: linear-gradient(to bottom, #16a34a, #15803d);
  }

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
  }

  .empty-state h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0 0.5rem;
    color: rgba(156, 163, 175, 1);
  }

  .empty-state p {
    color: rgba(107, 114, 128, 1);
  }

  .cta-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  }

  .cta-content {
    text-align: center;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: white;
  }

  .cta-content p {
    font-size: 1.25rem;
    color: rgba(209, 213, 219, 0.9);
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background: linear-gradient(to bottom, #6366f1, #4f46e5);
    color: white;
  }

  .btn-primary:hover {
    background: linear-gradient(to bottom, #4f46e5, #4338ca);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: rgba(75, 85, 99, 0.6);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(107, 114, 128, 0.5);
  }

  .btn-secondary:hover {
    background: rgba(75, 85, 99, 0.8);
  }

  @media (max-width: 768px) {
    .courses-grid {
      grid-template-columns: 1fr;
    }
    
    .filters {
      flex-direction: column;
      align-items: flex-start;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
</style>