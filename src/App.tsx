import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import JJAtelierPage from "./pages/JJAtelierPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage";
import Lenis from 'lenis'
import HeroSection from "./components/HeroSection";

const queryClient = new QueryClient();

const App = () => {
  const [isFrontPage, setIsFrontPage] = useState(true);
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
          {isFrontPage ? (
              <HeroSection
                backgroundImage="/images/front-page.png"
                title="WORLD OF JJ"
                subtitle="WELCOME TO THE"
                buttonText="Shop Collection"
                buttonLink="#"
                bigHeader={true}
                onClickButton={() => setIsFrontPage(false)}
              />
            ) : (
              <>
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/jj-atelier" element={<JJAtelierPage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/admin-panel" element={<AdminPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                <Footer />
                </main>
              </>
            )}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;