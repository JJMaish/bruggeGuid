
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleParking, ShoppingBag, Gift, Info } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { parkingLocations, chocolateShops, souvenirShops } from '@/data/locations';

const Other = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Other Places in Bruges</h1>
        
        <Tabs defaultValue="parking" className="w-full space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="mb-4 inline-flex h-auto p-1 w-full md:w-auto">
              <TabsTrigger value="parking" className="flex items-center gap-2 whitespace-nowrap">
                <CircleParking className="h-4 w-4" />
                Parking
              </TabsTrigger>
              <TabsTrigger value="chocolate" className="flex items-center gap-2 whitespace-nowrap">
                <ShoppingBag className="h-4 w-4" />
                Chocolate Shops
              </TabsTrigger>
              <TabsTrigger value="souvenirs" className="flex items-center gap-2 whitespace-nowrap">
                <Gift className="h-4 w-4" />
                Souvenirs
              </TabsTrigger>
              <TabsTrigger value="about" className="flex items-center gap-2 whitespace-nowrap">
                <Info className="h-4 w-4" />
                About
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="parking">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parkingLocations.map((item) => (
                <CategoryCard 
                  key={item.id} 
                  item={item} 
                  icon={<CircleParking className="h-5 w-5" />}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chocolate">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chocolateShops.map((item) => (
                <CategoryCard 
                  key={item.id} 
                  item={item} 
                  icon={<ShoppingBag className="h-5 w-5" />}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="souvenirs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {souvenirShops.map((item) => (
                <CategoryCard 
                  key={item.id} 
                  item={item} 
                  icon={<Gift className="h-5 w-5" />}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-4">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Welcome to [Your Website Name], your ultimate guide to discovering the magic of Bruges! We are a passionate group of students who have come together to create a one-stop platform that helps travelers like you explore the very best of this enchanting medieval city.
               
                  Why We Created This Platform
                  As locals and frequent explorers of Bruges, we've noticed that visitors often ask the same questions:
                  Where are the best waffles?
                  What hidden gems should I visit?
                  How can I make the most of my short stay?
              
                  That's why we built this website—to provide everything you need in one place: from must-see landmarks and top-rated restaurants to upcoming events, curated tours, and even an AI-powered trip planner to customize your perfect itinerary.
                
                  What We Offer
                  ✅ Places – The most stunning sights, from the iconic Markt square to secret alleyways.
                  ✅ Restaurants – Handpicked spots for authentic Belgian fries, chocolate, and beer.
                  ✅ Events – Festivals, markets, and cultural happenings you won't want to miss.
                  ✅ Tours – Themed walks, boat rides, and expert-guided experiences.
                  ✅ Gallery – A visual journey through Bruges' timeless beauty.
                  ✅ Plan a Tour (with AI) – Let our smart tool design a personalized trip just for you!

                  Our Mission
                  We believe every traveler deserves a seamless, memorable, and truly local experience. Whether you're here for a day or a week, we want to help you fall in love with Bruges—just like we have.

                  Got questions or suggestions? Feel free to reach out—we'd love to hear from you!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Other;
