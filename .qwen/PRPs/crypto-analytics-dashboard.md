---
name: "Crypto Analytics Dashboard - Advanced Analytical Tool"
description: "Build a comprehensive crypto analytics platform combining features from velo.xyz, coinglass.com, coinmarketcap.com, and rwa.xyz with Robinhood-like blue UI in Svelte"
---

## Goal

**Feature Goal**: Create a comprehensive crypto analytics dashboard that provides advanced market analysis, real-time data visualization, and portfolio tracking with a clean, Robinhood-inspired blue interface.

**Deliverable**: A fully functional SvelteKit web application with authentication, real-time charts, market data APIs, and responsive design.

**Success Definition**: Users can sign in with Privy/Web3 wallets, view real-time crypto prices, analyze market trends with advanced charts, track portfolios, and access comprehensive market analytics - all with a smooth, intuitive blue-themed UI.

## User Persona

**Target User**: Crypto traders, investors, and analysts who need comprehensive market data and analysis tools.

**Use Case**: Daily market analysis, portfolio tracking, trading decisions, and market research.

**User Journey**:
1. User lands on clean homepage with market overview
2. Signs in with Privy or Web3 wallet
3. Views personalized dashboard with portfolio and watchlists
4. Explores detailed analytics with interactive charts
5. Accesses advanced tools like correlation analysis, on-chain metrics, and technical indicators

**Pain Points Addressed**:
- Complex analytics tools with poor UX
- Scattered data across multiple platforms
- Lack of unified crypto analytics experience
- Poor mobile experience on trading platforms

## Why

- **Market Demand**: Growing need for comprehensive crypto analytics in one platform
- **User Experience**: Robinhood proved simple, clean design drives adoption
- **Technical Innovation**: Combine best features from leading platforms
- **Monetization Potential**: Premium analytics features, API access, institutional tools

## What

### Core Features

#### Authentication & User Management
- Privy wallet authentication
- Web3 wallet connection (MetaMask, WalletConnect)
- User profiles and preferences
- Secure session management

#### Market Data & Analytics
- Real-time cryptocurrency prices and market data
- Advanced charting with technical indicators
- Portfolio tracking and performance analytics
- Market overview with trending coins and categories
- On-chain analytics and metrics
- Correlation analysis between assets
- Volume analysis and liquidity tracking

#### Data Visualization
- Interactive price charts (candlestick, line, area)
- Heatmaps for market sentiment
- Portfolio allocation charts
- Historical data analysis
- Customizable dashboards

