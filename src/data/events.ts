
import { FavoriteItem } from '@/context/FavoritesContext';

export const events: FavoriteItem[] = [
  {
    id: "event-1",
    name: "Bruges Beer Festival",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Annual celebration of Belgian beer culture featuring over 500 different beers from local and regional breweries.",
    category: "event",
    details: {
      date: "February 5-6, 2025",
      location: "Market Square",
      price: "€15 entrance fee (includes tasting tokens)",
      duration: "2 days",
      website: "www.brugesbeerevents.be"
    }
  },
  {
    id: "event-2",
    name: "Procession of the Holy Blood",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "UNESCO-listed religious procession dating back to the Middle Ages, with costumed participants parading the holy relic.",
    category: "event",
    details: {
      date: "Ascension Day, May 18, 2025",
      location: "Throughout Historic Center",
      price: "Free",
      duration: "3 hours",
      website: "www.holyblood.com"
    }
  },
  {
    id: "event-3",
    name: "Christmas Market",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Magical winter market transforming Bruges' medieval squares into a festive wonderland with wooden chalets and ice skating.",
    category: "event",
    details: {
      date: "November 25 - January 2, 2026",
      location: "Market Square & Simon Stevinplein",
      price: "Free entrance (activities may have fees)",
      duration: "5 weeks",
      website: "www.visitbruges.be/winter"
    }
  },
  {
    id: "event-4",
    name: "Bruges Triennial",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Contemporary art and architecture festival featuring installations throughout the city's historic center and canals.",
    category: "event",
    details: {
      date: "June 1 - September 30, 2025",
      location: "Various locations throughout Bruges",
      price: "Free",
      duration: "4 months",
      website: "www.triennalebrugge.be"
    }
  },
  {
    id: "event-5",
    name: "Bruges Chocolate Festival",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Celebration of Belgian chocolate with demonstrations, tastings, and spectacular chocolate sculptures by master chocolatiers.",
    category: "event",
    details: {
      date: "March 12-14, 2025",
      location: "Belfort Hall, Market Square",
      price: "€10 Adults, €5 Children",
      duration: "3 days",
      website: "www.chocolatefestivalbruges.be"
    }
  },
  {
    id: "event-6",
    name: "Cactus Festival",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Intimate summer music festival in a park setting featuring international and local acts across various genres.",
    category: "event",
    details: {
      date: "July 8-10, 2025",
      location: "Minnewaterpark",
      price: "€45 Day Pass, €110 Weekend Pass",
      duration: "3 days",
      website: "www.cactusfestival.be"
    }
  },
];
