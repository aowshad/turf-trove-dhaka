
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Image, Info, MapPin, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(3, { message: "Field name must be at least 3 characters" }),
  type: z.string({ required_error: "Please select a field type" }),
  location: z.string().min(3, { message: "Location is required" }),
  address: z.string().min(5, { message: "Full address is required" }),
  price: z.string().regex(/^\d+$/, { message: "Price must be a number" }),
  capacity: z.string().regex(/^\d+$/, { message: "Capacity must be a number" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  openingTime: z.string().min(1, { message: "Opening time is required" }),
  closingTime: z.string().min(1, { message: "Closing time is required" }),
  contactName: z.string().min(3, { message: "Contact name is required" }),
  contactEmail: z.string().email({ message: "Invalid email address" }),
  contactPhone: z.string().min(10, { message: "Valid phone number is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const ListYourTurf = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      location: "",
      address: "",
      price: "",
      capacity: "",
      description: "",
      openingTime: "",
      closingTime: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  // Mock function to handle image upload
  const handleImageUpload = () => {
    // In a real app, this would upload to a server
    const newImages = [
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2049&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    ];
    
    setImages([...images, ...newImages]);
    toast.success("Images uploaded successfully!");
  };

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // In a real app, this would send the data to a server
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your turf has been submitted successfully!");
    }, 1500);
  };

  // Next step handler
  const handleNextStep = async () => {
    if (currentStep === 1) {
      const result = await form.trigger(['name', 'type', 'location', 'address', 'price', 'capacity', 'description']);
      if (result) setCurrentStep(2);
    } else if (currentStep === 2 && images.length > 0) {
      setCurrentStep(3);
    } else if (currentStep === 2) {
      toast.error("Please upload at least one image");
    }
  };

  // Previous step handler
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Render form based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Prime Football Zone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select field type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-brand-dark border border-white/10">
                      <SelectItem value="Football">Football</SelectItem>
                      <SelectItem value="Cricket">Cricket</SelectItem>
                      <SelectItem value="Badminton">Badminton</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-brand-dark border border-white/10">
                        <SelectItem value="Dhanmondi">Dhanmondi</SelectItem>
                        <SelectItem value="Mirpur">Mirpur</SelectItem>
                        <SelectItem value="Gulshan">Gulshan</SelectItem>
                        <SelectItem value="Bashundhara">Bashundhara</SelectItem>
                        <SelectItem value="Uttara">Uttara</SelectItem>
                        <SelectItem value="Banani">Banani</SelectItem>
                        <SelectItem value="Mohammadpur">Mohammadpur</SelectItem>
                        <SelectItem value="Khilgaon">Khilgaon</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Full street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hourly Price (৳)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 2500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Capacity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="openingTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opening Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="closingTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Closing Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your turf, amenities, special features, etc." 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-brand-darkest rounded-lg p-6 border border-dashed border-white/20">
              <div className="text-center space-y-4">
                <div className="mx-auto bg-brand-dark/50 w-16 h-16 rounded-full flex items-center justify-center">
                  <Image className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg font-medium text-white">Upload Field Images</h3>
                <p className="text-white/60 text-sm">
                  Drag and drop images here, or click to browse.<br/>
                  (JPG, PNG, max 5MB each)
                </p>
                
                <Button 
                  variant="outline" 
                  className="mt-4 border-white/10"
                  onClick={handleImageUpload}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Images
                </Button>
              </div>
            </div>
            
            {images.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-white/90 font-medium">Uploaded Images</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                      <img src={img} alt="Field" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => setImages(images.filter((_, i) => i !== index))}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-brand-primary/10 rounded-lg p-4 border border-brand-primary/20">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-white/80">
                  Adding high-quality images increases your chances of getting bookings. 
                  We recommend uploading at least 3 images showing different angles of your field.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Contact Information</h3>
            
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+880 12345 67890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="bg-brand-darkest rounded-lg p-5 border border-white/10">
              <h4 className="font-medium text-white mb-3">Terms & Conditions</h4>
              <p className="text-sm text-white/70 mb-4">
                By submitting this form, you agree to our terms and conditions for listing your turf. 
                We'll review your submission and contact you within 48 hours.
              </p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 rounded border-white/20 bg-brand-dark text-brand-primary focus:ring-brand-primary/40"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-white/80">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          </div>
        );
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto bg-brand-darkest rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-brand-primary" />
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-4">
                  Your Turf Has Been Successfully Submitted!
                </h1>
                
                <p className="text-white/70 mb-8">
                  Thank you for listing your turf with us. Our team will review your submission and 
                  contact you within 48 hours to complete the verification process.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" asChild>
                    <Link to="/">
                      Return to Homepage
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="border-white/10" asChild>
                    <Link to="/contact">
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-brand-darkest py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                List Your <span className="text-gradient">Turf</span> With Us
              </h1>
              <p className="text-white/70">
                Join hundreds of turf owners across Dhaka and start welcoming players to your field
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-brand-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Progress Steps */}
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  {['Field Details', 'Upload Images', 'Contact Info'].map((step, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          currentStep > index + 1 
                            ? 'bg-brand-primary text-white' 
                            : currentStep === index + 1 
                              ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary' 
                              : 'bg-brand-darkest text-white/50'
                        }`}
                      >
                        {currentStep > index + 1 ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <span 
                        className={`text-sm ${
                          currentStep >= index + 1 ? 'text-white' : 'text-white/50'
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="relative mt-3">
                  <div className="absolute top-0 left-[5%] right-[5%] h-1 bg-brand-darkest">
                    <div 
                      className="h-full bg-brand-primary transition-all" 
                      style={{ width: `${(currentStep - 1) * 50}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Form Card */}
              <div className="bg-brand-darkest rounded-xl p-8 border border-white/5 shadow-xl">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {renderStepContent()}
                    
                    <div className="flex justify-between mt-8">
                      {currentStep > 1 ? (
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={handlePreviousStep}
                          className="border-white/10"
                        >
                          Previous
                        </Button>
                      ) : (
                        <div></div>
                      )}
                      
                      {currentStep < 3 ? (
                        <Button 
                          type="button" 
                          variant="primary" 
                          onClick={handleNextStep}
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button 
                          type="submit" 
                          variant="primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Turf"}
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
              
              {/* Benefits Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-brand-darkest p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Enhanced Visibility</h3>
                  <p className="text-white/60 text-sm">
                    Get your turf in front of thousands of potential customers looking for sports venues
                  </p>
                </div>
                
                <div className="bg-brand-darkest p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brand-primary">
                      <path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"></path>
                      <path d="M6 9h12"></path>
                      <path d="m9 16 3-3 3 3"></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Easy Bookings</h3>
                  <p className="text-white/60 text-sm">
                    Our platform handles all bookings, payments, and scheduling so you can focus on your business
                  </p>
                </div>
                
                <div className="bg-brand-darkest p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brand-primary">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Analytics</h3>
                  <p className="text-white/60 text-sm">
                    Get insights on bookings, customer preferences, and peak hours to optimize your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListYourTurf;
