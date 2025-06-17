import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pasofirme from "./pages/Pasofirme";
import Descubriendo from "./pages/Descubriendo"; // 👈 nueva importación
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const host = window.location.hostname;
  const isDescubriendo = host.startsWith("descubriendo");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {isDescubriendo ? (
              <>
                <Route path="*" element={<Descubriendo />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Pasofirme />} />
                <Route path="/descubriendo" element={<Descubriendo />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


