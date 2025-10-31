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
const MiniStackedCard = ({ initialIndex, ALL_CARDS }) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ALL_CARDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ALL_CARDS.length]);

  return (
    <div className="relative w-[280px] h-[100px] flex items-center justify-center">
      {ALL_CARDS.map((card, i) => {
        const offset = (i - index + ALL_CARDS.length) % ALL_CARDS.length;
        const visible = offset < 3;

        return (
          <div
            key={i}
            className={`absolute w-[260px] h-[90px] bg-white rounded-xl border border-gray-900/50 shadow-xl flex items-center justify-start px-5 transition-all duration-700 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${offset * 6}px) scale(${1 - offset * 0.03})`,
              zIndex: ALL_CARDS.length - offset,
            }}
          >
            <div className="flex-shrink-0 mr-4">{card.icon}</div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-3xl font-extrabold text-gray-900 leading-none">
                {card.value}
              </h3>
              <p className="text-gray-600 text-base mt-1">{card.label}</p>
            </div>

            {offset === 0 && (
              <>
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

/* ----------------- BIG STACKED BOX ----------------- */
const BigStackedBox = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 w-[320px] h-[390px] overflow-hidden">
      <div className="flex flex-col gap-8 items-center justify-center h-full">
        <MiniStackedCard initialIndex={0} ALL_CARDS={Cards1} />
        <MiniStackedCard initialIndex={1} ALL_CARDS={StatsCards} />
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
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100 flex-1 overflow-hidden">
            <div className="mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                10K+ Learners Have Reaped Benefits
              </h2>
              <p className="mt-3 text-lg text-gray-600">
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
