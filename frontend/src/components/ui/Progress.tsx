import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  indicatorColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Progress({
  className,
  value = 0,
  indicatorColor = 'bg-primary-600',
  size = 'md',
  ...props
}: ProgressProps) {
  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800',
        heights[size],
        className
      )}
      {...props}
    >
      <div
        className={cn('h-full transition-all duration-500 ease-out rounded-full', indicatorColor)}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
}
