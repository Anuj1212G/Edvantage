// import React from 'react';
// import { ArrowRight, Play, Award, Users, Globe, UserPlus } from 'lucide-react';

// interface HeroSectionProps {
//   onSignupClick: () => void;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ onSignupClick }) => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background - Orange changed to Teal-Green */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
//         <div className="absolute inset-0 bg-black/20"></div>
//         {/* Animated Oil Rig Silhouettes */}
//         <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
//           <div className="absolute bottom-0 left-10 w-8 h-24 bg-white transform rotate-12 animate-pulse"></div>
//           <div className="absolute bottom-0 left-20 w-6 h-20 bg-white transform -rotate-6 animate-pulse delay-300"></div>
//           <div className="absolute bottom-0 right-20 w-10 h-28 bg-white transform rotate-3 animate-pulse delay-700"></div>
//         </div>
        
//         {/* Floating Particles */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${3 + Math.random() * 4}s`
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="max-w-4xl mx-auto">
//           {/* New Main Headline */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
//             Empowering Oil & Gas Professionals with{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
//               World-Class Training, Consultancy & Industry Connections.
//             </span>
//           </h1>

//           {/* New Subtext */}
//           <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
//             Transform your career or workforce with cutting-edge programs, global industry partnerships, and innovative digital learning solutions.
//           </p>

//           {/* Key Stats - Orange icons changed to Teal */}
//           <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-400">
//             <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
//               <Users className="h-5 w-5 text-teal-400" />
//               <span className="text-white font-semibold">5000+ Trained</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
//               <Award className="h-5 w-5 text-teal-400" />
//               <span className="text-white font-semibold">Industry Certified</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
//               <Globe className="h-5 w-5 text-teal-400" />
//               <span className="text-white font-semibold">Global Reach</span>
//             </div>
//           </div>

//           {/* CTA Buttons - Orange gradients changed to Teal-Green */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
//             <button 
//               onClick={onSignupClick}
//               className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
//             >
//               <UserPlus className="h-5 w-5" />
//               <span>Tailor Your Training Program & Request a Quote</span>
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </button>
            
//             <button className="group flex items-center space-x-2 text-white hover:text-teal-400 transition-colors">
//               <div className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
//                 <Play className="h-6 w-6" />
//               </div>
//               <span className="font-semibold">Watch Our Story</span>
//             </button>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
//             <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce mx-auto"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





// HeroSection.tsx (or similar file name)

import React from 'react';
import { ArrowRight, Play, Award, Users, Globe, UserPlus } from 'lucide-react';

interface HeroSectionProps {
onSignupClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSignupClick }) => { return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔹 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
          Empowering Oil & Gas Professionals with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
              World-Class Training, Consultancy & Industry Connections.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Transform your career or workforce with cutting-edge programs, global industry partnerships, and innovative digital learning solutions.
          </p>

{/*           Key Stats
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-400">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="h-5 w-5 text-teal-400" />
              <span className="text-white font-semibold">5000+ Trained</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Award className="h-5 w-5 text-teal-400" />
              <span className="text-white font-semibold">Industry Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Globe className="h-5 w-5 text-teal-400" />
              <span className="text-white font-semibold">Global Reach</span>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button 
              onClick={onSignupClick}
              className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <UserPlus className="h-5 w-5" />
              <span>Tailor Your Training Program & Request a Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
    </section>
  );
};

export default HeroSection;
