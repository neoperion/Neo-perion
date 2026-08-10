import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import { IndustryPageRouter } from "@/components/industries/IndustryPageRouter";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";

import FounderLetter from "./pages/FounderLetter";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import Contact from "./pages/Contact";
import UsClients from "./pages/UsClients";
import Security from "./pages/Security";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import SuccessStories from "./pages/SuccessStories";
import Testimonials from "./pages/Testimonials";
import Insights from "./pages/Insights";
import Technologies from "./pages/Technologies";
import TechnologyDetail from "./pages/TechnologyDetail";
import Dashboard from "./pages/admin/Dashboard";
import CareersAdmin from "./pages/admin/CareersAdmin";
import ApplicationsAdmin from "./pages/admin/ApplicationsAdmin";
import LeadsAdmin from "./pages/admin/LeadsAdmin";
import BlogAdmin from "./pages/admin/BlogAdmin";
import AdminCaseStudies from "./pages/admin/AdminCaseStudies";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminServices from "./pages/admin/AdminServices";
import AdminPortfolio from "./pages/admin/AdminPortfolio";
import AdminTalentNetwork from "./pages/admin/AdminTalentNetwork";

import { CookieConsent } from "@/shared/CookieConsent";
import { PageTracker } from "@/shared/PageTracker";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminLogin } from "@/pages/admin/AdminLogin";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTracker />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/company/about" element={<AboutPage />} />
              <Route path="/company/founder-letter" element={<FounderLetter />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServicePageTemplate />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/:slug" element={<IndustryPageRouter />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/technologies/:slug" element={<TechnologyDetail />} />
              <Route path="/company/blog" element={<BlogPage />} />
              <Route path="/company/blog/:slug" element={<BlogPost />} />
              <Route path="/company/case-studies" element={<CaseStudies />} />
              <Route path="/company/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/company/careers" element={<Careers />} />
              <Route path="/company/careers/:slug" element={<CareerDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/security" element={<Security />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/company/success-stories" element={<SuccessStories />} />
              <Route path="/company/testimonials" element={<Testimonials />} />
              <Route path="/company/insights" element={<Insights />} />
              <Route path="/for-us-clients" element={<UsClients />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />

              {/* Admin Login - Outside of AdminLayout Guard */}
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="blogs" element={<BlogAdmin />} />
                <Route path="careers" element={<CareersAdmin />} />
                <Route path="applications" element={<ApplicationsAdmin />} />
                <Route path="leads" element={<LeadsAdmin />} />
                <Route path="case-studies" element={<AdminCaseStudies />} />
                <Route path="testimonials" element={<AdminTestimonials />} />
                <Route path="talent-network" element={<AdminTalentNetwork />} />
                <Route path="analytics" element={<AdminAnalytics />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="services" element={<AdminServices />} />
                <Route path="portfolio" element={<AdminPortfolio />} />
              </Route>

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
            <CookieConsent />
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
