import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <div className="manuscript-root min-h-screen">
      <SEO />
      <Header />
      <main className="parchment-surface">
        <div className="mx-auto max-w-[720px] px-8 pt-36 pb-24">
          {/* Archive label */}
          <p className="chapter-eyebrow mb-6">Legal Document</p>

          {/* Copper divider + date */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-manuscript-copper/35" />
            <span className="font-mono text-[8px] tracking-[0.5em] text-manuscript-copperMuted uppercase">
              Last updated 21 June 2026
            </span>
          </div>

          <h1 className="heading-manuscript text-[clamp(32px,5vw,52px)] mb-12 leading-tight">
            Terms of Service
          </h1>

          <hr className="ink-rule--gold mb-12" />

          <div className="space-y-10 font-manuscriptBody text-manuscript-inkSoft leading-relaxed text-[17px]">
            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Agreement</h2>
              <p>
                By using the AINCURU website you agree to these terms. Engagements are governed
                by the separate statement of work or contract signed for each project; these terms
                cover use of the public site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Use of the site</h2>
              <p>
                You may use this site for lawful purposes only. Content, branding, and code shown
                here are the property of AINCURU unless stated otherwise, and may not be
                reproduced without permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Scope of Work &amp; Change Orders</h2>
              <p>
                Any development, design, or engineering work requested outside the bounds of the original written Statement of Work (SOW) will require a separate Change Order and may incur additional billing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Project work &amp; IP</h2>
              <p>
                AINCURU retains all Intellectual Property (IP) rights to the code and infrastructure developed until the final invoice for the project or milestone is paid in full. Upon full payment, IP rights transfer to the client as set out in the relevant agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Liability</h2>
              <p>
                The site is provided &quot;as is&quot; without warranties. To the extent permitted
                by law, AINCURU is not liable for any indirect damages, lost profits, data loss, or outages caused by third-party APIs (e.g., AI models). Questions?{" "}
                <a href="mailto:hello@aincuru.com" className="font-semibold text-manuscript-copper hover:text-manuscript-rust transition-colors">
                  hello@aincuru.com
                </a>
                .
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

