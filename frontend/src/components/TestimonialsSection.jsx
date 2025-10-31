import React, { useState, useEffect } from 'react';
// Removed 'Quote' as it's no longer used in the main testimonial
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ali Haris',
      position: 'Intern',
      company: 'Rezlytix (MSc Applied Geology, AMU)',
      program: 'Digitalization in Sequence Stratigraphy',
      rating: 5,
      quote:
        'The course was very helpful for me. The instructors and the entire team of EDvantage India were very very helpful and the course was very informative for me and I encourage everyone to take a course from EDvantage India since the course structure and entire team is really helpful.',
      image:
        '/images/Suss1.png',
    },
    {
      id: 2,
      name: 'Sheily Mukherjee',
      position: 'Intern',
      company: 'Rezlytix (MSc Student, IIT ISM Dhanbad)',
      program: 'Online Training in Sequence Stratigraphy',
      rating: 5,
      quote:
        'The training program was very well conducted and some very important topics were taught very well to us which really help us to broaden our knowledge... I am really grateful to EDvantage India for providing this opportunity to us and I am really looking forward to this new learning experience.',
      image:
        '/images/Suss2.png',
    },
    {
      id: 3,
      name: 'Aakansha',
      position: 'Intern',
      company: 'Rezlytix (Masters in Applied Geology)',
      program: 'Training in Sequence Stratigraphy',
      rating: 5,
      quote:
        'I have done training in Sequence Stratigraphy which was very helpful for my future. The instructor of the course Mr Tapas Mitra helps me a lot and makes me understand the concept well. EDvantage India helps me to get the internship.',
      image:
        '/images/Suss3.png',
    },
    {
      id: 4,
      name: 'Navan Kumar Sahu',
      position: 'Intern',
      company: 'Rezlytix (MSc Student, IIT ISM Dhanbad)',
      program: 'Sequence Stratigraphy in the Era of Digitalization',
      rating: 5,
      quote:
        'I am happy to share that I have been selected for an internship with RezLytix... The course was really well structured... I have really enjoyed the course learning with an industry expert and a big thumbs up from my side for this course and a big thank you to the whole team of EDvantage India.',
      image:
        '/images/Suss4.png',
    },
    {
      id: 5,
      name: 'Ashish',
      position: 'Placed',
      company: 'ONGC',
      program: 'Internship Programme in Well Engineering',
      rating: 5,
      quote:
        'EDvantage India has provided me with a number of training opportunities. The curriculum lasted three months and was practical in nature... The genuine casing design of our well based on the available real offset field data was the best aspect of this internship.',
      image:
        '/images/Suss5.png',
    },
    {
      id: 6,
      name: 'Soumya Krishna',
      position: 'Placed',
      company: 'Cairn Oil & Gas',
      program: 'PVT Data tuning and Artificial Lift modelling',
      rating: 5,
      quote:
        'During my training with Edvantage India... The faculty was a production technologist and he covered every content from basics till advanced. He was very responsive and cleared my doubts... This wonderful training experience enhanced my technical skills and also aided me during my campus placement.',
      image:
        '/images/Suss6.png',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Changed from 5000 to 3000 (3 seconds)
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-black mb-4">
            What Our Participants Say
          </h2>
          <p className="text-2xl text-black max-w-3xl mx-auto font-medium">
            Success stories from professionals who advanced their careers through
            our programs
          </p>
        </div>


        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* UPDATED: Added fixed height md:h-[450px] to grid container */}
            <div className="md:grid md:grid-cols-2 md:items-stretch md:h-[450px]">
              
              {/* Left Column (Text) */}
              {/* UPDATED: Added overflow-y-auto in case text is long */}
              <div className="p-8 md:p-12 overflow-y-auto">
                {/* Heading (Program Name) */}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {currentData.program}
                </h3>

                {/* Quote Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{currentData.quote}"
                </blockquote>

                {/* Author Info (Text Only) */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {currentData.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentData.position}, {currentData.company}
                  </p>
                </div>
              </div>

              {/* Right Column (Image) */}
              {/* UPDATED: Set h-80 for mobile, md:h-full for desktop, and relative */}
              <div className="w-full h-80 md:h-full relative">
                <img
                  src={currentData.image}
                  alt={currentData.name}
                  // UPDATED: Use absolute positioning to fill the container perfectly
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

            </div>
          </div>

          {/* Navigation Buttons (Unchanged) */}
          <button
            onClick={prevTestimonial}
            // UPDATED: Changed position and style
            className="absolute left-0 md:left-[-2.5rem] top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md rounded-full p-3 hover:bg-gray-200 transition-colors duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            // UPDATED: Changed position and style
            className="absolute right-0 md:right-[-2.5rem] top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md rounded-full p-3 hover:bg-gray-200 transition-colors duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Testimonial Indicators (UPDATED) */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              // UPDATED: Changed to pill-style indicators
              className={`transition-all duration-300 ${
                index === currentTestimonial
                  ? 'w-5 h-2 bg-blue-600 rounded-full' // Active state: wider pill
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400' // Inactive state: small dot
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid (Unchanged) */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === currentTestimonial
                  ? 'border-2 border-blue-600 scale-105' // Highlighted state
                  : 'border-2 border-transparent' // Default state
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
D                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.quote.substring(0, 120)}...
              </p>
              <p className="text-xs text-teal-600 font-medium mt-2">
                {testimonial.program}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
