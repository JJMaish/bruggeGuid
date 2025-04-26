
import restaurantsCSV from '@/CSV-DATA/restaurants.csv?raw';
import { parseRestaurantsCSV, RestaurantData } from '@/utils/csvParser';
import { FavoriteItem } from '@/context/FavoritesContext';

const parsedRestaurants = parseRestaurantsCSV(
  restaurantsCSV.split('\n').map(line => line.split(',').map(cell => cell.replace(/^"|"$/g, '')))
);

export const restaurants: FavoriteItem[] = parsedRestaurants.map(restaurant => ({
  id: restaurant.id || '',
  name: restaurant.name,
  image: `https://source.unsplash.com/featured/?${restaurant.coordinates.replace(/\+/g, ' ')}`,
  description: restaurant.description,
  category: 'restaurant',
  details: {
    address: restaurant.address,
    cuisine: restaurant.cuisine,
    hours: restaurant.hours,
    price: restaurant.priceRange
  }
}));
