
import React, { useState, useMemo } from 'react';
import { places } from '@/data/places';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import PlacesHero from '@/components/places/PlacesHero';
import PlacesFilter from '@/components/places/PlacesFilter';
import PlacesGrid from '@/components/places/PlacesGrid';

// Define proper interface for items
interface ItemType {
  id: string;
  title: string;
  type: string;
  rating: number;
  description: string;
  hours: string;
  price: string;
  address: string;
  imageUrl: string;
}

// Convert CSV data to proper types
const placesItems: ItemType[] = places.map(place => ({
  id: place.id,
  title: place.name,
  type: String(place.details?.type || 'Tourist Attraction'),
  rating: parseFloat(place.details?.rating || '0'),
  description: place.description,
  hours: String(place.details?.hours || 'Not specified'),
  price: String(place.details?.price || 'Not specified'),
  address: typeof place.details?.address === 'string' 
    ? place.details.address 
    : place.name + ", Bruges, Belgium",
  imageUrl: place.image
}));

const Places: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Places' },
    { id: 'historic', name: 'Historic Sites' },
    { id: 'museums', name: 'Museums' },
    { id: 'churches', name: 'Churches' },
    { id: 'parks', name: 'Parks & Gardens' }
  ];
  
  // Memoize filtered places
  const filteredPlaces = useMemo(() => {
    if (filter === 'all') return placesItems;
    return placesItems.filter((_, index) => 
      index % categories.length === categories.findIndex(c => c.id === filter)
    );
  }, [filter]);
  
  const { displayedItems, loading } = useInfiniteScroll<ItemType>(filteredPlaces, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PlacesHero />
      <PlacesFilter 
        categories={categories}
        currentFilter={filter}
        onFilterChange={setFilter}
        totalPlaces={filteredPlaces.length}
      />
      <PlacesGrid items={displayedItems} loading={loading} />
      
      {/* Fixed "Need Help?" button */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button
          size="lg"
          className="bg-brugge-gold hover:bg-brugge text-black hover:text-white shadow-lg flex items-center gap-2"
          onClick={() => {
            alert("AI Chat Assistant would open here");
          }}
        >
          <MessageCircle size={16} />
          Need Help?
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Places;
