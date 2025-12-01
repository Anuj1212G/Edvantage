import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ⭐ Reusable Star Rating Component */
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 my-2">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">★</span>
        ))}
      {halfStar && <span className="text-yellow-500 text-lg">☆</span>}
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbackIndex, setFeedbackIndex] = useState(0);

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
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
      position: "Digital Well Operations Analyst",
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
        "The Sequence Stratigraphy in the Era of Digitalization program helped me understand modern geological interpretation using digital tools. The course structure and mentor guidance gave me the clarity and confidence to secure my role at Rezlytics.",
      position: "Placed at",
      company: "Rezlytics",
      logo: "/images/rezlytix.png",
      image: "/images/Ali.png",
      rating: 5,
    },
  ];

  /* ⭐ Add ratings for bottom feedback */
  const learnerFeedback = [
    {
      name: "Imtiaz Ahmed",
      position: "MS Petroleum Engineering, Khazar University, Azerbaijan",
      text: "The training covered Python, ML, and DL with strong petroleum-focused applications...",
      rating: 5,
    },
    {
      name: "Prashant Kumar",
      position: "Geophysicist, Lagos (E&P Company)",
      text: "Detailed and professionally structured. Extremely helpful for career growth...",
      rating: 4.5,
    },
    {
      name: "Syed Suhail Ahmed",
      position: "Student, Presidency University",
      text: "Real industry examples made concepts easy. Amazing for beginners...",
      rating: 4,
    },
    {
      name: "Sahil Vora",
      position: "B.Tech, PDEU Gandhinagar",
      text: "Hands-on approach made learning highly effective...",
      rating: 5,
    },
    {
      name: "Hossein Rashidi",
      position: "CMMS Engineer, Major Gas Refinery, Iran",
      text: "Very useful for refinery analytics. Highly recommended...",
      rating: 4.5,
    },
    {
      name: "Muhammad Yunus",
      position: "MS Geoscience, Taiwan",
      text: "Insightful, beginner-friendly, and outstanding support...",
      rating: 5,
    },
    {
      name: "Mahdi",
      position: "Senior Petroleum Engineering Student, University of Basrah",
      text: "Helped me grow from beginner to confident professional...",
      rating: 4.5,
    },
  ];

  /* --------------------- AUTO ROTATION --------------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeedbackIndex((prev) => (prev + 2) % learnerFeedback.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [learnerFeedback.length]);

  const next = () => setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  const nextFeedback = () => setFeedbackIndex((prev) => (prev + 2) % learnerFeedback.length);
  const prevFeedback = () => setFeedbackIndex((prev) => (prev - 2 + learnerFeedback.length) % learnerFeedback.length);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Success Stories from Our Placed Participants
        </h2>

        {/* ---------- TOP TESTIMONIAL CARDS ---------- */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map(
              (t, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 md:p-6 md:w-1/2 flex flex-col justify-center gap-2">
                      <p className="text-base md:text-lg text-blue-700">“{t.quote}”</p>
                      <p className="text-gray-700 text-xs md:text-sm">{t.feedback}</p>
                    </div>

                    <img
                      src={t.image}
                      className="md:w-1/2 h-64 md:h-72 object-cover object-top"
                      alt={t.name}
                    />
                  </div>

                  <div className="text-center py-4 md:py-5 flex flex-col items-center gap-1">
                    <h4 className="text-xl md:text-2xl font-extrabold">{t.name}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{t.position}, {t.company}</p>
                    <img src={t.logo} className="w-24 h-12 md:w-28 md:h-14 object-contain mt-1" alt={t.company} />
                  </div>
                </div>
              )
            )}
          </div>

          <button onClick={prev} className="hidden md:flex absolute left-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md">
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button onClick={next} className="hidden md:flex absolute right-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md">
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* ---------- BOTTOM FEEDBACK SECTION ---------- */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
            What Our Learners Say
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[learnerFeedback[feedbackIndex], learnerFeedback[(feedbackIndex + 1) % learnerFeedback.length]].map(
              (fb, i) => (
                <div key={i} className="bg-blue-50 p-5 rounded-2xl shadow-inner border flex flex-col justify-between">
                  
                  <p className="italic text-gray-800 text-sm md:text-base mb-3">
                    “{fb.text}”
                  </p>

                  {/* ⭐ Inserted Star Rating */}
                  <StarRating rating={fb.rating} />

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{fb.name}</h4>
                    <p className="text-blue-700 font-medium text-sm md:text-base">
                      {fb.position}
                    </p>
                  </div>

                </div>
              )
            )}
          </div>

          <button onClick={prevFeedback} className="hidden md:flex absolute left-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md">
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button onClick={nextFeedback} className="hidden md:flex absolute right-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md">
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;