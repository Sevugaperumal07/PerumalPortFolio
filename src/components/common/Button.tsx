import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../utils/helpers';

export interface ButtonProps<T extends ElementType = 'button'> {
  as?: T;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  isLoading,
  children,
  className,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button';
  const MotionComponent = motion.create(Component as any);

  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-primary/90 shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
    outline: 'bg-transparent border border-white/10 hover:bg-white/5 text-on-surface',
    ghost: 'bg-transparent hover:bg-white/5 text-on-surface-variant hover:text-on-surface',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg font-semibold rounded-2xl',
  };

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </MotionComponent>
  );
};
