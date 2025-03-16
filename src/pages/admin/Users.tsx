
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Edit, Trash2, UserCog, Shield } from 'lucide-react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Users = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock users data
  const usersData = [
    { 
      id: 1, 
      name: 'Rahul Ahmed', 
      email: 'rahul@example.com', 
      joinDate: '2025-01-15', 
      bookings: 12,
      role: 'user',
      status: 'active' 
    },
    { 
      id: 2, 
      name: 'Anika Rahman', 
      email: 'anika@example.com', 
      joinDate: '2025-01-20', 
      bookings: 8,
      role: 'admin',
      status: 'active' 
    },
    { 
      id: 3, 
      name: 'Karim Hossain', 
      email: 'karim@example.com', 
      joinDate: '2025-02-03', 
      bookings: 5,
      role: 'user',
      status: 'active' 
    },
    { 
      id: 4, 
      name: 'Tania Khan', 
      email: 'tania@example.com', 
      joinDate: '2025-02-12', 
      bookings: 3,
      role: 'user',
      status: 'inactive' 
    },
    { 
      id: 5, 
      name: 'Masud Rana', 
      email: 'masud@example.com', 
      joinDate: '2025-02-25', 
      bookings: 6,
      role: 'user',
      status: 'active' 
    }
  ];

  // Filter users based on search term
  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    toast({
      title: "User Deleted",
      description: `User #${id} has been deleted successfully.`,
    });
  };

  const handleMakeAdmin = (id: number) => {
    toast({
      title: "Role Updated",
      description: `User #${id} has been promoted to admin.`,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Manage Users</h1>
          <p className="text-white/60">View and manage all users</p>
        </div>

        <Card className="bg-brand-darkest border-white/5">
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full sm:w-80 bg-brand-dark border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-brand-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button variant="outline" className="border-white/10 text-white">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-white">
                <thead className="text-white/60 border-b border-white/10">
                  <tr>
                    <th className="text-left p-3">User</th>
                    <th className="text-left p-3">Join Date</th>
                    <th className="text-left p-3">Bookings</th>
                    <th className="text-left p-3">Role</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-right p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-3">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-white/60 text-xs">{user.email}</p>
                        </div>
                      </td>
                      <td className="p-3">{user.joinDate}</td>
                      <td className="p-3">{user.bookings}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.role === 'admin' 
                            ? 'bg-purple-500/20 text-purple-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-white/70 hover:text-white">
                                <UserCog className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-brand-darkest border-white/10 text-white">
                              <DialogHeader>
                                <DialogTitle>User Details - {user.name}</DialogTitle>
                              </DialogHeader>
                              <div className="py-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-white/60 text-sm">Name</p>
                                    <p className="text-white">{user.name}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Email</p>
                                    <p className="text-white">{user.email}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Join Date</p>
                                    <p className="text-white">{user.joinDate}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Total Bookings</p>
                                    <p className="text-white">{user.bookings}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Role</p>
                                    <p className="text-white">{user.role}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-sm">Status</p>
                                    <p className="text-white">{user.status}</p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          
                          {user.role !== 'admin' && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-white/70 hover:text-purple-500"
                              onClick={() => handleMakeAdmin(user.id)}
                              title="Make Admin"
                            >
                              <Shield className="h-4 w-4" />
                            </Button>
                          )}
                          
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white/70 hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-white/70 hover:text-red-500"
                            onClick={() => handleDelete(user.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredUsers.length === 0 && (
                <div className="text-center py-8 text-white/60">
                  No users found matching your search.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Users;
