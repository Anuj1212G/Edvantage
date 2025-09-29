import React from 'react';
import { ArrowRight, Play, Award, Users, Globe, UserPlus } from 'lucide-react';

interface HeroSectionProps {
  onSignupClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSignupClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Oil Rig Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <div className="absolute bottom-0 left-10 w-8 h-24 bg-white transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-0 left-20 w-6 h-20 bg-white transform -rotate-6 animate-pulse delay-300"></div>
          <div className="absolute bottom-0 right-20 w-10 h-28 bg-white transform rotate-3 animate-pulse delay-700"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Empowering Oil & Gas Professionals with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              World-Class Training
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Consultancy & Industry Connections that Drive Your Career Forward
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-400">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="h-5 w-5 text-orange-400" />
              <span className="text-white font-semibold">5000+ Trained</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Award className="h-5 w-5 text-orange-400" />
              <span className="text-white font-semibold">Industry Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Globe className="h-5 w-5 text-orange-400" />
              <span className="text-white font-semibold">Global Reach</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button 
              onClick={onSignupClick}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <UserPlus className="h-5 w-5" />
              <span>Start Your Learning Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center space-x-2 text-white hover:text-orange-400 transition-colors">
              <div className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
                <Play className="h-6 w-6" />
              </div>
              <span className="font-semibold">Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;