
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Bike, Ship, Building, MapPin, Phone } from "lucide-react";
import FavoriteButton from "@/components/FavoriteButton";
import { FavoriteItem } from "@/context/FavoritesContext";

const bikeRentals = [
  {
    name: "Fietsen Popelier",
    address: "Mariastraat 26",
    price: "From €5 per day",
    hours: "9:00 - 18:00",
    directions: "https://maps.app.goo.gl/SqYoKdeF5QdTtdyb8",
    phone: "tel:+3250446446",
    location: { lat: 51.2051, lng: 3.2245 }
  },
  {
    name: "De Ketting",
    address: "Carmersstraat 7",
    price: "From €6 per day",
    hours: "9:00 - 18:00",
    directions: "https://maps.app.goo.gl/v3CuXtZzLWEdmmVu8",
    phone: "tel:+3250336549",
    location: { lat: 51.2072, lng: 3.2221 }
  },
  {
    name: "Bruges Bike Rental",
    address: "Niklaas Desparsstraat 17",
    price: "From €7 per day",
    hours: "8:30 - 19:00",
    directions: "https://maps.app.goo.gl/kM4UYJh1FsrmMLYb9",
    phone: "tel:+32495287594",
    location: { lat: 51.2090, lng: 3.2264 }
  },
];

// Helper function to build FavoriteItem (dummy image if none)
const makeFav = ({
  id,
  name,
  description,
  category,
  details,
  location,
}: {
  id: string;
  name: string;
  description: string;
  category: "place" | "restaurant" | "event" | "tour" | "bike_rental";
  details: Record<string, string | number>;
  location?: { lat: number; lng: number };
}): FavoriteItem => ({
  id,
  name,
  description,
  image: "/placeholder.svg",
  category,
  details,
  location,
});

