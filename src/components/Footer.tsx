import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-12">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr] gap-4 items-start">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="resources\logo-removebg-preview-Picsart-AiImageEnhancer.png"
                alt="HopeCharity Logo"
                className="w-40 h-21 object-contain"
              />
              <span className="text-xl font-serif font-bold">KAI. LUKA GANPATHSHETH BADGUJAR CHARITABLE TRUST</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Dedicated to creating positive change in communities through sustainable
              development, education, and humanitarian aid.
            </p>

            <div className="flex space-x-5 mt-4">
              <div className="transition-transform transform hover:scale-125">
                <SocialIcon url="https://www.facebook.com/yourpage" target="_blank" />
              </div>
              <div className="transition-transform transform hover:scale-125">
                <SocialIcon url="https://twitter.com/yourprofile" target="_blank" />
              </div>
              <div className="transition-transform transform hover:scale-125">
                <SocialIcon url="https://www.instagram.com/yourprofile" target="_blank" />
              </div>
              <div className="transition-transform transform hover:scale-125">
                <SocialIcon url="https://www.linkedin.com/in/yourprofile" target="_blank" />
              </div>
              <div className="transition-transform transform hover:scale-125">
                <SocialIcon url="https://www.youtube.com/channel/yourchannel" target="_blank" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Bramha Sky City, Dhanori, Pune 411015, Maharashtra, India. 
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">+91 8600899909</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">lukaganpathcharitabletrust@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on our work and how you can help.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KAI. LUKA GANPATHSHETH BADGUJAR CHARITABLE TRUST. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-teal-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-teal-500 transition-colors">
              Refund Policy
            </Link>
            <Link to="/terms" className="hover:text-teal-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;