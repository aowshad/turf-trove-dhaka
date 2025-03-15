
import React from 'react';
import { ArrowRight, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gradient">Matth Periye</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Book sports fields in Dhaka with ease. Find the perfect turf for football, cricket, badminton, and more.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-darker hover:bg-brand-accent/20 text-white/70 hover:text-brand-accent transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-darker hover:bg-brand-accent/20 text-white/70 hover:text-brand-accent transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-darker hover:bg-brand-accent/20 text-white/70 hover:text-brand-accent transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Fields', 'Locations', 'How it Works', 'List Your Field', 'Book a Turf'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-white/70 hover:text-white text-sm flex items-center transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Popular Locations</h3>
            <ul className="space-y-3">
              {['Dhanmondi', 'Mirpur', 'Gulshan', 'Bashundhara', 'Uttara', 'Banani'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-white/70 hover:text-white text-sm flex items-center transition-colors"
                  >
                    <MapPin className="w-3 h-3 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-accent mr-3 mt-0.5" />
                <span className="text-white/70 text-sm">
                  123 Sonargaon Road, Dhaka 1205, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-accent mr-3" />
                <a href="mailto:info@matthperiye.com" className="text-white/70 hover:text-white text-sm transition-colors">
                  info@matthperiye.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-accent mr-3" />
                <a href="tel:+8801712345678" className="text-white/70 hover:text-white text-sm transition-colors">
                  +880 1712 345 678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 py-8 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-semibold text-white">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 text-sm">
              Get the latest updates on new fields, promotions, and sports events in Dhaka
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 bg-brand-darker text-white placeholder:text-white/40 rounded-lg border border-white/10 focus:outline-none focus:border-brand-accent"
              />
              <button className="btn-primary py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Matth Periye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
