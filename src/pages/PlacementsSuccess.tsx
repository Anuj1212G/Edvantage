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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover how our graduates have transformed their careers and achieved remarkable success
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-700 font-semibold">Job Placement Rate</div>
              <div className="text-sm text-gray-500 mt-1">Within 6 months</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
              <div className="text-gray-700 font-semibold">Average Salary Increase</div>
              <div className="text-sm text-gray-500 mt-1">Post-graduation</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="bg-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-700 font-semibold">Hiring Partners</div>
              <div className="text-sm text-gray-500 mt-1">Global companies</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Story</h2>
            <p className="text-xl text-gray-600">Real transformations from our graduates</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src={currentStory.image} 
                    alt={currentStory.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{currentStory.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">{currentStory.salaryIncrease} salary increase</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "{currentStory.quote}"
                    </blockquote>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{currentStory.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{currentStory.position}</p>
                    <p className="text-gray-600 mb-4">{currentStory.company}</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Program:</span>
                          <div className="font-semibold">{currentStory.program}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Previous Role:</span>
                          <div className="font-semibold">{currentStory.beforeRole}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Story Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStoryIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600">Join thousands of professionals who have advanced their careers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.slice(0, 6).map((story, index) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    +{story.salaryIncrease}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{story.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{story.company}</p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {story.quote.substring(0, 120)}...
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
      </section>

      {/* Hiring Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Partners</h2>
            <p className="text-xl text-gray-600">Leading companies that trust our graduates</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {hiringPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of professionals who have transformed their careers with Edvantage Learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Explore Programs
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementsSuccess;