import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app'>
      <Navbar  />
      <HeroSection  />
      <HowItWorks  />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
