import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  hoverGlow?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, glowColor = 'rgba(247,126,13,0.4)', hoverGlow = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverGlow ? { y: -4, boxShadow: `0 20px 40px ${glowColor.replace(/[\d.]+\)$/g, '0.1)')}` } : {}}
        className={cn(
          'relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300',
          hoverGlow && 'hover:border-neo-blue/40',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
