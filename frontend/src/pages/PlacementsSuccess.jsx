import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import "../index.css";

/* ---------- TOP SUCCESS STORIES (CARD GRID) ---------- */
const successStories = [
  {
    id: "1",
    name: "Ali Haris",
    position: "Intern at Rezlytix",
    quote:
      "The course was very helpful for me. The instructors and the entire team of EDvantage were very helpful and the course was very informative. I encourage everyone to take a course from EDvantage.",
    image: "/images/Suss1.png",
  },
  {
    id: "2",
    name: "Sheily Mukherjee",
    position: "Intern at Rezlytix",
    quote:
      "The training program was very well conducted and taught important topics that helped broaden our knowledge. I am really grateful to EDvantage for providing this opportunity to us.",
    image: "/images/Suss2.png",
  },
  {
    id: "3",
    name: "Ashish",
    position: "Placed at ONGC",
    quote:
      "EDvantage India has provided me with a number of training opportunities. The genuine casing design of our well based on the available real offset field data was the best aspect of this internship.",
    image: "/images/Suss5.png",
  },
  {
    id: "4",
    name: "Soumya Krishna",
    position: "Placed at Cairn Oil & Gas",
    quote:
      "This wonderful training experience enhanced my technical skills and also aided me during my campus placement. The Edvantage India team was very supportive throughout.",
    image: "/images/Suss6.png",
  },
  {
    id: "5",
    name: "Tushar Sirohi",
    position: "Placed at Cairn Oil & Gas",
    quote:
      "This workshop on directional drilling really helped me understand various concepts which was quite helpful during my interview as almost 30-40% of questions were based on it.",
    image: "/images/Suss7.png",
  },
  {
    id: "6",
    name: "Rajveer Choudhary",
    position: "Business Analyst, Tech Mahindra",
    quote:
      "It would not have been possible without the assistance and guidance I received from the 'Data Science & Its Application in Oil & Gas' course. I was able to land this job quickly and smoothly.",
    image: "/images/Rajveer.png",
  },
  {
    id: "7",
    name: "Navan Kumar Sahu",
    position: "Intern at Rezlytix",
    quote:
      "I am happy to share that I have been selected for an internship with RezLytix, and this was possible because of the course that I have undergone with EDvantage India. A big thumbs up from my side!",
    image: "/images/Suss4.png",
  },
  {
    id: "8",
    name: "Jyotirmoyi Gorai",
    position: "Intern at Rezlytix",
    quote:
      "This training program helped me build a lot of sound knowledge in the field of exploration and simulation, and it helped me get a chance of doing an internship with RezLytix company.",
    image: "/images/Suss8.png",
  },
  {
    id: "9",
    name: "Prashant Kumar",
    position: "Geophysicist in Lagos, Nigeria",
    quote:
      "This course is excellent and quite helpful for future professional development. If someone wants to learn about data science in oil and gas, I will without a doubt recommend it.",
    image: "/images/Suss9.png",
  },
];

/* ---------- HIRING PARTNERS ---------- */
const hiringPartners = [
  { name: "Shell", logoUrl: "/images/opxai.png" },
  { name: "Chevron", logoUrl: "/images/persian.png" },
  { name: "Baker Hughes", logoUrl: "/images/petrodrill.png" },
  { name: "Schlumberger", logoUrl: "/images/kiwi.png" },
  { name: "ExxonMobil", logoUrl: "/images/gein.png" },
  { name: "Halliburton", logoUrl: "/images/gots.png" },
];

/* ---------- STATS (WITH + IN DISPLAY) ---------- */
const stats = [
  { value: "5+", label: "Years of Excellence" },
  { value: "5000+", label: "Professionals Trained" },
  { value: "10+", label: "University Collaborations" },
  { value: "20+", label: "Corporate Partners" },
  { value: "10+", label: "Countries Reached" },
];

