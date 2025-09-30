import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { cs } from 'date-fns/locale';
import { supabase, type ReservationData } from '../lib/supabase';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Star, Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
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

  const services = [
    {
      name: "Mokré čištění interiéru",
      price: "2 490 Kč"
    },
    {
      name: "Kompletní balíček",
      price: "4 490 Kč"
    },
    {
      name: "Suché čištění interiéru",
      price: "1 490 Kč"
    },
    {
      name: "Renovace světlometů",
      price: "990 Kč"
    }
  ];

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
      reservation_date: selectedDate.toISOString(),
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

  return (
    <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-champagne-gold rounded-full blur-3xl animate-pulse"></div>
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

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" role="heading" aria-level="2">
            <span className="animated-gold-text">Kontakt</span>
          </h2>
          <p className="text-xl text-platinum-silver max-w-3xl mx-auto leading-relaxed">
            Kontaktujte nás a rezervujte si termín pro prémiové auto detailing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Contact Information Card */}
          <div className="bg-gradient-to-br from-graphite-grey/80 to-graphite-grey/40 backdrop-blur-sm p-8 rounded-3xl border border-platinum-silver/10 hover:border-champagne-gold/30 transition-all duration-300 group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-gold rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                <Phone className="w-6 h-6 text-deep-black" />
              </div>
              <h3 className="text-2xl font-bold text-pearl-white group-hover:text-champagne-gold transition-colors duration-300" role="heading" aria-level="3">
                Kontaktní informace
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-deep-black/50 rounded-xl hover:bg-deep-black/70 transition-all duration-300 group/item">
                <div className="w-10 h-10 bg-gradient-to-br from-champagne-gold to-yellow-500 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-platinum-silver">Telefon</div>
                  <a 
                    href="tel:+420778134784" 
                    className="text-pearl-white font-semibold hover:text-champagne-gold transition-colors duration-300"
                  >
                    +420 778 134 784
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-deep-black/50 rounded-xl hover:bg-deep-black/70 transition-all duration-300 group/item">
                <div className="w-10 h-10 bg-gradient-to-br from-champagne-gold to-yellow-500 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-platinum-silver">Email</div>
                  <a 
                    href="mailto:fbdetailing52@gmail.com" 
                    className="text-pearl-white font-semibold hover:text-champagne-gold transition-colors duration-300"
                  >
                    fbdetailing52@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-deep-black/50 rounded-xl hover:bg-deep-black/70 transition-all duration-300 group/item">
                <div className="w-10 h-10 bg-gradient-to-br from-champagne-gold to-yellow-500 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-platinum-silver">Lokalita</div>
                  <div className="text-pearl-white font-semibold">Uherské Hradiště</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-platinum-silver/10">
              <h4 className="text-lg font-semibold text-pearl-white mb-4">Sledujte nás</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/fbdetailing52" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 group/social"
                >
                  <Instagram className="w-6 h-6 text-white group-hover/social:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://facebook.com/fbdetailing52" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 group/social"
                >
                  <Facebook className="w-6 h-6 text-white group-hover/social:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 p-6 bg-gradient-to-r from-champagne-gold/10 to-transparent rounded-2xl border border-champagne-gold/20">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-champagne-gold mr-3" />
                <h4 className="text-xl font-semibold text-pearl-white">Otevírací doba</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-platinum-silver">Pondělí - Pátek</span>
                  <span className="text-pearl-white font-semibold">16:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-platinum-silver">Sobota - Neděle</span>
                  <span className="text-pearl-white font-semibold">8:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center justify-center space-x-6 text-center">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-champagne-gold" />
                <span className="text-sm text-platinum-silver">4.8 hodnocení</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-platinum-silver">60+ klientů</span>
              </div>
            </div>
          </div>

          {/* Reservation Form Card */}
          <div id="reservation-form" className="bg-gradient-to-br from-graphite-grey/80 to-graphite-grey/40 backdrop-blur-sm p-8 rounded-3xl border border-platinum-silver/10 hover:border-champagne-gold/30 transition-all duration-300 group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-gold rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                <Send className="w-6 h-6 text-deep-black" />
              </div>
              <h3 className="text-2xl font-bold text-pearl-white group-hover:text-champagne-gold transition-colors duration-300" role="heading" aria-level="3">
                Rezervace termínu
              </h3>
            </div>
            
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
                  className="w-full px-4 py-3 bg-deep-black/70 border border-platinum-silver/20 rounded-xl focus:border-champagne-gold focus:outline-none text-pearl-white transition-all duration-300 hover:bg-deep-black/90"
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
                  className="w-full px-4 py-3 bg-deep-black/70 border border-platinum-silver/20 rounded-xl focus:border-champagne-gold focus:outline-none text-pearl-white transition-all duration-300 hover:bg-deep-black/90"
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
                  className="w-full px-4 py-3 bg-deep-black/70 border border-platinum-silver/20 rounded-xl focus:border-champagne-gold focus:outline-none text-pearl-white transition-all duration-300 hover:bg-deep-black/90"
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
                  className="w-full px-4 py-3 bg-deep-black/70 border border-platinum-silver/20 rounded-xl focus:border-champagne-gold focus:outline-none text-pearl-white transition-all duration-300 hover:bg-deep-black/90"
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
                  className="w-full px-4 py-3 bg-deep-black/70 border border-platinum-silver/20 rounded-xl focus:border-champagne-gold focus:outline-none text-pearl-white transition-all duration-300 hover:bg-deep-black/90"
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
                  className="w-full px-4 py-3 bg-deep-black/70 border border-platinum-silver/20 rounded-xl focus:border-champagne-gold focus:outline-none text-pearl-white transition-all duration-300 hover:bg-deep-black/90 resize-none"
                  placeholder="Dodatečné informace..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-gold text-deep-black py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-champagne-gold/25 hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center justify-center space-x-2 group/btn"
              >
                <span>{isSubmitting ? 'Odesílám...' : 'Odeslat rezervaci'}</span>
                {!isSubmitting && <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;