
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  MapPin,
  Users,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: React.ReactNode;
}

// Mock authentication check - in a real app, this would check auth status
const useAdminAuth = () => {
  // For demo purposes, we'll assume the admin is authenticated
  return { isAuthenticated: true };
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isAuthenticated } = useAdminAuth();
  const location = useLocation();
  const { toast } = useToast();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  // Mock logout function
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    // In a real app, this would clear auth tokens and redirect
  };

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  const navItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: LayoutDashboard
    },
    {
      name: 'Fields',
      path: '/admin/fields',
      icon: MapPin
    },
    {
      name: 'Bookings',
      path: '/admin/bookings',
      icon: Calendar
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: Users
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 bg-brand-darkest border-r border-white/5 transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/5">
            <h1 className="text-xl font-bold text-gradient">Admin Panel</h1>
          </div>
          
          <nav className="flex-1 py-6 px-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm rounded-lg transition-colors",
                      location.pathname === item.path
                        ? "bg-brand-primary/20 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-white/5">
            <Button
              variant="ghost"
              className="w-full justify-start text-white/70 hover:text-white hover:bg-white/5"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main 
        className={cn(
          "transition-all duration-300 ease-in-out",
          isSidebarOpen ? "md:ml-64" : "ml-0"
        )}
      >
        <div className="min-h-screen p-6 pt-16 md:pt-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
