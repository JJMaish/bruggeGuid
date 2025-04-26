
export interface PlaceData {
  id?: string;
  name: string;
  type: string;
  rating: number;
  description: string;
  hours: string;
  price: string;
  coordinates: string;
}

export interface RestaurantData {
  id?: string;
  name: string;
  cuisine: string;
  address: string;
  description: string;
  hours: string;
  priceRange: string;
  coordinates: string;
}

const generateId = (prefix: string, name: string) => {
  return `${prefix}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
};

export const parsePlacesCSV = (data: string[][]): PlaceData[] => {
  const [headers, ...rows] = data;
  return rows.map((row) => ({
    id: generateId('place', row[0]),
    name: row[0],
    type: row[1],
    rating: parseFloat(row[2]),
    description: row[3],
    hours: row[4],
    price: row[5],
    coordinates: row[6]
  }));
};

export const parseRestaurantsCSV = (data: string[][]): RestaurantData[] => {
  const [headers, ...rows] = data;
  return rows.map((row) => ({
    id: generateId('restaurant', row[0]),
    name: row[0],
    cuisine: row[1],
    address: row[2],
    description: row[3],
    hours: row[4],
    priceRange: row[5],
    coordinates: row[6]
  }));
};
