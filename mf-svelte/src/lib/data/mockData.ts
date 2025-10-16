// Enhanced SaaS mock data for Mostlyfutures

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
  tags?: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  modules: number;
  students: number;
  rating: number;
  instructor: string;
  thumbnail?: string;
  price?: number;
  category: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
  content: string;
  order: number;
}

export interface CommunityMember {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  role: 'admin' | 'moderator' | 'expert' | 'member';
  joinDate: string;
  posts: number;
  reputation: number;
  badges: string[];
  bio?: string;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: CommunityMember;
  category: string;
  replies: number;
  views: number;
  likes: number;
  createdAt: string;
  lastActivity: string;
  tags: string[];
  pinned?: boolean;
  solved?: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'webinar' | 'workshop' | 'meetup' | 'conference';
  date: string;
  duration: string;
  speaker: string;
  attendees: number;
  maxAttendees?: number;
  location: 'online' | string;
  registrationUrl?: string;
}

// Velo/RWA-inspired data shapes
export type DexChain = 'Arbitrum' | 'Ethereum' | 'Polygon';
export interface DexPool {
  id: string;
  pool: string; // e.g., ETH/USDC
  chain: DexChain;
  tvl: number; // USD
  volume24h: number; // USD
  volume7d: number; // USD
  volume30d: number; // USD
  fees24h: number; // USD
  fees7d: number; // USD
  fees30d: number; // USD
  apr7d: number; // percentage (e.g., 12.3 for 12.3%)
  apr30d: number; // percentage
}

export type RwaClass = 'Treasury' | 'Real Estate' | 'Private Credit' | 'Commodities';
export type RwaChain = 'Ethereum' | 'Polygon' | 'Solana';
export interface RwaAsset {
  id: string;
  asset: string; // e.g., "USTB - Short-term Treasuries"
  issuer: string; // e.g., Ondo, Matrixdock, Franklin
  class: RwaClass;
  chain: RwaChain;
  yieldPct: number; // e.g., 5.2 -> 5.2%
  maturity?: string; // e.g., "30D", "T+1", ISO date, or descriptive
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
    content: 'Mostlyfutures transformed my trading approach. The educational content is top-notch and the community is incredibly supportive.',
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
    title: 'The Future of Cryptocurrency Trading in 2025',
    excerpt: 'Explore emerging trends and technologies shaping the crypto trading landscape, from DeFi innovations to institutional adoption.',
    content: 'Cryptocurrency trading continues to evolve at a rapid pace. In 2025, we\'re seeing unprecedented institutional adoption, advanced DeFi protocols, and regulatory clarity that\'s transforming the market...',
    author: 'Sarah Chen',
    publishDate: '2024-10-01',
    category: 'Cryptocurrency',
    readTime: 8,
    tags: ['crypto', 'DeFi', 'trends', 'institutional']
  },
  {
    id: '2',
    title: 'Risk Management Strategies for Futures Trading',
    excerpt: 'Learn essential risk management techniques to protect your capital and maximize long-term profitability in futures markets.',
    content: 'Effective risk management is crucial for long-term success in futures trading. This comprehensive guide covers position sizing, stop-loss strategies, and portfolio diversification...',
    author: 'Marcus Rodriguez',
    publishDate: '2024-09-28',
    category: 'Futures',
    readTime: 12,
    tags: ['risk management', 'futures', 'trading strategy']
  },
  {
    id: '3',
    title: 'Technical Analysis Fundamentals: A Complete Guide',
    excerpt: 'Master the basics of chart reading, technical indicators, and pattern recognition to improve your trading decisions.',
    content: 'Technical analysis forms the foundation of many trading strategies. Learn how to read candlestick patterns, use moving averages, RSI, MACD, and other essential indicators...',
    author: 'Emily Thompson',
    publishDate: '2024-09-25',
    category: 'Education',
    readTime: 15,
    tags: ['technical analysis', 'indicators', 'charts', 'beginner']
  },
  {
    id: '4',
    title: 'How to Build a Profitable Forex Trading Strategy',
    excerpt: 'Step-by-step guide to creating, testing, and optimizing a winning forex trading strategy that suits your style and risk tolerance.',
    content: 'Building a profitable forex strategy requires understanding market dynamics, developing a clear plan, and rigorous backtesting. This guide walks you through the entire process...',
    author: 'David Kim',
    publishDate: '2024-09-20',
    category: 'Forex',
    readTime: 10,
    tags: ['forex', 'strategy', 'backtesting', 'intermediate']
  },
  {
    id: '5',
    title: 'Understanding Market Psychology and Trading Emotions',
    excerpt: 'Discover how psychology affects trading decisions and learn proven techniques to control emotions and trade more rationally.',
    content: 'Market psychology plays a crucial role in trading success. Fear and greed drive market movements, and understanding these emotions is key to becoming a consistent trader...',
    author: 'Lisa Wang',
    publishDate: '2024-09-15',
    category: 'Psychology',
    readTime: 9,
    tags: ['psychology', 'emotions', 'discipline', 'mindset']
  },
  {
    id: '6',
    title: 'Top 10 Trading Mistakes Beginners Make (And How to Avoid Them)',
    excerpt: 'Learn from common mistakes that new traders make and discover practical strategies to avoid these costly errors.',
    content: 'Every trader makes mistakes, but learning from others can save you time and money. We\'ve compiled the most common pitfalls beginners face and how to overcome them...',
    author: 'Michael Brown',
    publishDate: '2024-09-10',
    category: 'Education',
    readTime: 7,
    tags: ['beginner', 'mistakes', 'tips', 'learning']
  }
];

