
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Rafiqul Islam',
    role: 'Football Team Captain',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Matth Periye has completely transformed how we book practice fields. The platform is intuitive, and we get instant confirmations. No more calling around to check availability!',
    rating: 5
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    role: 'Badminton Player',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Finding good badminton courts in Dhaka used to be a challenge. With Matth Periye, I can quickly book courts near my home or office. The filters make it so easy to find what I need.',
    rating: 4
  },
  {
    id: 3,
    name: 'Kamal Hassan',
    role: 'Cricket Coach',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    content: 'As a cricket coach, I need reliable access to practice nets. This platform has the best selection of cricket facilities in Dhaka, and the booking process is seamless.',
    rating: 5
  },
  {
    id: 4,
    name: 'Samia Rahman',
    role: 'Recreational Player',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    content: 'I organize weekly games with friends, and Matth Periye has made it so much easier. The app remembers our preferences, and we can quickly rebook our favorite spots.',
    rating: 5
  },
  {
    id: 5,
    name: 'Fahim Ahmed',
    role: 'Turf Owner',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    content: 'Partnering with Matth Periye has increased our bookings by over 40%. The platform is professional, and the team is responsive to our needs. Highly recommended for venue owners!',
    rating: 4
  }
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = 
        direction === 'left' 
          ? containerRef.current.scrollLeft - scrollAmount 
          : containerRef.current.scrollLeft + scrollAmount;
          
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-brand-highlight text-sm font-medium">What People Say</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Customer <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-white/60">
            Hear from players and field owners who have used our platform
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -top-16 right-0 flex space-x-2 z-10">
            <button 
              onClick={() => scroll('left')}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                canScrollLeft 
                  ? "bg-brand-darker hover:bg-brand-accent/20 text-white/70 hover:text-brand-accent" 
                  : "bg-brand-darker/50 text-white/30 cursor-not-allowed"
              )}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                canScrollRight 
                  ? "bg-brand-darker hover:bg-brand-accent/20 text-white/70 hover:text-brand-accent" 
                  : "bg-brand-darker/50 text-white/30 cursor-not-allowed"
              )}
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonials Slider */}
          <div 
            ref={containerRef}
            className="flex space-x-5 overflow-x-auto pb-8 scrollbar-none -mx-4 px-4"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[450px] glass-card rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-accent/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-brand-accent/20 -translate-x-2 -translate-y-2" />
                  <p className="text-white/80 text-base relative z-10 pl-2 mb-4">{testimonial.content}</p>
                </div>

                <div className="flex items-center mt-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                      key={index}
                      className={cn(
                        "w-4 h-4",
                        index < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
