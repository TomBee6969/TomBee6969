import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Star, Heart, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Služby', href: '#sluzby' },
    { name: 'Proces', href: '#proces' },
    { name: 'O nás', href: '#onas' },
    { name: 'Kontakt', href: '#kontakt' }
  ];

  const services = [
    'Mokré čištění interiéru',
    'Suché čištění interiéru', 
    'Renovace světlometů',
    'Kompletní balíček'
  ];

  return (
    <footer className="bg-deep-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 bg-champagne-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-champagne-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://ik.imagekit.io/studioborak/FBDetailing/N%C3%A1vrh%20bez%20n%C3%A1zvu%20(43).png?updatedAt=1759259129217" 
                  alt="FB Detailing Logo" 
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-pearl-white">FB Detailing</h3>
                  <p className="text-champagne-gold text-sm">Uherské Hradiště</p>
                </div>
              </div>
              <p className="text-platinum-silver text-sm leading-relaxed mb-6">
                Profesionální péče o váš vůz s více než 10 lety zkušeností. 
                Specializujeme se na prémiové automobily a mobilní služby.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-champagne-gold fill-current" />
                  <Star className="w-4 h-4 text-champagne-gold fill-current" />
                  <Star className="w-4 h-4 text-champagne-gold fill-current" />
                  <Star className="w-4 h-4 text-champagne-gold fill-current" />
                  <Star className="w-4 h-4 text-champagne-gold fill-current" />
                  <span className="text-platinum-silver text-xs ml-1">5.0</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-champagne-gold" />
                  <span className="text-platinum-silver text-xs">60+ klientů</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a 
                  href="https://instagram.com/fbdetailing52" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://facebook.com/fbdetailing52" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-pearl-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-champagne-gold rounded-full mr-3"></div>
                Rychlé odkazy
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-platinum-silver hover:text-champagne-gold transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-platinum-silver rounded-full mr-3 group-hover:bg-champagne-gold transition-colors duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-pearl-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-champagne-gold rounded-full mr-3"></div>
                Naše služby
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-platinum-silver text-sm flex items-center">
                      <span className="w-1 h-1 bg-platinum-silver rounded-full mr-3"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-pearl-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-champagne-gold rounded-full mr-3"></div>
                Kontakt
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-champagne-gold to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-platinum-silver text-xs">Telefon</div>
                    <div className="text-pearl-white text-sm font-medium">+420 778 134 784</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-champagne-gold to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-platinum-silver text-xs">Email</div>
                    <div className="text-pearl-white text-sm font-medium">fbdetailing52@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-champagne-gold to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-platinum-silver text-xs">Lokalita</div>
                    <div className="text-pearl-white text-sm font-medium">Uherské Hradiště</div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-6 p-4 bg-graphite-grey/50 rounded-xl border border-champagne-gold/20">
                <div className="flex items-center mb-3">
                  <Clock className="w-4 h-4 text-champagne-gold mr-2" />
                  <h5 className="text-sm font-semibold text-pearl-white">Otevírací doba</h5>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-platinum-silver">Po - Pá</span>
                    <span className="text-pearl-white">16:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-platinum-silver">So - Ne</span>
                    <span className="text-pearl-white">8:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-platinum-silver/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-platinum-silver text-sm">
                <span>© 2025 FB Detailing. Všechna práva vyhrazena.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-xs text-platinum-silver">
                <span className="flex items-center space-x-1">
                  <span>Vytvořeno s</span>
                  <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
                  <span>v Uherském Hradišti</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;