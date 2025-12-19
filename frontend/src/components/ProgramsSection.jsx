import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ------------------------------------
   📘 Programs Data (with detailsId mapping to CourseDetails IDs)
------------------------------------ */
const programs = {
  upcoming: [
    {
  id: 27,
  detailsId: "49",
  title: "Digital Oil & Gas Career Accelerator",
  duration: "90+ Hours · Live Weekend + Recordings",
  tag: "Upcoming",
  image: "/images/Oil & Gas career Accelerator.jpg",
},
{
  id: 28,
  detailsId: "50",
  title: "Python, Machine Learning & GenAI for Oil & Gas Professionals",
  duration: "50+ Hours · Live Weekend + Recordings",
  tag: "Upcoming",
  image: "/images/Python gen ai.png",
}
  ],

  diploma: [
    {
      id: 1,
      detailsId: "32", // Diploma for HSE in Oil & Gas
      title: "Diploma for HSE in Oil & Gas",
      duration: "60 Hours · Online",
      tag: "Diploma",
      image: "/images/Diploma for HSE in Oil & Gas.avif",
    },
    {
      id: 2,
      detailsId: "43", // Diploma in Petroleum Project Management & Field Development Economics
      title: "Diploma in Petroleum Project Management & Field Development Economics",
      duration: "60+ Hours · Online",
      tag: "Diploma",
      image:
        "/images/Diploma in Petroleum Project Management & Field Development Economics.jpg",
    },
    {
      id: 3,
      detailsId: null, // no matching course yet
      title: "Diploma in Well Engineering & Completion Engineering",
      duration: "60 Hours · Online",
      tag: "Diploma",
      image:
        "/images/Diploma in Well Engineering & Completion Engineering.jpg",
    },
    {
      id: 4,
      detailsId: "41", // Diploma in Machine Learning for Oil & Gas
      title: "Diploma for Machine Learning in Oil & Gas",
      duration: "40 Hours · Online",
      tag: "Diploma",
      image: "/images/Diploma for Machine Learning in Oil & Gas.webp",
    },
    {
      id: 5,
      detailsId: "42", // Integrated Oil & Gas Analytics Using Big Data
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
      id: 6,
      detailsId: "28", // Petroleum Geomechanics & CCUS
      title:
        "Petroleum Geomechanics & CCUS: From Subsurface Principles to Field-Scale Applications",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Petroleum Geomechanics & CCUS.png",
    },
    {
      id: 7,
      detailsId: "24", // Machine Learning with Time Series Application for Energy Industry
      title: "Machine Learning with Time Series Applications for Energy Industry",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Machine Learning with Time Series Applications for Energy Industry.webp",
    },
    {
      id: 8,
      detailsId: null, // no matching course yet
      title: "Diploma in ESG, Carbon Trading and Sustainable Finance",
      duration: "60 Hours · Online",
      tag: "Self-Placed",
      image: "/images/ESG, Carbon Trading and Sustainable Finance.webp",
    },
    {
      id: 9,
      detailsId: "21", // Advanced Drilling Operations & Risk Mitigation
      title: "Advanced Drilling Operations & Risk Mitigation",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Advanced Drilling Operations & Risk Mitigation.webp",
    },
    {
      id: 10,
      detailsId: "30", // Oil & Gas Forecasting & Predictions using Python
      title: "Oil & Gas Forecasting & Predictions Using Python",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Oil & Gas Forecasting & Predictions Using Python.jpg",
    },
    {
      id: 11,
      detailsId: "25", // Power BI Analytics for Drilling Engineer
      title: "Power BI Analytics For Drilling Engineer",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Power BI Analytics For Drilling Engineer.jpg",
    },
    {
      id: 12,
      detailsId: "26", // AI-Powered Excel Automation for Oil & Gas
      title: "AI Powered Excel Automation for Oil & Gas",
      duration: "20 Hours · Online",
      tag: "Self-Placed",
      image: "/images/AI Powered Excel Automation for  Oil & Gas.webp",
    },
    {
      id: 13,
      detailsId: "42", // closest: Integrated Oil & Gas Analytics Using Big Data
      title:
        "Big Data Analytics & Machine Learning for Smarter Production Facilities Operations",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg",
    },
    {
      id: 14,
      detailsId: "31", // Production & Nodal Analysis with Python and ML
      title: "Production and Nodal Analysis with Python & ML",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Production and Nodal Analysis with Python & ML.webp",
    },
    {
      id: 15,
      detailsId: "36", // Artificial Lift Modelling, Reservoir Deliverability & Well Performance
      title:
        "Artificial Lift Modeling, Reservoir Deliverability & Well performance",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image:
        "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 16,
      detailsId: "37", // Reservoir Engineering Modelling & Flow Simulation
      title: "Reservoir Engineering, Modeling & Flow Simulation",
      duration: "60 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Reservoir Engineering, Modeling & flow Simulation.webp",
    },
    {
      id: 17,
      detailsId: "38", // Power BI Essentials for Oil & Gas
      title:
        "Power BI Essentials for Oil & Gas: Optimizing Drilling, Production, and Reservoir Management",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Power BI Essentials for Oil & Gas.png",
    },
    {
      id: 18,
      detailsId: "39", // Geomechanics & Its Application in Drilling and Completion
      title: "Geomechanics and its Application in Drilling & Completion",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Geomechanics and its application in Drilling & Completion.webp",
    },
    {
      id: 19,
      detailsId: "40", // Integrated Insights: SQL, Power BI & Tableau
      title:
        "Integrated Insights: SQL, Power BI, and Tableau for Oil & Gas Analytics",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg",
    },
    {
      id: 20,
      detailsId: "22", // Well Test Analysis & Reservoir Modelling using MS Excel
      title: "Well Test Analysis & Reservoir Modeling Using MS Excel",
      duration: "10+ Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Well Test Analysis & Reservoir Modeling Using MS Excel.jpeg",
    },
    {
      id: 21,
      detailsId: "44", // Machine Learning & Python Applications for Petrophysics
      title: "Machine Learning & Python Applications for Petrophysics",
      duration: "50 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Machine Learning & Python Applications for Petrophysics.jpg",
    },
    {
      id: 22,
      detailsId: "45", // Mastering Machine Learning...
      title:
        "Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics",
      duration: "20 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics.jpg",
    },
    {
      id: 23,
      detailsId: "46", // Petroleum Field Development Planning...
      title: "Petroleum Field Development Planning from Concept to Execution",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Petroleum Field Development Planning from Concept to Execution.jpg",
    },
    {
      id: 24,
      detailsId: "47", // Production Forecasting & Well Performance...
      title:
        "Production Forecasting & Well Performance Optimization with Python & Machine Learning",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png",
    },
    {
      id: 25,
      detailsId: "48", // Advanced Python for Reservoir, Production & Petrophysics
      title: "Advanced Python for Reservoir, Production and Petrophysics",
      duration: "16+ Hours · Online",
      tag: "Self-Placed",
      image:
        "/images/Advanced Python for Reservoir, Production and Petrophysics.jpeg",
    },
  ],

  placement: [
    {
      id: 26,
      detailsId: null, // no detailed page yet
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
const ProgramCard = ({ program }) => {
  // If we have a detailsId, go to detailed course page. Otherwise fallback to /programs.
  const targetLink = program.detailsId
    ? `/course/${program.detailsId}`
    : "/programs";

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full hover:shadow-2xl transition-shadow duration-300">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h4 className="font-bold text-lg mb-1 line-clamp-2">
          {program.title}
        </h4>
        <p className="text-gray-600 text-sm mb-2">{program.duration}</p>

        {program.tag && (
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-base font-semibold rounded-full mb-2 inline-block">
            {program.tag}
          </span>
        )}

        <Link
          to={targetLink}
          className={`text-blue-600 font-semibold flex items-center hover:underline mt-2 ${
            !program.detailsId ? "opacity-70" : ""
          }`}
        >
          View Program <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

/* ------------------------------------
   🧭 Main Programs Section Component
------------------------------------ */
const ProgramsSection = () => {
  const sections = [
    { id: "all", title: "All Programs" },
    { id: "upcoming", title: "Upcoming Courses & Webinars" },
    { id: "diploma", title: "Diploma" },
    { id: "elearning", title: "Self-Placed Courses "},
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
