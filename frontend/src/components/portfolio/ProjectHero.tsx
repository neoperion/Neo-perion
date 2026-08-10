import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';
import LiquidEther from '@/components/LiquidEther';

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  return (
    <section className="parchment-surface relative flex min-h-[80vh] md:min-h-screen items-center overflow-hidden">
      {/* Ambient fluid */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <LiquidEther
          colors={["#5B3A1F", "#A6432A", "#B68A35"]}
          mouseForce={26}
          cursorSize={110}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.4}
          resolution={0.5}
          isBounce={false}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8 mt-20">
        <div className="grid items-center gap-x-12 gap-y-12 lg:grid-cols-12">
          
          {/* Headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="chapter-eyebrow !text-manuscript-copper">
                {project.industry}
              </span>
              <span className="text-manuscript-inkMuted/50 font-bold hidden sm:block">•</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-inkMuted font-bold">
                {project.category}
              </span>
            </motion.div>
            
            <h1 className="font-manuscript text-[clamp(44px,6vw,90px)] font-bold leading-[1.05] tracking-[-0.015em] text-manuscript-ink mb-10">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.82, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.title}
              </motion.span>
            </h1>
            
            <hr className="ink-rule--gold ink-rule-draw w-64" />
          </div>

          {/* Right support block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-5 pt-4 lg:pt-12"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-manuscript-ink/10 shadow-lg shadow-manuscript-ink/5 mb-8 relative bg-manuscript-parchmentWarm group">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-manuscript-rustDeep/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
            </div>

            <div className="flex gap-8 sm:gap-12 border-t border-manuscript-parchmentDeep pt-6">
              <div>
                <p className="text-manuscript-copper font-mono text-[10px] uppercase tracking-[0.2em] mb-1.5 font-bold">Duration</p>
                <p className="text-manuscript-ink font-semibold text-sm md:text-base">3-6 Months</p>
              </div>
              <div>
                <p className="text-manuscript-copper font-mono text-[10px] uppercase tracking-[0.2em] mb-1.5 font-bold">Role</p>
                <p className="text-manuscript-ink font-semibold text-sm md:text-base">End-to-end Engineering</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
