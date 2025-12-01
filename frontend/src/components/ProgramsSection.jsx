import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ------------------------------------
   📘 Programs Data (Durations Converted to Hours)
------------------------------------ */
const programs = {
  upcoming: [
    {
      id: 1,
      title: "Webinar on Oil & Gas Trends",
      duration: "2 Hours · Online",
      tag: "Webinar",
      image:
        "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 10,
      title:
        "Petroleum Geomechanics & CCUS: From Subsurface Principles to Field-Scale Applications",
      duration: "40 Hours · Online",
      tag: "Upcoming",
      image: "/images/Petroleum Geomechanics & CCUS.png",
    },
    {
      id: 11,
      title: "Machine Learning with Time Series Applications for Energy Industry",
      duration: "40 Hours · Online",
      tag: "Upcoming",
      image: "/images/Machine Learning with Time Series Applications for Energy Industry.webp",
    },
    {
      id: 12,
      title: "Diploma for HSE in Oil & Gas",
      duration: "60 Hours · Online",
      tag: "Upcoming",
      image: "/images/Diploma for HSE in Oil & Gas.avif",
    },
    {
      id: 13,
      title: "Diploma in ESG, Carbon Trading and Sustainable Finance",
      duration: "60 Hours · Online",
      tag: "Upcoming",
      image: "/images/ESG, Carbon Trading and Sustainable Finance.webp",
    },
    {
      id: 14,
      title: "Advanced Drilling Operations & Risk Mitigation",
      duration: "40 Hours · Online",
      tag: "Upcoming",
      image: "/images/Advanced Drilling Operations & Risk Mitigation.webp",
    },
    {
      id: 15,
      title: "Oil & Gas Forecasting & Predictions Using Python",
      duration: "40 Hours · Online",
      tag: "Upcoming",
      image: "/images/Oil & Gas Forecasting & Predictions Using Python.jpg",
    },
    {
      id: 16,
      title: "Power BI Analytics For Drilling Engineer",
      duration: "40 Hours · Online",
      tag: "Upcoming",
      image: "/images/Power BI Analytics For Drilling Engineer.jpg",
    },
    {
      id: 17,
      title: "AI Powered Excel Automation for Oil & Gas",
      duration: "20 Hours · Online",
      tag: "Upcoming",
      image: "/images/AI Powered Excel Automation for  Oil & Gas.webp",
    },
    {
      id: 18,
      title:
        "Big Data Analytics & Machine Learning for Smarter Production Facilities Operations",
      duration: "40 Hours · Online",
      tag: "Upcoming",
      image:
        "/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg",
    },
    {
      id: 19,
      title: "Production and Nodal Analysis with Python & ML",
      duration: "40 Hours · Online",
      tag: "Upcoming",
      image: "/images/Production and Nodal Analysis with Python & ML.webp",
    },
  ],

  diploma: [
    {
      id: 6,
      title: "Diploma in Petroleum Project Management & Field Development Economics",
      duration: "60+ Hours · Online",
      tag: "Diploma",
      image: "/images/Diploma in Petroleum Project Management & Field Development Economics.jpg",
    },
    {
      id: 7,
      title: "Diploma in Well Engineering & Completion Engineering",
      duration: "60 Hours · Online",
      tag: "Diploma",
      image: "/images/Diploma in Well Engineering & Completion Engineering.jpg",
    },
    {
      id: 8,
      title: "Diploma for Machine Learning in Oil & Gas",
      duration: "40 Hours · Online",
      tag: "Diploma",
      image: "/images/Diploma for Machine Learning in Oil & Gas.webp",
    },
    {
      id: 9,
      title:
        "Diploma in Integrated Oil & Gas Analytics Using Big Data: A full well Lifecycle Approach",
      duration: "80 Hours · Online",
      tag: "Diploma",
      image:
        "/images/Diploma in Integrated Oil & Gas Analytics Using Big Data A full well Lifecycle Approach.jpg",
    },
  ],

  elearning: [
    {
      id: 3,
      title: "Artificial Lift Modeling, Reservoir Deliverability & Well performance",
      duration: "40 Hours · Online",
      tag: "E-learning",
      image:
        "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 20,
      title: "Reservoir Engineering, Modeling & Flow Simulation",
      duration: "60 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Reservoir Engineering, Modeling & flow Simulation.webp",
    },
    {
      id: 21,
      title:
        "Power BI Essentials for Oil & Gas: Optimizing Drilling, Production, and Reservoir Management",
      duration: "40 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Power BI Essentials for Oil & Gas.png",
    },
    {
      id: 22,
      title: "Geomechanics and its Application in Drilling & Completion",
      duration: "40 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Geomechanics and its application in Drilling & Completion.webp",
    },
    {
      id: 23,
      title:
        "Integrated Insights: SQL, Power BI, and Tableau for Oil & Gas Analytics",
      duration: "40 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg",
    },
    {
      id: 24,
      title: "Well Test Analysis & Reservoir Modeling Using MS Excel",
      duration: "10+ Hours · Online",
      tag: "E-learning",
      image:
        "/images/Well Test Analysis & Reservoir Modeling Using MS Excel.jpeg",
    },
    {
      id: 25,
      title: "Machine Learning & Python Applications for Petrophysics",
      duration: "50 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Machine Learning & Python Applications for Petrophysics.jpg",
    },
    {
      id: 26,
      title:
        "Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics",
      duration: "20 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics.jpg",
    },
    {
      id: 27,
      title: "Petroleum Field Development Planning from Concept to Execution",
      duration: "40 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Petroleum Field Development Planning from Concept to Execution.jpg",
    },
    {
      id: 28,
      title:
        "Production Forecasting & Well Performance Optimization with Python & Machine Learning",
      duration: "40 Hours · Online",
      tag: "E-learning",
      image:
        "/images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png",
    },
    {
      id: 29,
      title: "Advanced Python for Reservoir, Production and Petrophysics",
      duration: "16+ Hours · Online",
      tag: "E-learning",
      image:
        "/images/Advanced Python for Reservoir, Production and Petrophysics.jpeg",
    },
  ],

  placement: [
    {
      id: 5,
      title: "Placement Booster Program",
      duration: "60 Hours · Online",
      tag: "Placement Booster Program",
      image:
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
};

/* ------------------------------------
   🎓 Program Card Component
------------------------------------ */
const ProgramCard = ({ program }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full hover:shadow-2xl transition-shadow duration-300">
    <img
      src={program.image}
      alt={program.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h4 className="font-bold text-lg mb-1">{program.title}</h4>
      <p className="text-gray-600 text-sm mb-2">{program.duration}</p>

      {program.tag && (
        <span className="text-blue-600 text-xs font-semibold mb-2 inline-block">
          {program.tag}
        </span>
      )}

      <Link
        to="/programs"
        className="text-blue-600 font-semibold flex items-center hover:underline mt-2"
      >
        View Program <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </div>
);

/* ------------------------------------
   🧭 Main Programs Section Component
------------------------------------ */
const ProgramsSection = () => {
  const sections = [
    { id: "all", title: "All Programs" },
    { id: "upcoming", title: "Upcoming Courses & Webinars" },
    { id: "diploma", title: "Diploma" },
    { id: "elearning", title: "Certification Courses" },
    { id: "placement", title: "Placement Booster Program" },
  ];

  const [activeSection, setActiveSection] = useState("all");

  const displayedPrograms =
    activeSection === "all"
      ? Object.values(programs).flat()
      : programs[activeSection] || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Heading --- */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900">
            Fuel Your Career with Our Specialized Programs
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl">
            Explore programs curated to enhance your skills and career prospects.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* --- Sidebar Tabs --- */}
          <div className="col-span-12 lg:col-span-3 flex flex-col space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-left transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.title}
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* --- Program Grid --- */}
          <div className="col-span-12 lg:col-span-9">
            {displayedPrograms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                No programs available in this section.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;