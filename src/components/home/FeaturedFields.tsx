
import React, { useState } from 'react';
import FieldCard from '../ui/FieldCard';
import { ArrowRight, Filter } from 'lucide-react';
import { Button } from '../ui/button';

// Updated featured fields with amenities
const featuredFields = [
  {
    id: '1',
    name: 'Prime Football Zone',
    type: 'Football',
    location: 'Dhanmondi',
    imageUrl: '/lovable-uploads/375b0d7e-bc8a-4304-8a91-073cf146db8f.png',
    rating: 4.8,
    price: 2500,
    capacity: '10 Players Max',
    availability: '9 AM - 11 PM',
    amenities: ['Floodlights', 'Changing Room', 'Water Supply']
  },
  {
    id: '2',
    name: 'Game1 Easy Turf',
    type: 'Football',
    location: 'Gulshan',
    imageUrl: '/lovable-uploads/9cbcdafc-7193-4850-8dff-c7c46f9bb595.png',
    rating: 4.6,
    price: 3000,
    capacity: '14 Players Max',
    availability: '8 AM - 9 PM',
    amenities: ['Floodlights', 'Parking', 'Artificial Turf']
  },
  {
    id: '3',
    name: 'Mirpur Turf Zone',
    type: 'Football',
    location: 'Mirpur',
    imageUrl: '/lovable-uploads/0d17e935-d941-4de0-ab21-42b90013033f.png',
    rating: 4.7,
    price: 1800,
    capacity: '12 Players Max',
    availability: '6 AM - 10 PM',
    amenities: ['Parking', 'Water Supply', 'Floodlights']
  },
  {
    id: '4',
    name: 'Bashundhara Turf Paradise',
    type: 'Football',
    location: 'Bashundhara',
    imageUrl: '/lovable-uploads/1b5f6b01-7d6a-4af1-9d95-1f91d10201a1.png',
    rating: 4.9,
    price: 2800,
    capacity: '14 Players Max',
    availability: '24 Hours',
    amenities: ['Locker Room', 'Artificial Turf', 'Parking']
  },
  {
    id: '5',
    name: 'Uttara Sports Zone',
    type: 'Football',
    location: 'Uttara',
    imageUrl: '/lovable-uploads/857cf3a0-7753-4d5e-a6f2-53437efa4162.png',
    rating: 4.5,
    price: 2200,
    capacity: '10 Players Max',
    availability: '9 AM - 10 PM',
    amenities: ['Floodlights', 'Water Supply', 'WiFi']
  },
  {
    id: '6',
    name: 'Nighttime Turf Arena',
    type: 'Football',
    location: 'Banani',
    imageUrl: '/lovable-uploads/bf750695-ccda-455f-9888-1ff5fcbd41c4.png',
    rating: 4.7,
    price: 2700,
    capacity: '12 Players Max',
    availability: '6 PM - 2 AM',
    amenities: ['Professional Lighting', 'Changing Room', 'Canteen']
  }
];

const fieldTypes = ["All", "Football", "Cricket", "Badminton"];

const FeaturedFields = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredFields = activeFilter === "All" 
    ? featuredFields 
    : featuredFields.filter(field => field.type === activeFilter);

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
          
          <Button variant="ghost" asChild className="group flex items-center text-brand-accent hover:text-brand-light mt-4 md:mt-0">
            <a href="/fields">
              <span className="font-medium">View All Fields</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {fieldTypes.map(type => (
            <Button
              key={type}
              variant={activeFilter === type ? "primary" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(type)}
              className={activeFilter === type ? "" : "text-white/70 hover:text-white border-white/10"}
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFields.map((field, index) => (
            <div 
              key={field.id} 
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FieldCard {...field} />
            </div>
          ))}
        </div>
        
        {filteredFields.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No fields found. Try a different filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedFields;
