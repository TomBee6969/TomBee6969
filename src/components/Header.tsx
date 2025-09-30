import React from 'react';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in-slide-down">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 h-full">
        <div className="flex justify-between items-center h-20 py-4">
          {/* Logo */}
          <div className="flex items-center z-10">
            <div className="w-10 h-10 bg-pearl-white rounded-full flex items-center justify-center mr-3">
              <Car className="w-5 h-5 text-deep-black" />
            </div>
            <span className="text-xl font-bold animated-gold-text">
              FB Detailing
            </span>
          </div>

          {/* Floating Navigation Island */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4">
            <nav className="hidden md:flex bg-deep-black/80 backdrop-blur-md border border-platinum-silver/10 rounded-full px-8 py-3 space-x-8">
              <a href="#sluzby" className="text-pearl-white hover:text-champagne-gold transition-colors text-sm font-medium">Služby</a>
              <a href="#proces" className="text-pearl-white hover:text-champagne-gold transition-colors text-sm font-medium">Proces</a>
              <a href="#onas" className="text-pearl-white hover:text-champagne-gold transition-colors text-sm font-medium">O nás</a>
              <a href="#kontakt" className="text-pearl-white hover:text-champagne-gold transition-colors text-sm font-medium">Kontakt</a>
            </nav>
          </div>

          {/* Right side - CTA button and mobile menu */}
          <div className="flex items-center space-x-4 z-10">
            <a href="#reservation-form" className="hidden sm:block bg-gradient-gold text-deep-black px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300">
              Rezervace
            </a>
            
            {/* Mobile hamburger menu */}
            <div className="md:hidden flex flex-col space-y-1 cursor-pointer">
              <div className="w-5 h-0.5 bg-pearl-white"></div>
              <div className="w-5 h-0.5 bg-pearl-white"></div>
              <div className="w-5 h-0.5 bg-pearl-white"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;