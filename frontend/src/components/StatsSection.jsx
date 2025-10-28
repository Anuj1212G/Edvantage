import React from "react";

// --- SVG Icons ---
const WorkshopIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <path d="M12 18h.01"></path>
    <path d="M12 15h.01"></path>
    <path d="M12 12h.01"></path>
    <path d="M8 18h.01"></path>
    <path d="M8 15h.01"></path>
    <path d="M8 12h.01"></path>
    <path d="M16 18h.01"></path>
    <path d="M16 15h.01"></path>
  </svg>
);

const SoftwareTrainingIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M8 21h8"></path>
    <path d="M12 17v4"></path>
    <path d="m12 8-2 4h4l-2 4"></path>
  </svg>
);

const VirtualInternshipsIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
    <path d="M5.44 21a2 2 0 0 0 2.12-1.5"></path>
    <path d="M3.5 14.5a2 2 0 0 1 2-2h.06"></path>
  </svg>
);

const DelegatesSensitizedIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="5"></circle>
    <path d="M20 21a8 8 0 0 0-16 0"></path>
    <path d="M21.5 14.5a2.5 2.5 0 0 0-2.5-2.5M19 14.5a2.5 2.5 0 0 1 2.5 2.5"></path>
    <path d="m21.5 19.5-2-2.5"></path>
  </svg>
);

const CombinedPartnersSection = () => {
  const statsData = [
    { number: "5+", label: "Years of Excellence", Icon: WorkshopIcon },
    { number: "10+", label: "Presence in Countries", Icon: SoftwareTrainingIcon },
    { number: "10+", label: "University Collaborations", Icon: VirtualInternshipsIcon },
    { number: "20+", label: "Corporate Partners", Icon: DelegatesSensitizedIcon },
  ];

  const universityLogos = [
    { name: "Persian Gulf University", src: "/images/persian.png" },
    { name: "Lincoln Professional Academy", src: "/images/lincoln.png" },
    { name: "IIT Dhanbad", src: "/images/iit.png" },
    { name: "Petrodrill Well Control Institute", src: "/images/petrodrill.png" },
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

  const topRowLogos = corporateLogos.slice(0, 5);
  const bottomRowLogos = corporateLogos.slice(5);

  return (
    <div className="bg-white font-sans">
      {/* --- Animations --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { animation: fadeInUp 0.7s ease-out forwards; }

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
      `}</style>

      {/* --- Stats Section --- */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                10K+ Learners Have Reaped Benefits
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Over 10,000 professionals from 10+ countries have benefited from our training programs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map(({ number, label, Icon }, index) => (
                <div
                  key={label}
                  className="text-center p-6 border-2 border-blue-200 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
                >
                  <Icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-extrabold text-gray-900">{number}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- University Section --- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up" style={{ opacity: 0 }}>
              <p className="text-sm font-semibold text-purple-600 tracking-wider uppercase">
                Earn Certificates From
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                Prestigious Universities
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We partner with world-renowned universities so you earn certificates recognised by organisations across the globe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {universityLogos.map((uni, index) => (
                <div
                  key={uni.name}
                  className="flex justify-center items-center fade-in-up"
                  style={{ animationDelay: `${100 + index * 100}ms`, opacity: 0 }}
                >
                  <img
                    src={uni.src}
                    alt={uni.name}
                    className="max-h-28 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Corporate Partners Section --- */}
      <section className="bg-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Our Corporate Partners
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
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
    </div>
  );
};

export default CombinedPartnersSection;
