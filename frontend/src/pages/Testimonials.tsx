import React, { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Quote, Star } from "lucide-react";
import { MobileGate, MobileShell } from "@/components/mobile";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

interface TestimonialData {
  feedback: string;
  company: string;
  rating?: number;
  industry?: string;
}

const clientTestimonials: TestimonialData[] = [
  {
    feedback: "AINCURU completely changed how we handle online orders. Before them, our website would crash during festive sales and inventory was a mess. They rebuilt our platform from scratch. It's fast, handles massive traffic without a hiccup, and honestly, the team feels more like our own engineering partners than an external agency.",
    company: "Izhaiyam",
    rating: 4
  },
  {
    feedback: "We needed a system that actual farmers could use on the field with spotty internet, not some bloated enterprise software. The AINCURU team spent days just understanding the ground reality. The offline-first app they engineered is so simple and reliable. They are brutally honest about what works and what doesn't.",
    company: "Farmer",
    rating: 5
  },
  {
    feedback: "Building SaaS for the legal industry is notoriously difficult because of compliance and data security. We went through two other dev shops who overpromised and underdelivered. AINCURU stepped in, audited the mess, and engineered a highly secure, beautiful platform in just four months. Absolute lifesavers.",
    company: "Lexizfy",
    rating: 5
  },
  {
    feedback: "When we wanted to scale our digital presence and add smart recommendations, we thought it would take a year and a massive budget. AINCURU mapped out a practical architecture and delivered it in weeks. They don't just write code; they care deeply about the business outcomes. The conversion rate speaks for itself.",
    company: "Funnovo",
    rating: 4
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a quick load to keep the animation smooth
    const timer = setTimeout(() => {
      setTestimonials(clientTestimonials);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoConfig.testimonials.title,
    "description": seoConfig.testimonials.description,
    "publisher": {
      "@type": "Organization",
      "name": "AINCURU LLP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aincuru.com/images/np-logo.png"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="manuscript-root min-h-[auto]">
      <SEO
        title={seoConfig.testimonials.title}
        description={seoConfig.testimonials.description}
        url={seoConfig.testimonials.url}
        jsonLd={seoSchema}
      />
      <Header />

      <main className="pt-36 pb-24 parchment-surface relative overflow-hidden">
        {/* Engineering grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(91,58,31,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.035) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Copper warm glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-manuscript-copper/4 blur-[120px] rounded-full pointer-events-none opacity-60" />

        <section className="text-center px-8 mb-20 max-w-4xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="chapter-eyebrow mb-6"
          >
            Client Letters
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-manuscript text-5xl lg:text-7xl mb-6"
          >
            What our clients say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-manuscript-inkMuted font-manuscriptBody max-w-2xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Hear directly from the product leaders and engineering executives we build for.
          </motion.p>
        </section>

        {loading ? (
          <div className="py-20 flex justify-center items-center">
            <div className="w-8 h-8 rounded-full border-2 border-manuscript-copper/20 border-t-manuscript-copper animate-spin" />
          </div>
        ) : (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-6 relative z-10"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="manuscript-card rounded-md p-8 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Large decorative quote mark */}
                <span
                  className="font-manuscript text-8xl text-manuscript-copper/12 absolute top-3 right-5 pointer-events-none select-none leading-none"
                  aria-hidden="true"
                >
                  “
                </span>

                <div className="relative z-10 flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5" aria-label={`Rating: ${t.rating || 5} out of 5 stars`}>
                    {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                      <Star key={idx} className="text-amber-500 fill-amber-500" size={14} />
                    ))}
                  </div>

                  <p className="text-base text-manuscript-inkSoft italic relative z-10 mb-8 leading-relaxed font-manuscript">
                    &ldquo;{t.feedback}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-manuscript-parchmentDeep flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-manuscript-parchmentWarm border border-manuscript-copper/25 flex items-center justify-center font-bold text-manuscript-copper text-sm uppercase">
                    {t.company.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-manuscript-inkSoft text-base font-manuscriptBody tracking-wide">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>
        )}
      </main>
      <Footer />
    </div>
  );
}
