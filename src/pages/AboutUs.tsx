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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 relative inline-block">
      About Edvantage Learning
      {/* Sliding light effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-60 transform -skew-x-12 animate-slide-light"></span>
    </h1>
    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
      Empowering the next generation of oil & gas professionals through world-class education and industry connections
    </p>
  </div>

  {/* Optional animated background blobs */}
  <span className="absolute top-0 left-10 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></span>
  <span className="absolute top-20 right-20 w-72 h-72 bg-orange-400/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></span>
  <span className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></span>

  <style>
  {`
    @keyframes blob {
      0%,100% { transform: translate(0px,0px) scale(1); }
      33% { transform: translate(30px,-50px) scale(1.1); }
      66% { transform: translate(-20px,20px) scale(0.9); }
    }

    @keyframes slide-light {
      0% { transform: translateX(-100%) skewX(-12deg); }
      100% { transform: translateX(100%) skewX(-12deg); }
    }

    @keyframes fadeIn {
      0% { opacity:0; transform: translateY(20px); }
      100% { opacity:1; transform: translateY(0); }
    }

    .animate-blob {
      animation: blob 2s infinite; /* very fast blob movement */
    }
    .animation-delay-2000 { animation-delay: 0.3s; }
    .animation-delay-4000 { animation-delay: 0.6s; }
    .animate-slide-light {
      animation: slide-light 0.8s infinite; /* lightning-fast sliding light */
    }
    .animate-fade-in-delay {
      animation: fadeIn 0.6s ease-in-out forwards; /* quick fade */
      opacity: 0;
      animation-delay: 0.2s;
    }
  `}
</style>


</section>


      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4 animate-pulse">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in-delay">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-3 rounded-full mr-4 animate-bounce">
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
      {/* Leadership Team */}
<section className="py-20 bg-gray-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
      <p className="text-xl text-gray-600">Meet the industry experts leading our mission</p>
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
              <p className="text-blue-600 font-semibold mb-2">{leader.position}</p>
              <p className="text-sm text-gray-500 mb-4">{leader.experience}</p>
              <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>

              <div className="space-y-2">
                {leader.credentials.map((credential, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">{credential}</span>
                  </div>
                ))}
              </div>

              <button className="mt-4 text-blue-600 hover:text-blue-700 flex items-center space-x-2 transition-transform hover:scale-105">
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">Connect</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style>
    {`
      /* 3D tilt perspective */
      .perspective {
        perspective: 1000px;
      }

      .tilt-card {
        transform-style: preserve-3d;
      }

      .tilt-card:hover {
        transform: rotateY(4deg) rotateX(2deg);
      }

      .tilt-img {
        transition: transform 0.7s ease;
      }

      .tilt-card:hover .tilt-img {
        transform: scale(1.1) translateY(-5px);
      }

      /* Floating animation for images */
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }

      .tilt-img {
        animation: float 6s ease-in-out infinite;
      }
    `}
  </style>
</section>

      

      {/* Advisory Board */}
{/* Advisory Board */}
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
            <p className="text-blue-600 font-semibold mb-1">{advisor.position}</p>
            <p className="text-sm text-gray-500">{advisor.company}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Inline styles for 3D rotation */}
  <style>
    {`
      .perspective {
        perspective: 1000px;
      }

      .transform-style-3d {
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
      }

      .advisory-card {
        backface-visibility: hidden; /* Hides the reversed side */
      }

      @keyframes rotate-advisory {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(-360deg); }
}

.animate-rotate-advisory {
  animation: rotate-advisory 10s linear infinite; /* slower rotation */
  transform-style: preserve-3d;
}

    `}
  </style>
</section>




      {/* Achievements */}
     {/* Achievements - Rotated 3D Carousel */}
<section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
      <p className="text-xl text-blue-100">Numbers that reflect our commitment to excellence</p>
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
            <achievement.icon className="h-14 w-14 text-blue-400 mx-auto mb-4 animate-icon-bounce" />
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-gradient-text">{achievement.number}</div>
            <div className="text-blue-100 text-lg">{achievement.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style>
    {`
      .perspective {
        perspective: 1200px;
      }

      .transform-style-3d {
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
      }

      .tilt-card {
        transform-style: preserve-3d;
        transition: transform 0.5s ease, box-shadow 0.5s ease;
      }

      .tilt-card:hover {
        transform: rotateX(6deg) rotateY(-6deg) scale(1.05);
        box-shadow: 0 20px 40px rgba(0, 150, 255, 0.4);
      }

      /* Floating animation */
      @keyframes float {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      .animate-float {
        animation: float 3.5s ease-in-out infinite;
      }

      /* Subtle bounce for icons */
      @keyframes icon-bounce {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .animate-icon-bounce {
        animation: icon-bounce 2s ease-in-out infinite;
      }

      /* Gradient text */
      @keyframes gradient-text {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-text {
        background: linear-gradient(90deg, #60A5FA, #3B82F6, #38BDF8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: gradient-text 5s ease infinite;
        text-shadow: 0 0 4px rgba(56, 189, 248, 0.5);
      }

      .glow-card {
        box-shadow: 0 0 12px rgba(56, 189, 248, 0.3), 0 0 24px rgba(59, 130, 246, 0.3);
        transition: box-shadow 0.3s ease;
      }

      /* Carousel rotation */
      @keyframes rotate-carousel {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(-360deg); }
      }
      .animate-rotate-carousel {
        animation: rotate-carousel 15s linear infinite;
      }
    `}
  </style>
</section>





      {/* Values */}
     {/* Values */}
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
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg tilt-card animate-float">
            <value.icon className="h-10 w-10 text-blue-600 animate-bounce-slow" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
          <p className="text-gray-600 max-w-xs mx-auto">{value.text}</p>
        </div>
      ))}
    </div>
  </div>

  <style>
    {`
      /* 3D perspective tilt */
      .perspective {
        perspective: 1000px;
      }
      .tilt-card {
        transform-style: preserve-3d;
        transition: transform 0.5s ease, box-shadow 0.5s ease;
      }
      .tilt-card:hover {
        transform: rotateX(5deg) rotateY(-5deg) scale(1.1);
        box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
      }

      /* Floating icons */
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      /* Slow bounce for icons */
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
      .animate-bounce-slow {
        animation: bounce-slow 2.5s ease-in-out infinite;
      }

      /* Subtle shadow effect */
      .shadow-lg {
        box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
      }
    `}
  </style>
</section>

    </div>
  );
};

export default AboutUs;
