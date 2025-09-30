import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { cs } from 'date-fns/locale';
import { supabase, type ReservationData } from '../lib/supabase';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

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
  );
};

export default ContactSection;