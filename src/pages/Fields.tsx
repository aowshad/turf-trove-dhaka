import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchBar from '@/components/ui/SearchBar';
import FieldCard from '@/components/ui/FieldCard';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import BookingCta from '@/components/home/BookingCta';

// Mock field data with updated Unsplash images
const allFields = [
  {
    id: '1',
    name: 'Prime Football Zone',
    type: 'Football',
    location: 'Dhanmondi',
    imageUrl: 'https://images.unsplash.com/photo-1556302132-40bb13638500?q=80&w=2070&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=2070&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1592650887115-b5b5ae0e1045?q=80&w=2070&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2070&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop',
    rating: 4.7,
    price: 2700,
    capacity: '12 Players Max',
    availability: '6 PM - 2 AM',
    amenities: ['Professional Lighting', 'Changing Room', 'Canteen']
  },
  {
    id: '7',
    name: 'Cricket Stadium Mini',
    type: 'Cricket',
    location: 'Dhanmondi',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1994&auto=format&fit=crop',
    rating: 4.6,
    price: 3500,
    capacity: '22 Players Max',
    availability: '8 AM - 6 PM',
    amenities: ['Cricket Pitch', 'Floodlights', 'Changing Room']
  },
  {
    id: '8',
    name: 'Badminton Central',
    type: 'Badminton',
    location: 'Gulshan',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    price: 1500,
    capacity: '4 Players Max',
    availability: '7 AM - 11 PM',
    amenities: ['Indoor Courts', 'AC', 'Water Cooler']
  }
];

const locations = ['All Locations', 'Dhanmondi', 'Mirpur', 'Gulshan', 'Bashundhara', 'Uttara', 'Banani'];
const fieldTypes = ['All Types', 'Football', 'Cricket', 'Badminton'];
const priceRanges = [
  'All Prices',
  '৳1000 - ৳2000',
  '৳2001 - ৳3000',
  '৳3001+'
];

const Fields = () => {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [showFilters, setShowFilters] = useState(false);

  const filteredFields = allFields.filter(field => {
    const locationMatch = selectedLocation === 'All Locations' || field.location === selectedLocation;
    
    const typeMatch = selectedType === 'All Types' || field.type === selectedType;
    
    let priceMatch = true;
    if (selectedPrice === '৳1000 - ৳2000') {
      priceMatch = field.price >= 1000 && field.price <= 2000;
    } else if (selectedPrice === '৳2001 - ৳3000') {
      priceMatch = field.price > 2000 && field.price <= 3000;
    } else if (selectedPrice === '৳3001+') {
      priceMatch = field.price > 3000;
    }
    
    return locationMatch && typeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-brand-darkest py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Find the Best <span className="text-gradient">Turfs</span> in Dhaka
              </h1>
              <p className="text-white/70">
                Browse through our selection of top-rated sports fields and book your next game
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SearchBar variant="compact" />
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-brand-dark">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h2 className="text-xl font-bold text-white">
                Available Fields ({filteredFields.length})
              </h2>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="border-white/10 text-white"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className={`md:w-1/4 transition-all ${showFilters ? 'block' : 'hidden md:block'}`}>
                <div className="bg-brand-darkest rounded-lg p-5 sticky top-24">
                  <h3 className="text-lg font-semibold text-white mb-4">Filters</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Location</h4>
                    <div className="space-y-2">
                      {locations.map(location => (
                        <button
                          key={location}
                          onClick={() => setSelectedLocation(location)}
                          className={`block w-full text-left px-3 py-2 rounded ${
                            selectedLocation === location
                              ? 'bg-brand-primary/20 text-brand-primary'
                              : 'text-white/70 hover:bg-white/5'
                          }`}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Field Type</h4>
                    <div className="space-y-2">
                      {fieldTypes.map(type => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`block w-full text-left px-3 py-2 rounded ${
                            selectedType === type
                              ? 'bg-brand-primary/20 text-brand-primary'
                              : 'text-white/70 hover:bg-white/5'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      {priceRanges.map(range => (
                        <button
                          key={range}
                          onClick={() => setSelectedPrice(range)}
                          className={`block w-full text-left px-3 py-2 rounded ${
                            selectedPrice === range
                              ? 'bg-brand-primary/20 text-brand-primary'
                              : 'text-white/70 hover:bg-white/5'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedLocation('All Locations');
                      setSelectedType('All Types');
                      setSelectedPrice('All Prices');
                    }}
                    className="w-full mt-4 border-white/10 text-white"
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <div className="hidden md:flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Available Fields ({filteredFields.length})
                  </h2>
                  <div className="flex gap-2">
                    <select 
                      className="bg-brand-darkest border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                      defaultValue="newest"
                    >
                      <option value="newest" className="bg-brand-dark">Newest First</option>
                      <option value="price-low" className="bg-brand-dark">Price: Low to High</option>
                      <option value="price-high" className="bg-brand-dark">Price: High to Low</option>
                      <option value="rating" className="bg-brand-dark">Highest Rated</option>
                    </select>
                  </div>
                </div>
                
                {filteredFields.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredFields.map(field => (
                      <div key={field.id} className="animate-fade-in">
                        <FieldCard {...field} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-brand-darkest rounded-lg p-10 text-center">
                    <p className="text-white/70 mb-4">No fields match your current filters.</p>
                    <Button 
                      variant="primary"
                      onClick={() => {
                        setSelectedLocation('All Locations');
                        setSelectedType('All Types');
                        setSelectedPrice('All Prices');
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <BookingCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Fields;
