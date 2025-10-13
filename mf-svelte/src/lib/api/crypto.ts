/**
 * Crypto Data API Client
 * Centralized API client for fetching cryptocurrency data
 * Uses CoinGecko as primary data source with fallbacks
 */

import type {
  CryptoAsset,
  HistoricalPriceData,
  TrendingCoin,
  MarketStats,
  APIResponse,
  APIError
} from '../types/crypto';

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';
const CACHE_DURATION = 60000; // 60 seconds

// Simple in-memory cache
const cache = new Map<string, { data: any; timestamp: number }>();

/**
 * Generic fetch with caching and error handling
 */
async function fetchWithCache<T>(
  url: string,
  cacheDuration: number = CACHE_DURATION
): Promise<APIResponse<T>> {
  // Check cache
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < cacheDuration) {
    return {
      data: cached.data,
      status: 200,
      timestamp: cached.timestamp,
      cached: true
    };
  }

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw {
        message: `API error: ${response.statusText}`,
        code: response.status
      } as APIError;
    }

    const data = await response.json();
    const timestamp = Date.now();

    // Cache the response
    cache.set(url, { data, timestamp });

    return {
      data,
      status: response.status,
      timestamp
    };
  } catch (error: any) {
    console.error('API fetch error:', error);
    throw {
      message: error.message || 'Failed to fetch data',
      code: error.code || 500,
      details: error
    } as APIError;
  }
}

/**
 * Fetch list of cryptocurrency assets with market data
 */
export async function fetchCryptoMarkets(
  currency: string = 'usd',
  perPage: number = 100,
  page: number = 1,
  order: string = 'market_cap_desc'
): Promise<CryptoAsset[]> {
  const url = `${COINGECKO_API_BASE}/coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=7d,30d`;
  
  const response = await fetchWithCache<CryptoAsset[]>(url);
  return response.data;
}

/**
 * Fetch detailed data for a specific cryptocurrency
 */
export async function fetchCryptoDetails(
  coinId: string,
  localization: boolean = false,
  tickers: boolean = false,
  market_data: boolean = true,
  community_data: boolean = false,
  developer_data: boolean = false
): Promise<any> {
  const url = `${COINGECKO_API_BASE}/coins/${coinId}?localization=${localization}&tickers=${tickers}&market_data=${market_data}&community_data=${community_data}&developer_data=${developer_data}`;
  
  const response = await fetchWithCache(url);
  return response.data;
}

/**
 * Fetch historical price data for a cryptocurrency
 */
export async function fetchHistoricalPrices(
  coinId: string,
  days: number | 'max' = 7,
  currency: string = 'usd',
  interval?: 'daily' | 'hourly'
): Promise<HistoricalPriceData> {
  let url = `${COINGECKO_API_BASE}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`;
  
  if (interval) {
    url += `&interval=${interval}`;
  }
  
  const response = await fetchWithCache<HistoricalPriceData>(url, 300000); // Cache for 5 minutes
  return response.data;
}

/**
 * Fetch OHLCV (candlestick) data
 */
export async function fetchOHLCVData(
  coinId: string,
  days: number | 'max' = 7
): Promise<[number, number, number, number, number][]> {
  const url = `${COINGECKO_API_BASE}/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`;
  
  const response = await fetchWithCache<[number, number, number, number, number][]>(url, 300000);
  return response.data;
}

/**
 * Fetch trending cryptocurrencies
 */
export async function fetchTrendingCoins(): Promise<TrendingCoin[]> {
  const url = `${COINGECKO_API_BASE}/search/trending`;
  
  const response = await fetchWithCache<{ coins: TrendingCoin[] }>(url, 300000);
  return response.data.coins;
}

/**
 * Fetch global market statistics
 */
export async function fetchGlobalMarketStats(): Promise<MarketStats> {
  const url = `${COINGECKO_API_BASE}/global`;
  
  const response = await fetchWithCache<{ data: MarketStats }>(url);
  return response.data.data;
}

/**
 * Search for cryptocurrencies by name or symbol
 */
export async function searchCrypto(query: string): Promise<any[]> {
  const url = `${COINGECKO_API_BASE}/search?query=${encodeURIComponent(query)}`;
  
  const response = await fetchWithCache<{ coins: any[] }>(url, 60000);
  return response.data.coins;
}

/**
 * Fetch current price for specific cryptocurrencies
 */
export async function fetchCryptoPrices(
  coinIds: string[],
  currencies: string[] = ['usd'],
  includeMarketCap: boolean = true,
  include24hrVol: boolean = true,
  include24hrChange: boolean = true
): Promise<Record<string, any>> {
  const ids = coinIds.join(',');
  const vs_currencies = currencies.join(',');
  const url = `${COINGECKO_API_BASE}/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&include_market_cap=${includeMarketCap}&include_24hr_vol=${include24hrVol}&include_24hr_change=${include24hrChange}`;
  
  const response = await fetchWithCache(url, 30000); // Cache for 30 seconds
  return response.data;
}

/**
 * Fetch categories/sectors
 */
export async function fetchCategories(): Promise<any[]> {
  const url = `${COINGECKO_API_BASE}/coins/categories`;
  
  const response = await fetchWithCache<any[]>(url, 600000); // Cache for 10 minutes
  return response.data;
}

/**
 * Clear cache (useful for force refresh)
 */
export function clearCache() {
  cache.clear();
}

/**
 * Get cache statistics
 */
export function getCacheStats() {
  return {
    size: cache.size,
    entries: Array.from(cache.keys())
  };
}
