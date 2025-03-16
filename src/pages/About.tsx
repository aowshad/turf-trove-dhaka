
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, Trophy, Users, Clock, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookingCta from '@/components/home/BookingCta';

const teamMembers = [
  {
    name: 'Arif Rahman',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Sports enthusiast with 10+ years of experience in the sports industry.'
  },
  {
    name: 'Nusrat Jahan',
    position: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Ensures smooth booking experiences for all users across our platform.'
  },
  {
    name: 'Tanvir Ahmed',
    position: 'Business Development',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Responsible for growing our network of quality sports fields across Dhaka.'
  },
  {
    name: 'Sabrina Khan',
    position: 'Customer Success',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: 'Focused on ensuring all players have an excellent experience on and off the field.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <section className="bg-brand-darkest py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-darkest via-brand-darkest/95 to-brand-darkest z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2036&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-gradient">Matth Periye</span> – Your Sports Booking Partner
              </h1>
              
              <p className="text-white/70 text-lg mb-8">
                Making sports more accessible by connecting players with the best fields in Dhaka.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" asChild>
                  <Link to="/fields">Find a Field</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-brand-dark">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg">
                At Matth Periye, we believe that sports bring people together and create lasting memories. Our mission is to make sports more accessible to everyone in Dhaka by providing a seamless platform to discover, book, and enjoy quality sports fields.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { 
                  icon: <MapPin className="w-8 h-8 text-brand-primary" />,
                  title: 'Accessibility',
                  description: 'Making it easy to find and book fields in your neighborhood.'
                },
                { 
                  icon: <Trophy className="w-8 h-8 text-brand-primary" />,
                  title: 'Quality',
                  description: 'Curating the best sports facilities across Dhaka.'
                },
                { 
                  icon: <Clock className="w-8 h-8 text-brand-primary" />,
                  title: 'Convenience',
                  description: 'Simple booking process that takes just minutes.'
                },
                { 
                  icon: <Users className="w-8 h-8 text-brand-primary" />,
                  title: 'Community',
                  description: 'Bringing sports enthusiasts together through our platform.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-brand-darkest rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center bg-brand-primary/10 rounded-full p-4 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-brand-darkest">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sports enthusiasts playing football"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
              
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose <span className="text-gradient">Matth Periye</span>?
                </h2>
                
                <div className="space-y-5">
                  {[
                    'Wide selection of football, cricket, and badminton turfs',
                    'Instant booking confirmation',
                    'Secure payment options',
                    'Trusted by thousands of players',
                    'Customer support available 7 days a week',
                    'Regular discounts and promotions'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="rounded-full bg-brand-primary/20 p-1 mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-brand-primary" />
                      </div>
                      <p className="text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-3xl font-bold text-brand-primary">150+</div>
                    <div className="text-white/70 text-sm">Available Fields</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-brand-primary">10k+</div>
                    <div className="text-white/70 text-sm">Happy Players</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-brand-primary">4.8</div>
                    <div className="text-white/70 text-sm">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-brand-dark">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-white/70">
                The passionate individuals who work tirelessly to connect sports enthusiasts with the best fields in Dhaka.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-brand-darkest rounded-xl overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="text-brand-primary font-medium text-sm mb-3">
                      {member.position}
                    </div>
                    <p className="text-white/70 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <BookingCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
