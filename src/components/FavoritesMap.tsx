
import React, { useEffect, useRef, useState } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
import { FavoriteItem } from '@/context/FavoritesContext';

const BELFRY_COORDINATES = { lat: 51.2080, lng: 3.2248 };

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; // Distance in km
  return distance.toFixed(2);
};

const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
};

interface FavoritesMapProps {
  favorites: FavoriteItem[];
  selectedFavorite: FavoriteItem | null;
}

const FavoritesMap: React.FC<FavoritesMapProps> = ({ favorites, selectedFavorite }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const [distance, setDistance] = useState<string | null>(null);

  useEffect(() => {
    fixLeafletIcon();
    
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: BELFRY_COORDINATES,
        zoom: 14,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          })
        ]
      });
      
      L.marker([BELFRY_COORDINATES.lat, BELFRY_COORDINATES.lng])
        .addTo(mapInstance.current)
        .bindPopup("<b>Belfry of Bruges</b>")
        .setIcon(L.divIcon({
          className: 'belfry-marker',
          html: `<div class="w-6 h-6 rounded-full bg-brugge border-2 border-white shadow-lg flex items-center justify-center text-white font-bold">B</div>`,
          iconSize: [24, 24]
        }));
      
      setTimeout(() => {
        mapInstance.current?.invalidateSize();
      }, 100);
    }
    
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);
  
  const fitAllMarkers = () => {
    if (!mapInstance.current || favorites.length === 0) return;
    
    // Fix: Create array of L.LatLngTuple compatible with Leaflet's bounds
    const markers: L.LatLngTuple[] = favorites
      .filter(item => item.location)
      .map(item => [item.location!.lat, item.location!.lng]);
    
    if (markers.length > 0) {
      // Add Belfry to the bounds too
      markers.push([BELFRY_COORDINATES.lat, BELFRY_COORDINATES.lng]);
      const bounds = L.latLngBounds(markers);
      mapInstance.current.fitBounds(bounds, { padding: [50, 50] });
    }
  };

  useEffect(() => {
    if (!mapInstance.current) return;
    
    Object.values(markersRef.current).forEach(marker => {
      marker.remove();
    });
    markersRef.current = {};
    
    favorites.forEach(item => {
      if (item.location) {
        const marker = L.marker([item.location.lat, item.location.lng])
          .addTo(mapInstance.current!)
          .bindPopup(`<b>${item.name}</b><br>${item.description}`)
          .setIcon(L.divIcon({
            className: 'favorite-marker',
            html: `<div class="w-6 h-6 rounded-full bg-gray-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs">${item.category.charAt(0).toUpperCase()}</div>`,
            iconSize: [24, 24]
          }));
        
        markersRef.current[item.id] = marker;
      }
    });
    
    mapInstance.current.invalidateSize();
  }, [favorites]);
  
  useEffect(() => {
    if (!mapInstance.current || !selectedFavorite) return;
    
    if (selectedFavorite.location) {
      mapInstance.current.panTo([selectedFavorite.location.lat, selectedFavorite.location.lng]);
      
      if (markersRef.current[selectedFavorite.id]) {
        markersRef.current[selectedFavorite.id].openPopup();
      }
      
      const dist = calculateDistance(
        BELFRY_COORDINATES.lat, 
        BELFRY_COORDINATES.lng, 
        selectedFavorite.location.lat, 
        selectedFavorite.location.lng
      );
      setDistance(`${dist} km from Belfry`);
    } else {
      setDistance(null);
    }
  }, [selectedFavorite]);
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-2 border-b">
        <Button 
          variant="outline" 
          onClick={fitAllMarkers}
          className="w-full"
        >
          <MapPin className="mr-2" />
          View All Locations
        </Button>
      </div>
      <div className="flex-grow relative" ref={mapRef} />
      {distance && (
        <div className="bg-white p-2 border-t text-xs text-center">
          {distance}
        </div>
      )}
    </div>
  );
};

export default FavoritesMap;
