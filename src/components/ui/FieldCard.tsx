
import React from 'react';
import { Star, MapPin, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

interface FieldCardProps {
  id: string;
  name: string;
  type: string;
  location: string;
  imageUrl: string;
  rating: number;
  price: number;
  capacity: string;
  availability?: string;
  amenities?: string[];
  className?: string;
  variant?: 'default' | 'horizontal';
}

const FieldCard = ({ 
  id, 
  name, 
  type, 
  location, 
  imageUrl, 
  rating, 
  price, 
  capacity,
  availability,
  amenities,
  className,
  variant = 'default'
}: FieldCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/fields/${id}`);
  };

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl transition-all duration-500 cursor-pointer",
        variant === 'default' 
          ? "flex flex-col h-full" 
          : "grid grid-cols-1 md:grid-cols-12 h-full",
        className
      )}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div 
        className={cn(
          "relative overflow-hidden",
          variant === 'default' 
            ? "aspect-[4/3] w-full" 
            : "md:col-span-5 aspect-[4/3] md:aspect-auto"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest to-transparent z-10 opacity-50"></div>
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-brand-primary/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div 
        className={cn(
          "bg-brand-dark border border-white/5 flex flex-col",
          variant === 'default' 
            ? "flex-1 p-5" 
            : "md:col-span-7 p-5 md:p-6"
        )}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white text-lg font-semibold mb-1 line-clamp-1">{name}</h3>
            <div className="flex items-center text-white/60 text-sm">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-white font-medium">{rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 my-3">
          <div className="flex items-center text-white/70 text-sm">
            <Users className="w-4 h-4 text-brand-primary mr-2" />
            <span>{capacity}</span>
          </div>
          {availability && (
            <div className="flex items-center text-white/70 text-sm">
              <Clock className="w-4 h-4 text-brand-primary mr-2" />
              <span>{availability}</span>
            </div>
          )}
        </div>

        {amenities && amenities.length > 0 && (
          <div className="mt-2 mb-3">
            <div className="flex flex-wrap gap-1">
              {amenities.slice(0, 3).map((amenity, index) => (
                <span key={index} className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded">
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded">
                  +{amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div>
            <span className="text-white/60 text-xs">Starting from</span>
            <div className="text-white font-semibold">৳{price}/hr</div>
          </div>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/fields/${id}`);
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FieldCard;
