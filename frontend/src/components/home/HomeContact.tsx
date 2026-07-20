import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const HomeContact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');
    
    try {
      const { error } = await supabase.functions.invoke('submit-lead', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
          source: 'homepage'
        }
      });
        
      if (error) throw new Error('Failed to submit form. Please try again later.');
      
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neo-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Left Column - Contact Info & Cards */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Let's discuss your <span className="text-neo-blue">next project</span>.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Whether you need a full-scale AI platform or a high-performance web application, our product architects are ready to help you build the future.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-900/50 border border-white/10 p-6 rounded-2xl hover:border-neo-blue/30 transition-colors">
                <div className="w-12 h-12 bg-neo-blue/10 rounded-xl flex items-center justify-center text-neo-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">Email Us</p>
                  <a href="mailto:hello@www.neoperion.com" className="text-lg font-bold text-white hover:text-neo-blue transition-colors">hello@www.neoperion.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/50 border border-white/10 p-6 rounded-2xl hover:border-neo-blue/30 transition-colors">
                <div className="w-12 h-12 bg-neo-blue/10 rounded-xl flex items-center justify-center text-neo-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">Call Us</p>
                  <a href="tel:+917339125472" className="text-lg font-bold text-white hover:text-neo-blue transition-colors">+91 7339 125 472</a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/50 border border-white/10 p-6 rounded-2xl hover:border-neo-blue/30 transition-colors">
                <div className="w-12 h-12 bg-neo-blue/10 rounded-xl flex items-center justify-center text-neo-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">Global Headquarters</p>
                  <p className="text-lg font-bold text-white">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neo-blue/10 rounded-full blur-[80px] pointer-events-none" />
              
              {success ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="mx-auto text-neo-blue mb-6" size={64} />
                  <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                    We've received your information. A product architect will reach out to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-neo-blue font-bold hover:text-neo-blue/80 transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    Send another message <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
                  
                  {errorMsg && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neo-blue transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neo-blue transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                    <input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neo-blue transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Project Details *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neo-blue transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-neo-blue text-white font-bold hover:bg-neo-blue/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
