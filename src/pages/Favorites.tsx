
import React, { useState } from 'react';
import { useFavorites } from '@/context/FavoritesContext';
import CompactFavoriteCard from '@/components/CompactFavoriteCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ScrollArea } from '@/components/ui/scroll-area';
import FavoritesMap from '@/components/FavoritesMap';
import { Bike, Ship, Building, MapPin, BookmarkCheck, Filter, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from '@/hooks/use-mobile';

const Favorites: React.FC = () => {
  const { favorites, getFavoritesByCategory } = useFavorites();
  const [selectedFavorite, setSelectedFavorite] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const placesFavorites = getFavoritesByCategory('place');
  const restaurantsFavorites = getFavoritesByCategory('restaurant');
  const eventsFavorites = getFavoritesByCategory('event');
  const tourFavorites = getFavoritesByCategory('tour');
  const bikeRentalFavorites = getFavoritesByCategory('bike_rental');
  
  const handleFavoriteClick = (item: any) => {
    setSelectedFavorite(item);
  };
  
  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedFavorite(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="pt-20 md:pt-28 pb-6 md:pb-10 bg-gradient-to-r from-brugge to-brugge-light">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 flex items-center gap-2">
            <BookmarkCheck className="h-6 w-6 md:h-8 md:w-8" /> Your Favorite Spots
          </h1>
          <p className="text-sm md:text-base text-gray-100">Keep track of your must-visit places, restaurants, events and tours.</p>
        </div>
      </div>
      
      {/* Favorites Content */}
      <section className="py-6 md:py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">No favorites yet</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Explore places, restaurants, events and tours in Bruges and add them to your favorites.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/places" className="text-brugge hover:text-brugge-light underline">
                  Explore Places
                </a>
                <a href="/restaurants" className="text-brugge hover:text-brugge-light underline">
                  Explore Restaurants
                </a>
                <a href="/events" className="text-brugge hover:text-brugge-light underline">
                  Explore Events
                </a>
                <a href="/tours" className="text-brugge hover:text-brugge-light underline">
                  Explore Tours
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left side - Category tabs and scrollable list */}
              <div className="col-span-1 lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
                {/* Filter dropdown - always visible, enhanced for mobile */}
                <div className="border-b p-4 bg-white flex justify-between items-center">
                  <h2 className="font-semibold">Favorites</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" /> 
                        {isMobile ? (
                          <span>
                            {selectedCategory === null ? 'All' : 
                             selectedCategory === 'place' ? 'Places' :
                             selectedCategory === 'restaurant' ? 'Restaurants' :
                             selectedCategory === 'event' ? 'Events' :
                             selectedCategory === 'tour' ? 'Tours' : 'Bike Rentals'}
                          </span>
                        ) : (
                          <span>Filter</span>
                        )}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          className={`cursor-pointer ${selectedCategory === null ? 'bg-brugge text-white' : ''}`}
                          onClick={() => handleCategoryClick(null)}
                        >
                          All ({favorites.length})
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem
                          className={`cursor-pointer ${selectedCategory === 'place' ? 'bg-brugge text-white' : ''}`}
                          onClick={() => handleCategoryClick('place')}
                        >
                          <MapPin className="h-4 w-4 mr-2" /> Places ({placesFavorites.length})
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem
                          className={`cursor-pointer ${selectedCategory === 'restaurant' ? 'bg-brugge text-white' : ''}`}
                          onClick={() => handleCategoryClick('restaurant')}
                        >
                          <Building className="h-4 w-4 mr-2" /> Restaurants ({restaurantsFavorites.length})
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem
                          className={`cursor-pointer ${selectedCategory === 'event' ? 'bg-brugge text-white' : ''}`}
                          onClick={() => handleCategoryClick('event')}
                        >
                          Events ({eventsFavorites.length})
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem
                          className={`cursor-pointer ${selectedCategory === 'tour' ? 'bg-brugge text-white' : ''}`}
                          onClick={() => handleCategoryClick('tour')}
                        >
                          <Ship className="h-4 w-4 mr-2" /> Tours ({tourFavorites.length})
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem
                          className={`cursor-pointer ${selectedCategory === 'bike_rental' ? 'bg-brugge text-white' : ''}`}
                          onClick={() => handleCategoryClick('bike_rental')}
                        >
                          <Bike className="h-4 w-4 mr-2" /> Bike Rentals ({bikeRentalFavorites.length})
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                {/* Category buttons - For desktop only, hidden on mobile */}
                {!isMobile && (
                  <div className="border-b p-4 bg-white">
                    <ScrollArea className="h-12">
                      <div className="flex space-x-2 pb-2">
                        <CategoryButton 
                          active={selectedCategory === null}
                          count={favorites.length}
                          onClick={() => handleCategoryClick(null)}
                        >
                          All
                        </CategoryButton>
                        
                        <CategoryButton 
                          active={selectedCategory === 'place'}
                          count={placesFavorites.length}
                          onClick={() => handleCategoryClick('place')}
                          icon={<MapPin className="w-4 h-4" />}
                        >
                          Places
                        </CategoryButton>
                        
                        <CategoryButton 
                          active={selectedCategory === 'restaurant'}
                          count={restaurantsFavorites.length}
                          onClick={() => handleCategoryClick('restaurant')}
                          icon={<Building className="w-4 h-4" />}
                        >
                          Restaurants
                        </CategoryButton>
                        
                        <CategoryButton 
                          active={selectedCategory === 'event'}
                          count={eventsFavorites.length}
                          onClick={() => handleCategoryClick('event')}
                        >
                          Events
                        </CategoryButton>
                        
                        <CategoryButton 
                          active={selectedCategory === 'tour'}
                          count={tourFavorites.length}
                          onClick={() => handleCategoryClick('tour')}
                          icon={<Ship className="w-4 h-4" />}
                        >
                          Tours
                        </CategoryButton>
                        
                        <CategoryButton 
                          active={selectedCategory === 'bike_rental'}
                          count={bikeRentalFavorites.length}
                          onClick={() => handleCategoryClick('bike_rental')}
                          icon={<Bike className="w-4 h-4" />}
                        >
                          Bike Rentals
                        </CategoryButton>
                      </div>
                    </ScrollArea>
                  </div>
                )}
                
                {/* Favorites list */}
                <ScrollArea className="h-[calc(100vh-350px)] md:h-[calc(100vh-400px)]">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {getFilteredFavorites().map(item => (
                        <div 
                          key={item.id} 
                          onClick={() => handleFavoriteClick(item)}
                          className={`cursor-pointer transition-all ${
                            selectedFavorite?.id === item.id ? 'border-2 border-brugge' : ''
                          }`}
                        >
                          <CompactFavoriteCard key={item.id} item={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </div>
              
              {/* Right side - Map */}
              <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow overflow-hidden h-[calc(50vh)] md:h-[calc(100vh-250px)]">
                <FavoritesMap 
                  favorites={getFilteredFavorites()}
                  selectedFavorite={selectedFavorite}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
  
  function getFilteredFavorites() {
    if (selectedCategory === null) return favorites;
    return getFavoritesByCategory(selectedCategory);
  }
};

// Helper component for category buttons
interface CategoryButtonProps {
  children: React.ReactNode;
  active: boolean;
  count: number;
  onClick: () => void;
  icon?: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  children, 
  active, 
  count, 
  onClick,
  icon
}) => {
  return (
    <button
      className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
        active
          ? 'bg-brugge text-white'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      }`}
      onClick={onClick}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children} ({count})
    </button>
  );
};

export default Favorites;
