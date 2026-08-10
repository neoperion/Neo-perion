import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PortfolioCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-manuscript-rustDeep relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-manuscript-gold/10 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-manuscript-parchmentLight mb-4 md:mb-6">
            Ready to Build Something Similar?
          </h2>
          <p className="text-base md:text-xl text-manuscript-parchment/90 mb-8 md:mb-10">
            Let's turn your vision into an award-winning digital reality. Our experts are ready to architect your next big leap.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-manuscript-gold text-manuscript-ink font-bold hover:bg-manuscript-gold/90 transition-all shadow-lg shadow-black/10 group"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/company/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-manuscript-gold/30 text-manuscript-parchmentLight font-bold hover:bg-manuscript-gold/10 transition-colors"
            >
              Talk to Experts
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
