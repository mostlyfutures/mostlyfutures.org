<script lang="ts">
  export let size: number = 40;
  export let color: string = '#468BE6';
  export let variant: 'default' | 'lightning' | 'book' | 'shield' | 'users' | 'chart' | 'rocket' | string = 'default';

  // Direct Phosphor imports
  import Lightning from 'phosphor-svelte/dist/icons/Lightning.svelte';
  import Book from 'phosphor-svelte/dist/icons/Book.svelte';
  import ShieldCheck from 'phosphor-svelte/dist/icons/ShieldCheck.svelte';
  import Code from 'phosphor-svelte/dist/icons/Code.svelte';
  import Users from 'phosphor-svelte/dist/icons/Users.svelte';
  import ChartLine from 'phosphor-svelte/dist/icons/ChartLine.svelte';
  import Rocket from 'phosphor-svelte/dist/icons/Rocket.svelte';
</script>

{#if variant && variant !== 'default'}
  {#if variant === 'lightning'}
    <Lightning size={size} weight="duotone" color={color} class="animated-icon" />
  {:else if variant === 'book'}
    <Book size={size} weight="duotone" color={color} class="animated-icon" />
  {:else if variant === 'shield'}
    <ShieldCheck size={size} weight="duotone" color={color} class="animated-icon" />
  {:else if variant === 'users'}
    <Users size={size} weight="duotone" color={color} class="animated-icon" />
  {:else if variant === 'chart'}
    <ChartLine size={size} weight="duotone" color={color} class="animated-icon" />
  {:else if variant === 'rocket'}
    <Rocket size={size} weight="duotone" color={color} class="animated-icon" />
  {:else}
    <Code size={size} weight="duotone" color={color} class="animated-icon" />
  {/if}
{:else}
  <!-- Local SVG fallbacks for a small set of variants -->
  {#if variant === 'lightning'}
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill={color} />
    </svg>
  {:else if variant === 'book'}
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
      <path d="M3 6a2 2 0 012-2h12v14H5a2 2 0 01-2-2V6z" stroke={color} stroke-width="1.5" fill="transparent" />
      <path d="M7 6v12" stroke={color} stroke-width="1.5" stroke-linecap="round" />
    </svg>
  {:else if variant === 'shield'}
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
      <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke={color} stroke-width="1.5" fill="transparent" />
      <path d="M9.5 12.5l1.8 1.8L15 11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  {:else if variant === 'users'}
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
      <circle cx="9" cy="7" r="4" stroke={color} stroke-width="1.5" fill="transparent" />
      <path d="M3 21v-2c0-3.3 2.7-6 6-6s6 2.7 6 6v2" stroke={color} stroke-width="1.5" stroke-linecap="round" />
      <path d="M16 11c2.2 0 4-1.8 4-4s-1.8-4-4-4" stroke={color} stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M21 21v-2c0-2.4-1.4-4.5-3.4-5.5" stroke={color} stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
    </svg>
  {:else if variant === 'chart'}
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
      <polyline points="3 17 9 11 13 15 21 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <polyline points="16 7 21 7 21 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  {:else if variant === 'rocket'}
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
      <path d="M12 2c0 0 5 1 7 5s2 9 2 9l-4 1-3-3-3 3-1-4s5 0 9-2 5-7 5-7" stroke={color} stroke-width="1.5" fill="transparent" />
      <circle cx="10" cy="10" r="1.5" fill={color} />
    </svg>
  {:else}
    <!-- default simple card icon -->
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animated-icon">
      <g class="icon-group">
        <rect class="icon-box" x="3" y="3" width="18" height="18" rx="4" stroke={color} stroke-width="1.5" fill="transparent" />
        <path class="icon-line" d="M8 12h8" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        <path class="icon-line" d="M8 16h8" stroke={color} stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      </g>
    </svg>
  {/if}
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