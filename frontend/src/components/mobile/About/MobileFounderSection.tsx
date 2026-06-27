import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const founders = [
  { name: 'Vasantharaj S', role: 'CEO & Founder', img: '/images/founder.jpg' },
  { name: 'Adhi Ganesh K', role: 'COO & Co-Founder', img: '/images/adhi.png' },
  { name: 'Tamilselvan', role: 'CTO & Co-Founder', img: '/images/tamilselvan.jpg' }
];

export function MobileFounderSection() {
  return (
    <section className="bg-[#030B1D] py-16 px-mobile-base border-t border-white/[0.04]">
      <div className="mb-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-3">Leadership</p>
        <h2 className="text-display-md text-white tracking-tight">The people behind the engineering.</h2>
      </div>

      <div className="space-y-6">
        {founders.map((founder, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-glass-1"
          >
            <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-white/[0.1] shadow-glow">
              <img src={founder.img} alt={founder.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white">{founder.name}</h3>
            <p className="text-neo-highlight font-medium mt-1">{founder.role}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-10 p-6 rounded-3xl bg-gradient-to-br from-neo-blue/20 to-neo-highlight/10 border border-neo-highlight/30 text-center"
      >
        <h3 className="font-editorial text-2xl text-white leading-snug mb-6">
          <span className="text-neo-highlight text-4xl mr-1">"</span>
          We built Neo Perion because every great product deserves a partner who thinks in systems, not just features.
        </h3>
        <Link
          to="/company/founder-letter"
          className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 rounded-xl bg-neutral-900 text-white text-[13px] font-bold transition-transform active:scale-95"
        >
          Read the Founder's Letter <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
