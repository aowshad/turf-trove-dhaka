
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Users, Clock, Shield, Calendar, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// Mock data for field details
const fieldsData = [
  {
    id: '1',
    name: 'Prime Football Zone',
    type: 'Football',
    location: 'Dhanmondi',
    imageUrl: 'https://images.unsplash.com/photo-1556302132-40bb13638500?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556302132-40bb13638500?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581122584612-713f89daa8eb?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565308674784-75c273a152fb?q=80&w=2069&auto=format&fit=crop'
    ],
    rating: 4.8,
    price: 2500,
    capacity: '10 Players Max',
    availability: '9 AM - 11 PM',
    amenities: ['Floodlights', 'Changing Room', 'Water Supply', 'WiFi', 'Parking', 'Shower'],
    description: 'Prime Football Zone is a state-of-the-art football turf located in the heart of Dhanmondi. With high-quality artificial grass and professional lighting, it provides an exceptional playing experience for football enthusiasts.',
    reviews: [
      { id: 1, user: 'Ahmed H.', rating: 5, comment: 'Excellent field with great facilities. Would definitely recommend!', date: '2023-11-15' },
      { id: 2, user: 'Sarah K.', rating: 4, comment: 'Good playing surface and convenient location.', date: '2023-10-28' },
      { id: 3, user: 'Rahul M.', rating: 5, comment: 'The best turf in Dhaka. Clean facilities and friendly staff.', date: '2023-10-10' }
    ]
  },
  {
    id: '2',
    name: 'Game1 Easy Turf',
    type: 'Football',
    location: 'Gulshan',
    imageUrl: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601469280338-66875881b921?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607250282759-a81f78afd45e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624435802506-813a2b9ada98?q=80&w=2070&auto=format&fit=crop'
    ],
    rating: 4.6,
    price: 3000,
    capacity: '14 Players Max',
    availability: '8 AM - 9 PM',
    amenities: ['Floodlights', 'Parking', 'Artificial Turf', 'Changing Room', 'Snack Bar'],
    description: 'Game1 Easy Turf offers a premium playing experience with its state-of-the-art facilities. Located in Gulshan, it\'s easily accessible and offers ample parking space for players.',
    reviews: [
      { id: 1, user: 'Farhan T.', rating: 5, comment: 'Top-notch facilities and great customer service!', date: '2023-11-20' },
      { id: 2, user: 'Nadia I.', rating: 4, comment: 'Very good turf, but parking can be a challenge during peak hours.', date: '2023-10-15' },
      { id: 3, user: 'Karim J.', rating: 5, comment: 'Best playing surface in town. Highly recommended!', date: '2023-09-30' }
    ]
  },
  {
    id: '3',
    name: 'Mirpur Turf Zone',
    type: 'Football',
    location: 'Mirpur',
    imageUrl: 'https://images.unsplash.com/photo-1592650887115-b5b5ae0e1045?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1592650887115-b5b5ae0e1045?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557060160-31e9d550d7eb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1627627256672-027a4613d028?q=80&w=2074&auto=format&fit=crop'
    ],
    rating: 4.7,
    price: 1800,
    capacity: '12 Players Max',
    availability: '6 AM - 10 PM',
    amenities: ['Parking', 'Water Supply', 'Floodlights', 'First Aid Kit'],
    description: 'Mirpur Turf Zone provides an affordable yet high-quality playing experience. With flexible hours and great facilities, it\'s perfect for casual games and tournaments alike.',
    reviews: [
      { id: 1, user: 'Imran S.', rating: 5, comment: 'Affordable prices and good quality turf.', date: '2023-11-05' },
      { id: 2, user: 'Fatima R.', rating: 4, comment: 'Great location and clean facilities.', date: '2023-10-20' },
      { id: 3, user: 'Ali M.', rating: 4, comment: 'Good value for money. Would book again.', date: '2023-09-15' }
    ]
  },
  {
    id: '4',
    name: 'Bashundhara Turf Paradise',
    type: 'Football',
    location: 'Bashundhara',
    imageUrl: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556302132-40bb13638500?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607250282759-a81f78afd45e?q=80&w=2070&auto=format&fit=crop'
    ],
    rating: 4.9,
    price: 2800,
    capacity: '14 Players Max',
    availability: '24 Hours',
    amenities: ['Locker Room', 'Artificial Turf', 'Parking', 'Shower', 'Security'],
    description: 'Bashundhara Turf Paradise is a premium 24-hour facility that caters to football enthusiasts at any time of day. With excellent lighting and security, it\'s perfect for late-night games.',
    reviews: [
      { id: 1, user: 'Arif K.', rating: 5, comment: 'The 24-hour availability is a game-changer! Love this place.', date: '2023-11-25' },
      { id: 2, user: 'Sabrina N.', rating: 5, comment: 'Top-tier facilities and excellent service.', date: '2023-10-30' },
      { id: 3, user: 'Rafi A.', rating: 4, comment: 'Great place to play, though prices are a bit high.', date: '2023-10-05' }
    ]
  },
  {
    id: '5',
    name: 'Uttara Sports Zone',
    type: 'Football',
    location: 'Uttara',
    imageUrl: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=2068&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542852869-ecc293ff89c0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587329310600-e1d889129d91?q=80&w=2070&auto=format&fit=crop'
    ],
    rating: 4.5,
    price: 2200,
    capacity: '10 Players Max',
    availability: '9 AM - 10 PM',
    amenities: ['Floodlights', 'Water Supply', 'WiFi', 'Changing Room'],
    description: 'Uttara Sports Zone offers a convenient location for residents of Uttara and surrounding areas. With good facilities and reasonable prices, it\'s a popular choice for regular players.',
    reviews: [
      { id: 1, user: 'Habib M.', rating: 4, comment: 'Convenient location and decent facilities.', date: '2023-11-10' },
      { id: 2, user: 'Tania S.', rating: 5, comment: 'Great turf quality and friendly staff.', date: '2023-10-25' },
      { id: 3, user: 'Omar J.', rating: 4, comment: 'Good price-to-quality ratio. Would recommend.', date: '2023-09-20' }
    ]
  },
  {
    id: '6',
    name: 'Nighttime Turf Arena',
    type: 'Football',
    location: 'Banani',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550881111-7cfde14b8073?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613204341400-5c0d49c13c00?q=80&w=2070&auto=format&fit=crop'
    ],
    rating: 4.7,
    price: 2700,
    capacity: '12 Players Max',
    availability: '6 PM - 2 AM',
    amenities: ['Professional Lighting', 'Changing Room', 'Canteen', 'Parking'],
    description: 'Nighttime Turf Arena specializes in evening and night games with professional lighting that ensures perfect visibility. It\'s the go-to place for those who can\'t play during daylight hours.',
    reviews: [
      { id: 1, user: 'Jawad K.', rating: 5, comment: 'Perfect for night games! The lighting is excellent.', date: '2023-11-30' },
      { id: 2, user: 'Priya R.', rating: 4, comment: 'Great option for playing after work. Good facilities.', date: '2023-11-05' },
      { id: 3, user: 'Kabir M.', rating: 5, comment: 'The best night-time turf in Dhaka without a doubt.', date: '2023-10-15' }
    ]
  },
  {
    id: '7',
    name: 'Cricket Stadium Mini',
    type: 'Cricket',
    location: 'Dhanmondi',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1994&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1994&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624885751388-5b4a83131b61?q=80&w=2067&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629896428945-349a2aa64bf8?q=80&w=2067&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626779246656-0237d3d88f06?q=80&w=2070&auto=format&fit=crop'
    ],
    rating: 4.6,
    price: 3500,
    capacity: '22 Players Max',
    availability: '8 AM - 6 PM',
    amenities: ['Cricket Pitch', 'Floodlights', 'Changing Room', 'Scoring System'],
    description: 'Cricket Stadium Mini offers a premium cricket experience with a professional-grade pitch and all necessary facilities for a great game. Perfect for cricket enthusiasts of all levels.',
    reviews: [
      { id: 1, user: 'Rafiq S.', rating: 5, comment: 'Excellent cricket pitch. Well maintained and professional.', date: '2023-11-20' },
      { id: 2, user: 'Neha T.', rating: 4, comment: 'Great facilities for cricket lovers.', date: '2023-10-10' },
      { id: 3, user: 'Zubair A.', rating: 5, comment: 'The best cricket ground in Dhaka for casual games.', date: '2023-09-25' }
    ]
  },
  {
    id: '8',
    name: 'Badminton Central',
    type: 'Badminton',
    location: 'Gulshan',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613918954586-e214115601f9?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613914416593-7404ca167003?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518646281387-8e7103a5e7ff?q=80&w=2070&auto=format&fit=crop'
    ],
    rating: 4.8,
    price: 1500,
    capacity: '4 Players Max',
    availability: '7 AM - 11 PM',
    amenities: ['Indoor Courts', 'AC', 'Water Cooler', 'Equipment Rental'],
    description: 'Badminton Central provides top-quality indoor courts with perfect lighting and climate control. Equipment rental is available, making it convenient for players of all levels.',
    reviews: [
      { id: 1, user: 'Nasir M.', rating: 5, comment: 'Clean, well-maintained courts with great lighting.', date: '2023-11-15' },
      { id: 2, user: 'Aisha K.', rating: 5, comment: 'The AC makes playing comfortable even in summer.', date: '2023-10-20' },
      { id: 3, user: 'Sohel R.', rating: 4, comment: 'Good courts, though sometimes a bit crowded.', date: '2023-09-30' }
    ]
  }
];

