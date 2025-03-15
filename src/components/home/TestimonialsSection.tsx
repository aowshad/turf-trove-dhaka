
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-highlight text-sm font-medium">What People Say</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Customer <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-white/60">
            Hear from players and field owners who have used our platform
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-background/30 backdrop-blur-md border border-white/10 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="h-10 w-10 border-2 border-brand-primary/30">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                          <p className="text-white/60 text-xs">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <p className="text-white/80 text-sm leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center mt-4 pt-3 border-t border-white/5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star 
                            key={index}
                            className={cn(
                              "w-3.5 h-3.5",
                              index < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"
                            )}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious 
                className="static transform-none bg-background/30 backdrop-blur-md border border-white/10 text-white hover:bg-brand-primary/20 hover:text-brand-primary"
              />
              <CarouselNext 
                className="static transform-none bg-background/30 backdrop-blur-md border border-white/10 text-white hover:bg-brand-primary/20 hover:text-brand-primary"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
