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
    href: '/features', 
    label: 'Features',
    description: 'Discover our powerful trading tools'
  },
  { 
    href: '/pricing', 
    label: 'Pricing',
    description: 'Choose the right plan for you'
  },
  { 
    href: '/education', 
    label: 'Education',
    description: 'Learn from trading experts'
  },
  { 
    href: '/community', 
    label: 'Community',
    description: 'Connect with fellow traders'
  },
  { 
    href: '/blog', 
    label: 'Blog',
    description: 'Latest market insights'
  },
  { 
    href: '/dashboard', 
    label: 'Dashboard',
    description: 'Manage your trades'
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