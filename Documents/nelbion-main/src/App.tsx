import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NelbionSidebar } from "@/components/NelbionSidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Why from "./pages/Why";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Energy from "./pages/subsidiaries/Energy";
import Foundation from "./pages/subsidiaries/Foundation";
import Blockchain from "./pages/subsidiaries/Blockchain";
import AgriTech from "./pages/subsidiaries/AgriTech";
import FinTech from "./pages/subsidiaries/FinTech";
import HealthTech from "./pages/subsidiaries/HealthTech";
import Infrastructure from "./pages/subsidiaries/Infrastructure";
import AI from "./pages/subsidiaries/AI";
import Labs from "./pages/subsidiaries/Labs";
import Academy from "./pages/subsidiaries/Academy";
import Security from "./pages/subsidiaries/Security";
import Investment from "./pages/Investment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <div className="min-h-screen flex w-full">
            <NelbionSidebar />
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/why" element={<Why />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/energy" element={<Energy />} />
                <Route path="/foundation" element={<Foundation />} />
                <Route path="/blockchain" element={<Blockchain />} />
                <Route path="/agritech" element={<AgriTech />} />
                <Route path="/fintech" element={<FinTech />} />
                <Route path="/healthtech" element={<HealthTech />} />
                <Route path="/infrastructure" element={<Infrastructure />} />
                <Route path="/ai" element={<AI />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/security" element={<Security />} />
                <Route path="/investment" element={<Investment />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
