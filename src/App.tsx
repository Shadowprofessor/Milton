
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";
import Lore from "./pages/Lore";
import Missions from "./pages/Missions";
import Leaderboard from "./pages/Leaderboard";
import Media from "./pages/Media";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import CustomCursor from "./components/CustomCursor";
import AudioControls from "./components/Audio/AudioControls";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <>
                <CustomCursor />
                <StarBackground />
                <Navbar />
                <main className="min-h-screen">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/lore" element={<Lore />} />
                    <Route path="/missions" element={<Missions />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                <AudioControls />
              </>
            )}
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
