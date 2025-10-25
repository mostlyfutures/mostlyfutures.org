# Route and Content Management Guide

## Overview
All route information and content is centralized in `src/lib/data/routes.ts`. This makes it easy to update content without modifying component files.

## Data Structure

### Route Information
```typescript
export interface RouteInfo {
  path: string;           // URL path
  title: string;          // Page title
  description: string;    // Meta description / subtitle
  content?: string;       // Optional main content
}
```

### Available Data Exports

#### 1. `routes` - All Route Information
```typescript
export const routes: RouteInfo[]
```

Contains:
- `/` - Homepage
- `/landing` - Landing/Getting Started
- `/crypto-intro` - Cryptocurrency Introduction
- `/trading-intro` - Trading Basics
- `/nfts` - NFT Gallery
- `/contact` - Contact Page

#### 2. `navLinks` - Navigation Links
```typescript
export const navLinks = [
  { href: '/crypto-intro', label: 'Crypto Introduction' },
  { href: '/trading-intro', label: 'Trading' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/contact', label: 'Contact' },
]
```

#### 3. `tradingAssets` - Trading Asset Information
```typescript
export const tradingAssets = [
  {
    name: string,
    description: string,
    pros: string[],
    cons: string[]
  }
]
```

Contains information for:
- Stocks
- Futures
- Forex (Foreign Exchange)

## How to Update Content

### Update Page Title or Description
```typescript
// In src/lib/data/routes.ts
{
  path: '/crypto-intro',
  title: 'How to Buy Crypto',
  description: 'New description here', // Update this
}
```

### Add New Navigation Link
```typescript
// In src/lib/data/routes.ts
export const navLinks = [
  // ... existing links
  { href: '/new-page', label: 'New Page' },
]

// Then update Header.svelte to use the navLinks array
```

### Add New Trading Asset
```typescript
// In src/lib/data/routes.ts
export const tradingAssets = [
  // ... existing assets
  {
    name: 'Options',
    description: 'Trade options contracts...',
    pros: [
      'Flexible strategies',
      'Limited risk potential',
    ],
    cons: [
      'Complex to understand',
      'Time decay risk',
    ],
  },
]
```

### Update Main Content
```typescript
// In src/lib/data/routes.ts
{
  path: '/crypto-intro',
  content: `
    Your updated content here...
    This can be multi-line and include
    all the information you need.
  `,
}
```

## Using Data in Components

### Import Route Data
```svelte
<script>
  import { routes, navLinks, tradingAssets } from '$lib/data/routes';
  
  // Find specific route
  const cryptoRoute = routes.find(r => r.path === '/crypto-intro');
</script>

<h1>{cryptoRoute.title}</h1>
<p>{cryptoRoute.description}</p>
```

### Iterate Over Trading Assets
```svelte
<script>
  import { tradingAssets } from '$lib/data/routes';
</script>

{#each tradingAssets as asset}
  <div>
    <h3>{asset.name}</h3>
    <p>{asset.description}</p>
    <ul>
      {#each asset.pros as pro}
        <li>{pro}</li>
      {/each}
    </ul>
  </div>
{/each}
```

### Use Navigation Links
```svelte
<script>
  import { navLinks } from '$lib/data/routes';
</script>

<nav>
  {#each navLinks as link}
    <a href={link.href}>{link.label}</a>
  {/each}
</nav>
```

## Best Practices

1. **Keep Content in Data File**: Don't hardcode content in components
2. **Use TypeScript Types**: Ensure type safety with `RouteInfo` interface
3. **Organize by Topic**: Group related content together
4. **Use Descriptive Names**: Make data properties self-documenting
5. **Version Control**: Track content changes in git

## Quick Updates Checklist

### Adding a New Page
- [ ] Add route info to `routes` array in `routes.ts`
- [ ] Create `+page.svelte` in appropriate directory
- [ ] Add navigation link to `navLinks` if needed
- [ ] Update `Header.svelte` with new link
- [ ] Test the page locally

### Updating Existing Content
- [ ] Locate content in `routes.ts`
- [ ] Update the relevant fields
- [ ] Save and check browser (dev server auto-reloads)
- [ ] Verify changes look correct
- [ ] Commit changes to git

### Changing Navigation
- [ ] Update `navLinks` array in `routes.ts`
- [ ] Ensure `Header.svelte` uses the array
- [ ] Check mobile menu works
- [ ] Test all links

## Common Tasks

### Change Homepage Hero Text
```typescript
// In src/routes/+page.svelte
<Hero 
  title="New Title Here"
  subtitle="New subtitle here"
  primaryCta={{ text: 'Button Text', href: '/link' }}
/>
```

### Update Contact Email
```typescript
// In src/routes/contact/+page.svelte
<a href="mailto:newemail@example.com" class="email-link">
  newemail@example.com
</a>
```

### Modify External Links
Search for these URLs and update as needed:
- Trading platform: `https://www.mostlyfutures.finance`
- OpenSea collection: `https://opensea.io/mostlyfutures`
- Amazon book: `https://www.amazon.com/dp/B0DXN4P2P4`

## File Locations Quick Reference

| Content Type | Location |
|-------------|----------|
| Route data | `src/lib/data/routes.ts` |
| Navigation | `src/lib/components/Header.svelte` |
| Footer links | `src/lib/components/Footer.svelte` |
| Homepage | `src/routes/+page.svelte` |
| Page content | `src/routes/[route]/+page.svelte` |
| Global styles | `src/app.css` |
| Layout | `src/routes/+layout.svelte` |

---

**Last Updated**: October 2, 2025
