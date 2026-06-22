import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, BarChart3, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProcessStep {
  step: string; title: string; description: string; icon: LucideIcon; outcome?: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  { step: '01', title: 'Discover', description: 'Understand goals, users, and constraints. Map technical requirements and define system architecture before writing a single line of code.', icon: Search, outcome: 'Requirements locked' },
  { step: '02', title: 'Design', description: 'Architect systems and craft experiences. Create scalable blueprints with performance, security, and maintainability built in.', icon: PenTool, outcome: 'System blueprint ready' },
  { step: '03', title: 'Develop', description: 'Ship code with rigorous quality. Iterative development sprints with continuous integration and automated testing.', icon: Code2, outcome: 'Working software delivered' },
  { step: '04', title: 'Deploy', description: 'Launch with confidence. Seamless CI/CD deployment with infrastructure scaling and monitoring.', icon: Rocket, outcome: 'Production live' },
  { step: '05', title: 'Scale', description: 'Iterate based on real-world signals. Optimize, grow, and evolve your product with data-driven decisions.', icon: BarChart3, outcome: 'Outcome shipped' },
];

export interface ProcessJourneyProps {
  eyebrow?: string; title?: string; subtitle?: string; steps?: ProcessStep[];
}

function ProcessStepItem({ s, index, totalSteps, scrollYProgress }: { s: ProcessStep, index: number, totalSteps: number, scrollYProgress: MotionValue<number> }) {
  const Icon = s.icon;
  // Define active threshold based on index
  const threshold = index / (totalSteps - 1);
  
  // Map scroll progress to a boolean-like value (0 or 1) for the sonar ripple
  const isActive = useTransform(scrollYProgress, 
    [Math.max(0, threshold - 0.1), threshold], 
    [0, 1]
  );
  
  const scaleTransform = useTransform(isActive, [0, 1], [0.5, 1.5]);
  const bgTransform = useTransform(isActive, [0, 1], ["#e2e8f0", "#2563FF"]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: false, margin: "-20%" }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="relative pl-10"
    >
      {/* Node marker & Sonar Ripple */}
      <div className="absolute left-[-6px] top-1.5 flex items-center justify-center">
        <motion.div 
          className="absolute h-8 w-8 rounded-full bg-neo-blue/20"
          style={{ opacity: isActive, scale: scaleTransform }}
        />
        <motion.div 
          className="absolute h-4 w-4 rounded-full border-2 border-white bg-neo-blue z-10 shadow-sm transition-colors duration-300"
          style={{ backgroundColor: bgTransform }}
        />
      </div>

      <div className="relative z-10 flex flex-col pt-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-8 w-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-neo-blue">
            <Icon size={16} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[12px] font-bold tracking-[0.1em] text-neo-blue">{s.step}</span>
            <h3 className="text-[20px] font-bold text-slate-900 tracking-tight font-display leading-none">{s.title}</h3>
          </div>
        </div>
        
        <p className="text-[15px] text-slate-600 mt-1 leading-relaxed font-medium bg-slate-50/80 backdrop-blur-sm rounded-lg pr-4">{s.description}</p>
        
        {s.outcome && (
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-700 tracking-[0.05em] uppercase">{s.outcome}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ProcessJourney({ eyebrow = 'Our Process', title = 'How we build.', subtitle = 'Five steps. One outcome.', steps = DEFAULT_STEPS }: ProcessJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative w-full py-20 px-mobile-base bg-slate-50 overflow-hidden border-t border-slate-900/5" aria-labelledby="process-heading">
      <div className="mb-14 relative z-20">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-2">{eyebrow}</p>
        <h2 id="process-heading" className="text-[clamp(28px,7vw,36px)] font-bold text-slate-900 tracking-tight font-display">{title}</h2>
        <p className="text-sm text-slate-500 mt-2 font-medium">{subtitle}</p>
      </div>

      <div className="relative pl-[30px]">
        {/* Faint background line */}
        <div className="absolute left-[30px] top-4 bottom-10 w-[2px] bg-slate-200 rounded-full" />
        
        {/* Animated Drawing Line */}
        <motion.div 
          className="absolute left-[30px] top-4 bottom-10 w-[2px] bg-gradient-to-b from-neo-blue to-cyan-400 rounded-full origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        
        <div className="flex flex-col gap-14">
          {steps.map((s, i) => (
            <ProcessStepItem 
              key={s.step}
              s={s}
              index={i}
              totalSteps={steps.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
