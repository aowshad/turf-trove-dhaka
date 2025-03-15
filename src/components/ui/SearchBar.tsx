
import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const locations = [
  "Mirpur",
  "Dhanmondi",
  "Gulshan",
  "Bashundhara",
  "Uttara",
  "Banani",
  "Mohammadpur",
  "Khilgaon"
];

interface SearchBarProps {
  className?: string;
  variant?: 'default' | 'compact';
}

const SearchBar = ({ className, variant = 'default' }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={cn("relative z-10 w-full max-w-4xl", className)}>
      <div className={cn(
        "flex flex-col md:flex-row items-stretch md:items-center rounded-xl neo-blur overflow-hidden",
        variant === 'compact' ? "md:h-14" : "md:h-16"
      )}>
        {/* Location Search */}
        <div className="relative flex-1 flex items-center border-b md:border-b-0 md:border-r border-white/10">
          <MapPin className={cn(
            "absolute left-4 text-brand-accent",
            variant === 'compact' ? "w-4 h-4" : "w-5 h-5"
          )} />
          <input
            type="text"
            placeholder="Where do you want to play?"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className={cn(
              "w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none",
              variant === 'compact' 
                ? "text-sm pl-10 pr-4 py-3" 
                : "text-base pl-12 pr-4 py-4"
            )}
          />
        </div>

        {/* Date Picker */}
        <div className="relative flex-1 flex items-center border-b md:border-b-0 md:border-r border-white/10">
          <Calendar className={cn(
            "absolute left-4 text-brand-accent",
            variant === 'compact' ? "w-4 h-4" : "w-5 h-5"
          )} />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={cn(
              "w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none",
              !selectedDate && "text-white/50",
              variant === 'compact' 
                ? "text-sm pl-10 pr-4 py-3" 
                : "text-base pl-12 pr-4 py-4"
            )}
          />
        </div>

        {/* Search Button */}
        <button className={cn(
          "flex items-center justify-center bg-brand-accent text-white font-medium transition-all hover:bg-brand-light",
          variant === 'compact' 
            ? "py-3 px-5 text-sm" 
            : "py-4 px-6"
        )}>
          <Search className={cn(
            "mr-2",
            variant === 'compact' ? "w-4 h-4" : "w-5 h-5"
          )} />
          <span>Search</span>
        </button>
      </div>

      {/* Location Suggestions */}
      {showSuggestions && searchQuery && (
        <div 
          className="absolute mt-2 w-full left-0 bg-brand-dark border border-white/10 rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto"
          onMouseLeave={() => setShowSuggestions(false)}
        >
          {filteredLocations.length > 0 ? (
            <ul>
              {filteredLocations.map((location) => (
                <li 
                  key={location} 
                  className="px-4 py-3 hover:bg-brand-darker cursor-pointer flex items-center text-white/90 hover:text-white"
                  onClick={() => {
                    setSearchQuery(location);
                    setShowSuggestions(false);
                  }}
                >
                  <MapPin className="w-4 h-4 mr-2 text-brand-accent" />
                  {location}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-white/70 text-sm">No locations found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
