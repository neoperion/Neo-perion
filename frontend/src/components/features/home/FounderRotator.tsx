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
      className="overflow-hidden border border-hairline bg-paper shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <div className="grid sm:grid-cols-2">
        {/* Photo — cropped to fill, grounded on a soft tinted panel */}
        <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-b from-[#121113] to-[#121113] sm:min-h-[380px]">
          <AnimatePresence>
            <motion.img
              key={founder.photo}
              src={founder.photo}
              alt={founder.name}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </AnimatePresence>
        </div>

        {/* Quote side */}
        <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-1 flex-col"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="text-brand/25"
              >
                <path
                  d="M10 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3H6m12-11h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3h-2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <blockquote className="mt-4 text-[19px] font-medium leading-relaxed text-ink md:text-[21px]">
                {founder.quote}
              </blockquote>
              <figcaption className="mt-6">
                <div className="text-[15px] font-semibold text-ink">{founder.name}</div>
                <div className="text-sm text-muted2">{founder.title}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex gap-2">
            {FOUNDERS.map((f, idx) => (
              <button
                key={f.name}
                onClick={() => setIndex(idx)}
                aria-label={`Show ${f.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === index ? "w-7 bg-brand" : "w-1.5 bg-hairline hover:bg-faint"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
