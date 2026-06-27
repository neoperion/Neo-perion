import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export function LocationMap() {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Our Office</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-neo-blue/10 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-neo-blue" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Headquarters</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Neo Perion Solutions<br/>
                Chennai, Tamil Nadu<br/>
                India
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-neo-blue/10 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-neo-blue" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Email</p>
              <a href="mailto:contact@neoperion.com" className="text-slate-400 text-sm hover:text-neo-blue transition-colors">
                contact@neoperion.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-neo-blue/10 flex items-center justify-center shrink-0">
              <Phone size={18} className="text-neo-blue" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Phone</p>
              <a href="tel:+919876543210" className="text-slate-400 text-sm hover:text-neo-blue transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-sm text-neutral-400">
          We work with clients globally across all time zones.
        </p>
      </div>
    </div>
  );
}