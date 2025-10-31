import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const programs = {
  upcoming: [
    { id: 1, title: 'Webinar on Oil & Gas Trends', duration: '2 Hours · Online', tag: '', image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800' },
    {
      id: 10,
      title: 'Petroleum Geomechanics & CCUS: From Subsurface Principles to Field-Scale Applications',
      duration: '5 Days · Online',
      tag: 'Upcoming',
      image: '/images/Petroleum Geomechanics & CCUS.png'
    },
    {
      id: 11,
      title: 'Machine Learning with Time Series Applications for Energy Industry',
      duration: '4 Weeks · Online',
      tag: 'Upcoming',
      image: '/images/Machine Learning with Time Series Applications for Energy Industry.webp'
    },
    {
      id: 12,
      title: 'Diploma for HSE in Oil & Gas',
      duration: '6 Months · Online',
      tag: '',
      image: '/images/Diploma for HSE in Oil & Gas.avif'
    },
    {
      id: 13,
      title: 'Diploma in ESG, Carbon Trading and Sustainable Finance',
      duration: '6 Months · Online',
      tag: '',
      image: '/images/ESG, Carbon Trading and Sustainable Finance.webp'
    },
    {
      id: 14,
      title: 'Advanced Drilling Operations & Risk Mitigation',
      duration: '5 Days · Online',
      tag: 'Upcoming',
      image: '/images/Advanced Drilling Operations & Risk Mitigation.webp'
    },
    {
      id: 15,
      title: 'Oil & Gas Forecasting & Predictions Using Python',
      duration: '4 Weeks · Online',
      tag: 'New',
      image: '/images/Oil & Gas Forecasting & Predictions Using Python.jpg'
    },
    {
      id: 16,
      title: 'Power BI Analytics For Drilling Engineer',
      duration: '3 Weeks · Online',
      tag: '',
      image: '/images/Power BI Analytics For Drilling Engineer.jpg'
    },
    {
      id: 17,
      title: 'AI Powered Excel Automation for Oil & Gas',
      duration: '2 Weeks · Online',
      tag: '',
      image: '/images/AI Powered Excel Automation for  Oil & Gas.webp'
    },
    {
      id: 18,
      title: 'Big Data Analytics & Machine Learning for Smarter Production Facilities Operations',
      duration: '5 Days · Online',
      tag: 'New',
      image: '/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg'
    },
    {
      id: 19,
      title: 'Production and Nodal Analysis with Python & ML',
      duration: '4 Weeks · Online',
      tag: 'New',
      image: '/images/Production and Nodal Analysis with Python & ML.webp'
    },
  ],
  diploma: [
    { id: 2, title: 'Diploma in Energy Management', duration: '12 Months · Online', tag: '', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800' },
    {
      id: 6,
      title: 'Diploma in Petroleum Project Management & Field Development Economics',
      duration: '12 Months · Online',
      tag: '',
      image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg'
    },
    {
      id: 7,
      title: 'Diploma in Well Engineering & Completion Engineering',
      duration: '12 Months · Online',
      tag: '',
      image: '/images/Diploma in Well Engineering & Completion Engineering.jpg'
    },
    {
      id: 8,
      title: 'Diploma for Machine Learning in Oil & Gas',
      duration: '9 Months · Online',
      tag: 'New',
      image: '/images/Diploma for Machine Learning in Oil & Gas.webp'
    },
    {
      id: 9,
      title: 'Diploma in Integrated Oil & Gas Analytics Using Big Data: A full well Lifecycle Approach',
      duration: '12 Months · Online',
      tag: '',
      image: '/images/Diploma in Integrated Oil & Gas Analytics Using Big Data A full well Lifecycle Approach.jpg'
    },
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
  <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full">
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

const ProgramsSection = () => {
  const sections = [
    { id: 'all', title: 'All Programs' },
    { id: 'upcoming', title: 'Upcoming Courses & Webinars' },
    
    { id: 'diploma', title: 'Diploma' },
    { id: 'elearning', title: 'Certification Courses' },
    { id: 'placement', title: 'Placement Booster Program' },
  ];

  const [activeSection, setActiveSection] = useState('all');

  const displayedPrograms =
    activeSection === 'all'
      ? Object.values(programs).flat()
      : programs[activeSection] || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Heading --- */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-gray-900">
            Fuel Your Career with Our Specialized Programs
          </h2>
          <p className="text-gray-700 text-xl sm:text-2xl">
            Explore programs curated to enhance your skills and career prospects.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* --- Left Tabs --- */}
          <div className="col-span-3 flex flex-col space-y-2">
            {sections.map((section) => (
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

          {/* --- Right Programs --- */}
          <div className="col-span-9">
            {displayedPrograms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No programs available in this section.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
