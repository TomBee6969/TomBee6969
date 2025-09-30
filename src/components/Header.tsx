import React from 'react';
import { useState, useEffect } from 'react';
import { Car, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-4 left-0 right-0 z-50 animate-fade-in-slide-down transition-all duration-300`}>
      <div className={`mx-auto transition-all duration-300 ${
      isScrolled 
          ? 'bg-deep-black/80 backdrop-blur-md rounded-3xl mt-0 max-w-5xl' 
        : 'max-w-7xl w-full'
      }`}>
        <div className={`h-full transition-all duration-300 ${
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
                isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16'
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
            <a href="#kontakt" className="hidden sm:block bg-gradient-gold text-deep-black px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300">
              Rezervace
            </a>
            
            {/* Mobile hamburger menu */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col space-y-1 cursor-pointer p-2 hover:bg-pearl-white/10 rounded-lg transition-colors duration-300 -mr-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-0.5 bg-pearl-white"></div>
              <div className="w-5 h-0.5 bg-pearl-white"></div>
              <div className="w-5 h-0.5 bg-pearl-white"></div>
            </button>
          </div>
          </div>
        </div>
      </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-deep-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Menu Content */}
          <div className="absolute top-4 right-4 left-4 bg-deep-black/95 backdrop-blur-md border border-platinum-silver/20 rounded-3xl p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={closeMobileMenu}
                className="p-2 hover:bg-pearl-white/10 rounded-lg transition-colors duration-300"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-pearl-white" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="space-y-4">
              <a 
                href="#sluzby" 
                onClick={closeMobileMenu}
                className="block text-pearl-white hover:text-champagne-gold transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-pearl-white/5"
              >
                Služby
              </a>
              <a 
                href="#proces" 
                onClick={closeMobileMenu}
                className="block text-pearl-white hover:text-champagne-gold transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-pearl-white/5"
              >
                Proces
              </a>
              <a 
                href="#onas" 
                onClick={closeMobileMenu}
                className="block text-pearl-white hover:text-champagne-gold transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-pearl-white/5"
              >
                O nás
              </a>
              <a 
                href="#kontakt" 
                onClick={closeMobileMenu}
                className="block text-pearl-white hover:text-champagne-gold transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-pearl-white/5"
              >
                Kontakt
              </a>
              
              {/* CTA Button */}
              <div className="pt-4 border-t border-platinum-silver/20">
                <a 
                  href="#kontakt" 
                  onClick={closeMobileMenu}
                  className="block bg-gradient-gold text-deep-black px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300"
                >
                  Rezervace
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;