<script lang="ts">
  export let content: string = '';
  export let placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
</script>

<div class="relative inline-block">
  <slot />
  {#if content}
    <div class={`absolute z-50 whitespace-nowrap rounded-md bg-cool-black text-white text-sm px-2 py-1 mt-2 ${placement === 'top' ? '-translate-y-full bottom-full' : ''}`} role="tooltip">
      {content}
    </div>
  {/if}
</div>

<style>
  .bg-cool-black { background-color: #092F64; }
  .text-white { color: #fff; }
  /* small fade-in */
  [role="tooltip"] {
    opacity: 0;
    transform-origin: center;
    transition: opacity .18s ease, transform .18s ease;
    pointer-events: none;
  }
  :global(.relative:hover) [role="tooltip"] {
    opacity: 1;
    transform: translateY(0);
  }
</style>