## FEATURE:

Advanced Crypto Analytics Platform - A comprehensive web-based analytical tool that combines the advanced features of Velo.xyz, CoinGlass, CoinMarketCap, and RWA.xyz with a clean, minimalist UI/UX inspired by Robinhood's design philosophy (using a blue color scheme).

### Core Features:

**1. Multi-Asset Analytics Dashboard**
- Real-time cryptocurrency price tracking and charts
- Market cap, volume, and circulating supply data
- Historical price data with customizable timeframes
- Portfolio tracking and performance metrics
- Real-world asset (RWA) tokenization tracking
- DeFi protocol analytics and TVL (Total Value Locked) metrics

**2. Advanced Trading Intelligence**
- Liquidation heatmaps and long/short ratios
- Funding rates across multiple exchanges
- Open interest and derivatives data
- On-chain metrics and whale tracking
- Market sentiment indicators
- Cross-exchange arbitrage opportunities

**3. Clean Robinhood-Inspired UI**
- Minimalist blue-themed interface
- Smooth animations and transitions
- Mobile-first responsive design
- Intuitive navigation with gesture support
- Clean data visualization (charts, graphs, heatmaps)
- Dark mode support

**4. Authentication & Wallet Integration**
- Privy authentication for email/social login
- Web3 wallet connections (MetaMask, WalletConnect, Coinbase Wallet, etc.)
- Multi-wallet support for portfolio aggregation
- Secure session management
- Optional account creation for saving preferences

**5. User Features**
- Customizable watchlists
- Price alerts and notifications
- Saved chart configurations
- Portfolio tracking across multiple wallets
- Favorite assets and quick access
- Personalized dashboard layouts

## EXAMPLES:

### Reference Platforms Analysis:

**1. Velo.xyz Features to Incorporate:**
- Liquidity pool analytics
- Velodrome-specific metrics (if applicable to other DEXs)
- Voting and governance analytics
- Emissions and rewards tracking

**2. CoinGlass Features to Incorporate:**
- Liquidation maps and heatmaps
- Long/short ratios across exchanges
- Funding rate comparisons
- Open interest charts
- Exchange flow data
- Fear & Greed Index

**3. CoinMarketCap Features to Incorporate:**
- Comprehensive token listings
- Market cap rankings
- Price change percentages (24h, 7d, 30d)
- Trading volume analysis
- Token categories and sectors
- News and updates feed

**4. RWA.xyz Features to Incorporate:**
- Real-world asset tokenization tracking
- RWA protocol listings
- Asset backing verification
- Yield and APY tracking for RWA tokens
- Regulatory compliance indicators

### UI/UX Examples:

**Robinhood-Inspired Design Elements:**
- Simple card-based layouts
- Prominent price displays with clean typography
- Smooth page transitions
- Bottom navigation on mobile
- Gesture-based interactions (swipe, pull-to-refresh)
- Minimalist color palette (blues, whites, grays)
- Floating action buttons for key actions
- Progressive disclosure of complex data

### Example User Flows:

**Flow 1: First-Time User**
1. Land on homepage with featured analytics
2. Browse public data without authentication
3. Click "Connect Wallet" or "Sign In"
4. Choose Privy (email/social) or Web3 wallet
5. Complete authentication
6. Personalize dashboard with watchlists
7. Add wallet addresses for portfolio tracking

**Flow 2: Returning User - Quick Price Check**
1. Open app (auto-authenticated)
2. View personalized dashboard
3. Check watchlist prices
4. Tap asset for detailed analytics
5. View charts, metrics, and insights
6. Set price alert if desired

**Flow 3: Advanced Analytics Research**
1. Navigate to specific asset page
2. View comprehensive metrics dashboard
3. Analyze liquidation maps and funding rates
4. Check on-chain data and whale movements
5. Compare across multiple timeframes
6. Export data or save chart configuration

## DOCUMENTATION:

### Technical Stack Documentation:

