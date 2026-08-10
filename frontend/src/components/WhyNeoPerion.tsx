import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PrincipleId = "context" | "product" | "judgement" | "people" | "continuity";

interface Principle {
  id: PrincipleId;
  number: string;
  title: string;
  description: string;
  supporting: string;
  image: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: "context",
    number: "01",
    title: "Context before technology.",
    description: "We understand the business, people, workflows, data and constraints before deciding what to build. Technology is just the tool. If you don't understand the domain deeply, you build toys instead of production systems.",
    supporting: "Context",
    image: "/images/3d_principle_context.png",
  },
  {
    id: "product",
    number: "02",
    title: "From idea to working product.",
    description: "We take ideas from discovery and architecture through engineering, design, AI, deployment and beyond. Complete ownership. We don't just hand off code; we launch businesses.",
    supporting: "Product",
    image: "/images/3d_principle_product.png",
  },
  {
    id: "judgement",
    number: "03",
    title: "AI when it earns its place.",
    description: "We use AI where it improves the outcome — and don't force it where it doesn't. Restraint is as important as capability. Predictability matters in production.",
    supporting: "Judgement",
    image: "/images/3d_principle_judgement.png",
  },
  {
    id: "people",
    number: "04",
    title: "Close to the builders.",
    description: "The people building the system stay close to the problem and the decisions. No middle layers. No silos. We communicate directly to move fast.",
    supporting: "People",
    image: "/images/3d_principle_people.png",
  },
  {
    id: "continuity",
    number: "05",
    title: "Shipping isn't the end.",
    description: "Real products evolve. We stay to learn, improve and scale with you long after the initial launch. We instrument, we observe, and we iterate.",
    supporting: "Continuity",
    image: "/images/3d_principle_continuity.png",
  },
];

export const WhyNeoPerion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-us" className="parchment-surface relative py-24 md:py-32 bg-manuscript-parchmentDark border-t border-b border-manuscriptAlpha-ink-15 overflow-hidden">
      {/* ── Background Noise ────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
              THE AINCURU METHOD
            </p>
            <h2 className="heading-manuscript text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-manuscript-ink max-w-2xl">
              The way we build matters.
            </h2>
            <p className="font-manuscriptBody text-[18px] md:text-[20px] leading-relaxed text-manuscript-inkSoft max-w-xl">
              Five decisions that shape every engagement and product we touch.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left: Interactive List */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            {PRINCIPLES.map((principle, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={principle.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative text-left py-4 md:py-5 px-4 md:px-6 transition-all duration-500 rounded-xl border ${
                    isActive 
                      ? "bg-manuscript-parchmentLight border-manuscriptAlpha-ink-15 shadow-[0_4px_20px_-4px_rgba(31,26,20,0.08)]" 
                      : "border-transparent hover:bg-manuscript-parchmentLight/50"
                  }`}
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <span className={`font-manuscript text-2xl md:text-3xl transition-colors duration-500 ${
                      isActive ? "text-manuscript-copper" : "text-manuscript-ink/30 group-hover:text-manuscript-ink/60"
                    }`}>
                      {principle.number}
                    </span>
                    <h3 className={`heading-manuscript text-xl md:text-3xl transition-colors duration-500 ${
                      isActive ? "text-manuscript-ink" : "text-manuscript-inkSoft group-hover:text-manuscript-ink"
                    }`}>
                      {principle.title}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 md:ml-[68px]">
                          <p className="font-manuscriptBody text-[16px] md:text-[18px] leading-[1.8] text-manuscript-inkSoft mb-4">
                            {principle.description}
                          </p>
                          
                          {/* Mobile-only image inside accordion */}
                          <div className="lg:hidden relative aspect-video w-full rounded-lg bg-[#1a1714] border border-manuscriptAlpha-ink-15 overflow-hidden shadow-md mt-2 mb-2">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1714] mix-blend-multiply z-10 pointer-events-none" />
                            <img 
                              src={principle.image} 
                              alt={principle.title}
                              className="w-full h-full object-cover filter grayscale-[20%] sepia-[15%] opacity-90"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Right: Sticky Image Display (Desktop Only) */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 hidden lg:block">
            <div className="relative aspect-square w-full rounded-sm bg-[#1a1714] border border-manuscriptAlpha-ink-15 shadow-[0_20px_40px_-15px_rgba(31,26,20,0.2)] overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-manuscript-copper/50 z-20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-manuscript-copper/50 z-20" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1714] mix-blend-multiply z-10 pointer-events-none" />
                  <img 
                    src={PRINCIPLES[activeIndex].image} 
                    alt={PRINCIPLES[activeIndex].title}
                    className="w-full h-full object-cover filter grayscale-[20%] sepia-[15%] opacity-90"
                  />
                  
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="backdrop-blur-md bg-manuscript-parchmentLight/90 border border-manuscriptAlpha-ink-15 p-6 rounded-sm inline-block shadow-lg">
                      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-manuscript-copper mb-2">
                        Principle · {PRINCIPLES[activeIndex].supporting}
                      </p>
                      <p className="heading-manuscript text-xl text-manuscript-ink m-0">
                        {PRINCIPLES[activeIndex].title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
