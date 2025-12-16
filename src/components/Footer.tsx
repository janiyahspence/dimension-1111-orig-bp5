import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { siteData } from '../constants/siteData';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <Mountain className="h-8 w-8 text-amber-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Dimension 11:11
                </span>
                <span className="text-xs text-amber-400 tracking-wider">
                  KASOL, PARVATI VALLEY
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {siteData.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={siteData.social.facebook}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteData.social.instagram}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteData.social.twitter}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="hover:text-amber-400 transition-colors text-sm">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link to="/cafe" className="hover:text-amber-400 transition-colors text-sm">
                  Cafe & Dining
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-amber-400 transition-colors text-sm">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${siteData.contact.phone}`} className="hover:text-amber-400 transition-colors text-sm">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-amber-400 transition-colors text-sm">
                  {siteData.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  {siteData.contact.address}<br />
                  {siteData.contact.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Timings</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-amber-400">Check-in:</span> {siteData.timings.checkIn}
              </li>
              <li>
                <span className="text-amber-400">Check-out:</span> {siteData.timings.checkOut}
              </li>
              <li>
                <span className="text-amber-400">Cafe Hours:</span> {siteData.timings.cafeOpen} - {siteData.timings.cafeClose}
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-amber-500/20">
              <p className="text-xs text-gray-400 mb-2">Payment Methods</p>
              <p className="text-sm text-white font-medium">Cash Only</p>
              <p className="text-xs text-gray-400 mt-1">Please ensure you have sufficient cash</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Dimension 11:11. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made with love in the Himalayas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
