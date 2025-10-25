# MostlyFutures — Local Blog (mf-svelte)

This folder contains a SvelteKit site modified into an educational Web3 blog.

Routes added:
- `/blog` — blog index
- `/blog/[slug]` — post pages (example slugs: `intro-to-web3`, `smart-contracts-101`)

How to run:

```bash
cd mf-svelte
npm install
npm run dev
# open http://localhost:5173/blog
```

Notes:
- UI components use Tailwind and the existing shadcn-like styling in this repo.
- `src/lib/components/AnimatedIcon.svelte` is a small SVG component used by the blog cards.
- Content is mocked in `src/lib/data/posts.ts` — add more posts there or integrate a markdown loader.
