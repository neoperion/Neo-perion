import { motion } from 'framer-motion';

const timeline = [
  { year: '2020', title: 'The Genesis', desc: 'Started as a specialized consulting firm helping enterprises modernize legacy systems.' },
  { year: '2022', title: 'Shift to AI', desc: 'Recognized the paradigm shift and pivoted completely to AI-first architectures.' },
  { year: '2024', title: 'Neo Perion', desc: 'Rebranded and launched our proprietary agentic orchestration framework.' }
];

export function MobileAboutTimeline() {
  return (
    <section className="bg-[#030B1D] py-16 px-mobile-base">
      <div className="mb-12 text-center">
        <h2 className="text-display-md text-white tracking-tight">Our Journey.</h2>
      </div>

      <div className="relative pl-6 space-y-10">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-neo-highlight via-neo-blue to-transparent" />
        
        {timeline.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[32px] top-1 h-5 w-5 rounded-full bg-[#030B1D] border-4 border-neo-highlight" />
            <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-neo-highlight mb-1">{item.year}</div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
