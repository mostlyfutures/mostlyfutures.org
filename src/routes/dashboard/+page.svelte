<script lang="ts">
  import MetricCard from '$lib/components/saas/MetricCard.svelte';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { dashboardMetrics, mockUsers } from '$lib/data/mockData.js';
  import { formatCurrency, formatPercentage } from '$lib/utils.js';
import AnimatedIcon from '$lib/components/AnimatedIcon.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';
  import ComingSoonCard from '$lib/components/ComingSoonCard.svelte';
  // Mock current user (in a real app, this would come from authentication)
  const currentUser = mockUsers[0];

  // Recent trades (mock data)
  const recentTrades = [
    { id: 1, symbol: 'BTC/USD', type: 'buy', amount: 0.5, price: 45230, pnl: 1250, time: '2024-10-04T14:30:00' },
    { id: 2, symbol: 'ETH/USD', type: 'sell', amount: 2.3, price: 2680, pnl: -340, time: '2024-10-04T13:15:00' },
    { id: 3, symbol: 'EUR/USD', type: 'buy', amount: 10000, price: 1.0845, pnl: 180, time: '2024-10-04T12:00:00' },
  ];

  // Portfolio holdings (mock data)
  const portfolioHoldings = [
    { symbol: 'BTC', amount: 1.25, value: 56540, change: 2.4 },
    { symbol: 'ETH', amount: 4.8, value: 12864, change: -1.2 },
    { symbol: 'USD', amount: 15000, value: 15000, change: 0 },
  ];

  // Dashboard features coming soon
  const dashboardFeatures = [
    {
      title: 'Infinite Scroll Effect',
      description: 'Seamlessly browse through unlimited data with smooth infinite scrolling.',
      category: 'UX',
      icon: '∞'
    },
    {
      title: 'Advanced Trading Charts',
      description: 'Professional-grade charts with custom workspace saving like TradingView.',
      category: 'Trading',
      icon: '📊'
    },
    {
      title: 'Real-time Portfolio Analytics',
      description: 'Deep dive into your portfolio performance with advanced analytics and insights.',
      category: 'Analytics',
      icon: '📈'
    }
  ];
</script>

