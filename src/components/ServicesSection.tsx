import React from 'react';
import { Check, Star } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      name: "Suché čištění interiéru",
      price: "1 490 Kč",
      description: "Důkladné mytí interiéru s výživou plastů",
      features: ["Důkladné vysátí", "Odstranění prachu", "Čištění a výživa plastů", "Leštění oken"],
      isPopular: false
    },
    {
      name: "Mokré čištění interiéru",
      price: "2 490 Kč", 
      description: "Hloubkové čištění a ochrana interiéru",
      features: ["Vysávání", "Čištění čalounění", "Dashboard treatment", "Skla zevnitř"],
      isPopular: true
    },
    {
      name: "Renovace světlometů",
      price: "990 Kč",
      description: "Renovace zamlžených světlometů",
      features: ["Odstranění zamlžení", "Leštění", "UV ochrana", "Zlepšení viditelnosti"],
      isPopular: false
    },
    {
      name: "Kompletní balíček",
      price: "4 490 Kč",
      description: "Kompletní péče o váš vůz - exteriér i interiér",
      features: ["Mokré čištění interiéru", "Čištění exteriéru", "Aplikace tekutých stěračů", "Renovace světlometů"],
      isPopular: false
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-pearl-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-pearl-white/10 transition-all duration-300 border border-platinum-silver/10 hover:border-champagne-gold/30 relative flex flex-col h-full"
            >
              {service.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-champagne-gold text-deep-black px-4 py-1 rounded-full flex items-center space-x-1 text-sm font-semibold z-10">
                  <Star className="w-4 h-4" />
                  <span>oblíbené</span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-pearl-white mb-2">{service.name}</h3>
                <div className="text-3xl font-bold animated-gold-text mb-2">{service.price}</div>
                <p className="text-platinum-silver text-sm">{service.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="w-full h-px bg-platinum-silver/20 mb-4"></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-platinum-silver text-sm">
                    <Check className="w-4 h-4 mr-3 flex-shrink-0 text-champagne-gold mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#kontakt"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mt-auto inline-block text-center ${
                service.isPopular 
                  ? 'bg-gradient-gold text-deep-black hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow' 
                  : 'bg-transparent border border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-deep-black'
              }`}
              >
                Rezervovat službu
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;