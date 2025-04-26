
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FavoriteItem, useFavorites } from '@/context/FavoritesContext';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/sonner';

interface FavoriteButtonProps {
  item: FavoriteItem;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ item, className }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isFav = isFavorite(item.id);

  const toggleFavorite = () => {
    if (isFav) {
      removeFavorite(item.id);
      toast.success(`Removed ${item.name} from favorites`);
    } else {
      addFavorite(item);
      toast.success(`Added ${item.name} to favorites`);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "rounded-full transition-all duration-300",
        isFav ? "text-red-500 hover:text-red-700" : "text-gray-400 hover:text-red-500",
        className
      )}
      onClick={toggleFavorite}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart className={cn("h-5 w-5", isFav ? "fill-current" : "")} />
    </Button>
  );
};

export default FavoriteButton;
