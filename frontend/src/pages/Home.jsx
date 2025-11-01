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
<div className="text-center my-16">
        <Link
          to="/courses"
          className="
            inline-flex items-center justify-center 
            bg-blue-600 text-white 
            font-semibold tracking-wide 
            px-10 py-4 
            text-lg
            rounded-xl
            shadow-lg shadow-blue-500/50
            transition-all duration-200 
            focus:outline-none focus:ring-4 focus:ring-blue-500/50 
            hover:bg-blue-700
            hover:shadow-xl hover:shadow-blue-500/70
          "
        >
          Go to E-Learning
        </Link>
      </div>
    </>
  );
}