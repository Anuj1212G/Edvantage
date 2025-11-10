import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajveer Singh Choudhary",
      quote:
        "This training enhanced my technical expertise and opened new career opportunities.",
      feedback:
        ". I comprehensively felt that I always found new something useful in data science analysis using python in every session. Then, I was very joyful during entire sessions with the speakers. I will recommend this course to my friends and colleagues. Thanks, Edvantage..",
      position: "Senior Associate Consultant",
      company: "Infosys",
      logo: "/images/Infosys.png",
      image: "/images/Rajveer.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Ashish",
      
      quote:
        "The Well Engineering internship shaped my technical foundation for a strong career start.",
      feedback:
        "The curriculum lasted three months and was practical in nature, requiring ex- tensive effort and study. The genuine casing design of our well based on the available real offset field data was the best aspect of this internship. My inter- est in deepwater well design was piqued during this assignment.",
      position: "Placed at",
      company: "ONGC",
      logo: "/images/ongc.png",
      image: "/images/Ashish.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Navan Kumar Sahu",
      quote:
        "Digital tools in stratigraphy gave me a new perspective on subsurface interpretation.",
      feedback:
        "I will say the course was really well structured and the topic of the course was Sequence Stratigraphy in the Era of Digitalization.I have really enjoyed the course learning with an industry expert and a big thumbs up from my side for this course and a big thank you to the whole team of EDvantage India for introducing an amazing course to us.",
      position: "Placed at",
      company: "ONGC",
      logo: "/images/ongc.png",
      image: "/images/Navan.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Aakansha",
      quote:
        "This training gave me the confidence to connect geology with digital innovation.",
      feedback:
        "I have done training in Sequence Stratigraphy which was very helpful for my future. The instructor of the course Mr Tapas Mitra helps me a lot and makes me understand the concept well. EDvanatage India helps me to get the internship.",
      position: "Placed at",
      company: "Lepton Software",
      logo: "/images/lepton.png",
      image: "/images/Aakansha.png",
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
      rating: 5,
    },
    {
      id: 9,
      name: "Ali Haris",
      quote:
        "Learning digital stratigraphy gave me the industry-ready skills I was looking for.",
      feedback:
        "The course was very helpful for me. The instructors and the entire team of EDvantage were very very helpful and the course was very informative for me and I encourage everyone to take a course from EDvntage since the course structure and entire team is really helpful.",
      position: "Placed at",
      company: "Rezlytics",
      logo: "/images/rezlytix.png",
      image: "/images/Ali.png",
      rating: 5,
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
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Success Stories from Our Placed Participants
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mb-12">
          Discover inspiring success stories of learners who transformed their careers
          through our impactful programs.
        </p>

        {/* TOP TWO TESTIMONIALS */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-10 items-stretch transition-transform duration-700 ease-in-out">
            {visibleTestimonials.map((t, index) => (
              <div
                key={`${t.id}-${index}`}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
              >
                <div className="flex flex-col md:flex-row min-h-[380px]">
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <p className="text-xl font-semibold text-blue-700 mb-4 leading-snug">
                      “{t.quote}”
                    </p>
                    <p className="text-gray-700 leading-relaxed">{t.feedback}</p>
                  </div>

                  <div className="md:w-1/2 flex">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full object-cover"
                      style={{ height: "360px", objectPosition: "top" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center text-center py-6">
                  <h4 className="font-extrabold text-gray-900 text-3xl mb-1">{t.name}</h4>
                  <p className="text-lg text-gray-600 mb-3">
                    {t.position}, {t.company}
                  </p>
                  <img
                    src={t.logo}
                    alt={t.company}
                    className="w-44 h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
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

        {/* ⭐ NEW FEEDBACK BOX SECTION BELOW */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-10 transition-all duration-700 ease-in-out">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">
            What Our Learners Say
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-blue-50 p-6 rounded-2xl shadow-inner border border-blue-100 transition hover:shadow-lg"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-gray-800 italic mb-4 leading-relaxed">
                  “{t.feedback}”
                </p>

                {/* Name and Company */}
                <div className="mt-3">
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-blue-700 font-medium">
                    {t.position}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END FEEDBACK BOX */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
