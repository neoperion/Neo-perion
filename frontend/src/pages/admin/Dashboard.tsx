import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const Dashboard = () => {
  
  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet>
        <title>Dashboard | Neo Perion</title>
      </Helmet>
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dashboard Page</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            This page is currently under construction for Sprint 5.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
