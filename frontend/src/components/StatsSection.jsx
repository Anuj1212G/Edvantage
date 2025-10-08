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
    { number: '300+', label: 'Workshops', Icon: WorkshopIcon },
    { number: '25+', label: 'Software Training', Icon: SoftwareTrainingIcon },
    { number: '10+', label: 'Virtual Internships', Icon: VirtualInternshipsIcon },
    { number: '20000+', label: 'Delegates Sensitized', Icon: DelegatesSensitizedIcon },
  ];

  const universityLogos = [
    { name: "UT Austin", src: "https://placehold.co/200x60/d1d5db/374151?text=UT+Austin" },
    { name: "Great Lakes", src: "https://placehold.co/200x60/d1d5db/374151?text=Great+Lakes" },
    { name: "Northwestern", src: "https://placehold.co/200x60/d1d5db/374151?text=Northwestern" },
    { name: "MIT IDSS", src: "https://placehold.co/200x60/d1d5db/374151?text=MIT+IDSS" },
    { name: "Deakin", src: "https://placehold.co/200x60/d1d5db/374151?text=Deakin" },
    { name: "IIT Bombay", src: "https://placehold.co/200x60/d1d5db/374151?text=IIT+Bombay" },
  ];

  const corporateLogos = [
    { name: "Dell", src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
    { name: "HP", src: "https://cdn.simpleicons.org/hp/0096D6" },
    { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Adobe", src: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100" },
    { name: "Infosys", src: "https://cdn.simpleicons.org/infosys/0078B8" },
    { name: "Accenture", src: "https://cdn.simpleicons.org/accenture/A100FF" },
    { name: "Maersk", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/1280px-Maersk_Group_Logo.svg.png" },
    { name: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Intel", src: "https://cdn.simpleicons.org/intel/0071C5" },
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">20K+ Learners Have Reaped Benefits</h2>
              <p className="mt-4 text-lg text-gray-600">Over 20,000 professionals from 100+ countries have benefited from our training programs.</p>
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
              {/* <button className="mt-8 group inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                View All Universities <ArrowRightIcon className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </button> */}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
              {universityLogos.map((uni, index) => (
                <div key={uni.name} className="flex justify-center items-center fade-in-up" style={{ animationDelay: `${100 + index * 100}ms`, opacity: 0 }}>
                  <img src={uni.src} alt={uni.name} className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Top-Tier Companies Section with NON-STOP Scroller --- */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Join Great Learning graduates at top-tier companies</h2>
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
