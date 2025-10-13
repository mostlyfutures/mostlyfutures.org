# Quick Start Guide - Crypto Analytics Dashboard

## 🚀 Getting Started

### 1. Navigate to Project Directory
```bash
cd /Users/gdove/Desktop/codebases/mostlyfutures.org/mf-svelte
```

### 2. Install Dependencies (if needed)
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:5173
```

## 📍 Pages to Visit

### Homepage
- URL: `http://localhost:5173/`
- Shows: Hero section with "Explore Markets →" button
- Features: Clean Robinhood-style landing page

### Markets Dashboard (NEW!)
- URL: `http://localhost:5173/markets`
- Shows: Live crypto prices, market data, trending coins
- Features:
  - Search cryptocurrency by name/symbol
  - Sort by price, market cap, volume, 24h change
  - View as table or grid
  - Filter by: All Crypto, Top Gainers, Top Losers
  - Auto-refreshes every 60 seconds

### Click Through Flow
1. Visit homepage → Click "Explore Markets →" button
2. Lands on Markets page with live crypto data
3. Search for "bitcoin" or "ethereum"
4. Click asset name to navigate to detail page (coming soon)
5. Toggle between Table/Grid view
6. Switch tabs: All Crypto → Top Gainers → Top Losers

## 🎨 What You'll See

### Color Scheme (Robinhood-Inspired)
- **Primary Blue**: #007AFF (Robinhood blue)
- **Positive (Green)**: #00C805
- **Negative (Red)**: #FF6B6B
- **Background**: Clean white/dark mode

### UI Components
- **Price Cards**: Show crypto name, price, 24h %, market cap, volume
- **Market Table**: Sortable table with 7-day sparkline charts
- **Search Bar**: Instant filtering as you type
- **Tabs**: Switch between all coins, gainers, losers

## 🔧 Tech Stack Used

### Frontend
- **SvelteKit** - Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Svelte Stores** - State management

### Data Source
- **CoinGecko API** (Free tier)
  - Rate limit: 50 calls/minute
  - No API key required
  - Caching: 60 seconds

## 📊 Features Implemented

### ✅ Data Fetching
- Real-time crypto prices (top 100 coins)
- Market cap, volume, 24h change
- 7-day price sparklines
- Trending coins
- Global market stats

### ✅ UI/UX
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Smooth animations
- Loading states
- Error handling with retry
- Search with live filtering
- Sortable table columns

### ✅ Performance
- In-memory caching (60s)
- Auto-refresh (background)
- Lazy loading
- Optimized bundle size

## 🧪 Testing Checklist

### Test These Features:
- [ ] Homepage loads with hero section
- [ ] "Explore Markets →" button navigates to /markets
- [ ] Markets page shows crypto data
- [ ] Search bar filters results
- [ ] Sorting columns works (click headers)
- [ ] Tab switching (All/Gainers/Losers)
- [ ] View toggle (Table/Grid)
- [ ] Responsive on mobile (resize browser)
- [ ] Loading spinner appears on initial load
- [ ] Data auto-refreshes after 60 seconds

### Search Test Cases:
```
Search: "bitcoin" → Shows Bitcoin (BTC)
Search: "eth" → Shows Ethereum (ETH)
Search: "sol" → Shows Solana (SOL)
Search: "xyz" → Shows "No assets found" message
```

### Sorting Test:
1. Click "Price" column → Sorts by price (desc)
2. Click again → Reverses order (asc)
3. Click "24h %" → Sorts by daily change
4. Click "Market Cap" → Sorts by market cap

## 🐛 Troubleshooting

### API Rate Limiting
**Problem:** Getting 429 errors or no data
**Solution:** Wait 1 minute, then refresh. CoinGecko free tier limits to 50 calls/min.

### No Data Showing
**Problem:** Markets page is empty
**Solution:** 
1. Check browser console for errors
2. Verify internet connection
3. Try clicking "Try Again" button
4. Clear cache and refresh

### Build Errors
**Problem:** TypeScript errors during build
**Solution:**
```bash
npm run check
```

### Port Already in Use
**Problem:** Port 5173 is busy
**Solution:**
```bash
# Kill the process
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

## 📁 File Locations

### Core Files Created:
```
src/lib/types/crypto.ts              # TypeScript types
src/lib/api/crypto.ts                # API client
src/lib/stores/market.ts             # Svelte stores
src/lib/utils/format.ts              # Formatting utilities
src/lib/components/crypto/PriceCard.svelte
src/lib/components/crypto/MarketTable.svelte
src/routes/markets/+page.svelte      # Markets page
tailwind.config.js                   # Updated theme
```

## 🎯 Next Development Steps

### Immediate (Next Hour):
1. Create asset detail page: `src/routes/markets/[symbol]/+page.svelte`
2. Add price chart component using Chart.js
3. Test on mobile device

### Short-term (Next Day):
4. Add Privy authentication
5. Implement portfolio tracking
6. Add price alerts

### Medium-term (Next Week):
7. Advanced analytics (on-chain data)
8. News feed integration
9. Social sentiment tracking
10. Heatmaps and correlations

## 💡 Development Tips

### Hot Reload
Changes to `.svelte`, `.ts`, and `.css` files trigger automatic browser reload.

### Debugging
Open browser DevTools:
- **Console** for errors
- **Network** tab to see API calls
- **Components** tab (with Svelte DevTools extension)

### API Monitoring
Watch API calls in console:
```javascript
// In browser console
performance.getEntriesByType('resource')
  .filter(r => r.name.includes('coingecko'))
```

### Store Debugging
```javascript
// In browser console (if stores are exposed)
import { get } from 'svelte/store';
import { marketData } from '$lib/stores/market';
console.log(get(marketData));
```

## 📚 Resources

- **SvelteKit Docs**: https://kit.svelte.dev
- **CoinGecko API**: https://docs.coingecko.com
- **Tailwind CSS**: https://tailwindcss.com
- **Svelte Store Tutorial**: https://svelte.dev/tutorial/writable-stores

## ✨ Demo Flow

### Perfect Demo Sequence:
1. **Start**: Homepage with hero
2. **Navigate**: Click "Explore Markets →"
3. **Wow**: See live crypto prices load
4. **Search**: Type "bitcoin" → instant results
5. **Sort**: Click columns to reorder
6. **Filter**: Switch to "Top Gainers"
7. **Toggle**: Change to Grid view
8. **Mobile**: Resize browser to show responsive design

### Talking Points:
- "Real-time data from CoinGecko API"
- "Robinhood-inspired clean design"
- "Fully responsive (mobile-first)"
- "Auto-refreshing every 60 seconds"
- "Built with SvelteKit & TypeScript"
- "Advanced analytics coming soon"

## 🎉 Success!

You now have a working crypto analytics dashboard! Navigate to `/markets` to see it live.

---

**Questions?** Check the full implementation details in `/CRYPTO_DASHBOARD_README.md`
