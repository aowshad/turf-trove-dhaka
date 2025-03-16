
import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import SearchBar from '../ui/SearchBar';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('popular-fields');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkest/90 via-brand-darkest/90 to-brand-darkest z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-10 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-block animate-fade-in">
            <span className="bg-brand-highlight/10 text-brand-highlight px-4 py-1.5 rounded-full text-sm font-medium">
              The Best Turf Booking Platform in Dhaka
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-delay">
            Find and Book <span className="text-gradient">Sports Fields</span> in Your Area
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-delay" style={{ animationDelay: "0.2s" }}>
            Book football, cricket, and badminton turfs across Dhaka with just a few clicks. 
            Easy booking, instant confirmation.
          </p>
          
          <div className="pt-6 animate-fade-in-delay" style={{ animationDelay: "0.3s" }}>
            <SearchBar />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in-delay" style={{ animationDelay: "0.4s" }}>
            <Button variant="primary" asChild>
              <Link to="/fields">Find a Turf</Link>
            </Button>
            <Button variant="ghost" asChild className="group">
              <Link to="/list-your-turf">
                List Your Turf
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl animate-fade-in-delay" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "150+", label: "Turfs" },
            { value: "12", label: "Locations" },
            { value: "10K+", label: "Happy Players" },
            { value: "4.8", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="glass-card px-4 py-6 rounded-xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator - fixed alignment and functionality */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle hover:opacity-75 transition-opacity focus:outline-none"
        aria-label="Scroll to next section"
      >
        <span className="text-white/50 text-sm mb-2">Scroll Down</span>
        <ArrowDown className="w-5 h-5 text-white/50" />
      </button>
    </section>
  );
};

export default HeroSection;
