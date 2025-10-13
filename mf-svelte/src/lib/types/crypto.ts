/**
 * Crypto Analytics Dashboard - TypeScript Types
 * Comprehensive type definitions for cryptocurrency data
 */

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  current_price: number;
  market_cap: number;
  market_cap_rank?: number;
  fully_diluted_valuation?: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d?: number;
  price_change_percentage_30d?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  circulating_supply: number;
  total_supply?: number;
  max_supply?: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
  sparkline_in_7d?: {
    price: number[];
  };
}

export interface ChartDataPoint {
  timestamp: number;
  price: number;
  volume?: number;
}

export interface OHLCVData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface HistoricalPriceData {
  prices: [number, number][]; // [timestamp, price]
  market_caps?: [number, number][];
  total_volumes?: [number, number][];
}

export interface MarketStats {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap: Record<string, number>;
  total_volume: Record<string, number>;
  market_cap_percentage: Record<string, number>;
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
}

export interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  };
}

export interface OnChainMetrics {
  address: string;
  chain: 'ethereum' | 'polygon' | 'arbitrum' | 'optimism';
  balances?: Array<{
    token: string;
    symbol: string;
    balance: string;
    value_usd?: number;
  }>;
  transfers?: Array<{
    hash: string;
    from: string;
    to: string;
    value: string;
    timestamp: number;
    token?: string;
  }>;
  metadata?: Record<string, any>;
}

export interface Portfolio {
  assets: PortfolioAsset[];
  totalValue: number;
  totalChange24h: number;
  totalChangePercentage24h: number;
  lastUpdated: string;
}

export interface PortfolioAsset {
  symbol: string;
  name: string;
  amount: number;
  currentPrice: number;
  value: number;
  change24h: number;
  changePercentage24h: number;
  allocation: number; // percentage of total portfolio
}

export interface PriceAlert {
  id: string;
  symbol: string;
  targetPrice: number;
  condition: 'above' | 'below';
  active: boolean;
  createdAt: string;
  triggeredAt?: string;
}

export interface Watchlist {
  id: string;
  name: string;
  symbols: string[];
  createdAt: string;
  updatedAt: string;
}

export type TimeRange = '1h' | '24h' | '7d' | '30d' | '90d' | '1y' | 'all';
export type ChartType = 'line' | 'candlestick' | 'area';
export type SortField = 'market_cap' | 'price' | 'volume' | 'change_24h' | 'change_7d';
export type SortOrder = 'asc' | 'desc';

export interface MarketFilters {
  search?: string;
  category?: string;
  sortBy: SortField;
  sortOrder: SortOrder;
  page: number;
  perPage: number;
}

export interface APIResponse<T> {
  data: T;
  status: number;
  timestamp: number;
  cached?: boolean;
}

export interface APIError {
  message: string;
  code: number;
  details?: any;
}
