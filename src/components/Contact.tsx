import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
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
      // Get current timestamp
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
        time: currentTime, // Add this line
        to_name: 'NEO PERION Team',
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', response);

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
    <section id="contact" className="py-20 md:py-32" style={{ backgroundColor: '#050816' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Let's build with <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your operations? Reach out for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      We reply within 24 hours to schedule a discovery call
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      We discuss your goals, challenges, and current setup
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      You receive a clear proposal with timeline and pricing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      No spam, no pressure, no hidden fees—just clarity
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Direct contact</span>
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=neoperion@gmail.com"
                  className="text-primary hover:underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  neoperion@gmail.com
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Work Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Project Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Acme Inc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  What do you need help with? <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project, goals, or challenges..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow transition-all duration-300"
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
      </div>
    </section>
  );
};
