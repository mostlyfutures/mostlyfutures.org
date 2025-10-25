// import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchCryptoDetails, fetchHistoricalPrices, fetchOHLCVData } from '$lib/api/crypto';
import type { CryptoAsset } from '$lib/types/crypto';

export const load = async ({ params }) => {
  try {
    const { symbol } = params;

    // Fetch asset details
    const assetDetails = await fetchCryptoDetails(symbol);
    
    // Fetch historical price data
    const historicalData = await fetchHistoricalPrices(symbol, 30);
    
    // Fetch OHLCV data for candlestick chart
    const ohlcvData = await fetchOHLCVData(symbol, 7);

    return {
      asset: assetDetails,
      historicalData,
      ohlcvData,
      symbol: symbol.toUpperCase()
    };
  } catch (err) {
    console.error('Failed to load asset data:', err);
    throw error(404, {
      message: 'Asset not found'
    });
  }
};
