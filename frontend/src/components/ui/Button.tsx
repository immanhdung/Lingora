import * as React from 'react';
import { cn, sounds } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'kids' | 'danger' | 'glow';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon';
  sound?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', sound = true, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (sound) {
        sounds.playClick();
      }
      if (onClick) {
        onClick(e);
      }
    };

    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      default: 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow focus-visible:ring-primary-500 rounded-xl',
      primary: 'bg-gradient-to-r from-primary-600 to-primary-electric hover:from-primary-700 hover:to-purple-700 text-white shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/35 rounded-xl',
      secondary: 'bg-secondary hover:bg-sky-500 text-white shadow-sm rounded-xl',
      outline: 'border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl',
      ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl',
      kids: 'bg-kids-yellow hover:bg-yellow-400 text-amber-950 font-bold border-b-4 border-amber-500 active:border-b-0 active:translate-y-1 shadow-md rounded-2xl tracking-wide font-kids text-lg',
      danger: 'bg-rose-500 hover:bg-rose-600 text-white shadow-sm rounded-xl',
      glow: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:brightness-105 rounded-xl animate-pulseGlow',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      xl: 'h-14 px-8 text-lg font-semibold',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
