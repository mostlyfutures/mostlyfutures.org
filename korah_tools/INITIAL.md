## FEATURE:

**Crypto Analytics Dashboard - Advanced Market Intelligence Platform**

Build a comprehensive cryptocurrency analytics web application in SvelteKit that combines the best features from velo.xyz, coinglass.com, coinmarketcap.com, and rwa.xyz, with a clean Robinhood-inspired blue UI/UX and Web3 authentication via Privy and wallet connections.

### Core Features:
1. **Authentication**: Privy wallet authentication + Web3 wallet connections (MetaMask, WalletConnect)
2. **Real-time Market Data**: Live crypto prices, market cap, volume, and trending coins
3. **Advanced Analytics**: 
   - Interactive charts with technical indicators
   - Correlation analysis between assets
   - On-chain metrics and whale tracking
   - Volume analysis and liquidity heatmaps
4. **Portfolio Tracking**: Personal portfolio management with P&L analytics
5. **Market Intelligence**:
   - Market overview with sortable tables
   - Category-based analysis (DeFi, Layer-1, AI, etc.)
   - Historical data analysis
6. **Clean UI/UX**: Robinhood-style minimalist blue interface with smooth animations

### Tech Stack:
- **Frontend**: SvelteKit + TypeScript
- **Styling**: Tailwind CSS + Skeleton UI (blue theme)
- **Authentication**: Privy SDK + Web3 wallet connectors
- **Charts**: D3.js + Chart.js for data visualization
- **Data**: CoinGecko API, Coinbase API, Alchemy (on-chain data)
- **State Management**: Svelte stores
- **Deployment**: Vercel/Netlify

---

## EXAMPLES:

### 1. **SvelteKit Project Structure** (`examples/sveltekit-structure/`)
Reference SvelteKit routing and SSR patterns:
```
src/
├── routes/
│   ├── +layout.svelte          # Root layout with auth provider
│   ├── +page.svelte            # Dashboard home
│   ├── auth/
│   │   └── +page.svelte        # Login page
│   ├── markets/
│   │   └── +page.svelte        # Market overview
│   ├── portfolio/
│   │   └── +page.svelte        # Portfolio tracking
│   └── analytics/
│       ├── +page.svelte        # Analytics overview
│       └── [symbol]/
│           └── +page.svelte    # Asset detail page
├── lib/
│   ├── components/             # Reusable components
│   ├── stores/                 # Svelte stores
│   ├── utils/                  # Helper functions
│   └── types/                  # TypeScript types
```

**Why this matters**: SvelteKit's file-based routing makes organization intuitive. The `+page.svelte` pattern is crucial for proper SSR and data loading.

### 2. **Privy Authentication Pattern** (`examples/auth-integration/`)
```typescript
// Example: src/lib/auth/privy-config.ts
import { PrivyProvider } from '@privy-io/react-auth';

export const privyConfig = {
  appId: import.meta.env.VITE_PRIVY_APP_ID,
  config: {
    loginMethods: ['wallet', 'email', 'google'],
    appearance: {
      theme: 'light',
      accentColor: '#007AFF', // Robinhood blue
      logo: '/logo.svg'
    },
    embeddedWallets: {
      createOnLogin: 'users-without-wallets'
    }
  }
};
```

**Why this matters**: Privy must be initialized before any authentication calls. The config structure determines login options and UI theming.

### 3. **Market Data API Integration** (`examples/api-clients/`)
```typescript
// Example: src/lib/utils/api/coingecko.ts
import type { CryptoAsset, ChartData } from '$lib/types/market';

export class CoinGeckoClient {
  private baseUrl = 'https://api.coingecko.com/api/v3';
  private apiKey: string;

  async getMarketData(symbols: string[]): Promise<CryptoAsset[]> {
    const response = await fetch(
      `${this.baseUrl}/coins/markets?vs_currency=usd&ids=${symbols.join(',')}`
    );
    
    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }
    
    return response.json();
  }

  async getChartData(symbol: string, days: number): Promise<ChartData[]> {
    // Implement with proper error handling and rate limiting
  }
}
```

**Why this matters**: Centralized API clients prevent code duplication and make rate limiting easier. Always handle API errors gracefully.

