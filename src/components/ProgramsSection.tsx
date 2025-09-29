import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Award, BookOpen } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  category: 'diploma' | 'instructor-led' | 'e-learning' | 'corporate';
  duration: string;
  format: string;
  overview: string;
  outcomes: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  benefits: string[];
  targetAudience: string[];
  price?: string;
  image: string;
}

const ProgramsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const flagshipPrograms: Program[] = [
    {
      id: '1',
      title: 'Petroleum Engineering Excellence',
      category: 'diploma',
      duration: '6 months',
      format: 'Hybrid',
      overview: 'Comprehensive program covering reservoir engineering, drilling, and production optimization.',
      outcomes: ['Advanced technical skills', 'Industry certification', 'Career advancement'],
      curriculum: [
        {
          module: 'Reservoir Engineering',
          topics: ['Fluid properties', 'Well testing', 'Enhanced oil recovery']
        },
        {
          module: 'Drilling Operations',
          topics: ['Drilling fluids', 'Wellbore stability', 'Completion techniques']
        }
      ],
      benefits: ['Industry recognition', 'Hands-on experience', 'Global networking'],
      targetAudience: ['Engineers', 'Technical professionals', 'Fresh graduates'],
      price: '$2,999',
      image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'HSE Leadership Program',
      category: 'instructor-led',
      duration: '3 months',
      format: 'Online + Workshops',
      overview: 'Advanced health, safety, and environmental management for oil & gas operations.',
      outcomes: ['HSE leadership skills', 'Risk assessment expertise', 'Compliance management'],
      curriculum: [
        {
          module: 'Risk Management',
          topics: ['Hazard identification', 'Risk assessment', 'Control measures']
        }
      ],
      benefits: ['Career growth', 'Industry certification', 'Global recognition'],
      targetAudience: ['HSE managers', 'Operations supervisors', 'Safety professionals'],
      price: '$1,899',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Digital Oil Field Technologies',
      category: 'e-learning',
      duration: '4 months',
      format: 'Self-paced Online',
      overview: 'Cutting-edge technologies shaping the future of oil and gas operations.',
      outcomes: ['Digital transformation skills', 'Technology implementation', 'Industry 4.0 expertise'],
      curriculum: [
        {
          module: 'IoT in Oil & Gas',
          topics: ['Sensor networks', 'Data analytics', 'Predictive maintenance']
        }
      ],
      benefits: ['Future-ready skills', 'Technology expertise', 'Innovation leadership'],
      targetAudience: ['Technical managers', 'IT professionals', 'Operations engineers'],
      price: '$1,599',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flagshipPrograms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flagshipPrograms.length) % flagshipPrograms.length);
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Flagship Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed by industry experts to advance your career in oil and gas
          </p>
        </div>

        {/* Interactive Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {flagshipPrograms.map((program, index) => (
                <div key={program.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-64 md:h-auto">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {program.category.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                        <p className="text-gray-600 mb-6">{program.overview}</p>

                        {/* Program Details */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">{program.format}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">Expert Instructors</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">Certified</span>
                          </div>
                        </div>

                        {/* Key Outcomes */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Outcomes:</h4>
                          <ul className="space-y-2">
                            {program.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                            Enroll Now
                          </button>
                          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                            Learn More
                          </button>
                        </div>

                        {/* Price */}
                        <div className="mt-4 text-right">
                          <span className="text-2xl font-bold text-orange-600">{program.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {flagshipPrograms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Program Categories */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { name: 'Diploma Programs', icon: Award, description: 'Comprehensive certification programs' },
            { name: 'Instructor-Led Training', icon: Users, description: 'Expert-guided learning sessions' },
            { name: 'E-Learning', icon: BookOpen, description: 'Flexible online courses' },
            { name: 'Corporate Training', icon: Users, description: 'Customized enterprise solutions' }
          ].map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <category.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Explore Programs →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;