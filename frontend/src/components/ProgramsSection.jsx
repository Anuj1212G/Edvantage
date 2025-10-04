import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronRight, GraduationCap, Smartphone, Briefcase, Users, Award, Clock } from 'lucide-react';

// === Program Data ===
const basePrograms = [
  { id: 'A', title: 'Integrated Field Development Planning', category: 'instructor-led', duration: '5 Day', format: 'Online', overview: '', outcomes: [], curriculum: [], benefits: [], targetAudience: [], price: '₹14,000', image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'B', title: 'Machine Learning using Python', category: 'e-learning', duration: '3 Months', format: 'Online', overview: '', outcomes: [], curriculum: [], benefits: [], targetAudience: [], price: '₹17,000', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'C', title: 'Practical Reservoir Simulation', category: 'diploma', duration: '2 Weeks', format: 'Online', overview: '', outcomes: [], curriculum: [], benefits: [], targetAudience: [], price: '₹12,000', image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'D', title: 'Python for Oil and Gas (Extended)', category: 'instructor-led', duration: '2 Months', format: 'Training', overview: '', outcomes: [], curriculum: [], benefits: [], targetAudience: [], price: '₹15,000', image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'E', title: 'HSE Leadership Program', category: 'corporate', duration: '3 months', format: 'Hybrid', overview: '', outcomes: [], curriculum: [], benefits: [], targetAudience: [], price: '₹10,500', image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'F', title: 'Geological Modeling with Petrel', category: 'diploma', duration: '1 Month', format: 'Workshop', overview: '', outcomes: [], curriculum: [], benefits: [], targetAudience: [], price: '₹20,000', image: 'https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const programsList = [...basePrograms, ...basePrograms, ...basePrograms, ...basePrograms]; // Duplicate for marquee loop


// --- Program Card Component ---
const ProgramCard = ({ program, isDark }) => {
  const bgColor = isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const titleColor = isDark ? 'text-teal-400' : 'text-blue-600';
  const durationText = program.duration.toUpperCase();

  return (
    <div className={`relative ${bgColor} p-4 shadow-xl rounded-xl flex flex-col mx-auto w-full flex-shrink-0`} style={{ height: '280px' }}>
      {/* Price + Register Button */}
      <div className={`${isDark ? 'bg-black/70' : 'bg-gray-100/80'} absolute top-0 right-0 p-2 rounded-bl-xl flex items-center space-x-2`}>
        <span className={`${isDark ? 'text-teal-400' : 'text-blue-600'} font-bold text-sm`}>{program.price}</span>
        <button className={`flex items-center text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Register Now <ChevronRight className="h-3 w-3 ml-1" />
        </button>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 relative h-40 w-full overflow-hidden rounded-md mb-3">
        <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <div className="flex-shrink-0 mt-auto pt-2">
        <p className={`text-xs font-semibold ${titleColor} mb-1`}>{durationText} Online Training</p>
        <h4 className="text-lg font-bold leading-snug">{program.title}</h4>
      </div>
    </div>
  );
};


// --- Marquee Column Component ---
const MarqueeColumn = ({ programs, direction, isDark, speed }) => {
  const columnRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let listHeight = 0;
    const scrollSpeed = speed;

    const animateScroll = () => {
      if (columnRef.current) {
        const totalHeight = columnRef.current.offsetHeight;
        listHeight = totalHeight / 4; // Loop point

        setOffset(prevOffset => {
          let newOffset = prevOffset + (direction === 'up' ? -scrollSpeed : scrollSpeed);
          if (direction === 'up') {
            if (newOffset < -listHeight) newOffset = 0;
          } else {
            if (newOffset > 0) newOffset = -listHeight;
          }
          return newOffset;
        });
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    if (direction === 'down' && columnRef.current) {
      setOffset(-columnRef.current.offsetHeight / 4);
    }

    animateScroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed]);

  return (
    <div className="flex flex-col space-y-8 flex-shrink-0 h-[400%]">
      <div
        ref={columnRef}
        className="flex flex-col space-y-8"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {programs.map((program, index) => (
          <ProgramCard key={`${program.id}-${index}`} program={program} isDark={isDark} />
        ))}
      </div>
    </div>
  );
};


// === Main Programs Section ===
const ProgramsSection = () => {
  const column1Programs = useMemo(() => programsList.filter((_, i) => i % 2 === 0), []);
  const column2Programs = useMemo(() => programsList.filter((_, i) => i % 2 !== 0), []);

  const categories = [
    { name: 'Diploma Courses', icon: GraduationCap, description: 'Long-term, comprehensive certification programs.' },
    { name: 'Placement Booster Program', icon: Users, description: 'Programs focused on career readiness and placement.' },
    { name: 'E-Learning', icon: Smartphone, description: 'Flexible, self-paced online courses.' },
    { name: 'Employability Development Program', icon: Briefcase, description: 'Skill enhancement for immediate job market readiness.' }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Header & Marquee --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* LEFT: Header */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Dynamic Program Showcase
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Witness our diverse range of certifications and training formats, constantly scrolling to bring you the latest opportunities in the energy sector.
            </p>

            <a
              href="/programs"
              className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Explore All Training Programs
              <ChevronRight className="h-5 w-5 ml-2" />
            </a>
          </div>

          {/* RIGHT: Marquee */}
          <div className="relative h-[650px] w-full flex justify-center">
            <div className="absolute inset-0 flex justify-center space-x-8 overflow-hidden">
              {/* Column 1 */}
              <div className="w-1/2 max-w-[300px] overflow-hidden">
                <MarqueeColumn
                  programs={column1Programs}
                  direction="up"
                  isDark={false}
                  speed={0.4}
                />
              </div>

              {/* Column 2 */}
              <div className="w-1/2 max-w-[300px] mt-16 lg:mt-32 overflow-hidden">
                <MarqueeColumn
                  programs={column2Programs}
                  direction="down"
                  isDark={true}
                  speed={0.4}
                />
              </div>
            </div>

            {/* Gradient Fades */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* --- Categories Section --- */}
        <div className="mt-20 pt-10 border-t border-gray-300">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training Formats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <category.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
