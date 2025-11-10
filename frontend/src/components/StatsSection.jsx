import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";
import { PiUsersThreeBold } from "react-icons/pi";

/* ----------------- ICON COMPONENTS ----------------- */
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

/* ----------------- DATA ARRAYS ----------------- */
const Cards1 = [
  {
    icon: <FaLinkedin className="text-[#0A66C2] text-4xl" />,
    value: "14000+",
    label: "LinkedIn Followers",
  },
  {
    icon: <FaYoutube className="text-[#FF0000] text-4xl" />,
    value: "2000+",
    label: "YouTube Subscribers",
  },
  {
    icon: <FaInstagram className="text-[#E1306C] text-4xl" />,
    value: "2000+",
    label: "Instagram Followers",
  },
  {
    icon: <FaTelegram className="text-blue-600 text-4xl" />,
    value: "2000+",
    label: "Telegram Subscribers",
  },
];

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
/* CHANGED: behind cards now have reduced height, reduced vertical padding and smaller text */
const MiniStackedCard = ({ initialIndex = 0, ALL_CARDS = [] }) => {
  const [index, setIndex] = useState(initialIndex);
  const timerRef = React.useRef(null);

  useEffect(() => {
    if (ALL_CARDS.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % ALL_CARDS.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [ALL_CARDS.length]);

  // Visual tuning constants
  const COUNT = ALL_CARDS.length;
  const BASE_CARD_WIDTH = 360; // front card width
  const FRONT_CARD_HEIGHT = 110; // front card height
  const HEIGHT_STEP = 80; // how much shorter each deeper card becomes
  const VERTICAL_STEP = 36; // vertical offset between layers
  const WIDTH_STEP = 0.14; // width reduction per layer
  const SCALE_STEP = 0.01; // slight scale for depth
  const RADIUS = 14;
  const SHADOW = "0 14px 30px rgba(15,23,42,0.08)";

  const maxShift = (COUNT > 0 ? COUNT - 1 : 0) * VERTICAL_STEP;
  const containerHeight = maxShift + FRONT_CARD_HEIGHT + 24;
  const BASE_TOP = 8;

  return (
    <div
      style={{
        width: BASE_CARD_WIDTH + 80,
        display: "flex",
        justifyContent: "center",
        padding: "12px 0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: BASE_CARD_WIDTH,
          height: containerHeight,
          overflow: "visible",
        }}
      >
        {ALL_CARDS.map((card, i) => {
          const relative = (i - index + COUNT) % COUNT; // 0 = front
          const isFront = relative === 0;
          const isVisibleLayer = relative < 4;

          // compute height for this layer (front highest)
          const cardHeight = Math.max(48, FRONT_CARD_HEIGHT - relative * HEIGHT_STEP);

          // vertical stacking (back cards move up)
          const top = BASE_TOP + maxShift - relative * VERTICAL_STEP;

          // width progression
          const width = Math.max(
            140,
            Math.round(BASE_CARD_WIDTH * (1 - relative * WIDTH_STEP))
          );

          // reduce padding top/bottom for deeper cards
          const verticalPadding = Math.max(6, 18 - relative * 6); // px

          // text sizes shrink for deeper layers
          const titleSize = isFront ? 30 : Math.max(14, 30 - relative * 8);
          const subtitleSize = isFront ? 16 : Math.max(11, 16 - relative * 3);

          // icon shrink slightly for deeper cards
          const iconScale = isFront ? 1 : Math.max(0.6, 1 - relative * 0.12);

          const scale = 1 - relative * SCALE_STEP;
          const zIndex = 1000 - relative;
          const opacity = isVisibleLayer ? 1 : 0.32;

          const defaultBorderColor = "rgba(0,0,0,0.08)";
          const borderColor = isFront ? (card.color || "#0ea5e9") : defaultBorderColor;
          const borderWidth = isFront ? 2 : 1;

          const transition =
            "top 480ms cubic-bezier(.2,.9,.25,1), transform 480ms, opacity 300ms, width 480ms, height 480ms, padding 300ms";

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `calc(50% - ${width / 2}px)`,
                top: `${top}px`,
                width: `${width}px`,
                height: `${cardHeight}px`,
                transform: `scale(${scale})`,
                zIndex,
                opacity,
                transition,
                pointerEvents: isFront ? "auto" : "none",
                transformOrigin: "center center",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: RADIUS,
                  background: "#fff",
                  border: `${borderWidth}px solid ${borderColor}`,
                  boxShadow: SHADOW,
                  display: "flex",
                  alignItems: "center",
                  padding: `${verticalPadding}px 18px`, // vertical padding responsive to layer
                  overflow: "hidden",
                }}
                className="rounded-xl"
              >
                {/* Icon area (scaled down on deeper layers) */}
                <div
                  className="flex-shrink-0 mr-4 flex items-center justify-center"
                  style={{
                    transform: `scale(${iconScale})`,
                    transformOrigin: "center center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                  }}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, overflow: "hidden" }}>
                  <div
                    style={{
                      fontSize: titleSize,
                      fontWeight: 900,
                      color: "#111827",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {card.value || card.title}
                  </div>
                  <div
                    style={{
                      marginTop: 4,
                      color: "#6b7280",
                      fontSize: subtitleSize,
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {card.label || card.subtitle}
                  </div>
                </div>

                {/* Decorative depth layers for front card */}
                {isFront && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        top: 0.5,
                        left: 0.5,
                        right: 0.5,
                        bottom: 0.5,
                        borderRadius: RADIUS,
                        border: "1px solid rgba(0,0,0,0.06)",
                        zIndex: -10,
                        transform: "translateY(0.5px)",
                        background: "#f8fafc",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 1,
                        left: 1,
                        right: 1,
                        bottom: 1,
                        borderRadius: RADIUS,
                        border: "1px solid rgba(0,0,0,0.03)",
                        zIndex: -20,
                        transform: "translateY(1px)",
                        background: "#f1f5f9",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ----------------- BIG STACKED BOX ----------------- */
/* Now returns two separate stacked boxes stacked vertically (one above the other),
   with headings removed and reduced padding/margins */
const BigStackedBox = () => {
  return (
    <div className="flex flex-col items-center gap-3"> {/* smaller gap */}
      {/* Top small card box */}
      <div
        className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 overflow-hidden" // p-4 instead of p-6
        style={{ width: 420, minHeight: 200 }} // reduced minHeight
      >
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <MiniStackedCard initialIndex={0} ALL_CARDS={Cards1} />
        </div>
      </div>

      {/* Bottom small card box */}
      <div
        className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 overflow-hidden" // p-4 instead of p-6
        style={{ width: 420, minHeight: 320 }} // reduced minHeight
      >
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <MiniStackedCard initialIndex={1} ALL_CARDS={StatsCards} />
        </div>
      </div>
    </div>
  );
};

/* ----------------- MAIN COMPONENT ----------------- */
const CombinedPartnersSection = () => {
  const navigate = useNavigate();

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

  const topRowLogos = corporateLogos.slice(0, corporateLogos.length / 2);
  const bottomRowLogos = corporateLogos.slice(corporateLogos.length / 2);

  return (
    <div className="bg-white font-sans">
      {/* === Learn From Industry Experts === */}
       <section className="bg-gray-50 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl sm:text-6xl font-semibold text-black mb-8">
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

          {/* Slightly Smaller VIEW ALL Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold px-12 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              VIEW ALL
            </button>
          </div>
        </div>
      </section>


      {/* === Stats Section === */}
    <section className="bg-gray-50 py-10 sm:py-14">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
    <BigStackedBox />

    <div className="bg-white p-10 sm:p-14 rounded-2xl shadow-2xl border border-gray-100 flex-1 overflow-hidden h-[635px]">
      <div className="mb-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Our Global Reach in Numbers
        </h2>
        <p className="mt-5 text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          <strong>10,000+ Professionals Empowered Worldwide</strong> <br />
          Trusted by learners across <strong>40+ countries</strong>, our programs
          have been shaping global talent for over <strong>5 years</strong> of
          excellence.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-scroll-left space-x-10">
          {[...statsData, ...statsData].map(({ number, label, Icon }, i) => (
            <div
              key={i}
              className="text-center p-10 border-4 border-blue-300 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 flex-shrink-0 w-72"
            >
              <Icon className="w-16 h-16 text-blue-600 mx-auto mb-5" />
              <p className="text-5xl font-extrabold text-gray-900">{number}</p>
              <p className="text-lg text-gray-600 mt-2 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* === University Section === */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-10">
          <div>
            <p className="text-2xl sm:text-3xl font-semibold text-black tracking-wide uppercase">
              EARN CERTIFICATES FROM
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
              Prestigious Universities
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              We collaborate with globally renowned universities to help you earn certificates recognized across industries worldwide.
            </p>
          </div>

          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-scroll-left space-x-14">
              {[...universityLogos, ...universityLogos].map((uni, i) => (
                <div
                  key={`${uni.name}-${i}`}
                  className="flex flex-col justify-start items-center flex-shrink-0 w-72 text-center"
                >
                  <div className="h-40 flex items-center justify-center">
                    <img
                      src={uni.src}
                      alt={uni.name}
                      className="max-h-32 w-auto object-contain transition-transform duration-300 hover:scale-110"
                    />
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

      {/* === Corporate Partners === */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-5xl sm:text-6xl font-semibold text-black">
              Our Corporate Partners
            </h2>
            <p className="text-black mt-3 text-xl font-medium">
              Trusted by leading global companies and institutions
            </p>
          </div>

          {/* Top Row */}
          <div className="relative overflow-hidden mb-10">
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

      {/* === Animations === */}
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
