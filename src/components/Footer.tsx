import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="https://ik.imagekit.io/studioborak/FBDetailing/N%C3%A1vrh%20bez%20n%C3%A1zvu%20(43).png?updatedAt=1759259129217" 
              alt="FB Detailing - auto detailing Uherské Hradiště" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="text-platinum-silver text-sm">
            © 2025 FB Detailing. Všechna práva vyhrazena.
          </div>
        </div>
        
        {/* Studio Borák credit */}
        <div className="border-t border-platinum-silver/10 pt-6 text-center">
          <p className="text-platinum-silver/70 text-sm">
            Vytvořilo{' '}
            <a 
              href="https://studiob.cz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-champagne-gold hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Studio Borák
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;