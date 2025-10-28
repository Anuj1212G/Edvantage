import React from "react";
import { Award, Users, Globe, Target, Eye, Heart, Linkedin, Clock, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
   const navigate = useNavigate();
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

  const missionStatement = 'To empower individuals and organizations in the oil & gas industry with innovative training, consultancy, and technology-driven solutions, fostering sustainable energy growth.';
  const visionStatement = 'To be the world’s most trusted partner for oil & gas education and consulting, shaping the workforce of tomorrow.';

  const achievements = [
    { number: '5+ Years', label: 'of Excellence', icon: Clock },
    { number: '5000+', label: 'Professionals Trained Globally', icon: Users },
    { number: '10+', label: 'University Collaborations', icon: BookOpen },
    { number: '20+', label: 'Corporate Partners', icon: Target },
    { number: '10+', label: 'Presence in Countries', icon: Globe },
  ];

  const mentors = [
    {
      name: "Dr. Yogashri Pradhan",
      position: "Chief Growth Officer ",
      experience: "15+ years in Oil & Gas",
      image:
        "/images/Yogashri.png",
      bio: "Chief Growth Officer |POX Ai ",
      credentials: [
        "PhD Petroleum Engineering",
        "SPE Distinguished Lecturer",
        "Industry Pioneer Award",
      ],
    },
    {
      name: "Mr. SivaKumar Babu",
      position: "Chief Technology Officer",
      experience: "45+ years in E&P experience",
      image:
        "/images/SivaKumar.png",
      bio: "Led digital transformation initiatives at Shell and Chevron, specializing in IoT and AI applications.",
      credentials: [
        "MS Computer Science",
        "Digital Innovation Leader",
        "Technology Excellence Award",
      ],
    },
    {
      name: "Dr. Rajesh Kumar Mittal",
      position: "Consultant/Advisor Oil & Gas",
      experience: "30+ years in Education",
      image:
        "/images/Rajesh.png",
      bio: "Consultant/Advisor Oil & GasIEx-ONGCI ONGC VideshIDGHlOIL.",
      credentials: [
        "PhD Education",
        "Academic Excellence Award",
        "International Educator",
      ],
    },
    {
      name: "Milind Gokhale",
      position: "Drilling & Well Engineering Expert ",
      experience: "30+ years in Upstream Operations",
      image:
        "/images/Milind.png",
      bio: "Drilling & Well Engineering Expert ",
      credentials: [
        "MSc Petroleum Engineering",
        "Former BP VP Operations",
        "Women in Energy Award",
      ],
    },
    {
      name: "Sanjay Joshi",
      position: "Drilling & Well Engineering Expert",
      experience: "30+ Years Industry Experience",
      image:
        "/images/Sanjay.png",
      bio: "Trained 200+ organizations globally on workplace safety and compliance.",
      credentials: ["Certified HSE Auditor", "NEBOSH IGC", "HSE Excellence Award"],
    },
    {
      name: "Yohanes Nuwara",
      position: "Senior Data Scientist",
      experience: "20+ years in AI & Digital Systems",
      image:
        "/images/Yohanes.png",
      bio: "Software Engineer at Whitson ",
      credentials: ["PhD in AI Systems", "Ex-CTO at PetroTech", "Author of “AI in Energy”"],
    },
  ];

  return (
  <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          className="text-white py-20 relative overflow-hidden"
          style={{ backgroundColor: '#12489f' }}
        >
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
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {ourStoryText}
                </div>
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
  
        {/* Mission & Vision */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-600 p-3 rounded-full mr-4 animate-pulse">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{missionStatement}</p>
              </div>
  
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mentors</h2>
            <p className="text-lg text-gray-600">
              Meet our mentors — industry leaders and advisors shaping the future of energy education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {mentors.map((mentor, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition p-6 text-center"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                <p className="text-teal-600 font-semibold">{mentor.position}</p>
                <p className="text-sm text-gray-500 mb-3">{mentor.experience}</p>
                <p className="text-gray-600 text-sm mb-3">{mentor.bio}</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  {mentor.credentials.map((cred, idx) => (
                    <li key={idx}>• {cred}</li>
                  ))}
                </ul>
                <button className="text-teal-600 hover:text-teal-700 flex items-center justify-center gap-2">
                  <Linkedin className="h-4 w-4" /> Connect
                </button>
              </div>
            ))}
          </div>

          {/* Book Demo Button */}
          <div className="mt-16 text-center">
            <button
  onClick={() => {
    navigate("/book-demo");
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 Scroll to top when navigating
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
                          transform: `rotateY(${index * (360 / achievements.length)}deg) translateZ(300px)`
                        }}
                      >
                        <achievement.icon className="h-14 w-14 text-blue-400 mx-auto mb-4 animate-icon-bounce" />
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-gradient-text">{achievement.number}</div>
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
                    { title: 'Excellence', icon: Award, text: 'We strive for the highest standards in everything we deliver, from curriculum design to student support.' },
                    { title: 'Integrity', icon: Heart, text: 'We operate with transparency, honesty, and ethical practices in all our interactions and partnerships.' },
                    { title: 'Innovation', icon: Users, text: 'We continuously evolve our methods and technologies to provide cutting-edge learning experiences.' },
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
