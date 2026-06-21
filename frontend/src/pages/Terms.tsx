import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/marketing/Section";

export default function Terms() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SEO />
      <Header />
      <main>
        <Section bg="paper" rhythm="hero" divider>
          <div className="mx-auto max-w-[720px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted2">
              Last updated 21 June 2026
            </p>
            <h1 className="mt-4 font-display text-[clamp(32px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
              Terms of Service
            </h1>
            <div className="mt-10 space-y-8 text-body leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Agreement</h2>
                <p>
                  By using the Neo Perion website you agree to these terms. Engagements are governed
                  by the separate statement of work or contract signed for each project; these terms
                  cover use of the public site.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Use of the site</h2>
                <p>
                  You may use this site for lawful purposes only. Content, branding, and code shown
                  here are the property of Neo Perion unless stated otherwise, and may not be
                  reproduced without permission.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Project work &amp; IP</h2>
                <p>
                  For client engagements, ownership of delivered source code and deliverables
                  transfers to the client as set out in the relevant statement of work. Nothing on
                  this site constitutes a binding offer of services.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Liability</h2>
                <p>
                  The site is provided &quot;as is&quot; without warranties. To the extent permitted
                  by law, Neo Perion is not liable for any indirect or consequential loss arising
                  from use of the site. Questions?{" "}
                  <a href="mailto:hello@neoperion.com" className="font-semibold text-brand">
                    hello@neoperion.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
