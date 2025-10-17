import React from 'react';

// --- SVG Icon Components ---
const WorkshopIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18h.01"></path><path d="M12 15h.01"></path><path d="M12 12h.01"></path><path d="M8 18h.01"></path><path d="M8 15h.01"></path><path d="M8 12h.01"></path><path d="M16 18h.01"></path><path d="M16 15h.01"></path></svg>
);
const SoftwareTrainingIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="m12 8-2 4h4l-2 4"></path></svg>
);
const VirtualInternshipsIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v5"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M5.44 19.33a3.5 3.5 0 1 0 0-5.66 3.5 3.5 0 0 0 0 5.66z"></path><path d="M5.44 21a2 2 0 0 0 2.12-1.5"></path><path d="M3.5 14.5a2 2 0 0 1 2-2h.06"></path></svg>
);
const DelegatesSensitizedIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path><path d="M21.5 14.5a2.5 2.5 0 0 0-2.5-2.5M19 14.5a2.5 2.5 0 0 1 2.5 2.5"></path><path d="m21.5 19.5-2-2.5"></path></svg>
);
const ArrowRightIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

const CombinedPartnersSection = () => {
  const statsData = [
    { number: '5+', label: 'Years of Excellence', Icon: WorkshopIcon },
    { number: '10+', label: 'Presence in countries', Icon: SoftwareTrainingIcon },
    { number: '10+', label: 'Universities Collaboration', Icon: VirtualInternshipsIcon },
    { number: '20+', label: 'Corporate Partners', Icon: DelegatesSensitizedIcon },
  ];

  const universityLogos = [
    // For files in the public folder use an absolute path starting with '/'
    // e.g. public/images/persian-gulf-university.png -> src: '/images/persian-gulf-university.png'
    { name: "Persian Gulf University", src: "/images/persian.png" },
    { name: "Lincoln Professional Academy", src: "/images/lincoln.png" },
    { name: "IIT Dhanbad", src: "/images/iit.png" },
    { name: "Petrodrill Well Control Institute", src: "/images/petrodrill.png" },
    // { name: "Deakin", src: "https://placehold.co/200x60/d1d5db/374151?text=Deakin" },
    // { name: "IIT Bombay", src: "https://placehold.co/200x60/d1d5db/374151?text=IIT+Bombay" },
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

  const topRowLogos = corporateLogos.slice(0, Math.ceil(corporateLogos.length / 2));
  const bottomRowLogos = corporateLogos.slice(Math.ceil(corporateLogos.length / 2));

  return (
    <div className="bg-white font-sans">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-up { animation: fadeInUp 0.7s ease-out forwards; }
        @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 20s linear infinite; }
        .animate-scroll-right { animation: scroll-right 20s linear infinite; }
      `}</style>

      {/* --- Main Stats Section --- */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">10K+ Learners Have Reaped Benefits</h2>
              <p className="mt-4 text-lg text-gray-600">Over 10,000 professionals from 10+ countries have benefited from our training programs.</p>
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

      {/* --- Prestigious Universities Section --- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up" style={{ opacity: 0 }}>
              <p className="text-sm font-semibold text-purple-600 tracking-wider uppercase">EARN CERTIFICATES FROM</p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Prestigious universities</h2>
              <p className="mt-6 text-lg text-gray-600">We partner with world-renowned universities so you earn certificates recognised by organisations across the globe.</p>
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
                  className="max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                ))}
              </div>
              </div>
            </div>
            </section>
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Corporate Partners</h2>
          </div>
          <div className="mt-12 space-y-8">
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-scroll-left">
                {[...topRowLogos, ...topRowLogos].map((company, index) => (
                  <div key={`${company.name}-top-${index}`} className="flex-shrink-0 w-64 flex justify-center items-center p-4">
                    <img src={company.src} alt={company.name} className="max-h-10 w-auto object-contain transition-transform duration-300 hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-scroll-right">
                {[...bottomRowLogos, ...bottomRowLogos].map((company, index) => (
                  <div key={`${company.name}-bottom-${index}`} className="flex-shrink-0 w-64 flex justify-center items-center p-4">
                    <img src={company.src} alt={company.name} className="max-h-10 w-auto object-contain transition-transform duration-300 hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedPartnersSection;
