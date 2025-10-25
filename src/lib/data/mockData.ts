// Enhanced SaaS mock data for MostlyFutures

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  billing: 'monthly' | 'yearly';
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'trading' | 'education' | 'analytics' | 'community';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'premium';
  joinDate: string;
  avatar?: string;
  stats: {
    totalTrades: number;
    profitLoss: number;
    winRate: number;
  };
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: string | number;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  readTime: number;
  featuredImage?: string;
}

// Mock Data

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for beginners learning to trade',
    price: 29,
    billing: 'monthly',
    features: [
      'Basic trading signals',
      'Educational content access',
      'Community forum access',
      'Email support',
      'Mobile app access'
    ],
    cta: 'Start Learning'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Advanced tools for serious traders',
    price: 99,
    billing: 'monthly',
    popular: true,
    features: [
      'Advanced trading signals',
      'Real-time market analysis',
      'Portfolio tracking',
      'Priority support',
      'Advanced charting tools',
      'Risk management tools',
      'Custom alerts'
    ],
    cta: 'Go Pro'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete solution for institutions',
    price: 299,
    billing: 'monthly',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solutions',
      'Advanced API access',
      'Team collaboration tools',
      'Compliance reporting',
      'Custom training sessions'
    ],
    cta: 'Contact Sales'
  }
];

export const features: Feature[] = [
  {
    id: 'signals',
    title: 'Smart Trading Signals',
    description: 'AI-powered signals that analyze market trends and provide actionable trading insights.',
    icon: 'trending-up',
    category: 'trading'
  },
  {
    id: 'education',
    title: 'Comprehensive Education',
    description: 'Learn from industry experts with our structured courses on crypto, forex, and futures trading.',
    icon: 'book-open',
    category: 'education'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Analytics',
    description: 'Track your performance with detailed analytics and risk management tools.',
    icon: 'pie-chart',
    category: 'analytics'
  },
  {
    id: 'community',
    title: 'Trading Community',
    description: 'Connect with fellow traders, share strategies, and learn from experienced professionals.',
    icon: 'users',
    category: 'community'
  },
  {
    id: 'realtime',
    title: 'Real-time Data',
    description: 'Access live market data, news, and analysis to make informed trading decisions.',
    icon: 'activity',
    category: 'analytics'
  },
  {
    id: 'mobile',
    title: 'Mobile Trading',
    description: 'Trade on the go with our fully-featured mobile application for iOS and Android.',
    icon: 'smartphone',
    category: 'trading'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Quantitative Analyst',
    company: 'Goldman Sachs',
    content: 'MostlyFutures transformed my trading approach. The educational content is top-notch and the community is incredibly supportive.',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Independent Trader',
    company: 'Self-Employed',
    content: 'The signal accuracy is impressive. I\'ve seen a 40% improvement in my trading performance since joining.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Thompson',
    role: 'Portfolio Manager',
    company: 'Blackstone',
    content: 'The risk management tools and analytics have been game-changing for our institutional strategies.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Crypto Trader',
    company: 'Freelance',
    content: 'Started as a complete beginner. Now I\'m consistently profitable thanks to their structured learning path.',
    rating: 4
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'premium',
    joinDate: '2024-01-15',
    stats: {
      totalTrades: 142,
      profitLoss: 12500,
      winRate: 68.5
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    joinDate: '2024-02-20',
    stats: {
      totalTrades: 89,
      profitLoss: 3200,
      winRate: 72.1
    }
  },
  {
    id: '3',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    role: 'admin',
    joinDate: '2023-12-01',
    stats: {
      totalTrades: 256,
      profitLoss: 28900,
      winRate: 75.3
    }
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'total-users',
    label: 'Total Users',
    value: '12,450',
    change: 12.5,
    changeType: 'positive',
    icon: 'users'
  },
  {
    id: 'revenue',
    label: 'Monthly Revenue',
    value: '$45,230',
    change: 8.2,
    changeType: 'positive',
    icon: 'dollar-sign'
  },
  {
    id: 'active-traders',
    label: 'Active Traders',
    value: '8,920',
    change: -2.1,
    changeType: 'negative',
    icon: 'trending-up'
  },
  {
    id: 'conversion-rate',
    label: 'Conversion Rate',
    value: '3.2%',
    change: 0.5,
    changeType: 'positive',
    icon: 'target'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Cryptocurrency Trading',
    excerpt: 'Explore emerging trends and technologies shaping the crypto trading landscape.',
    content: 'Cryptocurrency trading continues to evolve at a rapid pace...',
    author: 'Sarah Chen',
    publishDate: '2024-10-01',
    category: 'Cryptocurrency',
    readTime: 8
  },
  {
    id: '2',
    title: 'Risk Management Strategies for Futures Trading',
    excerpt: 'Learn essential risk management techniques to protect your capital.',
    content: 'Effective risk management is crucial for long-term success...',
    author: 'Marcus Rodriguez',
    publishDate: '2024-09-28',
    category: 'Futures',
    readTime: 12
  },
  {
    id: '3',
    title: 'Technical Analysis Fundamentals',
    excerpt: 'Master the basics of chart reading and technical indicators.',
    content: 'Technical analysis forms the foundation of many trading strategies...',
    author: 'Emily Thompson',
    publishDate: '2024-09-25',
    category: 'Education',
    readTime: 15
  }
];

// Navigation and route data (enhanced from existing)
export interface NavLink {
  href: string;
  label: string;
  description?: string;
}

export interface RouteInfo {
  path: string;
  title: string;
  description: string;
  content?: string;
}

export const navLinks: NavLink[] = [
  {
    href: '/tools',
    label: 'Tools',
    description: 'Trading and DeFi tools'
  },
  {
    href: '/data',
    label: 'Data',
    description: 'Market data and analytics'
  },
  {
    href: '/features',
    label: 'Features',
    description: 'Discover our powerful trading tools'
  },
  {
    href: '/dashboard',
    label: 'Home',
    description: 'Your trading command center'
  },
  {
    href: '/peers',
    label: 'Peers',
    description: 'Connect with traders'
  },
  {
    href: '/markets',
    label: 'Market',
    description: 'Live crypto prices'
  }
];

export const routes: RouteInfo[] = [
  {
    path: '/',
    title: 'MostlyFutures - Advanced Trading Platform',
    description: 'Professional trading tools, education, and community for crypto, forex, and futures traders.',
  },
  {
    path: '/features',
    title: 'Features',
    description: 'Powerful trading tools and analytics',
  },
  {
    path: '/pricing',
    title: 'Pricing',
    description: 'Choose the perfect plan for your trading needs',
  },
  {
    path: '/education',
    title: 'Trading Education',
    description: 'Learn from industry experts and master the markets',
  },
  {
    path: '/community',
    title: 'Trading Community',
    description: 'Connect, share, and learn with fellow traders',
  },
  {
    path: '/blog',
    title: 'Trading Blog',
    description: 'Latest insights, analysis, and market trends',
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    description: 'Your trading command center',
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with our team',
  },
];

// Trading-specific data from existing structure
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
  {
    name: 'Cryptocurrency',
    description: 'Digital currencies that operate independently of traditional banking systems.',
    pros: [
      '24/7 trading availability',
      'High volatility creates profit opportunities',
      'Decentralized and global access',
      'Lower fees than traditional markets'
    ],
    cons: [
      'Extreme volatility can lead to significant losses',
      'Regulatory uncertainty in many jurisdictions',
      'Technical complexity for beginners'
    ],
  }
];

