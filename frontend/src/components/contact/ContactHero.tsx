import { motion } from 'framer-motion';

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] pt-32 pb-20 lg:pt-40 lg:pb-28">

      {/* Orange radial glow — bottom centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 110%, rgba(247,126,13,0.13) 0%, transparent 70%), radial-gradient(40% 35% at 80% 0%, rgba(247,126,13,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Orange top frame line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-[#F77E0D]"
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(247,126,13,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,126,13,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#F77E0D]"
        >
          Contact Us
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.90] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
          >
            Let's build something
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, delay: 0.60, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.90] tracking-tight text-[#F77E0D]"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
          >
            extraordinary.
          </motion.h1>
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.82 }}
          className="text-[15px] leading-relaxed text-neutral-400 max-w-xl mx-auto"
        >
          Whether you need a full product team or an AI automation strategy, we're ready to help.
          Fill out the form or book a call directly.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 flex items-center justify-center gap-10 md:gap-16"
        >
          {[
            { num: '< 24h',  label: 'Response time'  },
            { num: '50+',    label: 'Projects shipped' },
            { num: '98%',    label: 'Client satisfaction' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[1.5rem] font-black leading-none text-white mb-1">{s.num}</div>
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
