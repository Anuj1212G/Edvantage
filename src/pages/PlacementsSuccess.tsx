import React, { useState } from 'react';
import { Star, MapPin, TrendingUp, Building, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import type { SuccessStory } from '../types';

const PlacementsSuccess: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories: SuccessStory[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Senior Reservoir Engineer',
      company: 'ExxonMobil',
      program: 'Petroleum Engineering Excellence',
      quote: "The comprehensive curriculum and expert instructors at Edvantage Learning transformed my understanding of reservoir engineering. Within 6 months of completing the program, I secured a senior position with a 40% salary increase.",
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Junior Engineer',
      salaryIncrease: '40%',
      location: 'Houston, TX'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'HSE Manager',
      company: 'Shell',
      program: 'HSE Leadership Program',
      quote: "The HSE Leadership Program gave me the confidence and skills to lead safety initiatives across multiple offshore platforms. The practical approach and industry connections were invaluable.",
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Safety Coordinator',
      salaryIncrease: '35%',
      location: 'Aberdeen, UK'
    },
    {
      id: '3',
      name: 'Elena Rodriguez',
      position: 'Digital Transformation Lead',
      company: 'Chevron',
      program: 'Digital Oil Field Technologies',
      quote: "The digital transformation program opened up a completely new career path for me. I now lead digital initiatives that are revolutionizing how we operate our fields.",
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Operations Engineer',
      salaryIncrease: '50%',
      location: 'Calgary, Canada'
    },
    {
      id: '4',
      name: 'Ahmed Al-Rashid',
      position: 'Operations Manager',
      company: 'Saudi Aramco',
      program: 'Corporate Training Program',
      quote: "The leadership skills and operational excellence principles I learned have been instrumental in managing complex projects and leading high-performing teams.",
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Senior Engineer',
      salaryIncrease: '45%',
      location: 'Dhahran, Saudi Arabia'
    },
    {
      id: '5',
      name: 'Jennifer Williams',
      position: 'Production Engineer',
      company: 'ConocoPhillips',
      program: 'Petroleum Engineering Excellence',
      quote: "The hands-on approach and real-world case studies prepared me perfectly for the challenges in production engineering. The career support was exceptional.",
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Graduate Engineer',
      salaryIncrease: '30%',
      location: 'Anchorage, AK'
    },
    {
      id: '6',
      name: 'David Thompson',
      position: 'Drilling Supervisor',
      company: 'Halliburton',
      program: 'HSE Leadership Program',
      quote: "The program's focus on safety leadership and risk management has made me a more effective supervisor. I've successfully led multiple drilling campaigns with zero incidents.",
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Drilling Engineer',
      salaryIncrease: '38%',
      location: 'Midland, TX'
    }
  ];

  const hiringPartners = [
    { name: 'ExxonMobil', logo: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Shell', logo: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Chevron', logo: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'BP', logo: 'https://images.pexels.com/photos/1860298/pexels-photo-1860298.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Total', logo: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'ConocoPhillips', logo: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[currentStoryIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-24 overflow-hidden">
  {/* Animated Background Blobs */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg
                   bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-orange-300 animate-gradient-text
                   relative overflow-hidden">
      Success Stories
      {/* Sliding Light Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/80 to-white/40 transform -skew-x-12 animate-light-slide pointer-events-none"></span>
    </h1>
    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
      Discover how our graduates have transformed their careers and achieved remarkable success
    </p>
  </div>

  <style>
    {`
      @keyframes blob {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }
      .animate-blob {
        animation: blob 8s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }

      @keyframes gradient-text {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-text {
        background-size: 200% 200%;
        animation: gradient-text 5s ease infinite;
      }

      @keyframes fade-in {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease forwards;
      }

      /* Sliding light/gloss effect */
      @keyframes light-slide {
        0% { transform: translateX(-150%) skewX(-12deg); }
        100% { transform: translateX(150%) skewX(-12deg); }
      }
      .animate-light-slide {
        animation: light-slide 2s infinite;
      }
    `}
  </style>
</section>


      {/* Key Statistics */}
      {/* Key Statistics */}
<section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8 text-center">
      
      {/* Job Placement */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
        <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center animate-bounce">
          <Users className="h-8 w-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
        <div className="text-gray-700 font-semibold">Job Placement Rate</div>
        <div className="text-sm text-gray-500 mt-1">Within 6 months</div>
      </div>

      {/* Average Salary Increase */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
        <div className="bg-green-600 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center animate-bounce">
          <TrendingUp className="h-8 w-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
        <div className="text-gray-700 font-semibold">Average Salary Increase</div>
        <div className="text-sm text-gray-500 mt-1">Post-graduation</div>
      </div>

      {/* Hiring Partners */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
        <div className="bg-orange-600 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center animate-bounce">
          <Building className="h-8 w-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
        <div className="text-gray-700 font-semibold">Hiring Partners</div>
        <div className="text-sm text-gray-500 mt-1">Global companies</div>
      </div>

      {/* Graduate Satisfaction */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
        <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center animate-bounce">
          <Award className="h-8 w-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
        <div className="text-gray-700 font-semibold">Graduate Satisfaction</div>
        <div className="text-sm text-gray-500 mt-1">Average rating</div>
      </div>

    </div>
  </div>
</section>


 
     {/* Featured Success Story */}
<section className="py-20 bg-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Success Story</h2>
      <p className="text-xl text-blue-700">Real transformations from our graduates</p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-700 to-blue-600 rounded-3xl shadow-2xl overflow-hidden h-[500px]">
        {/* Image Section */}
        <div className="md:w-1/2 relative h-64 md:h-full">
          <img
            src={currentStory.image}
            alt={currentStory.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{currentStory.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>{currentStory.salaryIncrease} salary increase</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
<div className="md:w-1/2 bg-gradient-to-b from-white/80 to-blue-50 p-6 flex flex-col justify-between rounded-r-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
  <div>
    <div className="flex items-center mb-4 space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" />
      ))}
    </div>
    <blockquote className="text-gray-800 italic mb-6 relative before:absolute before:content-['“'] before:-left-2 before:text-5xl before:text-blue-500">
      {currentStory.quote}
    </blockquote>
  </div>

  <div className="border-t border-blue-200 pt-4 mt-4">
    <h3 className="text-lg font-bold text-blue-900 mb-1">{currentStory.name}</h3>
    <p className="text-blue-700 font-semibold mb-1">{currentStory.position}</p>
    <p className="text-gray-600 mb-3">{currentStory.company}</p>

    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
      <div>
        <span className="text-blue-400 uppercase tracking-wide">Program:</span>
        <div className="font-semibold text-blue-700">{currentStory.program}</div>
      </div>
      <div>
        <span className="text-blue-400 uppercase tracking-wide">Previous Role:</span>
        <div className="font-semibold text-blue-700">{currentStory.beforeRole}</div>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevStory}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700/80 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextStory}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700/80 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Modern Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {successStories.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentStoryIndex(index)}
            className={`w-6 h-1 rounded-full cursor-pointer transition-all duration-500 ${
              index === currentStoryIndex
                ? 'bg-gradient-to-r from-blue-400 to-blue-600 scale-125'
                : 'bg-blue-200 hover:bg-blue-300'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Success Stories Grid */}
{/* Success Stories Grid */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h2>
      <p className="text-xl text-gray-600">
        Join thousands of professionals who have advanced their careers
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {successStories.slice(0, 6).map((story) => (
        <div
          key={story.id}
          className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative overflow-hidden">
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-floating-badge">
              +{story.salaryIncrease}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{story.name}</h3>
            <p className="text-blue-600 font-semibold mb-1">{story.position}</p>
            <p className="text-gray-600 text-sm mb-3">{story.company}</p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
              {story.quote}...
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{story.program}</span>
              <span>{story.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style>
    {`
      /* Floating badge animation (simplified) */
      @keyframes floating-badge {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
      }
      .animate-floating-badge {
        animation: floating-badge 3s ease-in-out infinite;
      }

      /* Smooth text truncation */
      .line-clamp-4 {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}
  </style>
</section>


      {/* Hiring Partners */}
      {/* Hiring Partners - Modern Interactive 3D Carousel */}
<section className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Partners</h2>
      <p className="text-xl text-gray-600">Leading companies that trust our graduates</p>
    </div>

    <div className="perspective w-full h-96 relative">
      <div className="carousel-3d flex justify-center items-center w-full h-full">
        {hiringPartners.map((partner, index) => {
          const total = hiringPartners.length;
          const angle = (360 / total) * index;
          return (
            <div
              key={index}
              className="carousel-item absolute flex flex-col items-center justify-center transition-transform duration-500 hover:scale-110"
              style={{
                transform: `rotateY(${angle}deg) translateZ(400px)`,
              }}
            >
              <div className="w-44 h-44 rounded-3xl bg-gradient-to-tr from-white to-blue-50 flex flex-col items-center justify-center p-4 shadow-lg hover:shadow-2xl transition-all duration-500 ring-1 ring-blue-200 hover:ring-blue-400">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <span className="mt-3 text-center font-semibold text-gray-900 text-sm md:text-base">
                  {partner.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  <style>
    {`
      .perspective {
        perspective: 1800px;
      }

      .carousel-3d {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        animation: rotateCarousel 10s linear infinite;
      }

      .carousel-item {
        backface-visibility: hidden;
      }

      /* Smooth 3D rotation */
      @keyframes rotateCarousel {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(-360deg); }
      }

      /* Interactive hover glow */
      .carousel-item:hover img {
        filter: drop-shadow(0 10px 15px rgba(0, 112, 244, 0.5));
      }

      /* Optional responsive scaling */
      @media (max-width: 768px) {
        .carousel-item div {
          width: 32vw;
          height: 32vw;
        }
        .carousel-item img {
          width: 20vw;
          height: 20vw;
        }
      }
    `}
  </style>
</section>



      {/* CTA Section */}
      {/* CTA Section - Modern Blue & White Theme */}
<section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-800 to-blue-900">
  {/* Background floating shapes */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120%] h-[120%] bg-blue-700 rounded-full opacity-20 animate-pulse-slow mix-blend-lighten pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 animate-spin-slow mix-blend-lighten pointer-events-none"></div>

  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
      Ready to Write Your Success Story?
    </h2>
    <p className="text-blue-200 mb-12 text-lg md:text-xl animate-fade-in delay-200">
      Join thousands of professionals who have transformed their careers with Edvantage Learning
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-slow">
        Explore Programs
      </button>
      <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-slow">
        Schedule Consultation
      </button>
    </div>
  </div>

  <style>
    {`
      /* Slow pulse for background shape */
      @keyframes pulse-slow {
        0%, 100% { transform: scale(1) translate(-50%, 0); opacity: 0.2; }
        50% { transform: scale(1.2) translate(-50%, 0); opacity: 0.3; }
      }
      .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }

      /* Slow spin for shapes */
      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .animate-spin-slow { animation: spin-slow 60s linear infinite; }

      /* Fade in text */
      @keyframes fade-in {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fade-in 1s ease forwards; }
      .animate-fade-in.delay-200 { animation-delay: 0.2s; }

      /* Subtle bounce for buttons */
      @keyframes bounce-slow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
      }
      .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
    `}
  </style>
</section>

    </div>
  );
};

export default PlacementsSuccess;