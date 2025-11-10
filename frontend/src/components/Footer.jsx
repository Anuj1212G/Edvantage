import React from 'react';
import {
  // Re-added social icons
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Send, // Using Send for Telegram
  MessageSquare
} from 'lucide-react';

const Footer = () => {
  const contactDetails = {
    address: 'Edvantage Learning Solution, Delhi, INDIA',
    phone: '+91 6200261265',
    email: ' info@edvantage.org.in',
    whatsapp: '+91 6200261265'
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Industry Insights</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest news, program updates, and industry insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
              />
              {/* --- UPDATED: Added transform and transition-all --- */}
              <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5">
                <Send className="h-4 w-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div>
                <img
                  src="/images/LOGO_Footer.png"
                  alt="Edvantage Learning Solution Logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering oil & gas professionals with world-class training, consultancy, and industry connections for career advancement.
            </p>
            {/* --- UPDATED: Added transform and hover:-translate-y-1 --- */}
            <div className="flex space-x-4">
              <a
                href="http://linkedin.com/company/edvantagelearning"
                target="_blank"
                rel="noopener noreferrer"
                // LinkedIn blue
                className="p-2 bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@edvantagelearning3858?si=TLki2lnqssumN4-N"
                target="_blank"
                rel="noopener noreferrer"
                // YouTube red
                className="p-2 bg-[#FF0000] hover:bg-[#C00000] rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/edvantage_learning?igsh=bnB2anRxdmt3emZk"
                target="_blank"
                rel="noopener noreferrer"
                // Instagram pink/purple
                className="p-2 bg-[#C13584] hover:bg-[#8F2762] rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://t.me/+1ak9gUgTZ44yZjll"
                target="_blank"
                rel="noopener noreferrer"
                // Telegram blue
                className="p-2 bg-[#2AABEE] hover:bg-[#1E88C6] rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Training Programs',
                'Webinars & Events',
                'Success Stories',
                'Blog & Articles'
              ].map((link, index) => (
                <li key={index}>
                  {/* --- UPDATED: Changed hover text color --- */}
                  <a href="#" className="text-gray-300 hover:text-teal-400 hover:translate-x-1 transition-all duration-200 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Training Programs</h3>
            <ul className="space-y-3">
              {[
                'Diploma Programs',
                'Instructor-Led Training',
                'E-Learning Courses',
                'Corporate Training',
                'Petroleum Engineering',
                'HSE Management',
                'Digital Oil Field'
              ].map((program, index) => (
                <li key={index}>
                  {/* --- UPDATED: Changed hover text color --- */}
                  <a href="#" className="text-gray-300 hover:text-teal-400 hover:translate-x-1 transition-all duration-200 inline-block">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{contactDetails.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300">{contactDetails.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300">{contactDetails.email}</p>
              </div>
            </div>

            
          </div>
        </div>

        {/* --- REVISED ACHIEVEMENT STATS --- */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {/* --- Stat Card --- */}
            {/* --- UPDATED: Removed hover:bg-gray-700, added border and hover:border-teal-500 --- */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-teal-500">
              <div className="text-3xl font-bold text-teal-400 mb-2">10000+</div>
              <div className="text-gray-400">Professionals Trained</div>
            </div>
            {/* --- Stat Card --- */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-teal-500">
              <div className="text-3xl font-bold text-teal-400 mb-2">20+</div>
              <div className="text-gray-400">Corporate Partners</div>
            </div>
            {/* --- Stat Card --- */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-teal-500">
              <div className="text-3xl font-bold text-teal-400 mb-2">40+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            {/* --- Stat Card --- */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-teal-500">
              <div className="text-3xl font-bold text-teal-400 mb-2">95%</div>
              <div className="text-gray-400">Job Placement Rate</div>
            </div>
            {/* --- Stat Card --- */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-teal-500">
              <div className="text-3xl font-bold text-teal-400 mb-2">10+</div>
              <div className="text-gray-400">Universities Collaboration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {/* Removed company name from copyright */}
              © 2025. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;