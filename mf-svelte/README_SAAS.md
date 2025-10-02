# MostlyFutures - SaaS Website

A modern SaaS-style website built with SvelteKit, inspired by contemporary web design patterns. This platform provides comprehensive education on cryptocurrency and trading.

## 🚀 Features

- **Modern SaaS Design**: Clean, professional interface with gradient effects and glassmorphism
- **Responsive Layout**: Mobile-first design that works seamlessly on all devices
- **Educational Content**: Comprehensive guides on crypto, trading, and NFTs
- **Component-Based Architecture**: Reusable Svelte components for consistency
- **Fast Performance**: Built with SvelteKit for optimal performance

## 📁 Project Structure

```
mf-svelte/
├── src/
│   ├── lib/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── FeatureCard.svelte
│   │   │   └── FeatureList.svelte
│   │   └── data/           # Data and content
│   │       └── routes.ts   # Route information and content
│   ├── routes/             # SvelteKit file-based routing
│   │   ├── +layout.svelte  # Site-wide layout
│   │   ├── +page.svelte    # Homepage
│   │   ├── landing/        # Landing page
│   │   ├── crypto-intro/   # Crypto education
│   │   ├── trading-intro/  # Trading education
│   │   ├── nfts/          # NFT gallery
│   │   └── contact/       # Contact page
│   ├── app.css            # Global styles
│   └── app.html           # HTML template
├── public/                # Static assets
├── build/                 # Production build output
└── package.json          # Dependencies and scripts
```

## 🎨 Components

### Header (`src/lib/components/Header.svelte`)
- Fixed navigation bar with glassmorphism effect
- Desktop and mobile responsive menu
- CTA buttons for key actions

### Footer (`src/lib/components/Footer.svelte`)
- Site navigation links
- Brand information
- Social links and legal pages

### Hero (`src/lib/components/Hero.svelte`)
- Large hero sections with gradient text
- Animated background elements
- Primary and secondary CTAs
- Customizable title and subtitle

### FeatureCard (`src/lib/components/FeatureCard.svelte`)
- Reusable card component for features
- Hover effects and animations
- Optional links

### FeatureList (`src/lib/components/FeatureList.svelte`)
- Pros/cons lists with custom styling
- Color-coded for positive/negative items

## 📄 Pages

### Home (`/`)
- Hero section introducing MostlyFutures
- Feature cards for main services
- Call-to-action section

### Landing (`/landing`)
- Step-by-step guide to getting started
- Quick links to educational resources

### Crypto Introduction (`/crypto-intro`)
- What is cryptocurrency
- How to buy crypto safely
- Blockchain technology explained

### Trading Introduction (`/trading-intro`)
- Trading fundamentals
- Different asset types (Stocks, Futures, Forex)
- Pros and cons of each market

### NFT Gallery (`/nfts`)
- Information about NFTs
- Link to OpenSea collection
- NFT benefits and use cases

### Contact (`/contact`)
- Email contact information
- Links to resources
- Social media connections

## 🗂️ Data Management

All route information, content, and data are centralized in `src/lib/data/routes.ts`:

```typescript
export interface RouteInfo {
  path: string;
  title: string;
  description: string;
  content?: string;
}

export const routes: RouteInfo[]
export const navLinks
export const tradingAssets
```

This makes it easy to update content without modifying component code.

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: Indigo/Blue gradient (#6366f1 → #4f46e5)
- **Secondary**: Purple/Pink accent (#a78bfa)
- **Background**: Dark slate (#0f172a, #1e293b)
- **Text**: White with varying opacity for hierarchy

### Typography
- **Headings**: Large, bold, gradient text
- **Body**: Clean, readable sans-serif
- **Font sizes**: Responsive using `clamp()` for fluid typography

### Effects
- **Glassmorphism**: Frosted glass effect with backdrop-blur
- **Gradients**: Linear gradients for text and backgrounds
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Layered shadows for depth

## 🔗 External Links

- **Trading Platform**: https://www.mostlyfutures.finance
- **NFT Collection**: https://opensea.io/mostlyfutures
- **Book**: https://www.amazon.com/dp/B0DXN4P2P4

## 📝 Customization

### Update Content
1. Edit `src/lib/data/routes.ts` to modify route information
2. Update component props in page files
3. Adjust styles in component `<style>` sections

### Add New Pages
1. Create new folder in `src/routes/`
2. Add `+page.svelte` file
3. Import and use shared components
4. Update navigation in `Header.svelte`

### Modify Design
1. Global styles: `src/app.css` and `src/routes/+layout.svelte`
2. Component styles: Individual component `<style>` sections
3. Colors and gradients: Update CSS custom properties

## 🚀 Deployment

The site is configured for static site generation (SSG):

1. Build: `npm run build`
2. Output: `build/` directory
3. Deploy the `build/` folder to any static hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Cloudflare Pages

## 📦 Dependencies

- **SvelteKit**: Framework for building the site
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety and better DX

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

All rights reserved © MostlyFutures

---

**Built with ❤️ using SvelteKit**
