
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, Check, X, Info } from 'lucide-react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Bookings = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock bookings data
  const bookingsData = [
    { 
      id: 'BK-012345', 
      field: 'Prime Football Zone', 
      user: 'Rahul Ahmed', 
      date: '2025-03-15', 
      time: '18:00 - 19:00', 
      price: 2500,
      status: 'completed' 
    },
    { 
      id: 'BK-012346', 
      field: 'Cricket Champions', 
      user: 'Anika Rahman', 
      date: '2025-03-16', 
      time: '15:00 - 16:00', 
      price: 3000,
      status: 'confirmed' 
    },
    { 
      id: 'BK-012347', 
      field: 'Badminton Court 3', 
      user: 'Karim Hossain', 
      date: '2025-03-16', 
      time: '19:00 - 20:00', 
      price: 1500,
      status: 'confirmed' 
    },
    { 
      id: 'BK-012348', 
      field: 'Football Field 2', 
      user: 'Tania Khan', 
      date: '2025-03-17', 
      time: '10:00 - 11:00', 
      price: 2200,
      status: 'pending' 
    },
    { 
      id: 'BK-012349', 
      field: 'Cricket Ground 1', 
      user: 'Masud Rana', 
      date: '2025-03-14', 
      time: '16:00 - 17:00', 
      price: 2800,
      status: 'cancelled' 
    }
  ];

  // Filter bookings based on search term
  const filteredBookings = bookingsData.filter(booking => 
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'confirmed': return 'bg-blue-500/20 text-blue-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleConfirm = (id: string) => {
    toast({
      title: "Booking Confirmed",
      description: `Booking ${id} has been confirmed.`,
    });
  };

  const handleCancel = (id: string) => {
    toast({
      title: "Booking Cancelled",
      description: `Booking ${id} has been cancelled.`,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Manage Bookings</h1>
          <p className="text-white/60">View and manage all field bookings</p>
        </div>

        <Card className="bg-brand-darkest border-white/5">
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  className="w-full sm:w-80 bg-brand-dark border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-brand-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="border-white/10 text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date Range
                </Button>
                <Button variant="outline" className="border-white/10 text-white">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
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
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-right p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-3">{booking.id}</td>
                      <td className="p-3">{booking.field}</td>
                      <td className="p-3">{booking.user}</td>
                      <td className="p-3">
                        {booking.date} <br />
                        <span className="text-white/60">{booking.time}</span>
                      </td>
                      <td className="p-3">৳{booking.price}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-white/70 hover:text-white">
                                <Info className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-brand-darkest border-white/10 text-white">
                              <DialogHeader>
                                <DialogTitle>Booking Details - {booking.id}</DialogTitle>
                              </DialogHeader>
                              <div className="py-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-white/60 text-sm">Field</p>
                                    <p className="text-white">{booking.field}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">User</p>
                                    <p className="text-white">{booking.user}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Date</p>
                                    <p className="text-white">{booking.date}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Time</p>
                                    <p className="text-white">{booking.time}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Amount</p>
                                    <p className="text-white">৳{booking.price}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Status</p>
                                    <p className={getStatusColor(booking.status)}>
                                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          
                          {booking.status === 'pending' && (
                            <>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 text-white/70 hover:text-green-500"
                                onClick={() => handleConfirm(booking.id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 text-white/70 hover:text-red-500"
                                onClick={() => handleCancel(booking.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredBookings.length === 0 && (
                <div className="text-center py-8 text-white/60">
                  No bookings found matching your search.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Bookings;
