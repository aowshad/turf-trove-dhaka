
import React from 'react';
import FieldCard from '../ui/FieldCard';
import { ArrowRight } from 'lucide-react';

// Sample data for featured fields
const featuredFields = [
  {
    id: '1',
    name: 'Prime Football Zone',
    type: 'Football',
    location: 'Dhanmondi',
    imageUrl: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    price: 2500,
    capacity: '10 Players Max',
    availability: '9 AM - 11 PM'
  },
  {
    id: '2',
    name: 'Rooftop Cricket Academy',
    type: 'Cricket',
    location: 'Gulshan',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1994&auto=format&fit=crop',
    rating: 4.6,
    price: 3000,
    capacity: '22 Players Max',
    availability: '8 AM - 9 PM'
  },
  {
    id: '3',
    name: 'Indoor Badminton Court',
    type: 'Badminton',
    location: 'Banani',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop',
    rating: 4.7,
    price: 1200,
    capacity: '4 Players Max',
    availability: '6 AM - 10 PM'
  },
  {
    id: '4',
    name: 'Bashundhara Turf Paradise',
    type: 'Football',
    location: 'Bashundhara',
    imageUrl: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2071&auto=format&fit=crop',
    rating: 4.9,
    price: 2800,
    capacity: '14 Players Max',
    availability: '24 Hours'
  },
  {
    id: '5',
    name: 'Uttara Sports Complex',
    type: 'Multi-Sport',
    location: 'Uttara',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
    rating: 4.5,
    price: 2200,
    capacity: 'Varies by Sport',
    availability: '9 AM - 10 PM'
  },
  {
    id: '6',
    name: 'Mirpur Cricket Ground',
    type: 'Cricket',
    location: 'Mirpur',
    imageUrl: 'https://images.unsplash.com/photo-1634576296729-140031e3c4a9?q=80&w=1932&auto=format&fit=crop',
    rating: 4.7,
    price: 2700,
    capacity: '22 Players Max',
    availability: '8 AM - 8 PM'
  }
];

const FeaturedFields = () => {
  return (
    <section className="bg-brand-darkest py-20" id="popular-fields">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="space-y-3">
            <span className="text-brand-highlight text-sm font-medium">Fields You'll Love</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Popular <span className="text-gradient">Fields</span></h2>
            <p className="text-white/60 max-w-2xl">
              Discover the most popular fields in Dhaka, from state-of-the-art football turfs to professional cricket grounds
            </p>
          </div>
          <a href="#" className="group flex items-center text-brand-accent hover:text-brand-light mt-4 md:mt-0 transition-colors">
            <span className="font-medium">View All Fields</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFields.map((field, index) => (
            <div 
              key={field.id} 
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FieldCard {...field} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFields;
