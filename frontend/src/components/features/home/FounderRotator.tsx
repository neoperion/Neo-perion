import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// PLACEHOLDER founder content — replace names, titles, and quotes with the
// real ones (photos already wired to your files in public/images).
const FOUNDERS = [
  {
    name: "Adhi Ganesh",
    title: "Co-founder & CTO",
    photo: "/images/adhi.png",
    quote:
      "We only take work we'd put our own name on — then we stay until it's live, stable, and scaling.",
  },
  {
    name: "Tamilselvan",
    title: "Co-founder & CEO",
    photo: "/images/tamilselvan.jpg",
    quote:
      "Clients hire us for senior judgment, not headcount. Every call is made by someone who has shipped before.",
  },
  {
    name: "Neo Perion",
    title: "Founding Engineer",
    photo: "/images/founder.jpg",
    quote:
      "Production from day one. No throwaway prototypes — what we build is exactly what you scale.",
  },
];

const INTERVAL = 5000;

export function FounderRotator() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((prev) => (prev + 1) % FOUNDERS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const founder = FOUNDERS[index];

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      {/* Photo — grounded on a soft panel, no harsh border */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#EEF1F7] to-[#E1E7F1]">
        <AnimatePresence>
          <motion.img
            key={founder.photo}
            src={founder.photo}
            alt={founder.name}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
        </AnimatePresence>
      </div>

      {/* Quote + attribution */}
      <div className="mt-6 min-h-[132px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <blockquote className="text-[18px] leading-relaxed text-ink">
              “{founder.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-ink">{founder.name}</span>
              <span className="text-muted2"> — {founder.title}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="mt-5 flex gap-2">
        {FOUNDERS.map((f, idx) => (
          <button
            key={f.name}
            onClick={() => setIndex(idx)}
            aria-label={`Show ${f.name}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === index ? "w-6 bg-brand" : "w-1.5 bg-hairline hover:bg-faint"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
