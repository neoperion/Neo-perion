import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

/** Accordion FAQ + FAQPage JSON-LD for SEO. Renders nothing without faqs. */
export function ServiceFaqSection({ service }: { service: ServiceData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  if (!service.faqs || service.faqs.length === 0) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="bg-manuscript-parchmentDark py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">FAQ</p>
          <h2 className="font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-manuscript-ink">
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const open = openIndex === idx;
            return (
              <div key={idx} className="overflow-hidden rounded-xl border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentLight">
                <button
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:parchment-surface/[0.03]"
                  aria-expanded={open}
                >
                  <span className="pr-8 font-bold text-manuscript-ink">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/[0.06] px-6 pb-5 pt-4 leading-relaxed text-manuscript-inkSoft">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
