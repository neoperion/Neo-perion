import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ClickSpark from "@/components/ClickSpark";
import { MessageCircle } from "lucide-react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";
import { ServicePageTemplate } from "./components/services/ServicePageTemplate";
import IndustriesPage from "@/pages/IndustriesPage";

import FounderLetter from "./pages/FounderLetter";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import Security from "./pages/Security";
import SuccessStories from "./pages/SuccessStories";
import Testimonials from "./pages/Testimonials";
import Insights from "./pages/Insights";
import Technologies from "./pages/Technologies";
import TechnologyDetail from "./pages/TechnologyDetail";
import Dashboard from "./pages/admin/Dashboard";
import CareersAdmin from "./pages/admin/CareersAdmin";
import ApplicationsAdmin from "./pages/admin/ApplicationsAdmin";
import LeadsAdmin from "./pages/admin/LeadsAdmin";
import NewsletterAdmin from "./pages/admin/NewsletterAdmin";

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
              <Route path="/about" element={<AboutPage />} />
              <Route path="/company/founder-letter" element={<FounderLetter />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServicePageTemplate />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/technologies/:slug" element={<TechnologyDetail />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<CareerDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/security" element={<Security />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/insights" element={<Insights />} />

              {/* Admin Routes (Placeholder) */}
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/careers" element={<CareersAdmin />} />
              <Route path="/admin/applications" element={<ApplicationsAdmin />} />
              <Route path="/admin/leads" element={<LeadsAdmin />} />
              <Route path="/admin/newsletter" element={<NewsletterAdmin />} />

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