/* ---------- COUNT-UP COMPONENT (for stats) ---------- */
const CountUp = ({ end, duration = 1500, start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return value.toLocaleString();
};

/* ---------- BOTTOM SCROLLING TESTIMONIALS (allTestimonials) ---------- */
const allTestimonials = [
  {
    name: "Tushar Sirohi",
    handle: "Placed at Cairn Oil & Gas",
    text: "Trainings on Well Planning, Engineering and Directional Drilling from Edvantage gave me strong core knowledge. Almost 30–40% of my interview questions were based on directional drilling covered in the workshop.",
    rating: 5,
    image: "/images/TusharSirohi.png",
  },
  {
    name: "Jyotirmoyi Gorai",
    handle: "Intern at Rezlytix",
    text: "The Sequence Stratigraphy in the Era of Digitalization program built my knowledge in exploration and simulation. It helped me earn an internship opportunity with RezLytix.",
    rating: 5,
    image: "/images/JyotirmoyiGorai.png",
  },
  {
    name: "Imtiaz Ahmed",
    handle: "MS Petroleum Engineering, Khazar University",
    text: "The training on Python, machine learning and deep learning for the petroleum industry was well structured and very relevant. It created a clear path for me towards petroleum data science.",
    rating: 5,
    image: "/images/ImtiazAhmed.png",
  },
  {
    name: "Davoud Ghozatlou",
    handle: "Condition Monitoring Engineer, Gas Refinery (Iran)",
    text: "The course content matched the real needs of modern oil and gas industries. It was conducted in a disciplined, professional way and I found it very useful and effective.",
    rating: 5,
    image: "/images/DavoudGhozatlou.png",
  },
  {
    name: "Prashant Kumar",
    handle: "Geophysicist, Lagos (E&P Company)",
    text: "The three-month data science course covered Python, databases, ML, DL and statistics in depth. It was extremely informative and very helpful for my professional growth.",
    rating: 5,
    image: "/images/PrashantKumar.png",
  },
  {
    name: "Ketan Bhisekar",
    handle: "Mud Logger",
    text: "Coming back to coding after a long gap was smooth because of this course. The training quality was exceptional and motivated me to pursue M.Tech in Petroleum Engineering and a career in data science.",
    rating: 5,
    image: "/images/KetanBhisekar.png",
  },
  {
    name: "Syed Suhail Ahmed",
    handle: "Student, Presidency University",
    text: "As a fresher, the data science course with real industry project examples helped me a lot. The faculty shared practical workflows used in the industry, which is very helpful for beginners.",
    rating: 5,
    image: "/images/SyedSuhailAhmed.png",
  },
  {
    name: "Sahil Vora",
    handle: "B.Tech, PDEU Gandhinagar",
    text: "The Data Science & its Application in Oil & Gas course was comprehensive and easy to follow. Hands-on projects with Python made the learning very practical and useful for both studies and career.",
    rating: 5,
    image: "/images/SahilVora.png",
  },
  {
    name: "Hossein Rashidi",
    handle: "CMMS Engineer, Gas Refinery (Iran)",
    text: "The data science analysis course was very useful and profitable for me. It inspired me to apply data mining in my maintenance work and I happily recommend it to my colleagues.",
    rating: 5,
    image: "/images/HosseinRashidi.png",
  },
  {
    name: "Muhammad Yunus",
    handle: "MS Geoscience, National Dong Hwa University",
    text: "Every session of the data science training was insightful. I always learned something new using Python, and the training quality and Edvantage’s support were excellent.",
    rating: 5,
    image: "/images/MuhammadYunus.png",
  },
  {
    name: "Mahdi",
    handle: "Senior Petroleum Engineering Student, University of Basrah",
    text: "The program was full of real-industry assignments and problem-solving exercises. It started from zero and helped me grow into a confident learner without prior experience.",
    rating: 5,
    image: "/images/Mahdi.png",
  },
];

/* ✅ Dynamically split into 3 columns (animations untouched) */
const leftColumn = allTestimonials.filter((_, idx) => idx % 3 === 0);
const middleColumn = allTestimonials.filter((_, idx) => idx % 3 === 1);
const rightColumn = allTestimonials.filter((_, idx) => idx % 3 === 2);

/* ---------- STAR RATING COMPONENT ---------- */
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Star
          key={i}
          style={{
            width: 20,
            height: 20,
            fill: "#FACC15",
            color: "#FACC15",
          }}
        />
      );
    } else {
      stars.push(
        <Star
          key={i}
          style={{ width: 20, height: 20, color: "#D1D5DB" }}
        />
      );
    }
  }
  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        marginTop: 8,
        marginBottom: 4,
        alignItems: "center",
      }}
    >
      {stars}
    </div>
  );
};

