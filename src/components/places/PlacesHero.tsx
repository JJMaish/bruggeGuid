
import React, { useState } from 'react';

const PlacesHero = () => {
  const [headerImageLoaded, setHeaderImageLoaded] = useState<boolean>(false);

  return (
    <div className="relative pt-16 pb-6 md:pt-24 md:pb-16">
      <div className="absolute inset-0 z-0 bg-gray-300">
        {!headerImageLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse bg-gray-300 w-full h-full"></div>
          </div>
        )}
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&q=60&w=1000" 
          alt="Bruges Places" 
          className={`w-full h-full object-cover transition-opacity duration-300 ${headerImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setHeaderImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto relative z-10 text-white pt-16 md:pt-20 pb-6 md:pb-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Explore Bruges</h1>
        <p className="text-base md:text-xl max-w-2xl">
          Discover the historic sites, charming streets, and hidden gems that make Bruges one of Europe's most beautiful cities.
        </p>
      </div>
    </div>
  );
};

export default PlacesHero;
