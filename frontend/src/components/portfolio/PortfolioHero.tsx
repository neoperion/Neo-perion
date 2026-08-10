import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import LiquidEther from '@/components/LiquidEther';

export const PortfolioHero: React.FC = () => {
  return (
    <section className="parchment-surface relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient fluid — recoloured to muted walnut/rust/gold manuscript tones */}
      <div className="absolute inset-0 z-0 opacity-60">
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

      {/* Fade to parchment at the very bottom for a clean section transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-manuscript-parchment" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-x-12 gap-y-12 lg:grid-cols-12 mt-20">
          
          {/* Headline */}
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="chapter-eyebrow mb-5"
            >
              Selected Work
            </motion.p>
            <h1 className="font-manuscript text-[clamp(54px,8vw,110px)] font-bold leading-[0.95] tracking-[-0.015em] text-manuscript-ink">
              <div className="overflow-hidden mb-1">
                <motion.span 
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.82, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Work that
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block italic text-manuscript-rustDeep"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.82, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  Ships.
                </motion.span>
              </div>
            </h1>
            <hr className="ink-rule--gold ink-rule-draw mt-10 w-64" />
          </div>

          {/* Right support block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-5 pt-4 lg:pt-12"
          >
            <p className="max-w-sm font-manuscriptBody text-[16px] leading-relaxed text-manuscript-inkMuted mb-8">
              AI, SaaS &amp; enterprise platforms — senior engineers, production-grade delivery.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-12">
              <a
                href="#featured"
                className="btn-manuscript-primary group"
              >
                View Projects
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                to="/contact"
                className="font-manuscriptBody text-[14px] font-semibold text-manuscript-copper transition-colors hover:text-manuscript-rustDeep"
              >
                Start a project →
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 sm:gap-12 border-t border-manuscript-parchmentDeep pt-8">
              {[
                { num: '10+', label: 'Projects' },
                { num: '6+',  label: 'Industries' },
                { num: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-manuscript text-3xl font-bold text-manuscript-ink mb-2">
                    {stat.num}
                  </div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-manuscript-copperMuted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
