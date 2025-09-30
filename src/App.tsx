import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-black text-pearl-white animate-initial-fade-in">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;