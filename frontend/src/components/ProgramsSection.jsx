import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

// --- Program Data ---
const programs = {
  upcoming: [
    { id: 1, title: 'Webinar on Oil & Gas Trends', duration: '2 Hours · Online', tag: '', image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  diploma: [
    { id: 2, title: 'Diploma in Energy Management', duration: '12 Months · Online', tag: '', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  elearning: [
    { id: 3, title: 'Top E-learning Course 1', duration: '6 Months · Online', tag: '', image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, title: 'Top E-learning Course 2', duration: '4 Months · Online', tag: '', image: 'https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  placement: [
    { id: 5, title: 'Placement Booster Program', duration: '3 Months · Online', tag: '', image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
};

// --- Program Card ---
const ProgramCard = ({ program }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden w-72 flex-shrink-0">
    <img src={program.image} alt={program.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h4 className="font-bold text-lg mb-1">{program.title}</h4>
      <p className="text-gray-600 text-sm mb-2">{program.duration}</p>
      {program.tag && <span className="text-blue-600 text-xs font-semibold mb-2 inline-block">{program.tag}</span>}
      <div>
        <a href="#" className="text-blue-600 font-semibold flex items-center hover:underline mt-2">
          View Program <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  </div>
);

// --- Main Section ---
const ProgramsSection = () => {
  const sections = [
    { id: 'upcoming', title: 'Upcoming Courses & Webinars' },
    { id: 'diploma', title: 'Diploma' },
    { id: 'elearning', title: 'E-learning (best 7-8 courses)' },
    { id: 'placement', title: 'Placement Booster Program (some details to be added)' },
  ];

  const [activeSection, setActiveSection] = useState('upcoming');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Write-up above menu --- */}
        <div className="mb-6 text-center col-span-12">
          <h2 className="text-3xl font-bold mb-2">Fuel Your Career with Our Specialized Programs</h2>
          <p className="text-gray-700 text-lg">Explore programs curated to enhance your skills and career prospects.</p>
        </div>

        <div className="grid grid-cols-12 gap-8">

          {/* --- Left Vertical Tabs --- */}
          <div className="col-span-3 flex flex-col space-y-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-left transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.title} <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* --- Right Program Cards --- */}
          <div className="col-span-9 flex space-x-6 overflow-x-auto scrollbar-hide py-2">
            {programs[activeSection]?.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
