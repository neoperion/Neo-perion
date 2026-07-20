import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-neo-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Let's Connect</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-white">
            Ready to <span className="text-neo-blue">Scale</span>?
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed max-w-xl mx-auto">
            Book a direct meeting with our engineering team or send us a message about your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Calendly / Book Meeting */}
          <div className="bg-paper border border-hairline rounded-[24px] p-8 flex flex-col h-full shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neo-blue/10 rounded-xl border border-neo-blue/20">
                <Calendar className="h-6 w-6 text-neo-blue" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Book a Meeting</h3>
            </div>
            <p className="text-slate-400 mb-8">
              Schedule a 30-minute discovery call to discuss your architecture, AI integration, or product roadmap.
            </p>

            <div className="flex-grow flex items-center justify-center">
              <div className="w-full h-full">
                <CalendlyEmbed />
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-paper border border-hairline rounded-[24px] p-8 h-full shadow-xl">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>

        {/* Bottom Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <a href="https://wa.me/917339125472" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
            <MessageCircle className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">WhatsApp</span>
          </a>
          <a href="mailto:hello@neoperion.com" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
            <Mail className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">hello@neoperion.com</span>
          </a>
          <a href="tel:+917339125472" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
            <Phone className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">+91 7339125472</span>
          </a>
        </div>

      </div>
    </section>
  );
};