**Frontend Framework:**
- [SvelteKit Documentation](https://kit.svelte.dev/docs) - Full-stack framework
- [Svelte Documentation](https://svelte.dev/docs) - Component framework
- [Svelte Stores](https://svelte.dev/docs/svelte-store) - State management

**UI/UX Libraries:**
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) or [Skeleton UI](https://www.skeleton.dev/) - Svelte component libraries
- [Chart.js](https://www.chartjs.org/docs/) or [Apache ECharts](https://echarts.apache.org/) - Data visualization
- [Lightweight Charts](https://tradingview.github.io/lightweight-charts/) - Financial charts (TradingView library)

**Authentication:**
- [Privy Documentation](https://docs.privy.io/) - Embedded wallets and social login
- [Privy Svelte Integration](https://docs.privy.io/guide/frameworks/svelte) - Framework-specific guide
- [WalletConnect](https://docs.walletconnect.com/) - Web3 wallet connections
- [wagmi](https://wagmi.sh/) or [viem](https://viem.sh/) - Ethereum interactions

**Data Sources & APIs:**
- [CoinGecko API](https://www.coingecko.com/en/api/documentation) - Cryptocurrency data
- [CoinMarketCap API](https://coinmarketcap.com/api/documentation/v1/) - Market data
- [The Graph](https://thegraph.com/docs/) - On-chain data indexing
- [Dune Analytics API](https://docs.dune.com/api-reference/) - Blockchain analytics
- [DefiLlama API](https://defillama.com/docs/api) - DeFi protocol data
- [Glassnode API](https://docs.glassnode.com/) - On-chain metrics
- [CryptoQuant API](https://cryptoquant.com/api) - Exchange and on-chain data
- [Messari API](https://messari.io/api/docs) - Crypto research data

**Blockchain Integration:**
- [Ethers.js](https://docs.ethers.org/) or [Viem](https://viem.sh/) - Ethereum library
- [Web3.js](https://web3js.readthedocs.io/) - Alternative Web3 library
- [Alchemy](https://docs.alchemy.com/) or [Infura](https://docs.infura.io/) - RPC providers

**Backend & Database (if needed):**
- [Supabase](https://supabase.com/docs) - PostgreSQL database and auth
- [Firebase](https://firebase.google.com/docs) - Alternative backend
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) - Database option
- [Redis](https://redis.io/docs/) - Caching layer for API data

**Deployment:**
- [Vercel](https://vercel.com/docs) - Recommended for SvelteKit
- [Netlify](https://docs.netlify.com/) - Alternative deployment
- [Cloudflare Pages](https://developers.cloudflare.com/pages/) - CDN deployment option

### Design Resources:

- [Robinhood Design Principles](https://robinhood.com/us/en/about-us/our-story/) - Inspiration
- [Material Design Color System](https://m2.material.io/design/color/) - Blue palette generation
- [Figma Community](https://www.figma.com/community) - UI kit templates

### API Rate Limiting & Caching:

- Implement server-side caching to reduce API calls
- Use WebSocket connections for real-time price updates
- Cache frequently accessed data in Redis or similar
- Implement request debouncing on client side

### Security Documentation:

- [OWASP Web Security](https://owasp.org/www-project-web-security-testing-guide/) - Security best practices
- [Web3 Security Best Practices](https://consensys.github.io/smart-contract-best-practices/) - Blockchain security
- Privy security documentation for wallet management

## OTHER CONSIDERATIONS:

### Technical Considerations:

**1. Performance Optimization:**
- Implement lazy loading for charts and heavy components
- Use SvelteKit's server-side rendering (SSR) for initial page loads
- Optimize bundle size with code splitting
- Use CDN for static assets
- Implement progressive web app (PWA) features for mobile
- Cache API responses with appropriate TTL (time-to-live)
- Use WebSockets for real-time data updates instead of polling

**2. Data Management:**
- Centralized store for managing crypto data
- Implement optimistic UI updates
- Handle stale data gracefully with timestamps
- Background data refresh without disrupting user experience
- Offline support for cached data viewing

**3. Wallet Connection Best Practices:**
- Handle wallet disconnections gracefully
- Support multiple concurrent wallet connections
- Clear security warnings and permissions explanations
- Never request unnecessary permissions
- Implement proper error handling for failed transactions
- Support wallet switching without page reload

**4. Mobile Responsiveness:**
- Touch-optimized chart interactions
- Swipe gestures for navigation
- Bottom sheet modals for mobile
- Optimized tap targets (minimum 44x44px)
- Reduced data usage on mobile networks
- Progressive enhancement approach

### UI/UX Gotchas:

**1. Chart Libraries:**
- Lightweight Charts is excellent for financial data but requires custom styling
- Ensure charts are responsive and touch-friendly
- Implement proper loading states for chart data
- Handle empty states and error states in charts
- Consider performance with multiple charts on one page

**2. Color Scheme:**
- Use accessible blue shades (check WCAG contrast ratios)
- Implement consistent color system (primary, secondary, accent)
- Red for negative/loss, green for positive/gain (color-blind friendly alternatives)
- Dark mode requires inverted color logic for some elements

**3. Real-time Updates:**
- WebSocket connection management and reconnection logic
- Visual indicators when data is stale or connection lost
- Smooth number animations for price updates (use spring animations)
- Prevent layout shift when numbers change length

### Authentication Gotchas:

**1. Privy Integration:**
- Privy handles both Web2 and Web3 auth, reducing complexity
- Test embedded wallet creation flow thoroughly
- Handle users who connect multiple auth methods
- Implement proper logout and session cleanup
- Store user preferences server-side if using database

**2. Web3 Wallet Connections:**
- Not all users have wallets installed - provide clear onboarding
- Handle wallet network switching (wrong network errors)
- Support both EOA (externally owned accounts) and smart contract wallets
- Implement wallet connection persistence across sessions
- Clear messaging when wallet signature is required

### Data & API Considerations:

**1. Rate Limiting:**
- Free tiers of APIs are often heavily rate-limited
- Implement exponential backoff for failed requests
- Use multiple data sources as fallbacks
- Consider premium API tiers for production
- Server-side proxy for API calls to hide keys and add caching

**2. Data Accuracy:**
- Different APIs may return slightly different data
- Implement data validation and sanity checks
- Display data source and last update timestamp
- Handle missing data gracefully (some tokens may not have all metrics)

**3. Historical Data:**
- Historical data can be expensive or limited on free tiers
- Consider storing frequently accessed historical data
- Implement pagination for large datasets

### Legal & Compliance:

**1. Disclaimers:**
- "Not financial advice" disclaimers
- Risk warnings for crypto investments
- Data accuracy disclaimers (third-party sources)
- Terms of service and privacy policy

**2. Geographic Restrictions:**
- Some APIs have geographic restrictions
- Consider implementing region detection
- Comply with local regulations (especially for financial data)

**3. Data Licensing:**
- Review API terms of service for data usage rights
- Attribute data sources where required
- Understand commercial use limitations

### Development Workflow:

**1. Environment Variables:**
- Use `.env` files for API keys (never commit these)
- Separate keys for development and production
- Use SvelteKit's built-in env variable handling

**2. Testing:**
- Unit tests for data transformation logic
- Integration tests for API calls
- E2E tests for critical user flows (wallet connection, etc.)
- Test with various wallet providers
- Test offline functionality

**3. Common AI Assistant Pitfalls:**
- AI often suggests using Web3.js when ethers.js or viem is more modern
- Ensure proper TypeScript types for API responses
- Don't forget to handle BigInt for blockchain data
- Remember to import Svelte stores correctly (`$` syntax)
- SvelteKit routing uses file-based routing (not component-based)

### Scalability:

**1. Initial MVP Scope:**
- Start with core features: price tracking, basic charts, wallet connection
- Limit to top 100-200 tokens initially
- Implement one advanced feature (e.g., liquidation maps) as differentiator
- Basic portfolio tracking

**2. Phase 2 Features:**
- Expand token coverage
- Add more advanced analytics (funding rates, on-chain metrics)
- Social features (sharing watchlists, charts)
- Advanced alerts and notifications

**3. Future Enhancements:**
- Mobile native apps (React Native or Flutter)
- Trading integration (DEX aggregation)
- AI-powered insights and predictions
- Community features and social trading

### Design System:

**1. Blue Color Palette (Robinhood-inspired):**
- Primary: `#00C805` → Replace with blue: `#0066FF` or `#2563EB`
- Background: `#FFFFFF` (light), `#0A0E1A` (dark)
- Text: `#1A1A1A` (light), `#E5E5E5` (dark)
- Cards: `#F8F9FA` (light), `#1A1F2E` (dark)
- Success: `#00C805`, Error: `#FF6B6B`, Warning: `#FFAA00`

**2. Typography:**
- Primary font: Inter, SF Pro, or Roboto
- Monospace for prices: JetBrains Mono or Roboto Mono
- Font sizes: 12px, 14px, 16px, 20px, 24px, 32px

**3. Spacing System:**
- Use 4px base unit (4, 8, 12, 16, 24, 32, 48, 64)
- Consistent padding in cards and containers

### Monitoring & Analytics:

- Implement error tracking (Sentry)
- User analytics (Plausible or Fathom for privacy-focused)
- API performance monitoring
- Wallet connection success rates
- Most viewed assets and features

### Accessibility:

- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus indicators on interactive elements
- ARIA labels for complex components