<script lang="ts">
  import PricingCard from '$lib/components/saas/PricingCard.svelte';
  import { Button } from '$lib/components/ui/button';
  import { pricingPlans } from '$lib/data/mockData.js';
  import { Check } from 'lucide-svelte';
  
  let billingPeriod: 'monthly' | 'yearly' = 'monthly';
  
  function toggleBilling() {
    billingPeriod = billingPeriod === 'monthly' ? 'yearly' : 'monthly';
  }
  
  // Calculate yearly pricing (20% discount)
  const getDisplayedPlans = (period: 'monthly' | 'yearly') => {
    return pricingPlans.map(plan => ({
      ...plan,
      price: period === 'yearly' ? Math.round(plan.price * 12 * 0.8) : plan.price,
      billing: period
    }));
  };
  
  $: displayedPlans = getDisplayedPlans(billingPeriod);
</script>

<svelte:head>
  <title>Pricing - MostlyFutures</title>
  <meta name="description" content="Choose the perfect plan for your trading needs. Flexible pricing with powerful features." />
</svelte:head>

<div class="container mx-auto px-4 py-24">
  <!-- Header -->
  <div class="text-center mb-16">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
      Simple, transparent 
      <span class="text-tufts-blue font-bold">
        pricing
      </span>
    </h1>
    <p class="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
      Choose the plan that's right for you. Upgrade or downgrade at any time.
    </p>
    
    <!-- Billing Toggle -->
    <div class="flex items-center justify-center gap-4">
      <span class={billingPeriod === 'monthly' ? 'font-medium' : 'text-muted-foreground'}>Monthly</span>
      <Button 
        variant="outline" 
        size="sm" 
        class={`relative w-12 h-6 rounded-full p-0 ${billingPeriod === 'yearly' ? 'bg-primary' : 'bg-gray-200'}`}
        on:click={toggleBilling}
      >
        <div class={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
          billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
        }`} />
      </Button>
      <span class={billingPeriod === 'yearly' ? 'font-medium' : 'text-muted-foreground'}>
        Yearly
        <span class="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Save 20%</span>
      </span>
    </div>
  </div>

  <!-- Pricing Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
    {#each displayedPlans as plan}
      <PricingCard {plan} />
    {/each}
  </div>
  
  <!-- Enterprise Contact -->
  <div class="text-center">
    <div class="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
      <h3 class="text-2xl font-bold mb-4">Need something custom?</h3>
      <p class="text-muted-foreground mb-6">
        Our enterprise solutions are designed for institutions and large trading teams. 
        Get dedicated support, custom integrations, and white-label solutions.
      </p>
      <Button size="lg">Contact Sales</Button>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="mt-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Frequently asked questions</h2>
      <p class="text-muted-foreground">Everything you need to know about our pricing and plans.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-2">Can I change my plan later?</h3>
          <p class="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Do you offer a free trial?</h3>
          <p class="text-muted-foreground text-sm">Yes, we offer a 14-day free trial for all our plans. No credit card required to start.</p>
        </div>
        <div>
          <h3 class="font-semibold mb-2">What payment methods do you accept?</h3>
          <p class="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and cryptocurrency payments.</p>
        </div>
      </div>
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-2">Is there a setup fee?</h3>
          <p class="text-muted-foreground text-sm">No, there are no setup fees or hidden costs. You only pay for the plan you choose.</p>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Can I cancel anytime?</h3>
          <p class="text-muted-foreground text-sm">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Do you offer refunds?</h3>
          <p class="text-muted-foreground text-sm">We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Features Comparison -->
  <div class="mt-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Compare all features</h2>
      <p class="text-muted-foreground">See what's included in each plan.</p>
    </div>
    
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b">
            <th class="text-left py-4 px-4 font-semibold">Features</th>
            <th class="text-center py-4 px-4 font-semibold">Starter</th>
            <th class="text-center py-4 px-4 font-semibold">Pro</th>
            <th class="text-center py-4 px-4 font-semibold">Enterprise</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr>
            <td class="py-4 px-4">Trading signals</td>
            <td class="text-center py-4 px-4"><span class="text-muted-foreground">Basic</span></td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
          </tr>
          <tr>
            <td class="py-4 px-4">Educational content</td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
          </tr>
          <tr>
            <td class="py-4 px-4">Portfolio tracking</td>
            <td class="text-center py-4 px-4">-</td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
          </tr>
          <tr>
            <td class="py-4 px-4">Advanced charting</td>
            <td class="text-center py-4 px-4">-</td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
          </tr>
          <tr>
            <td class="py-4 px-4">API access</td>
            <td class="text-center py-4 px-4">-</td>
            <td class="text-center py-4 px-4">-</td>
            <td class="text-center py-4 px-4"><Check class="h-4 w-4 text-green-500 mx-auto" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>