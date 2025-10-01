import React, { useState } from 'react';
import { Calendar, Clock, User, Play, Download, ExternalLink, Bell } from 'lucide-react';
import type { Webinar } from '../types';

const WebinarsEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const webinars: Webinar[] = [
    {
      id: '1',
      title: 'Future of Digital Oil Fields: AI and Machine Learning Applications',
      speaker: {
        name: 'Dr. Sarah Mitchell',
        bio: 'Former VP of Engineering at ExxonMobil with 25+ years of experience in reservoir engineering and digital transformation.',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
        credentials: ['PhD Petroleum Engineering', 'SPE Distinguished Lecturer', 'Digital Innovation Expert']
      },
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      description: 'Explore how artificial intelligence and machine learning are revolutionizing oil field operations, from predictive maintenance to production optimization.',
      topics: [
        'AI applications in reservoir management',
        'Predictive analytics for equipment maintenance',
        'Machine learning for production forecasting',
        'Case studies from leading operators',
        'Implementation roadmap and best practices'
      ],
      registrationUrl: '#',
      isUpcoming: true
    },
    {
      id: '2',
      title: 'HSE Excellence in Offshore Operations: Lessons from Industry Leaders',
      speaker: {
        name: 'Michael Rodriguez',
        bio: 'HSE Director with 20+ years of experience in offshore operations and safety management systems.',
        image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
        credentials: ['MS Safety Engineering', 'NEBOSH Diploma', 'Offshore Safety Expert']
      },
      date: '2025-02-22',
      time: '3:00 PM EST',
      duration: '75 minutes',
      description: 'Learn from industry leaders about implementing world-class HSE practices in challenging offshore environments.',
      topics: [
        'Risk assessment methodologies',
        'Safety culture development',
        'Emergency response planning',
        'Regulatory compliance strategies',
        'Technology integration in HSE'
      ],
      registrationUrl: '#',
      isUpcoming: true
    },
    {
      id: '3',
      title: 'Energy Transition: Opportunities for Oil & Gas Professionals',
      speaker: {
        name: 'Dr. Elena Rodriguez',
        bio: 'Energy transition consultant and former Chevron executive specializing in renewable energy integration.',
        image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
        credentials: ['PhD Chemical Engineering', 'Energy Transition Expert', 'Sustainability Leader']
      },
      date: '2025-01-20',
      time: '1:00 PM EST',
      duration: '60 minutes',
      description: 'Discover career opportunities and skill requirements as the energy industry transitions toward sustainable solutions.',
      topics: [
        'Career paths in renewable energy',
        'Transferable skills from O&G',
        'Upskilling for energy transition',
        'Industry outlook and trends',
        'Success stories and case studies'
      ],
      registrationUrl: '#',
      isUpcoming: false
    }
  ];

  const upcomingWebinars = webinars.filter(w => w.isUpcoming);
  const pastWebinars = webinars.filter(w => !w.isUpcoming);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const addToCalendar = (webinar: Webinar) => {
    const startDate = new Date(`${webinar.date} ${webinar.time}`);
    const endDate = new Date(startDate.getTime() + 90 * 60000); 
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(webinar.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(webinar.description)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Orange changed to Teal */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars & Events</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay ahead with expert insights, industry trends, and networking opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Upcoming Events ({upcomingWebinars.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'past'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Past Events ({pastWebinars.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {(activeTab === 'upcoming' ? upcomingWebinars : pastWebinars).map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Speaker Section */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-teal-50 p-8">
                    <div className="text-center">
                      <img 
                        src={webinar.speaker.image} 
                        alt={webinar.speaker.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.speaker.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{webinar.speaker.bio}</p>
                      
                      <div className="space-y-2">
                        {webinar.speaker.credentials.map((credential, idx) => (
                          <div key={idx} className="bg-white px-3 py-1 rounded-full text-xs text-gray-700">
                            {credential}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            webinar.isUpcoming 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {webinar.isUpcoming ? 'Upcoming' : 'Recorded'}
                          </span>
                          {webinar.isUpcoming && (
                            <button
                              onClick={() => addToCalendar(webinar)}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                            >
                              <Bell className="h-4 w-4" />
                              <span>Add to Calendar</span>
                            </button>
                          )}
                        </div>
                        
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{webinar.title}</h2>
                        <p className="text-gray-600 text-lg">{webinar.description}</p>
                      </div>

                      {/* Event Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-gray-500">Date</div>
                            <div className="font-semibold">{formatDate(webinar.date)}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-gray-500">Time</div>
                            <div className="font-semibold">{webinar.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <User className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-gray-500">Duration</div>
                            <div className="font-semibold">{webinar.duration}</div>
                          </div>
                        </div>
                      </div>

                      {/* Topics Covered */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics Covered</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {webinar.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                        {webinar.isUpcoming ? (
                          <>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                              <ExternalLink className="h-4 w-4" />
                              <span>Register Now</span>
                            </button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                              <Bell className="h-4 w-4" />
                              <span>Set Reminder</span>
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                              <Play className="h-4 w-4" />
                              <span>Watch Recording</span>
                            </button>
                            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                              <Download className="h-4 w-4" />
                              <span>Download Materials</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Event</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter and get notified about upcoming webinars and exclusive industry events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
            />
            <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-colors text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsEvents;