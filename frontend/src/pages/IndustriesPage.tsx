import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industriesData } from '@/data/industriesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import FloatingLines from '@/components/FloatingLines';
import { CtaSection } from '@/components/features/home/CtaSection';
import { SEO } from '@/components/SEO';

const IndustriesHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-card to-background text-center min-h-[60vh] flex items-center">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
            linesGradient={['#8b5cf6', '#6d28d9', '#4c1d95']}
            enabledWaves={['middle', 'bottom']}
            lineCount={[8, 6]}
            lineDistance={[3, 4]}
            middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.3 }}
            bottomWavePosition={{ x: 2.0, y: -0.5, rotate: -0.2 }}
            animationSpeed={0.5}
            interactive={true}
            bendRadius={3.0}
            bendStrength={-0.3}
            mouseDamping={0.08}
            parallax={true}
            parallaxStrength={0.15}
            mixBlendMode="screen"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6"
        >
          Domain <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-neo-highlight">Expertise</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Purpose-built digital solutions tailored to the unique challenges of your industry.
        </motion.p>
      </div>
    </section>
  );
};

export const IndustriesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neo Perion Solutions",
    "url": "https://www.neoperion.com/industries",
    "description": "Domain expertise and purpose-built digital solutions tailored to Education, Startups, SMBs, and Healthcare."
  };

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <SEO 
        title="Industries We Transform | Neo Perion Solutions"
        description="Purpose-built digital solutions tailored to the unique challenges of Education, Startups, SMBs, and Healthcare."
        url="https://www.neoperion.com/industries"
        jsonLd={industrySchema}
      />
      <Header />
      <main>
        <IndustriesHero />

        <div className="container mx-auto px-4 md:px-6 py-24 space-y-32">
          {industriesData.map((industry, index) => {
            const Icon = industry.icon;
            const isEven = index % 2 === 0;

            return (
              <section key={industry.id} id={industry.id} className="relative">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Left/Right Text Content */}
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-card border border-border mb-2 shadow-sm">
                      <Icon className="w-8 h-8" style={{ color: industry.color }} />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">{industry.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">{industry.description}</p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">Key Solutions</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {industry.solutions.map((sol, i) => (
                          <div key={i} className="flex items-center gap-3 text-muted-foreground/80">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: industry.color }} />
                            {sol}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <button 
                        onClick={() => navigate(`/industries/${industry.id}`)}
                        className="px-6 py-3 rounded-xl text-foreground font-medium border border-border hover:bg-card hover:shadow-sm transition-all flex items-center gap-2 group"
                      >
                        Explore {industry.title}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right/Left Interactive Benefits Card */}
                  <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-20 blur-3xl rounded-[3rem]" style={{ backgroundImage: `linear-gradient(to bottom right, ${industry.color}, transparent)` }} />
                    <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-[2rem] p-8 md:p-12 shadow-2xl">
                      <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">The Neo Perion Advantage</h3>
                      <div className="space-y-6">
                        {industry.benefits.map((benefit, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 items-start"
                          >
                            <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" style={{ color: industry.color }} />
                            <div>
                              <h4 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