### 4. **Svelte Store Pattern for Real-time Data** (`examples/stores/`)
```typescript
// Example: src/lib/stores/market.ts
import { writable, derived } from 'svelte/store';
import type { CryptoAsset } from '$lib/types/market';

// Writable store for market data
export const marketData = writable<CryptoAsset[]>([]);

// Derived store for trending coins (price change > 10%)
export const trendingCoins = derived(
  marketData,
  $marketData => $marketData.filter(coin => coin.priceChange24h > 10)
);

// Auto-refresh mechanism with cleanup
export function startMarketDataRefresh() {
  const interval = setInterval(async () => {
    const data = await fetchMarketData();
    marketData.set(data);
  }, 30000); // Refresh every 30 seconds

  return () => clearInterval(interval);
}
```

**Why this matters**: Svelte stores provide reactive state management. Derived stores prevent unnecessary recalculations. Always cleanup intervals to prevent memory leaks.

### 5. **D3.js Chart Component** (`examples/charts/`)
```typescript
// Example: src/lib/components/charts/CandlestickChart.svelte
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as d3 from 'd3';
  import type { ChartData } from '$lib/types/market';

  export let data: ChartData[];
  export let width = 800;
  export let height = 400;

  let container: HTMLDivElement;
  let chart: any;

  onMount(() => {
    chart = createCandlestickChart(container, data, width, height);
  });

  onDestroy(() => {
    // CRITICAL: Cleanup D3 to prevent memory leaks
    if (chart) {
      d3.select(container).selectAll('*').remove();
    }
  });

  $: if (chart && data) {
    updateChart(chart, data);
  }
</script>

<div bind:this={container} class="chart-container"></div>
```

**Why this matters**: D3.js requires proper lifecycle management in Svelte. Always cleanup on component destroy. Use reactive statements (`$:`) to update charts when data changes.

---

## DOCUMENTATION:

### **Essential Reading (Priority Order)**

#### 1. **SvelteKit Core** ⭐⭐⭐⭐⭐
- https://kit.svelte.dev/docs/introduction
  - **Why**: Foundation for routing, SSR, data loading, and project structure
  - **Key Sections**: Routing, Load Functions, Server Routes
- https://svelte.dev/docs/svelte/overview
  - **Why**: Reactive programming model, component lifecycle, stores
  - **Key Sections**: Reactivity, Stores, Component Lifecycle

#### 2. **Authentication** ⭐⭐⭐⭐⭐
- https://docs.privy.io/guide/react/quickstart
  - **Why**: Primary authentication SDK - wallet connection and user management
  - **Critical**: Initialization order, configuration options, error handling
- https://docs.walletconnect.com/web3modal/v3/about
  - **Why**: Web3 wallet connection standard (MetaMask, etc.)
  - **Critical**: Network switching, wallet disconnect handling

#### 3. **Market Data APIs** ⭐⭐⭐⭐⭐
- https://docs.coingecko.com/reference/introduction
  - **Why**: Primary source for crypto prices, market cap, volume
  - **Critical**: Rate limits (50 calls/min free tier), endpoint structure
  - **Key Endpoints**: `/coins/markets`, `/coins/{id}`, `/coins/{id}/market_chart`
- https://docs.cloud.coinbase.com/exchange/reference
  - **Why**: Advanced trading data and OHLCV candlestick data
  - **Critical**: Authentication requirements, WebSocket for real-time data
- https://docs.alchemy.com/reference/alchemy-api-endpoints
  - **Why**: On-chain analytics - whale tracking, DEX data, token transfers
  - **Critical**: API key required, supports multiple chains

#### 4. **UI/UX Libraries** ⭐⭐⭐⭐
- https://www.skeleton.dev/docs/get-started/installation
  - **Why**: Tailwind-based UI components with theme customization
  - **Critical**: Setup with SvelteKit, theme configuration
  - **Key Sections**: Theming, Components, Utilities
- https://tailwindcss.com/docs/configuration
  - **Why**: Custom blue color scheme matching Robinhood aesthetic
  - **Critical**: Color palette setup, dark mode configuration
- https://lucide.dev/guide/packages/lucide-svelte
  - **Why**: Icon library for clean, minimal UI
  - **Usage**: Consistent iconography throughout app

#### 5. **Data Visualization** ⭐⭐⭐⭐
- https://d3js.org/getting-started
  - **Why**: Advanced interactive charts and visualizations
  - **Critical**: Proper cleanup in Svelte lifecycle, reactivity patterns
  - **Key Sections**: Scales, Axes, Selections
