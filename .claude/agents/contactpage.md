
Contact page
Primary lead capture — must be flawless on every device
Mobile: 3/10
Tablet: 5/10
Desktop: 6/10
Conversion: 3/10
1 — UI problems
The Calendly booking widget and the "Send a message" form have identical visual weight side-by-side. Users don't know which to use first — they should be prioritized with Calendly as primary.
The dark contact form card is embedded inside a dark background section — zero depth separation. Form fields are nearly invisible (dark input on dark background).
Phone number "+91 98765 43210" is a dummy number — signals the page was never QA'd. Remove or replace with real number.
The Calendly embed clips on screens under 380px — the calendar date grid overflows its container on small mobile.
Form field labels are small and low-contrast — "Full Name *", "Email Address *" in gray on dark bg.
Floating right-side widget icons overlap the form on viewports under 1200px — unacceptable for a contact page where focus is critical.
2 — UX problems
No response time SLA stated anywhere — "We respond within 24 hours" is a simple trust line that dramatically increases form submissions.
The form "Project Details" textarea has no placeholder example or character count — creates blank-page anxiety for users who don't know what to write.
No success state design visible — what happens after clicking "Send Message"? No confirmation page, no inline success message shown.
Both pathways (form + calendar) lead to different outcomes but there's no explanation of which to choose when.
3 — Content review
Keep
Calendly booking integration — excellent friction reducer for motivated leads

Keep
Office location information (Chennai, Tamil Nadu, India)

Keep
Email address (contact@neoperion.com)

Improve
Hero headline → "Talk to an engineer, not a salesperson" — specific and differentiated

Improve
Form CTA → change "Send Message" to "Start the conversation" or "Request a technical review"

Improve
Project Details placeholder → add example text "e.g. We need to build a HIPAA-compliant patient portal with AI triage..."

Remove
Placeholder phone number "+91 98765 43210" — replace with real number or remove entirely

Add
"We respond within 24 hours" line directly above the submit button

Add
3 trust bullet points left of form: "No sales pitch. Just engineering talk." / "NDA signing available" / "Free 30-min architecture review"

Add
Success state: animated checkmark + "Message sent! We'll reply within 24 hours. Meanwhile, browse our case studies."

4 — Mobile redesign (320–640px)
Layout
Single column, stacked. Order: Hero headline → 3 trust bullets → Form → Calendly (collapsed, "Or book a call" expander) → Office info. Calendar hidden by default on mobile — tap "Schedule a call instead" to reveal. Saves 400px of vertical scroll.

Form fields
All fields full-width, stacked. Labels ABOVE inputs (not placeholder-only). Input height: 48px. Textarea: 120px min-height. Submit button: full-width, 48px, #0A0A0A fill. No side-by-side fields at all on mobile.

Mobile AI prompt
Design a mobile contact page for Neo Perion. 375px single column. Hero: "Talk to an engineer, not a salesperson" headline 28px. 3 trust bullets below (checkmarks): no sales pitch, NDA available, free 30-min review. Form: full-width fields stacked, labels above inputs, 48px input height, placeholder text in Project Details showing example project. "Start the conversation" submit button full-width 48px #0A0A0A. Below form: "Or prefer to schedule a call?" text + tap to reveal Calendly. Office info at bottom. Response time: "We reply within 24 hours" above submit button. Font: Inter. Clean, focused, zero distraction.

5 — Tablet improvements
768px+
2-column layout: left (40%) = hero text + trust bullets + office info. Right (60%) = form + Calendly both visible. Calendly above form (not beside). Form fields: name + email side-by-side at tablet+. Company name + phone side-by-side.

6 — Desktop improvements
1024px+
3-column layout: left context (30%) + center form (40%) + right Calendly (30%). Or: 2-column with form left, Calendly right, context info above both. Remove floating sidebar widgets. Add hover glow to submit button. Max-width 900px for the form/calendar section — don't stretch a form across 1400px.

7 — White theme
Direction
White background. Form: white card, 0.5px border, 12px radius, shadow: none. Labels: #09090B 13px. Inputs: white bg, #E4E4E7 border 1px, 48px height, focus: border #1D4ED8 2px. Submit: #09090B bg, white text, full-width. Trust bullets: #16A34A checkmark icons, #374151 text. Calendly: light theme embed. Office info: icon + text rows on #F9FAFB surface.

White theme AI prompt
Design a white-theme contact page. Split: left 40% on #F9FAFB ("Talk to an engineer" headline, 3 green-check trust bullets, office address card). Right 60%: white form card with 0.5px border, 12px radius. Fields: white bg, 1px #E4E4E7 border, 48px height, focus state 2px #1D4ED8. Labels above inputs in #09090B 13px. Textarea with helpful placeholder text. "Start the conversation" button full-width #09090B. Calendly light theme below form. "We reply within 24 hours" note above submit. No shadows, no gradients. Font: Inter. Stripe contact page aesthetic.

8 — Dark theme
Direction
Background #0A0A0A. Form card: #111111, rgba(255,255,255,0.08) border. Inputs: #1A1A1A bg, rgba(255,255,255,0.1) border, #FAFAFA text, focus: border rgba(255,255,255,0.3). Labels: #A1A1AA. Submit: white bg, #0A0A0A text. Calendly: dark theme embed. Trust bullets: teal (#2DD4BF) checkmarks. Office info: dark surface cards with subtle icon.

Dark theme AI prompt
Design a dark contact page for Neo Perion. Background #0A0A0A. Left panel: "Talk to an engineer" white headline 28px, 3 teal-check trust bullets, office info on #111111 surface cards. Right panel: form on #111111 card rgba(255,255,255,0.08) border. Inputs: #1A1A1A bg, rgba(255,255,255,0.1) border, white text, focus border rgba(255,255,255,0.3). Labels #A1A1AA 13px. Submit button: white bg, #0A0A0A text, hover glow rgba(255,255,255,0.15). Calendly dark embed. "We reply within 24 hours" in #A1A1AA above submit. No glassmorphism overdose. Benchmark: vercel.com/contact.

9 — Animations
Form field focus: Input border transitions from default to accent color in 150ms. Label slides up slightly (translateY -2px) on focus.
Submit button: On click: button text changes to "Sending…" + spinner icon. On success: button becomes green checkmark + "Sent!" then fades to success message.
Trust bullets: On page load, checkmarks draw in sequentially (SVG stroke-dashoffset animation) over 800ms total. Subtle and delightful.
10 — Performance & SEO
Calendly script: load asynchronously with async defer. Don't block page render waiting for Calendly JS.
Meta title: "Contact Neo Perion Solutions | Book a Free Architecture Review" — includes the conversion action.
Add ContactPage schema markup with email and address for Google rich results.
11 — Accessibility
All form inputs need both visible labels AND aria-label attributes. Never rely on placeholder text alone as a label.
Required fields: use aria-required="true" on all required inputs, not just the visual asterisk.
Error states: when form validation fails, focus must move to first error field, and error message must be associated via aria-describedby.
12 — Awwwards ideas
Smart project brief
The Project Details textarea has an AI assist button: "Help me write a brief →" that opens a 3-question mini-wizard (What are you building? What's broken today? What's your timeline?) and auto-fills a professional project brief. Converts cold leads into warm, detailed inquiries
