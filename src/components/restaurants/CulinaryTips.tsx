
import React from 'react';

const CulinaryTips = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-brugge">Bruges Culinary Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-brugge">Local Specialties</h3>
            <p className="text-gray-700">
              Try Flemish stew (Carbonade), Belgian waffles, moules-frites (mussels and fries), and of course, Belgian chocolates and beer.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-brugge">Chocolate Shops</h3>
            <p className="text-gray-700">
              Bruges is renowned for artisanal chocolate. Visit the shops along Katelijnestraat for some of the city's finest pralines.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-brugge">Dining Tips</h3>
            <p className="text-gray-700">
              Reservations are recommended for dinner, especially on weekends. Look for restaurants with "Dagschotel" for good-value daily specials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryTips;
