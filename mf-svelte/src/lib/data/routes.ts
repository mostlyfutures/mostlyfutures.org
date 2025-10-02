// Route information and content data for MostlyFutures
export interface RouteInfo {
  path: string;
  title: string;
  description: string;
  content?: string;
}

export const routes: RouteInfo[] = [
  {
    path: '/',
    title: 'MostlyFutures',
    description: 'A Standard Appchain - Explore the world of trading and cryptocurrency',
  },
  {
    path: '/landing',
    title: 'Landing',
    description: 'Start your trading journey',
  },
  {
    path: '/crypto-intro',
    title: 'How to Buy Crypto',
    description: 'Learn the basics of purchasing cryptocurrency',
    content: `Buying crypto is simpler than most people think. Instead of complex exchanges or technical knowledge, most people just need a user-friendly platform to get started. Cryptocurrency exchanges work similarly to stock trading apps - you deposit money, select the crypto you want to buy, and confirm your purchase. The most important thing for beginners is choosing a reputable exchange with strong security, easy-to-use interface, and available customer support. Once you've made your first purchase, you can either hold your crypto for long-term investment or actively trade it as prices fluctuate. Many exchanges also offer educational resources to help you understand the technology behind different cryptocurrencies and make more informed decisions about your investments.`,
  },
  {
    path: '/trading-intro',
    title: 'What is Trading?',
    description: 'Learn about trading and financial markets',
    content: `The word "Trading" is an umbrella term for the exchange of goods at a point in time. Trading uses these markets where you will be capitalizing off of the facilitation and the exchange of goods. The same way someone is willing to buy a fruit at a price is the same way a person is willing to buy a stock or commodity like a car.`,
  },
  {
    path: '/nfts',
    title: 'NFT Gallery',
    description: 'Explore our NFT collection',
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with us',
  },
];

export const navLinks = [
  { href: '/crypto-intro', label: 'Crypto Introduction' },
  { href: '/trading-intro', label: 'Trading' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/contact', label: 'Contact' },
];

export const tradingAssets = [
  {
    name: 'Stocks',
    description: 'Stocks represent ownership of a company. When you purchase shares, you own a piece of that business.',
    pros: [
      'Works for both short-term and long-term strategies',
      'Regulated and transparent, rarely any shady things',
    ],
    cons: [
      'Gains are slower but risk is low',
      'Need capital to invest meaningfully',
    ],
  },
  {
    name: 'Futures',
    description: 'Futures allow you to trade with leverage, speeding up potential profits (and losses).',
    pros: [
      'High leverage allows for massive gains from small price movements',
      'More liquid than holding underlying assets',
      'Make money faster',
    ],
    cons: [
      'High leverage also means magnified losses',
      'Requires much better risk management',
    ],
  },
  {
    name: 'Forex (Foreign Exchange)',
    description: 'The global exchange of currencies. The largest financial market with $6T+ daily volume.',
    pros: [
      'Low barrier to entry - trade with $10',
      'Practice for free with MetaTrader',
      'High liquidity and tight spreads',
    ],
    cons: [
      'Extreme leverage can liquidate accounts fast',
      'Requires strong risk management',
    ],
  },
];
