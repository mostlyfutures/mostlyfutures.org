import { cn } from '$lib/utils/cn';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  size?: 'default' | 'sm';
  class?: string;
  children: string | number;
}

export function Badge({ variant = 'default', size = 'default', class: className, children }: BadgeProps) {
  return (
    <span
      class={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        {
          'border bg-primary text-primary-foreground hover:bg-primary/80': variant === 'default',
          'border bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'border bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'text-foreground': variant === 'outline'
        },
        {
          'px-2 py-0.5 text-xs': size === 'default',
          'px-1.5 py-0.5 text-xs': size === 'sm'
        },
        className
      )}
    >
      {children}
    </span>
  );
}
