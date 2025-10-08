import React, { useState } from 'react';
import { Calendar, Clock, User, Play, Download, ExternalLink, Bell, X, CheckCircle, Quote, ChevronDown } from 'lucide-react';

const WebinarsEvents = () => {
  // State management
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [activeCalendar, setActiveCalendar] = useState(null); // Tracks which calendar dropdown is open

  // Data
  const webinars = [
    {
      id: '1',
      title: 'The Future of Energy: AI & Sustainable Grids',
      speaker: { name: 'Dr. Anya Sharma', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400' },
      date: '2025-11-25', time: '2:00 PM IST', duration: '90 minutes',
      description: 'An in-depth exploration of how AI is revolutionizing grid management and promoting sustainability.',
    },
    {
      id: '2',
      title: 'Advanced HSE Protocols in Deepwater Drilling',
      speaker: { name: 'Michael Chen', image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400' },
      date: '2025-12-10', time: '4:30 PM IST', duration: '75 minutes',
      description: 'Learn from industry leaders about implementing world-class HSE practices in challenging offshore environments.',
    },
    {
      id: '3',
      title: 'The Energy Transition: A Blueprint for Professionals',
      speaker: { name: 'Dr. Elena Vasquez', image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400' },
      date: '2025-09-15', time: '1:00 PM IST', duration: '60 minutes',
      description: 'Discover career opportunities and the essential skills required as the energy industry moves toward a sustainable future.',
    }
  ];
 
  const testimonials = [
    { quote: "The insights were not just theoretical but immediately actionable. Truly exceptional!", author: "David Chen", title: "Operations Director, Apex Energy", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { quote: "I've never attended a virtual event with such high-caliber speakers and seamless production.", author: "Aisha Khan", title: "Lead Safety Engineer, Trident Offshore", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { quote: "This is the single most valuable resource for staying current in the fast-evolving energy landscape.", author: "Ben Carter", title: "Senior Reservoir Engineer, GeoDynamics", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  // Helper Functions
  const upcomingWebinars = webinars.filter(w => new Date(w.date) >= new Date());
  const pastWebinars = webinars.filter(w => new Date(w.date) < new Date());
  const isUpcoming = (webinar) => new Date(webinar.date) >= new Date();

  // Calendar Link Generation
  const generateCalendarLink = (type, webinar) => {
    const formatTime = (date, time) => new Date(`${date} ${time.replace('IST', 'GMT+0530')}`);
    const startTime = formatTime(webinar.date, webinar.time);
    const endTime = new Date(startTime.getTime() + parseInt(webinar.duration) * 60000);

    const title = encodeURIComponent(webinar.title);
    const details = encodeURIComponent(webinar.description);
    
    if (type === 'google') {
      const startTimeStr = startTime.toISOString().replace(/-|:|\.\d+/g, '');
      const endTimeStr = endTime.toISOString().replace(/-|:|\.\d+/g, '');
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTimeStr}/${endTimeStr}&details=${details}`;
    }
    if (type === 'outlook') {
      const startTimeStr = startTime.toISOString();
      const endTimeStr = endTime.toISOString();
      return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&startdt=${startTimeStr}&enddt=${endTimeStr}&body=${details}`;
    }
    if (type === 'ical') {
      const startTimeStr = startTime.toISOString().replace(/-|:|\.\d+/g, '');
      const endTimeStr = endTime.toISOString().replace(/-|:|\.\d+/g, '');
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `DTSTART:${startTimeStr}`,
        `DTEND:${endTimeStr}`,
        `SUMMARY:${webinar.title}`,
        `DESCRIPTION:${webinar.description}`,
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\n');
      return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
    }
  };

  // Modal Handlers
  const openReminderModal = (webinar) => {
    setSelectedWebinar(webinar);
    setIsModalOpen(true);
    setFormStatus('idle');
  };
  const closeModal = () => setIsModalOpen(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1000); // Simulate network request
  };

  return (
    <div className="font-sans bg-white">
      {/* Global Styles for Animations */}
      <style>{`
        #particle-container {
          background: #12489fff;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: #475569;
          animation: float 20s infinite linear;
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-1000px) rotate(720deg); }
        }
        /* FIXED: Added missing fadeInUp animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        <div id="particle-container" className="absolute inset-0 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6 animate-fade-in-down">
            Events & Webinars
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Connect with industry pioneers and explore the future of energy through our expert-led events.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute -bottom-1 left-0 w-full z-20">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 100H1440V0C1167.33 73.3333 720 100 0 0V100Z" fill="white"></path>
            </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white text-slate-800 -mt-1 relative z-20">
        {/* Tab Navigation */}
        <div className="max-w-md mx-auto p-2">
            {/* FIXED: Changed background to blue-600 for the tab bar */}
            <div className="relative flex items-center bg-blue-600 rounded-full p-1 shadow-inner">
                <span
                    className="absolute left-1 top-1 h-[calc(100%-0.5rem)] bg-white shadow-md rounded-full transition-transform duration-300 ease-in-out"
                    style={{
                        width: 'calc(50% - 0.25rem)',
                        transform: activeTab === 'upcoming' ? 'translateX(0%)' : 'translateX(100%)',
                    }}
                ></span>
                {/* IMPROVED: Inactive tab text is now blue-200 for better contrast on blue background */}
                <button onClick={() => setActiveTab('upcoming')} className={`relative w-1/2 py-2.5 text-center font-semibold z-10 transition-colors duration-300 ${activeTab === 'upcoming' ? 'text-blue-800' : 'text-blue-200 hover:text-white'}`}>Upcoming</button>
                <button onClick={() => setActiveTab('past')} className={`relative w-1/2 py-2.5 text-center font-semibold z-10 transition-colors duration-300 ${activeTab === 'past' ? 'text-blue-800' : 'text-blue-200 hover:text-white'}`}>Archive</button>
            </div>
        </div>

        {/* Webinars List */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 space-y-16">
          {(activeTab === 'upcoming' ? upcomingWebinars : pastWebinars).map((webinar, index) => (
            // FIXED: Added `relative` and a conditional `z-index` to lift the active card and show its dropdown
            <div key={webinar.id} className={`group grid lg:grid-cols-12 gap-8 items-center animate-fade-in-up relative ${activeCalendar === webinar.id ? 'z-10' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
              {/* Date */}
              <div className="lg:col-span-2 text-center">
                <p className="text-4xl font-extrabold text-blue-600">{new Date(webinar.date).getDate()}</p>
                <p className="text-lg font-semibold text-slate-500">{new Date(webinar.date).toLocaleString('default', { month: 'short' })}</p>
                <p className="text-slate-400">{new Date(webinar.date).getFullYear()}</p>
              </div>

              {/* Card */}
              <div className="lg:col-span-10 relative rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute top-4 right-4 z-10">
                    {isUpcoming(webinar) && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                          Upcoming
                        </span>
                    )}
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  {/* FIXED: Adjusted image container for better image fit */}
                  <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-r-none">
                    <img src={webinar.speaker.image} alt={webinar.speaker.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-8 flex-1">
                    <p className="font-semibold text-blue-600">{webinar.speaker.name}</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3">{webinar.title}</h3>
                    <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                      <span className="flex items-center gap-2"><Clock size={16} /> {webinar.time}</span>
                      <span className="flex items-center gap-2"><User size={16} /> {webinar.duration}</span>
                    </div>
                    {isUpcoming(webinar) ? (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transform hover:scale-105 transition-all">
                          <ExternalLink size={16} /> Register Now
                        </a>
                        <div className="relative">
                          <button onClick={() => setActiveCalendar(activeCalendar === webinar.id ? null : webinar.id)} className="flex w-full items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all">
                            <Calendar size={16} /> Add to Calendar <ChevronDown size={16} className={`transition-transform ${activeCalendar === webinar.id ? 'rotate-180' : ''}`} />
                          </button>
                          {activeCalendar === webinar.id && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl p-2 z-20 animate-fade-in-fast">
                              <a href={generateCalendarLink('google', webinar)} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-100">Google Calendar</a>
                              <a href={generateCalendarLink('outlook', webinar)} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-100">Outlook</a>
                              <a href={generateCalendarLink('ical', webinar)} download={`${webinar.title}.ics`} className="block w-full text-left px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-100">Apple Calendar</a>
                            </div>
                          )}
                        </div>
                        <button onClick={() => openReminderModal(webinar)} className="p-3 rounded-full text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all"><Bell size={18} /></button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-slate-700 hover:bg-slate-600 transform hover:scale-105 transition-all">
                          <Play size={16} /> Watch Recording
                        </a>
                        <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all">
                          <Download size={16} /> Download Materials
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Trusted by Industry Leaders</h2>
                  <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Hear from professionals who have gained a competitive edge with our events.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
                  {testimonials.map((t, index) => (
                      // FIXED: Corrected the inline style syntax for the animation
                      <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-500 transform-style-3d hover:rotate-y-3 hover:-translate-y-2" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}>
                          <Quote className="h-12 w-12 text-blue-100 mb-4" />
                          <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                          <div className="flex items-center">
                              <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover mr-4"/>
                              <div>
                                  <p className="font-bold text-slate-900">{t.author}</p>
                                  <p className="text-sm text-blue-600">{t.title}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Reminder Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in-fast">
          <div className="relative m-4 max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
            <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X /></button>
            {formStatus !== 'success' ? (
              <>
                <div className="text-center">
                  <Bell className="h-12 w-12 mx-auto text-blue-500 mb-4"/>
                  <h3 className="text-2xl font-bold text-slate-900">Set a Reminder</h3>
                  <p className="text-slate-600 mt-2">Get an email notification for:</p>
                  <p className="font-semibold text-blue-700 mt-4 mb-6">{selectedWebinar.title}</p>
                </div>
                <form onSubmit={handleFormSubmit}>
                  <input type="email" required placeholder="you@company.com" className="w-full px-4 py-3 bg-slate-100 text-slate-800 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 disabled:bg-blue-300">
                    {formStatus === 'submitting' ? 'Setting Reminder...' : 'Confirm Reminder'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center animate-fade-in">
                <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4"/>
                <h3 className="text-2xl font-bold text-slate-900">Reminder Set!</h3>
                <p className="text-slate-600 mt-2">We'll send a notification to your email before the event starts.</p>
                <button onClick={closeModal} className="w-full mt-6 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-4 rounded-lg transition-all">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarsEvents;