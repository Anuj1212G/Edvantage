import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const heroSlides = [
    {
      title: "Fuel Your Career with 200+ Oil & Gas Trainings",
      subtitle:
        "Master the oil & gas industry with our specialized programs. Gain practical skills to advance in this dynamic sector.",
      cta: "Explore Programs",
      img: "/images/slide1.png", // replace with your image
    },
    {
      title: "Earn Energy Diploma from World-Class Universities",
      subtitle:
        "Earn internationally recognized diplomas from top institutions. Upgrade your skills with industry-aligned courses designed for real-world impact.",
      cta: "View Diplomas",
      img: "/images/slide2.png",
    },
    {
      title: "10,000+ Global Participants with 1000+ Placements",
      subtitle:
        "Become part of our thriving global community. Benefit from a proven record with 1000+ successful placements.",
      cta: "See Success Stories",
      img: "/images/slide3.png",
    },
    {
      title: "Personalized Mentorship for Your Success",
      subtitle:
        "Get dedicated 1-to-1 guidance from industry mentors. Receive support tailored to your career goals.",
      cta: "Meet Mentors",
      img: "/images/slide4.png",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {heroSlides[slideIndex].title}
          </h2>
          <p className="text-gray-600">{heroSlides[slideIndex].subtitle}</p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition">
              {heroSlides[slideIndex].cta}
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition">
              Request Info
            </button>
          </div>

          {/* Scroll Dots */}
          <div className="flex gap-2 mt-6">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === slideIndex ? "bg-indigo-600 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <img
            src={heroSlides[slideIndex].img}
            alt={heroSlides[slideIndex].title}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
