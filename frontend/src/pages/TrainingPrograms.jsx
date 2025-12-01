// src/pages/TrainingPrograms.jsx
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Clock,
  Users,
  Award,
  BookOpen,
  Star,
} from "lucide-react";

import AuthModal from "./AuthModal.jsx";
import { useAuth } from "../context/AuthContext.jsx";

/* ------------------------------------------------------------------
   ALL PROGRAM ARRAYS (Your FULL data)
------------------------------------------------------------------ */
import DEFAULT_PROGRAMS from "../data/programs_part1.js";
import PROGRAMS_PART_2 from "../data/programs_part2.js";

/* ------------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------------ */
const TrainingPrograms = ({ programs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [authOpen, setAuthOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);
  const [programToPay, setProgramToPay] = useState(null);

  // 🔥 Combine all programs
  const allPrograms = useMemo(() => {
    const combined = [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
    return programs?.length ? programs : combined;
  }, [programs]);

  /* ------------------------------------------------------------------
     CATEGORY FILTER → ONLY 3 categories (Option B)
  ------------------------------------------------------------------ */
  const categories = [
    { id: "all", name: "All Programs" },
    { id: "self-paced", name: "Self-Paced Courses" },
    { id: "diploma", name: "Diploma Programs" },
  ];

  // When URL ?category= changes → update filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat && ["all", "self-paced", "diploma"].includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  // Filter programs
  const filteredPrograms =
    selectedCategory === "all"
      ? allPrograms
      : allPrograms.filter((p) => p.category === selectedCategory);

  /* ------------------------------------------------------------------
     HANDLERS
  ------------------------------------------------------------------ */
  const handleSetCategory = (cat) => {
    setSelectedCategory(cat);
    navigate(`?category=${cat}`);
  };

  const handlePayClick = (program, method) => {
    const link = program.payment?.[method];
    if (!link) return alert("Payment link not configured.");

    setRedirectTo(link);
    setProgramToPay(program);

    if (user) {
      window.open(link, "_blank");
      return;
    }

    setAuthOpen(true);
  };

  const handleViewDetails = (program) => {
    navigate(`/course/${program.id}`);
    window.scrollTo(0, 0);
  };

  /* ------------------------------------------------------------------
     UI RENDER
  ------------------------------------------------------------------ */
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Training Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Advance your career with industry-certified, modern e-learning programs.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((c) => (
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

      {/* PROGRAM LIST */}
      <section className="pb-20 max-w-7xl mx-auto px-4 space-y-12">

        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
          >
            <div className="grid lg:grid-cols-3">

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={program.image || "/images/course-placeholder.jpg"}
                  alt={program.title}
                  className="w-full h-64 lg:h-full object-cover"
                />

                <span className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                  {(program.category || "").replace("-", " ").toUpperCase()}
                </span>

                {program.featured && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1" /> Featured
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                <p className="text-gray-600 mt-3 mb-6">{program.overview}</p>

                {/* PROGRAM STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Info icon={Clock} label="Duration" value={program.duration} />
                  <Info icon={BookOpen} label="Format" value={program.format} />
                  <Info icon={Award} label="Level" value={program.level} />
                  <Info icon={Users} label="Certificate" value={program.certificate} />
                </div>

                {/* LEARNING OUTCOMES */}
                <h3 className="text-lg font-semibold mb-2">Key Learning Outcomes</h3>
                <ul className="grid md:grid-cols-2 gap-2 mb-6">
                  {program.outcomes?.map((o, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                      {o}
                    </li>
                  ))}
                </ul>

                {/* TARGET AUDIENCE */}
                <h3 className="text-lg font-semibold mt-6 mb-3">Who Should Enroll</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.targetAudience?.map((a, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {a}
                    </span>
                  ))}
                </div>

                {/* FOOTER → PRICE + BUTTONS */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 mt-auto gap-4">
                  <div>
                    <div className="text-3xl font-bold text-teal-600">
                      {program.price}
                    </div>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleViewDetails(program)}
                      className="border px-4 py-2 rounded-lg hover:bg-gray-100 font-semibold"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handlePayClick(program, "stripe")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
                    >
                      Pay with Stripe
                    </button>

                    <button
                      onClick={() => handlePayClick(program, "razorpay")}
                      className="bg-white border px-4 py-2 rounded-lg font-semibold hover:bg-gray-50"
                    >
                      Pay with Razorpay
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

/* Small info card component */
const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2">
    <Icon className="h-5 w-5 text-blue-600" />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);
