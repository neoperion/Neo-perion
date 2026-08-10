import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { springs } from '@/lib/motion';

export interface FloatingWhatsAppProps {
  href?: string;
}

export function FloatingWhatsApp({ href = 'https://wa.me/917810005472?text=Hello' }: FloatingWhatsAppProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ...springs.magnetic, delay: 0.6 }}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-[148px] right-3 z-mobile-toast md:hidden h-12 w-12 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5),0_0_24px_rgba(37,211,102,0.3)] border border-white/20 flex items-center justify-center"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 blur-md -z-10" />
      <MessageCircle size={22} strokeWidth={2.25} />
      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-[#030B1D] animate-dot-pulse" aria-hidden="true" />
    </motion.a>
  );
}
