import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Eye, Clock, Lightbulb, Fingerprint } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FloatingLines from "@/components/FloatingLines";
import TiltedCard from "@/components/TiltedCard";

// Interactive Workflow Section Component
function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    { num: '01', title: 'We listen first', desc: 'Understanding your workflow matters more than jumping into tools.' },
    { num: '02', title: 'We design for real usage', desc: 'Every system is built around how your team actually works — not assumptions.' },
    { num: '03', title: 'We ship incrementally', desc: 'Clear milestones, visible progress, continuous feedback.' },
    { num: '04', title: 'We stay after launch', desc: 'Support, improvements, and scaling are part of the deal — not add-ons.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollProgress = (windowHeight / 2 - rect.top) / sectionHeight;
      const stepIndex = Math.max(0, Math.min(3, Math.floor(scrollProgress * 5)));
      setActiveStep(stepIndex);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="px-8 lg:px-16 py-32 max-w-6xl mx-auto relative">
      <div className="mb-24 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Process</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">How we work with you</h2>
      </div>
      <div className="space-y-28">
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <div
              key={i}
              className="relative transition-all duration-700 flex items-start gap-8"
              style={{
                opacity: isActive ? 1 : 0.25,
                transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(12px)',
              }}
            >
              <div
                className="flex-shrink-0 text-[100px] lg:text-[140px] font-black leading-none transition-all duration-1000 ease-out text-primary"
                style={{
                  opacity: isActive ? 0.2 : 0.05,
                  transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
                  minWidth: '120px',
                }}
              >
                {step.num}
              </div>
              <div className="relative z-10 flex-1 pt-4">
                <h3
                  className="text-2xl lg:text-3xl font-black tracking-tight mb-4 transition-colors duration-700"
                  style={{
                    color: isActive ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                  }}
                >
                  {step.title}
                </h3>
                <div
                  className="overflow-hidden transition-all duration-700"
                  style={{
                    maxHeight: isActive ? '80px' : '0px',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <p className="text-base text-muted-foreground/70 leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-fade]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('fade-in');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About NEO PERION | Founders - Vasantharaj S (CEO), Adhi Ganesh K (COO), Tamilselvan (CTO)"
        description="Meet the founders of NEO PERION — Vasantharaj S (CEO), Adhi Ganesh K (COO), and Tamilselvan (CTO). We build software partnerships, not just products. Discover our mission, values, and leadership team delivering stable, scalable SaaS solutions."
        keywords="NEO PERION, NEO PERION CEO, NEO PERION founder, Vasantharaj S, Vasantharaj NEO PERION, Adhi Ganesh K, Adhi Ganesh NEO PERION COO, Tamilselvan CTO, NEO PERION CTO, NEO PERION leadership, NEO PERION team, SaaS company founders, NEO PERION about, software company India, NEO PERION Chennai"
        url="https://www.neoperion.com/about"
        type="website"
        ogImage="https://www.neoperion.com/images/np-logo.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NEO PERION",
            "alternateName": "NEOPERION",
            "url": "https://www.neoperion.com",
            "logo": "https://www.neoperion.com/images/np-logo.png",
            "image": "https://www.neoperion.com/images/np-logo.png",
            "description": "NEO PERION is a leading SaaS company transforming businesses with cutting-edge Web Development, Mobile Apps, Data Analytics & AI Automation solutions. Founded by Vasantharaj S, Adhi Ganesh K, and Tamilselvan.",
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "Vasantharaj S",
                "jobTitle": "Chief Executive Officer (CEO)",
                "image": "https://www.neoperion.com/images/founder.jpg",
                "url": "https://www.neoperion.com/about",
                "worksFor": {
                  "@type": "Organization",
                  "name": "NEO PERION"
                }
              },
              {
                "@type": "Person",
                "name": "Adhi Ganesh K",
                "jobTitle": "Chief Operating Officer (COO)",
                "image": "https://www.neoperion.com/images/adhi.png",
                "url": "https://www.neoperion.com/about",
                "worksFor": {
                  "@type": "Organization",
                  "name": "NEO PERION"
                }
              },
              {
                "@type": "Person",
                "name": "Tamilselvan",
                "jobTitle": "Chief Technology Officer (CTO)",
                "image": "https://www.neoperion.com/images/tamilselvan.jpg",
                "url": "https://www.neoperion.com/about",
                "worksFor": {
                  "@type": "Organization",
                  "name": "NEO PERION"
                }
              }
            ],
            "member": [
              {
                "@type": "Person",
                "name": "Vasantharaj S",
                "jobTitle": "CEO & Founder",
                "image": "https://www.neoperion.com/images/founder.jpg"
              },
              {
                "@type": "Person",
                "name": "Adhi Ganesh K",
                "jobTitle": "COO & Co-Founder",
                "image": "https://www.neoperion.com/images/adhi.png"
              },
              {
                "@type": "Person",
                "name": "Tamilselvan",
                "jobTitle": "CTO & Co-Founder",
                "image": "https://www.neoperion.com/images/tamilselvan.jpg"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/company/neoperion",
              "https://twitter.com/neoperion"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "contact@neoperion.com"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vasantharaj S",
            "alternateName": "Vaanth Raj",
            "jobTitle": "Chief Executive Officer",
            "description": "Vasantharaj S is the CEO and Founder of NEO PERION, a SaaS company specializing in Web Development, Mobile Apps, Data Analytics & AI Automation.",
            "image": "https://www.neoperion.com/images/founder.jpg",
            "url": "https://www.neoperion.com/about",
            "worksFor": {
              "@type": "Organization",
              "name": "NEO PERION",
              "url": "https://www.neoperion.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "knowsAbout": ["SaaS", "Web Development", "AI Automation", "Software Engineering", "Business Strategy"]
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Adhi Ganesh K",
            "jobTitle": "Chief Operating Officer",
            "description": "Adhi Ganesh K is the COO and Co-Founder of NEO PERION, leading operations and ensuring seamless delivery of SaaS solutions.",
            "image": "https://www.neoperion.com/images/adhi.png",
            "url": "https://www.neoperion.com/about",
            "worksFor": {
              "@type": "Organization",
              "name": "NEO PERION",
              "url": "https://www.neoperion.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "knowsAbout": ["Operations Management", "SaaS", "Business Development", "Project Management"]
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Tamilselvan",
            "jobTitle": "Chief Technology Officer",
            "description": "Tamilselvan is the CTO and Co-Founder of NEO PERION, driving the technology vision and leading engineering teams in building cutting-edge SaaS products.",
            "image": "https://www.neoperion.com/images/tamilselvan.jpg",
            "url": "https://www.neoperion.com/about",
            "worksFor": {
              "@type": "Organization",
              "name": "NEO PERION",
              "url": "https://www.neoperion.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "knowsAbout": ["Software Architecture", "AI", "Cloud Computing", "Full Stack Development", "Technology Strategy"]
          },
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About NEO PERION",
            "description": "Learn about NEO PERION — the founders, mission, values, and leadership team building stable, scalable SaaS solutions.",
            "url": "https://www.neoperion.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "NEO PERION"
            }
          }
        ]}
      />

      <style>{`
        [data-fade] {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        [data-fade].fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-1 { animation: heroIn 0.9s ease-out 0.1s both; }
        .animate-hero-2 { animation: heroIn 0.9s ease-out 0.3s both; }
        .animate-hero-3 { animation: heroIn 0.9s ease-out 0.5s both; }
        .animate-hero-4 { animation: heroIn 0.9s ease-out 0.7s both; }
      `}</style>

      <Header />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-card to-background">
        <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
          <FloatingLines
            linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
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

        <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10 w-full">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-primary/70 mb-6 animate-hero-1">
              About NEO PERION
            </p>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-none mb-8 text-foreground animate-hero-2">
              Built on<br />
              <span className="text-primary">Partnership.</span>
            </h1>
            <p className="text-lg text-muted-foreground/70 leading-relaxed max-w-lg mb-3 animate-hero-3">
              At NEO PERION, we design, build, and support SaaS systems that stay stable, scale smoothly, and actually make teams faster.
            </p>
            <p className="text-base text-muted-foreground/50 leading-relaxed max-w-lg mb-10 animate-hero-3">
              No jargon. No disappearing after launch. Just clear thinking and reliable execution.
            </p>
            <div className="flex flex-wrap gap-4 animate-hero-4">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: '0 8px 30px -6px hsl(186 80% 42% / 0.4)' }}
              >
                Work with us <ArrowRight size={15} />
              </button>
              <button
                onClick={() => document.querySelector('#how-we-work')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border/60 text-muted-foreground text-sm font-medium hover:border-primary/40 hover:text-foreground transition-all duration-300"
              >
                How we work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-primary/30 via-border/60 to-transparent" />
      </div>

      {/* ── WHO WE ARE ── */}
      <section id="who-we-are" className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start" data-fade>
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-6">Who we are</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
              We build<br />partnerships,<br />not just products.
            </h2>
          </div>
          <div className="space-y-6 lg:pt-2">
            <p className="text-lg text-muted-foreground/70 leading-relaxed">
              NEO PERION was founded to help teams navigate SaaS and automation without confusion, chaos, or unnecessary complexity. We've seen businesses struggle with fragmented tools, rushed implementations, and vendors who vanish once the project ships. We decided to build differently.
            </p>
            <p className="text-base text-muted-foreground/55 leading-relaxed">
              Our work focuses on stability, clarity, and long-term impact — systems that don't just launch, but keep running clean as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      {/* ── WHAT DRIVES OUR WORK ── */}
      <section id="how-we-work" className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <div className="mb-16" data-fade>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Principles</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">What drives our work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { num: '01', title: 'Stability over hype', desc: 'We build solutions meant to last — not experiments that break after launch.' },
            { num: '02', title: 'Clarity over complexity', desc: 'Simple systems beat complicated ones. Always.' },
            { num: '03', title: 'Partnership over projects', desc: 'We think long-term, not just delivery day.' },
            { num: '04', title: 'Execution over promises', desc: 'We ship, support, and stay accountable.' },
          ].map((principle, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border/50 bg-card/40 p-8 hover:border-primary/35 hover:bg-card transition-all duration-300 cursor-default"
              data-fade
            >
              <span className="absolute top-6 right-6 text-[72px] font-black leading-none text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-all duration-700 select-none pointer-events-none">
                {principle.num}
              </span>
              <div className="relative z-10">
                <h3 className="font-black text-xl tracking-tight text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground/60 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      {/* ── HOW WE WORK — Interactive Scroll ── */}
      <WorkflowSection />

      {/* ── DIVIDER ── */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      {/* ── MEET THE FOUNDERS ── */}
      <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="NEO PERION" />
        <meta itemProp="url" content="https://www.neoperion.com" />

        <div className="text-center mb-20" data-fade>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Leadership</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">Meet the founders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 justify-items-center" data-fade>

          {/* Vasantharaj S — CEO */}
          <article className="flex flex-col items-center gap-5" itemScope itemType="https://schema.org/Person" itemProp="founder">
            <TiltedCard
              imageSrc="/images/founder.jpg"
              altText="Vasantharaj S - CEO and Founder of NEO PERION"
              captionText="Vasantharaj S"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            <link itemProp="image" href="https://www.neoperion.com/images/founder.jpg" />
            <div className="text-center">
              <h3 className="text-xl font-black tracking-tight text-foreground" itemProp="name">Vasantharaj S</h3>
              <p className="text-sm font-semibold text-primary/80 mt-1" itemProp="jobTitle">CEO & Founder</p>
            </div>
            <meta itemProp="url" content="https://www.neoperion.com/about" />
            <span className="sr-only" itemProp="description">Vasantharaj S is the CEO and Founder of NEO PERION, a SaaS company based in Chennai, Tamil Nadu, India, specializing in Web Development, Mobile Apps, Data Analytics and AI Automation solutions.</span>
            <meta itemProp="worksFor" content="NEO PERION" />
          </article>

          {/* Adhi Ganesh K — COO */}
          <article className="flex flex-col items-center gap-5" itemScope itemType="https://schema.org/Person" itemProp="founder">
            <TiltedCard
              imageSrc="/images/adhi.png"
              altText="Adhi Ganesh K - COO and Co-Founder of NEO PERION"
              captionText="Adhi Ganesh K"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            <link itemProp="image" href="https://www.neoperion.com/images/adhi.png" />
            <div className="text-center">
              <h3 className="text-xl font-black tracking-tight text-foreground" itemProp="name">Adhi Ganesh K</h3>
              <p className="text-sm font-semibold text-primary/80 mt-1" itemProp="jobTitle">COO & Co-Founder</p>
            </div>
            <meta itemProp="url" content="https://www.neoperion.com/about" />
            <span className="sr-only" itemProp="description">Adhi Ganesh K is the COO and Co-Founder of NEO PERION, leading operations and delivery of SaaS solutions from Chennai, Tamil Nadu, India.</span>
            <meta itemProp="worksFor" content="NEO PERION" />
          </article>

          {/* Tamilselvan — CTO */}
          <article className="flex flex-col items-center gap-5" itemScope itemType="https://schema.org/Person" itemProp="founder">
            <TiltedCard
              imageSrc="/images/tamilselvan.jpg"
              altText="Tamilselvan - CTO and Co-Founder of NEO PERION"
              captionText="Tamilselvan"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
              objectPosition="top"
            />
            <link itemProp="image" href="https://www.neoperion.com/images/tamilselvan.jpg" />
            <div className="text-center">
              <h3 className="text-xl font-black tracking-tight text-foreground" itemProp="name">Tamilselvan</h3>
              <p className="text-sm font-semibold text-primary/80 mt-1" itemProp="jobTitle">CTO & Co-Founder</p>
            </div>
            <meta itemProp="url" content="https://www.neoperion.com/about" />
            <span className="sr-only" itemProp="description">Tamilselvan is the CTO and Co-Founder of NEO PERION, driving the technology vision and leading engineering teams in building SaaS products from Chennai, Tamil Nadu, India.</span>
            <meta itemProp="worksFor" content="NEO PERION" />
          </article>

        </div>

        {/* Hidden SEO content for AI crawlers and search engines */}
        <div className="sr-only" aria-hidden="true">
          <h3>NEO PERION Leadership Team</h3>
          <p>NEO PERION was founded by Vasantharaj S (CEO), Adhi Ganesh K (COO), and Tamilselvan (CTO). Based in Chennai, Tamil Nadu, India, NEO PERION is a technology company specializing in SaaS services, web development, mobile app development, AI automation, and data analytics solutions.</p>
          <p>Vasantharaj S, also known as Vaanth Raj, is the Chief Executive Officer (CEO) and Founder of NEO PERION. He leads the company's vision and strategy.</p>
          <p>Adhi Ganesh K is the Chief Operating Officer (COO) and Co-Founder of NEO PERION. He oversees operations and ensures seamless delivery of solutions.</p>
          <p>Tamilselvan is the Chief Technology Officer (CTO) and Co-Founder of NEO PERION. He drives the technology roadmap and leads the engineering team.</p>
          <p>Contact NEO PERION at contact@neoperion.com. Visit https://www.neoperion.com for more information about our services.</p>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      {/* ── VALUES ── */}
      <section id="our-values" className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <div className="text-center mb-20" data-fade>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">What we stand for</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">Our values</h2>
        </div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5" data-fade>
          {[
            { icon: Shield,      num: '01', title: 'Stability',        desc: 'We build systems that last — engineered for resilience, not quick fixes.' },
            { icon: Eye,         num: '02', title: 'Transparency',     desc: 'No hidden agendas. Clear communication at every stage of the process.' },
            { icon: Clock,       num: '03', title: 'Respect for time', desc: 'We value your time like our own — fast responses, realistic timelines.' },
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl p-8 border border-border/50 bg-card/40 hover:border-primary/35 hover:bg-card transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-3xl bg-primary" />
                {/* Index watermark */}
                <span className="absolute top-4 right-6 text-[80px] font-black leading-none text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-all duration-700 select-none pointer-events-none">
                  {value.num}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 border border-primary/20">
                    <Icon size={22} className="text-primary opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/60 leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row — 2 wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto" data-fade>
          {[
            { icon: Lightbulb,   num: '04', title: 'Long-term thinking', desc: 'Every decision is made with your future growth in mind. We design for scale, not just today.' },
            { icon: Fingerprint, num: '05', title: 'Ownership mindset',  desc: 'We treat your product as our own — with care, pride, and full accountability.' },
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl p-8 border border-border/50 bg-card/40 hover:border-primary/35 hover:bg-card transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-3xl bg-primary" />
                {/* Index watermark */}
                <span className="absolute top-4 right-6 text-[80px] font-black leading-none text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-all duration-700 select-none pointer-events-none">
                  {value.num}
                </span>
                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/20">
                    <Icon size={22} className="text-primary opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/60 leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div
            className="rounded-2xl border border-border/50 bg-card/40 px-10 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            data-fade
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Ready to build?</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight mb-4">
                Let's build something<br />
                <span className="text-primary">that actually works.</span>
              </h2>
              <p className="text-muted-foreground/60 text-[14px] leading-relaxed max-w-md">
                If you're looking for a reliable tech partner — not just another vendor — we should talk.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="px-8 py-3.5 rounded-lg text-sm font-bold hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                style={{ background: 'hsl(186, 80%, 42%)', color: '#02040A', boxShadow: '0 8px 30px -6px hsl(186 80% 42% / 0.4)' }}
              >
                Book a free discovery call
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="px-8 py-3.5 rounded-lg border border-border/60 text-muted-foreground text-sm font-medium hover:border-primary/40 hover:text-foreground transition-all duration-300 whitespace-nowrap"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
