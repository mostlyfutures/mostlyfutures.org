# Story PRP: Debug and Fix Critical Errors in mf-svelte

## Story Overview

**User Story**: As a developer working on the mf-svelte cryptocurrency analytics platform, I need to resolve critical errors identified in the code review to ensure a stable development workflow and production-ready error handling.

**Story Type**: Bug Fix / Enhancement
**Complexity**: Medium
**Affected Systems**: Error handling, development workflow, user experience, configuration

## Mission

Transform the error handling patterns and fix critical issues identified in the code review to create a production-ready SvelteKit application with proper error boundaries, logging, and development tooling.

## Codebase Intelligence Summary

### Current State Analysis
- **Project**: SvelteKit cryptocurrency analytics dashboard with TypeScript
- **Structure**: Well-organized with API client, stores, components, and proper routing
- **Error Handling**: Basic console.error() patterns with some structured API error handling
- **Development Tools**: Missing testing framework, linting, and proper error boundaries
- **Environment**: Basic environment variable usage without validation

### Critical Issues Identified
1. **8 console.error() statements** throughout the codebase (auth.ts, crypto.ts, market.ts, etc.)
2. **No SvelteKit error boundaries** (+error.svelte pages)
3. **Missing testing framework** (0% test coverage)
4. **No linting configuration** (ESLint/Prettier)
5. **Git conflicts** in markets page
6. **No environment variable validation**
7. **Heavy reliance on browser alert()** for critical errors

### Existing Patterns to Follow
- **API Error Structure**: Uses `APIError` interface with message, code, and details
- **Store Pattern**: Error states managed through Svelte stores with loading states
- **Type Safety**: Strong TypeScript typing throughout
- **Component Structure**: Well-organized component hierarchy with props and events

## Implementation Tasks

### Phase 1: Configuration and Tooling Setup

#### Task 1: ADD Development Dependencies
**Description**: Install essential development dependencies for code quality and testing
**Files to Create**: None (package.json update)
**Implementation Details**:
- Install ESLint with TypeScript and Svelte plugins
- Install Prettier for code formatting
- Install Vitest for testing framework
- Install zod for environment variable validation

**Dependencies to Add**:
```json
{
  "devDependencies": {
    "eslint": "^8.57.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint-plugin-svelte": "^2.35.1",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-svelte": "^3.0.0",
    "vitest": "^1.0.0",
    "@testing-library/svelte": "^4.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "jsdom": "^23.0.0",
    "zod": "^3.22.0"
  }
}
```

**Validation Command**: `npm install && npm list --depth=0 | grep -E "(eslint|prettier|vitest|zod)"`

---

#### Task 2: CREATE ESLint Configuration
**Description**: Set up ESLint configuration for code quality enforcement
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/.eslintrc.cjs`
**Implementation Details**: Follow SvelteKit ESLint configuration with TypeScript support

**Configuration Template**:
```javascript
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  ignorePatterns: ['*.cjs']
};
```

**Validation Command**: `npm run lint -- --dry-run .`

---

#### Task 3: CREATE Prettier Configuration
**Description**: Set up Prettier for consistent code formatting
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/.prettierrc`
**Implementation Details**: Configure formatting rules matching existing code style

**Configuration Template**:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "svelteStrictMode": true,
  "svelteAllowShorthand": true,
  "svelteIndentScriptAndStyle": true,
  "endOfLine": "lf"
}
```

**Validation Command**: `echo "const x = 1;" | npx prettier --stdin-filepath test.js`

---

#### Task 4: UPDATE Package.json Scripts
**Description**: Add missing npm scripts for development workflow
**File to Update**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/package.json`
**Implementation Details**: Add lint, format, test scripts and ensure check script works

**Scripts to Add**:
```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
    "lint": "prettier --plugin-search-dir . --check . && eslint .",
    "format": "prettier --plugin-search-dir . --write .",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

**Validation Command**: `npm run check && npm run lint -- --dry-run .`

---

### Phase 2: Environment and Validation

#### Task 5: CREATE Environment Variable Schema
**Description**: Implement type-safe environment variable validation
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/env.ts`
**Implementation Details**: Use zod for runtime validation and TypeScript integration

