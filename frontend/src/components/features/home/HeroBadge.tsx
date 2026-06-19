import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroBadge: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neo-blue/10 border border-neo-blue/20 backdrop-blur-md mb-6"
    >
      <Sparkles className="h-4 w-4 text-neo-blue" />
      <span className="text-sm font-medium text-neo-blue">
        Neo Perion V2.0 Now Live
      </span>
    </motion.div>
  );
};
