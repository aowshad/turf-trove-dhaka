
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Plus, Edit, Trash2, Eye, Filter } from 'lucide-react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Fields = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock fields data
  const fieldsData = [
    { 
      id: 1, 
      name: 'Prime Football Zone', 
      location: 'Dhanmondi', 
      type: 'Football', 
      price: 2500, 
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1556302132-40bb13638500?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      id: 2, 
      name: 'Cricket Champions', 
      location: 'Mirpur', 
      type: 'Cricket', 
      price: 3000, 
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop'
    },
    { 
      id: 3, 
      name: 'Badminton Court 3', 
      location: 'Gulshan', 
      type: 'Badminton', 
      price: 1500, 
      status: 'inactive',
      imageUrl: 'https://images.unsplash.com/photo-1626224583764-f88d78ab0e1a?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      id: 4, 
      name: 'Football Field 2', 
      location: 'Uttara', 
      type: 'Football', 
      price: 2200, 
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop'
    },
    { 
      id: 5, 
      name: 'Cricket Ground 1', 
      location: 'Banani', 
      type: 'Cricket', 
      price: 2800, 
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1624458698709-acbe7c0bad93?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  // Filter fields based on search term
  const filteredFields = fieldsData.filter(field => 
    field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    field.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    field.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    toast({
      title: "Field Deleted",
      description: `Field #${id} has been deleted successfully.`,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Manage Fields</h1>
            <p className="text-white/60">View and manage all sports fields</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">
                <Plus className="mr-2" />
                Add New Field
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-brand-darkest border-white/10 text-white sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Field</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-white/60 text-center">Field creation form would go here</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="bg-brand-darkest border-white/5">
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search fields..."
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
                    <th className="text-left p-3">Field</th>
                    <th className="text-left p-3">Location</th>
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">Price</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-right p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFields.map((field) => (
                    <tr key={field.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded overflow-hidden mr-3">
                            <img 
                              src={field.imageUrl} 
                              alt={field.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{field.name}</span>
                        </div>
                      </td>
                      <td className="p-3">{field.location}</td>
                      <td className="p-3">{field.type}</td>
                      <td className="p-3">৳{field.price}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          field.status === 'active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {field.status.charAt(0).toUpperCase() + field.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white/70 hover:text-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white/70 hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-white/70 hover:text-red-500"
                            onClick={() => handleDelete(field.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredFields.length === 0 && (
                <div className="text-center py-8 text-white/60">
                  No fields found matching your search.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Fields;