**Implementation Template**:
```typescript
import { z } from 'zod';

const envSchema = z.object({
  PUBLIC_API_URL: z.string().url().optional(),
  PUBLIC_BASE_PATH: z.string().optional(),
  PUBLIC_COINGECKO_API_KEY: z.string().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

// Validate environment variables
function validateEnv(): Env {
  const env = {
    PUBLIC_API_URL: process.env.PUBLIC_API_URL,
    PUBLIC_BASE_PATH: process.env.PUBLIC_BASE_PATH,
    PUBLIC_COINGECKO_API_KEY: process.env.PUBLIC_COINGECKO_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  };

  const result = envSchema.safeParse(env);

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.format());
    throw new Error('Invalid environment configuration');
  }

  return result.data;
}

export const env = validateEnv();
```

**Validation Command**: `npm run dev` (should not throw environment validation errors)

---

#### Task 6: CREATE Environment Example File
**Description**: Provide example environment configuration for developers
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/.env.example`
**Implementation Details**: Document all available environment variables

**Template Content**:
```bash
# API Configuration
PUBLIC_API_URL=https://api.coingecko.com/api/v3
PUBLIC_BASE_PATH=

# Optional: CoinGecko API Key for higher rate limits
PUBLIC_COINGECKO_API_KEY=your_api_key_here

# Environment
NODE_ENV=development
```

**Validation Command**: `ls -la .env.example`

---

### Phase 3: Error Handling Infrastructure

#### Task 7: CREATE Error Utilities Service
**Description**: Centralized error handling and logging utilities
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/utils/error.ts`
**Implementation Details**: Create structured error handling with logging and user-friendly messages

**Implementation Template**:
```typescript
import { goto } from '$app/navigation';

export enum ErrorType {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  NOT_FOUND = 'not_found',
  SERVER = 'server',
  UNKNOWN = 'unknown'
}

export interface AppError {
  type: ErrorType;
  message: string;
  userMessage: string;
  code?: number;
  details?: any;
  timestamp: Date;
}

export class ErrorHandler {
  static log(error: AppError): void {
    // In development, log to console with structure
    if (env.NODE_ENV === 'development') {
      console.group(`🚨 ${error.type.toUpperCase()} ERROR`);
      console.error('Message:', error.message);
      console.error('User Message:', error.userMessage);
      console.error('Code:', error.code);
      console.error('Details:', error.details);
      console.error('Timestamp:', error.timestamp);
      console.groupEnd();
    } else {
      // In production, you might send to a logging service
      console.error('App error:', {
        type: error.type,
        message: error.message,
        code: error.code,
        timestamp: error.timestamp
      });
    }
  }

  static createAppError(
    error: any,
    type: ErrorType = ErrorType.UNKNOWN,
    userMessage?: string
  ): AppError {
    return {
      type,
      message: error?.message || 'Unknown error occurred',
      userMessage: userMessage || this.getDefaultUserMessage(type),
      code: error?.code || error?.status,
      details: error,
      timestamp: new Date()
    };
  }

  static getDefaultUserMessage(type: ErrorType): string {
    switch (type) {
      case ErrorType.NETWORK:
        return 'Connection failed. Please check your internet connection.';
      case ErrorType.VALIDATION:
        return 'Please check your input and try again.';
      case ErrorType.AUTHENTICATION:
        return 'Please sign in to continue.';
      case ErrorType.NOT_FOUND:
        return 'The requested resource was not found.';
      case ErrorType.SERVER:
        return 'Server error occurred. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  static handle(error: AppError): void {
    this.log(error);

    // You could integrate with a toast/notification system here
    // For now, we'll use the existing pattern

    if (error.type === ErrorType.NOT_FOUND) {
      goto('/404');
    }
  }
}
```

**Validation Command**: `npm run dev` (no TypeScript errors)

---

#### Task 8: CREATE Toast Notification System
**Description**: Replace alert() calls with a modern toast notification system
**Files to Create**:
- `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/components/ui/toast/Toast.svelte`
- `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/stores/toast.ts`
**Implementation Details**: Create reusable toast component with Svelte store management