#### UI/UX (Robinhood-inspired Blue Theme)
- Clean, card-based layout
- Blue color scheme (#007AFF primary, #E3F2FD background)
- Minimalist navigation
- Responsive design for mobile/desktop
- Smooth animations and transitions
- Dark/light mode toggle

### Success Criteria

- [ ] Users can authenticate with Privy or Web3 wallets
- [ ] Real-time price data loads within 2 seconds
- [ ] Charts render smoothly with 60fps animations
- [ ] Mobile-responsive design works on all devices
- [ ] Portfolio tracking updates in real-time
- [ ] Advanced analytics load within 3 seconds
- [ ] Clean, intuitive navigation with <3 clicks to any feature

## All Needed Context

### Context Completeness Check

_Before writing this PRP, validate: "If someone knew nothing about this codebase, would they have everything needed to implement this successfully?"_

### Documentation & References

```yaml
# CRYPTO MARKET DATA APIs
- url: https://docs.coingecko.com/reference/introduction
  why: Primary market data API for prices, market cap, volume, and historical data
  critical: Essential for real-time price feeds and market overview

- url: https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductcandles
  why: Advanced candlestick data for technical analysis charts
  critical: Required for OHLCV data and advanced charting

- url: https://docs.alchemy.com/reference/alchemy-api-endpoints
  why: On-chain data and transaction analysis
  critical: For advanced analytics like whale tracking and DEX data

# SVELTE & UI LIBRARIES
- url: https://kit.svelte.dev/docs/introduction
  why: Official SvelteKit documentation for routing, SSR, and project structure
  critical: Core framework setup and best practices

- url: https://www.skeleton.dev/docs/get-started/installation
  why: Tailwind-based UI components with blue theme customization
  critical: Robinhood-like clean design system

- url: https://d3js.org/
  why: Data visualization library for advanced charts and analytics
  critical: Complex chart rendering and interactive visualizations

# AUTHENTICATION
- url: https://docs.privy.io/basics/react/setup
  why: Privy authentication setup for wallet connections
  critical: User authentication and wallet management

- url: https://docs.walletconnect.com/
  why: Web3 wallet connection standard
  critical: Multi-wallet support beyond Privy

# STYLING & DESIGN
- url: https://tailwindcss.com/docs/configuration
  why: Custom blue color scheme setup matching Robinhood aesthetic
  critical: Consistent theming and responsive design

- url: https://lucide.dev/
  why: Icon library for clean, minimal icons
  critical: Consistent iconography throughout the app
```

### Current Codebase tree

```
crypto-analytics-dashboard/
├── package.json
├── svelte.config.js
├── vite.config.js
├── tailwind.config.js
├── tsconfig.json
├── src/
│   ├── app.html
│   ├── app.css
│   ├── lib/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── utils/
│   │   └── types/
│   └── routes/
│       ├── +page.svelte
│       └── +layout.svelte
├── static/
└── tests/
```

### Desired Codebase tree

```
crypto-analytics-dashboard/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── charts/       # Chart components
│   │   │   ├── auth/         # Authentication components
│   │   │   └── analytics/    # Analytics widgets
│   │   ├── stores/           # Svelte stores for state
│   │   │   ├── auth.ts
│   │   │   ├── market.ts
│   │   │   └── portfolio.ts
│   │   ├── utils/
│   │   │   ├── api.ts        # API client functions
│   │   │   ├── formatters.ts # Data formatting utilities
│   │   │   └── charts.ts     # Chart configuration
│   │   └── types/
│   │       ├── market.ts
│   │       ├── user.ts
│   │       └── analytics.ts
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte      # Dashboard home
│   │   ├── auth/
│   │   │   └── +page.svelte  # Authentication page
│   │   ├── portfolio/
│   │   │   └── +page.svelte  # Portfolio view
│   │   ├── analytics/
│   │   │   ├── +page.svelte  # Analytics overview
│   │   │   └── [symbol]/
│   │   │       └── +page.svelte # Individual asset analysis
│   │   └── markets/
│   │       └── +page.svelte  # Market overview
│   └── app.css
├── static/
│   └── icons/                # Custom icons
└── package.json
```

### Known Gotchas of our stack & Library Quirks

```typescript
// CRITICAL: Privy requires specific initialization order
// Initialize Privy before any wallet operations
// GOTCHA: Privy config must be set before app mounts

// CRITICAL: D3.js requires proper cleanup to prevent memory leaks
// Always call chart.destroy() on component unmount
// GOTCHA: D3 selections can cause reactivity issues in Svelte

// CRITICAL: Real-time data updates need proper throttling
// Use Svelte's derived stores with debouncing for API calls
// GOTCHA: Too frequent API calls can hit rate limits

// CRITICAL: Web3 wallet connections need error boundaries
// Handle network switches and wallet disconnections gracefully
// GOTCHA: MetaMask network changes can break subscriptions
```

## Implementation Blueprint

### Data models and structure

```typescript
// Market Data Models
interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  marketCap: number;
  volume24h: number;
  priceChange24h: number;
  priceChange7d: number;
  priceChange30d: number;
}

interface ChartData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface PortfolioHolding {
  assetId: string;
  amount: number;
  averagePrice: number;
  currentValue: number;
  pnl: number;
  pnlPercentage: number;
}

// User & Auth Models
interface User {
  id: string;
  walletAddress: string;
  authProvider: 'privy' | 'web3';
  preferences: UserPreferences;
}

interface UserPreferences {
  theme: 'light' | 'dark';
  currency: string;
  defaultTimeframe: string;
  notifications: boolean;
}
```

### Implementation Tasks (ordered by dependencies)

```yaml
Task 1: SETUP_PROJECT Create SvelteKit project with TypeScript and Tailwind
  - IMPLEMENT: Initialize SvelteKit project with TypeScript, Tailwind CSS, and essential dependencies
  - FOLLOW pattern: Standard SvelteKit setup with src/routes structure
  - DEPENDENCIES: Node.js 18+, npm/pnpm
  - CONFIGURE: tailwind.config.js with custom blue color scheme (--color-primary: #007AFF)
  - PLACEMENT: Root directory with standard SvelteKit structure
  - VALIDATE: `npm run dev` starts development server successfully

Task 2: SETUP_AUTH Install and configure Privy authentication
  - IMPLEMENT: Privy SDK integration with wallet connection support
  - FOLLOW pattern: Privy React documentation adapted for Svelte
  - IMPORTS: @privy-io/react-auth, @privy-io/wagmi-connector
  - CONFIGURE: PrivyProvider in root layout with app ID and configuration
  - GOTCHA: Initialize Privy before app mounts to prevent auth issues
  - PLACEMENT: src/lib/auth/privy.ts and +layout.svelte
  - VALIDATE: `npm run build` completes without Privy-related errors

Task 3: CREATE_UI_SYSTEM Set up Skeleton UI with blue Robinhood theme
  - IMPLEMENT: Skeleton design system with custom blue color palette
  - FOLLOW pattern: Skeleton installation and theming documentation
  - CONFIGURE: tailwind.config.js with Robinhood blue colors
  - CREATE: Base UI components (Button, Card, Input, etc.) with blue styling
  - PLACEMENT: src/lib/components/ui/ and tailwind.config.js
  - VALIDATE: UI components render with correct blue theme

Task 4: CREATE_AUTH_COMPONENTS Build authentication UI components
  - IMPLEMENT: Login/signup components with Privy and Web3 wallet options
  - FOLLOW pattern: Clean card-based design like Robinhood
  - CREATE: AuthModal, WalletSelector, UserProfile components
  - INTEGRATE: Privy login flow with loading states and error handling
  - PLACEMENT: src/lib/components/auth/
  - VALIDATE: Authentication flow works end-to-end

Task 5: SETUP_API_CLIENT Create API client for market data
  - IMPLEMENT: Centralized API client for CoinGecko, Coinbase, and Alchemy
  - FOLLOW pattern: Svelte store-based API client with caching
  - CREATE: Functions for price data, historical charts, market overview
  - CONFIGURE: API keys and rate limiting
  - PLACEMENT: src/lib/utils/api.ts
  - VALIDATE: API calls return expected data structure

Task 6: CREATE_MARKET_STORES Set up Svelte stores for market data
  - IMPLEMENT: Reactive stores for real-time price updates and portfolio data
  - FOLLOW pattern: Svelte writable/derived stores with proper typing
  - CREATE: marketData store, portfolioStore, userPreferences store
  - INTEGRATE: Auto-refresh mechanisms with proper cleanup
  - PLACEMENT: src/lib/stores/
  - VALIDATE: Stores update reactively when data changes

Task 7: CREATE_CHART_COMPONENTS Build interactive chart components
  - IMPLEMENT: D3.js-based chart components for price visualization
  - FOLLOW pattern: Reusable chart components with Svelte reactivity
  - CREATE: CandlestickChart, LineChart, AreaChart components
  - INTEGRATE: Technical indicators and zoom/pan functionality
  - PLACEMENT: src/lib/components/charts/
  - VALIDATE: Charts render correctly with sample data

Task 8: CREATE_DASHBOARD_LAYOUT Build main dashboard layout
  - IMPLEMENT: Responsive layout with sidebar navigation and main content area
  - FOLLOW pattern: Robinhood-style clean layout with blue accents
  - CREATE: Navigation sidebar, header, and responsive grid system
  - INTEGRATE: Theme toggle and user menu
  - PLACEMENT: +layout.svelte and layout components
  - VALIDATE: Layout adapts correctly to different screen sizes

Task 9: CREATE_MARKET_OVERVIEW Build market overview page
  - IMPLEMENT: Real-time market data display with trending coins and categories
  - FOLLOW pattern: Card-based layout similar to CoinMarketCap
  - CREATE: MarketOverview component with sortable tables and filters
  - INTEGRATE: Real-time price updates and search functionality
  - PLACEMENT: src/routes/markets/+page.svelte
  - VALIDATE: Data loads within 2 seconds and updates in real-time

Task 10: CREATE_PORTFOLIO_TRACKING Build portfolio management
  - IMPLEMENT: Portfolio tracking with holdings, performance, and analytics
  - FOLLOW pattern: Clean portfolio view with allocation charts
  - CREATE: PortfolioDashboard, HoldingCard, PerformanceChart components
  - INTEGRATE: Real-time P&L calculations and historical performance
  - PLACEMENT: src/routes/portfolio/+page.svelte
  - VALIDATE: Portfolio calculations are accurate and update in real-time

Task 11: CREATE_ANALYTICS_TOOLS Build advanced analytics features
  - IMPLEMENT: Correlation analysis, on-chain metrics, and technical indicators
  - FOLLOW pattern: Interactive analytics widgets with detailed insights
  - CREATE: CorrelationMatrix, OnChainAnalytics, TechnicalAnalysis components
  - INTEGRATE: Advanced charting and data visualization
  - PLACEMENT: src/routes/analytics/+page.svelte
  - VALIDATE: Complex analytics load within 3 seconds

Task 12: CREATE_ASSET_DETAIL Build individual asset analysis pages
  - IMPLEMENT: Detailed asset pages with comprehensive analysis
  - FOLLOW pattern: vela.xyz and coinglass.com style detailed views
  - CREATE: AssetDetail page with multiple chart types and metrics
  - INTEGRATE: News feed, social sentiment, and trading data
  - PLACEMENT: src/routes/analytics/[symbol]/+page.svelte
  - VALIDATE: Asset data loads correctly and charts render properly

Task 13: ADD_RESPONSIVE_DESIGN Ensure mobile-first responsive design
  - IMPLEMENT: Mobile-optimized layouts and touch interactions
  - FOLLOW pattern: Robinhood mobile app design principles
  - MODIFY: All components for mobile responsiveness
  - TEST: Touch gestures and mobile navigation
  - VALIDATE: App works seamlessly on mobile devices

Task 14: ADD_ERROR_HANDLING Implement comprehensive error handling
  - IMPLEMENT: Error boundaries, loading states, and user-friendly error messages
  - FOLLOW pattern: Graceful degradation and retry mechanisms
  - CREATE: ErrorBoundary component and error handling utilities
  - TEST: Network failures, API errors, and authentication issues
  - VALIDATE: App handles all error scenarios gracefully

Task 15: PERFORMANCE_OPTIMIZATION Optimize for speed and efficiency
  - IMPLEMENT: Code splitting, lazy loading, and caching strategies
  - FOLLOW pattern: SvelteKit performance best practices
  - OPTIMIZE: Bundle size, initial load time, and runtime performance
  - TEST: Lighthouse performance scores
  - VALIDATE: App achieves 90+ Lighthouse scores
```

### Implementation Patterns & Key Details

```typescript
// CRITICAL: Privy Authentication Pattern
// Initialize Privy in root layout before any auth operations
import { PrivyProvider } from '@privy-io/react-auth';

<PrivyProvider
  appId={PUBLIC_PRIVY_APP_ID}
  config={{
    loginMethods: ['wallet', 'email'],
    appearance: {
      theme: 'light',
      accentColor: '#007AFF', // Robinhood blue
    },
  }}
>
  <slot />
</PrivyProvider>

// CRITICAL: Market Data Store Pattern
// Use derived stores for reactive data transformations
import { writable, derived } from 'svelte/store';

export const marketData = writable<CryptoAsset[]>([]);
export const selectedAsset = writable<string>('');

export const selectedAssetData = derived(
  [marketData, selectedAsset],
  ([$marketData, $selectedAsset]) =>
    $marketData.find(asset => asset.id === $selectedAsset)
);

// CRITICAL: Chart Component Pattern
// Proper cleanup to prevent memory leaks
import { onDestroy } from 'svelte';
import * as d3 from 'd3';

let chart: any;
let container: HTMLElement;

onDestroy(() => {
  if (chart) {
    chart.destroy();
  }
});

// CRITICAL: API Client Pattern
// Centralized error handling and caching
class APIClient {
  private cache = new Map();

  async getPrices(symbols: string[]) {
    const cacheKey = `prices-${symbols.join(',')}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const response = await fetch(`/api/prices?symbols=${symbols.join(',')}`);
      const data = await response.json();
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      console.error('Failed to fetch prices:', error);
      throw error;
    }
  }
}
```

### Integration Points

```yaml
DATABASE:
  - type: "SQLite for development, PostgreSQL for production"
  - purpose: "User preferences, watchlists, portfolio data"
  - migration: "Add users table with wallet addresses and preferences"

