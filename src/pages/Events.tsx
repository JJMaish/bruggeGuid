
import React from 'react';
import { events } from '@/data/events';
import ItemCard from '@/components/ItemCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Define proper interface for items
interface ItemType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  address?: string;
  location?: { lat: number; lng: number };
}

// Convert FavoriteItem to Item for ItemCard component
const convertEventsToItems = (events): ItemType[] => {
  return events.map(event => ({
    id: event.id,
    title: event.name,
    description: event.description,
    imageUrl: event.image,
    address: event.details?.location || event.details?.address || "Bruges, Belgium",
    location: event.location || { lat: 51.2093, lng: 3.2247 } // Default to Bruges center if no location
  }));
};

const eventsItems = convertEventsToItems(events);

const Events: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16 pb-6 md:pt-24 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
            alt="Bruges Events" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto relative z-10 text-white pt-16 md:pt-20 pb-6 md:pb-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Bruges Events</h1>
          <p className="text-base md:text-xl max-w-2xl">
            Experience the vibrant cultural calendar of Bruges with festivals, exhibitions, and seasonal celebrations throughout the year.
          </p>
        </div>
      </div>
      
      {/* Events Grid */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {eventsItems.map((event) => (
              <div key={event.id} className="flex">
                <ItemCard item={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Seasonal Events Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-brugge">Seasonal Celebrations</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-brugge">Spring</h3>
              <p className="text-gray-700">
                Procession of the Holy Blood, Meifoor Spring Fair, and Easter celebrations throughout the city.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-brugge">Summer</h3>
              <p className="text-gray-700">
                Cactus Festival, Bruges Triennial of Contemporary Art, and outdoor concerts in medieval squares.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-brugge">Autumn</h3>
              <p className="text-gray-700">
                Kookeet Culinary Festival, Bruges Beer Festival, and Halloween events in historic locations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-brugge">Winter</h3>
              <p className="text-gray-700">
                Christmas Market, Ice Sculpture Festival, and New Year celebrations throughout the city center.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fixed button at the bottom right */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button
          asChild
          size="lg"
          className="bg-brugge-gold hover:bg-brugge text-black hover:text-white shadow-lg"
        >
          <Link to="/tours">Book Now</Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
