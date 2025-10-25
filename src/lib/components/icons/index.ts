export const categoryIcon = (category: string) => {
  switch (category) {
    case 'trading':
      return { variant: 'lightning', color: '#468BE6' };
    case 'education':
      return { variant: 'book', color: '#93BFEF' };
    case 'analytics':
      return { variant: 'shield', color: '#092F64' };
    case 'community':
      return { variant: 'users', color: '#468BE6' };
    default:
      return { variant: 'default', color: '#468BE6' };
  }
};

export const iconVariants = {
  lightning: { phosphor: 'Lightning', color: '#468BE6' },
  book: { phosphor: 'Book', color: '#93BFEF' },
  shield: { phosphor: 'ShieldCheck', color: '#092F64' },
  users: { phosphor: 'Users', color: '#468BE6' },
  chart: { phosphor: 'ChartLine', color: '#10b981' },
  rocket: { phosphor: 'Rocket', color: '#a855f7' },
  default: { phosphor: 'Code', color: '#468BE6' }
};