**Toast Store Template** (`src/lib/stores/toast.ts`):
```typescript
import { writable } from 'svelte/store';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    handler: () => void;
  };
}

export const toasts = writable<Toast[]>([]);

export function addToast(toast: Omit<Toast, 'id'>): string {
  const id = Math.random().toString(36).substr(2, 9);
  const newToast: Toast = {
    id,
    duration: 5000,
    ...toast
  };

  toasts.update(current => [...current, newToast]);

  // Auto-remove after duration
  if (newToast.duration && newToast.duration > 0) {
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  }

  return id;
}

export function removeToast(id: string): void {
  toasts.update(current => current.filter(toast => toast.id !== id));
}

export function clearToasts(): void {
  toasts.set([]);
}

// Convenience methods
export const toast = {
  success: (title: string, message?: string) =>
    addToast({ type: 'success', title, message }),
  error: (title: string, message?: string) =>
    addToast({ type: 'error', title, message, duration: 8000 }),
  warning: (title: string, message?: string) =>
    addToast({ type: 'warning', title, message }),
  info: (title: string, message?: string) =>
    addToast({ type: 'info', title, message })
};
```

**Validation Command**: `npm run dev` (check TypeScript compilation)

---

### Phase 4: Error Boundaries Implementation

#### Task 9: CREATE Root Error Boundary
**Description**: Implement SvelteKit error boundary for graceful error handling
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/routes/+error.svelte`
**Implementation Details**: Create user-friendly error page with navigation options

**Implementation Template**:
```svelte
<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { toast } from '$lib/stores/toast';

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
```

**Validation Command**: `npm run dev && curl -s http://localhost:5173/nonexistent-page | grep -q "Page Not Found"`

---

#### Task 10: CREATE API Error Boundary
**Description**: Specialized error handling for API routes
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/routes/api/+error.svelte`
**Implementation Details**: Handle API-specific errors with proper JSON responses

**Validation Command**: Test with `curl http://localhost:5173/api/invalid-endpoint`

---

### Phase 5: Fix Console.error Statements

#### Task 11: REFACTOR Authentication Store Error Handling
**Description**: Replace console.error() statements with structured error handling
**File to Update**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/stores/auth.ts`
**Lines**: 79, 114
**Implementation Details**: Replace console.error() with ErrorHandler and toast notifications

**Before** (Line 79):
```typescript
console.error('Failed to connect wallet:', error);
```

**After**:
```typescript
const appError = ErrorHandler.createAppError(
  error,
  ErrorType.AUTHENTICATION,
  'Failed to connect wallet. Please ensure MetaMask is installed and unlocked.'
);
ErrorHandler.handle(appError);
toast.error('Wallet Connection Failed', appError.userMessage);
```

**Validation Command**: `npm run lint && npm run check`

---

#### Task 12: REFACTOR Market Store Error Handling
**Description**: Fix console.error() statements in market data store
**File to Update**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/stores/market.ts`
**Lines**: 108, 122, 134
**Implementation Details**: Replace with structured error handling and proper error state management

**Validation Command**: `npm run lint && npm run dev` (check market data loading)

---

#### Task 13: REFACTOR API Client Error Handling
**Description**: Improve error handling in crypto API client
**File to Update**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/api/crypto.ts`
**Line**: 62
**Implementation Details**: Replace console.error() with structured logging

**Validation Command**: Test API error scenarios

---

#### Task 14: REFACTOR Route Error Handling
**Description**: Fix console.error() in route files
**Files to Update**:
- `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/routes/markets/[symbol]/+page.ts` (Line 26)
- `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/routes/markets/+page.svelte` (Line 62)
- `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/components/AIAgentInterface.svelte` (Lines 54, 115)

**Implementation Details**: Replace console.error() with proper error handling

**Validation Command**: `npm run lint && npm run check`

---

### Phase 6: Fix Git Conflicts and Testing

#### Task 15: RESOLVE Git Conflicts in Markets Page
**Description**: Fix merge conflicts in the markets page
**File to Update**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/routes/markets/+page.svelte`
**Lines**: 16-24
**Implementation Details**: Resolve conflicts and ensure proper error handling integration

**Validation Command**: `git diff src/routes/markets/+page.svelte` (should show no conflict markers)

---

