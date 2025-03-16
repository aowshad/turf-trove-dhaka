
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BookingCta = () => {
  return (
    <section className="py-20 bg-brand-primary/10">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Play? Book Your Turf Now and Secure Your Spot!
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss out on your preferred time slot. Book your field today and enjoy a seamless gaming experience with friends and family.
          </p>
          <Button variant="primary" size="lg" asChild className="px-8 py-6 text-base">
            <Link to="/fields">Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingCta;