<svelte:head>
  <title>Dashboard - MostlyFutures</title>
  <meta name="description" content="Your trading command center. Monitor portfolio, track performance, and manage trades." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <!-- Header -->
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
    <div>
      <h1 class="text-3xl font-bold mb-2">Welcome back, {currentUser.name}!</h1>
      <p class="text-muted-foreground">Here's what's happening with your trading account today.</p>
    </div>
    <Button class="mt-4 sm:mt-0">
      + New Trade
    </Button>
  </div>

  <!-- Key Metrics -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <Card.Root>
      <Card.Content class="p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">Portfolio Value</p>
            <p class="text-2xl font-bold">{formatCurrency(84404)}</p>
          </div>
          <span class="text-2xl text-muted-foreground">💰</span>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <span class="mr-1 text-green-500">↗</span>
          <span class="text-green-600">+{formatPercentage(5.2)}</span>
          <span class="ml-2 text-muted-foreground">vs last week</span>
        </div>
      </Card.Content>
    </Card.Root>
    
    <Card.Root>
      <Card.Content class="p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">Today's P&L</p>
            <p class="text-2xl font-bold text-green-600">+{formatCurrency(1090)}</p>
          </div>
          <span class="text-2xl text-green-500">📈</span>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <span class="text-green-600">+{formatPercentage(1.3)}</span>
          <span class="ml-2 text-muted-foreground">from yesterday</span>
        </div>
      </Card.Content>
    </Card.Root>
    
    <Card.Root>
      <Card.Content class="p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">Win Rate</p>
            <p class="text-2xl font-bold">{currentUser.stats.winRate}%</p>
          </div>
          <span class="text-2xl text-muted-foreground">📊</span>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <span class="text-muted-foreground">Last 30 trades</span>
        </div>
      </Card.Content>
    </Card.Root>
    
    <Card.Root>
      <Card.Content class="p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">Total Trades</p>
            <p class="text-2xl font-bold">{currentUser.stats.totalTrades}</p>
          </div>
          <span class="text-2xl text-muted-foreground">📈</span>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <span class="text-muted-foreground">This month</span>
        </div>
      </Card.Content>
    </Card.Root>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Portfolio Holdings -->
    <div class="lg:col-span-2">
      <Card.Root>
        <Card.Header>
          <Card.Title>Portfolio Holdings</Card.Title>
          <Card.Description>Your current asset allocation</Card.Description>
        </Card.Header>
        <Card.Content>
          <div class="space-y-4">
            {#each portfolioHoldings as holding}
              <div class="flex items-center justify-between p-4 border rounded-lg">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span class="font-bold text-sm">{holding.symbol}</span>
                  </div>
                  <div>
                    <p class="font-medium">{holding.symbol}</p>
                    <p class="text-sm text-muted-foreground">{holding.amount} units</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="font-medium">{formatCurrency(holding.value)}</p>
                  <p class={`text-sm ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(holding.change)}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </Card.Content>
      </Card.Root>
      
      <!-- Recent Trades -->
      <Card.Root class="mt-6">
        <Card.Header>
          <Card.Title>Recent Trades</Card.Title>
          <Card.Description>Your latest trading activity</Card.Description>
        </Card.Header>
        <Card.Content>
          <div class="space-y-4">
            {#each recentTrades as trade}
              <div class="flex items-center justify-between p-4 border rounded-lg">
                <div class="flex items-center gap-4">
                  <div class={`w-2 h-2 rounded-full ${trade.type === 'buy' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <div>
                    <p class="font-medium">{trade.symbol}</p>
                    <p class="text-sm text-muted-foreground capitalize">{trade.type} • {trade.amount}</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="font-medium">{formatCurrency(trade.price)}</p>
                  <p class={`text-sm ${trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {trade.pnl >= 0 ? '+' : ''}{formatCurrency(trade.pnl)}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </Card.Content>
      </Card.Root>
    </div>

    <!-- Side Panel -->
    <div class="space-y-6">
      <!-- Quick Actions -->
      <Card.Root>
        <Card.Header>
          <Card.Title>Quick Actions</Card.Title>
        </Card.Header>
        <Card.Content class="space-y-3">
          <Button class="w-full justify-start">
            + Place New Trade
          </Button>
          <Button variant="outline" class="w-full justify-start">
            📈 View Signals
          </Button>
          <Button variant="outline" class="w-full justify-start">
            📊 Analytics
          </Button>
        </Card.Content>
      </Card.Root>

      <!-- Market Overview -->
      <Card.Root>
        <Card.Header>
          <Card.Title>Market Overview</Card.Title>
          <Card.Description>Key market movements</Card.Description>
        </Card.Header>
        <Card.Content class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm">BTC/USD</span>
            <div class="text-right">
              <span class="font-medium">$45,230</span>
              <span class="text-green-600 text-sm ml-2">+2.4%</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm">ETH/USD</span>
            <div class="text-right">
              <span class="font-medium">$2,680</span>
              <span class="text-red-600 text-sm ml-2">-1.2%</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm">EUR/USD</span>
            <div class="text-right">
              <span class="font-medium">1.0845</span>
              <span class="text-green-600 text-sm ml-2">+0.3%</span>
            </div>
          </div>
        </Card.Content>
      </Card.Root>

      <!-- Account Info -->
      <Card.Root>
        <Card.Header>
          <Card.Title>Account Status</Card.Title>
        </Card.Header>
        <Card.Content class="space-y-3">
          <div class="flex justify-between">
            <span class="text-sm text-muted-foreground">Plan</span>
            <span class="text-sm font-medium">Pro</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-muted-foreground">Member since</span>
            <span class="text-sm font-medium">Jan 2024</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-muted-foreground">Risk Level</span>
            <span class="text-sm font-medium text-orange-600">Moderate</span>
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </div>

  <!-- Coming Soon Features -->
  <div class="mt-12">
    <h2 class="text-2xl font-bold mb-6">Coming Soon to Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each dashboardFeatures as feature}
        <ComingSoonCard
          title={feature.title}
          description={feature.description}
          category={feature.category}
          icon={feature.icon}
        />
      {/each}
    </div>
  </div>
</div>