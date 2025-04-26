
import placesCSV from '@/CSV-DATA/places.csv?raw';
import { parsePlacesCSV, PlaceData } from '@/utils/csvParser';
import { FavoriteItem } from '@/context/FavoritesContext';

const parsedPlaces = parsePlacesCSV(
  placesCSV.split('\n').map(line => line.split(',').map(cell => cell.replace(/^"|"$/g, '')))
);

export const places: FavoriteItem[] = parsedPlaces.map(place => ({
  id: place.id || '',
  name: place.name,
  image: `https://source.unsplash.com/featured/?${place.coordinates.replace(/\+/g, ' ')}`,
  description: place.description,
  category: 'place',
  details: {
    address: place.coordinates.replace(/\+/g, ' '),
    type: place.type,
    hours: place.hours,
    price: place.price,
    rating: place.rating
  }
}));
