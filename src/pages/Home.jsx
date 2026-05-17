import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AutomationFlow from '../components/AutomationFlow';
import Pricing from '../components/Pricing';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <AutomationFlow />
      <Benefits />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
