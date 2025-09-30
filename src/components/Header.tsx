import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 animate-fade-in-slide-down transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-0'
    }`}>
      <div className={`max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md rounded-full border border-gray-200/50 shadow-lg mx-4 mt-4' 
          : ''
      }`}>
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16 py-2' : 'h-20 py-4'
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
            isScrolled ? 'top-2' : 'top-4'
          }`}>
            <nav className={`hidden md:flex backdrop-blur-md border rounded-full px-8 py-3 space-x-8 transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-100/80 border-gray-200/50' 
                : 'bg-deep-black/80 border-platinum-silver/10'
            }`}>
              <a href="#sluzby" className={`transition-colors text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-800 hover:text-champagne-gold' 
                  : 'text-pearl-white hover:text-champagne-gold'
              }`}>Služby</a>
              <a href="#proces" className={`transition-colors text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-800 hover:text-champagne-gold' 
                  : 'text-pearl-white hover:text-champagne-gold'
              }`}>Proces</a>
              <a href="#onas" className={`transition-colors text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-800 hover:text-champagne-gold' 
                  : 'text-pearl-white hover:text-champagne-gold'
              }`}>O nás</a>
              <a href="#kontakt" className={`transition-colors text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-800 hover:text-champagne-gold' 
                  : 'text-pearl-white hover:text-champagne-gold'
              }`}>Kontakt</a>
            </nav>
          </div>

          {/* Right side - CTA button and mobile menu */}
          <div className="flex items-center space-x-4 z-10">
            <a href="#reservation-form" className="hidden sm:block bg-gradient-gold text-deep-black px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300">
              Rezervace
            </a>
            
            {/* Mobile hamburger menu */}
            <div className="md:hidden flex flex-col space-y-1 cursor-pointer transition-all duration-300">
              <div className={`w-5 h-0.5 transition-colors duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-pearl-white'
              }`}></div>
              <div className={`w-5 h-0.5 transition-colors duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-pearl-white'
              }`}></div>
              <div className={`w-5 h-0.5 transition-colors duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-pearl-white'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;