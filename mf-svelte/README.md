# MostlyFutures - SvelteKit Website

This project is a SvelteKit conversion of an existing HTML website, maintaining the original layout and design while leveraging modern web development practices.

## Tech Stack

- **SvelteKit** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173/`

## Project Structure

```
src/
├── routes/           # SvelteKit file-based routing
├── lib/             # Reusable components and utilities
├── app.html         # Main HTML template
└── app.css          # Global styles
```

## Converting from HTML

When migrating HTML content to SvelteKit:

- HTML pages become routes in `src/routes/`
- Reusable HTML sections become Svelte components in `src/lib/`
- CSS can be scoped to components or kept global
- JavaScript functionality can be enhanced with Svelte's reactivity

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte Extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Deployment

The built application is compatible with any static hosting service or can be deployed as a full-stack application depending on your routing needs.
