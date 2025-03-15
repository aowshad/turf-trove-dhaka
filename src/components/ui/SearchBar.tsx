
import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Calendar, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

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

const fieldTypes = ["Football", "Cricket", "Badminton"];

interface SearchBarProps {
  className?: string;
  variant?: 'default' | 'compact';
}

const SearchBar = ({ className, variant = 'default' }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedType, setSelectedType] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn("relative z-10 w-full max-w-4xl", className)} ref={searchRef}>
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
          <Popover>
            <PopoverTrigger asChild>
              <button className={cn(
                "w-full flex items-center bg-transparent text-white focus:outline-none",
                !selectedDate && "text-white/50",
                variant === 'compact' 
                  ? "text-sm py-3 pl-10 pr-4" 
                  : "text-base py-4 pl-12 pr-4"
              )}>
                <Calendar className={cn(
                  "absolute left-4 text-brand-accent",
                  variant === 'compact' ? "w-4 h-4" : "w-5 h-5"
                )} />
                {selectedDate ? format(selectedDate, 'PPP') : "Choose date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-0 bg-brand-dark border border-white/10">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="bg-brand-dark text-white p-3 pointer-events-auto"
                classNames={{
                  day_today: "bg-brand-primary/20 text-brand-primary",
                  day_selected: "bg-brand-primary text-white hover:bg-brand-primary hover:text-white"
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Field Type Filter */}
        <div className="relative flex items-center border-b md:border-b-0 md:border-r border-white/10">
          <Button
            variant="ghost"
            size="sm"
            className="w-full h-full flex justify-start text-white/70 hover:text-white"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="mr-2 w-4 h-4 text-brand-accent" />
            <span>{selectedType || "Field Type"}</span>
          </Button>
          
          {showFilters && (
            <div className="absolute mt-2 top-full left-0 w-full bg-brand-dark border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
              <div className="p-2">
                {fieldTypes.map(type => (
                  <div 
                    key={type}
                    className="px-3 py-2 hover:bg-brand-darker cursor-pointer text-white/80 hover:text-white text-sm"
                    onClick={() => {
                      setSelectedType(type);
                      setShowFilters(false);
                    }}
                  >
                    {type}
                  </div>
                ))}
                <div 
                  className="px-3 py-2 hover:bg-brand-darker cursor-pointer text-white/80 hover:text-white text-sm border-t border-white/10 mt-1"
                  onClick={() => {
                    setSelectedType('');
                    setShowFilters(false);
                  }}
                >
                  Clear filter
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <Button 
          variant="primary" 
          className={cn(
            "md:rounded-l-none",
            variant === 'compact' ? "py-3 px-5" : "py-4 px-6"
          )}
        >
          <Search className={variant === 'compact' ? "w-4 h-4" : "w-5 h-5"} />
          <span>Search</span>
        </Button>
      </div>

      {/* Location Suggestions */}
      {showSuggestions && searchQuery && (
        <div 
          className="absolute mt-2 w-full left-0 bg-brand-dark border border-white/10 rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto z-50"
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
