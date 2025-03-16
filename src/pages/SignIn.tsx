
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type SignInFormValues = z.infer<typeof signInSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    setIsLoading(true);
    console.log('Signing in with:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "You have been signed in successfully!",
      });
      navigate('/'); // Redirect to home page after login
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    console.log(`Signing in with ${provider}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: `You have been signed in with ${provider}!`,
      });
      navigate('/'); // Redirect to home page after login
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 bg-brand-dark">
        <div className="container max-w-md px-4">
          <Card className="bg-brand-darkest border-white/10">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-white">Sign in</CardTitle>
              <CardDescription className="text-white/60">
                Enter your email and password to sign in
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-white/10 text-white hover:bg-brand-primary/20 hover:text-white"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={isLoading}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/10 text-white hover:bg-brand-primary/20 hover:text-white"
                  onClick={() => handleSocialLogin('Facebook')}
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
              
              {/* Email Form */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-brand-accent hover:text-brand-light"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="bg-brand-dark border-white/10 text-white"
                    {...form.register('password')}
                  />
                  {form.formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-white/60 text-sm mx-auto">
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-brand-accent hover:text-brand-light">
                  Sign up
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

export default SignIn;
