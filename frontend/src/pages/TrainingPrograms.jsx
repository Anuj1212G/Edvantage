// src/pages/TrainingPrograms.jsx
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Clock, Users, Award, BookOpen } from "lucide-react";

import AuthModal from "./AuthModal.jsx";
import { useAuth } from "../context/AuthContext.jsx";

import DEFAULT_PROGRAMS from "../data/programs_part1.js";
import PROGRAMS_PART_2 from "../data/programs_part2.js";

/* 🔥 DOMAIN NORMALIZER (KEY FIX) */
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

  /* COMBINE ALL PROGRAMS */
  const allPrograms = useMemo(() => {
    return programs?.length
      ? programs
      : [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
  }, [programs]);

  /* SYNC CATEGORY FROM URL */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) setSelectedCategory(cat);
    else setSelectedCategory("all");
  }, [location.search]);

  /* ✅ FIXED FILTER LOGIC */
  const filteredPrograms = useMemo(() => {
    if (selectedCategory === "all") return allPrograms;

    if (selectedCategory === "upcoming") {
      return allPrograms.filter((p) => p.upcoming === true);
    }

    if (selectedCategory === "self-paced") {
      return allPrograms.filter((p) => p.category === "self-paced");
    }

    if (selectedCategory === "diploma") {
      return allPrograms.filter((p) =>
        p.format?.toLowerCase().includes("diploma")
      );
    }

    // 🔥 DOMAIN FILTER (WORKING)
    return allPrograms.filter(
      (p) => normalizeDomain(p.domain) === selectedCategory
    );
  }, [selectedCategory, allPrograms]);

  /* FUNCTIONS */
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

    if (user) {
      window.open(link, "_blank");
      return;
    }

    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Training Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Advance your career with industry-certified, modern e-learning programs.
          </p>
        </div>
      </section>

      {/* CATEGORY SECTION (UNCHANGED LAYOUT) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">

          {/* ALL + DOMAIN DROPDOWN */}
          <div className="relative group">
            <button
              onClick={() => handleSetCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              All Programs
            </button>

            <div
              className="
                absolute left-0 mt-2 w-64 bg-white text-gray-800 border border-gray-200 
                rounded-xl shadow-lg py-2 opacity-0 invisible
                group-hover:opacity-100 group-hover:visible transform -translate-y-2
                group-hover:translate-y-0 transition-all duration-200 ease-out z-50
              "
            >
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
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 transition"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* OTHER FILTERS */}
          {[
            { id: "upcoming", name: "Upcoming Programs" },
            { id: "self-paced", name: "Self-Paced Courses" },
            { id: "diploma", name: "Diploma Programs" },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => handleSetCategory(c.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === c.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </section>

      {/* PROGRAM LIST (UNCHANGED) */}
      <section className="pb-20 max-w-7xl mx-auto px-4 space-y-12">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover lg:rounded-l-3xl rounded-t-3xl"
              />

              <div className="p-10 flex flex-col">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full font-semibold text-sm">
                  {program.domain?.toUpperCase()}
                </span>

                <h2 className="text-4xl font-bold mt-4">{program.title}</h2>

                <p className="text-gray-600 mt-3 mb-6 text-lg">
                  {program.overview}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                  <Info icon={Clock} label="Duration" value={program.duration} />
                  <Info icon={BookOpen} label="Format" value={program.format} />
                  <Info icon={Award} label="Level" value={program.level} />
                  <Info icon={Users} label="Certificate" value={program.certificate} />
                </div>

                <h3 className="text-xl font-semibold mb-3">Key Learning Outcomes</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {program.outcomes?.map((o, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center border-t pt-6 mt-auto">
                  <div>
                    <div className="text-4xl font-bold text-teal-600">
                      {program.price}
                    </div>
                    <p className="text-gray-500 text-sm">One-time payment</p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleViewDetails(program)}
                      className="px-6 py-3 border rounded-xl font-semibold hover:bg-gray-100"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handlePayClick(program)}
                      className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
                    >
                      Enroll Now
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

/* INFO COMPONENT */
const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2">
    <Icon className="h-5 w-5 text-blue-600" />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);
