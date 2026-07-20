import React, { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Quote, Star } from "lucide-react";
import { MobileGate, MobileShell } from "@/components/mobile";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

interface TestimonialData {
  name: string;
  feedback: string;
  company: string;
  designation: string;
  rating?: number;
  industry?: string;
}

const fallbackTestimonials: TestimonialData[] = [
  { feedback: "Neo Perion didn't just write code; they transformed our entire product strategy. Their AI expertise is unmatched.", name: "Sarah J.", designation: "CTO", company: "TechCorp", rating: 5 },
  { feedback: "The most reliable engineering partner we've worked with. Period.", name: "Michael T.", designation: "Founder", company: "SaaS Start", rating: 5 },
  { feedback: "Their architecture decisions saved us months of rework when we started scaling rapidly.", name: "Elena R.", designation: "VP Engineering", company: "DataCo", rating: 5 },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('name, company, designation, feedback, rating, industry')
          .eq('active', true)
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(fallbackTestimonials);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials, using fallback:", err);
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Client Testimonials - Neo Perion",
    "description": "Read reviews and testimonials from CTOs, founders, and product leaders who partner with Neo Perion for AI and SaaS product engineering.",
    "publisher": {
      "@type": "Organization",
      "name": "Neo Perion Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://neoperion.com/images/np-logo.png"
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
    <MobileGate mobileOnly fallback={
      <div className="min-h-[auto] bg-[#0A0A0B] text-white selection:bg-neo-blue/20">
        <SEO 
          title="Client Testimonials & Feedback | Neo Perion"
          description="Read reviews and testimonials from CTOs, founders, and product leaders who partner with Neo Perion for AI and SaaS product engineering."
          url="https://neoperion.com/company/testimonials"
          jsonLd={seoSchema}
        />
        <Header />
        
        <main className="pt-36 pb-24 relative overflow-hidden">
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] pointer-events-none opacity-60" />

          <section className="text-center px-8 mb-20 max-w-4xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4"
            >
              Social Proof
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black mb-6 tracking-tight text-white"
            >
              What our clients say
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-400 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Don't just take our word for it. Hear directly from the product leaders and engineering executives we build for.
            </motion.p>
          </section>

          {loading ? (
            <div className="py-20 flex justify-center items-center">
              <div className="w-8 h-8 rounded-full border-4 border-neo-blue/20 border-t-neo-blue animate-spin" />
            </div>
          ) : (
            <motion.section 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8 relative z-10"
            >
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i} 
                  variants={cardVariants}
                  className="p-8 rounded-3xl border border-zinc-200/80 bg-neutral-900 shadow-sm hover:border-neutral-800 hover:shadow-md transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between relative overflow-hidden"
                >
                  <Quote className="text-zinc-100 absolute top-6 right-6 pointer-events-none" size={60} />
                  
                  <div className="relative z-10 flex-1">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6" aria-label={`Rating: ${t.rating || 5} out of 5 stars`}>
                      {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                        <Star key={idx} className="text-amber-400 fill-amber-400" size={16} />
                      ))}
                    </div>

                    <p className="text-lg text-neutral-400 italic relative z-10 mb-8 leading-relaxed">
                      "{t.feedback}"
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-neutral-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center font-bold text-neutral-200 text-sm uppercase">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-neo-blue font-semibold">{t.designation}, {t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.section>
          )}
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pt-8 pb-12">
            <section className="text-center px-6 mb-12">
               <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Testimonials</p>
               <h1 className="text-display-lg text-white tracking-tight mb-4">Client Voice.</h1>
               <p className="text-base text-white/70">What our clients say about working with Neo Perion.</p>
            </section>
            
            {loading ? (
              <div className="py-12 flex justify-center"><div className="w-6 h-6 rounded-full border-2 border-neo-blue/30 border-t-neo-blue animate-spin" /></div>
            ) : (
              <section className="px-6 space-y-4">
                 {testimonials.map((t, i) => (
                   <div key={i} className="p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1 relative overflow-hidden">
                     <Quote className="text-white/5 absolute top-4 right-4" size={40} />
                     
                     <div className="flex gap-1 mb-4">
                       {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                         <Star key={idx} className="text-neo-highlight fill-neo-highlight" size={14} />
                       ))}
                     </div>
                     
                     <p className="text-[15px] text-white/80 italic leading-relaxed mb-6">"{t.feedback}"</p>
                     
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-sm uppercase">
                         {t.name.charAt(0)}
                       </div>
                       <div>
                         <p className="font-bold text-white text-sm">{t.name}</p>
                         <p className="text-xs text-white/50">{t.designation}, {t.company}</p>
                       </div>
                     </div>
                   </div>
                 ))}
              </section>
            )}
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}

