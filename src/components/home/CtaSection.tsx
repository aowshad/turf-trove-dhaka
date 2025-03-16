
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-brand-darkest relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkest via-brand-darkest/95 to-brand-darkest/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=2068&auto=format&fit=crop')] bg-cover bg-fixed opacity-20"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Content */}
          <div className="md:w-1/2 space-y-6">
            <span className="text-brand-highlight text-sm font-medium">List Your Turf</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Own a Sports Field? <span className="text-gradient">Partner with Us</span>
            </h2>
            <p className="text-white/70">
              Join our platform to reach thousands of players looking to book sports fields in Dhaka. 
              We handle the bookings, you provide the venue.
            </p>
            
            <div className="space-y-4 py-2">
              {[
                'Increase your field\'s visibility and bookings',
                'Simple management dashboard for your venues',
                'Hassle-free payment processing',
                'Showcase your field with high-quality images'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-brand-accent/20 p-1 mr-3 mt-0.5">
                    <Check className="w-4 h-4 text-brand-accent" />
                  </div>
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" asChild>
                <Link to="/list-your-turf">
                  List Your Field
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Form Card */}
          <div className="md:w-1/2 w-full">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Get Started Today</h3>
              
              <form className="space-y-5">
                <div>
                  <label className="text-white/80 text-sm mb-1.5 block">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="text-white/80 text-sm mb-1.5 block">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label className="text-white/80 text-sm mb-1.5 block">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="+880 1XXXXXXXXX"
                  />
                </div>
                
                <div>
                  <label className="text-white/80 text-sm mb-1.5 block">Field Location</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  >
                    <option value="" className="bg-brand-dark">Select Location</option>
                    <option value="Dhanmondi" className="bg-brand-dark">Dhanmondi</option>
                    <option value="Mirpur" className="bg-brand-dark">Mirpur</option>
                    <option value="Gulshan" className="bg-brand-dark">Gulshan</option>
                    <option value="Bashundhara" className="bg-brand-dark">Bashundhara</option>
                    <option value="Uttara" className="bg-brand-dark">Uttara</option>
                    <option value="other" className="bg-brand-dark">Other</option>
                  </select>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary"
                  className="w-full py-3 mt-4"
                >
                  Submit Request
                </Button>
                
                <p className="text-white/50 text-xs text-center">
                  Our team will contact you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
