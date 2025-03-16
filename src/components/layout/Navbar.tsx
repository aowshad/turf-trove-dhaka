
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'bn' for Bangla

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
    // In a real app, this would trigger language change throughout the app
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fields', path: '/fields' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const languageText = {
    en: {
      signIn: 'Sign In',
      register: 'Register',
      language: 'EN'
    },
    bn: {
      signIn: 'লগইন',
      register: 'নিবন্ধন',
      language: 'বাং'
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-brand-darkest/95 backdrop-blur-md border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <h1 className="text-xl font-bold text-gradient">Matth Periye</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark border border-white/10 hover:bg-brand-dark/80 transition-all"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            <Globe className="w-5 h-5 text-white/80" />
            <span className="sr-only md:not-sr-only md:ml-2 text-xs font-medium text-white/80">
              {languageText[language].language}
            </span>
          </button>
          <Link to="/search">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark border border-white/10 hover:bg-brand-dark/80 transition-all">
              <Search className="w-5 h-5 text-white/80" />
            </button>
          </Link>
          <Button 
            variant="primary"
            size="sm"
            asChild
          >
            <Link to="/login" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{languageText[language].signIn}</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-brand-darkest/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container h-full flex flex-col pt-20 px-8">
          <nav className="flex flex-col space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white/90 hover:text-white text-lg font-medium py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-10 flex flex-col space-y-4">
            <div className="flex justify-between mb-4">
              <button 
                className="flex items-center justify-center px-3 py-2 rounded-lg bg-brand-dark/60 border border-white/10 hover:bg-brand-dark/80 transition-all"
                onClick={toggleLanguage}
              >
                <Globe className="w-5 h-5 text-white/80 mr-2" />
                <span className="text-sm font-medium text-white/80">
                  {language === 'en' ? 'Switch to Bangla' : 'Switch to English'}
                </span>
              </button>
            </div>
            <Link to="/login" className="btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              {languageText[language].signIn}
            </Link>
            <Link to="/register" className="btn-ghost w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              {languageText[language].register}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
