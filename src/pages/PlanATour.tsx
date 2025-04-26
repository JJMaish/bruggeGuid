
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourPlannerForm from '@/components/TourPlannerForm';

const PlanATour = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmitWebhook = async (webhookUrl: string, data: any) => {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Handle CORS issues
        body: JSON.stringify(data),
      });
      
      toast({
        title: "Tour planning request sent!",
        description: "We'll prepare your personalized tour plan shortly.",
      });
      
      // In a real application, we would wait for a response from n8n
      // For now, we'll simulate success
      setTimeout(() => {
        navigate('/my-plan');
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting to webhook:", error);
      toast({
        title: "Error",
        description: "Failed to submit your tour plan request. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-10 md:pt-24 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
            alt="Plan Your Tour" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto relative z-10 text-white pt-20 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Perfect Bruges Tour</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Let us create a personalized tour plan based on your preferences, interests, and schedule.
          </p>
        </div>
      </div>
      
      {/* Form Section */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-brugge">Your Tour Preferences</h2>
            <TourPlannerForm />
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-brugge">Your Saved Favorites</h2>
            <p className="text-gray-600 mb-4">
              We'll incorporate your saved favorites into your tour plan. Visit our Places, Restaurants, Events, 
              and Tours pages to add items to your favorites.
            </p>
            <Button 
              onClick={() => navigate('/favorites')}
              variant="outline" 
              className="border-brugge text-brugge hover:bg-brugge hover:text-white"
            >
              View Your Favorites
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PlanATour;