// Education Mock Data
export const courses: Course[] = [
  {
    id: 'crypto-101',
    title: 'Cryptocurrency Trading for Beginners',
    description: 'Learn the fundamentals of cryptocurrency trading, from setting up your first wallet to executing your first trades safely and confidently.',
    level: 'beginner',
    duration: '6 weeks',
    modules: 12,
    students: 15420,
    rating: 4.8,
    instructor: 'Sarah Chen',
    category: 'Cryptocurrency',
    price: 0
  },
  {
    id: 'technical-analysis',
    title: 'Advanced Technical Analysis Masterclass',
    description: 'Master advanced charting techniques, indicators, and pattern recognition to identify high-probability trading opportunities.',
    level: 'intermediate',
    duration: '8 weeks',
    modules: 16,
    students: 8950,
    rating: 4.9,
    instructor: 'Marcus Rodriguez',
    category: 'Technical Analysis',
    price: 199
  },
  {
    id: 'forex-fundamentals',
    title: 'Forex Trading: From Zero to Profitable',
    description: 'Complete forex trading course covering currency pairs, economic indicators, risk management, and proven trading strategies.',
    level: 'beginner',
    duration: '10 weeks',
    modules: 20,
    students: 12350,
    rating: 4.7,
    instructor: 'Emily Thompson',
    category: 'Forex',
    price: 149
  },
  {
    id: 'algorithmic-trading',
    title: 'Algorithmic Trading & Automation',
    description: 'Build and deploy automated trading systems using Python. Learn backtesting, optimization, and live trading deployment.',
    level: 'advanced',
    duration: '12 weeks',
    modules: 24,
    students: 4230,
    rating: 4.9,
    instructor: 'David Kim',
    category: 'Programming',
    price: 299
  },
  {
    id: 'futures-mastery',
    title: 'Futures Trading Mastery',
    description: 'Deep dive into futures markets, leverage management, contract specifications, and institutional trading strategies.',
    level: 'advanced',
    duration: '8 weeks',
    modules: 18,
    students: 5670,
    rating: 4.8,
    instructor: 'Lisa Wang',
    category: 'Futures',
    price: 249
  },
  {
    id: 'risk-management',
    title: 'Professional Risk Management',
    description: 'Learn portfolio theory, position sizing, risk-reward optimization, and capital preservation strategies used by professional traders.',
    level: 'intermediate',
    duration: '6 weeks',
    modules: 14,
    students: 9840,
    rating: 4.9,
    instructor: 'Michael Brown',
    category: 'Risk Management',
    price: 179
  },
  {
    id: 'day-trading',
    title: 'Day Trading Strategies That Work',
    description: 'Proven intraday trading strategies, scalping techniques, and market timing methods for consistent daily profits.',
    level: 'intermediate',
    duration: '7 weeks',
    modules: 15,
    students: 11200,
    rating: 4.7,
    instructor: 'Alex Martinez',
    category: 'Day Trading',
    price: 189
  },
  {
    id: 'options-trading',
    title: 'Options Trading: Complete Guide',
    description: 'Master options strategies from covered calls to advanced spreads. Learn Greeks, volatility trading, and income generation.',
    level: 'advanced',
    duration: '10 weeks',
    modules: 22,
    students: 6780,
    rating: 4.8,
    instructor: 'Jennifer Lee',
    category: 'Options',
    price: 279
  }
];

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    courseId: 'crypto-101',
    title: 'Introduction to Cryptocurrency',
    description: 'Understanding blockchain technology, Bitcoin, Ethereum, and the crypto ecosystem.',
    duration: '45 minutes',
    content: 'Welcome to the world of cryptocurrency trading...',
    order: 1
  },
  {
    id: 'lesson-2',
    courseId: 'crypto-101',
    title: 'Setting Up Your First Wallet',
    description: 'Step-by-step guide to creating and securing your cryptocurrency wallet.',
    duration: '30 minutes',
    content: 'Security is paramount in cryptocurrency...',
    order: 2
  },
  {
    id: 'lesson-3',
    courseId: 'crypto-101',
    title: 'Understanding Exchanges',
    description: 'How to choose, register, and navigate cryptocurrency exchanges safely.',
    duration: '40 minutes',
    content: 'Cryptocurrency exchanges are the gateways...',
    order: 3
  }
];

