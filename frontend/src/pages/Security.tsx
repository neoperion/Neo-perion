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
    "name": "Security & Compliance - AINCURU",
    "description": "Enterprise-grade data protection, encryption, infrastructure security, and access control standards at AINCURU.",
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
    <MobileGate mobileOnly fallback={
      <div className="manuscript-root min-h-[auto]">
        <SEO 
          title="Security & Compliance | Enterprise Data Protection | AINCURU" 
          description="Security is the foundation of everything we build. Explore AINCURU's SOC 2 compliance, encryption at rest/transit, row-level isolation, and access controls." 
          url="https://www.aincuru.com/security"
          jsonLd={securitySchema}
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-manuscript-copper/4 rounded-full blur-[100px] pointer-events-none opacity-60" />
          <section className="text-center px-8 mb-20 max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ShieldCheck className="mx-auto text-manuscript-copper mb-8" size={64} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-manuscript text-5xl lg:text-7xl mb-6"
            >
              Enterprise Security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-manuscript-inkMuted font-manuscriptBody max-w-2xl mx-auto leading-relaxed"
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
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <Lock className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">Data Protection</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <Server className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">Infrastructure Security</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">We utilize secure VPCs, regular vulnerability scanning, automated dependency updates, and strict IAM roles following the principle of least privilege.</p>
             </motion.div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8 mt-8 relative z-10"
          >
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <FileCheck className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">SOC 2 Compliance</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">Annual SOC 2 audits with continuous monitoring. Strict access controls, change management, and incident response aligned with industry standards.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <KeyRound className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">Encryption</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">AES-256 at rest, TLS 1.3 in transit. Customer data encrypted with per-tenant keys. Key rotation and secure key management via cloud KMS.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <Users className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">Access Control</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">Role-based access control (RBAC) with multi-factor authentication. Least-privilege enforcement across all systems. Session policies and audit trails.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <AlertTriangle className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">Incident Response</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">24/7 monitoring with automated alerting. Defined severity tiers with SLAs. Post-mortem process with root cause analysis and remediation tracking.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <Eye className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">Data Privacy</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">GDPR-compliant data handling with defined retention. Right to deletion and data portability supported. Privacy-by-design in all systems.</p>
             </motion.div>
             <motion.div variants={cardVariants} className="manuscript-card rounded-md p-8 group">
               <ShieldCheck className="text-manuscript-copper mb-5 group-hover:scale-110 transition-transform" size={28} />
               <h3 className="heading-manuscript text-2xl mb-4 text-manuscript-ink">Third-Party Audits</h3>
               <p className="text-manuscript-inkMuted font-manuscriptBody leading-relaxed">Routine penetration testing by independent security firms. Continuous bug bounty program and automated dependency vulnerability scanning.</p>
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
               <div className="p-6 rounded-3xl border border-white/[0.08] parchment-surface/[0.02] backdrop-blur-glass-1">
                 <Lock className="text-neo-highlight mb-4" size={24} />
                 <h3 className="text-[17px] font-bold text-white mb-2">Data Protection</h3>
                 <p className="text-sm text-white/60 leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
               </div>
               <div className="p-6 rounded-3xl border border-white/[0.08] parchment-surface/[0.02] backdrop-blur-glass-1">
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

