// AboutUs.jsx
import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Globe, Target, Eye, Heart, Linkedin, Clock, BookOpen } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mentorsRef = useRef(null);
  const videoRef = useRef(null); // Reference for the video element
  const [highlight, setHighlight] = useState(false);

  const ourStoryText = (
    <>
      <p>
        In 2020, <span className="font-semibold text-teal-600">Edvantage Learning</span> was born from a simple yet powerful idea — to <strong>bridge the gap between academia and industry</strong> in the energy sector.
      </p>
      <p>
        Our founder saw a challenge that many professionals and students faced: while academic programs offered theoretical knowledge, the fast-paced energy industry demanded <strong>practical skills and cutting-edge expertise</strong>. This disconnect inspired us to create a platform where learning meets innovation, and education translates into real-world impact.
      </p>
      <p>
        What started as a small initiative has grown into a <strong>global movement over just five years</strong>. Today, we take pride in having trained over 5,000+ professionals, helping them advance their careers and drive change in their organizations. Along the way, we’ve partnered with <strong>20+ leading universities</strong>, designing programs that prepare students and professionals to thrive in an industry shaped by digital transformation and sustainability.
      </p>
      <p>
        Our journey is just beginning. With every course we deliver and every career we transform, we move closer to our vision — <strong>a future where knowledge empowers progress and innovation fuels growth.</strong>
      </p>
    </>
  );

  const missionStatement =
    "To empower individuals and organizations in the oil & gas industry with innovative training, consultancy, and technology-driven solutions, fostering sustainable energy growth.";
  const visionStatement =
    "To be the world’s most trusted partner for oil & gas education and consulting, shaping the workforce of tomorrow.";

  const achievements = [
    { number: "5+ Years", label: "of Excellence", icon: Clock },
    { number: "5000+", label: "Professionals Trained Globally", icon: Users },
    { number: "10+", label: "University Collaborations", icon: BookOpen },
    { number: "20+", label: "Corporate Partners", icon: Target },
    { number: "10+", label: "Presence in Countries", icon: Globe },
  ];

  const mentors = [
    {
      name: "Yogashri Pradhan",
      position: "Petroleum Engineer",
      experience: "10+ years in Production, Completions & Reservoir Engineering",
      image: "/images/Yogashri.png",
      bio: "Focused on optimizing unconventional reservoirs in the Permian Basin using data analytics and technical leadership.",
      credentials: [
        "Production, Completions & Reservoir Engineering",
        "Unconventional Reservoir Optimization",
        "Data Analytics & Technical Leadership",
      ],
      linkedin: "https://www.linkedin.com/in/yogashripradhan",
    },
    {
      name: "Sivakumar Babu",
      position: "Petroleum Engineer",
      experience: "32+ years in Global E&P",
      image: "/images/SivaKumar.png",
      bio: "Expert in Production Technology, Reservoir Surveillance, Well Completions, and Integrated Production Management across ONGC, BAPCO, and PETRONAS.",
      credentials: [
        "Production Technology",
        "Reservoir Surveillance",
        "Well Completions",
        "Integrated Production Management",
      ],
      linkedin: "https://www.linkedin.com/in/sivakumar-babu-571a6311",
    },
    {
      name: "Dr. Rajesh Kumar Mittal",
      position: "Upstream Oil & Gas Consultant",
      experience: "40+ years Global Experience",
      image: "/images/Rajesh.png",
      bio: "Expert in reservoir engineering, field development, EOR, and project management with advisory roles for DSF, FDPs, and JV operations.",
      credentials: [
        "Reservoir Engineering",
        "Field Development & EOR",
        "DSF Evaluations & JV Operations",
        "Project Management & HSE Audits",
      ],
      linkedin: "https://www.linkedin.com/in/dr-rajesh-kumar-mittal-3034222a",
    },
    {
      name: "Milind Gokhale",
      position: "Drilling Superintendent",
      experience: "Experienced in Onshore & Offshore Drilling Operations",
      image: "/images/Milind.png",
      bio: "Drilling professional skilled in well engineering, operations supervision, project planning and drilling management for 6 active rigs.",
      credentials: ["Well Engineering", "Drilling Operations", "Project Planning", "Rig Management"],
      linkedin: "https://www.linkedin.com/in/milind-gokhale-34499714",
    },
    {
      name: "Yohanes Nuwara",
      position: "Senior Data Scientist",
      experience: "5+ years in Data Science, CV & LLMs",
      image: "/images/Yohanes.png",
      bio: "Expert in data science, AI/ML, and computer vision with experience across oil & gas, pulp & paper, and tech.",
      credentials: ["Data Science & AI", "Computer Vision & LLMs", "Technical Leadership", "Cross-Industry Data Solutions"],
      linkedin: "https://www.linkedin.com/in/yohanesnuwara",
    },
    {
      name: "Mr. Samir Kale",
      position: "Completion & Well Intervention Expert",
      experience: "30+ years in Well Intervention & Stimulation",
      image: "/images/SamirKale.png",
      bio: "Known for lift optimization, HSSE leadership, and contract/project management across operator and service sectors.",
      credentials: ["Well Intervention & Stimulation", "Lift Optimization", "HSSE Leadership", "Contract & Project Management"],
      linkedin: "https://www.linkedin.com/in/samir-kale-296b3410",
    },
    {
      name: "Mr. Vinod Kumar Madem",
      position: "Reservoir Engineering Expert",
      experience: "MTech – IIT(ISM) Dhanbad",
      image: "/images/Vinod.png",
      bio: "Specializes in reservoir modelling, simulation, surveillance, production optimization, CCUS and hydrogen storage.",
      credentials: [
        "Reservoir Modelling & Simulation",
        "Reservoir Surveillance",
        "Production Optimization",
        "CCUS & Hydrogen Storage",
      ],
      linkedin: "https://www.linkedin.com/in/vinod-kumar-madem-b60145179",
    },
    {
      name: "Ms. Neha Chugh Dwivedi",
      position: "Technology Leader",
      experience: "20+ years in Software & Product Delivery",
      image: "/images/Neha.png",
      bio: "Experienced in enterprise development, Agile/SAFe, portfolio management, financial governance and innovation leadership.",
      credentials: [
        "Software Development & Product Ownership",
        "Agile / SAFe Delivery",
        "Portfolio & Project Management",
        "Financial Governance & Innovation Leadership",
      ],
      linkedin: "https://www.linkedin.com/in/neha-chugh-dwivedi-3054947",
    },
    {
      name: "Mr. Rajkumar Srivastava",
      position: "Economic & Investment Advisor",
      experience: "10+ years in Global Energy Asset Analysis",
      image: "/images/RajKumar.png",
      bio: "Specialist in valuation, financial modelling, feasibility analysis and due diligence across global energy portfolios.",
      credentials: [
        "Valuation & Financial Modelling",
        "Feasibility Analysis & Due Diligence",
        "Renewables & Energy Transition Strategy",
        "Revenue Growth & Risk Mitigation",
      ],
      linkedin: "https://www.linkedin.com/in/rajsrivastava1",
    },
    {
      name: "Mr. Jaiyesh Chahar",
      position: "Machine Learning Specialist",
      experience: "5+ years in AI & ML",
      image: "/images/Jaiyesh.png",
      bio: "Works across AI, ML, CV, MLOps and AI product development. Industry researcher, speaker and co-founder of Petroleum From Scratch.",
      credentials: ["AI/ML & Deep Learning", "Computer Vision & MLOps", "AI Product Development", "Research & Community Leadership"],
      linkedin: "https://www.linkedin.com/in/jaiyesh-chahar-9b3642107",
    },
    {
      name: "Dr. Nitesh Kumar",
      position: "Advance Well Engineering Expert",
      experience: "20+ years of Experience",
      image: "/images/Nitesh.png",
      bio: "Specialized in petroleum engineering research, reservoir and production studies, and advanced technical analysis.",
      credentials: ["Petroleum Engineering Research", "Reservoir & Production Studies", "Advanced Technical Analysis"],
      linkedin: "https://www.linkedin.com/in/dr-nitesh-kumar-a1298234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWrw7y5kMSpabeTqgX%2BxqbA%3D%3D",
    },
    {
      name: "Dr. Destiny Otto",
      position: "AI/ML Visualization Expert",
      experience: "7+ years in Automation & Workflow Optimization",
      image: "/images/Destiny.png",
      bio: "Designs and deploys AI/ML solutions for automation, LLM workflows, scalable systems and operational efficiency.",
      credentials: ["AI/ML Solution Development", "Workflow Automation", "LLMs, Python & APIs", "Systems Thinking & Scalability"],
      linkedin: "https://www.linkedin.com/in/destiny-otto",
    },
    {
      name: "Mr. Oscar Daniel Hernández Mendoza",
      position: "Reservoir Engineer & AI Prototype Developer",
      experience: "12+ years in Digital Oilfield & 3D Digital Twins",
      image: "/images/Oscar.png",
      bio: "Specializes in reservoir characterization, production optimization and AI-driven prototype development across SLB, Petrofac, and Oil Pixels.",
      credentials: ["Reservoir Characterization", "Production Optimization", "Digital Oilfield & 3D Digital Twins", "AI/ML Prototype Development"],
      linkedin: "https://www.linkedin.com/in/odhm86",
    },
    {
      name: "Mr. Ishan Appu",
      position: "Oil & Gas Professional",
      experience: "15+ years in Upstream Domain + Digital",
      image: "/images/Ishan.png",
      bio: "Experienced in field development, production technology, upstream operations, WRM and ML-driven optimization across the upstream value chain.",
      credentials: [
        "Field Development & Production Technology",
        "Upstream Operations & WRM",
        "Consulting & Strategy Execution",
        "Digitalization & ML for Performance",
      ],
      linkedin: "https://www.linkedin.com/in/ishan-appu-pet-eng-7b698349",
    },
    {
      name: "Mr. Sanjay Kumar Singh",
      position: "Reservoir Engineer",
      experience: "31+ years in Global E&P",
      image: "/images/Sanjay.png",
      bio: "Expert in simulation studies, field development planning, well testing, PVT/EOS analysis and surveillance across global E&P operations.",
      credentials: [
        "Reservoir Simulation & Studies",
        "Field Development Planning",
        "Well Testing & PVT/EOS Analysis",
        "Field Surveillance & Collaboration",
      ],
      linkedin: "https://www.linkedin.com/in/sanjay-kumar-singh-7172748",
    },
    {
      name: "Mr. Mehdi Tadayoni",
      position: "Energy Data Scientist",
      experience: "28+ years in ML/DL & Energy Systems",
      image: "/images/Mehdi.png",
      bio: "Builds ML/DL forecasting solutions, energy data platforms and subsurface analysis models including CCUS and gas storage.",
      credentials: [
        "ML/DL Forecasting Solutions",
        "Energy Data Platforms",
        "Reservoir Engineering & Subsurface Analysis",
        "Gas Storage & CCUS Projects",
      ],
      linkedin: "https://www.linkedin.com/in/mehdi-tadayoni-phd-2611673a",
    },
    {
      name: "Mr. Marco Carboni",
      position: "Oil & Gas Leader",
      experience: "39+ years in Operations & Executive Management",
      image: "/images/Marco.png",
      bio: "Experienced in drilling, production, engineering operations, reserves analysis, financial planning and field development.",
      credentials: [
        "Drilling, Production & Engineering Operations",
        "Project & Company Management",
        "Reserves Analysis & Financial Strategy",
        "Advanced Production Technologies",
      ],
      linkedin: "https://www.linkedin.com/in/marco-carboni-53b5488",
    },
    {
      name: "Mr. Mohamed Elshehabi",
      position: "Reservoir Engineering Expert",
      experience: "15+ years in Reservoir Optimization",
      image: "/images/Mohamed.png",
      bio: "Expert in FDP preparation, reservoir simulation, subsurface integration and production optimization across clastic and carbonate fields.",
      credentials: [
        "Field Development Planning",
        "Reservoir Simulation & Analysis",
        "Subsurface Integration & Characterization",
        "Onshore/Offshore Production Optimization",
      ],
      linkedin: "https://www.linkedin.com/in/mohamed-elshehabi-a0336a72",
    },
    {
      name: "Dr. B. V. Bhusan",
      position: "Reservoir Engineering Expert",
      experience: "33+ years in ONGC | EOR & Simulation Specialist",
      image: "/images/Bhusan.png",
      bio: "Expert in ISC, CSS, steam flooding, air-injection and full-field EOR/IOR project design and leadership.",
      credentials: [
        "Reservoir Simulation",
        "ISC, CSS & Steam Flooding",
        "Air-Injection EOR",
        "Full-Field EOR/IOR Leadership",
      ],
      linkedin: "https://www.linkedin.com/in/dr-b-v-bhushan-500b5b51?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ%2Bi3LxcBR225LCWvcpoLBA%3D%3D",
    },
  ];

  // Scroll-to-mentors effect
  useEffect(() => {
    const hash = location.hash || "";
    if (hash === "#mentors" && mentorsRef.current) {
      const id = setTimeout(() => {
        mentorsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setHighlight(true);
        setTimeout(() => setHighlight(false), 2200);
      }, 120);
      return () => clearTimeout(id);
    }
  }, [location.hash]);

  // Autoplay video on scroll logic
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;


    videoElement.volume = 0.8;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                // Autoplay prevented (usually because user hasn't interacted with page yet)
                console.log("Autoplay prevented:", error);
              });
            }
          } else {
            // Optional: Pause video when scrolled out of view
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="text-white py-20 relative overflow-hidden" style={{ backgroundColor: "#12489f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 relative inline-block">
            About Edvantage Learning
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-60 transform -skew-x-12 animate-slide-light"></span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            Empowering the next generation of oil & gas professionals through world-class education and industry connections
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">{ourStoryText}</div>
            </div>
            <div className="relative animate-slide-right">
              <img
                src="/images/About.png"
                alt="Oil and gas facility"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* CEO'S DESK / VIDEO SECTION START               */}
      {/* ============================================== */}
      {/* Decreased 'py-24' to 'py-12' for less vertical spacing */}
      <section className="relative py-12 bg-white overflow-hidden">
        {/* Top Decorative Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Block - Removed Icon & Reduced Margin */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
              From the CEO’s Desk
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              The journey, purpose, and passion behind Edvantage Learning
            </p>
          </div>

          {/* Video Container Block - Removed Zoom/Hover effects */}
          <div className="max-w-5xl mx-auto relative">
            
            {/* Ambient Glow Effect (Static, no longer changes on hover) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-600 rounded-2xl blur opacity-20"></div>
            
            {/* Actual Video Wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-black aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                playsInline
                src="/videos/ceo-message.mp4" 
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
        </div>
      </section>
      {/* ============================================== */}
      {/* CEO'S DESK / VIDEO SECTION END                 */}
      {/* ============================================== */}

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 p-3 rounded-full mr-4 animate-pulse">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{missionStatement}</p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in-delay">
              <div className="flex items-center mb-6">
                <div className="bg-teal-500 p-3 rounded-full mr-4 animate-bounce">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{visionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MENTORS */}
      <section
        id="mentors-section"
        ref={mentorsRef}
        className={`py-20 bg-gray-50 transition-shadow duration-500 ${highlight ? "ring-4 ring-teal-300 ring-opacity-70" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mentors</h2>
            <p className="text-lg text-gray-600">Meet our mentors — industry leaders and advisors shaping the future of energy education.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {mentors.map((mentor, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition p-6 text-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-contain rounded-lg mb-4 bg-gray-100"
                />

                <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                <p className="text-gray-600 font-semibold">{mentor.position}</p>
                <p className="text-sm text-gray-500 mb-3">{mentor.experience}</p>
                <p className="text-gray-600 text-sm mb-3">{mentor.bio}</p>

                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  {mentor.credentials.map((cred, idx) => (
                    <li key={idx}>• {cred}</li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open(mentor.linkedin, "_blank")}
                  className="flex items-center justify-center w-10 h-10 mx-auto 
                             bg-[#0A66C2] rounded-lg 
                             hover:bg-[#004182] transition duration-300 shadow-md hover:shadow-lg"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => {
                navigate("/book-demo");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">5+ Years of Excellence, 5000+ Professionals Trained Globally, and more.</p>
          </div>

          <div className="relative w-full h-80 perspective">
            <div className="absolute inset-0 transform-style-3d animate-rotate-carousel flex justify-center items-center">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="absolute w-60 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center glow-card tilt-card transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                  style={{
                    transform: `rotateY(${index * (360 / achievements.length)}deg) translateZ(300px)`,
                  }}
                >
                  <achievement.icon className="h-14 w-14 text-blue-400 mx-auto mb-4 animate-icon-bounce" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-gradient-text">
                    {achievement.number}
                  </div>
                  <div className="text-blue-100 text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              {
                title: "Excellence",
                icon: Award,
                text: "We strive for the highest standards in everything we deliver, from curriculum design to student support.",
              },
              {
                title: "Integrity",
                icon: Heart,
                text: "We operate with transparency, honesty, and ethical practices in all our interactions and partnerships.",
              },
              {
                title: "Innovation",
                icon: Users,
                text: "We continuously evolve our methods and technologies to provide cutting-edge learning experiences.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center perspective hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg tilt-card animate-float">
                  <value.icon className="h-10 w-10 text-teal-600 animate-bounce-slow" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;