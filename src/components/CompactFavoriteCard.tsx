
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FavoriteItem } from '@/context/FavoritesContext';
import FavoriteButton from './FavoriteButton';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface CompactFavoriteCardProps {
  item: FavoriteItem;
}

const CompactFavoriteCard: React.FC<CompactFavoriteCardProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const isLongDescription = item.description.length > 100;

  const openGoogleMaps = () => {
    const address = encodeURIComponent(
      typeof item.details?.address === 'string' ? item.details.address : `${item.name} Bruges Belgium`
    );
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <Card className={`flex overflow-hidden transition-all duration-300 hover:shadow-md group ${expanded ? 'flex-col' : ''}`}>
      <div className={`${expanded ? 'w-full h-48' : 'w-24 h-24'} flex-shrink-0 relative transition-all duration-300`}>
        <img 
          src={item.image} 
          alt={item.name} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <CardContent className={`flex-1 p-3 relative ${expanded ? 'p-4' : ''}`}>
        <div className="absolute top-2 right-2">
          <FavoriteButton item={item} className="scale-75" />
        </div>
        
        <h4 className="font-semibold text-brugge line-clamp-1">{item.name}</h4>
        
        {isLongDescription && !expanded ? (
          <>
            <p className="text-gray-600 text-xs line-clamp-2 mt-1">{item.description}</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-1 p-0 h-auto text-xs text-brugge hover:text-brugge-light flex items-center"
              onClick={() => setExpanded(true)}
            >
              Read more <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </>
        ) : (
          <>
            <p className={`text-gray-600 ${expanded ? 'text-sm' : 'text-xs'} mt-1 ${expanded ? 'animate-fade-in' : 'line-clamp-2'}`}>
              {item.description}
            </p>
            {isLongDescription && expanded && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 p-0 h-auto text-xs text-brugge hover:text-brugge-light flex items-center"
                onClick={() => setExpanded(false)}
              >
                Show less <ChevronUp className="ml-1 h-3 w-3" />
              </Button>
            )}
          </>
        )}
        
        {expanded && (
          <div className="mt-3 space-y-2 animate-fade-in">
            {Object.entries(item.details).map(([key, value]) => (
              <div key={key} className="flex justify-between text-xs">
                <span className="text-gray-500 capitalize">{key.replace('_', ' ')}:</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
            
            <Button
              size="sm"
              className="mt-2 text-white bg-[#1EAEDB] hover:bg-[#0FA0CE] transition-colors duration-200 w-full"
              onClick={openGoogleMaps}
            >
              <MapPin className="h-4 w-4 mr-1" />
              Get Directions
            </Button>
          </div>
        )}
        
        {!expanded && (
          <div className="mt-1">
            {Object.entries(item.details).slice(0, 2).map(([key, value]) => (
              <div key={key} className="flex justify-between text-xs">
                <span className="text-gray-500 capitalize">{key.replace('_', ' ')}:</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
            
            <Button
              size="sm"
              className="mt-2 text-white bg-[#1EAEDB] hover:bg-[#0FA0CE] transition-colors duration-200 w-full"
              onClick={openGoogleMaps}
            >
              <MapPin className="h-4 w-4 mr-1" />
              Get Directions
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CompactFavoriteCard;
