/**
 * Crypto Market Data Stores
 * Reactive Svelte stores for managing cryptocurrency data
 */

import { writable, derived, readable } from 'svelte/store';
import type { CryptoAsset, MarketStats, TrendingCoin, Watchlist, Portfolio } from '../types/crypto';
import { 
  fetchCryptoMarkets, 
  fetchTrendingCoins, 
  fetchGlobalMarketStats,
  fetchCryptoPrices 
} from '../api/crypto';

// Market data store
export const marketData = writable<CryptoAsset[]>([]);
export const isLoadingMarketData = writable(false);
export const marketDataError = writable<string | null>(null);

// Global market stats
export const globalStats = writable<MarketStats | null>(null);

// Trending coins
export const trendingCoins = writable<TrendingCoin[]>([]);

// User watchlist
export const watchlist = writable<Watchlist>({
  id: 'default',
  name: 'My Watchlist',
  symbols: ['bitcoin', 'ethereum', 'solana', 'cardano'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});

// Portfolio store
export const portfolio = writable<Portfolio>({
  assets: [],
  totalValue: 0,
  totalChange24h: 0,
  totalChangePercentage24h: 0,
  lastUpdated: new Date().toISOString()
});

// Selected currency (for price display)
export const selectedCurrency = writable('usd');

// Search query
export const searchQuery = writable('');

// Derived store: Filter market data by search query
export const filteredMarketData = derived(
  [marketData, searchQuery],
  ([$marketData, $searchQuery]) => {
    if (!$searchQuery) return $marketData;
    
    const query = $searchQuery.toLowerCase();
    return $marketData.filter(asset => 
      asset.name.toLowerCase().includes(query) ||
      asset.symbol.toLowerCase().includes(query)
    );
  }
);

// Derived store: Top gainers (24h)
export const topGainers = derived(
  marketData,
  $marketData => {
    return [...$marketData]
      .filter(asset => asset.price_change_percentage_24h > 0)
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      .slice(0, 10);
  }
);

// Derived store: Top losers (24h)
export const topLosers = derived(
  marketData,
  $marketData => {
    return [...$marketData]
      .filter(asset => asset.price_change_percentage_24h < 0)
      .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
      .slice(0, 10);
  }
);

// Derived store: Watchlist assets
export const watchlistAssets = derived(
  [marketData, watchlist],
  ([$marketData, $watchlist]) => {
    return $marketData.filter(asset => 
      $watchlist.symbols.includes(asset.id)
    );
  }
);

/**
 * Load market data
 */
export async function loadMarketData(page: number = 1, perPage: number = 100) {
  isLoadingMarketData.set(true);
  marketDataError.set(null);
  
  try {
    const data = await fetchCryptoMarkets('usd', perPage, page);
    marketData.set(data);
  } catch (error: any) {
    marketDataError.set(error.message || 'Failed to load market data');
    console.error('Error loading market data:', error);
  } finally {
    isLoadingMarketData.set(false);
  }
}

/**
 * Load trending coins
 */
export async function loadTrendingCoins() {
  try {
    const data = await fetchTrendingCoins();
    trendingCoins.set(data);
  } catch (error) {
    console.error('Error loading trending coins:', error);
  }
}

/**
 * Load global market stats
 */
export async function loadGlobalStats() {
  try {
    const stats = await fetchGlobalMarketStats();
    globalStats.set(stats);
  } catch (error) {
    console.error('Error loading global stats:', error);
  }
}

/**
 * Add symbol to watchlist
 */
export function addToWatchlist(symbol: string) {
  watchlist.update(wl => {
    if (!wl.symbols.includes(symbol)) {
      return {
        ...wl,
        symbols: [...wl.symbols, symbol],
        updatedAt: new Date().toISOString()
      };
    }
    return wl;
  });
}

/**
 * Remove symbol from watchlist
 */
export function removeFromWatchlist(symbol: string) {
  watchlist.update(wl => ({
    ...wl,
    symbols: wl.symbols.filter(s => s !== symbol),
    updatedAt: new Date().toISOString()
  }));
}

/**
 * Start auto-refresh for market data
 */
export function startAutoRefresh(intervalMs: number = 60000) {
  const interval = setInterval(() => {
    loadMarketData();
    loadTrendingCoins();
    loadGlobalStats();
  }, intervalMs);

  return () => clearInterval(interval);
}

/**
 * Readable store for current timestamp (updates every second)
 */
export const currentTime = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(interval);
});
