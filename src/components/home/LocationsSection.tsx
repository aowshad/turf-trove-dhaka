
import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const locations = [
  {
    name: 'Dhanmondi',
    image: 'https://images.unsplash.com/photo-1528260233014-d50c1b8d81ed?q=80&w=2070&auto=format&fit=crop',
    count: 18
  },
  {
    name: 'Mirpur',
    image: 'https://images.unsplash.com/photo-1611152741456-fae22fc0a898?q=80&w=2070&auto=format&fit=crop',
    count: 24
  },
  {
    name: 'Gulshan',
    image: 'https://images.unsplash.com/photo-1580247817119-c83ec0587664?q=80&w=2069&auto=format&fit=crop',
    count: 15
  },
  {
    name: 'Bashundhara',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop',
    count: 21
  },
  {
    name: 'Uttara',
    image: 'https://images.unsplash.com/photo-1590298347026-a072cbb34915?q=80&w=2070&auto=format&fit=crop',
    count: 19
  },
  {
    name: 'Banani',
    image: 'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?q=80&w=2070&auto=format&fit=crop',
    count: 14
  },
  {
    name: 'Mohammadpur',
    image: 'https://images.unsplash.com/photo-1503662549811-e326b3226b42?q=80&w=2069&auto=format&fit=crop',
    count: 12
  },
  {
    name: 'Khilgaon',
    image: 'https://images.unsplash.com/photo-1605501035722-4d880eed89c4?q=80&w=2070&auto=format&fit=crop',
    count: 9
  }
];

const LocationsSection = () => {
  return (
    <section className="bg-brand-dark py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-highlight text-sm font-medium">Explore Dhaka</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Find Fields by <span className="text-gradient">Location</span>
          </h2>
          <p className="text-white/60">
            Discover sports fields across different areas of Dhaka. 
            Find the perfect venue close to your home or workplace.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {locations.map((location, index) => (
            <LocationCard
              key={location.name}
              location={location}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface LocationCardProps {
  location: {
    name: string;
    image: string;
    count: number;
  };
  index: number;
}

const LocationCard = ({ location, index }: LocationCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/fields?location=${location.name}`);
  };
  
  return (
    <div 
      className="relative group rounded-xl overflow-hidden aspect-square cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={handleClick}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-brand-darkest via-brand-darkest/70 to-transparent z-10 transition-opacity duration-300",
          "group-hover:opacity-70"
        )}></div>
        <img 
          src={location.image} 
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
        <div className="flex items-center mb-1">
          <MapPin className="w-4 h-4 text-brand-accent mr-1" />
          <h3 className="text-white font-semibold">{location.name}</h3>
        </div>
        <p className="text-white/70 text-sm">
          {location.count} Fields Available
        </p>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 z-10 border-2 border-transparent transition-all duration-300 group-hover:border-brand-accent rounded-xl"></div>
    </div>
  );
};

export default LocationsSection;
