import React from 'react';
import { FiMapPin, FiPhone, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../styles/footer.css'; // Make sure this path matches your project structure

const Footer = () => {
  return (
    <footer className="footer-container text-white border-t border-orange-500/20">
      <div className="w-full px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-12 w-auto rounded-full border-2 border-white"
              />
              <span className="ml-3 text-2xl font-bold font-poppins">
                <span className="text-orange-500">Vijayaa</span> Makeovers
              </span>
            </div>
            <p className="text-gray-400">Transforming beauty with precision and care</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/vijayaa_makeovers" className="text-white hover:text-orange-500 transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="https://www.instagram.com/vijayaa_makeovers" className="text-white hover:text-orange-500 transition-colors">
                <FiFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {['services', 'About Us', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-white/90 hover:text-orange-500 transition-colors group w-fit"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-orange-500" />
                <p>
                  2nd Floor, Telangana Co-Operative Bank,<br />
                  Bhramhanpally 'X' Road, Near K.B School,<br />
                  Turkayamjal, Hyderabad, Telangana
                </p>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 text-orange-500" />
                <div>
                  <a href="tel:8977288700" className="hover:text-orange-500 transition-colors">8977288700</a><br />
                  <a href="tel:9182128700" className="hover:text-orange-500 transition-colors">9182128700</a>
                </div>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-3 text-orange-500" />
                <p>Open: 10 AM - 8 PM (Mon-Sun)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-orange-500/20 pt-8 text-center">
          <p className="text-gray-400">
            © Vijayaa Makeovers 2025. All Rights Reserved.
            <span className="mx-4">|</span>
            <a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <span className="mx-4">|</span>
            <a href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
