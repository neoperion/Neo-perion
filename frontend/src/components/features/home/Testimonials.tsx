import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Neo Perion didn't just build what we asked for; they architected a system that positioned us for our Series B. Their technical depth in AI is unmatched.",
    name: "Sarah Jenkins",
    role: "CTO, FinTech Innovate",
    company: "FinTech Innovate"
  },
  {
    quote: "The speed at which they delivered our HIPAA-compliant portal was staggering. True enterprise quality without the typical enterprise bloat.",
    name: "Dr. Marcus Chen",
    role: "Founder, HealthSync AI",
    company: "HealthSync AI"
  },
  {
    quote: "Fractional CTO support that actually felt like having a co-founder. They guided us through complex architecture decisions that saved us months.",
    name: "Elena Rodriguez",
    role: "CEO, EduScale",
    company: "EduScale"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] to-[#0a0f25] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-neo-blue/20 mx-auto mb-8" />
          
          <div 
            className="relative h-64 md:h-48"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="text-xl md:text-3xl font-display font-medium text-white leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-bold text-neo-blue">{testimonials[currentIndex].name}</h4>
                  <p className="text-slate-400">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-neo-blue w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
