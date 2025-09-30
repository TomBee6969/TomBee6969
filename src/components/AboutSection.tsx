import React from 'react';
import { Award, Users, Droplets, Zap, Shield, Star, CheckCircle, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { number: "10+", label: "Let zkušeností", icon: Award },
    { number: "1000+", label: "Spokojených klientů", icon: Users },
    { number: "100%", label: "Spokojenost", icon: Star },
    { number: "24h", label: "Rychlé zpracování", icon: Clock }
  ];

  const features = [
    {
      icon: Droplets,
      title: "Prémiové prostředky",
      description: "Používáme pouze kvalitní prostředky od Koch Chemie pro nejlepší výsledky"
    },
    {
      icon: Zap,
      title: "Mobilní služby",
      description: "Přijedeme k vám domů nebo do práce - bez jakéhokoli příplatku"
    },
    {
      icon: Shield,
      title: "Rychlé zpracování",
      description: "Díky sehrané práci dvou lidí dokončíme práci rychle a kvalitně"
    },
    {
      icon: CheckCircle,
      title: "Garance kvality",
      description: "Každá naše práce je garantována a kontrolována do nejmenšího detailu"
    }
  ];

  return (
    <section id="onas" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-champagne-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-champagne-gold rounded-full blur-3xl"></div>
      </div>

      {/* Hidden SVG for animated gradient definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="animatedGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#f7e98e" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" role="heading" aria-level="2">
            O <span className="animated-gold-text">FB Detailing</span>
          </h2>
          <p className="text-xl text-platinum-silver max-w-3xl mx-auto leading-relaxed">
            S více než 10 lety zkušeností v oboru auto detailingu poskytujeme 
            našim klientům služby na nejvyšší úrovni. Specializujeme se na 
            prémiové automobily a klademe důraz na kvalitu a preciznost.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-graphite-grey/80 to-graphite-grey/40 backdrop-blur-sm p-6 rounded-2xl text-center border border-platinum-silver/10 hover:border-champagne-gold/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-champagne-gold group-hover:animate-pulse-icon" />
              <div className="text-3xl font-bold animated-gold-text mb-2">{stat.number}</div>
              <div className="text-platinum-silver text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">
              Proč si vybrat <span className="animated-gold-text">nás?</span>
            </h3>
            
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-graphite-grey/60 to-transparent p-6 rounded-2xl border border-platinum-silver/10 hover:border-champagne-gold/30 transition-all duration-300 hover:transform hover:translateX-2 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-deep-black" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-pearl-white mb-2 group-hover:text-champagne-gold transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-platinum-silver leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image and CTA */}
          <div className="space-y-8">
            {/* Image placeholder with overlay */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="aspect-[4/3] bg-gradient-to-br from-graphite-grey to-deep-black flex items-center justify-center border border-platinum-silver/10">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-deep-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-pearl-white mb-2">Kvalita na prvním místě</h4>
                  <p className="text-platinum-silver">Každý detail má svůj význam</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-champagne-gold/10 to-transparent p-8 rounded-2xl border border-champagne-gold/20">
              <h4 className="text-2xl font-bold text-pearl-white mb-4">
                Připraveni na <span className="animated-gold-text">změnu?</span>
              </h4>
              <p className="text-platinum-silver mb-6 leading-relaxed">
                Nechte svůj vůz v rukou profesionálů. Kontaktujte nás ještě dnes 
                a rezervujte si termín pro prémiové auto detailing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#reservation-form" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-deep-black rounded-full font-semibold hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300 group"
                >
                  Rezervovat termín
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="#kontakt" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-champagne-gold text-champagne-gold rounded-full font-semibold hover:bg-champagne-gold hover:text-deep-black transition-all duration-300"
                >
                  Kontaktovat nás
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;