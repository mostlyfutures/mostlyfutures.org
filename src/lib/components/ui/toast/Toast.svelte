<script lang="ts">
  import { toasts, removeToast, type Toast } from '$lib/stores/toast';
  import { createEventDispatcher, onMount } from 'svelte';

  export let position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';

  const dispatch = createEventDispatcher();

  $: toastList = $toasts;

  function getPositionClasses() {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      default:
        return 'top-4 right-4';
    }
  }

  function getToastIcon(type: Toast['type']) {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return 'ℹ';
    }
  }

  function getToastClasses(type: Toast['type']) {
    const baseClasses = 'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden';

    switch (type) {
      case 'success':
        return `${baseClasses} border-l-4 border-green-500`;
      case 'error':
        return `${baseClasses} border-l-4 border-red-500`;
      case 'warning':
        return `${baseClasses} border-l-4 border-yellow-500`;
      case 'info':
        return `${baseClasses} border-l-4 border-blue-500`;
      default:
        return baseClasses;
    }
  }

  function getIconClasses(type: Toast['type']) {
    const baseClasses = 'flex-shrink-0 w-6 h-6';

    switch (type) {
      case 'success':
        return `${baseClasses} text-green-500`;
      case 'error':
        return `${baseClasses} text-red-500`;
      case 'warning':
        return `${baseClasses} text-yellow-500`;
      case 'info':
        return `${baseClasses} text-blue-500`;
      default:
        return `${baseClasses} text-gray-500`;
    }
  }

  function closeToast(toastId: string) {
    removeToast(toastId);
    dispatch('close', { id: toastId });
  }
</script>

<div class="fixed z-50 {getPositionClasses()} space-y-2">
  {#each toastList as toast (toast.id)}
    <div class={getToastClasses(toast.type)} role="alert" aria-live="polite">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <div class={getIconClasses(toast.type)}>
              {getToastIcon(toast.type)}
            </div>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              {toast.title}
            </p>
            {#if toast.message}
              <p class="mt-1 text-sm text-gray-500">
                {toast.message}
              </p>
            {/if}
            {#if toast.action}
              <div class="mt-3 flex space-x-2">
                <button
                  type="button"
                  class="text-sm font-medium text-robinhood-blue hover:text-robinhood-blue/80"
                  on:click={() => {
                    toast.action.handler();
                    closeToast(toast.id);
                  }}
                >
                  {toast.action.label}
                </button>
              </div>
            {/if}
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button
              type="button"
              class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-robinhood-blue"
              on:click={() => closeToast(toast.id)}
              aria-label="Close"
            >
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>