import React from 'react';
import { Award, Users, Droplets, Zap, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="onas" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" role="heading" aria-level="2">
              O <span className="animated-gold-text">FB Detailing</span>
            </h2>
            <p className="text-xl text-platinum-silver mb-6">
              S více než 10 lety zkušeností v oboru auto detailingu poskytujeme 
              našim klientům služby na nejvyšší úrovni. Specializujeme se na 
              prémiové automobily a klademe důraz na kvalitu a preciznost.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Award className="w-8 h-8 mr-4" fill="url(#animatedGoldGradient)" />
                <div>
                  <div className="font-semibold">10+ let zkušeností</div>
                  <div className="text-platinum-silver text-sm">V oboru detailingu</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-8 h-8 mr-4" fill="url(#animatedGoldGradient)" />
                <div>
                  <div className="font-semibold">1000+ spokojených klientů</div>
                  <div className="text-platinum-silver text-sm">Důvěřuje nám</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-graphite-grey p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Proč si vybrat nás?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Droplets className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="url(#animatedGoldGradient)" />
                <div>
                  <div className="font-semibold">Používáme prostředky od Koch Chemie</div>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="url(#animatedGoldGradient)" />
                <div>
                  <div className="font-semibold">Přijedeme k vám a umyjeme vaše auto přímo na místě, bez jakéhokoli příplatku</div>
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="url(#animatedGoldGradient)" />
                <div>
                  <div className="font-semibold">Rychlé zpracování</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;