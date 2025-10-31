import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Ensure all social icons are imported
import { FaInstagram, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa"; 
import { PiUsersThreeBold } from "react-icons/pi";

/* ----------------- ICON COMPONENTS (Moved up for use in data arrays) ----------------- */
const WorkshopIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <path d="M12 18h.01M12 15h.01M12 12h.01M8 18h.01M8 15h.01M8 12h.01M16 18h.01M16 15h.01" />
  </svg>
);

const SoftwareTrainingIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M8 21h8M12 17v4m0-13-2 4h4l-2 4" />
  </svg>
);

const VirtualInternshipsIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v5"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M5.44 19.33a3.5 3.5 0 1 0 0-5.66 3.5 3.5 0 0 0 0 5.66z"></path>
  </svg>
);

const DelegatesSensitizedIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="5"></circle>
    <path d="M20 21a8 8 0 0 0-16 0"></path>
  </svg>
);

/* ----------------- DATA DEFINITION (UPDATED) ----------------- */
// Card set 1: Social Media Cards
const Cards1 = [
  {
    icon: <FaLinkedin className="text-[#0A66C2] text-4xl" />,
    value: "14K+",
    label: "LinkedIn Followers",
  },
  {
    icon: <FaYoutube className="text-[#FF0000] text-4xl" />,
    value: "2K+",
    label: "YouTube Subscribers",
  },
  {
    icon: <FaInstagram className="text-[#E1306C] text-4xl" />,
    value: "2K+",
    label: "Instagram Followers",
  },
  {
    icon: <FaTelegram className="text-blue-600 text-4xl" />,
    value: "2K+",
    label: "Telegram Subscribers",
  },
];

// Card set 2: Statistical Cards (Using icons and data from the main stats section)
const StatsCards = [
  {
    icon: <WorkshopIcon className="w-10 h-10 text-blue-600" />,
    value: "5+",
    label: "Years of Excellence",
  },
  {
    icon: <SoftwareTrainingIcon className="w-10 h-10 text-blue-600" />,
    value: "40+",
    label: "Presence in countries",
  },
  {
    icon: <VirtualInternshipsIcon className="w-10 h-10 text-blue-600" />,
    value: "10+",
    label: "Universities Collaboration",
  },
  {
    icon: <DelegatesSensitizedIcon className="w-10 h-10 text-blue-600" />,
    value: "20+",
    label: "Corporate Partners",
  },
];


/* ----------------- MINI STACKED CARD COMPONENT ----------------- */
/**
 * Renders a single, larger, auto-scrolling stacked card (Icon + Value/Label side-by-side).
 * @param {object} props
 * @param {number} props.initialIndex - The index of the card to show first.
 * @param {Array} props.ALL_CARDS - The array of card data to use (Cards1 or StatsCards).
 */
