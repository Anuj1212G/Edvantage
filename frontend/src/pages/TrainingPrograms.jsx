// // src/pages/TrainingPrograms.jsx
// import React, { useState, useMemo, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Clock, Users, Award, BookOpen } from "lucide-react";

// import AuthModal from "./AuthModal.jsx";
// import { useAuth } from "../context/AuthContext.jsx";

// import DEFAULT_PROGRAMS from "../data/programs_part1.js";
// import PROGRAMS_PART_2 from "../data/programs_part2.js";

// /* 🔥 DOMAIN NORMALIZER */
// const normalizeDomain = (domain = "") => {
//   const d = domain.toLowerCase();

//   if (d.includes("digital")) return "digital";
//   if (d.includes("reservoir")) return "reservoir";
//   if (d.includes("economics")) return "economics";
//   if (d.includes("drilling")) return "drilling";
//   if (d.includes("production")) return "production";

//   return "";
// };

// const TrainingPrograms = ({ programs }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user } = useAuth();

//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [authOpen, setAuthOpen] = useState(false);
//   const [redirectTo, setRedirectTo] = useState(null);
//   const [programToPay, setProgramToPay] = useState(null);

//   /* COMBINE ALL PROGRAMS */
//   const allPrograms = useMemo(() => {
//     return programs?.length
//       ? programs
//       : [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
//   }, [programs]);

//   /* SYNC CATEGORY FROM URL */
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const cat = params.get("category");
//     setSelectedCategory(cat || "all");
//   }, [location.search]);

//   /* FILTER LOGIC */
//   const filteredPrograms = useMemo(() => {
//     if (selectedCategory === "all") return allPrograms;

//     if (selectedCategory === "upcoming") {
//       return allPrograms.filter((p) => p.upcoming === true);
//     }

//     if (selectedCategory === "self-paced") {
//       return allPrograms.filter((p) => p.category === "self-paced");
//     }

//     if (selectedCategory === "diploma") {
//       return allPrograms.filter((p) =>
//         p.format?.toLowerCase().includes("diploma")
//       );
//     }

//     return allPrograms.filter(
//       (p) => normalizeDomain(p.domain) === selectedCategory
//     );
//   }, [selectedCategory, allPrograms]);

//   /* ACTIONS */
//   const handleSetCategory = (cat) => {
//     setSelectedCategory(cat);
//     navigate(`?category=${cat}`);
//   };

//   const handleViewDetails = (program) => {
//     navigate(`/course/${program.id}`);
//     window.scrollTo(0, 0);
//   };

//   const handlePayClick = (program) => {
//     const link = program.payment?.stripe;
//     if (!link) return alert("Payment link not configured.");

//     setRedirectTo(link);
//     setProgramToPay(program);

//     if (user) {
//       window.open(link, "_blank");
//       return;
//     }

//     setAuthOpen(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* HERO */}
//       <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
//         <div className="max-w-6xl mx-auto text-center px-4">
//           <h1 className="text-5xl font-bold mb-4">Training Programs</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Advance your career with industry-certified, modern e-learning programs.
//           </p>
//         </div>
//       </section>

//       {/* CATEGORY SECTION */}
//       <section className="py-10">
//         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 relative z-20">

//           {/* ALL + DOMAIN DROPDOWN */}
//           <div className="relative group">
//             <button
//               onClick={() => handleSetCategory("all")}
//               className={`px-6 py-3 rounded-full font-semibold transition-all ${
//                 selectedCategory === "all"
//                   ? "bg-blue-600 text-white"
//                   : "bg-white text-gray-700 hover:bg-blue-50"
//               }`}
//             >
//               All Programs
//             </button>

