import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2, Phone, MessageCircle, Calendar } from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const currentTime = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        time: currentTime,
        to_name: 'NEO PERION Team',
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "✅ Successfully sent!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      const errorMessage = error && typeof error === 'object' && 'text' in error
        ? (error as { text: string }).text
        : "Failed to send message. Please try again.";
      toast({
        title: "❌ Failed to send",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">Let's Connect</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-white">
            Ready to <span className="text-cyan-400">Scale</span>?
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed max-w-xl mx-auto">
            Book a direct meeting with our engineering team or send us a message about your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Calendly / Book Meeting */}
          <div className="bg-[#0B1120] border border-white/[0.06] rounded-[24px] p-8 flex flex-col h-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Calendar className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Book a Meeting</h3>
            </div>
            <p className="text-slate-400 mb-8">
              Schedule a 30-minute discovery call to discuss your architecture, AI integration, or product roadmap.
            </p>
            
            {/* Calendly Placeholder */}
            <div className="flex-grow bg-[#050816] border border-white/5 rounded-xl flex items-center justify-center min-h-[400px]">
              <div className="text-center p-6">
                <Calendar className="h-12 w-12 text-slate-600 mx-auto mb-4 opacity-50" />
                <p className="text-slate-500 font-medium">Calendly Embed Placeholder</p>
                <p className="text-slate-600 text-sm mt-2">Will be replaced with actual Calendly widget.</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#0B1120] border border-white/[0.06] rounded-[24px] p-8 h-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
                  Full Name <span className="text-cyan-400">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#050816] border-white/10 text-white focus-visible:ring-cyan-500/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Work Email <span className="text-cyan-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#050816] border-white/10 text-white focus-visible:ring-cyan-500/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-300">Company / Project Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-[#050816] border-white/10 text-white focus-visible:ring-cyan-500/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">
                  How can we help? <span className="text-cyan-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="bg-[#050816] border-white/10 text-white focus-visible:ring-cyan-500/50"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all duration-300 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <a href="https://wa.me/917339125472" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
            <MessageCircle className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">WhatsApp</span>
          </a>
          <a href="mailto:hello@neoperion.com" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
            <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">hello@neoperion.com</span>
          </a>
          <a href="tel:+919363578670" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
            <Phone className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">+91 9363578670</span>
          </a>
        </div>

      </div>
    </section>
  );
};
