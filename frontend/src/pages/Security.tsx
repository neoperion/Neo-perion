import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ShieldCheck, Lock, Server, FileCheck, KeyRound, AlertTriangle, Eye, Users } from 'lucide-react';
import { MobileGate, MobileShell } from "@/components/mobile";
import { motion } from 'framer-motion';

export default function Security() {
  const securitySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Security & Compliance - Neo Perion",
    "description": "Enterprise-grade data protection, encryption, infrastructure security, and access control standards at Neo Perion.",
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
      <div className="min-h-[auto] bg-canvas text-ink selection:bg-brand/20">
        <SEO 
          title="Security & Compliance | Enterprise Data Protection | Neo Perion" 
          description="Security is the foundation of everything we build. Explore Neo Perion's SOC 2 compliance, encryption at rest/transit, row-level isolation, and access controls." 
          url="https://neoperion.com/security"
          jsonLd={securitySchema}
        />
        <Header />
        
        <main className="pt-36 pb-24 relative overflow-hidden">
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] pointer-events-none opacity-60" />
          
          <section className="text-center px-8 mb-20 max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ShieldCheck className="mx-auto text-brand mb-8" size={64} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black mb-6 tracking-tight text-ink"
            >
              Enterprise Security
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-body font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Security is not a feature. It is the foundation of everything we build.
            </motion.p>
          </section>
          
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8 relative z-10"
          >
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <Lock className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">Data Protection</h3>
               <p className="text-body leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <Server className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">Infrastructure Security</h3>
               <p className="text-body leading-relaxed">We utilize secure VPCs, regular vulnerability scanning, automated dependency updates, and strict IAM roles following the principle of least privilege.</p>
             </motion.div>
          </motion.section>

          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8 mt-8 relative z-10"
          >
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <FileCheck className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">SOC 2 Compliance</h3>
               <p className="text-body leading-relaxed">Annual SOC 2 audits with continuous monitoring. Strict access controls, change management, and incident response aligned with industry standards.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <KeyRound className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">Encryption</h3>
               <p className="text-body leading-relaxed">AES-256 at rest, TLS 1.3 in transit. Customer data encrypted with per-tenant keys. Key rotation and secure key management via cloud KMS.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <Users className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">Access Control</h3>
               <p className="text-body leading-relaxed">Role-based access control (RBAC) with multi-factor authentication. Least-privilege enforcement across all systems. Session policies and audit trails.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <AlertTriangle className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">Incident Response</h3>
               <p className="text-body leading-relaxed">24/7 monitoring with automated alerting. Defined severity tiers with SLAs. Post-mortem process with root cause analysis and remediation tracking.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <Eye className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">Data Privacy</h3>
               <p className="text-body leading-relaxed">GDPR-compliant data handling with defined retention. Right to deletion and data portability supported. Privacy-by-design in all systems.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="p-8 rounded-2xl border border-hairline/60 bg-paper shadow-sm hover:border-hairline hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
               <ShieldCheck className="text-brand mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4 text-ink">Vendor Security</h3>
               <p className="text-body leading-relaxed">Third-party security assessments for all subprocessors. Vendor SOC 2 reports reviewed annually. Contractual security obligations enforced via DPAs.</p>
             </motion.div>
          </motion.section>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pt-8 pb-12">
            <section className="text-center px-6 mb-12">
               <ShieldCheck className="mx-auto text-neo-highlight mb-6" size={48} />
               <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Security</p>
               <h1 className="text-display-lg text-white tracking-tight mb-4">Enterprise Grade.</h1>
               <p className="text-base text-white/70">Security is not a feature. It is the foundation of everything we build.</p>
            </section>
            
            <section className="px-6 space-y-4">
               <div className="p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                 <Lock className="text-neo-highlight mb-4" size={24} />
                 <h3 className="text-[17px] font-bold text-white mb-2">Data Protection</h3>
                 <p className="text-sm text-white/60 leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
               </div>
               <div className="p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                 <Server className="text-neo-highlight mb-4" size={24} />
                 <h3 className="text-[17px] font-bold text-white mb-2">Infrastructure Security</h3>
                 <p className="text-sm text-white/60 leading-relaxed">We utilize secure VPCs, regular vulnerability scanning, automated dependency updates, and strict IAM roles following the principle of least privilege.</p>
               </div>
            </section>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}
