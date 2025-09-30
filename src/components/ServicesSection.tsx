import React from 'react';
import { Check, Star } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      name: "Mokré čištění interiéru",
      price: "2 490 Kč", 
      description: "Hloubkové čištění a ochrana interiéru",
      features: ["Vysávání", "Čištění čalounění", "Dashboard treatment", "Skla zevnitř"]
    },
    {
      name: "Kompletní balíček",
      price: "4 490 Kč",
      description: "Kompletní péče o váš vůz - exteriér i interiér",
      features: ["Mokré čištění interiéru", "čištění exteriéru", "Aplikace tekutých stěračů", "renovace světlometů"]
    },
    {
      name: "Suché čištění interiéru",
      price: "1 490 Kč",
      description: "Důkladné mytí interiéru s výživou plastů",
      features: ["Důkladné vysátí", "Odstranění prachu", "Čištění a výživa plastů", "Leštění oken"]
    },
    {
      name: "Renovace světlometů",
      price: "990 Kč",
      description: "Renovace zamlžených světlometů",
      features: ["Odstranění zamlžení", "Leštění", "UV ochrana", "Zlepšení viditelnosti"]
    }
  ];

  return (
    <section id="sluzby" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" role="heading" aria-level="2">
            Naše <span className="animated-gold-text">Služby</span>
          </h2>
          <p className="text-xl text-platinum-silver max-w-2xl mx-auto">
            Nabízíme kompletní péči o váš vůz – rychle a kvalitně, díky sehrané práci dvou lidí a použití kvalitních produktů
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-graphite-grey p-8 rounded-2xl hover:bg-graphite-grey/80 transition-all duration-300 border border-platinum-silver/10 hover:border-champagne-gold/30 ${index === 0 ? 'relative' : ''}`}
            >
              {index === 0 && (
                <div className="absolute top-0 left-0 bg-champagne-gold text-deep-black px-3 py-1 rounded-tl-2xl rounded-br-xl flex items-center space-x-1 text-sm font-semibold z-10">
                  <Star className="w-4 h-4" />
                  <span>oblíbené</span>
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-pearl-white max-w-[70%]">{service.name}</h3>
                <span className="text-2xl font-bold animated-gold-text ml-[10px] whitespace-nowrap">{service.price}</span>
              </div>
              <p className="text-platinum-silver mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-platinum-silver">
                    <Check className="w-5 h-5 mr-3 flex-shrink-0 text-champagne-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-gold text-deep-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300">
                Rezervovat službu
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;