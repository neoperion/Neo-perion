import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  { title: 'Discover', description: 'Deep dive into your business goals, target audience, and technical requirements.', icon: <Search className="w-5 h-5" /> },
  { title: 'Design', description: 'Wireframing, prototyping, and finalizing the UX/UI architecture.', icon: <PenTool className="w-5 h-5" /> },
  { title: 'Develop', description: 'Agile engineering sprints focusing on scalable, secure code.', icon: <Code2 className="w-5 h-5" /> },
  { title: 'Deploy', description: 'Rigorous QA testing followed by production deployment.', icon: <Rocket className="w-5 h-5" /> },
  { title: 'Scale', description: 'Continuous monitoring, optimization, and feature iteration.', icon: <TrendingUp className="w-5 h-5" /> }
];

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Our Proven Process
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A systematic approach designed to mitigate risk and ensure high-quality delivery.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Animated SVG Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-neo-blue md:-translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} hidden md:block`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-[#050816] border-2 border-neo-blue flex items-center justify-center text-neo-blue shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10">
                    {step.icon}
                  </div>
                  
                  <div className="flex-1 md:hidden">
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} hidden md:block`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
