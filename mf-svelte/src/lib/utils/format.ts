/**
 * Formatting utilities for crypto dashboard
 */

/**
 * Format number as currency
 */
export function formatCurrency(
  value: number,
  decimals: number = 2,
  currency: string = 'USD'
): string {
  if (value === undefined || value === null) return '$0.00';
  
  // For very small values, show more decimals
  if (value > 0 && value < 0.01) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 4,
      maximumFractionDigits: 8
    }).format(value);
  }
  
  // For large values, show compact notation
  if (Math.abs(value) >= 1000000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      notation: 'compact',
      compactDisplay: 'short'
    }).format(value);
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

/**
 * Format number as percentage
 */
export function formatPercent(value: number, decimals: number = 2): string {
  if (value === undefined || value === null) return '0.00%';
  
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value / 100);
}

/**
 * Format large numbers with suffix (K, M, B, T)
 */
export function formatNumber(value: number, decimals: number = 2): string {
  if (value === undefined || value === null) return '0';
  
  const abs = Math.abs(value);
  
  if (abs >= 1e12) {
    return (value / 1e12).toFixed(decimals) + 'T';
  } else if (abs >= 1e9) {
    return (value / 1e9).toFixed(decimals) + 'B';
  } else if (abs >= 1e6) {
    return (value / 1e6).toFixed(decimals) + 'M';
  } else if (abs >= 1e3) {
    return (value / 1e3).toFixed(decimals) + 'K';
  }
  
  return value.toFixed(decimals);
}

/**
 * Format date relative to now (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: string | Date): string {
  const now = new Date();
  const then = new Date(date);
  const diffMs = now.getTime() - then.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSeconds < 60) {
    return 'just now';
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else {
    return then.toLocaleDateString();
  }
}

/**
 * Format date as human-readable string
 */
export function formatDate(date: string | Date, includeTime: boolean = false): string {
  const d = new Date(date);
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  
  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }
  
  return d.toLocaleDateString('en-US', options);
}

/**
 * Truncate wallet address (0x1234...5678)
 */
export function truncateAddress(address: string, startChars: number = 6, endChars: number = 4): string {
  if (!address || address.length <= startChars + endChars) {
    return address;
  }
  
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

/**
 * Format token amount with proper decimals
 */
export function formatTokenAmount(amount: number | string, decimals: number = 18, displayDecimals: number = 4): string {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount;
  const adjusted = value / Math.pow(10, decimals);
  
  return adjusted.toFixed(displayDecimals);
}

/**
 * Get color class based on positive/negative value
 */
export function getChangeColorClass(value: number): string {
  if (value > 0) return 'text-crypto-green';
  if (value < 0) return 'text-crypto-red';
  return 'text-gray-500';
}

/**
 * Get background color class based on positive/negative value
 */
export function getChangeBgClass(value: number): string {
  if (value > 0) return 'bg-crypto-green/10';
  if (value < 0) return 'bg-crypto-red/10';
  return 'bg-gray-100';
}
