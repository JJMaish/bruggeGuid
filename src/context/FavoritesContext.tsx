
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the types for our favorites
export type FavoriteItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: 'place' | 'restaurant' | 'event' | 'tour' | 'bike_rental';
  details: Record<string, string | number>;
  location?: {
    lat: number;
    lng: number;
  };
};

// Define the context type
type FavoritesContextType = {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  getFavoritesByCategory: (category: string) => FavoriteItem[];
};

// Create the context
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Provider component
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Add item to favorites
  const addFavorite = (item: FavoriteItem) => {
    if (!isFavorite(item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  // Remove item from favorites
  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  // Check if item is in favorites
  const isFavorite = (id: string): boolean => {
    return favorites.some(item => item.id === id);
  };

  // Get favorites by category
  const getFavoritesByCategory = (category: string): FavoriteItem[] => {
    return favorites.filter(item => item.category === category);
  };

  return (
    <FavoritesContext.Provider 
      value={{ favorites, addFavorite, removeFavorite, isFavorite, getFavoritesByCategory }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the favorites context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
