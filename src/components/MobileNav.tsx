
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Filter, Compass, MapPin, Utensils, CalendarDays, Ship, Package, ImageIcon, Heart, MessageCircle } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const navigation = [
  { name: 'Home', href: '/', icon: <Compass className="h-5 w-5" /> },
  { name: 'Places', href: '/places', icon: <MapPin className="h-5 w-5" /> },
  { name: 'Restaurants', href: '/restaurants', icon: <Utensils className="h-5 w-5" /> },
  { name: 'Events', href: '/events', icon: <CalendarDays className="h-5 w-5" /> },
  { name: 'Tours', href: '/tours', icon: <Ship className="h-5 w-5" /> },
  { name: 'Other', href: '/other', icon: <Package className="h-5 w-5" /> },
  { name: 'Gallery', href: '/gallery', icon: <ImageIcon className="h-5 w-5" /> },
  { name: 'Plan a Tour', href: '/plan-a-tour', icon: <Compass className="h-5 w-5" /> },
  { name: 'My Plan', href: '/my-plan', icon: <MapPin className="h-5 w-5" /> },
  { name: 'Favorites', href: '/favorites', icon: <Heart className="h-5 w-5" /> },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
        <nav className="flex flex-col gap-4 pt-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-3 ${
                location.pathname === item.href
                  ? 'bg-brugge text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              to="#"
              className="px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-3 bg-brugge-gold text-black hover:bg-brugge hover:text-white"
              onClick={() => {
                setOpen(false);
                // In a real app, this would open the AI chat assistant
                alert("AI Assistant would open here");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Need Help?
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