// Community Mock Data
export const communityMembers: CommunityMember[] = [
  {
    id: 'member-1',
    name: 'Sarah Chen',
    username: '@traderpro',
    role: 'expert',
    joinDate: '2023-01-15',
    posts: 1247,
    reputation: 9850,
    badges: ['Top Contributor', 'Verified Trader', 'Mentor', '1000+ Posts'],
    bio: 'Professional trader with 10+ years of experience in crypto and forex markets. Love helping new traders succeed!'
  },
  {
    id: 'member-2',
    name: 'Marcus Rodriguez',
    username: '@cryptoking',
    role: 'moderator',
    joinDate: '2023-03-20',
    posts: 892,
    reputation: 7230,
    badges: ['Moderator', 'Expert Analyst', '500+ Posts'],
    bio: 'Cryptocurrency enthusiast and technical analysis expert. Trading full-time since 2018.'
  },
  {
    id: 'member-3',
    name: 'Emily Thompson',
    username: '@forexqueen',
    role: 'expert',
    joinDate: '2023-02-10',
    posts: 1056,
    reputation: 8920,
    badges: ['Forex Expert', 'Top Contributor', 'Educator'],
    bio: 'Forex trader and educator. Specialized in swing trading and macro analysis.'
  },
  {
    id: 'member-4',
    name: 'David Kim',
    username: '@algotrader',
    role: 'expert',
    joinDate: '2023-04-05',
    posts: 634,
    reputation: 6450,
    badges: ['Algorithm Specialist', 'Code Contributor'],
    bio: 'Quantitative trader building automated systems. Python and trading bot enthusiast.'
  },
  {
    id: 'member-5',
    name: 'Lisa Wang',
    username: '@riskmanager',
    role: 'member',
    joinDate: '2023-06-12',
    posts: 423,
    reputation: 4820,
    badges: ['Rising Star', 'Helpful Member'],
    bio: 'Risk management specialist helping traders protect their capital.'
  }
];

