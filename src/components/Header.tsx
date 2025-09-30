import React from 'react';
import { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-slide-down transition-all duration-300 ${
      isScrolled 
        ? 'bg-deep-black/80 backdrop-blur-md rounded-3xl mt-4 max-w-5xl w-full mx-8' 
        : 'max-w-7xl w-full'
    }`}>
      <div className={`mx-auto h-full transition-all duration-300 ${
        isScrolled ? 'px-6' : 'px-2 sm:px-3 lg:px-4'
      }`}>
        <div className={`flex justify-between items-center py-4 transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center z-10">
            <img 
              src="https://ik.imagekit.io/studioborak/FBDetailing/N%C3%A1vrh%20bez%20n%C3%A1zvu%20(43).png?updatedAt=1759259129217" 
              alt="FB Detailing Logo" 
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
          </div>

          {/* Floating Navigation Island */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isScrolled ? 'top-3' : 'top-4'
          }`}>
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