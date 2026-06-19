import React from 'react';
import { motion } from 'framer-motion';
import { ServicesSection } from '@/components/features/home/ServicesSection';
import { TechnologyExpertise } from '@/components/features/home/TechnologyExpertise';
import { ProcessTimeline } from '@/components/features/home/ProcessTimeline';
import { CtaSection } from '@/components/features/home/CtaSection';
import { servicesData } from '@/data/servicesData';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg">
            Common questions about our services, process, and technical capabilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {servicesData.map((service, i) => (
            <div key={i} className="border border-white/10 rounded-2xl bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-2">{service.faqs[0].question}</h3>
              <p className="text-slate-400">{service.faqs[0].answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServicesHub: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#050816]">
      {/* Services Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050816] to-[#050816] z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-neo-highlight">Expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            We deliver enterprise-grade digital products, scalable SaaS platforms, and intelligent AI automation systems.
          </motion.p>
        </div>
      </section>

      {/* Detailed Offerings */}
      <ServicesSection />

      {/* Technology Stack */}
      <TechnologyExpertise />

      {/* Delivery Process */}
      <ProcessTimeline />

      {/* FAQs */}
      <FaqSection />

      {/* CTA */}
      <CtaSection />
    </main>
  );
};
