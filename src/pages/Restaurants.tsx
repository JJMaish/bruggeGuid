import React, { useState, useMemo } from 'react';
import { restaurants } from '@/data/restaurants';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import RestaurantsHero from '@/components/restaurants/RestaurantsHero';
import RestaurantsFilterBar from '@/components/restaurants/RestaurantsFilterBar';
import RestaurantsGrid, { RestaurantItem } from '@/components/restaurants/RestaurantsGrid';
import CulinaryTips from '@/components/restaurants/CulinaryTips';

// Convert CSV data to proper format with string types
const restaurantItems: RestaurantItem[] = restaurants.map(restaurant => ({
  id: restaurant.id,
  title: restaurant.name,
  cuisine: String(restaurant.details?.cuisine || 'Belgian'),
  address: String(restaurant.details?.address || restaurant.name + ", Bruges, Belgium"),
  description: restaurant.description,
  hours: String(restaurant.details?.hours || 'Not specified'),
  priceRange: String(restaurant.details?.price || '€€'),
  imageUrl: restaurant.image
}));

const Restaurants: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Restaurant categories for filtering
  const categories = [
    { id: 'all', name: 'All Restaurants' },
    { id: 'belgian', name: 'Belgian Cuisine' },
    { id: 'international', name: 'International' },
    { id: 'cafe', name: 'Cafés & Bistros' },
    { id: 'seafood', name: 'Seafood' }
  ];
  
  // Memoize the filtered restaurants
  const filteredRestaurants = useMemo(() => {
    if (filter === 'all') return restaurantItems;
    return restaurantItems.filter((_, index) => 
      index % categories.length === categories.findIndex(c => c.id === filter)
    );
  }, [filter]);
    
  const { displayedItems, loading } = useInfiniteScroll<RestaurantItem>(filteredRestaurants, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <RestaurantsHero />
      <RestaurantsFilterBar 
        categories={categories}
        currentFilter={filter}
        onFilterChange={setFilter}
        totalCount={filteredRestaurants.length}
      />
      <RestaurantsGrid restaurants={displayedItems} loading={loading} />
      
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
      
      <CulinaryTips />
      <Footer />
    </div>
  );
};

export default Restaurants;
