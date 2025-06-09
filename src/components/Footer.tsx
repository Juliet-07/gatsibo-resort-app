import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-20 pb-8 bg-gradient-to-b from-[#365a3e] to-[#064c3f]">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="inline-block">
              <img
                src="/gatsibo-resort-logo.webp"
                alt="Gatsibo Resort Logo"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl font-light tracking-[0.2em] uppercase">
            Gatsibo Paradise
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div>
            <h3 className="text-sm font-light tracking-[0.15em] uppercase mb-8 italic">
              About
            </h3>
            {/* <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  SUSTAINABILITY
                </Link>
              </li>
              <li>
                <Link
                  to="/health-safety"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  HEALTH AND SAFETY
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  CAREERS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  CONTACT US
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Reservations Column */}
          <div>
            <h3 className="text-sm font-light tracking-[0.15em] uppercase mb-8 italic">
              Resort Offering
            </h3>
            {/* <ul className="space-y-4">
              <li>
                <Link
                  to="/booking"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  REQUEST AN INVOICE
                </Link>
              </li>
              <li>
                <Link
                  to="/apartments"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  FIND A RESERVATION
                </Link>
              </li>
              <li>
                <Link
                  to="/preferences"
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  EMAIL PREFERENCES
                </Link>
              </li>
            </ul> */}
          </div>

          {/* News Column */}
          <div>
            <Link to="/cultural-center">
              <h3 className="text-sm font-light tracking-[0.15em] uppercase mb-8 italic">
                Cultural Center
              </h3>
            </Link>
            {/* <ul className="space-y-4">
              <li>
                <Link 
                  to="/press" 
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  PRESS ROOM
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  NEW OPENINGS
                </Link>
              </li>
              <li>
                <Link 
                  to="/magazine" 
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  MAGAZINE
                </Link>
              </li>
              <li>
                <Link 
                  to="/newsletter" 
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  NEWSLETTER
                </Link>
              </li>
            </ul> */}
          </div>

          {/* More Column */}
          <div>
            <Link to="/gallery">
              <h3 className="text-sm font-light tracking-[0.15em] uppercase mb-8 italic">
                Gallery
              </h3>
            </Link>
            <ul className="space-y-4">
              {/* <li>
                <Link 
                  to="/residences" 
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  RESIDENCES
                </Link>
              </li>
              <li>
                <Link 
                  to="/villa-rentals" 
                  className="text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors"
                >
                  VILLA & RESIDENCE RENTALS
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6 md:justify-start w-full md:w-auto">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          {/* Language Selector */}
          {/* <div className="flex md:justify-end w-full md:w-auto">
              <div className="inline-flex items-center space-x-2">
                <span className="text-sm font-light tracking-wide uppercase">ENGLISH</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div> */}
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-100 pt-4">
          {/* <div className="flex flex-wrap justify-start items-center gap-x-3 gap-y-4 mb-6">
            <Link to="/legal" className="text-xs tracking-wide hover:text-gray-300 transition-colors">
              Legal Notice
            </Link>
            <span className="text-light">•</span>
            <Link to="/privacy" className="text-xs tracking-wide hover:text-gray-300 transition-colors">
              Privacy Notice
            </Link>
            <span className="text-light">•</span>
            <Link to="/cookies" className="text-xs tracking-wide hover:text-gray-300 transition-colors">
              Cookie Preferences
            </Link>
            <span className="text-light">•</span>
            <Link to="/do-not-sell" className="text-xs tracking-wide hover:text-gray-300 transition-colors">
              Do Not Sell My Personal Information
            </Link>
          </div> */}

          <div className="text-left">
            <p className="text-xs text-light">
              ©Gatsibo Paradise Resort & Cultural Center {currentYear}. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
