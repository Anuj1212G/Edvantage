import React from 'react'; // Added explicit React import for safety (though not strictly required in modern React/Vite)
import { Link } from "react-router-dom"; // Link is correctly imported here

// Component Imports
import HeroSection from "../components/HeroSection";
import ProgramsSection from "../components/ProgramsSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyEdvantageSection from "../components/WhyEdvantageSection";
import WhatsAppButton from "../components/WhatsAppButton";

// NOTE: I did not include the 'MediaSpotlightSection' you were working on earlier,
// as it was not present in the original import list.

export default function Home() {
  return (
    <>
      {/* ======================= */}
      {/* Component Sections      */}
      {/* ======================= */}
      <HeroSection />
      <ProgramsSection />
      <StatsSection />
      <TestimonialsSection />
      <WhyEdvantageSection />
      <WhatsAppButton />
      {/* ======================= */}
      {/* Enhanced E-Learning Link */}
      {/* ======================= */}

    </>
  );
}