import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyEdvantageSection from './components/WhyEdvantageSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <StatsSection />
        <TestimonialsSection />
        <WhyEdvantageSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;