//             <div
//               className="
//                 absolute left-0 mt-2 w-64 bg-white text-gray-800 border border-gray-200 
//                 rounded-xl shadow-lg py-2 opacity-0 invisible
//                 group-hover:opacity-100 group-hover:visible transform -translate-y-2
//                 group-hover:translate-y-0 transition-all duration-200 ease-out z-50
//               "
//             >
//               {[
//                 { id: "digital", name: "Digital Oil & Gas" },
//                 { id: "reservoir", name: "Reservoir Engineering" },
//                 { id: "economics", name: "Petroleum Economics" },
//                 { id: "drilling", name: "Drilling & Well Completion" },
//                 { id: "production", name: "Production Engineering" },
//               ].map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => handleSetCategory(cat.id)}
//                   className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 transition"
//                 >
//                   {cat.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* OTHER FILTER BUTTONS */}
//           {[
//             { id: "upcoming", name: "Upcoming Programs" },
//             { id: "self-paced", name: "Self-Paced Courses" },
//             { id: "diploma", name: "Diploma Programs" },
//           ].map((c) => (
//             <button
//               key={c.id}
//               onClick={() => handleSetCategory(c.id)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all ${
//                 selectedCategory === c.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-white text-gray-700 hover:bg-blue-50"
//               }`}
//             >
//               {c.name}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* PROGRAM LIST */}
//       <section className="pb-20 max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

//           {filteredPrograms.map((program) => (
//             <div
//               key={program.id}
//               className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden"
//             >
//               <div className="flex flex-col md:flex-row h-full">

//                 <div className="md:w-1/3 w-full">
//                   <img
//                     src={program.image}
//                     alt={program.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="md:w-2/3 w-full p-6 flex flex-col">
//                   <p className="text-blue-600 text-sm font-medium mb-1">
//                     {program.domain}
//                   </p>

//                   <h2 className="text-xl font-bold text-gray-900">
//                     {program.title}
//                   </h2>

//                   <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mt-3">
//                     <span className="flex items-center gap-2">
//                       <Clock className="w-4 h-4 text-blue-500" />
//                       {program.duration}
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <BookOpen className="w-4 h-4 text-blue-500" />
//                       {program.format}
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <Award className="w-4 h-4 text-blue-500" />
//                       {program.level}
//                     </span>
//                   </div>

//                   <p className="text-gray-700 text-sm mt-4 line-clamp-3">
//                     {program.overview}
//                   </p>

//                   <div className="mt-4">
//                     <h4 className="text-sm font-semibold mb-2">
//                       Key Learning Outcomes
//                     </h4>
//                     <ul className="space-y-1">
//                       {program.outcomes?.slice(0, 3).map((o, i) => (
//                         <li key={i} className="flex gap-2 text-sm text-gray-700">
//                           <span className="text-teal-600 font-bold">•</span>
//                           {o}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mt-auto pt-4 flex justify-between items-center border-t">
//                     <div>
//                       <p className="text-lg font-bold text-teal-600">
//                         {program.price}
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         Certificate: {program.certificate}
//                       </p>
//                     </div>

//                     <div className="flex gap-3">
//                       <button
//                         onClick={() => handleViewDetails(program)}
//                         className="px-4 py-2 text-sm border rounded-lg font-semibold hover:bg-gray-100"
//                       >
//                         View Details
//                       </button>
//                       <button
//                         onClick={() => handlePayClick(program)}
//                         className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
//                       >
//                         Enroll Now
//                       </button>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </section>

//       <AuthModal
//         open={authOpen}
//         onClose={() => setAuthOpen(false)}
//         redirectTo={redirectTo}
//         program={programToPay}
//       />
//     </div>
//   );
// };

// export default TrainingPrograms;
// src/pages/TrainingPrograms.jsx
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Clock, Award, BookOpen } from "lucide-react";

import AuthModal from "./AuthModal.jsx";
import { useAuth } from "../context/AuthContext.jsx";

import DEFAULT_PROGRAMS from "../data/programs_part1.js";
import PROGRAMS_PART_2 from "../data/programs_part2.js";

/* 🔥 DOMAIN NORMALIZER */
const normalizeDomain = (domain = "") => {
  const d = domain.toLowerCase();
  if (d.includes("digital")) return "digital";
  if (d.includes("reservoir")) return "reservoir";
  if (d.includes("economics")) return "economics";
  if (d.includes("drilling")) return "drilling";
  if (d.includes("production")) return "production";
  return "";
};

