import HeroSection from "../components/HeroSection";
import ProgramsSection from "../components/ProgramsSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyEdvantageSection from "../components/WhyEdvantageSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <StatsSection />
      <TestimonialsSection />
      <WhyEdvantageSection />

      <div className="text-center my-10">
        <Link
          to="/elearning"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500"
        >
          Go to E-Learning
        </Link>
      </div>
    </>
  );
}
