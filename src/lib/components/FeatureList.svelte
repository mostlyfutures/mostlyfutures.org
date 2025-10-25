<script lang="ts">
  export let title: string;
  export let items: string[];
  export let variant: 'pros' | 'cons' = 'pros';
</script>

<div class="feature-list" class:cons={variant === 'cons'}>
  <h4>{title}</h4>
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>

<style>
  .feature-list {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 1rem;
    padding: 1.5rem;
  }

  .feature-list.cons {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.3);
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #22c55e;
  }

  .cons h4 {
    color: #ef4444;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: rgba(229, 231, 235, 0.9);
    line-height: 1.6;
  }

  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #22c55e;
    font-weight: bold;
  }

  .cons li::before {
    content: '×';
    color: #ef4444;
  }
</style>