/* ---------- COLUMN COMPONENT (SCROLLING) ---------- */
const Column = ({ items, direction = "up" }) => {
  const getInitials = (name) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("");

  return (
    <div className="ts-column">
      <div
        className={`ts-column-inner ${
          direction === "down" ? "ts-scroll-down" : "ts-scroll-up"
        }`}
      >
        {[0, 1].map((dup) =>
          items.map((item, idx) => (
            <article className="ts-card" key={`${dup}-${idx}`}>
              <p className="ts-card-text">“{item.text}”</p>

              {item.rating && <StarRating rating={item.rating} />}

              <div className="ts-card-footer">
                <div
                  className="ts-avatar"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "9999px",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    fontSize: 18,
                  }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    getInitials(item.name)
                  )}
                </div>
                <div>
                  <div className="ts-card-name">{item.name}</div>
                  <div className="ts-card-handle">{item.handle}</div>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

/* ---------- MAIN PAGE COMPONENT ---------- */
const PlacementsSuccess = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  // Trigger count-up when stats section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white text-center py-20 px-6 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Career Success & Placements
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
          Discover how our industry-focused programs have empowered professionals
          to achieve their career goals.
        </p>
      </header>

      {/* Statistics Section with COUNT-UP */}
      <section className="bg-white py-16 border-b border-slate-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
            Our Global Impact in Numbers
          </h2>
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 text-center"
          >
            {stats.map((stat) => {
              const numericValue = parseInt(stat.value.replace("+", ""));
              return (
                <div
                  key={stat.label}
                  className="bg-slate-50 rounded-2xl px-4 py-6 shadow-sm border border-slate-400"
                >
                  <span className="text-4xl md:text-5xl font-extrabold text-blue-600">
                    <CountUp end={numericValue} start={statsInView} />+
                  </span>
                  <p className="mt-3 text-sm md:text-base text-slate-600">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Card Testimonials Section (What Our Graduates Say) */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            What Our Graduates Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="relative bg-white border border-slate-400 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 shadow-md"
              >
                {/* Quote mark – now more visible */}
                <span className="absolute top-4 left-5 text-5xl text-blue-500 font-serif select-none">
                  “
                </span>

                <div className="pt-8 flex-grow">
                  <blockquote className="text-slate-700 leading-relaxed text-[0.98rem]">
                    {story.quote}
                  </blockquote>
                </div>

                <div className="flex items-center mt-8 pt-6 border-t border-slate-300">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-blue-400 flex justify-center items-center bg-slate-50">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-slate-900 text-lg">
                      {story.name}
                    </p>
                    <p className="text-xs md:text-sm text-slate-500">
                      {story.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Columns Testimonials Section (WITH HANGER, UNCHANGED) */}
      <section className="ts-section bg-white py-16 border-y border-slate-200">
        <div className="ts-heading-wrapper mb-10">
          <h1 className="ts-heading text-slate-900">Where Learners Shine</h1>

          {/* Triangle hanger with pivot + two strings */}
          <div className="ts-hanger">
            <div className="ts-hanger-pivot" />
            <div className="ts-hanger-line ts-hanger-line-left" />
            <div className="ts-hanger-line ts-hanger-line-right" />
            <div className="ts-hanger-tag">
              <span>What our learners say about us</span>
            </div>
          </div>
        </div>

        <div className="ts-columns-wrapper max-w-6xl mx-auto">
          <Column items={leftColumn} direction="up" />
          <Column items={middleColumn} direction="down" />
          <Column items={rightColumn} direction="up" />
        </div>
      </section>

      {/* Hiring Partners Section */}
    <section className="bg-slate-100 py-16">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
      Our Graduates Are Hired By Industry Leaders
    </h2>
    <p className="text-center text-sm md:text-base text-slate-600 mb-10">
      Companies across the globe trust our learners to perform in real-world roles.
    </p>

    {/* Marquee wrapper */}
    <div className="relative overflow-hidden">
      <div className="logo-marquee flex items-center gap-x-12">
        {[...hiringPartners, ...hiringPartners].map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            className="bg-white rounded-2xl px-6 py-4 border border-slate-400 shadow-md flex items-center justify-center min-w-[8rem] md:min-w-[9rem] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500"
          >
            <img
              src={partner.logoUrl}
              alt={`${partner.name} logo`}
              className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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

export default PlacementsSuccess;