export const forumPosts: ForumPost[] = [
  {
    id: 'post-1',
    title: 'Best Crypto Exchange for Beginners in 2025?',
    content: 'I\'m new to cryptocurrency trading and overwhelmed by the number of exchanges. Which platform would you recommend for someone just starting out?',
    author: communityMembers[4],
    category: 'Cryptocurrency',
    replies: 23,
    views: 1247,
    likes: 45,
    createdAt: '2024-10-02',
    lastActivity: '2024-10-03',
    tags: ['beginner', 'exchange', 'crypto'],
    pinned: false,
    solved: true
  },
  {
    id: 'post-2',
    title: 'My Trading Strategy: 3R Risk-Reward Ratio',
    content: 'Sharing my profitable strategy that uses a 3:1 risk-reward ratio with proper position sizing. Been consistently profitable for 6 months now!',
    author: communityMembers[0],
    category: 'Trading Strategies',
    replies: 67,
    views: 3420,
    likes: 128,
    createdAt: '2024-10-01',
    lastActivity: '2024-10-04',
    tags: ['strategy', 'risk-reward', 'profitable'],
    pinned: true,
    solved: false
  },
  {
    id: 'post-3',
    title: 'How to Handle Trading Losses Emotionally?',
    content: 'I took a big loss yesterday and it\'s affecting my confidence. How do experienced traders deal with drawdowns and emotional trading?',
    author: communityMembers[4],
    category: 'Psychology',
    replies: 42,
    views: 2156,
    likes: 89,
    createdAt: '2024-09-30',
    lastActivity: '2024-10-02',
    tags: ['psychology', 'losses', 'emotions'],
    pinned: false,
    solved: true
  },
  {
    id: 'post-4',
    title: 'Technical Analysis vs Fundamental Analysis',
    content: 'What\'s more important for trading success? I\'ve been using only technicals but wondering if I should incorporate fundamentals too.',
    author: communityMembers[3],
    category: 'General Discussion',
    replies: 38,
    views: 1892,
    likes: 56,
    createdAt: '2024-09-28',
    lastActivity: '2024-10-01',
    tags: ['technical', 'fundamental', 'analysis'],
    pinned: false,
    solved: false
  },
  {
    id: 'post-5',
    title: 'Automated Trading Bots: Are They Worth It?',
    content: 'Considering building a trading bot with Python. Anyone here successfully using automation? What are the pros and cons?',
    author: communityMembers[3],
    category: 'Automation',
    replies: 52,
    views: 2734,
    likes: 94,
    createdAt: '2024-09-27',
    lastActivity: '2024-10-03',
    tags: ['automation', 'bots', 'python', 'algo trading'],
    pinned: false,
    solved: false
  },
  {
    id: 'post-6',
    title: 'Risk Management: The 2% Rule Explained',
    content: 'Never risk more than 2% of your account on a single trade. Here\'s why this rule has kept me profitable for years...',
    author: communityMembers[2],
    category: 'Risk Management',
    replies: 71,
    views: 4123,
    likes: 156,
    createdAt: '2024-09-25',
    lastActivity: '2024-10-02',
    tags: ['risk management', '2% rule', 'position sizing'],
    pinned: true,
    solved: false
  }
];

export const events: Event[] = [
  {
    id: 'event-1',
    title: 'Live Market Analysis: Crypto Markets Q4 2024',
    description: 'Join our expert analysts as they break down current crypto market trends, key levels to watch, and potential trading opportunities.',
    type: 'webinar',
    date: '2024-10-15',
    duration: '90 minutes',
    speaker: 'Sarah Chen & Marcus Rodriguez',
    attendees: 342,
    maxAttendees: 500,
    location: 'online'
  },
  {
    id: 'event-2',
    title: 'Forex Trading Workshop: Price Action Mastery',
    description: 'Hands-on workshop teaching advanced price action techniques for forex trading. Limited to 50 participants for personalized attention.',
    type: 'workshop',
    date: '2024-10-22',
    duration: '3 hours',
    speaker: 'Emily Thompson',
    attendees: 48,
    maxAttendees: 50,
    location: 'online'
  },
  {
    id: 'event-3',
    title: 'Algorithmic Trading Conference 2024',
    description: 'Annual conference featuring leading quant traders, algo developers, and fintech innovators. Network with professionals and learn cutting-edge strategies.',
    type: 'conference',
    date: '2024-11-05',
    duration: '2 days',
    speaker: 'Multiple Speakers',
    attendees: 1240,
    maxAttendees: 2000,
    location: 'New York City & Online'
  },
  {
    id: 'event-4',
    title: 'Community Trading Meetup: San Francisco',
    description: 'Local meetup for Mostlyfutures community members. Share strategies, network, and learn from fellow traders over coffee.',
    type: 'meetup',
    date: '2024-10-18',
    duration: '2 hours',
    speaker: 'Community Led',
    attendees: 23,
    maxAttendees: 30,
    location: 'San Francisco, CA'
  },
  {
    id: 'event-5',
    title: 'Beginner Trading Q&A Session',
    description: 'Ask anything about trading! Our expert team answers your questions live. Perfect for beginners getting started.',
    type: 'webinar',
    date: '2024-10-12',
    duration: '60 minutes',
    speaker: 'Community Experts',
    attendees: 567,
    location: 'online'
  }
];

