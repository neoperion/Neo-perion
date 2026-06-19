import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'OpenAI', 'Anthropic', 'Google Cloud', 'AWS', 
  'Azure', 'Supabase', 'PostgreSQL', 'MongoDB', 
  'React', 'Next.js', 'Node.js', 'Python'
];

export const TechMarquee: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#050816]/50 backdrop-blur-sm overflow-hidden relative">
      {/* Gradient edges for the fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] gap-8">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex w-full justify-around items-center gap-12 px-6 group"
        >
          {/* Double the array to create a seamless infinite loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[120px] px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-neo-blue/50 hover:bg-neo-blue/10 cursor-pointer"
            >
              <span className="text-slate-300 font-medium tracking-wide group-hover:opacity-50 hover:!opacity-100 transition-opacity">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
