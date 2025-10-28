import React from 'react';

const successStories = [
    {
        id: '1',
        name: 'Ali Haris',
        position: 'Intern at Rezlytix',
        quote: "The course was very helpful for me. The instructors and the entire team of EDvantage were very helpful and the course was very informative. I encourage everyone to take a course from EDvantage.",
        image: '/images/Suss1.png',
    },
    {
        id: '2',
        name: 'Sheily Mukherjee',
        position: 'Intern at Rezlytix',
        quote: "The training program was very well conducted and taught important topics that helped broaden our knowledge. I am really grateful to EDvantage for providing this opportunity to us.",
        image: '/images/Suss2.png',
    },
    {
        id: '3',
        name: 'Ashish',
        position: 'Placed at ONGC',
        quote: "EDvantage India has provided me with a number of training opportunities. The genuine casing design of our well based on the available real offset field data was the best aspect of this internship.",
        image: '/images/Suss3.png',
    },
    {
        id: '4',
        name: 'Soumya Krishna',
        position: 'Placed at Cairn Oil & Gas',
        quote: "This wonderful training experience enhanced my technical skills and also aided me during my campus placement. The Edvantage India team was very supportive throughout.",
        image: '/images/Suss4.png',
    },
    {
        id: '5',
        name: 'Tushar Sirohi',
        position: 'Placed at Cairn Oil & Gas',
        quote: "This workshop on directional drilling really helped me understand various concepts which was quite helpful during my interview as almost 30-40% of questions were based on it.",
        image: '/images/Suss5.png',
    },
    {
        id: '6',
        name: 'Rajveer Choudhary',
        position: 'Business Analyst, Tech Mahindra',
        quote: "It would not have been possible without the assistance and guidance I received from the 'Data Science & Its Application in Oil & Gas' course. I was able to land this job quickly and smoothly.",
        image: '/images/Suss6.png',
    },
    {
        id: '7',
        name: 'Navan Kumar Sahu',
        position: 'Intern at Rezlytix',
        quote: "I am happy to share that I have been selected for an internship with RezLytix, and this was possible because of the course that I have undergone with EDvantage India. A big thumbs up from my side!",
        image: '/images/Suss7.png',
    },
    {
        id: '8',
        name: 'Jyotirmoyi Gorai',
        position: 'Intern at Rezlytix',
        quote: "This training program helped me build a lot of sound knowledge in the field of exploration and simulation, and it helped me get a chance of doing an internship with RezLytix company.",
        image: '/images/Suss8.png',
    },
    {
        id: '9',
        name: 'Prashant Kumar',
        position: 'Geophysicist in Lagos, Nigeria',
        quote: "This course is excellent and quite helpful for future professional development. If someone wants to learn about data science in oil and gas, I will without a doubt recommend it.",
        image: '/images/Suss9.png',
    },
];

const hiringPartners = [
    { name: 'Shell', logoUrl: '/images/opxai.png' },
    { name: 'Chevron', logoUrl: '/images/persian.png' },
    { name: 'Baker Hughes', logoUrl: '/images/petrodrill.png' },
    { name: 'Schlumberger', logoUrl: '/images/kiwi.png' },
    { name: 'ExxonMobil', logoUrl: '/images/gein.png' },
    { name: 'Halliburton', logoUrl: '/images/gots.png' },
];

const stats = [
    { value: '5+', label: 'Years of Excellence' },
    { value: '5000+', label: 'Professionals Trained' },
    { value: '10+', label: 'University Collaborations' },
    { value: '20+', label: 'Corporate Partners' },
    { value: '10+', label: 'Countries Reached' },
];

const PlacementsSuccess = () => {
    return (
        <div className="bg-white font-sans">

            {/* Header Section */}
            <header className="text-center py-24 px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Career Success & Placements
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Discover how our industry-focused programs have empowered professionals to achieve their career goals.
                </p>
            </header>

            {/* Statistics Section */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                        Our Global Impact in Numbers
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <span className="text-5xl font-bold text-blue-600">{stat.value}</span>
                                <p className="mt-3 text-md text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* Testimonials Section */}
{/* Testimonials Section */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
      What Our Graduates Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {successStories.map((story) => (
        <div
          key={story.id}
          className="relative bg-white border border-gray-100 rounded-3xl p-10 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <span className="absolute top-5 left-7 text-8xl text-gray-100 font-serif select-none">“</span>

          <div className="pt-14 flex-grow">
            <blockquote className="text-gray-700 leading-relaxed text-[1.05rem]">
              {story.quote}
            </blockquote>
          </div>

          <div className="flex items-center mt-10 pt-8 border-t border-gray-100">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-blue-200 flex justify-center items-center bg-gray-50">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="ml-5">
              <p className="font-bold text-gray-800 text-xl">{story.name}</p>
              <p className="text-sm text-gray-500">{story.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



            {/* Hiring Partners Section */}
          <section className="bg-gray-50 py-24">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
      Our Graduates Are Hired By Industry Leaders
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10 md:gap-x-20">
      {hiringPartners.map((partner) => (
        <img
          key={partner.name}
          src={partner.logoUrl}
          alt={`${partner.name} logo`}
          className="h-20\ md:h-20 object-contain transition-all duration-300 drop-shadow-sm hover:scale-110"
        />
      ))}
    </div>
  </div>
</section>


        </div>
    );
};

export default PlacementsSuccess;
