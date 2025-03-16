
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <section className="bg-brand-darkest py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch with <span className="text-gradient">Us</span>
              </h1>
              <p className="text-white/70">
                Have questions or need assistance? We're here to help! Contact our team for prompt and friendly support.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="py-16 bg-brand-dark">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-brand-darkest rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-brand-dark border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input 
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full bg-brand-dark border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full bg-brand-dark border-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="How can we help you?"
                        rows={5}
                        className="w-full bg-brand-dark border-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    
                    <Button variant="primary" type="submit" className="w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="lg:col-span-5">
                <div className="bg-brand-darkest rounded-xl p-6 md:p-8 mb-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="rounded-full bg-brand-primary/20 p-3 mr-4">
                        <MapPin className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Office Address</h3>
                        <p className="text-white/70">XYZ Street, Dhanmondi, Dhaka</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-brand-primary/20 p-3 mr-4">
                        <Phone className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Phone Number</h3>
                        <p className="text-white/70">+880 1234 567 890</p>
                        <p className="text-white/70">+880 9876 543 210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-brand-primary/20 p-3 mr-4">
                        <Mail className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Email Address</h3>
                        <p className="text-white/70">support@matthperiye.com</p>
                        <p className="text-white/70">info@matthperiye.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-brand-primary/20 p-3 mr-4">
                        <Clock className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Operating Hours</h3>
                        <p className="text-white/70">Monday - Friday: 9 AM - 6 PM</p>
                        <p className="text-white/70">Saturday: 10 AM - 4 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-brand-darkest rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-1">How do I book a field?</h4>
                      <p className="text-white/70 text-sm">Browse fields, select your preferred time slot, and complete payment.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Can I cancel my booking?</h4>
                      <p className="text-white/70 text-sm">Yes, cancellations are allowed 24 hours before the scheduled time.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">How do I become a field owner?</h4>
                      <p className="text-white/70 text-sm">Visit our "List Your Turf" page to get started.</p>
                    </div>
                    <Link to="/blog" className="text-brand-primary hover:text-brand-accent text-sm font-medium inline-flex items-center mt-2">
                      View all FAQs
                      <MessageSquare className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-12 rounded-xl overflow-hidden">
              <div className="bg-brand-darkest rounded-xl p-4 mb-1">
                <h2 className="text-xl font-bold text-white">Find Us on the Map</h2>
              </div>
              <div className="aspect-[16/7] w-full bg-brand-darkest relative rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62358393106!2d90.34340124863277!3d23.810544900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMohakhali%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653119876347!5m2!1sen!2sbd" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
