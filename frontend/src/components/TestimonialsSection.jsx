import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajveer Singh Choudhary",
      quote:
        "This training enhanced my technical expertise and opened new career opportunities.",
      feedback:
        "The Cement Slurry Design program deepened my understanding of well cementing principles and real-field design applications. The hands-on sessions and expert-led discussions helped me strengthen my professional capabilities and grow in my role at Infosys.",
      position: "Senior Associate Consultant",
      company: "Infosys",
      logo: "/images/Infosys.png",
      image: "/images/Rajveer.png",
    },
    {
      id: 2,
      name: "Ashish",
      quote:
        "The Well Engineering internship shaped my technical foundation for a strong career start.",
      feedback:
        "The internship program gave me a clear understanding of drilling design, well operations, and engineering practices. Working on real-world case studies helped me secure my opportunity with ONGC.",
      position: "Placed at",
      company: "ONGC",
      logo: "/images/ongc.png",
      image: "/images/Ashish.png",
    },
    {
      id: 3,
      name: "Navan Kumar Sahu",
      quote:
        "Digital tools in stratigraphy gave me a new perspective on subsurface interpretation.",
      feedback:
        "The Sequence Stratigraphy in the Era of Digitalization training helped me combine geological knowledge with modern data techniques. This course gave me the professional edge to begin my journey at ONGC.",
      position: "Placed at",
      company: "ONGC",
      logo: "/images/ongc.png",
      image: "/images/Navan.png",
    },
    {
      id: 4,
      name: "Aakansha",
      quote:
        "This training gave me the confidence to connect geology with digital innovation.",
      feedback:
        "The Sequence Stratigraphy in the Era of Digitalization program helped me explore data-driven geological analysis. The sessions were interactive and industry-relevant, helping me secure my position at Lepton Software.",
      position: "Placed at",
      company: "Lepton Software",
      logo: "/images/lepton.png",
      image: "/images/Aakansha.png",
    },
    {
      id: 5,
      name: "Saksham Vats",
      quote:
        "Reservoir training transformed my understanding of field development and analysis.",
      feedback:
        "The course provided practical exposure to reservoir concepts and helped me understand real-time production optimization. It played a vital role in helping me join Enverus.",
      position: "Placed at",
      company: "Enverus",
      logo: "/images/enverus.png",
      image: "/images/Saksham.png",
    },
    {
      id: 6,
      name: "Mohammed Ishtiyaq",
      quote:
        "The Data Analytics diploma opened doors to my career in digital oilfield operations.",
      feedback:
        "Through the Diploma in Oil & Gas Data Analytics, I developed strong analytical and data interpretation skills for well operations. The practical modules and mentorship helped me secure my role at SLB as a Data Analyst.",
      position: "Digital Well Operations Data Analyst / Data Logger",
      company: "SLB",
      logo: "/images/slb.png",
      image: "/images/Mohammed.png",
    },
    {
      id: 7,
      name: "Rumana Akther",
      quote:
        "This program built my technical depth and confidence to enter global oilfield services.",
      feedback:
        "The Comprehensive Development Program with emphasis on Drilling and Well Engineering helped me connect classroom learning to field applications. It gave me the solid foundation I needed for my position at Halliburton.",
      position: "Associate Technical Professional",
      company: "Halliburton",
      logo: "/images/Halliburton.png",
      image: "/images/Rumana.png",
    },
    {
      id: 8,
      name: "Varshita Solanki",
      quote:
        "Industry-focused training that prepared me for success in oilfield operations.",
      feedback:
        "The Comprehensive Oil & Gas Development Program gave me exposure to drilling, reservoir, and production concepts with real-time case studies. The learning experience helped me earn my position at SLB.",
      position: "Reservoir Engineer",
      company: "SLB",
      logo: "/images/slb.png",
      image: "/images/Varshita.png",
    },
    {
      id: 9,
      name: "Ali Haris",
      quote:
        "Learning digital stratigraphy gave me the industry-ready skills I was looking for.",
      feedback:
        "The Sequence Stratigraphy in the Era of Digitalization program helped me understand modern geological interpretation using digital tools. The course structure and mentor guidance gave me the clarity and confidence to secure my role at Rezlytics.",
      position: "Placed at",
      company: "Rezlytics",
      logo: "/images/rezlytix.png",
      image: "/images/Ali.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) =>
      prev - 2 < 0 ? testimonials.length - 2 : prev - 2
    );

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Success Stories from Our Placed Participants
        </h2>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-10 transition-transform duration-700 ease-in-out items-stretch">
            {visibleTestimonials.map((t, index) => (
              <div
                key={`${t.id}-${index}`}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[560px] max-h-[560px] h-full"
              >
                {/* Left Section (Text) */}
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-xl font-semibold text-blue-700 mb-4 leading-snug">
                      “{t.quote}”
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {t.feedback}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-600">
                        {t.position}, {t.company}
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-gray-50 rounded-md p-2 w-24 h-12">
                      <img
                        src={t.logo}
                        alt={t.company}
                        className="object-contain max-h-10 w-full"
                        style={{
                          filter: "none",
                          mixBlendMode: "normal",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Section (Image) */}
                <div className="md:w-1/2 relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md"
          >
            <ChevronLeft className="text-gray-700 h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md"
          >
            <ChevronRight className="text-gray-700 h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
