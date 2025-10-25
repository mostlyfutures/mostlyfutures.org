import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock environment variables
vi.mock('$lib/env', () => ({
  env: {
    NODE_ENV: 'test',
    PUBLIC_API_URL: 'https://api.test.com',
    PUBLIC_BASE_PATH: '',
    PUBLIC_COINGECKO_API_KEY: 'test-key'
  }
}));

// Mock SvelteKit navigation
vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
  invalidate: vi.fn(),
  invalidateAll: vi.fn()
}));

// Mock SvelteKit stores
vi.mock('$app/stores', () => ({
  page: {
    subscribe: vi.fn()
  },
  navigating: {
    subscribe: vi.fn()
  },
  updated: {
    subscribe: vi.fn()
  }
}));