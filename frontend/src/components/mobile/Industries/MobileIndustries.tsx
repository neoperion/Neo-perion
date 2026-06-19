import { MobileShell } from '../Navigation/MobileShell';
import { MobileIndustriesHero } from './MobileIndustriesHero';
import { MobileIndustryCard } from './MobileIndustryCard';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function MobileIndustries() {
  const navigate = useNavigate();

  return (
    <MobileShell nav="bottom" showFooter>
      <MobileIndustriesHero />
      <MobileIndustryCard />
      
      {/* CTA Section */}
      <div className="px-mobile-base py-12 border-t border-white/[0.08] bg-[#02040A]">
        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-neo-highlight/20 to-transparent border border-neo-highlight/30 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-neo-highlight/5 blur-xl"></div>
            <div className="relative z-10">
                <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Ready to transform your industry?</h2>
                <p className="text-[13px] text-white/70 mb-8 leading-relaxed">Let's discuss how AI and scalable architecture can accelerate your growth.</p>
                <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-4 bg-neo-highlight text-[#02040A] rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                    Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </MobileShell>
  );
}
