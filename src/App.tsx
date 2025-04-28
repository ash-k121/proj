import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Demo from './components/Demo';
import Impact from './components/Impact';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins text-gray-800 overflow-x-hidden">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="how-it-works" className="py-16 md:py-24">
          <HowItWorks />
        </section>
        <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
          <Features />
        </section>
        <section id="demo" className="py-16 md:py-24">
          <Demo />
        </section>
        <section id="impact" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-blue-50">
          <Impact />
        </section>
        <section id="get-started" className="py-16 md:py-24">
          <GetStarted />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;