API_INTEGRATIONS:
  - CoinGecko: "Primary market data source"
  - Coinbase: "Advanced trading data and charts"
  - Alchemy: "On-chain analytics and transaction data"
  - Privy: "Wallet authentication and user management"

ENVIRONMENT_VARIABLES:
  - PUBLIC_PRIVY_APP_ID: "Privy application ID"
  - COINGECKO_API_KEY: "CoinGecko API key"
  - ALCHEMY_API_KEY: "Alchemy API key"
  - DATABASE_URL: "Database connection string"

DEPLOYMENT:
  - platform: "Vercel/Netlify for frontend"
  - backend: "Serverless functions for API routes"
  - cdn: "For static assets and chart data"
```

## Validation Loop

### Level 1: Syntax & Style (Immediate Feedback)

```bash
# Run after each file creation - fix before proceeding
npm run lint        # ESLint for code quality
npm run format      # Prettier for consistent formatting
npm run type-check  # TypeScript type checking
npm run build       # SvelteKit build verification

# Expected: Zero errors in all checks
```

### Level 2: Unit Tests (Component Validation)

```bash
# Test each component as it's created
npm run test:unit src/lib/components/ui/Button.test.ts
npm run test:unit src/lib/components/charts/CandlestickChart.test.ts
npm run test:unit src/lib/stores/market.test.ts

