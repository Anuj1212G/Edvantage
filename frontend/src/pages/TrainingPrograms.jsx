import React, {
  useState,
  useMemo,
  useEffect,
  useRef
} from "react";
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

  const [openDropdown, setOpenDropdown] = useState(false);
  const closeTimeoutRef = useRef(null);

  /* COMBINE PROGRAMS */
  const allPrograms = useMemo(() => {
    return programs?.length
      ? programs
      : [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
  }, [programs]);

  /* SYNC CATEGORY FROM URL */
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
      return allPrograms.filter((p) => p.upcoming === true);

    return allPrograms.filter(
      (p) => normalizeDomain(p.domain) === selectedCategory
    );
  }, [selectedCategory, allPrograms]);

  /* ACTIONS */
  const handleSetCategory = (cat) => {
    setSelectedCategory(cat);
    navigate(`?category=${cat}`);
    setOpenDropdown(false);
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

      {/* CATEGORY SECTION */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">

          {/* ✅ ALL PROGRAMS – HOVER SAFE */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
              setOpenDropdown(true);
            }}
            onMouseLeave={() => {
              closeTimeoutRef.current = setTimeout(() => {
                setOpenDropdown(false);
              }, 200);
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSetCategory("all"); // RESET
              }}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              All Programs
            </button>

            {openDropdown && (
              <div
                className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg z-50"
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                  }
                }}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(() => {
                    setOpenDropdown(false);
                  }, 200);
                }}
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
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
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
              className={`px-6 py-3 rounded-full font-semibold transition ${
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

      {/* PROGRAM LIST */}
      <section className="max-w-7xl mx-auto px-4 pb-20 space-y-10">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-2/3 p-8 flex flex-col">
                <span className="text-blue-600 font-semibold text-sm">
                  {program.domain}
                </span>

                <h2 className="text-2xl font-bold mb-2">
                  {program.title}
                </h2>

                <div className="flex gap-6 text-sm text-gray-600 mb-4">
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

                <p className="text-gray-700 mb-4">{program.overview}</p>

                <ul className="list-disc pl-5 text-gray-700 mb-6">
                  {program.outcomes?.slice(0, 3).map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>

                <div className="mt-auto flex justify-between items-center border-t pt-4">
                  <p className="text-xl font-bold text-teal-600">
                    {program.price}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleViewDetails(program)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handlePayClick(program)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