const Tours: React.FC = () => {
  // All static tour data as FavoriteItem-ready objects
  const canalTours = [
    makeFav({
      id: "canal-huidenvettersplein",
      name: "Huidenvettersplein Boat Tour",
      description: "Huidenvettersplein Dock\nHuidenvettersplein\n€12 per person\n30 minutes",
      category: "tour",
      details: {
        location: "Huidenvettersplein",
        price: "€12 per person",
        duration: "30 minutes",
        type: "Boat Tour",
      },
      location: { lat: 51.2048, lng: 3.2263 }
    }),
    makeFav({
      id: "canal-rozenhoedkaai",
      name: "Rozenhoedkaai Boat Tour",
      description: "Rozenhoedkaai Dock\nRozenhoedkaai\n€12 per person\n30 minutes",
      category: "tour",
      details: {
        location: "Rozenhoedkaai",
        price: "€12 per person",
        duration: "30 minutes",
        type: "Boat Tour",
      },
      location: { lat: 51.2074, lng: 3.2274 }
    }),
  ];

  const horseTours = [
    makeFav({
      id: "horse-markt-square",
      name: "Markt Square Horse Tour",
      description: "Markt Square Carriage Stand\nMarkt Square\n€50 per carriage\n35 minutes",
      category: "tour",
      details: {
        location: "Markt Square",
        price: "€50 per carriage",
        duration: "35 minutes",
        type: "Horse Carriage Tour",
      },
      location: { lat: 51.2089, lng: 3.2247 }
    }),
  ];

  const walkTours = [
    makeFav({
      id: "walk-free",
      name: "Free Walking Tour",
      description: "Free Walking Tour\nMarkt Square\nFree (tips appreciated)\n2 hours",
      category: "tour",
      details: {
        location: "Markt Square",
        price: "Free (tips appreciated)",
        duration: "2 hours",
        type: "Walking Tour",
      },
      location: { lat: 51.2089, lng: 3.2247 }
    }),
    makeFav({
      id: "walk-chocolate",
      name: "Chocolate Walking Tour",
      description: "Chocolate Walking Tour\nMarkt Square\n€25 per person\n2.5 hours",
      category: "tour",
      details: {
        location: "Markt Square",
        price: "€25 per person",
        duration: "2.5 hours",
        type: "Walking Tour",
      },
      location: { lat: 51.2089, lng: 3.2247 }
    }),
    makeFav({
      id: "walk-beer",
      name: "Beer Walking Tour",
      description: "Beer Walking Tour\nMarkt Square\n€35 per person\n3 hours",
      category: "tour",
      details: {
        location: "Markt Square",
        price: "€35 per person",
        duration: "3 hours",
        type: "Walking Tour",
      },
      location: { lat: 51.2089, lng: 3.2247 }
    }),
  ];

  const bikeTours = [
    makeFav({
      id: "bike-city",
      name: "City Bike Tour",
      description: "City Bike Tour\nMarkt Square\n€25 per person\n2.5 hours",
      category: "tour",
      details: {
        location: "Markt Square",
        price: "€25 per person",
        duration: "2.5 hours",
        type: "Bike Tour",
      },
      location: { lat: 51.2089, lng: 3.2247 }
    }),
    makeFav({
      id: "bike-countryside",
      name: "Countryside Bike Tour",
      description: "Countryside Bike Tour\nMarkt Square\n€35 per person\n4 hours",
      category: "tour",
      details: {
        location: "Markt Square",
        price: "€35 per person",
        duration: "4 hours",
        type: "Bike Tour",
      },
      location: { lat: 51.2089, lng: 3.2247 }
    }),
  ];

  // Bike rental "favorites" convert:
  const bikeRentalsFav = bikeRentals.map(b => makeFav({
    id: `rental-${b.name.replace(/\s/g, "-").toLowerCase()}`,
    name: b.name,
    description: `${b.address}\n${b.price}\n${b.hours}`,
    category: "bike_rental",
    details: {
      address: b.address,
      price: b.price,
      hours: b.hours,
      type: "Bike Rental",
    },
    location: b.location
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero section remains the same */}
      <div className="relative pt-20 pb-10 md:pt-24 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            alt="Bruges Canal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto relative z-10 text-white pt-20 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            Plan Visit <span className="inline-flex items-center gap-1">&amp; <Bike className="inline" /></span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover the city's enchanting canals and historic streets in style
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto space-y-16">
          {/* Canal Boat Tours */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brugge flex items-center gap-2">
              <Ship className="inline" /> Canal Boat Tours
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {canalTours.map((tour, idx) => (
                <div key={tour.id} className="bg-gray-50 rounded-lg p-6 shadow-sm space-y-3 relative">
                  <div className="absolute top-2 right-2">
                    <FavoriteButton item={tour} />
                  </div>
                  <h3 className="text-xl font-semibold text-brugge mb-1">{tour.name}</h3>
                  <div className="text-gray-600">{tour.details.location}</div>
                  <div className="text-gray-600 mb-1">{tour.details.location}</div>
                  <ul className="text-gray-600 text-sm mb-1">
                    <li>{tour.details.price}</li>
                    <li>{tour.details.duration}</li>
                  </ul>
                  <div className="flex gap-2 items-center">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-brugge-light text-black text-xs font-medium">
                      <Ship size={14} className="mr-1" /> Boat Tour
                    </span>
                    <a href={idx === 0
                      ? "https://goo.gl/maps/T2Zs5jaGQfN2"
                      : "https://goo.gl/maps/UbRMGhqmFvT2"
                    } target="_blank" rel="noopener" className="flex items-center gap-1 text-brugge underline text-xs">
                      <MapPin size={14} /> Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horse Carriage Tours */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brugge flex items-center gap-2">
              <Building className="inline" /> Horse Carriage Tours
            </h2>
            <div className="grid gap-8">
              {horseTours.map((tour) => (
                <div key={tour.id} className="bg-gray-50 rounded-lg p-6 shadow-sm space-y-3 relative">
                  <div className="absolute top-2 right-2">
                    <FavoriteButton item={tour} />
                  </div>
                  <h3 className="text-xl font-semibold text-brugge mb-1">{tour.name}</h3>
                  <div className="text-gray-600">Markt Square Carriage Stand</div>
                  <div className="text-gray-600 mb-1">{tour.details.location}</div>
                  <ul className="text-gray-600 text-sm mb-1">
                    <li>{tour.details.price}</li>
                    <li>{tour.details.duration}</li>
                  </ul>
                  <div className="flex gap-2 items-center">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-brugge-gold text-black text-xs font-medium">
                      <Building size={14} className="mr-1" /> Horse Carriage Tour
                    </span>
                    <a href="https://goo.gl/maps/gJjvhWKd9h3KqQZB8" target="_blank" rel="noopener" className="flex items-center gap-1 text-brugge underline text-xs">
                      <MapPin size={14} /> Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Walk Tours */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brugge flex items-center gap-2">
              <MapPin className="inline" /> Walk Tours
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {walkTours.map((tour, idx) => (
                <div key={tour.id} className="bg-gray-50 rounded-lg p-6 shadow-sm space-y-3 relative">
                  <div className="absolute top-2 right-2">
                    <FavoriteButton item={tour} />
                  </div>
                  <h3 className="text-xl font-semibold text-brugge mb-1">{tour.name}</h3>
                  <div className="text-gray-600">{tour.details.type}</div>
                  <div className="text-gray-600 mb-1">{tour.details.location}</div>
                  <ul className="text-gray-600 text-sm mb-1">
                    <li>{tour.details.price}</li>
                    <li>{tour.details.duration}</li>
                  </ul>
                  <div className="flex gap-2 items-center">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-brugge-light text-black text-xs font-medium">
                      <MapPin size={14} className="mr-1" /> Walking Tour
                    </span>
                    <a href="https://goo.gl/maps/aF77C5fVC6zKvKq18" target="_blank" rel="noopener" className="flex items-center gap-1 text-brugge underline text-xs">
                      <MapPin size={14} /> Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bike Tours */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brugge flex items-center gap-2">
              <Bike className="inline" /> Bike Tours
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {bikeTours.map((tour, idx) => (
                <div key={tour.id} className="bg-gray-50 rounded-lg p-6 shadow-sm space-y-3 relative">
                  <div className="absolute top-2 right-2">
                    <FavoriteButton item={tour} />
                  </div>
                  <h3 className="text-xl font-semibold text-brugge mb-1">{tour.name}</h3>
                  <div className="text-gray-600">{tour.details.type}</div>
                  <div className="text-gray-600 mb-1">{tour.details.location}</div>
                  <ul className="text-gray-600 text-sm mb-1">
                    <li>{tour.details.price}</li>
                    <li>{tour.details.duration}</li>
                  </ul>
                  <div className="flex gap-2 items-center">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-brugge-light text-black text-xs font-medium">
                      <Bike size={14} className="mr-1" /> Bike Tour
                    </span>
                    <a href="https://goo.gl/maps/hM9YUmVN7dQkTDgq9" target="_blank" rel="noopener" className="flex items-center gap-1 text-brugge underline text-xs">
                      <MapPin size={14} /> Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rent a Bike */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-brugge">
              <Bike className="inline" /> Rent a Bike
            </h2>
            <p className="mb-4 text-gray-700">
              Explore Bruges at your own pace with a rental bike. Several shops offer bike rentals throughout the city.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bikeRentals.map((rental, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg p-4 shadow-sm flex flex-col gap-2 relative">
                  <div className="absolute top-2 right-2">
                    <FavoriteButton item={bikeRentalsFav[idx]} />
                  </div>
                  <div className="font-semibold text-lg text-brugge">{rental.name}</div>
                  <div className="text-gray-700">{rental.address}</div>
                  <div className="text-sm text-gray-600">{rental.price}</div>
                  <div className="text-sm text-gray-600">{rental.hours}</div>
                  <div className="flex gap-3 mt-1 text-xs">
                    <a href={rental.directions} className="flex items-center gap-1 text-brugge underline" target="_blank" rel="noopener">
                      <MapPin size={14} /> Get Directions
                    </a>
                    <a href={rental.phone} className="flex items-center gap-1 text-brugge underline" target="_blank" rel="noopener">
                      <Phone size={14} /> Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tours;
