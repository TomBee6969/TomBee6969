import React from 'react';
import { Calendar, MapPin, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const process = [
    {
      step: 1,
      title: "Rezervace",
      description: "Kontaktujte nás a domluvte si termín",
      icon: Calendar,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Převzetí",
      description: "O váš vůz se postaráme tam, kde vám to nejlépe vyhovuje – u vás doma, nebo v naší garáži",
      icon: MapPin,
      color: "from-green-500 to-green-600"
    },
    {
      step: 3,
      title: "Detailing",
      description: "Pracujeme ve dvou, používáme kvalitní prostředky a výsledkem je auto hotové rychle a s citem k detailu",
      icon: Wrench,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Předání",
      description: "Převezmete vozidlo v dokonalém stavu",
      icon: CheckCircle,
      color: "from-champagne-gold to-yellow-500"
    }
  ];

  return (
    <section id="proces" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-champagne-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" role="heading" aria-level="2">
            Jak to <span className="animated-gold-text">Funguje</span>
          </h2>
          <p className="text-xl text-platinum-silver max-w-3xl mx-auto leading-relaxed">
            Jednoduchý a transparentní proces, který zajistí perfektní péči o váš vůz
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {process.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-champagne-gold/50 to-transparent z-0">
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-champagne-gold/50" />
                </div>
              )}
              
              <div className="relative z-10 text-center transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Step number background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6`}>
                    <item.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-champagne-gold rounded-full flex items-center justify-center text-deep-black font-bold text-sm shadow-lg">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-graphite-grey/50 backdrop-blur-sm p-6 rounded-2xl border border-platinum-silver/10 group-hover:border-champagne-gold/30 transition-all duration-300 group-hover:bg-graphite-grey/70">
                  <h3 className="text-xl font-bold text-pearl-white mb-3 group-hover:text-champagne-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-platinum-silver text-sm leading-relaxed group-hover:text-pearl-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;