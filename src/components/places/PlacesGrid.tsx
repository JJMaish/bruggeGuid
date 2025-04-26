
import React from 'react';
import ItemCard from '@/components/ItemCard';
import { Skeleton } from "@/components/ui/skeleton";

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

interface PlacesGridProps {
  items: ItemType[];
  loading: boolean;
}

const PlacesGrid: React.FC<PlacesGridProps> = ({ items, loading }) => {
  return (
    <section className="py-8 md:py-16 bg-gray-50 flex-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((place) => (
            <div key={place.id} className="flex">
              <ItemCard item={place} />
            </div>
          ))}
          {loading && (
            <>
              {[1, 2, 3].map((i) => (
                <div key={`skeleton-${i}`} className="rounded-lg overflow-hidden shadow-md">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {loading && !items.length && (
          <div className="py-8 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brugge"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacesGrid;