- https://www.chartjs.org/docs/latest/
  - **Why**: Simpler charts for portfolio allocation, performance
  - **Critical**: Responsive design, theme integration

#### 6. **TypeScript & Validation** ⭐⭐⭐
- https://www.typescriptlang.org/docs/handbook/intro.html
  - **Why**: Type safety for API responses and component props
- https://zod.dev/
  - **Why**: Runtime validation for API responses
  - **Critical**: Schema validation prevents runtime errors

#### 7. **Reference Platforms** (for feature inspiration)
- https://velo.xyz/
  - **Feature Reference**: Cross-exchange data aggregation, advanced filtering
- https://www.coinglass.com/
  - **Feature Reference**: Liquidation data, long/short ratios, heatmaps
- https://coinmarketcap.com/
  - **Feature Reference**: Clean table layouts, trending sections, categories
- https://rwa.xyz/
  - **Feature Reference**: Real-world asset tokenization data, clean dashboards

### **MCP Server Integrations** (if using)
- **Crawl4AI**: For scraping crypto news and social sentiment
- **Playwright MCP**: For automated testing of UI interactions
- **Database MCP**: If implementing user data persistence

---

## OTHER CONSIDERATIONS:

### **Critical Gotchas** ⚠️

#### 1. **Privy Authentication**
```typescript
// ❌ WRONG: Initializing Privy after component mounts
onMount(() => {
  initPrivy(); // Too late!
});

// ✅ CORRECT: Initialize in root layout before app renders
// +layout.svelte
<script>
  import { PrivyProvider } from '@privy-io/react-auth';
  import { PUBLIC_PRIVY_APP_ID } from '$env/static/public';
</script>

<PrivyProvider appId={PUBLIC_PRIVY_APP_ID} config={...}>
  <slot />
</PrivyProvider>
```

**Why**: Privy must be initialized before any authentication operations. Late initialization causes "Provider not found" errors.

#### 2. **D3.js Memory Leaks in Svelte**
```typescript
// ❌ WRONG: Not cleaning up D3 selections
onMount(() => {
  d3.select(container).append('svg')...
});

// ✅ CORRECT: Always cleanup on destroy
onDestroy(() => {
  d3.select(container).selectAll('*').remove();
});
```

**Why**: D3 creates DOM elements that Svelte doesn't track. Without cleanup, memory leaks accumulate.

#### 3. **API Rate Limiting**
```typescript
// ❌ WRONG: Calling API on every reactive update
$: if (selectedSymbol) {
  fetchPrice(selectedSymbol); // Could call 100x/second!
}

// ✅ CORRECT: Debounce API calls
import { debounce } from '$lib/utils/debounce';

$: debouncedFetch = debounce(() => {
  fetchPrice(selectedSymbol);
}, 500);
```

**Why**: CoinGecko free tier limits to 50 calls/min. Reactive statements can trigger excessively without debouncing.

#### 4. **Web3 Wallet Network Switching**
```typescript
// ❌ WRONG: Not handling network changes
async function connectWallet() {
  await ethereum.request({ method: 'eth_requestAccounts' });
}

// ✅ CORRECT: Listen for network changes
ethereum.on('chainChanged', (chainId) => {
  // Reload or update UI
  window.location.reload();
});

ethereum.on('accountsChanged', (accounts) => {
  if (accounts.length === 0) {
    // User disconnected wallet
    handleDisconnect();
  }
});
```

**Why**: Users can switch networks/accounts in MetaMask. App must handle these events or data becomes stale.

#### 5. **SvelteKit SSR vs Client-Only Code**
```typescript
// ❌ WRONG: Using browser APIs in +page.ts (runs on server too)
export async function load() {
  const wallet = window.ethereum; // Crashes on server!
}

// ✅ CORRECT: Use browser check
import { browser } from '$app/environment';

export async function load() {
  if (browser) {
    const wallet = window.ethereum;
  }
}
```

**Why**: SvelteKit runs code on both server and client. Browser APIs only exist client-side.

### **Performance Optimizations** 🚀

1. **Code Splitting**
   - Lazy load chart components: `const Chart = await import('$lib/components/charts/CandlestickChart.svelte')`
   - Split routes for faster initial load

2. **Data Caching**
   - Cache API responses for 30-60 seconds
   - Use Svelte stores to prevent duplicate API calls
   - Implement stale-while-revalidate pattern