// --- Advanced Analytics Mock Data (Velo/RWA-inspired) ---

export const dexPools: DexPool[] = [
  {
    id: 'pool-eth-usdc-arb',
    pool: 'ETH/USDC',
    chain: 'Arbitrum',
    tvl: 480_000_000,
    volume24h: 120_000_000,
    volume7d: 690_000_000,
    volume30d: 2_800_000_000,
    fees24h: 180_000,
    fees7d: 1_050_000,
    fees30d: 4_200_000,
    apr7d: 13.2,
    apr30d: 11.4,
  },
  {
    id: 'pool-btc-usdc-eth',
    pool: 'WBTC/USDC',
    chain: 'Ethereum',
    tvl: 620_000_000,
    volume24h: 95_000_000,
    volume7d: 520_000_000,
    volume30d: 2_100_000_000,
    fees24h: 142_000,
    fees7d: 785_000,
    fees30d: 3_150_000,
    apr7d: 9.8,
    apr30d: 8.6,
  },
  {
    id: 'pool-arb-usdc-arb',
    pool: 'ARB/USDC',
    chain: 'Arbitrum',
    tvl: 210_000_000,
    volume24h: 44_000_000,
    volume7d: 268_000_000,
    volume30d: 1_020_000_000,
    fees24h: 55_000,
    fees7d: 320_000,
    fees30d: 1_180_000,
    apr7d: 16.5,
    apr30d: 12.7,
  },
  {
    id: 'pool-matic-usdc-pol',
    pool: 'MATIC/USDC',
    chain: 'Polygon',
    tvl: 150_000_000,
    volume24h: 28_000_000,
    volume7d: 170_000_000,
    volume30d: 640_000_000,
    fees24h: 33_000,
    fees7d: 195_000,
    fees30d: 740_000,
    apr7d: 8.9,
    apr30d: 7.3,
  },
  {
    id: 'pool-gmx-usdc-arb',
    pool: 'GMX/USDC',
    chain: 'Arbitrum',
    tvl: 95_000_000,
    volume24h: 16_000_000,
    volume7d: 96_000_000,
    volume30d: 365_000_000,
    fees24h: 19_000,
    fees7d: 112_000,
    fees30d: 425_000,
    apr7d: 10.4,
    apr30d: 9.1,
  },
];

export const rwaAssets: RwaAsset[] = [
  {
    id: 'rwa-ustb-ondo',
    asset: 'USTB - Short-term Treasuries',
    issuer: 'Ondo',
    class: 'Treasury',
    chain: 'Ethereum',
    yieldPct: 5.2,
    maturity: 'T+1',
  },
  {
    id: 'rwa-foxo-franklin',
    asset: 'FOXO - U.S. Government Money Fund',
    issuer: 'Franklin Templeton',
    class: 'Treasury',
    chain: 'Polygon',
    yieldPct: 4.7,
    maturity: 'Daily',
  },
  {
    id: 'rwa-hifi-credit',
    asset: 'HIFI Credit Pool',
    issuer: 'Hifi',
    class: 'Private Credit',
    chain: 'Ethereum',
    yieldPct: 10.8,
    maturity: '30-90D',
  },
  {
    id: 'rwa-realty',
    asset: 'Tokenized Real Estate (REIT)',
    issuer: 'RealT',
    class: 'Real Estate',
    chain: 'Polygon',
    yieldPct: 7.1,
    maturity: 'N/A',
  },
  {
    id: 'rwa-gold',
    asset: 'PAXG - Tokenized Gold',
    issuer: 'Paxos',
    class: 'Commodities',
    chain: 'Ethereum',
    yieldPct: 0.0,
    maturity: 'Spot',
  },
];

// --- Comprehensive Crypto Analytics Data (Coinglass-inspired) ---

