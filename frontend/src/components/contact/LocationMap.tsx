import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const CONTACTS = [
  { Icon: MapPin, label: 'Headquarters', value: 'AINCURU LLP\nChennai, Tamil Nadu, India', href: null },
  { Icon: Mail,   label: 'Email',        value: 'hello@aincuru.com',    href: 'mailto:hello@aincuru.com' },
  { Icon: Phone,  label: 'Phone',        value: '+91 7810005472',         href: 'tel:+917810005472' },
];

export function LocationMap() {
  return (
    <div className="space-y-5">
      {CONTACTS.map(({ Icon, label, value, href }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-manuscript-copper/5 border border-manuscript-copper/15 flex items-center justify-center shrink-0">
            <Icon size={16} className="text-manuscript-copper" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-manuscript-inkSoft mb-1 font-manuscriptBody">{label}</p>
            {href ? (
              <a href={href} className="text-[14px] text-manuscript-ink hover:text-manuscript-copper transition-colors whitespace-pre-line font-manuscriptBody font-medium">
                {value}
              </a>
            ) : (
              <p className="text-[14px] text-manuscript-ink whitespace-pre-line font-manuscriptBody font-medium">{value}</p>
            )}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-3 pt-2">
        <Globe size={14} className="text-manuscript-inkMuted shrink-0" />
        <p className="text-[12px] text-manuscript-inkMuted font-manuscriptBody">We work with clients globally across all time zones.</p>
      </div>
      <a
        href="/for-us-clients"
        className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-manuscript-copper hover:text-manuscript-copperDeep transition-colors font-manuscriptBody"
      >
        For US Clients - NDA, USD invoicing, daily ET overlap
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

