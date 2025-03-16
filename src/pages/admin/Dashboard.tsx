
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, TrendingUp, Activity, DollarSign } from 'lucide-react';
import AdminLayout from '@/components/layout/AdminLayout';

const Dashboard = () => {
  // Mock data - in a real app, this would come from an API
  const statsData = [
    {
      title: 'Total Bookings',
      value: '1,234',
      change: '+12%',
      icon: Calendar,
      color: 'text-blue-500'
    },
    {
      title: 'Active Fields',
      value: '89',
      change: '+4%',
      icon: MapPin,
      color: 'text-green-500'
    },
    {
      title: 'Registered Users',
      value: '3,456',
      change: '+18%',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      title: 'Revenue',
      value: '৳458,790',
      change: '+24%',
      icon: DollarSign,
      color: 'text-yellow-500'
    }
  ];

  // Mock recent bookings
  const recentBookings = [
    { id: 'BK-012345', field: 'Prime Football Zone', user: 'Rahul Ahmed', date: '2025-03-15', time: '18:00 - 19:00', status: 'completed' },
    { id: 'BK-012346', field: 'Cricket Champions', user: 'Anika Rahman', date: '2025-03-16', time: '15:00 - 16:00', status: 'upcoming' },
    { id: 'BK-012347', field: 'Badminton Court 3', user: 'Karim Hossain', date: '2025-03-16', time: '19:00 - 20:00', status: 'upcoming' },
    { id: 'BK-012348', field: 'Football Field 2', user: 'Tania Khan', date: '2025-03-17', time: '10:00 - 11:00', status: 'upcoming' },
    { id: 'BK-012349', field: 'Cricket Ground 1', user: 'Masud Rana', date: '2025-03-14', time: '16:00 - 17:00', status: 'completed' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
          <p className="text-white/60">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <Card key={index} className="bg-brand-darkest border-white/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60 mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                      <span className="text-xs text-green-500">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="bg-brand-darkest border border-white/5 mb-4">
            <TabsTrigger value="bookings">Recent Bookings</TabsTrigger>
            <TabsTrigger value="fields">Popular Fields</TabsTrigger>
            <TabsTrigger value="users">New Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bookings">
            <Card className="bg-brand-darkest border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-white">
                    <thead className="text-white/60 border-b border-white/10">
                      <tr>
                        <th className="text-left p-3">Booking ID</th>
                        <th className="text-left p-3">Field</th>
                        <th className="text-left p-3">User</th>
                        <th className="text-left p-3">Date & Time</th>
                        <th className="text-left p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="p-3">{booking.id}</td>
                          <td className="p-3">{booking.field}</td>
                          <td className="p-3">{booking.user}</td>
                          <td className="p-3">
                            {booking.date} <br />
                            <span className="text-white/60">{booking.time}</span>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === 'completed' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fields">
            <Card className="bg-brand-darkest border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">Popular Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-white/60 text-center py-6">
                  Field statistics content will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users">
            <Card className="bg-brand-darkest border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">New Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-white/60 text-center py-6">
                  User statistics content will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Activity Overview */}
        <Card className="bg-brand-darkest border-white/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white text-lg">Activity Overview</CardTitle>
            <Activity className="w-5 h-5 text-white/60" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">New Booking Created</p>
                  <p className="text-white/60 text-sm">Football Field 1 booked by Mehedi Hasan</p>
                  <p className="text-white/40 text-xs mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">New Field Added</p>
                  <p className="text-white/60 text-sm">Cricket Ground 3 in Mirpur</p>
                  <p className="text-white/40 text-xs mt-1">5 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 mr-4">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">New User Registered</p>
                  <p className="text-white/60 text-sm">Faria Islam joined the platform</p>
                  <p className="text-white/40 text-xs mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
