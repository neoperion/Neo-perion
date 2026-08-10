import React from 'react';
import { motion } from 'framer-motion';

const lessons = [
  {
    number: '01',
    title: 'Context changes the answer.',
    description: 'The right technology depends on the problem, the people using it, the workflow around it and the business behind it.',
  },
  {
    number: '02',
    title: 'A prototype is not a product.',
    description: 'Getting something to work is only the beginning. Reliability, usability, deployment and maintenance are what turn an idea into a product.',
  },
  {
    number: '03',
    title: 'AI needs judgment.',
    description: "We don't use AI because it is fashionable. We use it where intelligence can meaningfully improve the system.",
  },
  {
    number: '04',
    title: 'Shipping creates clarity.',
    description: 'You learn more from putting a system into the real world than from endlessly discussing what it might become.',
  }
];

export function AboutLessons() {
  return (
    <section className="py-16 md:py-24 parchment-surface border-b border-manuscript-parchmentDeep">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="mb-12 md:mb-20 max-w-2xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
            03 · WHAT WE LEARNED
          </p>
          <h2 className="heading-manuscript text-4xl md:text-5xl leading-tight text-manuscript-ink">
            Building taught us<br/>
            <span className="italic text-manuscript-rustDeep">what technology alone can't.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {lessons.map((lesson, idx) => (
            <motion.div
              key={lesson.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="manuscript-card p-6 md:p-10 relative overflow-hidden group w-full box-border"
            >
              {/* Decorative faint number in background */}
              <div className="absolute -bottom-8 -right-4 font-display font-bold text-[120px] leading-none text-manuscript-copper/5 select-none transition-transform duration-500 group-hover:scale-110">
                {lesson.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 border border-manuscript-copper/30 rounded-full flex items-center justify-center mb-8">
                  <span className="font-mono text-[12px] font-bold text-manuscript-copper">{lesson.number}</span>
                </div>
                
                <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">
                  {lesson.title}
                </h3>
                <p className="font-manuscriptBody text-[16px] leading-relaxed text-manuscript-inkSoft">
                  {lesson.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
