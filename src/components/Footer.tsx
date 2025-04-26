
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brugge py-12 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Brugge Tour Guide</h3>
          <p className="text-gray-300">
            Your ultimate guide to exploring the beautiful medieval city of Bruges, Belgium.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/places" className="text-gray-300 hover:text-white transition-colors">Places</Link></li>
            <li><Link to="/restaurants" className="text-gray-300 hover:text-white transition-colors">Restaurants</Link></li>
            <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
            <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors">Tours</Link></li>
            <li><Link to="/favorites" className="text-gray-300 hover:text-white transition-colors">Favorites</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3">Tour Categories</h4>
          <ul className="space-y-2">
            <li className="text-gray-300">History</li>
            <li className="text-gray-300">Culture</li>
            <li className="text-gray-300">Food</li>
            <li className="text-gray-300">Shopping</li>
            <li className="text-gray-300">Nature</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-300 mb-2">Markt 1, 8000 Brugge, Belgium</p>
          <p className="text-gray-300 mb-2">info@bruggetourguide.com</p>
          <p className="text-gray-300">+32 50 44 81 11</p>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 pt-8 border-t border-brugge-light">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Brugge Tour Guide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
