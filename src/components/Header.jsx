import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/whyus' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact', path: '/contact' },
    { name: 'Feedback', path: '/feedback' },
  ];

  return (
    <header className="bg-black shadow-lg fixed w-full z-50 border-b border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group transition-all duration-300 hover:scale-105"
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto rounded-full border-2 border-white"
            />
            <span className="ml-3 text-2xl font-bold text-white font-poppins">
              <span className="text-orange-500">Vijayaa</span> Makeovers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-white/90 hover:text-orange-500 px-3 py-2 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-white hover:text-orange-500 transition-colors duration-300"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-black/95 backdrop-blur-sm border-t border-orange-500/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-6 py-3 text-white/90 hover:text-orange-500 hover:bg-white/5 transition-all duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <span className="w-1 h-6 bg-orange-500 opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300"></span>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;