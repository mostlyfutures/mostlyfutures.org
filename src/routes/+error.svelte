<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { toast } from '$lib/stores/toast';
  import { ErrorHandler } from '$lib/utils/error';

  export let status: number;
  export let error: Error & { AppError?: any };

  onMount(() => {
    // Log error for debugging
    if (error?.AppError) {
      // It's a structured error from our system
      ErrorHandler.log(error.AppError);
    } else {
      // It's an unhandled error
      console.error('Unhandled error:', error);
      toast.error('Something went wrong', 'Please try refreshing the page');
    }
  });

  function getErrorMessage(status: number): { title: string; message: string } {
    switch (status) {
      case 404:
        return {
          title: 'Page Not Found',
          message: 'The page you\'re looking for doesn\'t exist.'
        };
      case 500:
        return {
          title: 'Server Error',
          message: 'Something went wrong on our end. Please try again later.'
        };
      default:
        return {
          title: 'Oops!',
          message: 'Something went wrong. Please try again.'
        };
    }
  }

  const { title, message } = getErrorMessage(status);
</script>

<svelte:head>
  <title>{title} - MostlyFutures</title>
  <meta name="description" content={message} />
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
  <div class="max-w-md w-full text-center">
    <div class="mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-robinhood-blue/10 rounded-full mb-4">
        <svg class="w-8 h-8 text-robinhood-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>

      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h1>

      <p class="text-gray-600 dark:text-gray-400 mb-6">
        {message}
      </p>

      {#if error?.AppError?.userMessage}
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <p class="text-red-600 dark:text-red-400 text-sm">
            {error.AppError.userMessage}
          </p>
        </div>
      {/if}
    </div>

    <div class="space-y-3">
      <button
        on:click={() => window.location.reload()}
        class="w-full px-4 py-2 bg-robinhood-blue text-white rounded-lg hover:bg-robinhood-blue/90 transition-colors"
      >
        Refresh Page
      </button>

      <a
        href="/"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors inline-block text-center"
      >
        Go Home
      </a>
    </div>

    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <p class="text-xs text-gray-500 dark:text-gray-400">
        Error Code: {status}
        {#if error?.AppError?.type}
          <br />
          Type: {error.AppError.type}
        {/if}
      </p>
    </div>
  </div>
</div>