const MiniStackedCard = ({ initialIndex, ALL_CARDS}) => {
  const cards = ALL_CARDS;
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    // Card wrapper size adjusted
    <div className="relative w-[280px] h-[100px] flex items-center justify-center">
      {cards.map((card, i) => {
        const offset = (i - index + cards.length) % cards.length;
        const visible = offset < 3; 

        return (
          <div
            key={i}
            // Card size with dark border
            className={`absolute w-[260px] h-[90px] bg-white rounded-xl border border-gray-900/50 shadow-xl flex items-center justify-start px-5 transition-all duration-700 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${offset * 6}px) scale(${1 - offset * 0.03})`, 
              zIndex: cards.length - offset,
            }}
          >
            {/* Side-by-side layout (icon and text) */}
            <div className="flex-shrink-0 mr-4">{card.icon}</div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-3xl font-extrabold text-gray-900 leading-none">
                {card.value}
              </h3>
              <p className="text-gray-600 text-base mt-1">{card.label}</p>
            </div>

            {/* Dark back border layers */}
            {offset === 0 && (
              <>
                {/* Back layers for stacking effect */}
                <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 border border-black/10 rounded-xl -z-10 translate-y-0.5 bg-gray-50 shadow-inner"></div>
                <div className="absolute top-1 left-1 right-1 bottom-1 border border-black/5 rounded-xl -z-20 translate-y-1 bg-gray-100"></div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ----------------- BIG WRAPPER BOX COMPONENT ----------------- */
/**
 * Wraps the two stacked cards in a single, large box container with fixed dimensions and padding.
 */
const BigStackedBox = () => {
    // Start index for Cards1 (Social Media): e.g., LinkedIn (0)
    const socialIndex = 0; 
    // Start index for StatsCards (Statistical Icons): e.g., Presence in countries (1)
    const statsIndex = 1; 
    
    // The height h-[390px] is set to match the visual height of the main stats box
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 w-[320px] h-[390px] overflow-hidden">
        <div className="flex flex-col gap-8 items-center justify-center h-full">
          {/* First Stacked Card: Social Media Icons (Cards1) */}
          <MiniStackedCard initialIndex={socialIndex} ALL_CARDS={Cards1}/>
          
          {/* Second Stacked Card: Statistical Icons (StatsCards) */}
          <MiniStackedCard initialIndex={statsIndex} ALL_CARDS={StatsCards} />
        </div>
      </div>
    );
};


/* ----------------- MAIN SECTION ----------------- */
const CombinedPartnersSection = () => {
  const navigate = useNavigate();

  // This data array is primarily used for the auto-scrolling row of stats on the right.
  const statsData = [
    { number: "5+", label: "Years of Excellence", Icon: WorkshopIcon },
    { number: "40+", label: "Presence in countries", Icon: SoftwareTrainingIcon },
    { number: "10+", label: "Universities Collaboration", Icon: VirtualInternshipsIcon },
    { number: "20+", label: "Corporate Partners", Icon: DelegatesSensitizedIcon },
  ];

 const universityLogos = [
    { name: "Persian Gulf University", src: "/images/persian.png" },
    { name: "Lincoln Professional Academy", src: "/images/lincoln.png" },
    { name: "IIT Dhanbad", src: "/images/iit.png" },
    { name: "Petrodrill Well Control Institute", src: "/images/petrodrill.png" },
    { name: "University of Wyoming", src: "/images/5.png" },
  ];

  const corporateLogos = [
    { name: "Cvet", src: "/images/cvet.png" },
    { name: "Datavedik", src: "/images/datavedik.png" },
    { name: "Gein", src: "/images/gein.png" },
    { name: "Gems", src: "/images/gems.png" },
    { name: "Gots", src: "/images/gots.png" },
    { name: "Kiwi", src: "/images/kiwi.png" },
    { name: "OPXAI", src: "/images/opxai.png" },
    { name: "Manan", src: "/images/manan.png" },
    { name: "Rezlytix", src: "/images/rezlytix.png" },
    { name: "TechWysh", src: "/images/techwysh.png" },
  ];

  const experts = [
    { name: "Yogashri Pradhan", designation: "Chief Growth Officer | POX Ai", img: "/images/Yogashri.png" },
    { name: "Vinod Kumar Madem", designation: "Reservoir Engineering Expert", img: "/images/Vinod.png" },
    { name: "Yohanes Nuwara", designation: "Software Engineer at Whitson", img: "/images/Yohanes.png" },
    { name: "Mr. SivaKumar Babu", designation: "45+ years of E&P Experience", img: "/images/SivaKumar.png" },
    { name: "Sanjay Joshi", designation: "Drilling & Well Engineering Expert", img: "/images/Sanjay.png" },
    { name: "Samir Kale", designation: "Well Completion & Intervention Expert", img: "/images/SamirKale.png" },
  ];

  const topRowLogos = corporateLogos.slice(0, Math.ceil(corporateLogos.length / 2));
  const bottomRowLogos = corporateLogos.slice(Math.ceil(corporateLogos.length / 2));

  return (
    <div className="bg-white font-sans">
      {/* === Learn From Industry Experts (Unchanged) === */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl sm:text-6xl font-semibold text-black mb-10">
            Learn From Industry Experts
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll-left space-x-6 pb-4">
              {[...experts, ...experts].map((expert, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-xl p-4 w-52 flex-shrink-0 border border-gray-200 hover:shadow-lg transition"
                >
                  <img
                    src={expert.img}
                    alt={expert.name}
                    className="w-full h-56 object-cover rounded-lg mb-3"
                  />
                  <p className="font-semibold text-black text-base">{expert.name}</p>
                  <p className="text-black-600 text-sm mt-1">{expert.designation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              VIEW ALL
            </button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* === Stats Section with Left Sidebar === */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Auto-scrolling Cards (Social and Stats) */}
          <BigStackedBox />

          {/* Main Stats Auto Scrolling (Unchanged) */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100 flex-1 overflow-hidden">
            <div className="mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                10K+ Learners Have Reaped Benefits
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Over 10,000 participants from 40+ countries have benefited from our training programs.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex w-max animate-scroll-left space-x-6">
                {[...statsData, ...statsData].map(({ number, label, Icon }, i) => (
                  <div
                    key={i}
                    className="text-center p-6 border-2 border-blue-200 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 flex-shrink-0 w-60"
                  >
                    <Icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-extrabold text-gray-900">{number}</p>
                    <p className="text-sm text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}
      
      {/* === University Section (Unchanged) ===
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-black-600 tracking-wider uppercase">
              EARN CERTIFICATES FROM
            </p>
            <h2 className="mt-4 text-5xl sm:text-6xl font-semibold text-black tracking-tight whitespace-nowrap">
              Prestigious Universities
            </h2>
            <p className="mt-6 text-lg text-black-600">
              We partner with world-renowned universities so you earn certificates recognised globally.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {universityLogos.map((uni) => (
              <div key={uni.name} className="flex justify-center items-center">
                <img
                  src={uni.src}
                  alt={uni.name}
                  className="max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
{/* /* === University Section === */ }

<section className="py-12 sm:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-10">
    <div>
      <p className="text-2xl sm:text-3xl font-semibold text-black tracking-wide uppercase">
        EARN CERTIFICATES FROM
      </p>
      <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
        Prestigious Universities
      </h2>
      <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
        We collaborate with globally renowned universities to help you earn certificates recognized across industries worldwide.
      </p>
    </div>

    <div className="relative overflow-hidden w-full">
      <div className="flex w-max animate-scroll-left space-x-14">
        {[...universityLogos, ...universityLogos].map((uni, i) => (
          <div key={`${uni.name}-${i}`} className="flex flex-col justify-start items-center flex-shrink-0 w-72 text-center">
            <div className="h-40 flex items-center justify-center">
              <img src={uni.src} alt={uni.name} className="max-h-32 w-auto object-contain transition-transform duration-300 hover:scale-110" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800 h-6 flex items-center justify-center">
              {uni.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* --- */}

      {/* === Corporate Partners (Unchanged) === */}
      <section className="bg-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-semibold text-black">
              Our Corporate Partners
            </h2>
            <p className="text-black mt-4 text-xl font-medium">
              Trusted by leading global companies and institutions
            </p>
          </div>

          {/* Top Row */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex w-max animate-scroll-left">
              {[...topRowLogos, ...topRowLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-top-${i}`}
                  className="flex-shrink-0 w-72 flex justify-center items-center px-8 py-6"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-24 sm:h-28 w-auto object-contain transition-all duration-300 hover:scale-110 drop-shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll-right">
              {[...bottomRowLogos, ...bottomRowLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-bottom-${i}`}
                  className="flex-shrink-0 w-72 flex justify-center items-center px-8 py-6"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-24 sm:h-28 w-auto object-contain transition-all duration-300 hover:scale-110 drop-shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* === Animation Styles (Unchanged) === */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 25s linear infinite; }
        .animate-scroll-right { animation: scroll-right 25s linear infinite; }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default CombinedPartnersSection;