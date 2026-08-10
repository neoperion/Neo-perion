import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const offerings = [
  {
    title: 'Intelligent Systems',
    description: 'AI assistants, agents, automation and knowledge systems designed around real workflows.',
  },
  {
    title: 'Digital Products',
    description: 'Web platforms, SaaS products and business applications built from idea through production.',
  },
  {
    title: 'Data & Intelligence',
    description: 'Data systems and analytical products that turn information into useful decisions.',
  },
  {
    title: 'Product Infrastructure',
    description: 'Cloud-native foundations, integrations and engineering systems designed to support growth.',
  }
];

export function AboutOfferings() {
  return (
    <section className="py-16 md:py-24 parchment-surface border-b border-manuscript-parchmentDeep">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
            05 · WHAT WE BUILD
          </p>
          <h2 className="heading-manuscript text-4xl md:text-5xl leading-tight text-manuscript-ink">
            Different technologies.<br/>
            <span className="italic text-manuscript-rustDeep">One engineering mindset.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((offering, idx) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="manuscript-card p-6 md:p-10 w-full box-border"
            >
              <h3 className="heading-manuscript text-2xl mb-3 text-manuscript-ink">
                {offering.title}
              </h3>
              <p className="font-manuscriptBody text-[15px] leading-relaxed text-manuscript-inkSoft">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/services"
            className="group flex items-center gap-2 font-manuscriptBody font-semibold text-[15px] text-manuscript-copper transition-colors hover:text-manuscript-rustDeep"
          >
            See everything we build
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
