// import React, { useState } from 'react';
// import { Calendar, Clock, User, Play, Download, ExternalLink, Bell, X, CheckCircle, Quote, ChevronDown } from 'lucide-react';

// const WebinarsEvents = () => {
//   // State management
//   const [activeTab, setActiveTab] = useState('upcoming');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formStatus, setFormStatus] = useState('idle');
//   const [selectedWebinar, setSelectedWebinar] = useState(null);
//   const [activeCalendar, setActiveCalendar] = useState(null); // Tracks which calendar dropdown is open

//   // Data
// const webinars = [
//   {
//     id: '1',
//     title: 'The Future of Energy: AI & Sustainable Grids',
//     speaker: { name: 'Dr. Anya Sharma', image: '...' },
//     date: '2025-11-25',
//     time: '2:00 PM IST',
//     duration: '90 minutes',
//     description: '...',
//     recordingLink: "https://drive.google.com/file/d/xxxxxxx/view",   // 🔥 Add this
//   },
//   {
//     id: '2',
//     title: 'Advanced HSE Protocols in Deepwater Drilling',
//     speaker: { name: 'Michael Chen', image: '...' },
//     date: '2025-12-10',
//     time: '4:30 PM IST',
//     duration: '75 minutes',
//     description: '...',
//     recordingLink: "https://drive.google.com/file/d/yyyyyyy/view",   // 🔥 Add this
//   },
//   {
//     id: '3',
//     title: 'The Energy Transition: A Blueprint for Professionals',
//     speaker: { name: 'Dr. Elena Vasquez', image: '...' },
//     date: '2025-09-15',
//     time: '1:00 PM IST',
//     duration: '60 minutes',
//     description: '...',
//     recordingLink: "https://drive.google.com/file/d/zzzzzzz/view",   // 🔥 Add this
//   }
// ];

 
//   const testimonials = [
//     { quote: "The insights were not just theoretical but immediately actionable. Truly exceptional!", author: "David Chen", title: "Operations Director, Apex Energy", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" },
//     { quote: "I've never attended a virtual event with such high-caliber speakers and seamless production.", author: "Aisha Khan", title: "Lead Safety Engineer, Trident Offshore", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" },
//     { quote: "This is the single most valuable resource for staying current in the fast-evolving energy landscape.", author: "Ben Carter", title: "Senior Reservoir Engineer, GeoDynamics", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" }
//   ];

//   // Helper Functions
//   const upcomingWebinars = webinars.filter(w => new Date(w.date) >= new Date());
//   const pastWebinars = webinars.filter(w => new Date(w.date) < new Date());
//   const isUpcoming = (webinar) => new Date(webinar.date) >= new Date();

//   // Calendar Link Generation
//   const generateCalendarLink = (type, webinar) => {
//     const formatTime = (date, time) => new Date(`${date} ${time.replace('IST', 'GMT+0530')}`);
//     const startTime = formatTime(webinar.date, webinar.time);
//     const endTime = new Date(startTime.getTime() + parseInt(webinar.duration) * 60000);

//     const title = encodeURIComponent(webinar.title);
//     const details = encodeURIComponent(webinar.description);
    
//     if (type === 'google') {
//       const startTimeStr = startTime.toISOString().replace(/-|:|\.\d+/g, '');
//       const endTimeStr = endTime.toISOString().replace(/-|:|\.\d+/g, '');
//       return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTimeStr}/${endTimeStr}&details=${details}`;
//     }
//     if (type === 'outlook') {
//       const startTimeStr = startTime.toISOString();
//       const endTimeStr = endTime.toISOString();
//       return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&startdt=${startTimeStr}&enddt=${endTimeStr}&body=${details}`;
//     }
//     if (type === 'ical') {
//       const startTimeStr = startTime.toISOString().replace(/-|:|\.\d+/g, '');
//       const endTimeStr = endTime.toISOString().replace(/-|:|\.\d+/g, '');
//       const icsContent = [
//         'BEGIN:VCALENDAR',
//         'VERSION:2.0',
//         'BEGIN:VEVENT',
//         `DTSTART:${startTimeStr}`,
//         `DTEND:${endTimeStr}`,
//         `SUMMARY:${webinar.title}`,
//         `DESCRIPTION:${webinar.description}`,
//         'END:VEVENT',
//         'END:VCALENDAR'
//       ].join('\n');
//       return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
//     }
//   };

//   // Modal Handlers
//   const openReminderModal = (webinar) => {
//     setSelectedWebinar(webinar);
//     setIsModalOpen(true);
//     setFormStatus('idle');
//   };
//   const closeModal = () => setIsModalOpen(false);
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus('submitting');
//     setTimeout(() => setFormStatus('success'), 1000); // Simulate network request
//   };

//   return (
//     <div className="font-sans bg-white">
//       {/* Global Styles for Animations */}
//       <style>{`
//         #particle-container {
//           background: #12489fff;
//         }
//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           background: #475569;
//           animation: float 20s infinite linear;
//         }
//         @keyframes float {
//           0% { transform: translateY(0) rotate(0deg); }
//           100% { transform: translateY(-1000px) rotate(720deg); }
//         }
//         /* FIXED: Added missing fadeInUp animation */
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       {/* Hero Section */}
//       <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
//         <div id="particle-container" className="absolute inset-0 z-0"></div>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6 animate-fade-in-down">
//             Events & Webinars
//           </h1>
//           <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
//             Connect with industry pioneers and explore the future of energy through our expert-led events.
//           </p>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
//         <div className="absolute -bottom-1 left-0 w-full z-20">
//             <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                 <path d="M0 100H1440V0C1167.33 73.3333 720 100 0 0V100Z" fill="white"></path>
//             </svg>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="bg-white text-slate-800 -mt-1 relative z-20">
//         {/* Tab Navigation */}
//         <div className="max-w-md mx-auto p-2">
//             {/* FIXED: Changed background to blue-600 for the tab bar */}
//             <div className="relative flex items-center bg-blue-600 rounded-full p-1 shadow-inner">
//                 <span
//                     className="absolute left-1 top-1 h-[calc(100%-0.5rem)] bg-white shadow-md rounded-full transition-transform duration-300 ease-in-out"
//                     style={{
//                         width: 'calc(50% - 0.25rem)',
//                         transform: activeTab === 'upcoming' ? 'translateX(0%)' : 'translateX(100%)',
//                     }}
//                 ></span>
//                 {/* IMPROVED: Inactive tab text is now blue-200 for better contrast on blue background */}
//                 <button onClick={() => setActiveTab('upcoming')} className={`relative w-1/2 py-2.5 text-center font-semibold z-10 transition-colors duration-300 ${activeTab === 'upcoming' ? 'text-blue-800' : 'text-blue-200 hover:text-white'}`}>Upcoming</button>
//                 <button onClick={() => setActiveTab('past')} className={`relative w-1/2 py-2.5 text-center font-semibold z-10 transition-colors duration-300 ${activeTab === 'past' ? 'text-blue-800' : 'text-blue-200 hover:text-white'}`}>Archive</button>
//             </div>
//         </div>

//         {/* Webinars List */}
//         <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 space-y-16">
//           {(activeTab === 'upcoming' ? upcomingWebinars : pastWebinars).map((webinar, index) => (
//             // FIXED: Added `relative` and a conditional `z-index` to lift the active card and show its dropdown
//             <div key={webinar.id} className={`group grid lg:grid-cols-12 gap-8 items-center animate-fade-in-up relative ${activeCalendar === webinar.id ? 'z-10' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
//               {/* Date */}
//               <div className="lg:col-span-2 text-center">
//                 <p className="text-4xl font-extrabold text-blue-600">{new Date(webinar.date).getDate()}</p>
//                 <p className="text-lg font-semibold text-slate-500">{new Date(webinar.date).toLocaleString('default', { month: 'short' })}</p>
//                 <p className="text-slate-400">{new Date(webinar.date).getFullYear()}</p>
//               </div>

//               {/* Card */}
//               <div className="lg:col-span-10 relative rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
//                 <div className="absolute top-4 right-4 z-10">
//                     {isUpcoming(webinar) && (
//                         <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
//                           Upcoming
//                         </span>
//                     )}
//                 </div>
//                 <div className="flex flex-col md:flex-row items-center">
//                   {/* FIXED: Adjusted image container for better image fit */}
//                   <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-r-none">
//                     <img src={webinar.speaker.image} alt={webinar.speaker.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                   </div>
//                   <div className="p-8 flex-1">
//                     <p className="font-semibold text-blue-600">{webinar.speaker.name}</p>
//                     <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3">{webinar.title}</h3>
//                     <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
//                       <span className="flex items-center gap-2"><Clock size={16} /> {webinar.time}</span>
//                       <span className="flex items-center gap-2"><User size={16} /> {webinar.duration}</span>
//                     </div>
//                     {isUpcoming(webinar) ? (
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transform hover:scale-105 transition-all">
//                           <ExternalLink size={16} /> Register Now
//                         </a>
//                         <div className="relative">
//                           <button onClick={() => setActiveCalendar(activeCalendar === webinar.id ? null : webinar.id)} className="flex w-full items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all">
//                             <Calendar size={16} /> Add to Calendar <ChevronDown size={16} className={`transition-transform ${activeCalendar === webinar.id ? 'rotate-180' : ''}`} />
//                           </button>
//                           {activeCalendar === webinar.id && (
//                             <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl p-2 z-20 animate-fade-in-fast">
//                               <a href={generateCalendarLink('google', webinar)} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-100">Google Calendar</a>
//                               <a href={generateCalendarLink('outlook', webinar)} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-100">Outlook</a>
//                               <a href={generateCalendarLink('ical', webinar)} download={`${webinar.title}.ics`} className="block w-full text-left px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-100">Apple Calendar</a>
//                             </div>
//                           )}
//                         </div>
//                         <button onClick={() => openReminderModal(webinar)} className="p-3 rounded-full text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all"><Bell size={18} /></button>
//                       </div>
//                     ) : (
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <a 
//   href={webinar.recordingLink}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-slate-700 hover:bg-slate-600 transform hover:scale-105 transition-all"
// >
//   <Play size={16} /> Watch Recording
// </a>
//                         <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all">
//                           <Download size={16} /> Download Materials
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Testimonials */}
//       <section className="py-20 bg-slate-50">
//           <div className="max-w-7xl mx-auto px-6 lg:px-8">
//               <div className="text-center mb-16">
//                   <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Trusted by Industry Leaders</h2>
//                   <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Hear from professionals who have gained a competitive edge with our events.</p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
//                   {testimonials.map((t, index) => (
//                       // FIXED: Corrected the inline style syntax for the animation
//                       <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-500 transform-style-3d hover:rotate-y-3 hover:-translate-y-2" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}>
//                           <Quote className="h-12 w-12 text-blue-100 mb-4" />
//                           <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
//                           <div className="flex items-center">
//                               <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover mr-4"/>
//                               <div>
//                                   <p className="font-bold text-slate-900">{t.author}</p>
//                                   <p className="text-sm text-blue-600">{t.title}</p>
//                               </div>
//                           </div>
//                       </div>
//                   ))}
//               </div>
//           </div>
//       </section>

//       {/* Reminder Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in-fast">
//           <div className="relative m-4 max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
//             <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X /></button>
//             {formStatus !== 'success' ? (
//               <>
//                 <div className="text-center">
//                   <Bell className="h-12 w-12 mx-auto text-blue-500 mb-4"/>
//                   <h3 className="text-2xl font-bold text-slate-900">Set a Reminder</h3>
//                   <p className="text-slate-600 mt-2">Get an email notification for:</p>
//                   <p className="font-semibold text-blue-700 mt-4 mb-6">{selectedWebinar.title}</p>
//                 </div>
//                 <form onSubmit={handleFormSubmit}>
//                   <input type="email" required placeholder="you@company.com" className="w-full px-4 py-3 bg-slate-100 text-slate-800 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
//                   <button type="submit" disabled={formStatus === 'submitting'} className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 disabled:bg-blue-300">
//                     {formStatus === 'submitting' ? 'Setting Reminder...' : 'Confirm Reminder'}
//                   </button>
//                 </form>
//               </>
//             ) : (
//               <div className="text-center animate-fade-in">
//                 <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4"/>
//                 <h3 className="text-2xl font-bold text-slate-900">Reminder Set!</h3>
//                 <p className="text-slate-600 mt-2">We'll send a notification to your email before the event starts.</p>
//                 <button onClick={closeModal} className="w-full mt-6 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-4 rounded-lg transition-all">Close</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WebinarsEvents;

