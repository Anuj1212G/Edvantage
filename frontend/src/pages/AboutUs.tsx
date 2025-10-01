import React from 'react';
// Using only reliable, common Lucide icons. Replaced University/GraduationCap with BookOpen.
import { Award, Users, Globe, Target, Eye, Heart, Linkedin, Clock, BookOpen } from 'lucide-react'; 

const AboutUs: React.FC = () => {
  // --- INTEGRATED CONTENT FROM DOCUMENT ---
  const ourStoryText = (
    <>
      <p>
        In 2020, <span className="font-semibold text-teal-600">Edvantage Learning</span> was born from a simple yet powerful idea — to **bridge the gap between academia and industry** in the energy sector.
      </p>
      <p>
        Our founder saw a challenge that many professionals and students faced: while academic programs offered theoretical knowledge, the fast-paced energy industry demanded **practical skills and cutting-edge expertise**. This disconnect inspired us to create a platform where learning meets innovation, and education translates into real-world impact.
      </p>
      <p>
        What started as a small initiative has grown into a **global movement over just five years**. Today, we take pride in having trained over 5,000+ professionals, helping them advance their careers and drive change in their organizations. Along the way, we’ve partnered with **20+ leading universities**, designing programs that prepare students and professionals to thrive in an industry shaped by digital transformation and sustainability.
      </p>
      <p>
        Our journey is just beginning. With every course we deliver and every career we transform, we move closer to our vision — **a future where knowledge empowers progress and innovation fuels growth.**
      </p>
    </>
  );

  const missionStatement = 'To empower individuals and organizations in the oil & gas industry with innovative training, consultancy, and technology-driven solutions, fostering sustainable energy growth.';
  
  const visionStatement = 'To be the world’s most trusted partner for oil & gas education and consulting, shaping the workforce of tomorrow.';
  
  const achievements = [
    { number: '5+ Years', label: 'of Excellence', icon: Clock },
    { number: '5000+', label: 'Professionals Trained Globally', icon: Users },
    { number: '10+', label: 'University Collaborations', icon: BookOpen }, // REPLACED: Using BookOpen
    { number: '20+', label: 'Corporate Partners', icon: Target },
    { number: '10+', label: 'Presence in Countries', icon: Globe },
  ];
  // ----------------------------------------

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 relative inline-block">
            About Edvantage Learning
            {/* Sliding light effect - uses global CSS class */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-60 transform -skew-x-12 animate-slide-light"></span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            Empowering the next generation of oil & gas professionals through world-class education and industry connections
          </p>
        </div>

        {/* Optional animated background blobs - Orange changed to Teal */}
        <span className="absolute top-0 left-10 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></span>
        <span className="absolute top-20 right-20 w-72 h-72 bg-teal-400/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></span>
        <span className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></span>
      </section>

      {/* Our Story - Integrated Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {ourStoryText}
              </div>
            </div>
            <div className="relative animate-slide-right">
              <img 
                src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Oil and gas facility"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Integrated Content & Teal Color */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in">
              <div className="flex items-center mb-6">
                {/* Blue changed to Teal accent */}
                <div className="bg-teal-600 p-3 rounded-full mr-4 animate-pulse">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {missionStatement}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in-delay">
              <div className="flex items-center mb-6">
                {/* Blue changed to Teal accent */}
                <div className="bg-teal-500 p-3 rounded-full mr-4 animate-bounce">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {visionStatement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership & Advisory Board</h2>
            <p className="text-xl text-gray-600">Short bios of founder, CEO and leaders. Highlight credentials and expertise.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {leadership.map((leader, index) => (
              <div key={index} className="perspective cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden tilt-card transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-y-1">
                  <div className="relative">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-64 object-cover transform transition-transform duration-700 tilt-img"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 hover:from-black/50 rounded-2xl"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    {/* Blue changed to Teal */}
                    <p className="text-teal-600 font-semibold mb-2">{leader.position}</p>
                    <p className="text-sm text-gray-500 mb-4">{leader.experience}</p>
                    <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>

                    <div className="space-y-2">
                      {leader.credentials.map((credential, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          {/* Blue changed to Teal */}
                          <Award className="h-4 w-4 text-teal-500" />
                          <span className="text-sm text-gray-600">{credential}</span>
                        </div>
                      ))}
                    </div>

                    {/* Blue changed to Teal */}
                    <button className="mt-4 text-teal-600 hover:text-teal-700 flex items-center space-x-2 transition-transform hover:scale-105">
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm">Connect</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board (Using Existing Component, just changed header) */}
      <section className="py-20 bg-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600">Industry veterans guiding our strategic direction</p>
          </div>

          {/* 3D rotating container */}
          <div className="perspective w-full h-96 relative">
            <div className="w-full h-full transform-style-3d animate-rotate-advisory flex justify-center items-center">
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="absolute w-64 bg-white rounded-xl p-6 shadow-lg text-center transition-transform duration-700 hover:scale-110 advisory-card"
                  style={{
                    transform: `rotateY(${index * 120}deg) translateZ(300px)`,
                  }}
                >
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 shadow-md"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                  {/* Blue changed to Teal */}
                  <p className="text-teal-600 font-semibold mb-1">{advisor.position}</p>
                  <p className="text-sm text-gray-500">{advisor.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Rotated 3D Carousel - Integrated Content & Teal Color */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">5+ Years of Excellence, 5000+ Professionals Trained Globally, and more.</p>
          </div>

          <div className="relative w-full h-80 perspective">
            <div className="absolute inset-0 transform-style-3d animate-rotate-carousel flex justify-center items-center">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="absolute w-60 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center glow-card tilt-card transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                  style={{
                    transform: `rotateY(${index * (360 / achievements.length)}deg) translateZ(300px)`,
                  }}
                >
                  {/* Icon remains blue/secondary, as Teal is main accent */}
                  <achievement.icon className="h-14 w-14 text-blue-400 mx-auto mb-4 animate-icon-bounce" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-gradient-text">{achievement.number}</div>
                  <div className="text-blue-100 text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Blue changed to Teal */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { title: 'Excellence', icon: Award, text: 'We strive for the highest standards in everything we deliver, from curriculum design to student support.' },
              { title: 'Integrity', icon: Heart, text: 'We operate with transparency, honesty, and ethical practices in all our interactions and partnerships.' },
              { title: 'Innovation', icon: Users, text: 'We continuously evolve our methods and technologies to provide cutting-edge learning experiences.' },
            ].map((value, index) => (
              <div key={index} className="text-center perspective hover:scale-105 transition-transform duration-500 cursor-pointer">
                {/* Blue changed to Teal accent */}
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg tilt-card animate-float">
                  <value.icon className="h-10 w-10 text-teal-600 animate-bounce-slow" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;