
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Heart, MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useFavorites } from '@/context/FavoritesContext';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  address?: string;
  location?: { lat: number; lng: number };
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === item.id);
  const [expanded, setExpanded] = useState(false);
  const isLongDescription = item.description.length > 120;
  
  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(item.id);
    } else {
      // Convert Item to FavoriteItem with the proper category type
      const favoriteItem = {
        id: item.id,
        name: item.title,
        image: item.imageUrl,
        description: item.description,
        category: 'place' as 'place' | 'restaurant' | 'event' | 'tour' | 'bike_rental', // Using type assertion to match FavoriteItem
        details: {}
      };
      addFavorite(favoriteItem);
    }
  };

  // Generate Google Maps URL
  const getGoogleMapsUrl = () => {
    if (item.location) {
      return `https://www.google.com/maps/search/?api=1&query=${item.location.lat},${item.location.lng}`;
    } else if (item.address) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + " Bruges Belgium")}`;
  };

  return (
    <Card className={cn(
      "w-full flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
      expanded ? "h-auto z-10" : "h-full"
    )}>
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8 p-1 transition-transform duration-200 hover:scale-110"
          onClick={handleToggleFavorite}
        >
          <Heart className={`h-5 w-5 transition-colors duration-200 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
        </Button>
      </div>
      <CardHeader>
        <CardTitle className="transition-colors duration-200 hover:text-brugge">{item.title}</CardTitle>
        <CardDescription>
          {isLongDescription && !expanded ? (
            <div>
              <p className="line-clamp-3">{item.description}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 p-0 h-auto text-sm text-brugge hover:text-brugge-light flex items-center"
                onClick={() => setExpanded(true)}
              >
                Read more <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <p>{item.description}</p>
              {isLongDescription && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 p-0 h-auto text-sm text-brugge hover:text-brugge-light flex items-center"
                  onClick={() => setExpanded(false)}
                >
                  Show less <ChevronUp className="ml-1 h-3 w-3" />
                </Button>
              )}
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {item.address && (
          <div className="text-sm text-gray-500 mt-2">
            <MapPin className="inline-block h-4 w-4 mr-1" />
            {item.address}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto text-white bg-[#1EAEDB] hover:bg-[#0FA0CE] border-[#1EAEDB] hover:border-[#0FA0CE] transition-colors duration-200"
          asChild
        >
          <a 
            href={getGoogleMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <MapPin className="h-4 w-4 mr-1" />
            Get Directions
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
