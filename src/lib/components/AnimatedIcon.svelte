<script lang="ts">
  export let size: number = 40;
  export let color: string = '#468BE6';
  export let variant: 'default' | 'lightning' | 'book' | 'shield' | 'users' | 'chart' | 'rocket' | string = 'default';
</script>

<!-- Local SVG icons - performant and zero dependencies -->
{#if variant === 'lightning'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill={color} opacity="0.2" />
    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
{:else if variant === 'book'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" fill={color} opacity="0.2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
{:else if variant === 'shield'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={color} opacity="0.2" />
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M9 12l2 2 4-4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
{:else if variant === 'users'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
    <circle cx="9" cy="7" r="4" fill={color} opacity="0.2" />
    <circle cx="9" cy="7" r="4" stroke={color} stroke-width="1.5" fill="none" />
    <path d="M3 21v-2c0-3.3 2.7-6 6-6s6 2.7 6 6v2" stroke={color} stroke-width="1.5" stroke-linecap="round" />
    <path d="M16 11c2.2 0 4-1.8 4-4s-1.8-4-4-4" stroke={color} stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
    <path d="M21 21v-2c0-2.4-1.4-4.5-3.4-5.5" stroke={color} stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
  </svg>
{:else if variant === 'chart'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
    <polyline points="3 17 9 11 13 15 21 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <polyline points="16 7 21 7 21 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="9" cy="11" r="2" fill={color} opacity="0.2" />
    <circle cx="13" cy="15" r="2" fill={color} opacity="0.2" />
  </svg>
{:else if variant === 'rocket'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" fill={color} opacity="0.2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="15" cy="9" r="1.5" fill={color} />
  </svg>
{:else}
  <!-- default icon -->
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
    <g class="icon-group">
      <rect class="icon-box" x="3" y="3" width="18" height="18" rx="4" stroke={color} stroke-width="1.5" fill="transparent" />
      <path class="icon-line" d="M8 12h8" stroke={color} stroke-width="1.5" stroke-linecap="round" />
      <path class="icon-line" d="M8 16h8" stroke={color} stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
    </g>
  </svg>
{/if}

<style>
  .animated-icon {
    transition: transform 220ms cubic-bezier(.4,0,.2,1), fill 200ms ease, stroke 200ms ease;
    transform-origin: center;
    cursor: default;
    display: block;
  }
  .animated-icon:hover {
    transform: translateY(-4px) scale(1.04);
  }
  .icon-box {
    transition: fill 200ms ease, stroke 200ms ease;
  }
  .animated-icon:hover .icon-box {
    fill: rgba(70,139,230,0.08);
    stroke: #3b82f6;
  }
  .icon-line {
    transition: stroke 200ms ease, transform 220ms ease;
  }
  .animated-icon:hover .icon-line {
    stroke: #2563eb;
    transform: translateX(2px);
  }
</style>