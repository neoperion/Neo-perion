import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const CONTACTS = [
  { Icon: MapPin, label: 'Headquarters', value: 'Neo Perion Solutions\nChennai, Tamil Nadu, India', href: null },
  { Icon: Mail,   label: 'Email',         value: 'contact@neoperion.com', href: 'mailto:contact@neoperion.com' },
  { Icon: Phone,  label: 'Phone',         value: '+91 98765 43210',        href: 'tel:+919876543210' },
];

export function LocationMap() {
  return (
    <div className="space-y-5">
      {CONTACTS.map(({ Icon, label, value, href }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F77E0D]/08 border border-[#F77E0D]/15 flex items-center justify-center shrink-0">
            <Icon size={16} className="text-[#F77E0D]" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/30 mb-1">{label}</p>
            {href ? (
              <a href={href} className="text-[14px] text-white/70 hover:text-white transition-colors whitespace-pre-line">
                {value}
              </a>
            ) : (
              <p className="text-[14px] text-white/70 whitespace-pre-line">{value}</p>
            )}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-3 pt-2">
        <Globe size={14} className="text-white/20 shrink-0" />
        <p className="text-[12px] text-white/25">We work with clients globally across all time zones.</p>
      </div>
    </div>
  );
}
