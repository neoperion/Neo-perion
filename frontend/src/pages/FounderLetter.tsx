import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";
import { LetterCTA } from "@/components/about/LetterCTA";
import { MobileGate, MobileShell } from "@/components/mobile";
import { motion } from 'framer-motion';
import { SITE_URL } from "@/lib/seo";

export default function FounderLetter() {
  const founderLetterSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Founder's Letter - AINCURU",
    "description": "A letter from our CEO, Vasantharaj S, on why we built AINCURU to focus on premium product engineering and AI-first solutions.",
    "mainEntity": {
      "@type": "CreativeWork",
      "author": {
        "@type": "Person",
        "name": "Vasantharaj S"
      },
      "headline": "Why we built AINCURU.",
      "publisher": {
        "@type": "Organization",
        "name": "AINCURU LLP",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.aincuru.com/images/np-logo.png"
        }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
      <div className="manuscript-root min-h-[auto]">
      
        <SEO 
          {...seoConfig.founderLetter}
          jsonLd={founderLetterSchema}
        />

        <Header />

        <main className="relative pt-36 pb-24 overflow-hidden parchment-surface">
          {/* Subtle manuscript grid lines — very faint */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(91,58,31,0.05) 31px, rgba(91,58,31,0.05) 32px)',
              backgroundSize: '100% 32px',
            }}
          />
          {/* Copper warm glow — top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-manuscript-copper/4 blur-[120px] rounded-full pointer-events-none" />

          <motion.article
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto px-8 relative z-10"
          >
            {/* Letter header */}
            <motion.header variants={blockVariants} className="mb-14 text-center">
              {/* Archival label */}
              <p className="chapter-eyebrow mb-6">Founder's Letter</p>

              {/* Copper divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-manuscript-copper/30" />
                <span className="font-mono text-[8px] tracking-[0.5em] text-manuscript-copperMuted uppercase">Est. 2024</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-manuscript-copper/30" />
              </div>

              <h1 className="heading-manuscript text-4xl lg:text-5xl xl:text-6xl mb-10 leading-tight">
                Why we built AINCURU.
              </h1>

              {/* Author line */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src="/images/founder.jpg"
                  alt="Vasantharaj S"
                  className="w-12 h-12 rounded-full border border-manuscript-parchmentDeep object-cover"
                />
                <div className="text-left">
                  <p className="text-manuscript-ink font-semibold font-manuscriptBody">Vasantharaj S</p>
                  <p className="text-sm text-manuscript-copper font-manuscriptBody tracking-wide">CEO & Founder</p>
                </div>
              </div>
            </motion.header>

            {/* Letter body */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="prose-manuscript prose prose-lg md:prose-xl max-w-none"
            >
              <motion.p
                variants={blockVariants}
                className="first-letter:font-manuscript first-letter:text-7xl first-letter:font-bold first-letter:text-manuscript-copper first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1"
              >
                The technology industry is broken in a very specific way. Over the last decade, we watched countless companies pour millions of dollars into digital transformation initiatives, only to end up with fragmented tools, unscalable architectures, and massive technical debt.
              </motion.p>

              <motion.p variants={blockVariants}>
                Before starting AINCURU, Adhi, Tamilselvan, and I spent years working in traditional agency environments and enterprise IT. We saw the same pattern repeat everywhere: agencies were incentivized to deliver projects quickly, ship the MVP, and move on. There was rarely any consideration for what happens at scale, under load, or when the business model pivots.
              </motion.p>

              {/* Chapter break */}
              <motion.div variants={blockVariants} className="my-12">
                <hr className="ink-rule--gold" />
              </motion.div>

              <motion.h2
                variants={blockVariants}
                className="heading-manuscript text-2xl md:text-3xl mt-4 mb-6"
              >
                The shift to Product Engineering
              </motion.h2>

              <motion.p variants={blockVariants}>
                We realized that the traditional "software agency" model doesn't work for modern businesses. You don't need an agency that just writes code to specifications; you need a product engineering partner.
              </motion.p>

              <motion.p variants={blockVariants}>
                That realization was the genesis of AINCURU. We built this company on a simple premise: <strong>Stability over hype, and engineering over outsourcing.</strong> We don't just build apps; we build intelligent, scalable ecosystems powered by AI.
              </motion.p>

              {/* Pull quote */}
              <motion.blockquote
                variants={blockVariants}
                className="pull-quote my-10"
              >
                "We treat your product as our own. If an architecture won't scale to a million users, we won't recommend it. If a feature adds complexity without value, we'll push back."
              </motion.blockquote>

              {/* Chapter break */}
              <motion.div variants={blockVariants} className="my-12">
                <hr className="ink-rule--gold" />
              </motion.div>

              <motion.h2
                variants={blockVariants}
                className="heading-manuscript text-2xl md:text-3xl mt-4 mb-6"
              >
                An AI-First Future
              </motion.h2>

              <motion.p variants={blockVariants}>
                We are currently in the middle of the largest platform shift since the internet itself. Artificial Intelligence is no longer just a feature; it is the foundation of modern software. We integrated AI-first thinking into our core engineering practices because we believe that software which isn't intelligent by default will be obsolete within five years.
              </motion.p>

              <motion.p variants={blockVariants}>
                But integrating AI shouldn't mean adding a fragile API wrapper. It requires robust data pipelines, secure enterprise architectures, and deeply integrated intelligence that actually solves user problems.
              </motion.p>

              <motion.p variants={blockVariants}>
                We built AINCURU to be the partner we wished we had: technical, transparent, and deeply invested in the long-term success of the products we build.
              </motion.p>

              <motion.p variants={blockVariants} className="mt-10">
                If you're looking for a team to just write code, there are thousands of agencies out there. But if you're looking for a partner to engineer a product that will define your industry, we should talk.
              </motion.p>

              {/* CTA */}
              <motion.div variants={blockVariants}>
                <LetterCTA theme="light" />
              </motion.div>

              {/* Signature */}
              <motion.div
                variants={blockVariants}
                className="mt-16 pt-8 border-t border-manuscript-parchmentDeep flex items-start justify-between font-manuscriptBody"
              >
                <div>
                  <img
                    src="/images/np-logo.png"
                    alt="AINCURU"
                    className="h-9 mb-5"
                    style={{ filter: 'sepia(0.4) contrast(0.8) brightness(0.6)' }}
                  />
                  <p className="text-manuscript-ink font-bold text-xl font-manuscript">Vasantharaj S</p>
                  <p className="text-manuscript-copper text-sm tracking-wide mt-0.5">CEO & Founder, AINCURU</p>
                </div>
                <div className="text-right text-manuscript-inkMuted text-sm">
                  <p className="font-semibold text-manuscript-inkSoft mb-1">Co-Founders:</p>
                  <p>Adhi Ganesh K (COO)</p>
                  <p>Tamilselvan (CTO)</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.article>
        </main>

        <Footer />
      </div>
  );
}


