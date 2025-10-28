import React from 'react'; // Added explicit React import for safety (though not strictly required in modern React/Vite)
import { Link } from "react-router-dom"; // Link is correctly imported here

// Component Imports
import HeroSection from "../components/HeroSection";
import ProgramsSection from "../components/ProgramsSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyEdvantageSection from "../components/WhyEdvantageSection";
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
      {/* ======================= */}
      {/* Enhanced E-Learning Link */}
      {/* ======================= */}
      <div className="text-center my-16">
        <Link
          to="/elearning"
          className="
            inline-flex items-center justify-center 
            bg-blue-600 text-white 
            font-semibold tracking-wide 
            px-8 py-3 
            rounded-xl  /* More rounded corners for a modern look */
            shadow-lg shadow-blue-500/50 /* Prominent, colored shadow */
            transition-all duration-200 
            focus:outline-none focus:ring-4 focus:ring-blue-500/50 
            hover:bg-blue-700 /* Slightly darker hover color */
            hover:shadow-xl hover:shadow-blue-500/70 /* Enhanced shadow on hover */
          "
        >
          Go to E-Learning
        </Link>
      </div>
    </>
  );
}