import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  /* --------------------- TOP TESTIMONIALS (REWRITTEN CONTENT) --------------------- */
  const testimonials = [
    {
      id: 1,
      name: "Rajveer Singh Choudhary",
      quote:
        "This training expanded my technical understanding and strengthened my career foundation.",
      feedback:
        "Every session introduced valuable new insights. The instructors explained concepts clearly, and the experience consistently exceeded expectations.",
      position: "Senior Associate Consultant",
      company: "Infosys",
      logo: "/images/Infosys.png",
      image: "/images/Suss8.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Ashish",
      quote: "The Well Engineering internship laid the groundwork for my technical growth.",
      feedback:
        "The curriculum was thorough and industry-focused. Designing a real casing program using offset well data was especially impactful.",
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
        "Digital tools in stratigraphy opened a new dimension in subsurface interpretation.",
      feedback:
        "The course was well-structured and delivered by an industry expert. Practical demonstrations made the concepts easy to understand and apply.",
      position: "Placed at",
      company: "ONGC",
      logo: "/images/ongc.png",
      image: "/images/Navan.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Aakansha",
      quote: "This training helped me bridge geology with modern digital tools.",
      feedback:
        "The Sequence Stratigraphy program was very helpful. The instructor explained each concept with clarity and patience.",
      position: "Placed at",
      company: "Lepton Software",
      logo: "/images/lepton.png",
      image: "/images/Aakansha.png",
      rating: 5,
    },
    {
      id: 5,
      name: "Saksham Vats",
      quote: "The reservoir course reshaped my understanding of subsurface development.",
      feedback:
        "It provided hands-on exposure to reservoir workflows and production insights. It strongly supported my journey to Enverus.",
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
        "The Data Analytics diploma helped me enter the digital oilfield domain with confidence.",
      feedback:
        "I built strong analytical and problem-solving skills. The training played a major role in helping me join SLB.",
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
        "This program strengthened my technical foundation for global oilfield services.",
      feedback:
        "It connected theoretical knowledge with field operations. The training prepared me well for my role at Halliburton.",
      position: "Associate Technical Professional",
      company: "Halliburton",
      logo: "/images/Halliburton.png",
      image: "/images/Rumana.png",
      rating: 5,
    },
    {
      id: 8,
      name: "Varshita Solanki",
      quote: "Industry-aligned learning prepared me for growth in oilfield operations.",
      feedback:
        "The course covered drilling, reservoir, and production concepts with real project examples. It helped me earn a role at SLB.",
      position: "Reservoir Engineer",
      company: "SLB",
      logo: "/images/slb.png",
      image: "/images/Varshita.png",
      rating: 5,
    },
    {
      id: 9,
      name: "Ali Haris",
      quote: "Digital stratigraphy training provided me with relevant industry-ready skills.",
      feedback:
        "The course was informative, and the faculty was extremely supportive. I highly recommend it to aspiring professionals.",
      position: "Placed at",
      company: "Rezlytics",
      logo: "/images/rezlytix.png",
      image: "/images/Ali.png",
      rating: 5,
    },
  ];

  /* --------------------- BOTTOM FEEDBACK (UPDATED 3–5 LINES) --------------------- */
  const learnerFeedback = [
    {
      name: "Imtiaz Ahmed",
      position: "MS Petroleum Engineering, Khazar University, Azerbaijan",
      text: "The training covered Python, ML, and DL with strong petroleum-focused applications. The instructors demonstrated excellent command over each concept and maintained a positive learning environment. A highly valuable program for anyone entering petroleum data science.",
    },
    {
      name: "Prashant Kumar",
      position: "Geophysicist, Lagos (E&P Company)",
      text: "The three-month data science program was detailed and professionally structured. It covered Python, ML, DL, databases, and analytics comprehensively. The tutors were excellent, making this course extremely helpful for career growth in oil and gas.",
    },
    {
      name: "Syed Suhail Ahmed",
      position: "Student, Presidency University",
      text: "As a fresher, I gained a strong understanding of data science through real industry examples. The faculty shared practical insights and live project workflows, making learning easier. Perfect for students entering data analysis roles.",
    },
    {
      name: "Sahil Vora",
      position: "B.Tech, PDEU Gandhinagar",
      text: "A comprehensive and easy-to-follow program covering Python, Pandas, ML, DL, and visualization. The instructors explained complex concepts clearly, and the hands-on approach made learning highly effective. Great for academic and professional growth.",
    },
    {
      name: "Hossein Rashidi",
      position: "CMMS Engineer, Major Gas Refinery, Iran",
      text: "A very useful course for understanding data science applications in refinery and maintenance operations. It motivated me to integrate data mining into my job. I gladly recommend it to engineers seeking modern analytical skills.",
    },
    {
      name: "Muhammad Yunus",
      position: "MS Geoscience, National Dong Hwa University, Taiwan",
      text: "Insightful, beginner-friendly, and well delivered. I consistently learned something new in every session. Training quality and Edvantage’s support were excellent. Highly recommended for geoscience learners.",
    },
    {
      name: "Mahdi",
      position: "Senior Petroleum Engineering Student, University of Basrah",
      text: "An outstanding program full of real industry assignments and problem-solving exercises. It helped me grow from a beginner to a confident learner without requiring prior experience. I will definitely recommend it to my network.",
    },
  ];

  /* --------------------- AUTO ROTATIONS --------------------- */
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

  /* --------------------- MANUAL CONTROLS --------------------- */
  const next = () => setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  const nextFeedback = () =>
    setFeedbackIndex((prev) => (prev + 2) % learnerFeedback.length);

  const prevFeedback = () =>
    setFeedbackIndex((prev) => (prev - 2 + learnerFeedback.length) % learnerFeedback.length);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* --------------------- TITLE --------------------- */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Success Stories from Our Placed Participants
        </h2>

        {/* --------------------- TOP SLIDER --------------------- */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-10">

            {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map(
              (t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden h-[650px] flex flex-col"
                >
                  <div className="flex flex-col md:flex-row h-[380px]">
                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                      <p className="text-xl text-blue-700 mb-4">“{t.quote}”</p>
                      <p className="text-gray-700">{t.feedback}</p>
                    </div>

                    <img
                      src={t.image}
                      className="md:w-1/2 h-full object-cover object-top"
                      alt={t.name}
                    />
                  </div>

                  <div className="text-center py-6 h-[200px] flex flex-col justify-center">
                    <h4 className="text-3xl font-extrabold">{t.name}</h4>
                    <p className="text-gray-600">
                      {t.position}, {t.company}
                    </p>
                    <img
                      src={t.logo}
                      className="w-40 h-20 object-contain mx-auto mt-2"
                    />
                  </div>
                </div>
              )
            )}
          </div>

          {/* --------------------- TOP ARROWS --------------------- */}
          <button
            onClick={prev}
            className="absolute left-[-2rem] top-1/2 -translate-y-1/2 
            bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 
            bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* --------------------- BOTTOM FEEDBACK SLIDER --------------------- */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-10 relative">
          <h3 className="text-3xl font-bold text-center text-black mb-10">
            What Our Learners Say
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {[learnerFeedback[feedbackIndex], learnerFeedback[(feedbackIndex + 1) % learnerFeedback.length]].map(
              (fb, i) => (
                <div
                  key={i}
                  className="bg-blue-50 p-6 rounded-2xl shadow-inner border h-[250px] flex flex-col justify-between"
                >
                  <p className="italic text-gray-800">“{fb.text}”</p>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{fb.name}</h4>
                    <p className="text-blue-700 font-medium">{fb.position}</p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* --------------------- BOTTOM ARROWS --------------------- */}
          <button
            onClick={prevFeedback}
            className="absolute left-[-2rem] top-1/2 -translate-y-1/2 
            bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextFeedback}
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 
            bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