# Full test suite for affected areas
npm run test:unit src/lib/components/
npm run test:unit src/lib/stores/
npm run test:unit src/lib/utils/

# Coverage validation
npm run test:coverage

# Expected: All tests pass with >80% coverage
```

### Level 3: Integration Testing (System Validation)

```bash
# Authentication testing
curl -X POST http://localhost:5173/auth/login \
  -H "Content-Type: application/json" \
  -d '{"wallet": "test_wallet_address"}'

# API endpoint testing
curl http://localhost:5173/api/prices?symbols=BTC,ETH

# Market data integration
curl http://localhost:5173/api/markets/overview

# Privy authentication flow
# Test wallet connection and user session

# Database integration (if applicable)
# Verify user data persistence and retrieval

# Expected: All API endpoints return correct data, auth flow works
```

### Level 4: Creative & Domain-Specific Validation

```bash
# Performance validation
npm run lighthouse    # Lighthouse performance audit
npm run bundle-analyzer  # Bundle size analysis

# UI/UX validation
npm run visual-regression  # Visual diff testing
npm run accessibility     # Accessibility audit

# Real-time data validation
# Test WebSocket connections for live price updates
# Verify data refresh intervals and accuracy

# Cross-browser testing
# Test on Chrome, Firefox, Safari, Edge
# Mobile testing on iOS Safari, Chrome Mobile