3. **Bundle Size**
   - Tree-shake D3.js (only import used functions)
   - Optimize images with `@sveltejs/adapter-auto`
   - Target <500KB initial bundle

### **Security Best Practices** 🔒

1. **Environment Variables**
   ```bash
   # .env.example
   VITE_PRIVY_APP_ID=your_privy_app_id
   VITE_COINGECKO_API_KEY=your_api_key
   VITE_ALCHEMY_API_KEY=your_api_key
   
   # Never commit .env to git!
   ```

2. **API Key Protection**
   - Use SvelteKit server routes (`+server.ts`) for API calls with keys
   - Never expose API keys in client-side code
   - Implement rate limiting on server routes

3. **Wallet Security**
   - Never request private keys
   - Validate all wallet signatures
   - Use Privy's secure embedded wallets when possible

### **Common Mistakes AI Assistants Make** 🤖

1. **Mixing React and Svelte Patterns**
   - ❌ Using `useState` instead of Svelte `$:` reactive statements
   - ❌ Trying to use JSX instead of Svelte template syntax

2. **Forgetting Svelte Lifecycle**
   - ❌ Not using `onMount` for browser-only code
   - ❌ Not cleaning up with `onDestroy`

3. **Improper Store Usage**
   - ❌ Creating stores inside components (should be in `$lib/stores/`)
   - ❌ Not unsubscribing from stores (use `$` prefix for auto-subscribe)

4. **Type Safety Issues**
   - ❌ Using `any` instead of proper types for API responses
   - ❌ Not validating external data with Zod or similar

### **UI/UX Robinhood-Specific Guidelines** 🎨

1. **Color Scheme**
   ```javascript
   // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         colors: {
           'primary-blue': '#007AFF',
           'bg-light': '#F5F5F7',
           'bg-dark': '#1C1C1E',
           'success-green': '#34C759',
           'error-red': '#FF3B30',
         }
       }
     }
   }
   ```

2. **Design Principles**
   - Minimalist: Remove unnecessary borders and decorations
   - Card-based: Use subtle shadows instead of borders
   - Smooth animations: 200-300ms transitions
   - Large touch targets: 44px minimum for buttons
   - Clean typography: SF Pro Display or Inter font

3. **Mobile-First**
   - Design for mobile, enhance for desktop
   - Bottom navigation on mobile
   - Swipeable charts and cards
   - Pull-to-refresh for data updates

### **Testing Strategy** ✅

1. **Unit Tests**
   - Test API clients with mocked responses
   - Test utility functions (formatters, calculators)
   - Test store logic

2. **Component Tests**
   - Test chart rendering with sample data
   - Test authentication flows
   - Test responsive layouts

3. **E2E Tests** (with Playwright MCP if available)
   - Test complete user journeys
   - Test wallet connection flows
   - Test data loading and updates

### **Deployment Checklist** 📦

- [ ] Environment variables configured on hosting platform
- [ ] API keys stored securely (not in client code)
- [ ] Build succeeds with no errors
- [ ] Lighthouse scores: Performance >90, Accessibility >95
- [ ] Mobile responsive on iOS and Android
- [ ] Wallet connections tested (MetaMask, WalletConnect)
- [ ] Error boundaries for API failures
- [ ] Analytics and monitoring setup
- [ ] CDN configured for static assets

---

## **Quick Start Development Flow** 🚀

1. **Initialize Project**
   ```bash
   npm create svelte@latest crypto-analytics-dashboard
   cd crypto-analytics-dashboard
   npm install
   ```

2. **Install Dependencies**
   ```bash
   npm install -D tailwindcss autoprefixer postcss
   npm install @privy-io/react-auth @privy-io/wagmi-connector
   npm install d3 chart.js svelte-chartjs
   npm install @skeletonlabs/skeleton
   npm install lucide-svelte
   ```

3. **Setup Authentication**
   - Create Privy account and get App ID
   - Configure `+layout.svelte` with PrivyProvider
   - Create auth components

4. **Implement Core Features** (in order)
   - ✅ Authentication system
   - ✅ Market data fetching
   - ✅ Basic dashboard layout
   - ✅ Chart components
   - ✅ Portfolio tracking
   - ✅ Advanced analytics

5. **Progressive Enhancement**
   - Start with basic features
   - Validate each feature before moving on
   - Add advanced features iteratively

This structure ensures you have all the context needed to build a production-ready crypto analytics platform! 🎯
