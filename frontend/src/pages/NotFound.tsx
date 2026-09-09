import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArrowLeft, BookOpen, Home, Layers, Users, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="manuscript-root min-h-screen">
      <SEO
        title="404 — Page Not Found | Aincuru"
        description="The page you are looking for does not exist on Aincuru."
      />
      <Header />
      <main className="parchment-surface min-h-[85vh] flex items-center justify-center relative overflow-hidden py-24">
        {/* Engineering grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Copper warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-manuscript-copper/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="text-center relative z-10 px-6 max-w-2xl mx-auto">
          {/* Archive error label */}
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-manuscript-copper mb-4">
            Aincuru · 404 Error
          </p>

          {/* Copper divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-manuscript-copper/30" />
            <BookOpen size={16} className="text-manuscript-copper/40" />
            <div className="h-px w-10 bg-manuscript-copper/30" />
          </div>

          {/* 404 heading */}
          <h1 className="font-sans text-[90px] sm:text-[120px] font-bold text-manuscript-ink leading-none mb-2 tracking-tight">
            404
          </h1>
          <div className="h-px bg-manuscript-parchmentDeep mb-6 max-w-[200px] mx-auto" />
          
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-manuscript-ink mb-3">
            You seem to have taken a wrong turn.
          </h2>
          <p className="text-manuscript-inkSoft font-sans text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            The page you are looking for does not exist on Aincuru or may have moved.
            Explore our core directory to find what you need:
          </p>

          {/* Primary Navigation Hub */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="flex flex-col items-center justify-center p-3.5 rounded-lg border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentWarm/60 hover:bg-manuscript-parchmentLight hover:border-manuscript-copper transition-all text-manuscript-ink group"
            >
              <Home size={18} className="mb-1.5 text-manuscript-copper group-hover:scale-110 transition-transform" />
              <span className="font-sans font-semibold text-xs">Home</span>
            </a>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
              }}
              className="flex flex-col items-center justify-center p-3.5 rounded-lg border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentWarm/60 hover:bg-manuscript-parchmentLight hover:border-manuscript-copper transition-all text-manuscript-ink group"
            >
              <Layers size={18} className="mb-1.5 text-manuscript-copper group-hover:scale-110 transition-transform" />
              <span className="font-sans font-semibold text-xs">Services</span>
            </a>
            <a
              href="/company/about"
              onClick={(e) => {
                e.preventDefault();
                navigate("/company/about");
              }}
              className="flex flex-col items-center justify-center p-3.5 rounded-lg border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentWarm/60 hover:bg-manuscript-parchmentLight hover:border-manuscript-copper transition-all text-manuscript-ink group"
            >
              <Users size={18} className="mb-1.5 text-manuscript-copper group-hover:scale-110 transition-transform" />
              <span className="font-sans font-semibold text-xs">About</span>
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
              }}
              className="flex flex-col items-center justify-center p-3.5 rounded-lg border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentWarm/60 hover:bg-manuscript-parchmentLight hover:border-manuscript-copper transition-all text-manuscript-ink group"
            >
              <Mail size={18} className="mb-1.5 text-manuscript-copper group-hover:scale-110 transition-transform" />
              <span className="font-sans font-semibold text-xs">Contact</span>
            </a>
          </div>

          {/* Go Back button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-manuscript-inkMuted hover:text-manuscript-copper transition-colors font-sans font-medium text-xs uppercase tracking-wider"
          >
            <ArrowLeft size={13} />
            Go back to previous page
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
