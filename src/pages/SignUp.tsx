
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Facebook, Github, Loader2, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Form schema
const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setIsLoading(true);
    console.log('Signing up with:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Your account has been created successfully!",
      });
      navigate('/sign-in'); // Redirect to sign in page after registration
    }, 1500);
  };

  const handleSocialSignUp = (provider: string) => {
    setIsLoading(true);
    console.log(`Signing up with ${provider}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: `Your account has been created with ${provider}!`,
      });
      navigate('/'); // Redirect to home page after registration
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 bg-brand-dark">
        <div className="container max-w-md px-4">
          <Card className="bg-brand-darkest border-white/10">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-white">Create an account</CardTitle>
              <CardDescription className="text-white/60">
                Enter your details to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-white/10 text-white hover:bg-brand-primary/20 hover:text-white"
                  onClick={() => handleSocialSignUp('Google')}
                  disabled={isLoading}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/10 text-white hover:bg-brand-primary/20 hover:text-white"
                  onClick={() => handleSocialSignUp('Facebook')}
                  disabled={isLoading}
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-brand-darkest px-2 text-white/60">Or continue with</span>
                </div>
              </div>
              
              {/* Registration Form */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    autoComplete="name"
                    className="bg-brand-dark border-white/10 text-white"
                    {...form.register('name')}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="bg-brand-dark border-white/10 text-white"
                    {...form.register('email')}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="bg-brand-dark border-white/10 text-white"
                    {...form.register('password')}
                  />
                  {form.formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="bg-brand-dark border-white/10 text-white"
                    {...form.register('confirmPassword')}
                  />
                  {form.formState.errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.confirmPassword.message}</p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    className="border-white/30 data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary"
                    {...form.register('terms')}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-tight text-white/70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link to="/terms" className="text-brand-accent hover:text-brand-light underline">
                      terms and conditions
                    </Link>
                  </label>
                </div>
                {form.formState.errors.terms && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.terms.message}</p>
                )}
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Account
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-white/60 text-sm mx-auto">
                Already have an account?{' '}
                <Link to="/sign-in" className="text-brand-accent hover:text-brand-light">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
