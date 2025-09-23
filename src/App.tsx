import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { cs } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { supabase, type ReservationData } from './lib/supabase';
import { 
  Car, 
  Sparkles, 
  Shield, 
  Clock, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Check,
  ArrowRight,
  Droplets,
  Zap,
  Award,
  Users,
  Instagram,
  Facebook
} from 'lucide-react';

function App() {
  const [activeService, setActiveService] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !selectedDate) {
      setSubmitMessage({
        type: 'error',
        text: 'Prosím vyplňte všechna povinná pole'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    const reservationData: ReservationData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      reservation_date: selectedDate.toISOString(), // Convert Date to ISO string for Supabase
      message: formData.message
    };

    const { error } = await supabase.from('reservations').insert([reservationData]);

    if (error) {
      console.error('Error submitting reservation to Supabase:', error);
      setSubmitMessage({
        type: 'error',
        text: `Došlo k chybě při odesílání rezervace: ${error.message}`
      });
    } else {
      // Success - reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setSelectedDate(null);
      
      setSubmitMessage({
        type: 'success',
        text: 'Rezervace byla úspěšně odeslána!'
      });
    }
    setIsSubmitting(false);
  };

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

  const testimonials = [
    {
      name: "Jan Novák",
      rating: 5,
      comment: "Fantastická práce! Moje BMW vypadá jako nové. Profesionální přístup a kvalita na nejvyšší úrovni."
    },
    {
      name: "Marie Svobodová", 
      rating: 5,
      comment: "Úžasný servis! Interiér mého vozu byl dokonale vyčištěn. Určitě se vrátím."
    },
    {
      name: "Petr Dvořák",
      rating: 5,
      comment: "Nejlepší auto detailing v okolí. Rychle, kvalitně a za rozumnou cenu."
    }
  ];

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
    <div className="min-h-screen bg-deep-black text-pearl-white animate-initial-fade-in">
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

      {/* Header */}
      <header className="bg-graphite-grey/50 backdrop-blur-sm w-full z-50 border-b border-platinum-silver/10 animate-fade-in-slide-down h-[100px]">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 h-full">
          <div className="flex justify-between items-center h-full mt-[0px]">
            <div className="flex items-center">
              <img 
                src="/FBdetail.png copy.png" 
                alt="FB Detailing Logo" 
                className="w-24 h-24 object-contain mt-[9px]"
              />
              <span className="text-2xl font-bold animated-gold-text ml-[-8px]">
              <span className="text-2xl font-bold animated-gold-text ml-[-18px]">
                Detailing
              </span>
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <a href="#sluzby" className="text-platinum-silver hover:text-champagne-gold transition-colors animate-fade-in-slide-right">Služby</a>
                <a href="#proces" className="text-platinum-silver hover:text-champagne-gold transition-colors animate-fade-in-slide-right">Proces</a>
                <a href="#onas" className="text-platinum-silver hover:text-champagne-gold transition-colors animate-fade-in-slide-right">O nás</a>
                <a href="#kontakt" className="text-platinum-silver hover:text-champagne-gold transition-colors animate-fade-in-slide-right">Kontakt</a>
              </nav>
              <a href="#reservation-form" className="bg-gradient-gold text-deep-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300 animate-fade-in-slide-right inline-block">
                Rezervace
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-2 leading-[1.4] animated-gold-text py-4 animate-scale-up-fade-in">
              Auto Detailing
            </h1>
            <div className="text-2xl md:text-3xl text-platinum-silver mb-2 font-light animate-fade-in-slide-up">
              Uherské Hradiště
            </div>
            <div className="mb-12"></div>
            <p className="text-xl md:text-2xl text-platinum-silver max-w-3xl mx-auto mb-10 animate-fade-in-slide-up">
              Profesionální péče o každý vůz. Čištění interiéru, exteriéru a renovace světlometů
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slide-up">
              <a href="#reservation-form" className="bg-gradient-gold text-deep-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300 flex items-center justify-center">
                Rezervovat termín <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#sluzby" className="border border-platinum-silver text-platinum-silver px-8 py-4 rounded-lg font-semibold text-lg hover:bg-platinum-silver hover:text-deep-black transition-all duration-300 inline-block text-center">
                Zobrazit služby
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-graphite-grey p-6 rounded-xl hover:bg-graphite-grey/80 transition-all duration-300 animate-fade-in-zoom-up">
              <Sparkles className="w-12 h-12 mb-4 mx-auto animate-pulse-icon text-champagne-gold" />
              <h3 className="text-xl font-semibold mb-2">Kvalitní produkty</h3>
              <p className="text-platinum-silver">Používáme prostředky od Koch Chemie</p>
            </div>
            <div className="bg-graphite-grey p-6 rounded-xl hover:bg-graphite-grey/80 transition-all duration-300 animate-fade-in-zoom-up">
              <Car className="w-12 h-12 mb-4 mx-auto animate-pulse-icon text-champagne-gold" />
              <h3 className="text-xl font-semibold mb-2">Mobilita</h3>
              <p className="text-platinum-silver">Přijedeme k vám a umyjeme vaše auto přímo na místě, bez jakéhokoli příplatku</p>
            </div>
            <div className="bg-graphite-grey p-6 rounded-xl hover:bg-graphite-grey/80 transition-all duration-300 animate-fade-in-zoom-up">
              <Clock className="w-12 h-12 mb-4 mx-auto animate-pulse-icon text-champagne-gold" />
              <h3 className="text-xl font-semibold mb-2">Rychlé zpracování</h3>
              <p className="text-platinum-silver">Minimální čekací doba</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Process Section */}
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

      {/* About Section */}
      <section id="onas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                    <div className="font-semibold">Eco-friendly produkty</div>
                    <div className="text-platinum-silver text-sm">Šetrné k životnímu prostředí</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="url(#animatedGoldGradient)" />
                  <div>
                    <div className="font-semibold">Nejmodernější technologie</div>
                    <div className="text-platinum-silver text-sm">Používáme nejnovější metody</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="url(#animatedGoldGradient)" />
                  <div>
                    <div className="font-semibold">Záruka kvality</div>
                    <div className="text-platinum-silver text-sm">100% spokojenost zákazníků</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" role="heading" aria-level="2">
              <span className="animated-gold-text">Kontakt</span>
            </h2>
            <p className="text-xl text-platinum-silver max-w-2xl mx-auto">
              Kontaktujte nás a rezervujte si termín
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-graphite-grey p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6" role="heading" aria-level="3">Kontaktní informace</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-champagne-gold" />
                  <span>+420 778 134 784</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-champagne-gold" />
                  <span>fbdetailing52@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-champagne-gold" />
                  <span>Uherské Hradiště</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-6 h-6 mr-4 text-champagne-gold" />
                  <a href="https://instagram.com/fbdetailing52" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">
                    @fbdetailing52
                  </a>
                </div>
                <div className="flex items-center">
                  <Facebook className="w-6 h-6 mr-4 text-champagne-gold" />
                  <a href="https://facebook.com/fbdetailing52" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">
                    FB Detailing
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4" role="heading" aria-level="4">Otevírací doba</h4>
                <div className="space-y-2 text-platinum-silver">
                  <div>Pondělí - Pátek: 16:00 - 20:00</div>
                  <div>Sobota - Neděle: 8:00 - 18:00</div>
                </div>
              </div>
            </div>

            <div id="reservation-form" className="bg-graphite-grey p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6" role="heading" aria-level="3">Rezervace termínu</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-900/50 border border-green-500/50 text-green-200' 
                      : 'bg-red-900/50 border border-red-500/50 text-red-200'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Jméno a příjmení</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-deep-black border border-platinum-silver/20 rounded-lg focus:border-champagne-gold focus:outline-none text-pearl-white"
                    placeholder="Vaše jméno"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-deep-black border border-platinum-silver/20 rounded-lg focus:border-champagne-gold focus:outline-none text-pearl-white"
                    placeholder="vas@email.cz"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-deep-black border border-platinum-silver/20 rounded-lg focus:border-champagne-gold focus:outline-none text-pearl-white"
                    placeholder="+420 123 456 789"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Služba</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-deep-black border border-platinum-silver/20 rounded-lg focus:border-champagne-gold focus:outline-none text-pearl-white"
                    required
                  >
                    <option value="">Vyberte službu</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="datetime" className="block text-sm font-medium mb-2">Datum a čas</label>
                  <DatePicker
                    id="datetime"
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    locale={cs}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={60}
                    dateFormat="dd.MM.yyyy HH:mm"
                    minDate={new Date()}
                    placeholderText="Vyberte datum a čas"
                    className="w-full px-4 py-3 bg-deep-black border border-platinum-silver/20 rounded-lg focus:border-champagne-gold focus:outline-none text-pearl-white"
                    calendarClassName="bg-deep-black border border-platinum-silver/20"
                    timeCaption="Čas"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Zpráva</label>
                  <textarea 
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-deep-black border border-platinum-silver/20 rounded-lg focus:border-champagne-gold focus:outline-none text-pearl-white"
                    placeholder="Dodatečné informace..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-deep-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Odesílám...' : 'Odeslat rezervaci'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite-grey py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/FBdetail.png copy.png" 
                alt="FB Detailing Logo" 
                className="w-8 h-8 object-contain"
              />
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
    </div>
  );
}

export default App;