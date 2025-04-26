import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
            alt="Bruges Canals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        
        <div className="relative container mx-auto h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Discover the Magic of 
              <span className="text-brugge-gold"> Bruges</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Experience the charm of Belgium's most preserved medieval city with our expert guides and curated experiences.
            </p>
            <div className="flex space-x-4">
              <Button 
                asChild
                size="lg" 
                className="bg-brugge-gold hover:bg-brugge text-black hover:text-white"
              >
                <Link to="/places">Explore Places</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brugge"
              >
                <Link to="/tours">Plan Your Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brugge">Explore Bruges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Places', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', path: '/places' },
              { title: 'Restaurants', image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', path: '/restaurants' },
              { title: 'Events', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', path: '/events' },
              { title: 'Tours', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', path: '/tours' },
            ].map((category, idx) => (
              <Link 
                key={idx} 
                to={category.path} 
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                  <div className="flex items-center text-brugge-gold transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="mr-1">Discover</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Bruges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brugge">About Bruges</h2>
              <p className="text-gray-700 mb-4">
                Bruges, the capital of West Flanders in Belgium, is distinguished by its canals, cobbled streets and medieval buildings. Its port, Zeebrugge, is an important center for fishing and European trade.
              </p>
              <p className="text-gray-700 mb-4">
                The city's historic centre is a UNESCO World Heritage site and one of the most well-preserved medieval town centers in Europe, with most of its medieval architecture intact.
              </p>
              <p className="text-gray-700 mb-6">
                From the iconic Belfry tower to the tranquil canals, every corner of Bruges tells a story of its rich past and vibrant present.
              </p>
              <Button 
                asChild
                className="bg-brugge hover:bg-brugge-light"
              >
                <Link to="/tours">Plan Your Visit <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Bruges Architecture" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brugge-gold rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brugge rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-brugge text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Bruges?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start planning your unforgettable journey through one of Europe's most enchanting cities.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-white text-brugge hover:bg-brugge-gold hover:text-black"
          >
            <Link to="/tours">Start Planning</Link>
          </Button>
        </div>
      </section>
      
      {/* Add Book Now button to Hero section */}
      <div className="flex space-x-4 mt-8">
        <Button 
          asChild
          size="lg"
          className="bg-brugge-gold hover:bg-brugge text-black hover:text-white"
        >
          <Link to="/tours">Book Now</Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};
export default Home;
