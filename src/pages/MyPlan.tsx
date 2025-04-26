
import React, { useRef } from 'react';
import { useFavorites } from '@/context/FavoritesContext';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Info, ArrowRight } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const MyPlan = () => {
  const { favorites } = useFavorites();
  const { toast } = useToast();
  const planRef = useRef<HTMLDivElement>(null);
  
  const handleDownloadPDF = async () => {
    if (!planRef.current) {
      toast({
        title: "Error",
        description: "Cannot generate PDF at this time.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Generating PDF",
      description: "Please wait while we create your tour plan...",
    });
    
    try {
      const canvas = await html2canvas(planRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('Bruges-Tour-Plan.pdf');
      
      toast({
        title: "Success!",
        description: "Your tour plan has been downloaded.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
      console.error("PDF generation error:", error);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <div ref={planRef} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Plan Header with hero image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://source.unsplash.com/1600x400/?bruges,belgium" 
                alt="Bruges"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2 animate-fade-in">Your Personalized Bruges Tour</h1>
                <p className="text-xl opacity-90 animate-fade-in delay-100">3 Days of Adventure</p>
              </div>
            </div>
            
            {/* Plan Content */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                {/* Day 1 */}
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold flex items-center mb-6 text-brugge">
                    <Calendar className="mr-2" /> Day 1 - Historic Wonders
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Timeline items */}
                    {['morning', 'afternoon', 'evening'].map((time, index) => (
                      <Card key={time} className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-lg font-semibold text-brugge capitalize mb-4">{time}</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <Clock className="h-5 w-5 text-brugge mt-1" />
                            <div>
                              <h4 className="font-medium">{favorites[index]?.name || 'Visit Historic Site'}</h4>
                              <p className="text-gray-600 text-sm mt-1">
                                {favorites[index]?.description || 'Experience the rich history of Bruges'}
                              </p>
                            </div>
                          </div>
                          <Button 
                            variant="outline"
                            size="sm"
                            className="text-white bg-[#1EAEDB] hover:bg-[#0FA0CE] border-[#1EAEDB] hover:border-[#0FA0CE] transition-colors duration-200"
                            onClick={() => {
                              const address = encodeURIComponent("Bruges Belgium");
                              window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
                            }}
                          >
                            <MapPin className="h-4 w-4 mr-1" />
                            Get Directions
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24 space-y-6 animate-fade-in delay-200">
                  <h3 className="font-bold text-xl mb-4 flex items-center text-brugge">
                    <Info className="mr-2" /> Tour Summary
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-medium">Dates</p>
                      <p className="text-sm text-gray-600">May 15 - May 17, 2025</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-medium">Interests</p>
                      <p className="text-sm text-gray-600">History, Art, Local Cuisine</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-medium">Attractions</p>
                      <p className="text-sm text-gray-600">8 Historic Sites</p>
                      <p className="text-sm text-gray-600">4 Restaurants</p>
                      <p className="text-sm text-gray-600">2 Museums</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-medium">Budget Estimate</p>
                      <p className="text-sm text-gray-600">€550 - €650</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button 
                      className="w-full bg-brugge hover:bg-brugge-gold transition-all duration-300"
                      onClick={handleDownloadPDF}
                    >
                      Download PDF
                    </Button>
                    <Button variant="outline" className="w-full border-brugge text-brugge hover:bg-brugge hover:text-white transition-all duration-300">
                      Share Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyPlan;
