import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyEdvantageSection from './components/WhyEdvantageSection';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import TrainingPrograms from './pages/TrainingPrograms';
import WebinarsEvents from './pages/WebinarsEvents';
import PlacementsSuccess from './pages/PlacementsSuccess';
import { useState } from 'react';
import LoginModal from './components/Auth/LoginModal';
import SignupModal from './components/Auth/SignupModal';

const HomePage: React.FC<{ onSignupClick: () => void }> = ({ onSignupClick }) => (
  <>
    <HeroSection onSignupClick={onSignupClick} />
    <ProgramsSection />
    <StatsSection />
    <TestimonialsSection />
    <WhyEdvantageSection />
  </>
);

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onSignupClick={() => setShowSignupModal(true)} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/programs" element={<TrainingPrograms />} />
            <Route path="/webinars" element={<WebinarsEvents />} />
            <Route path="/placements" element={<PlacementsSuccess />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Auth Modals */}
        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => setShowLoginModal(false)}
          onSwitchToSignup={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
        />
        <SignupModal 
          isOpen={showSignupModal} 
          onClose={() => setShowSignupModal(false)}
          onSwitchToLogin={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      </div>
    </Router>
  );
}

export default App;
