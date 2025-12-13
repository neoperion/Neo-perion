import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ClickSpark from "@/components/ClickSpark";
import { MessageCircle } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ClickSpark
      sparkColor="#00d4ff"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={12}
      duration={500}
      easing="ease-out"
      extraScale={1.0}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/917339125472?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          </a>
        </TooltipProvider>
      </QueryClientProvider>
    </ClickSpark>
  </HelmetProvider>
);

export default App;
