import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-2'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="resources\founder.jpg"
              alt="Founder"
              className="w-30 h-20 object-cover border border-gray-300"
            />
            <img
              src="resources/logo-removebg-preview-Picsart-AiImageEnhancer.png"
              alt="KAI. LUKA GANPATHSHETH BADGUJAR CHARITABLE TRUST Logo"
              className="w-30 h-20 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-serif font-bold text-gray-900">
                KAI. LUKA GANPATHSHETH
              </span>
              <span className="text-lg font-serif font-bold text-gray-900">
                BADGUJAR CHARITABLE TRUST
              </span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-semibold hover:text-teal-600 transition-colors ${isActive(link.path) ? 'text-teal-600 underline' : 'text-gray-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* 
          <div className="hidden md:block">
            <Link to="/donate">
              <Button>Donate Now</Button>
            </Link>
          </div> */}

          <div className="hidden md:block">
            <Link to="/donate">
              <Button className="text-lg px-6 py-3">Donate Now</Button>
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium hover:text-teal-600 transition-colors ${isActive(link.path)
                    ? 'text-teal-600 font-semibold'
                    : 'text-gray-700'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/donate" className="pt-2">
                <Button className="w-full">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;