// Additional data for community page
export const communityMembers = [
  {
    id: 1,
    name: 'Alex Chen',
    avatar: '/avatars/alex.jpg',
    joinDate: '2024-01-15',
    posts: 156,
    reputation: 892,
    badges: ['Top Contributor', 'Mentor']
  },
  {
    id: 2,
    name: 'Sarah Williams',
    avatar: '/avatars/sarah.jpg',
    joinDate: '2024-02-20',
    posts: 234,
    reputation: 1245,
    badges: ['Expert', 'Community Leader']
  }
];

export const forumPosts = [
  {
    id: 1,
    title: 'Best risk management strategies for beginners',
    author: 'Alex Chen',
    category: 'Risk Management',
    replies: 23,
    views: 1450,
    lastActivity: '2024-03-10T14:30:00Z',
    tags: ['risk-management', 'beginners', 'strategies']
  },
  {
    id: 2,
    title: 'Technical analysis: How to read RSI correctly',
    author: 'Sarah Williams',
    category: 'Technical Analysis',
    replies: 45,
    views: 2100,
    lastActivity: '2024-03-12T09:15:00Z',
    tags: ['technical-analysis', 'RSI', 'indicators']
  }
];

export const events = [
  {
    id: 1,
    title: 'Crypto Trading Workshop',
    date: '2024-04-15',
    time: '18:00 UTC',
    type: 'workshop',
    attendees: 45,
    maxAttendees: 100,
    description: 'Learn crypto trading strategies from experts'
  },
  {
    id: 2,
    title: 'Community AMA with Professional Traders',
    date: '2024-04-20',
    time: '20:00 UTC',
    type: 'ama',
    attendees: 120,
    maxAttendees: 200,
    description: 'Ask me anything session with experienced traders'
  }
];

// Additional data for education page
export const courses = [
  {
    id: 1,
    title: 'Cryptocurrency Fundamentals',
    description: 'Learn the basics of cryptocurrency and blockchain technology',
    duration: '6 weeks',
    modules: 12,
    students: 15420,
    rating: 4.8,
    instructor: 'Dr. Michael Block',
    level: 'Beginner',
    price: 99,
    image: '/courses/crypto-fundamentals.jpg'
  },
  {
    id: 2,
    title: 'Advanced Trading Strategies',
    description: 'Master advanced trading techniques and risk management',
    duration: '8 weeks',
    modules: 16,
    students: 8230,
    rating: 4.9,
    instructor: 'Sarah Johnson',
    level: 'Advanced',
    price: 299,
    image: '/courses/advanced-trading.jpg'
  }
];

// Add types for RWA and DEX data
export interface RwaAsset {
  id: string;
  name: string;
  symbol: string;
  class: string;
  issuer: string;
  value: number;
  change24h: number;
  apy: number;
}

export interface DexPool {
  id: string;
  token0: string;
  token1: string;
  tvl: number;
  apr: number;
  volume24h: number;
  fees24h: number;
}

// Sample data for RWA assets and DEX pools
export const rwaAssets: RwaAsset[] = [
  {
    id: '1',
    name: 'US Treasury Bond',
    symbol: 'USTB',
    class: 'Government',
    issuer: 'US Treasury',
    value: 1000000,
    change24h: 0.1,
    apy: 5.2
  }
];

export const dexPools: DexPool[] = [
  {
    id: '1',
    token0: 'ETH',
    token1: 'USDC',
    tvl: 50000000,
    apr: 12.5,
    volume24h: 2500000,
    fees24h: 7500
  }
];