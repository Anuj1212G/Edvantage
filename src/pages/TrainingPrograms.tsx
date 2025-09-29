import React, { useState } from 'react';
import { Clock, Users, Award, BookOpen, ChevronDown, ChevronUp, Star, Play } from 'lucide-react';
import type { Program } from '../types';

const TrainingPrograms: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCurriculum, setExpandedCurriculum] = useState<string | null>(null);

  const programs: Program[] = [
    {
      id: '1',
      title: 'Petroleum Engineering Excellence',
      category: 'diploma',
      duration: '6 months',
      format: 'Hybrid',
      overview: 'Comprehensive program covering reservoir engineering, drilling, and production optimization with hands-on industry projects.',
      outcomes: [
        'Advanced technical skills in reservoir engineering',
        'Industry-recognized certification',
        'Career advancement opportunities',
        'Global networking connections',
        'Practical problem-solving abilities'
      ],
      curriculum: [
        {
          module: 'Reservoir Engineering Fundamentals',
          topics: [
            'Reservoir fluid properties and behavior',
            'Well testing and analysis techniques',
            'Enhanced oil recovery methods',
            'Reservoir simulation software',
            'Economic evaluation of projects'
          ]
        },
        {
          module: 'Drilling Operations & Technology',
          topics: [
            'Drilling fluids and mud systems',
            'Wellbore stability and pressure management',
            'Advanced completion techniques',
            'Horizontal and directional drilling',
            'Risk assessment and safety protocols'
          ]
        },
        {
          module: 'Production Optimization',
          topics: [
            'Artificial lift systems',
            'Production facilities design',
            'Flow assurance and multiphase flow',
            'Well performance analysis',
            'Field development planning'
          ]
        }
      ],
      benefits: [
        'Industry recognition by major oil companies',
        'Hands-on experience with real projects',
        'Global networking opportunities',
        'Career placement assistance',
        'Continuous learning support'
      ],
      targetAudience: [
        'Petroleum engineers',
        'Technical professionals in O&G',
        'Fresh engineering graduates',
        'Career changers to energy sector'
      ],
      price: '$2,999',
      image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      level: 'Advanced',
      language: 'English',
      certificate: 'Yes',
      prerequisites: 'Engineering degree or equivalent experience'
    },
    {
      id: '2',
      title: 'HSE Leadership Program',
      category: 'instructor-led',
      duration: '3 months',
      format: 'Online + Workshops',
      overview: 'Advanced health, safety, and environmental management program designed for oil & gas operations leadership.',
      outcomes: [
        'HSE leadership and management skills',
        'Advanced risk assessment expertise',
        'Regulatory compliance mastery',
        'Safety culture development'
      ],
      curriculum: [
        {
          module: 'HSE Leadership & Culture',
          topics: [
            'Safety leadership principles',
            'Building safety culture',
            'Employee engagement strategies',
            'Performance measurement systems'
          ]
        },
        {
          module: 'Risk Management & Assessment',
          topics: [
            'Hazard identification techniques',
            'Quantitative risk assessment',
            'HAZOP and HAZID methodologies',
            'Risk control measures'
          ]
        }
      ],
      benefits: [
        'Career growth in HSE management',
        'Industry certification recognition',
        'Global regulatory knowledge',
        'Leadership development'
      ],
      targetAudience: [
        'HSE managers and supervisors',
        'Operations managers',
        'Safety professionals'
      ],
      price: '$1,899',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Intermediate',
      language: 'English',
      certificate: 'Yes',
      prerequisites: 'HSE experience or relevant qualification'
    },
    {
      id: '3',
      title: 'Digital Oil Field Technologies',
      category: 'e-learning',
      duration: '4 months',
      format: 'Self-paced Online',
      overview: 'Cutting-edge technologies shaping the future of oil and gas operations, including AI, IoT, and digital transformation.',
      outcomes: [
        'Digital transformation expertise',
        'Technology implementation skills',
        'Industry 4.0 knowledge',
        'Data analytics proficiency'
      ],
      curriculum: [
        {
          module: 'Digital Transformation Fundamentals',
          topics: [
            'Digital transformation strategy',
            'Technology adoption frameworks',
            'Change management in digital projects',
            'ROI measurement and KPIs'
          ]
        },
        {
          module: 'IoT and Smart Field Technologies',
          topics: [
            'Sensor networks and deployment',
            'Real-time data acquisition',
            'Predictive maintenance systems',
            'Remote monitoring solutions'
          ]
        }
      ],
      benefits: [
        'Future-ready technology skills',
        'Innovation and digital leadership',
        'Competitive career advantage',
        'Technology vendor connections'
      ],
      targetAudience: [
        'Technical managers',
        'IT professionals in energy',
        'Operations engineers'
      ],
      price: '$1,599',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      level: 'Intermediate',
      language: 'English',
      certificate: 'Yes',
      prerequisites: 'Technical background in engineering or IT'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs', count: programs.length },
    { id: 'diploma', name: 'Diploma Programs', count: programs.filter(p => p.category === 'diploma').length },
    { id: 'instructor-led', name: 'Instructor-Led', count: programs.filter(p => p.category === 'instructor-led').length },
    { id: 'e-learning', name: 'E-Learning', count: programs.filter(p => p.category === 'e-learning').length },
    { id: 'corporate', name: 'Corporate Training', count: programs.filter(p => p.category === 'corporate').length }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const toggleCurriculum = (programId: string) => {
    setExpandedCurriculum(expandedCurriculum === programId ? null : programId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Training Programs</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive training solutions designed by industry experts to advance your career in oil and gas
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="relative lg:col-span-1">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {program.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    {program.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>Featured</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="mb-6">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                        <p className="text-gray-600 text-lg">{program.overview}</p>
                      </div>

                      {/* Program Details */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-gray-500">Duration</div>
                            <div className="font-semibold">{program.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-gray-500">Format</div>
                            <div className="font-semibold">{program.format}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-gray-500">Level</div>
                            <div className="font-semibold">{program.level}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-gray-500">Certificate</div>
                            <div className="font-semibold">{program.certificate}</div>
                          </div>
                        </div>
                      </div>

                      {/* Key Outcomes */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Learning Outcomes</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {program.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Curriculum Accordion */}
                      <div className="mb-6">
                        <button
                          onClick={() => toggleCurriculum(program.id)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <h3 className="text-lg font-semibold text-gray-900">Course Curriculum</h3>
                          {expandedCurriculum === program.id ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        
                        {expandedCurriculum === program.id && (
                          <div className="mt-4 space-y-4">
                            {program.curriculum.map((module, idx) => (
                              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                <h4 className="font-semibold text-gray-900 mb-2">{module.module}</h4>
                                <ul className="space-y-1">
                                  {module.topics.map((topic, topicIdx) => (
                                    <li key={topicIdx} className="text-sm text-gray-600 flex items-center space-x-2">
                                      <Play className="h-3 w-3 text-blue-500" />
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Target Audience */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Who Should Enroll</h3>
                        <div className="flex flex-wrap gap-2">
                          {program.targetAudience.map((audience, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-6 border-t border-gray-200">
                        <div className="mb-4 sm:mb-0">
                          <div className="text-3xl font-bold text-orange-600">{program.price}</div>
                          <div className="text-sm text-gray-500">One-time payment</div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            Enroll Now
                          </button>
                          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                            Request Info
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPrograms;