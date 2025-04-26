
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-brugge">
          <span className="text-brugge-gold">Brugge</span> Tour Guide
        </Link>
        
        <div className="flex items-center">
          <MobileNav />
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/places" 
              className={cn(
                "text-gray-700 hover:text-brugge transition-colors",
                location.pathname === '/places' && "text-brugge font-semibold"
              )}
            >
              Places
            </Link>
            <Link 
              to="/restaurants" 
              className={cn(
                "text-gray-700 hover:text-brugge transition-colors",
                location.pathname === '/restaurants' && "text-brugge font-semibold"
              )}
            >
              Restaurants
            </Link>
            <Link 
              to="/events" 
              className={cn(
                "text-gray-700 hover:text-brugge transition-colors",
                location.pathname === '/events' && "text-brugge font-semibold"
              )}
            >
              Events
            </Link>
            <Link 
              to="/tours" 
              className={cn(
                "text-gray-700 hover:text-brugge transition-colors",
                location.pathname === '/tours' && "text-brugge font-semibold"
              )}
            >
              Tours
            </Link>
            <Link 
              to="/other" 
              className={cn(
                "text-gray-700 hover:text-brugge transition-colors",
                location.pathname === '/other' && "text-brugge font-semibold"
              )}
            >
              Other
            </Link>
            <Link 
              to="/gallery" 
              className={cn(
                "text-gray-700 hover:text-brugge transition-colors",
                location.pathname === '/gallery' && "text-brugge font-semibold"
              )}
            >
              Gallery
            </Link>
            <Link 
              to="/plan-a-tour" 
              className={cn(
                "text-gray-700 hover:text-brugge transition-colors",
                location.pathname === '/plan-a-tour' && "text-brugge font-semibold"
              )}
            >
              Plan a Tour
            </Link>
            {location.pathname === '/my-plan' && (
              <Link 
                to="/my-plan" 
                className={cn(
                  "text-gray-700 hover:text-brugge transition-colors",
                  location.pathname === '/my-plan' && "text-brugge font-semibold"
                )}
              >
                My Plan
              </Link>
            )}
            <Link to="/favorites">
              <Button 
                variant="outline" 
                size="sm" 
                className={cn(
                  "flex items-center gap-2 border-brugge hover:bg-brugge hover:text-white",
                  location.pathname === '/favorites' && "bg-brugge text-white"
                )}
              >
                <Heart size={16} />
                Favorites
              </Button>
            </Link>
            <Button 
              size="sm"
              className="bg-brugge-gold hover:bg-brugge text-black hover:text-white flex items-center gap-2"
              onClick={() => {
                alert("AI Chat Assistant would open here");
              }}
            >
              <MessageCircle size={16} />
              Need Help?
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
