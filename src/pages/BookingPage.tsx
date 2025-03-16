
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, Check, Clock } from 'lucide-react';

// This component will leverage the field detail data and time slots from FieldDetails.tsx
// In a real application, this would fetch data from an API

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [field, setField] = useState<any | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(null);
  const [step, setStep] = useState(1); // 1: Select date/time, 2: Review, 3: Confirmation
  const [isLoading, setIsLoading] = useState(false);

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

  // Mock fetch field data
  useEffect(() => {
    const fetchField = async () => {
      // In a real app, this would be an API call
      // For now, we'll use the mock data from FieldDetails
      const fieldData = {
        id: '1',
        name: 'Prime Football Zone',
        type: 'Football',
        location: 'Dhanmondi',
        imageUrl: 'https://images.unsplash.com/photo-1556302132-40bb13638500?q=80&w=2070&auto=format&fit=crop',
        rating: 4.8,
        price: 2500,
        capacity: '10 Players Max',
        availability: '9 AM - 11 PM',
      };
      
      setField(fieldData);
    };
    
    fetchField();
  }, [id]);

  const handleTimeSlotSelect = (slotId: number) => {
    setSelectedTimeSlot(slotId);
  };

  const goToNextStep = () => {
    if (step === 1 && (!selectedDate || selectedTimeSlot === null)) {
      toast({
        title: "Selection Required",
        description: "Please select both a date and time slot.",
        variant: "destructive",
      });
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const goToPrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      // Go back to field details
      navigate(`/fields/${id}`);
    }
  };

  const handleConfirmBooking = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      setStep(3); // Move to confirmation step
      
      toast({
        title: "Booking Confirmed!",
        description: "Your booking has been successfully confirmed.",
      });
    }, 1500);
  };

  if (!field) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center">
        <p className="text-white">Loading booking details...</p>
      </div>
    );
  }

  // Get the selected time slot object
  const selectedSlot = timeSlots.find(slot => slot.id === selectedTimeSlot);

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto py-10">
          <Button
            variant="ghost"
            className="text-white mb-6"
            onClick={goToPrevStep}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {step === 1 ? "Back to Field Details" : "Back"}
          </Button>
          
          {/* Booking Progress */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative flex items-center justify-between">
              {/* Progress Line */}
              <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-1/2 bg-white/10">
                <div 
                  className="h-full bg-brand-primary transition-all duration-500"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                ></div>
              </div>
              
              {/* Step 1 */}
              <div className="relative z-10">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                  step >= 1 ? "bg-brand-primary" : "bg-white/10"
                )}>
                  {step > 1 ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <span className="text-white font-medium">1</span>
                  )}
                </div>
                <span className="block text-center text-sm mt-2 text-white/80">Select</span>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                  step >= 2 ? "bg-brand-primary" : "bg-white/10"
                )}>
                  {step > 2 ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <span className="text-white font-medium">2</span>
                  )}
                </div>
                <span className="block text-center text-sm mt-2 text-white/80">Review</span>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                  step >= 3 ? "bg-brand-primary" : "bg-white/10"
                )}>
                  <span className="text-white font-medium">3</span>
                </div>
                <span className="block text-center text-sm mt-2 text-white/80">Confirmed</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Select Date & Time */}
            {step === 1 && (
              <Card className="bg-brand-darkest border-white/5">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Select Date & Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3 flex items-center text-white">
                        <CalendarIcon className="w-4 h-4 mr-2 text-brand-primary" />
                        Select Date
                      </h3>
                      <div className="border border-white/10 rounded-lg p-3">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="pointer-events-auto bg-brand-dark rounded-md"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3 flex items-center text-white">
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
                  
                  <div className="mt-8 flex justify-end">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={goToNextStep}
                      className="px-6"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 2: Review & Pay */}
            {step === 2 && (
              <Card className="bg-brand-darkest border-white/5">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Review & Confirm Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <img
                        src={field.imageUrl}
                        alt={field.name}
                        className="w-20 h-20 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-white font-medium">{field.name}</h3>
                        <p className="text-white/60 text-sm">{field.location}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-brand-dark p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <CalendarIcon className="w-4 h-4 text-brand-primary mr-2" />
                          <span className="text-white font-medium">Date</span>
                        </div>
                        <p className="text-white/80">
                          {selectedDate?.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      
                      <div className="bg-brand-dark p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Clock className="w-4 h-4 text-brand-primary mr-2" />
                          <span className="text-white font-medium">Time</span>
                        </div>
                        <p className="text-white/80">{selectedSlot?.time}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-white mb-2">
                        <span>Hourly Rate</span>
                        <span>৳{field.price}</span>
                      </div>
                      <div className="flex justify-between text-white mb-2">
                        <span>Duration</span>
                        <span>1 hour</span>
                      </div>
                      <div className="flex justify-between text-white/60 text-sm mb-2">
                        <span>Service Fee</span>
                        <span>৳100</span>
                      </div>
                      <div className="border-t border-white/10 pt-2 mt-2">
                        <div className="flex justify-between text-white font-bold text-lg">
                          <span>Total</span>
                          <span>৳{field.price + 100}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-col gap-4">
                      <div className="bg-white/5 rounded-lg p-4 text-white/80 text-sm">
                        <p>
                          By confirming this booking, you agree to our terms and conditions. 
                          You can cancel for free up to 24 hours before your booking.
                        </p>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={goToPrevStep}
                          className="border-white/10 text-white"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={handleConfirmBooking}
                          disabled={isLoading}
                          className="px-6"
                        >
                          {isLoading ? "Processing..." : "Confirm Booking"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 3: Confirmation */}
            {step === 3 && (
              <Card className="bg-brand-darkest border-white/5 text-center p-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  
                  <h2 className="text-white text-2xl font-bold mb-2">Booking Confirmed!</h2>
                  <p className="text-white/60 mb-6 max-w-md">
                    Your booking for {field.name} on {selectedDate?.toLocaleDateString()} at {selectedSlot?.time} has been confirmed.
                  </p>
                  
                  <div className="bg-brand-dark p-6 rounded-lg mb-8 w-full max-w-md">
                    <div className="flex justify-between text-white mb-3">
                      <span>Booking Reference:</span>
                      <span className="font-mono">BK-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between text-white mb-3">
                      <span>Field:</span>
                      <span>{field.name}</span>
                    </div>
                    <div className="flex justify-between text-white mb-3">
                      <span>Date:</span>
                      <span>{selectedDate?.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-white mb-3">
                      <span>Time:</span>
                      <span>{selectedSlot?.time}</span>
                    </div>
                    <div className="flex justify-between text-white mb-3">
                      <span>Total Paid:</span>
                      <span>৳{field.price + 100}</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="primary"
                    onClick={() => navigate('/fields')}
                  >
                    Browse More Fields
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
