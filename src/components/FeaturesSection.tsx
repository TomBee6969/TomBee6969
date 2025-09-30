import React from 'react';
import { Sparkles, Car, Clock } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-graphite-grey p-6 rounded-xl hover:bg-graphite-grey/80 transition-all duration-300 animate-fade-in-zoom-up">
            <Sparkles className="w-12 h-12 mb-4 animate-pulse-icon text-champagne-gold" />
            <h3 className="text-xl font-semibold mb-2">Kvalitní produkty</h3>
            <p className="text-platinum-silver">Používáme prostředky od Koch Chemie</p>
          </div>
          <div className="bg-graphite-grey p-6 rounded-xl hover:bg-graphite-grey/80 transition-all duration-300 animate-fade-in-zoom-up">
            <Car className="w-12 h-12 mb-4 animate-pulse-icon text-champagne-gold" />
            <h3 className="text-xl font-semibold mb-2">Mobilita</h3>
            <p className="text-platinum-silver">Přijedeme k vám a umyjeme vaše auto přímo na místě, bez jakéhokoli příplatku</p>
          </div>
          <div className="bg-graphite-grey p-6 rounded-xl hover:bg-graphite-grey/80 transition-all duration-300 animate-fade-in-zoom-up">
            <Clock className="w-12 h-12 mb-4 animate-pulse-icon text-champagne-gold" />
            <h3 className="text-xl font-semibold mb-2">Rychlé zpracování</h3>
            <p className="text-platinum-silver">Minimální čekací doba</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;