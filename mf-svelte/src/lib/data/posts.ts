export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
};

export const posts: Post[] = [
  {
    slug: 'intro-to-web3',
    title: 'Intro to Web3: A Practical Guide',
    date: '2025-10-01',
    excerpt: 'A clear, pragmatic introduction to web3 concepts, wallets, and smart contracts.',
    content: `# Intro to Web3\n\nWeb3 flips the script on how the web operates... (sample content)`,
    tags: ['web3','intro']
  },
  {
    slug: 'smart-contracts-101',
    title: 'Smart Contracts 101',
    date: '2025-09-20',
    excerpt: 'Understand the basics of smart contracts and how to interact with them.',
    content: `# Smart Contracts 101\n\nSmart contracts are programs that run on blockchains... (sample content)`,
    tags: ['solidity','contracts']
  }
];