
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import FavoriteButton from '@/components/FavoriteButton';

export interface LocationItem {
  id: string;
  title: string;
  description: string;
  address: string;
  type?: string;
  rating?: number;
  cuisine?: string;
  hours?: string;
  price?: string;
  priceRange?: string;
  image: string;
}

interface CategoryCardProps {
  item: LocationItem;
  icon: React.ReactNode;
  isRestaurant?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item, icon, isRestaurant = false }) => {
  const [expanded, setExpanded] = React.useState(false);
  const isLongDescription = item.description.length > 100;

  const favoriteItem = {
    id: item.id,
    name: item.title,
    description: item.description,
    image: item.image,
    category: isRestaurant ? 'restaurant' as const : 'place' as const,
    details: {
      address: item.address,
      ...(isRestaurant 
        ? {
            cuisine: item.cuisine,
            hours: item.hours,
            priceRange: item.priceRange
          }
        : {
            type: item.type,
            rating: item.rating,
            hours: item.hours,
            price: item.price
          }
      )
    }
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent(item.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <Card className={`h-full flex flex-col group ${expanded ? 'z-10' : ''}`}>
      <div className="relative">
        <div className="aspect-video w-full relative overflow-hidden rounded-t-lg">
          <img 
            src={item.image} 
            alt={item.title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-2 right-2">
            <FavoriteButton item={favoriteItem} className="bg-white/90 hover:bg-white" />
          </div>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-lg">{item.title}</CardTitle>
        </div>
        <CardDescription>
          {isLongDescription && !expanded ? (
            <>
              <p className="line-clamp-2">{item.description}</p>
              <Button 
                variant="ghost"
                size="sm"
                className="mt-1 p-0 h-auto text-xs text-brugge hover:text-brugge-light"
                onClick={() => setExpanded(true)}
              >
                Read more
              </Button>
            </>
          ) : (
            <>
              <p>{item.description}</p>
              {isLongDescription && (
                <Button 
                  variant="ghost"
                  size="sm"
                  className="mt-1 p-0 h-auto text-xs text-brugge hover:text-brugge-light"
                  onClick={() => setExpanded(false)}
                >
                  Show less
                </Button>
              )}
            </>
          )}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-2 flex-grow">
        <div className="space-y-1">
          {isRestaurant ? (
            <>
              {item.cuisine && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Cuisine:</span> {item.cuisine}
                </p>
              )}
              {item.priceRange && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Price Range:</span> {item.priceRange}
                </p>
              )}
            </>
          ) : (
            <>
              {item.type && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Type:</span> {item.type}
                </p>
              )}
              {item.rating && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Rating:</span> {item.rating}/5
                </p>
              )}
              {item.price && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Price:</span> {item.price}
                </p>
              )}
            </>
          )}
          {item.hours && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Hours:</span> {item.hours}
            </p>
          )}
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Address:</span> {item.address}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full text-white bg-[#1EAEDB] hover:bg-[#0FA0CE] border-[#1EAEDB] hover:border-[#0FA0CE] transition-colors duration-200"
          onClick={openGoogleMaps}
        >
          <MapPin className="h-4 w-4 mr-2" />
          Get Directions
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