// Time slots for booking
const timeSlots = [
  { id: 1, time: '9:00 AM - 10:00 AM', available: true },
  { id: 2, time: '10:00 AM - 11:00 AM', available: true },
  { id: 3, time: '11:00 AM - 12:00 PM', available: false },
  { id: 4, time: '12:00 PM - 1:00 PM', available: true },
  { id: 5, time: '1:00 PM - 2:00 PM', available: true },
  { id: 6, time: '2:00 PM - 3:00 PM', available: true },
  { id: 7, time: '3:00 PM - 4:00 PM', available: false },
  { id: 8, time: '4:00 PM - 5:00 PM', available: true },
  { id: 9, time: '5:00 PM - 6:00 PM', available: true },
  { id: 10, time: '6:00 PM - 7:00 PM', available: false },
  { id: 11, time: '7:00 PM - 8:00 PM', available: true },
  { id: 12, time: '8:00 PM - 9:00 PM', available: true },
  { id: 13, time: '9:00 PM - 10:00 PM', available: true },
  { id: 14, time: '10:00 PM - 11:00 PM', available: false }
];

const FieldDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [field, setField] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Find the field data based on the ID
    const fieldData = fieldsData.find((f) => f.id === id);
    if (fieldData) {
      setField(fieldData);
      setSelectedImage(fieldData.gallery[0]);
    }
  }, [id]);

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  const handleTimeSlotSelect = (slotId: number) => {
    setSelectedTimeSlot(slotId);
  };

  const handleBook = () => {
    setIsBookingOpen(true);
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || selectedTimeSlot === null) {
      toast({
        title: "Booking Error",
        description: "Please select both a date and time slot.",
        variant: "destructive",
      });
      return;
    }

    // Get the selected time slot
    const slot = timeSlots.find((slot) => slot.id === selectedTimeSlot);
    
    toast({
      title: "Booking Confirmed!",
      description: `You have booked ${field?.name} on ${selectedDate.toLocaleDateString()} at ${slot?.time}.`,
    });
    
    // Close the booking dialog
    setIsBookingOpen(false);
    
    // In a real app, you would redirect to a confirmation or payment page
    // For now, we'll just navigate back to the fields page
    setTimeout(() => {
      navigate('/fields');
    }, 1500);
  };

  if (!field) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center">
        <p className="text-white">Loading field details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Field Details Hero */}
        <section className="bg-brand-darkest py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Gallery */}
              <div className="w-full md:w-7/12">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={selectedImage} 
                    alt={field.name}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {field.gallery.map((image: string, index: number) => (
                    <div 
                      key={index}
                      className={cn(
                        "rounded-lg overflow-hidden cursor-pointer transition-all",
                        selectedImage === image ? "ring-2 ring-brand-primary" : "opacity-70 hover:opacity-100"
                      )}
                      onClick={() => handleImageSelect(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${field.name} ${index + 1}`}
                        className="w-24 h-16 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Field Info */}
              <div className="w-full md:w-5/12">
                <div className="bg-brand-dark border border-white/5 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="bg-brand-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded">
                        {field.type}
                      </span>
                      <h1 className="text-2xl font-bold text-white mt-2">{field.name}</h1>
                      <div className="flex items-center text-white/60 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{field.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-brand-darkest px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-medium">{field.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-white/70 text-sm">
                      <Users className="w-4 h-4 text-brand-primary mr-2" />
                      <span>{field.capacity}</span>
                    </div>
                    <div className="flex items-center text-white/70 text-sm">
                      <Clock className="w-4 h-4 text-brand-primary mr-2" />
                      <span>{field.availability}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/5 pt-4 mb-4">
                    <h3 className="text-white font-medium mb-2">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {field.amenities.map((amenity: string, index: number) => (
                        <span key={index} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/5 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white/60 text-xs">Price per hour</span>
                        <div className="text-white text-2xl font-bold">৳{field.price}</div>
                      </div>
                      <Button 
                        variant="primary" 
                        size="lg"
                        onClick={handleBook}
                        className="px-6"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-white/60 text-xs flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>Secure booking with 100% refund policy for cancellations 24h before</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Field Description */}
        <section className="py-8">
          <div className="container mx-auto">
            <Card className="bg-brand-darkest border-white/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">About this field</h2>
                <p className="text-white/70">{field.description}</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Reviews */}
        <section className="py-8">
          <div className="container mx-auto">
            <Card className="bg-brand-darkest border-white/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-6">Reviews</h2>
                <div className="space-y-4">
                  {field.reviews.map((review: any) => (
                    <div key={review.id} className="border-b border-white/5 pb-4 last:border-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="text-white font-medium">{review.user}</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-white">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm mb-1">{review.comment}</p>
                      <span className="text-white/50 text-xs">{review.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Related Fields */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Similar Fields You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fieldsData
                .filter((f) => f.id !== field.id && f.type === field.type)
                .slice(0, 3)
                .map((relatedField) => (
                  <div key={relatedField.id} className="animate-fade-in">
                    {/* Use the existing FieldCard component to display related fields */}
                    <div 
                      className="group overflow-hidden rounded-xl transition-all duration-500 flex flex-col h-full"
                      onClick={() => navigate(`/fields/${relatedField.id}`)}
                    >
                      <div className="relative overflow-hidden aspect-[4/3] w-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest to-transparent z-10 opacity-50"></div>
                        <img 
                          src={relatedField.imageUrl} 
                          alt={relatedField.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 z-20">
                          <span className="bg-brand-primary/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded">
                            {relatedField.type}
                          </span>
                        </div>
                      </div>

                      <div className="bg-brand-dark border border-white/5 flex flex-col flex-1 p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-white text-lg font-semibold mb-1 line-clamp-1">{relatedField.name}</h3>
                            <div className="flex items-center text-white/60 text-sm">
                              <MapPin className="w-3.5 h-3.5 mr-1" />
                              <span>{relatedField.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-white font-medium">{relatedField.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                          <div>
                            <span className="text-white/60 text-xs">Starting from</span>
                            <div className="text-white font-semibold">৳{relatedField.price}/hr</div>
                          </div>
                          <Button variant="primary" size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="bg-brand-darkest text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Book {field.name}</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-medium mb-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-brand-primary" />
                Select Date
              </h3>
              <div className="border border-white/10 rounded-lg p-3">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="pointer-events-auto bg-brand-dark rounded-md"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-brand-primary" />
                Select Time Slot
              </h3>
              <div className="border border-white/10 rounded-lg p-3 h-[330px] overflow-y-auto">
                <div className="space-y-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      disabled={!slot.available}
                      onClick={() => handleTimeSlotSelect(slot.id)}
                      className={cn(
                        "w-full text-left px-3 py-2.5 rounded transition-colors",
                        selectedTimeSlot === slot.id
                          ? "bg-brand-primary text-white"
                          : slot.available
                          ? "bg-brand-dark hover:bg-brand-dark/70 text-white"
                          : "bg-white/5 text-white/40 cursor-not-allowed"
                      )}
                    >
                      <div className="flex justify-between items-center">
                        <span>{slot.time}</span>
                        {!slot.available && <span className="text-xs">Booked</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-6 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="text-white/60 text-sm">Total Price</div>
                <div className="text-white text-2xl font-bold">৳{field.price}</div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Button 
                  variant="outline" 
                  onClick={() => setIsBookingOpen(false)}
                  className="border-white/10 text-white flex-1 md:flex-initial"
                >
                  Cancel
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleConfirmBooking}
                  className="flex-1 md:flex-initial"
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default FieldDetails;
