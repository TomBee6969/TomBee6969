import React from 'react';

const ProcessSection: React.FC = () => {
  const process = [
    {
      step: 1,
      title: "Rezervace",
      description: "Kontaktujte nás a domluvte si termín"
    },
    {
      step: 2,
      title: "Převzetí",
      description: "O váš vůz se postaráme tam, kde vám to nejlépe vyhovuje – u vás doma, nebo v naší garáži"
    },
    {
      step: 3,
      title: "Detailing",
      description: "Pracujeme ve dvou, používáme kvalitní prostředky a výsledkem je auto hotové rychle a s citem k detailu"
    },
    {
      step: 4,
      title: "Předání",
      description: "Převezmete vozidlo v dokonalém stavu"
    }
  ];

  return (
    <section id="proces" className="py-20 px-4 sm:px-6 lg:px-8 bg-graphite-grey/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" role="heading" aria-level="2">
            Jak to <span className="animated-gold-text">Funguje</span>
          </h2>
          <p className="text-xl text-platinum-silver max-w-2xl mx-auto">
            Jednoduchý proces v několika krocích
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-2xl font-bold text-deep-black mb-4 mx-auto">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-platinum-silver">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;