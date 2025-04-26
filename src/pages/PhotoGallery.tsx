import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon, MapPin, Filter } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { Button } from '@/components/ui/button';

// Import images using Vite's assets handling
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';
import banner6 from '../assets/banner6.jpg';
import banner7 from '../assets/banner7.jpg';
import banner8 from '../assets/banner8.jpg';
import banner9 from '../assets/banner9.jpg';
import banner10 from '../assets/banner10.jpg';
import banner11 from '../assets/banner11.JPG';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Photo {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  category: string;
}

// Expanded photo collection with categories
const photos: Photo[] = [
  {
    id: "1",
    title: "Belfry of Bruges",
    description: "Medieval bell tower in the city center",
    location: "Markt 7, 8000 Brugge",
    imageUrl: banner1,
    category: "landmarks"
  },
  {
    id: "2",
    title: "Church of Our Lady",
    description: "13th-century church with Michelangelo's Madonna",
    location: "Mariastraat, 8000 Brugge",
    imageUrl: banner2,
    category: "landmarks"
  },
  {
    id: "3",
    title: "Minnewater Lake",
    description: "The Lake of Love, a romantic spot in Bruges",
    location: "Minnewater, 8000 Brugge",
    imageUrl: banner3,
    category: "nature"
  },
  {
    id: "4",
    title: "Canals of Bruges",
    description: "Scenic waterways through the historic city",
    location: "City Center, Bruges",
    imageUrl: banner4,
    category: "urban"
  },
  {
    id: "5",
    title: "Market Square",
    description: "Historic central square surrounded by colorful buildings",
    location: "Markt, 8000 Brugge",
    imageUrl: banner5,
    category: "urban"
  },
  {
    id: "6",
    title: "Begijnhof",
    description: "Historic monastery with a peaceful garden",
    location: "Begijnhof, 8000 Brugge",
    imageUrl: banner6,
    category: "landmarks"
  },
   {
    id: "7",
    title: "Rozenhoedkaai",
    description: "One of the most photographed spots in Bruges",
    location: "Rozenhoedkaai, 8000 Brugge",
    imageUrl: banner7,
    category: "landmarks"
  },
   {
    id: "8",
    title: "Sint-Janshospitaal",
    description: "Medieval hospital with art collection",
    location: "Mariastraat 38, 8000 Brugge",
    imageUrl: banner8,
    category: "landmarks"
  },
   {
    id: "9",
    title: "Groeninge Museum",
    description: "Fine arts museum with Flemish primitives",
    location: "Dijver 12, 8000 Brugge",
    imageUrl: banner9,
    category: "culture"
  },
   {
    id: "10",
    title: "Bruges Beer Museum",
    description: "Museum dedicated to Belgian beer culture",
    location: "Breidelstraat 3, 8000 Brugge",
    imageUrl: banner10,
    category: "culture"
  },
   {
    id: "11",
    title: "Burg Square",
    description: "Historic square with City Hall and Basilica",
    location: "Burg, 8000 Brugge",
    imageUrl: banner11,
    category: "landmarks"
  },
   {
    id: "12",
    title: "Chocolate Museum",
    description: "Museum showcasing Belgian chocolate-making",
    location: "Wijnzakstraat 2, 8000 Brugge",
    imageUrl: banner1, // Reusing banner1 since we only have 11 images
    category: "culture"
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'landmarks', name: 'Landmarks' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'culture', name: 'Culture & Art' },
    { id: 'nature', name: 'Nature & Parks' },
    { id: 'food', name: 'Food & Dining' }
  ];
  
  // Filter photos based on selected category
  const filteredPhotos = filter === 'all' ? 
    photos : 
    photos.filter(photo => photo.category === filter);
    
  const { displayedItems, loading } = useInfiniteScroll(filteredPhotos, 6);

  const openGoogleMaps = (location: string) => {
    const encodedLocation = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-6 w-6" />
            <h1 className="text-3xl font-bold">Photo Gallery</h1>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Photo Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {categories.map(category => (
                  <DropdownMenuItem
                    key={category.id}
                    className={`cursor-pointer ${filter === category.id ? 'bg-brugge text-white' : ''}`}
                    onClick={() => setFilter(category.id)}
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((photo) => (
              <Card 
                key={photo.id} 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{photo.title}</CardTitle>
                  <CardDescription>{photo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Location: {photo.location}</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      openGoogleMaps(photo.location);
                    }}
                  >
                    <MapPin className="h-4 w-4 mr-2" /> Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {loading && (
            <div className="py-8 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brugge"></div>
            </div>
          )}
        </ScrollArea>

        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl">
            {selectedPhoto && (
              <div>
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={selectedPhoto.imageUrl}
                    alt={selectedPhoto.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                <p className="text-gray-600 mb-4">{selectedPhoto.description}</p>
                <p className="text-sm text-gray-500 mb-4">Location: {selectedPhoto.location}</p>
                <Button 
                  onClick={() => openGoogleMaps(selectedPhoto.location)}
                  className="flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoGallery;
