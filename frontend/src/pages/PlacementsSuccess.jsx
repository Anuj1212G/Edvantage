import React, { useState } from 'react';
import { Star, MapPin, TrendingUp, Building, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const PlacementsSuccess = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Senior Reservoir Engineer',
      company: 'ExxonMobil',
      program: 'Petroleum Engineering Excellence',
      quote: "The comprehensive curriculum and expert instructors at Edvantage Learning transformed my understanding of reservoir engineering. Within 6 months of completing the program, I secured a senior position with a 40% salary increase.",
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Junior Engineer',
      salaryIncrease: '40%',
      location: 'Houston, TX'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'HSE Manager',
      company: 'Shell',
      program: 'HSE Leadership Program',
      quote: "The HSE Leadership Program gave me the confidence and skills to lead safety initiatives across multiple offshore platforms. The practical approach and industry connections were invaluable.",
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Safety Coordinator',
      salaryIncrease: '35%',
      location: 'Aberdeen, UK'
    },
    {
      id: '3',
      name: 'Elena Rodriguez',
      position: 'Digital Transformation Lead',
      company: 'Chevron',
      program: 'Digital Oil Field Technologies',
      quote: "The digital transformation program opened up a completely new career path for me. I now lead digital initiatives that are revolutionizing how we operate our fields.",
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Operations Engineer',
      salaryIncrease: '50%',
      location: 'Calgary, Canada'
    },
    {
      id: '4',
      name: 'Ahmed Al-Rashid',
      position: 'Operations Manager',
      company: 'Saudi Aramco',
      program: 'Corporate Training Program',
      quote: "The leadership skills and operational excellence principles I learned have been instrumental in managing complex projects and leading high-performing teams.",
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Senior Engineer',
      salaryIncrease: '45%',
      location: 'Dhahran, Saudi Arabia'
    },
    {
      id: '5',
      name: 'Jennifer Williams',
      position: 'Production Engineer',
      company: 'ConocoPhillips',
      program: 'Petroleum Engineering Excellence',
      quote: "The hands-on approach and real-world case studies prepared me perfectly for the challenges in production engineering. The career support was exceptional.",
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Graduate Engineer',
      salaryIncrease: '30%',
      location: 'Anchorage, AK'
    },
    {
      id: '6',
      name: 'David Thompson',
      position: 'Drilling Supervisor',
      company: 'Halliburton',
      program: 'HSE Leadership Program',
      quote: "The program's focus on safety leadership and risk management has made me a more effective supervisor. I've successfully led multiple drilling campaigns with zero incidents.",
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      beforeRole: 'Drilling Engineer',
      salaryIncrease: '38%',
      location: 'Midland, TX'
    }
  ];

  const hiringPartners = [
    { name: 'ExxonMobil', logo: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Shell', logo: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Chevron', logo: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'BP', logo: 'https://images.pexels.com/photos/1860298/pexels-photo-1860298.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Total', logo: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'ConocoPhillips', logo: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const nextStory = () => setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
  const prevStory = () => setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);

  const currentStory = successStories[currentStoryIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-teal-300 animate-gradient-text relative overflow-hidden">
            Placements & Success Stories
            <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/80 to-white/40 transform -skew-x-12 animate-light-slide pointer-events-none"></span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Discover how our graduates have transformed their careers and achieved remarkable success
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Users className="h-8 w-8 text-white" />, value: '95%', title: 'Job Placement Rate', color: 'bg-blue-600', sub: 'Within 6 months' },
            { icon: <TrendingUp className="h-8 w-8 text-white" />, value: '42%', title: 'Average Salary Increase', color: 'bg-green-600', sub: 'Post-graduation' },
            { icon: <Building className="h-8 w-8 text-white" />, value: '20+', title: 'Hiring Partners', color: 'bg-teal-600', sub: 'Global companies' },
            { icon: <Award className="h-8 w-8 text-white" />, value: '4.9/5', title: 'Graduate Satisfaction', color: 'bg-purple-600', sub: 'Average rating' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className={`${stat.color} p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center animate-bounce`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2 text-blue-600">{stat.value}</div>
              <div className="text-gray-700 font-semibold">{stat.title}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Success Story</h2>
          <p className="text-xl text-blue-700 mb-12">Real transformations from our graduates</p>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-700 to-blue-600 rounded-3xl shadow-2xl overflow-hidden h-[500px]">
              <div className="md:w-1/2 relative">
                <img src={currentStory.image} alt={currentStory.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                <div className="absolute bottom-4 left-4 text-white text-sm space-y-1">
                  <div className="flex items-center space-x-2"><MapPin className="h-4 w-4" /><span>{currentStory.location}</span></div>
                  <div className="flex items-center space-x-2"><TrendingUp className="h-4 w-4" /><span>{currentStory.salaryIncrease} salary increase</span></div>
                </div>
              </div>

              <div className="md:w-1/2 bg-gradient-to-b from-white/80 to-blue-50 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}</div>
                  <blockquote className="italic text-gray-800 mb-6">“{currentStory.quote}”</blockquote>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <h3 className="text-lg font-bold text-blue-900">{currentStory.name}</h3>
                  <p className="text-blue-700 font-semibold">{currentStory.position}</p>
                  <p className="text-gray-600">{currentStory.company}</p>
                </div>
              </div>
            </div>

            <button onClick={prevStory} className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-700/80 text-white p-3 rounded-full hover:bg-blue-800">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextStory} className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-700/80 text-white p-3 rounded-full hover:bg-blue-800">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Write Your Success Story?</h2>
        <p className="text-blue-200 mb-12 text-lg">Join thousands of professionals who have transformed their careers with Edvantage Learning</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition">Explore Programs</button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition">Schedule Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default PlacementsSuccess;
