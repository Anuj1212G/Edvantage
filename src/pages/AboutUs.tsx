import React from 'react';
import { Award, Users, Globe, Target, Eye, Heart, Linkedin } from 'lucide-react';

const AboutUs: React.FC = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Mitchell',
      position: 'CEO & Founder',
      experience: '25+ years in Oil & Gas',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former VP of Engineering at ExxonMobil with extensive experience in reservoir engineering and field development.',
      credentials: ['PhD Petroleum Engineering', 'SPE Distinguished Lecturer', 'Industry Pioneer Award']
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Technology Officer',
      experience: '20+ years in Digital Transformation',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Led digital transformation initiatives at Shell and Chevron, specializing in IoT and AI applications.',
      credentials: ['MS Computer Science', 'Digital Innovation Leader', 'Technology Excellence Award']
    },
    {
      name: 'Dr. Ahmed Al-Rashid',
      position: 'Head of Training',
      experience: '30+ years in Education',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Dean of Petroleum Engineering at leading universities, expert in curriculum development.',
      credentials: ['PhD Education', 'Academic Excellence Award', 'International Educator']
    }
  ];

  const advisors = [
    {
      name: 'Prof. Elena Vasquez',
      position: 'Senior Industry Advisor',
      company: 'Former BP Executive',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Thompson',
      position: 'HSE Consultant',
      company: 'Safety Excellence Expert',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Raj Patel',
      position: 'Technology Advisor',
      company: 'Digital Innovation Specialist',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const achievements = [
    { number: '5000+', label: 'Professionals Trained', icon: Users },
    { number: '20+', label: 'Corporate Partners', icon: Award },
    { number: '10+', label: 'Countries Served', icon: Globe },
    { number: '95%', label: 'Job Placement Rate', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Edvantage Learning</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering the next generation of oil & gas professionals through world-class education and industry connections
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2015 by industry veterans with over 100 years of combined experience, 
                  Edvantage Learning emerged from a simple observation: the oil & gas industry needed 
                  a bridge between academic knowledge and practical expertise.
                </p>
                <p>
                  What started as a small training initiative in Houston has grown into a global 
                  education platform, serving professionals across 10+ countries and partnering 
                  with leading energy companies worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, from traditional classroom 
                  training to cutting-edge digital learning platforms, always staying ahead of 
                  industry trends and technological advancements.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Oil and gas facility"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To bridge the skills gap in the oil & gas industry by providing world-class training, 
                consultancy, and career development services that empower professionals to excel in 
                their careers while contributing to safer, more efficient energy operations globally.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in oil & gas education, recognized for innovation, excellence, 
                and impact. We envision a future where every energy professional has access to the 
                knowledge and skills needed to drive sustainable industry growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the industry experts leading our mission</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{leader.position}</p>
                  <p className="text-sm text-gray-500 mb-4">{leader.experience}</p>
                  <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                  
                  <div className="space-y-2">
                    {leader.credentials.map((credential, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-orange-500" />
                        <span className="text-sm text-gray-600">{credential}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-4 text-blue-600 hover:text-blue-700 flex items-center space-x-2">
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">Connect</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600">Industry veterans guiding our strategic direction</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <img 
                  src={advisor.image} 
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{advisor.position}</p>
                <p className="text-sm text-gray-500">{advisor.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <achievement.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-blue-100">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in everything we deliver, from curriculum design to student support.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">We operate with transparency, honesty, and ethical practices in all our interactions and partnerships.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously evolve our methods and technologies to provide cutting-edge learning experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;