import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/marketing/Section";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <div className="mt-10 space-y-8 text-body leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Who we are</h2>
                <p>
                  Neo Perion (&quot;we&quot;, &quot;us&quot;) is a product-engineering firm based in
                  Chennai, India. This policy explains what information we collect when you use our
                  website and how we handle it.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">What we collect</h2>
                <p>
                  We collect the details you submit through our contact and newsletter forms (name,
                  email, company, and your message), and standard analytics about how the site is
                  used. We do not sell your data.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">How we use it</h2>
                <p>
                  We use your information to respond to enquiries, deliver engagements, and improve
                  the site. We keep it only as long as needed for those purposes or as required by
                  law.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Client Data Confidentiality</h2>
                <p>
                  Any proprietary data, codebase access, or business information shared by clients during discovery or development is kept strictly confidential. We never use client data to train public AI models or share it with unauthorized third parties.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Your choices</h2>
                <p>
                  You can request access to, correction of, or deletion of your data, and manage
                  cookie preferences at any time via the Cookie Settings link in the footer. Contact
                  us at{" "}
                  <a href="mailto:hello@neoperion.com" className="font-semibold text-brand">
                    hello@neoperion.com
                  </a>{" "}
                  for any privacy request.
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