const TrainingPrograms = ({ programs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [authOpen, setAuthOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);
  const [programToPay, setProgramToPay] = useState(null);

  /* COMBINE PROGRAMS */
  const allPrograms = useMemo(() => {
    return programs?.length
      ? programs
      : [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
  }, [programs]);

  /* SYNC URL */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSelectedCategory(params.get("category") || "all");
  }, [location.search]);

  /* FILTER LOGIC */
  const filteredPrograms = useMemo(() => {
    if (selectedCategory === "all") return allPrograms;
    if (selectedCategory === "self-paced")
      return allPrograms.filter((p) => p.category === "self-paced");
    if (selectedCategory === "diploma")
      return allPrograms.filter((p) =>
        p.format?.toLowerCase().includes("diploma")
      );
    if (selectedCategory === "upcoming")
      return allPrograms.filter((p) => p.upcoming);

    return allPrograms.filter(
      (p) => normalizeDomain(p.domain) === selectedCategory
    );
  }, [selectedCategory, allPrograms]);

  const handleSetCategory = (cat) => {
    setSelectedCategory(cat);
    navigate(`?category=${cat}`);
  };

  const handleViewDetails = (program) => {
    navigate(`/course/${program.id}`);
    window.scrollTo(0, 0);
  };

  const handlePayClick = (program) => {
    const link = program.payment?.stripe;
    if (!link) return alert("Payment link not configured.");

    setRedirectTo(link);
    setProgramToPay(program);

    if (user) window.open(link, "_blank");
    else setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Training Programs</h1>
          <p className="text-xl text-blue-100">
            Industry-certified programs designed for real-world impact
          </p>
        </div>
      </section>

      {/* CATEGORY (UNCHANGED UI) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">

          <div className="relative group">
            <button
              onClick={() => handleSetCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              All Programs
            </button>

            <div className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
              {[
                { id: "digital", name: "Digital Oil & Gas" },
                { id: "reservoir", name: "Reservoir Engineering" },
                { id: "economics", name: "Petroleum Economics" },
                { id: "drilling", name: "Drilling & Well Completion" },
                { id: "production", name: "Production Engineering" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSetCategory(cat.id)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {[
            { id: "upcoming", name: "Upcoming Programs" },
            { id: "self-paced", name: "Self-Paced Courses" },
            { id: "diploma", name: "Diploma Programs" },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => handleSetCategory(c.id)}
              className={`px-6 py-3 rounded-full font-semibold ${
                selectedCategory === c.id
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </section>

      {/* ✅ PROGRAM LIST — ONE CARD PER ROW */}
      <section className="max-w-7xl mx-auto px-4 pb-20 space-y-10">

        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">

              {/* IMAGE LEFT */}
              <div className="md:w-1/3 w-full">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT RIGHT */}
              <div className="md:w-2/3 p-8 flex flex-col">

                <span className="text-blue-600 font-semibold text-sm mb-1">
                  {program.domain}
                </span>

                <h2 className="text-2xl font-bold mb-2">
                  {program.title}
                </h2>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {program.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> {program.format}
                  </span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" /> {program.level}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">
                  {program.overview}
                </p>

                <h4 className="font-semibold mb-2">Key Learning Outcomes</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                  {program.outcomes?.slice(0, 3).map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>

                <div className="mt-auto flex justify-between items-center border-t pt-4">
                  <div>
                    <p className="text-xl font-bold text-teal-600">
                      {program.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Certificate: {program.certificate}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleViewDetails(program)}
                      className="px-4 py-2 border rounded-lg font-semibold hover:bg-gray-100"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handlePayClick(program)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                    >
                      Enroll
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

      </section>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        redirectTo={redirectTo}
        program={programToPay}
      />
    </div>
  );
};

export default TrainingPrograms;