import React, { useState } from 'react';
import { Calendar, Clock, User, Play, Download, ExternalLink, Bell, X, CheckCircle, Quote, ChevronDown } from 'lucide-react';

/**
 * NOTE: Archive data below was taken from the user's uploaded Word file.
 * Source: :contentReference[oaicite:1]{index=1}
 */

const WebinarsEvents = () => {
  // State management
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [activeCalendar, setActiveCalendar] = useState(null); // Tracks which calendar dropdown is open

  // Upcoming webinars (kept from original code)
  const webinars = [
    {
      id: '1',
      title: 'The Future of Energy: AI & Sustainable Grids',
      speaker: { name: 'Dr. Anya Sharma', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800' },
      date: '2025-11-25',
      time: '2:00 PM IST',
      duration: '90 minutes',
      description: 'A forward-looking discussion on AI and decentralized sustainable grids.',
      recordingLink: "https://drive.google.com/file/d/xxxxxxx/view",
    },
    {
      id: '2',
      title: 'Advanced HSE Protocols in Deepwater Drilling',
      speaker: { name: 'Michael Chen', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800' },
      date: '2025-12-10',
      time: '4:30 PM IST',
      duration: '75 minutes',
      description: 'Best practices and advanced protocols for HSE in deepwater operations.',
      recordingLink: "https://drive.google.com/file/d/yyyyyyy/view",
    },
    {
      id: '3',
      title: 'The Energy Transition: A Blueprint for Professionals',
      speaker: { name: 'Dr. Elena Vasquez', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800' },
      date: '2025-09-15',
      time: '1:00 PM IST',
      duration: '60 minutes',
      description: 'Practical steps professionals can adopt for the energy transition.',
      recordingLink: "https://drive.google.com/file/d/zzzzzzz/view",
    }
  ];

  // Archive webinars — replaced with content sourced from the uploaded Word file.
  // Dates are set to past placeholders (YYYY-MM-DD) where the Word file did not provide explicit dates.
  const archiveWebinars = [
    {
      id: 'a1',
      title: 'Webinar on Master Carbon Utilization and Storage modelling stimulation',
      speaker: { name: 'Vinod Kumar Madem', image: '' },
      designation: 'Reservoir Engineer',
      date: '2024-06-15',
      time: '11:00 AM IST',
      duration: '45 mins',
      description: 'This webinar provides a practical understanding of Carbon Utilization and Storage through hands-on modelling and simulation techniques. It covers end-to-end workflows to evaluate storage potential, predict performance, and support low-carbon energy decisions.',
      recordingLink: null,
    },
    {
      id: 'a2',
      title: 'Webinar on Data Analytics',
      speaker: { name: 'Jaiyesh Chahar', image: '' },
      designation: 'Machine Learning AI Specialist',
      date: '2024-07-10',
      time: '3:00 PM IST',
      duration: '1 hour 02 mins',
      description: 'This webinar explores core concepts and practical applications of Data Analytics in the Oil & Gas industry, offering participants a clear understanding of how data drives decisions.',
      recordingLink: null,
    },
    {
      id: 'a3',
      title: 'Webinar on CCUS: Carbon Capture, Utilization & Storage',
      speaker: { name: 'Dr. Nitesh Kumar', image: '' },
      designation: 'Consultant',
      date: '2024-11-15',
      time: '2:00 PM IST',
      duration: '54 min',
      description: 'The session covers the end-to-end workflow of CCUS, focusing on capture methods, utilization pathways, and long-term storage strategies.',
      recordingLink: null,
    },
    {
      id: 'a4',
      title: 'Python for Geophysics Data Processing — Gravity & Seismic Analysis Tools',
      speaker: { name: 'Yohanes Nuwara', image: '' },
      designation: 'Sr. Data Scientist Whitson',
      date: '2024-05-08',
      time: '10:30 AM IST',
      duration: '49 min',
      description: 'Covers Python-based techniques for handling gravity and seismic data, demonstrating practical methods for efficient geophysical interpretation.',
      recordingLink: null,
    },
    {
      id: 'a5',
      title: 'Data Science project to Roadmap Your Future',
      speaker: { name: 'Nathan Platter', image: '' },
      designation: 'Business Intelligence Leader',
      date: '2024-03-20',
      time: '4:00 PM IST',
      duration: '36 min',
      description: 'Outlines the complete lifecycle of a Data Science project and breaks down each stage in a practical, beginner-friendly way.',
      recordingLink: null,
    },
    {
      id: 'a6',
      title: 'Data Science Project for Oil & Gas',
      speaker: { name: 'Yogashri Pradhan', image: '' },
      designation: 'Founder Iron Lady Energy Advisors, Petroleum Engineering & Business Professor',
      date: '2024-04-12',
      time: '2:30 PM IST',
      duration: '49 min',
      description: 'Explains how Data Science is applied in the Oil & Gas industry using real project workflows as examples.',
      recordingLink: null,
    },
    {
      id: 'a7',
      title: 'AI Powered Automation for Excel Workflows in Oil and Gas',
      speaker: { name: 'Destiny Otto', image: '' },
      designation: 'Data Scientist/AI ML Engineering',
      date: '2024-02-18',
      time: '11:00 AM IST',
      duration: '1 hr 4 min',
      description: 'Explores how AI can enhance and automate Excel-based workflows to improve efficiency in oil and gas operations.',
      recordingLink: null,
    },
    {
      id: 'a8',
      title: 'Petroleum Geomechanics and Carbon Sequestration',
      speaker: { name: 'Vinod Kumar Madem', image: '' },
      designation: 'Reservoir Engineer',
      date: '2024-08-05',
      time: '4:00 PM IST',
      duration: '48 min',
      description: 'Explores topics around geomechanics and carbon sequestration with practical examples.',
      recordingLink: null,
    },
    {
      id: 'a9',
      title: 'Decarbonization Strategies for the Oil & Gas Industry',
      speaker: { name: 'Vinod Kumar Madem', image: '' },
      designation: 'Reservoir Engineer',
      date: '2024-12-01',
      time: '1:00 PM IST',
      duration: '31 min',
      description: 'Practical strategies and emerging technologies to reduce carbon emissions in the oil and gas sector.',
      recordingLink: null,
    },
    {
      id: 'a10',
      title: 'Production & Cost Analysis in Field Development Planning',
      speaker: { name: 'Vikas Kooneti', image: '' },
      designation: 'Senior Energy Analyst',
      date: '2024-06-25',
      time: '3:30 PM IST',
      duration: '50 min',
      description: 'Focuses on optimizing field development plans using production forecasting and cost analysis techniques.',
      recordingLink: null,
    },
    {
      id: 'a11',
      title: 'Master AI Tools Without Coding',
      speaker: { name: 'Yogashri Pradhan', image: '' },
      designation: 'Founder Iron Lady Energy Advisors',
      date: '2024-09-10',
      time: '5:00 PM IST',
      duration: '18 min',
      description: 'Introduces powerful AI tools that can be used without any programming knowledge.',
      recordingLink: null,
    },
    {
      id: 'a12',
      title: 'Production Analysis & Nodal Analysis with Python and Machine Learning',
      speaker: { name: 'Oscar Daniel Hernandez Mendoza', image: '' },
      designation: 'Reservoir Engineer',
      date: '2024-10-18',
      time: '11:00 AM IST',
      duration: '1 hr 09 min',
      description: 'Demonstrates how Python and machine learning can be applied to production and nodal analysis.',
      recordingLink: null,
    },
    {
      id: 'a13',
      title: 'GIS & Remote Sensing Webinar — Day 1',
      speaker: { name: 'Monalisa Dash', image: '' },
      designation: 'Geologist',
      date: '2024-01-09',
      time: '9:30 AM IST',
      duration: '1 hr 43 min',
      description: 'Day 1 introduces the fundamentals of GIS and remote sensing with real-world applications.',
      recordingLink: null,
    },
    {
      id: 'a14',
      title: 'Field Development Planning: From Concept to Execution',
      speaker: { name: 'Vikas Kooneti', image: '' },
      designation: 'Senior Energy Analyst',
      date: '2024-07-18',
      time: '10:00 AM IST',
      duration: '45 min',
      description: 'Covers the complete journey of field development planning from concept to execution.',
      recordingLink: null,
    },
    {
      id: 'a15',
      title: 'Well Test Interpretation Using MS Excel',
      speaker: { name: 'Vinod Kumar Madem', image: '' },
      designation: 'Reservoir Engineer',
      date: '2024-05-20',
      time: '2:00 PM IST',
      duration: '1 hr 16 min',
      description: 'Demonstrates how MS Excel can be used to analyze well test data and interpret reservoir performance.',
      recordingLink: null,
    },
    {
      id: 'a16',
      title: 'Production Optimization using Nodal Analysis',
      speaker: { name: 'Vinod Kumar Madem', image: '' },
      designation: 'Reservoir Engineer',
      date: '2024-03-29',
      time: '11:00 AM IST',
      duration: '44 min',
      description: 'Focuses on improving well performance through nodal analysis techniques and production optimization strategies.',
      recordingLink: null,
    },
    {
      id: 'a17',
      title: 'Well Testing Designing & Analysis (May 2024)',
      speaker: { name: 'Vinod Kumar Madem', image: '' },
      designation: 'Reservoir Engineer',
      date: '2024-05-10',
      time: '12:00 PM IST',
      duration: '1 hr 01 min',
      description: 'Explores the process of designing and analysing well tests to evaluate reservoir properties and production potential.',
      recordingLink: null,
    },
    {
      id: 'a18',
      title: 'Python in Oil & Gas (Sept Webinar)',
      speaker: { name: 'Divyanshu Vyas', image: '' },
      designation: 'Data Scientist',
      date: '2024-09-05',
      time: '2:00 PM IST',
      duration: '55 min',
      description: 'Introduces the role of Python in solving real-world challenges in the oil and gas industry.',
      recordingLink: null,
    },
    {
      id: 'a19',
      title: 'Seismic Exploration Methods',
      speaker: { name: 'Khalid Amin Khan', image: '' },
      designation: 'Geologist',
      date: '2024-04-03',
      time: '10:30 AM IST',
      duration: '49 min',
      description: 'Introduces seismic exploration techniques used to locate and evaluate subsurface structures.',
      recordingLink: null,
    },
    {
      id: 'a20',
      title: 'Making an Oil Field — A Gender-Neutral Place',
      speaker: { name: 'Ms. Prajakta Kulkarni', image: '' },
      designation: 'Manager',
      date: '2024-08-28',
      time: '3:00 PM IST',
      duration: '1 hr 12 min',
      description: 'Explores strategies to create an inclusive and gender-neutral environment in oil and gas workspaces and field operations.',
      recordingLink: null,
    },
    {
      id: 'a21',
      title: 'GIS & Remote Sensing Webinar — Day 2',
      speaker: { name: 'Monalisa Dash', image: '' },
      designation: 'Geologist',
      date: '2024-02-27',
      time: '9:30 AM IST',
      duration: '1 hr 13 min',
      description: 'Day 2 focuses on application of GIS and remote sensing tools for spatial analysis and data interpretation.',
      recordingLink: null,
    },
    {
      id: 'a22',
      title: 'Oilfield Data Analytics with Power BI (Edited)',
      speaker: { name: 'Destiny Otto', image: '' },
      designation: 'Data Scientist/ AIML Engineer',
      date: '2024-10-02',
      time: '11:00 AM IST',
      duration: '1 hr 59 min',
      description: 'Demonstrates how Power BI can be used to analyze oilfield operations and visualize KPIs.',
      recordingLink: null,
    },
  ];

  // Helper Functions
  const upcomingWebinars = webinars.filter(w => new Date(w.date) >= new Date());
  const isUpcoming = (webinar) => new Date(webinar.date) >= new Date();

  // Calendar Link Generation (unchanged)
  const generateCalendarLink = (type, webinar) => {
    const formatTime = (date, time) => new Date(`${date} ${time.replace('IST', 'GMT+0530')}`);
    const startTime = formatTime(webinar.date, webinar.time);
    // Parse duration in minutes (attempt to extract digits, fallback to 60)
    const durationMinutes = (() => {
      const match = webinar.duration && webinar.duration.match(/(\d+)/);
      return match ? parseInt(match[1], 10) : 60;
    })();
    const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

    const title = encodeURIComponent(webinar.title);
    const details = encodeURIComponent(webinar.description || '');

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
        `DESCRIPTION:${webinar.description || ''}`,
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
            <div className="relative flex items-center bg-blue-600 rounded-full p-1 shadow-inner">
                <span
                    className="absolute left-1 top-1 h-[calc(100%-0.5rem)] bg-white shadow-md rounded-full transition-transform duration-300 ease-in-out"
                    style={{
                        width: 'calc(50% - 0.25rem)',
                        transform: activeTab === 'upcoming' ? 'translateX(0%)' : 'translateX(100%)',
                    }}
                ></span>
                <button onClick={() => setActiveTab('upcoming')} className={`relative w-1/2 py-2.5 text-center font-semibold z-10 transition-colors duration-300 ${activeTab === 'upcoming' ? 'text-blue-800' : 'text-blue-200 hover:text-white'}`}>Upcoming</button>
                <button onClick={() => setActiveTab('past')} className={`relative w-1/2 py-2.5 text-center font-semibold z-10 transition-colors duration-300 ${activeTab === 'past' ? 'text-blue-800' : 'text-blue-200 hover:text-white'}`}>Archive</button>
            </div>
        </div>

        {/* Webinars List */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 space-y-16">
          {(activeTab === 'upcoming' ? upcomingWebinars : archiveWebinars).map((webinar, index) => (
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
                  <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-r-none bg-slate-100 flex items-center justify-center">
                    {webinar.speaker.image ? (
                      <img src={webinar.speaker.image} alt={webinar.speaker.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="text-sm text-slate-500 px-4 text-center">
                        <div className="font-semibold">{webinar.speaker.name}</div>
                        <div className="text-xs mt-1">{webinar.designation || ''}</div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex-1">
                    <p className="font-semibold text-blue-600">{webinar.speaker.name}{webinar.designation ? ` — ${webinar.designation}` : ''}</p>
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
                        {webinar.recordingLink ? (
                          <a 
                            href={webinar.recordingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-slate-700 hover:bg-slate-600 transform hover:scale-105 transition-all"
                          >
                            <Play size={16} /> Watch Recording
                          </a>
                        ) : (
                          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all" disabled>
                            <Play size={16} /> Recording Not Available
                          </button>
                        )}
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
                  {/* Example testimonials — you can replace these with real ones later */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-500 transform-style-3d hover:rotate-y-3 hover:-translate-y-2" style={{ animation: `fadeInUp 0.5s 0s ease-out forwards`, opacity: 1 }}>
                      <Quote className="h-12 w-12 text-blue-100 mb-4" />
                      <p className="text-slate-700 italic mb-6">"The insights were not just theoretical but immediately actionable. Truly exceptional!"</p>
                      <div className="flex items-center">
                          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="David Chen" className="w-12 h-12 rounded-full object-cover mr-4"/>
                          <div>
                              <p className="font-bold text-slate-900">David Chen</p>
                              <p className="text-sm text-blue-600">Operations Director, Apex Energy</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-500 transform-style-3d hover:rotate-y-3 hover:-translate-y-2" style={{ animation: `fadeInUp 0.5s 0.1s ease-out forwards`, opacity: 1 }}>
                      <Quote className="h-12 w-12 text-blue-100 mb-4" />
                      <p className="text-slate-700 italic mb-6">"I've never attended a virtual event with such high-caliber speakers and seamless production."</p>
                      <div className="flex items-center">
                          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Aisha Khan" className="w-12 h-12 rounded-full object-cover mr-4"/>
                          <div>
                              <p className="font-bold text-slate-900">Aisha Khan</p>
                              <p className="text-sm text-blue-600">Lead Safety Engineer, Trident Offshore</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-500 transform-style-3d hover:rotate-y-3 hover:-translate-y-2" style={{ animation: `fadeInUp 0.5s 0.2s ease-out forwards`, opacity: 1 }}>
                      <Quote className="h-12 w-12 text-blue-100 mb-4" />
                      <p className="text-slate-700 italic mb-6">"This is the single most valuable resource for staying current in the fast-evolving energy landscape."</p>
                      <div className="flex items-center">
                          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Ben Carter" className="w-12 h-12 rounded-full object-cover mr-4"/>
                          <div>
                              <p className="font-bold text-slate-900">Ben Carter</p>
                              <p className="text-sm text-blue-600">Senior Reservoir Engineer, GeoDynamics</p>
                          </div>
                      </div>
                  </div>
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
                  <p className="font-semibold text-blue-700 mt-4 mb-6">{selectedWebinar?.title}</p>
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
