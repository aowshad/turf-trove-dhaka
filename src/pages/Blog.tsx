
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookingCta from '@/components/home/BookingCta';

// Mock blog posts data
const blogPosts = [
  {
    id: '1',
    title: '10 Best Football Turfs in Dhaka for Weekend Games',
    excerpt: 'Looking for the perfect pitch for your weekend football match? Check out our top picks for the best football turfs in Dhaka with great facilities.',
    date: 'May 15, 2023',
    author: 'Ahmed Khan',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop',
    category: 'Recommendations'
  },
  {
    id: '2',
    title: 'How to Book a Sports Field in Dhaka: A Complete Guide',
    excerpt: 'Learn the ins and outs of booking sports fields in Dhaka, from finding the right venue to securing your preferred time slot.',
    date: 'April 28, 2023',
    author: 'Fariha Rahman',
    image: 'https://images.unsplash.com/photo-1611661476943-f2f2d6f0daf4?q=80&w=1976&auto=format&fit=crop',
    category: 'Guides'
  },
  {
    id: '3',
    title: 'The Rise of Turf Football in Bangladesh',
    excerpt: 'Explore how artificial turf football fields have transformed the sports scene in Bangladesh, making the beautiful game more accessible.',
    date: 'April 10, 2023',
    author: 'Tanvir Ahmed',
    image: 'https://images.unsplash.com/photo-1529154691717-3306083d869e?q=80&w=1974&auto=format&fit=crop',
    category: 'Trends'
  },
  {
    id: '4',
    title: '5 Health Benefits of Regular Football Games',
    excerpt: 'Discover the amazing health benefits of playing football regularly, from cardiovascular fitness to mental wellbeing.',
    date: 'March 22, 2023',
    author: 'Dr. Nusrat Jahan',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070&auto=format&fit=crop',
    category: 'Health'
  },
  {
    id: '5',
    title: 'The Complete Guide to Cricket Pitches in Dhaka',
    excerpt: 'Find the best cricket pitches and nets in Dhaka for practice sessions or friendly matches with your team.',
    date: 'March 15, 2023',
    author: 'Rafiq Hasan',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1994&auto=format&fit=crop',
    category: 'Recommendations'
  },
  {
    id: '6',
    title: 'Organizing a Corporate Sports Tournament: Tips & Tricks',
    excerpt: 'Learn how to organize a successful corporate sports tournament that boosts team morale and creates lasting memories.',
    date: 'February 28, 2023',
    author: 'Sabrina Khan',
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop',
    category: 'Events'
  }
];

const categories = [
  'All',
  'Recommendations',
  'Guides',
  'Health',
  'Trends',
  'Events'
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <section className="bg-brand-darkest py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest News & Tips for <span className="text-gradient">Sports Enthusiasts</span>
              </h1>
              <p className="text-white/70">
                Stay updated with the latest trends, tips, and news about sports fields in Dhaka
              </p>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'primary' : 'outline'}
                  size="sm"
                  className={category !== 'All' ? 'border-white/10 text-white hover:bg-white/5' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-12 bg-brand-dark">
          <div className="container mx-auto">
            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-brand-darkest rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-7 relative">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                      style={{ maxHeight: '500px' }}
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </div>
                  </div>
                  <div className="md:col-span-5 p-6 md:p-8 flex flex-col">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{blogPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-1" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {blogPosts[0].title}
                    </h2>
                    
                    <p className="text-white/70 mb-6 flex-grow">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <Button variant="primary" asChild>
                      <Link to={`/blog/${blogPosts[0].id}`} className="flex items-center">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Regular Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map(post => (
                <div key={post.id} className="bg-brand-darkest rounded-xl overflow-hidden group h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 mb-5 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="outline" asChild className="mt-auto border-white/10 text-white hover:bg-white/5 group">
                      <Link to={`/blog/${post.id}`} className="flex items-center">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
                  Previous
                </Button>
                <Button variant="primary" size="sm">1</Button>
                <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">2</Button>
                <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">3</Button>
                <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <BookingCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
