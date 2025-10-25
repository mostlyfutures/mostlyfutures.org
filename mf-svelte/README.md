# mf-svelte

A modern SaaS website for MostlyFutures - a comprehensive cryptocurrency and trading education platform built with SvelteKit.

## ✨ Features

- 🎯 **Educational Content**: Comprehensive guides on cryptocurrency, trading, and NFTs
- 📊 **Real-time Market Data**: Live cryptocurrency prices and analytics via CoinGecko API
- 🎨 **Modern UI**: Professional SaaS design with glassmorphism effects
- 📱 **Responsive Design**: Mobile-first approach that works on all devices
- 🔐 **Authentication**: User authentication and account management
- 📝 **Blog System**: Built-in blog for educational content
- 📈 **Data Visualization**: Charts and analytics for market data
- 🌙 **Dark Mode**: Built-in dark theme support

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Component library
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast development and builds
- **Icons**: [Lucide React](https://lucide.dev/) & [Phosphor Svelte](https://phosphoricons.com/)
- **Charts**: [Chart.js](https://www.chartjs.org/) - Data visualization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mf-svelte.git
cd mf-svelte
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── routes/                    # SvelteKit file-based routing
│   ├── +page.svelte           # Homepage
│   ├── +layout.svelte         # Root layout
│   ├── ai-agent/              # AI agent features
│   ├── blog/                  # Blog system
│   ├── community/             # Community features
│   ├── crypto-intro/          # Crypto education
│   ├── dashboard/             # User dashboard
│   ├── education/             # Educational content
│   ├── markets/               # Market data
│   ├── pricing/               # Pricing plans
│   └── trading-intro/         # Trading education
├── lib/
│   ├── components/            # Reusable components
│   │   ├── ui/                # Base UI components
│   │   └── saas/              # SaaS-specific components
│   ├── api/                   # API clients
│   ├── stores/                # State management
│   ├── data/                  # Content and mock data
│   └── utils/                 # Utility functions
└── app.html                   # HTML template
```

## 🎨 Design System

### Color Palette
- **Primary**: Robinhood-inspired blues
- **Success**: Crypto green (#10B981)
- **Danger**: Crypto red (#EF4444)
- **Warning**: Crypto yellow (#F59E0B)

### Components
- Button variants with hover states
- Card components with glassmorphism
- Form inputs with validation
- Navigation with active states
- Hero sections with call-to-action

## 📊 Data Sources

### External APIs
- **CoinGecko API**: Real-time cryptocurrency prices and market data
- **ag-ui**: Trading platform components and data

### Local Data
- Blog posts and educational content
- Mock data for development and testing
- User authentication data

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript checks
npm run check

# Start development with specific host
npm run dev -- --host

# Build with verbose output
npm run build -- --verbose
```

## 🚀 Deployment

### Static Hosting
This project uses static site generation and can be deployed to:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `build/` folder or connect Git
- **GitHub Pages**: Use the `build/` folder as the source
- **AWS S3**: Upload the `build/` folder to an S3 bucket
- **Cloudflare Pages**: Connect your repository and deploy

### Build Configuration
The project is configured for static site generation with:
- Prerendering of all routes
- Automatic 404.html fallback
- Optimized assets and bundles
- SEO-friendly meta tags

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Demo](https://mostlyfutures.org)
- [Documentation](./CLAUDE.md)
- [SvelteKit Docs](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact us at [contact@mostlyfutures.org](mailto:contact@mostlyfutures.org)
- Join our community Discord

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte Extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

---

Built with ❤️ using SvelteKit and modern web technologies.
