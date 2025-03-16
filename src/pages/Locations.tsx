
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingCta from '@/components/home/BookingCta';
import { Link } from 'react-router-dom';
import FieldCard from '@/components/ui/FieldCard';

// Mock locations data
const locationsData = [
  { 
    name: 'Dhanmondi',
    image: 'https://images.unsplash.com/photo-1568454537842-d933259bb1c6?q=80&w=2070&auto=format&fit=crop',
    fields: 18,
    description: 'Centrally located fields with excellent facilities and easy access.'
  },
  { 
    name: 'Mirpur',
    image: 'https://images.unsplash.com/photo-1624456735729-03594a40c5fb?q=80&w=1974&auto=format&fit=crop',
    fields: 12,
    description: 'Home to some of the largest sports complexes in Dhaka.'
  },
  { 
    name: 'Gulshan',
    image: 'https://images.unsplash.com/photo-1552845108-5f775a2ccb9b?q=80&w=1974&auto=format&fit=crop',
    fields: 9,
    description: 'Premium fields in Dhaka\'s upscale neighborhood with top amenities.'
  },
  { 
    name: 'Bashundhara',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop',
    fields: 15,
    description: 'Modern fields in a developing area with ample parking space.'
  },
  { 
    name: 'Uttara',
    image: 'https://images.unsplash.com/photo-1624456735643-c32c6e135b1a?q=80&w=1974&auto=format&fit=crop',
    fields: 7,
    description: 'Convenient northern location with both indoor and outdoor options.'
  },
  { 
    name: 'Banani',
    image: 'https://images.unsplash.com/photo-1524015368236-bbf6f72545b6?q=80&w=2070&auto=format&fit=crop',
    fields: 6,
    description: 'Central business district fields with easy access to restaurants.'
  },
  { 
    name: 'Mohammadpur',
    image: 'https://images.unsplash.com/photo-1533963506131-0af43970c06a?q=80&w=1975&auto=format&fit=crop',
    fields: 10,
    description: 'Community favorite fields with competitive rates.'
  },
  { 
    name: 'Khilgaon',
    image: 'https://images.unsplash.com/photo-1583684535483-55ccbf59500b?q=80&w=2070&auto=format&fit=crop',
    fields: 5,
    description: 'Conveniently located fields with easy public transportation access.'
  },
];

// Mock field data
const fieldsData = [
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
  // ... additional field data copied from Fields.tsx
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  // Filter fields by selected location
  const filteredFields = selectedLocation 
    ? fieldsData.filter(field => field.location === selectedLocation)
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <section className="bg-brand-darkest py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Find the Best <span className="text-gradient">Turf</span> Near You
              </h1>
              <p className="text-white/70">
                Browse through our locations to find convenient sports fields in your area
              </p>
            </div>
          </div>
        </section>
        
        {/* Locations */}
        <section className="py-12 bg-brand-dark">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Popular Locations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locationsData.map((location, index) => (
                <div 
                  key={location.name}
                  className="bg-brand-darkest rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedLocation(location.name)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest to-transparent z-10"></div>
                    <img 
                      src={location.image} 
                      alt={location.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-xl font-bold text-white">
                        {location.name}
                      </h3>
                      <div className="flex items-center text-white/70 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{location.fields} Fields</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-white/70 text-sm mb-4">{location.description}</p>
                    <button 
                      className="flex items-center text-brand-primary group-hover:text-brand-accent transition-colors text-sm font-medium"
                      onClick={() => setSelectedLocation(location.name)}
                    >
                      View Fields
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Selected Location Fields */}
            {selectedLocation && (
              <div className="mt-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    Fields in {selectedLocation}
                  </h2>
                  <Button 
                    variant="ghost"
                    onClick={() => setSelectedLocation(null)}
                    className="text-white/70"
                  >
                    View All Locations
                  </Button>
                </div>
                
                {filteredFields.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredFields.map(field => (
                      <div key={field.id} className="animate-fade-in">
                        <FieldCard {...field} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-brand-darkest rounded-lg p-10 text-center">
                    <p className="text-white/70 mb-4">No fields available in this location.</p>
                    <Button 
                      variant="primary"
                      asChild
                    >
                      <Link to="/fields">
                        View All Fields
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        <BookingCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Locations;
