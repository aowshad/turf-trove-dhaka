
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fields', path: '/fields' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

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
          <Link to="/fields">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark border border-white/10 hover:bg-brand-dark/80 transition-all">
              <Search className="w-5 h-5 text-white/80" />
            </button>
          </Link>
          <Button 
            variant="outline"
            size="sm"
            asChild
            className="border-white/10 text-white hover:bg-brand-primary/20 hover:text-white"
          >
            <Link to="/sign-up">Sign Up</Link>
          </Button>
          <Button 
            variant="primary"
            size="sm"
            asChild
          >
            <Link to="/sign-in" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sign In</span>
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
            <Link to="/sign-in" className="w-full">
              <Button variant="primary" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up" className="w-full">
              <Button variant="outline" className="w-full border-white/10 text-white" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