#### Task 16: CREATE Basic Test Setup
**Description**: Set up basic testing infrastructure for error handling
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/vitest.config.ts`
**Implementation Details**: Configure Vitest with Svelte support

**Configuration Template**:
```typescript
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts']
  }
});
```

**Validation Command**: `npm run test -- --run`

---

#### Task 17: CREATE Error Handling Tests
**Description**: Add basic tests for error handling utilities
**File to Create**: `/Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte/src/lib/utils/error.test.ts`
**Implementation Details**: Test ErrorHandler utility functions

**Test Template**:
```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { ErrorHandler, ErrorType } from './error';

describe('ErrorHandler', () => {
  beforeEach(() => {
    // Clear console before each test
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should create AppError with correct structure', () => {
    const error = new Error('Test error');
    const appError = ErrorHandler.createAppError(error, ErrorType.NETWORK);

    expect(appError.type).toBe(ErrorType.NETWORK);
    expect(appError.message).toBe('Test error');
    expect(appError.userMessage).toBe('Connection failed. Please check your internet connection.');
    expect(appError.timestamp).toBeInstanceOf(Date);
  });

  it('should use custom user message when provided', () => {
    const error = new Error('Test error');
    const customMessage = 'Custom error message';
    const appError = ErrorHandler.createAppError(error, ErrorType.VALIDATION, customMessage);

    expect(appError.userMessage).toBe(customMessage);
  });
});
```

**Validation Command**: `npm run test`

---

## Acceptance Criteria

### Functional Requirements ✅
- [ ] All console.error() statements replaced with structured error handling
- [ ] SvelteKit error boundaries implemented (+error.svelte pages)
- [ ] Development workflow scripts functional (lint, format, test)
- [ ] Environment variable validation in place
- [ ] Toast notification system working
- [ ] Git conflicts resolved
- [ ] Basic test coverage for error handling

### Quality Requirements ✅
- [ ] No TypeScript compilation errors
- [ ] ESLint passes without warnings
- [ ] Prettier formatting consistent
- [ ] Tests pass for error handling utilities
- [ ] Development server starts without errors
- [ ] Production build succeeds

### User Experience Requirements ✅
- [ ] Users see friendly error messages instead of technical details
- [ ] Error pages provide navigation options
- [ ] Toast notifications replace alert() calls
- [ ] Loading states work properly during error scenarios
- [ ] App doesn't crash on component errors

## Dependencies and Prerequisites

### Required Dependencies
- Existing: SvelteKit, TypeScript, Tailwind CSS
- To Add: ESLint, Prettier, Vitest, Zod
- No breaking changes to existing APIs

### Integration Points
- API client error handling pattern
- Svelte store pattern for state management
- Existing component structure
- Current routing system

## Risk Mitigation

### Potential Issues
1. **Breaking Changes**: Minimal, as we're enhancing existing error handling
2. **Development Workflow**: Temporary disruption while setting up tooling
3. **Performance**: Negligible impact from additional error handling

### Mitigation Strategies
- Maintain backward compatibility
- Implement changes incrementally
- Test thoroughly at each phase
- Keep existing API contracts

## Success Metrics

### Technical Metrics
- 0 console.error() statements in production code
- 100% of routes have error boundaries
- All npm scripts functional
- TypeScript compilation success
- ESLint pass rate: 100%

### User Experience Metrics
- Error message clarity and helpfulness
- Navigation options available on error pages
- Consistent error handling patterns
- Reduced app crashes from unhandled errors

## Validation Strategy

### Automated Validation
- TypeScript compilation: `npm run check`
- Linting: `npm run lint`
- Testing: `npm run test`
- Build: `npm run build`

### Manual Validation
- Error scenarios in development
- Error page navigation
- Toast notification display
- Environment variable validation

### End-to-End Validation
- Complete error flow from API failure to user notification
- Error boundary activation and recovery
- Development workflow tooling integration

## Rollback Plan

If critical issues arise:
1. Revert package.json changes to restore previous state
2. Remove new error handling files
3. Restore original console.error() patterns
4. Remove test configurations
5. Document issues for future resolution

This comprehensive PRP addresses all critical errors identified in the code review while following existing codebase patterns and maintaining backward compatibility.