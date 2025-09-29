import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, LogIn, UserPlus } from 'lucide-react';
import LoginModal from './Auth/LoginModal';
import SignupModal from './Auth/SignupModal';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

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
            <Link to="/" className={`hover:text-orange-500 transition-colors ${
              location.pathname === '/' ? 'text-orange-500' : 
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>Home</Link>
            <div className="relative group">
              <button className={`flex items-center hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/programs" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">All Programs</Link>
                <Link to="/programs?category=diploma" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Diploma Programs</Link>
                <Link to="/programs?category=instructor-led" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Instructor-Led Training</Link>
                <Link to="/programs?category=e-learning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">E-Learning</Link>
              </div>
            </div>
            <Link to="/about" className={`hover:text-orange-500 transition-colors ${
              location.pathname === '/about' ? 'text-orange-500' : 
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>About</Link>
            <Link to="/webinars" className={`hover:text-orange-500 transition-colors ${
              location.pathname === '/webinars' ? 'text-orange-500' : 
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>Webinars</Link>
            <Link to="/placements" className={`hover:text-orange-500 transition-colors ${
              location.pathname === '/placements' ? 'text-orange-500' : 
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>Placements</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setShowLoginModal(true)}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
            <button 
              onClick={() => setShowSignupModal(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
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
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/programs" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Programs</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/webinars" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Webinars</Link>
            <Link to="/placements" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Placements</Link>
            <div className="px-4 pt-2">
              <button 
                onClick={() => setShowLoginModal(true)}
                className="w-full mb-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-lg"
              >
                Login
              </button>
              <button 
                onClick={() => setShowSignupModal(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modals */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
    </header>
  );
};

export default Header;