import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Refund() {
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
            Refund &amp; Cancellation Policy
          </h1>

          <hr className="ink-rule--gold mb-12" />

          <div className="space-y-10 font-manuscriptBody text-manuscript-inkSoft leading-relaxed text-[17px]">
            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Milestone-Based Cancellations</h2>
              <p>
                As a service-based engineering firm, AINCURU bills for time, labor, and expertise rather than physical goods. Our projects are structured around defined milestones (e.g., Discovery, Design, Development). If a client chooses to cancel a project mid-development, they will only be billed for the work completed up to the date of cancellation. No refunds are issued for previously approved and completed milestones.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Non-Refundable Deposits</h2>
              <p>
                To commence work on any custom software or AI integration project, an upfront deposit may be required to secure engineering resources and schedule the project. This initial deposit is strictly non-refundable once work has officially begun.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Subscriptions &amp; Retainers</h2>
              <p>
                For ongoing services such as monthly maintenance, cloud infrastructure management, or AI API retainers, clients may cancel their subscription with a 30-day written notice. We do not offer pro-rated refunds for partial months of service after a billing cycle has commenced.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">Contact Us</h2>
              <p>
                If you have questions about your billing, invoices, or our cancellation terms, please contact our billing department at{" "}
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

