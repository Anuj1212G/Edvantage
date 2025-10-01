import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Reservoir Engineer',
      company: 'ExxonMobil',
      program: 'Petroleum Engineering Excellence',
      rating: 5,
      quote: "The comprehensive curriculum and expert instructors at Edvantage Learning transformed my understanding of reservoir engineering. The practical approach and real-world case studies prepared me for the challenges in my current role.",
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'HSE Manager',
      company: 'Shell',
      program: 'HSE Leadership Program',
      rating: 5,
      quote: "Outstanding program that enhanced my leadership skills in health, safety, and environmental management. The interactive workshops and peer learning experiences were invaluable for my career growth.",
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      position: 'Digital Transformation Lead',
      company: 'Chevron',
      program: 'Digital Oil Field Technologies',
      rating: 5,
      quote: "The future of oil and gas is digital, and Edvantage Learning prepared me perfectly for this transformation. The cutting-edge content and industry connections opened new opportunities in my career.",
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Ahmed Al-Rashid',
      position: 'Operations Manager',
      company: 'Saudi Aramco',
      program: 'Corporate Training Program',
      rating: 5,
      quote: "The customized corporate training program addressed our specific operational challenges. The expert facilitators and practical solutions implementation made a significant impact on our team's performance.",
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from professionals who advanced their careers through our programs
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-6xl text-blue-100">
                <Quote className="h-16 w-16" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic">
                  "{currentData.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={currentData.image}
                      alt={currentData.name}
                      className="h-16 w-16 rounded-full object-cover border-4 border-blue-200"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900">{currentData.name}</h4>
                    <p className="text-blue-600 font-semibold">{currentData.position}</p>
                    <p className="text-gray-600">{currentData.company}</p>
                    <p className="text-sm text-teal-600 font-medium mt-1">{currentData.program}</p> {/* Orange changed to Teal */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.quote.substring(0, 120)}...
              </p>
              <p className="text-xs text-teal-600 font-medium mt-2">{testimonial.program}</p> {/* Orange changed to Teal */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;