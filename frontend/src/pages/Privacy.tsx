import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="manuscript-root min-h-screen">
      <SEO />
      <Header />
      <main className="parchment-surface">
        <div className="mx-auto max-w-[720px] px-8 pt-36 pb-24">
          {/* Archive label */}
          <p className="chapter-eyebrow mb-6">Legal Document</p>

          {/* Copper divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-manuscript-copper/35" />
            <span className="font-mono text-[8px] tracking-[0.5em] text-manuscript-copperMuted uppercase">
              Last updated 21 June 2026
            </span>
          </div>

          <h1 className="heading-manuscript text-[clamp(32px,5vw,52px)] mb-12 leading-tight">
            Privacy Policy
          </h1>

          <hr className="ink-rule--gold mb-12" />

          <div className="space-y-10 font-manuscriptBody text-manuscript-inkSoft leading-relaxed text-[17px]">
            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Who we are</h2>
              <p>
                AINCURU (&quot;we&quot;, &quot;us&quot;) is a product-engineering firm based in
                Chennai, India. This policy explains what information we collect when you use our
                website and how we handle it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">What we collect</h2>
              <p>
                We collect the details you submit through our contact forms (name,
                email, company, and your message), and standard analytics about how the site is
                used. We do not sell your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">How we use it</h2>
              <p>
                We use your information to respond to enquiries, deliver engagements, and improve
                the site. We keep it only as long as needed for those purposes or as required by
                law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Client Data Confidentiality</h2>
              <p>
                Any proprietary data, codebase access, or business information shared by clients during discovery or development is kept strictly confidential. We never use client data to train public AI models or share it with unauthorized third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Your choices</h2>
              <p>
                You can request access to, correction of, or deletion of your data, and manage
                cookie preferences at any time via the Cookie Settings link in the footer. Contact
                us at{" "}
                <a href="mailto:hello@aincuru.com" className="font-semibold text-manuscript-copper hover:text-manuscript-rust transition-colors">
                  hello@aincuru.com
                </a>{" "}
                for any privacy request.
              </p>
            </section>
          </div>

          {/* Bottom ornament */}
          <div className="mt-16 pt-8 border-t border-manuscript-parchmentDeep">
            <div className="ornament-dots" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

