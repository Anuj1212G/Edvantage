import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, Users, Award, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Edvantage Learning
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-blue-100'}`}>
                Oil & Gas Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>Home</a>
            <div className="relative group">
              <button className={`flex items-center hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#diploma" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Diploma Programs</a>
                <a href="#instructor-led" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Instructor-Led Training</a>
                <a href="#e-learning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">E-Learning</a>
                <a href="#corporate" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Corporate Training</a>
              </div>
            </div>
            <a href="#about" className={`hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>About</a>
            <a href="#webinars" className={`hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>Webinars</a>
            <a href="#placements" className={`hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>Placements</a>
            <a href="#contact" className={`hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
            <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home</a>
            <a href="#programs" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Programs</a>
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">About</a>
            <a href="#webinars" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Webinars</a>
            <a href="#placements" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Placements</a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
            <div className="px-4 pt-2">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;