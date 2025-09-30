import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://ik.imagekit.io/studioborak/FBDetailing/N%C3%A1vrh%20bez%20n%C3%A1zvu%20(45).png?updatedAt=1759259826305" 
          alt="FB Detailing background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-end justify-start">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-graphite-grey/80 backdrop-blur-sm border border-platinum-silver/20 mb-8 animate-fade-in-slide-up">
            <div className="w-2 h-2 bg-champagne-gold rounded-full mr-3"></div>
            <span className="text-platinum-silver text-sm font-medium">FB Detailing nyní dostupné</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-scale-up-fade-in">
            <span className="text-pearl-white">Profesionální</span><br />
            <span className="animated-gold-text">auto detailing</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-platinum-silver/90 mb-10 max-w-2xl leading-relaxed animate-fade-in-slide-up">
            Čištění interiéru, exteriéru a renovace světlometů
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-in-slide-up">
            <a 
              href="#reservation-form" 
              className="inline-flex items-center px-8 py-4 bg-pearl-white text-deep-black rounded-full font-semibold text-lg hover:bg-platinum-silver transition-all duration-300 group"
            >
              Rezervovat termín
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;