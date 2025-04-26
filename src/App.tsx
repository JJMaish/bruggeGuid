
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Restaurants from "./pages/Restaurants";
import Events from "./pages/Events";
import Tours from "./pages/Tours";
import Favorites from "./pages/Favorites";
import Other from "./pages/Other";
import PhotoGallery from "./pages/PhotoGallery";
import NotFound from "./pages/NotFound";
import PlanATour from "./pages/PlanATour";
import MyPlan from "./pages/MyPlan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/events" element={<Events />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/other" element={<Other />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/plan-a-tour" element={<PlanATour />} />
            <Route path="/my-plan" element={<MyPlan />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
