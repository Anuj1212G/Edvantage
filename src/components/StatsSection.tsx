import React from 'react';
import { Users, Building, Globe, Award, TrendingUp, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Professionals Trained',
      description: 'Skilled experts ready for industry challenges'
    },
    {
      icon: Building,
      number: '20+',
      label: 'Corporate Partners',
      description: 'Leading oil & gas companies worldwide'
    },
    {
      icon: Globe,
      number: '10+',
      label: 'Countries Served',
      description: 'Global reach and local expertise'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Job Placement Rate',
      description: 'Successful career transitions'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Salary Increase',
      description: 'Average post-training growth'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Student Rating',
      description: 'Exceptional learning experience'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Edvantage in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our track record speaks for itself - delivering excellence and driving success across the oil & gas industry
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-blue-100 mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-blue-200 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-6 border border-orange-300/30">
            <h3 className="text-2xl font-bold text-white mb-3">Industry Recognition</h3>
            <p className="text-blue-100">Recognized by major oil & gas companies for excellence in professional training and development.</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-300/30">
            <h3 className="text-2xl font-bold text-white mb-3">Global Impact</h3>
            <p className="text-blue-100">Training professionals across continents, contributing to safer and more efficient operations worldwide.</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-300/30">
            <h3 className="text-2xl font-bold text-white mb-3">Future Ready</h3>
            <p className="text-blue-100">Preparing the next generation of oil & gas professionals with cutting-edge skills and knowledge.</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;