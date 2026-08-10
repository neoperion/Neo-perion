import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="manuscript-root min-h-screen">
      <Header />
      <main className="parchment-surface min-h-[80vh] flex items-center justify-center relative overflow-hidden">
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

        <div className="text-center relative z-10 px-8">
          {/* Archive error label */}
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-manuscript-copperMuted mb-6">
            Error — Not Found
          </p>

          {/* Copper divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-manuscript-copper/30" />
            <BookOpen size={16} className="text-manuscript-copper/40" />
            <div className="h-px w-10 bg-manuscript-copper/30" />
          </div>

          {/* 404 heading */}
          <h1 className="font-manuscript text-[120px] md:text-[160px] font-bold text-manuscript-ink leading-none mb-2 tracking-tight">
            404
          </h1>
          <div className="h-px bg-manuscript-parchmentDeep mb-8 max-w-[200px] mx-auto" />
          <p className="font-manuscript text-2xl md:text-3xl text-manuscript-inkSoft mb-3">
            Page not found
          </p>
          <p className="text-manuscript-inkMuted font-manuscriptBody mb-10 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-manuscript-inkMuted hover:text-manuscript-copper transition-colors font-manuscriptBody font-medium text-sm"
            >
              <ArrowLeft size={14} />
              Go back
            </button>
            <a href="/" className="btn-manuscript-primary">
              Return to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
