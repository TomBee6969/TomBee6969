import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite-grey py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold animated-gold-text">
              FB Detailing
            </span>
          </div>
          <div className="text-platinum-silver text-sm">
            © 2025 FB Detailing. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;