export interface CryptoAssetAnalytics {
  id: string;
  symbol: string;
  name: string;
  price: number;
  priceChange24h: number;
  volume24h: number;
  volumeChange24h: number;
  marketCap: number;
  // Derivatives metrics
  fundingRate: number; // Current funding rate (%)
  fundingRateChange: number; // Change in funding rate
  openInterest: number; // Total OI in USD
  oiChange1h: number; // OI change % (1 hour)
  oiChange24h: number; // OI change % (24 hours)
  liquidations24h: number; // Liquidation volume (24h)
  longShortRatio: number; // Ratio of longs vs shorts (e.g., 1.23 = 55% longs, 45% shorts)
  // On-chain metrics
  exchangeBalance: number; // Coins held on exchanges
  exchangeBalanceChange24h: number; // Change in exchange balance
  whaleTransactions24h: number; // Number of large transactions
  activeAddresses24h: number; // Active addresses count
  // Order flow / CVD
  cvd24h: number; // Cumulative Volume Delta (positive = net buying)
  buyPressure: number; // Buy pressure score (0-100)
  sellPressure: number; // Sell pressure score (0-100)
}

export const cryptoAnalytics: CryptoAssetAnalytics[] = [
  {
    id: 'btc',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 110919.6,
    priceChange24h: -1.29,
    volume24h: 90_270_000_000,
    volumeChange24h: -35.28,
    marketCap: 2_210_000_000_000,
    fundingRate: 0.0054,
    fundingRateChange: 0.0012,
    openInterest: 72_140_000_000,
    oiChange1h: 0.06,
    oiChange24h: -1.03,
    liquidations24h: 86_060_000,
    longShortRatio: 1.23,
    exchangeBalance: 2_170_000,
    exchangeBalanceChange24h: -16_020,
    whaleTransactions24h: 342,
    activeAddresses24h: 895_430,
    cvd24h: 2_340_000_000,
    buyPressure: 58,
    sellPressure: 42,
  },
  {
    id: 'eth',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3996.85,
    priceChange24h: -2.74,
    volume24h: 102_830_000_000,
    volumeChange24h: -27.14,
    marketCap: 483_280_000_000,
    fundingRate: 0.0031,
    fundingRateChange: -0.0008,
    openInterest: 46_700_000_000,
    oiChange1h: -0.62,
    oiChange24h: -1.17,
    liquidations24h: 128_370_000,
    longShortRatio: 0.92,
    exchangeBalance: 15_230_000,
    exchangeBalanceChange24h: -8_450,
    whaleTransactions24h: 287,
    activeAddresses24h: 512_340,
    cvd24h: -1_560_000_000,
    buyPressure: 45,
    sellPressure: 55,
  },
  {
    id: 'sol',
    symbol: 'SOL',
    name: 'Solana',
    price: 192.57,
    priceChange24h: -5.36,
    volume24h: 25_650_000_000,
    volumeChange24h: -31.46,
    marketCap: 105_600_000_000,
    fundingRate: 0.0001,
    fundingRateChange: -0.0015,
    openInterest: 10_160_000_000,
    oiChange1h: -0.84,
    oiChange24h: -2.91,
    liquidations24h: 32_460_000,
    longShortRatio: 1.05,
    exchangeBalance: 42_180_000,
    exchangeBalanceChange24h: -120_000,
    whaleTransactions24h: 156,
    activeAddresses24h: 3_420_000,
    cvd24h: -480_000_000,
    buyPressure: 48,
    sellPressure: 52,
  },
  {
    id: 'xrp',
    symbol: 'XRP',
    name: 'Ripple',
    price: 2.4043,
    priceChange24h: -3.65,
    volume24h: 6_490_000_000,
    volumeChange24h: -38.51,
    marketCap: 144_340_000_000,
    fundingRate: 0.0007,
    fundingRateChange: 0.0003,
    openInterest: 4_040_000_000,
    oiChange1h: -0.96,
    oiChange24h: -2.25,
    liquidations24h: 10_130_000,
    longShortRatio: 1.15,
    exchangeBalance: 8_920_000_000,
    exchangeBalanceChange24h: -25_000_000,
    whaleTransactions24h: 98,
    activeAddresses24h: 67_890,
    cvd24h: 120_000_000,
    buyPressure: 53,
    sellPressure: 47,
  },
  {
    id: 'bnb',
    symbol: 'BNB',
    name: 'BNB',
    price: 1175.54,
    priceChange24h: -2.08,
    volume24h: 5_850_000_000,
    volumeChange24h: -49.22,
    marketCap: 163_980_000_000,
    fundingRate: 0.0054,
    fundingRateChange: 0.0021,
    openInterest: 2_090_000_000,
    oiChange1h: -1.17,
    oiChange24h: 1.82,
    liquidations24h: 6_450_000,
    longShortRatio: 1.42,
    exchangeBalance: 1_280_000,
    exchangeBalanceChange24h: -3_200,
    whaleTransactions24h: 54,
    activeAddresses24h: 145_670,
    cvd24h: 340_000_000,
    buyPressure: 61,
    sellPressure: 39,
  },
  {
    id: 'doge',
    symbol: 'DOGE',
    name: 'Dogecoin',
    price: 0.19579,
    priceChange24h: -3.84,
    volume24h: 8_180_000_000,
    volumeChange24h: -41.65,
    marketCap: 29_700_000_000,
    fundingRate: -0.0035,
    fundingRateChange: -0.0012,
    openInterest: 1_990_000_000,
    oiChange1h: -0.78,
    oiChange24h: 1.12,
    liquidations24h: 9_120_000,
    longShortRatio: 0.88,
    exchangeBalance: 28_340_000_000,
    exchangeBalanceChange24h: 120_000_000,
    whaleTransactions24h: 67,
    activeAddresses24h: 89_450,
    cvd24h: -560_000_000,
    buyPressure: 42,
    sellPressure: 58,
  },
];

