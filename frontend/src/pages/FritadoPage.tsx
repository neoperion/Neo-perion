import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { fritadoConfig } from "@/data/fritadoConfig";
import { trackEvent } from "@/shared/analytics";

import { FritadoProductVisual } from "@/components/fritado/FritadoProductVisual";
import { FritadoStickyNav } from "@/components/fritado/FritadoStickyNav";
import { FritadoWorkflow } from "@/components/fritado/FritadoWorkflow";
import { FritadoModules } from "@/components/fritado/FritadoModules";
import { FritadoExperienceTabs } from "@/components/fritado/FritadoExperienceTabs";
import { FritadoArchitecture } from "@/components/fritado/FritadoArchitecture";
import { FritadoHighlights } from "@/components/fritado/FritadoHighlights";
import { FritadoFinalCTA } from "@/components/fritado/FritadoFinalCTA";

export default function FritadoPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Global Scroll Progress (2px orange indicator at top of page)
  const { scrollY, scrollYProgress } = useScroll();

  // Subtle Hero Parallax: 0 -> 40px background shift, 0 -> 14px content shift (desktop only)
  const rawBgY = useTransform(scrollY, [0, 800], [0, 42]);
  const rawContentY = useTransform(scrollY, [0, 800], [0, 14]);
  const heroBgY = isDesktop ? rawBgY : 0;
  const heroContentY = isDesktop ? rawContentY : 0;

  useEffect(() => {
    trackEvent("fritado_page_view", {
      product: "fritado",
      product_status: fritadoConfig.status,
      access_model: "free-trial",
    });
  }, []);

  const handlePrimaryCta = (source: string) => {
    trackEvent("fritado_primary_cta_click", {
      product: "fritado",
      source_section: source,
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fritado by AINCURU",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "AI-powered B2B growth engine for discovering relevant accounts, understanding business signals, personalizing engagement, and routing qualified opportunities.",
    "url": "https://www.aincuru.com/products/fritado",
    "author": {
      "@type": "Organization",
      "name": "AINCURU",
      "url": "https://www.aincuru.com"
    }
  };

  return (
    <div className="manuscript-root min-h-screen parchment-surface text-manuscript-ink selection:bg-manuscript-copper selection:text-white antialiased">
      {/* Search Engine Optimization & Structured Data */}
      <SEO
        title="Fritado by AINCURU | AI-Powered B2B Growth Engine"
        description="Fritado is an enterprise AI-powered B2B growth engine by AINCURU. Discover the right prospects, understand context, engage across channels, and turn conversations into qualified opportunities."
        url="https://www.aincuru.com/products/fritado"
        ogImage="/images/fritado-hero.jpg"
        jsonLd={structuredData}
      />

      {/* Global 2px AINCURU Copper Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#A84A28] z-50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Global AINCURU Header with dynamic hero logo transition */}
      <Header 
        theme="manuscript" 
        heroLogo="/images/aincuru-hero-logo.png" 
        heroElementId="fritado-hero" 
      />

      <main className="relative">
        {/* ============================================================
            01 HERO & HERO PRODUCT VISUAL (SECTIONS 02 & 04)
        ============================================================ */}
        <section 
          id="fritado-hero"
          className="relative w-full overflow-hidden bg-[#07080A] text-white"
          aria-labelledby="fritado-hero-heading"
        >
          {/* Full Viewport-Width Background Image with restrained scale motion + subtle desktop parallax */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none overflow-hidden">
            <motion.img
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.025 }}
              style={{ y: heroBgY }}
              transition={{ scale: { duration: 10, ease: "easeOut" } }}
              src="/images/fritado-hero.jpg"
              alt="Fritado enterprise sales intelligence and connected digital growth environment"
              className="w-full h-full object-cover object-[82%_center] sm:object-[78%_center] lg:object-[82%_center] opacity-95 transition-opacity duration-1000 ease-out will-change-transform"
              loading="eager"
              {...({ fetchpriority: "high" } as any)}
            />

            {/* Master Enterprise Dark Gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/95 via-35% md:via-42% lg:via-[#07080A]/85 lg:via-48% to-transparent"
              aria-hidden="true" 
            />

            {/* Additional subtle left-side density to guarantee contrast */}
            <div 
              className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#07080A] via-[#07080A]/80 to-transparent"
              aria-hidden="true"
            />

            {/* Mobile vertical gradient: ensures text readability on smaller stacked screens */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/90 to-[#07080A]/40 md:hidden"
              aria-hidden="true"
            />

            {/* Top edge darkening for seamless fixed header integration */}
            <div 
              className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#07080A]/90 via-[#07080A]/50 to-transparent"
              aria-hidden="true"
            />

            {/* Bottom edge subtle vignette transition */}
            <div 
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Hero Content Container with subtle desktop depth parallax */}
          <motion.div 
            style={{ y: heroContentY }}
            className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
          >
            <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
              {/* Top Content: Eyebrow Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-white/70 uppercase select-none"
              >
                <span>PRODUCTS &amp; PLATFORMS</span>
                <span className="text-white/30">/</span>
                <span className="text-[#A84A28] font-bold">FRITADO™</span>
              </motion.div>

              {/* Thin Editorial Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-lg h-px bg-white/15 my-3.5 sm:my-5 origin-left"
              />

              {/* Main Headline with Brand Color */}
              <motion.h1 
                id="fritado-hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] !text-[#A84A28]"
                style={{ color: "#A84A28" }}
              >
                Fritado
              </motion.h1>

              {/* Secondary Headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-lg sm:text-2xl lg:text-[1.75rem] font-medium tracking-tight text-white/90 mt-2 sm:mt-3 leading-snug"
              >
                AI-powered B2B growth engine
              </motion.p>

              {/* Supporting Statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-sm sm:text-base lg:text-[1.0625rem] text-white/75 font-normal leading-relaxed mt-3.5 sm:mt-5 max-w-xl"
              >
                Discover the right prospects, understand their context, engage them across channels, and turn conversations into qualified opportunities.
              </motion.p>

              {/* CTA Row with Physical Press Feedback */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
              >
                {/* Primary CTA */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => handlePrimaryCta("hero_primary")}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md font-sans font-semibold text-sm tracking-wide bg-[#A84A28] text-white hover:bg-[#8F3A1D] transition-colors duration-150 shadow-md group focus:outline-none focus:ring-2 focus:ring-[#A84A28] focus:ring-offset-2 focus:ring-offset-[#07080A] select-none"
                >
                  <span>START 7-DAY FREE TRIAL</span>
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => handlePrimaryCta("hero_secondary")}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md font-sans font-semibold text-sm tracking-wide border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/35 transition-colors duration-150 group focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#07080A] select-none"
                >
                  <span>VISIT FRITADO</span>
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1 text-white/70 group-hover:text-white" />
                </motion.button>
              </motion.div>

              {/* Supporting Microcopy below CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.56 }}
                className="mt-3.5 flex items-center gap-2 text-xs text-white/55 font-normal"
              >
                <span>7-day free trial</span>
                <span className="text-white/30">·</span>
                <span>No credit card required*</span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ============================================================
            01.5: ENTERPRISE CONTROL SURFACE (SECTION 04) - AINCURU GLOBAL THEME
        ============================================================ */}
        <section 
          id="control-surface"
          className="relative w-full parchment-surface bg-manuscript-parchment py-12 sm:py-16 lg:py-20 border-b border-manuscriptAlpha-ink-15 text-manuscript-ink scroll-mt-24"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 max-w-2xl"
            >
              <div className="flex items-center gap-2 text-xs font-sans mb-2.5">
                <span className="w-2 h-2 rounded-full bg-manuscript-copper" />
                <span className="uppercase tracking-wider font-bold text-manuscript-copper">
                  LIVE PLATFORM PREVIEW
                </span>
                <span className="text-manuscript-inkMuted/40">/</span>
                <span className="text-manuscript-inkMuted uppercase tracking-wider font-semibold text-[11px]">
                  INTERACTIVE SALES COCKPIT
                </span>
              </div>
              <h2 className="font-manuscript text-2xl sm:text-3xl lg:text-4xl font-bold text-manuscript-ink tracking-tight">
                An enterprise sales cockpit where your team stays in control.
              </h2>
              <p className="mt-2.5 font-manuscriptBody text-sm sm:text-base text-manuscript-inkMuted leading-relaxed">
                Experience how Fritado pulls live buying signals, gathers account background, and prepares review-ready outreach before anything ever touches your CRM.
              </p>
            </motion.div>

            {/* Seamless Hero -> Product Visual transition */}
            <motion.div
              initial={{ opacity: 0.9, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <FritadoProductVisual />
            </motion.div>
          </div>
        </section>

        {/* COMPACT STICKY PRODUCT NAVIGATION */}
        <FritadoStickyNav />

        {/* ============================================================
            02: PRODUCT OVERVIEW (SECTION 15)
        ============================================================ */}
        <FritadoWorkflow />

        {/* ============================================================
            03: CAPABILITIES (SECTION 16)
        ============================================================ */}
        <FritadoModules />

        {/* ============================================================
            04: PRODUCT EXPERIENCE (SECTION 17)
        ============================================================ */}
        <FritadoExperienceTabs />

        {/* ============================================================
            05: CONTEXT-DRIVEN INTELLIGENCE (SECTION 18)
        ============================================================ */}
        <FritadoArchitecture />

        {/* ============================================================
            06: HIGHLIGHTS & PROOF (SECTION 19)
        ============================================================ */}
        <FritadoHighlights />

        {/* ============================================================
            07: FINAL CTA (SECTION 21)
        ============================================================ */}
        <FritadoFinalCTA />
      </main>

      {/* Global AINCURU Footer */}
      <Footer />
    </div>
  );
}
