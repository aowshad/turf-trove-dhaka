
import React from 'react';
import { Search, Calendar, CreditCard, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    title: 'Find Your Field',
    description: 'Search for sports fields by location, type, or availability. Filter to find the perfect match for your game.',
    icon: Search,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Choose Time Slot',
    description: 'Select your preferred date and time from the available slots. You can see real-time availability.',
    icon: Calendar,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    title: 'Quick Payment',
    description: 'Pay securely using various payment methods including bKash, Nagad, and credit cards.',
    icon: CreditCard,
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 4,
    title: 'Confirmation',
    description: 'Receive instant booking confirmation and details via SMS and email. You\'re all set to play!',
    icon: CheckCircle,
    color: 'from-brand-accent to-brand-highlight'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-darkest to-brand-dark">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-highlight text-sm font-medium">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-white/60">
            Booking a sports field in Dhaka has never been easier. 
            Follow these simple steps to secure your next game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StepCard step={step} isLast={index === steps.length - 1} />
              
              {/* Connecting lines between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-white/10 to-transparent z-0">
                  <div className="absolute -right-3 -top-1.5 w-4 h-4 rounded-full border-2 border-white/20"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
  };
  isLast: boolean;
}

const StepCard = ({ step, isLast }: StepCardProps) => {
  const Icon = step.icon;
  
  return (
    <div className="glass-card rounded-xl p-6 h-full">
      <div className="relative flex flex-col items-center text-center">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br",
          step.color
        )}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <span className="absolute -top-3 -left-3 bg-brand-dark w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/10">
          {step.id}
        </span>
        
        <h3 className="text-white text-xl font-semibold mb-3">{step.title}</h3>
        <p className="text-white/70 text-sm">{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