# Authentication validation
# Test Privy login/logout flows
# Test Web3 wallet connections (MetaMask, WalletConnect)
# Test session persistence and security

# Chart validation
# Test chart rendering with various data sets
# Test interactive features (zoom, pan, indicators)
# Test responsive behavior on different screen sizes

# Expected: 90+ Lighthouse scores, no accessibility issues, all auth flows work
```

## Final Validation Checklist

### Technical Validation

- [ ] All 4 validation levels completed successfully
- [ ] All tests pass: `npm run test`
- [ ] No linting errors: `npm run lint`
- [ ] No type errors: `npm run type-check`
- [ ] Build succeeds: `npm run build`
- [ ] Bundle size optimized (<500KB initial load)
- [ ] Lighthouse scores: Performance >90, Accessibility >95

### Feature Validation

- [ ] Authentication works with Privy and Web3 wallets
- [ ] Real-time price data updates within 2 seconds
- [ ] Charts render smoothly with interactive features
- [ ] Portfolio tracking calculates P&L accurately
- [ ] Advanced analytics load within 3 seconds
- [ ] Mobile-responsive design works on all devices
- [ ] Clean blue UI matches Robinhood aesthetic

### User Experience Validation

- [ ] Intuitive navigation with <3 clicks to any feature
- [ ] Loading states and error messages are user-friendly
- [ ] Responsive design adapts to all screen sizes
- [ ] Dark/light mode toggle works correctly
- [ ] Search and filtering work smoothly
- [ ] Data visualizations are clear and informative

### Security & Performance Validation

- [ ] No sensitive data exposed in client-side code
- [ ] Authentication tokens properly secured
- [ ] API rate limiting implemented
- [ ] Error boundaries prevent app crashes
- [ ] Memory leaks prevented in chart components
- [ ] Network failure handling graceful

---

## Anti-Patterns to Avoid

- ❌ Don't create custom chart library - use established D3.js patterns
- ❌ Don't hardcode API endpoints - use environment variables
- ❌ Don't block UI with synchronous API calls - use async/await properly
- ❌ Don't store sensitive auth data in localStorage - use secure methods
- ❌ Don't create monolithic components - break down into reusable pieces
- ❌ Don't ignore mobile users - design mobile-first
- ❌ Don't forget cleanup - properly dispose of subscriptions and timers
- ❌ Don't over-fetch data - implement proper caching and pagination
- ❌ Don't ignore accessibility - follow WCAG guidelines
- ❌ Don't create new color schemes - stick to Robinhood blue theme