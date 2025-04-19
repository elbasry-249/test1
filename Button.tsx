import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'green' | 'purple' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    const baseStyles = "relative font-heading uppercase tracking-wider inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "text-neon-blue bg-transparent border-2 border-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_rgba(27,231,255,0.5)]",
      green: "text-neon-green bg-transparent border-2 border-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_15px_rgba(0,255,171,0.5)]",
      purple: "text-neon-purple bg-transparent border-2 border-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(156,39,176,0.5)]",
      ghost: "text-slate-100 bg-transparent hover:text-neon-blue hover:bg-cosmic-dark/50",
    };
    
    const sizes = {
      sm: "text-xs px-3 py-1.5 rounded",
      md: "text-sm px-6 py-2.5 rounded-md",
      lg: "text-base px-8 py-3 rounded-md",
    };
    
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Comp
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...props}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </Comp>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export { Button };