// Market overview aggregated metrics
export interface MarketOverview {
  totalVolume24h: number;
  totalVolumeChange24h: number;
  totalOpenInterest: number;
  totalOiChange24h: number;
  totalLiquidations24h: number;
  totalLiquidationsChange24h: number;
  avgLongShortRatio: number;
  btcDominance: number;
  btcDominanceChange: number;
  fearGreedIndex: number;
  fearGreedLabel: string;
}

export const marketOverview: MarketOverview = {
  totalVolume24h: 313_774_321_211,
  totalVolumeChange24h: -29.39,
  totalOpenInterest: 159_801_028_994,
  totalOiChange24h: -1.35,
  totalLiquidations24h: 444_625_886,
  totalLiquidationsChange24h: -30.39,
  avgLongShortRatio: 1.08,
  btcDominance: 58.86,
  btcDominanceChange: 0.67,
  fearGreedIndex: 29,
  fearGreedLabel: 'Fear',
};

// Funding rate leaderboard (highest/lowest across exchanges)
export interface FundingRateEntry {
  id: string;
  pair: string;
  exchange: string;
  fundingRate: number;
  nextFunding: string; // Time until next funding (e.g., "2h 15m")
  openInterest: number;
}

export const fundingRateLeaderboard: FundingRateEntry[] = [
  {
    id: 'fr-1',
    pair: 'BTC/USDT',
    exchange: 'Binance',
    fundingRate: 0.0032,
    nextFunding: '2h 15m',
    openInterest: 24_500_000_000,
  },
  {
    id: 'fr-2',
    pair: 'ETH/USDT',
    exchange: 'Bybit',
    fundingRate: 0.0036,
    nextFunding: '1h 45m',
    openInterest: 18_200_000_000,
  },
  {
    id: 'fr-3',
    pair: 'SOL/USDT',
    exchange: 'OKX',
    fundingRate: 0.0001,
    nextFunding: '3h 10m',
    openInterest: 4_120_000_000,
  },
  {
    id: 'fr-4',
    pair: 'DOGE/USDT',
    exchange: 'Binance',
    fundingRate: -0.0035,
    nextFunding: '2h 15m',
    openInterest: 890_000_000,
  },
  {
    id: 'fr-5',
    pair: 'ARB/USDT',
    exchange: 'Bybit',
    fundingRate: 0.0068,
    nextFunding: '1h 45m',
    openInterest: 1_240_000_000,
  },
];

// Trading-specific data from existing structure

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
    title: 'Mostlyfutures - Advanced Trading Platform',
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
    path: '/ai-agent',
    title: 'AI Agent',
    description: 'AI-powered SvelteKit project editor using PydanticAI',
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