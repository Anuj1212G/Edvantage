import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Send, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  // Contact details derived from the PEA screenshot in your document
  const contactDetails = {
    address: 'PETROLEUM ENGINEERS ASSOCIATION, JHARKHAND, INDIA',
    phone: '+91 6205464268',
    email: 'info@peassociations.com', // Keeping this placeholder for demonstration, usually would be info@edvantagelearning.com
    whatsapp: '+91 6205464268'
  };

  return (
    <footer className="bg-gray-900 text-white">
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
                className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900" // Orange changed to Teal
              />
              <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"> {/* Orange changed to Teal */}
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
            <div className="flex items-center space-x-2 mb-6">
              {/* Orange changed to Teal */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-2 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Edvantage Learning</h2>
                <p className="text-gray-400 text-sm">Oil & Gas Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering oil & gas professionals with world-class training, consultancy, and industry connections for career advancement.
            </p>
            <div className="flex space-x-4">
              {/* Social links use blue hover state */}
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
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
                'Partnerships',
                'Consultancy Services',
                'Blog & Articles'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors"> {/* Orange changed to Teal */}
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
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors"> {/* Orange changed to Teal */}
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Integrated PEA data */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" /> {/* Orange changed to Teal */}
                <div>
                  <p className="text-gray-300">
                    {contactDetails.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" /> {/* Orange changed to Teal */}
                <p className="text-gray-300">{contactDetails.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" /> {/* Orange changed to Teal */}
                <p className="text-gray-300">{contactDetails.email}</p>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-6 p-4 bg-green-600 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Need Quick Help?</h4>
                <p className="text-sm text-white/80">{contactDetails.whatsapp}</p>
              </div>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Chat</span>
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Stats - Orange changed to Teal */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">5000+</div> {/* Orange changed to Teal */}
              <div className="text-gray-400">Professionals Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">20+</div> {/* Orange changed to Teal */}
              <div className="text-gray-400">Corporate Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">10+</div> {/* Orange changed to Teal */}
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">95%</div> {/* Orange changed to Teal */}
              <div className="text-gray-400">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Edvantage Learning. All rights reserved.
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