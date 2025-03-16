
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, RotateCw, Lock, Globe, Bell, CreditCard } from 'lucide-react';
import AdminLayout from '@/components/layout/AdminLayout';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
          <p className="text-white/60">Manage your admin panel settings</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="bg-brand-darkest border border-white/5 mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card className="bg-brand-darkest border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">General Settings</CardTitle>
                <CardDescription className="text-white/60">
                  Manage the general settings of your admin panel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Website Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Matth Periye"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Site Description
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="Book sports fields in Dhaka with ease. Find the perfect turf for football, cricket, badminton, and more."
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        defaultValue="info@matthperiye.com"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Contact Phone
                      </label>
                      <input
                        type="text"
                        defaultValue="+880 1712 345 678"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Default Currency
                      </label>
                      <select
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      >
                        <option value="BDT">BDT (৳) - Bangladeshi Taka</option>
                        <option value="USD">USD ($) - US Dollar</option>
                        <option value="EUR">EUR (€) - Euro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3">
                    <Button variant="outline" className="border-white/10 text-white">
                      <RotateCw className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card className="bg-brand-darkest border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">Security Settings</CardTitle>
                <CardDescription className="text-white/60">
                  Manage your account security settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Current Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your current password"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your new password"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm your new password"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div className="flex items-center pt-2">
                      <input
                        id="2fa"
                        type="checkbox"
                        className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                      />
                      <label htmlFor="2fa" className="ml-2 block text-sm text-white">
                        Enable Two-Factor Authentication (2FA)
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3">
                    <Button variant="primary" onClick={handleSave}>
                      <Lock className="mr-2 h-4 w-4" />
                      Update Security Settings
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card className="bg-brand-darkest border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">Notification Settings</CardTitle>
                <CardDescription className="text-white/60">
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Email Notifications</h3>
                    
                    <div className="space-y-3 ml-2">
                      <div className="flex items-center">
                        <input
                          id="notify-bookings"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                        />
                        <label htmlFor="notify-bookings" className="ml-2 block text-sm text-white">
                          New bookings
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="notify-users"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                        />
                        <label htmlFor="notify-users" className="ml-2 block text-sm text-white">
                          New user registrations
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="notify-reviews"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                        />
                        <label htmlFor="notify-reviews" className="ml-2 block text-sm text-white">
                          New reviews
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="notify-turf"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                        />
                        <label htmlFor="notify-turf" className="ml-2 block text-sm text-white">
                          New turf listings
                        </label>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-medium mt-4">System Notifications</h3>
                    
                    <div className="space-y-3 ml-2">
                      <div className="flex items-center">
                        <input
                          id="notify-updates"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                        />
                        <label htmlFor="notify-updates" className="ml-2 block text-sm text-white">
                          System updates
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="notify-security"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                        />
                        <label htmlFor="notify-security" className="ml-2 block text-sm text-white">
                          Security alerts
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3">
                    <Button variant="primary" onClick={handleSave}>
                      <Bell className="mr-2 h-4 w-4" />
                      Save Notification Preferences
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payments">
            <Card className="bg-brand-darkest border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">Payment Settings</CardTitle>
                <CardDescription className="text-white/60">
                  Configure payment processing options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Payment Gateway
                      </label>
                      <select
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      >
                        <option value="stripe">Stripe</option>
                        <option value="paypal">PayPal</option>
                        <option value="bkash">bKash</option>
                        <option value="nagad">Nagad</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        API Key
                      </label>
                      <input
                        type="password"
                        placeholder="Enter payment gateway API key"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white block mb-1.5">
                        Secret Key
                      </label>
                      <input
                        type="password"
                        placeholder="Enter payment gateway secret key"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>
                    
                    <div className="flex items-center pt-2">
                      <input
                        id="sandbox"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-white/10 text-brand-primary focus:ring-brand-primary/25"
                      />
                      <label htmlFor="sandbox" className="ml-2 block text-sm text-white">
                        Enable Sandbox/Test Mode
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3">
                    <Button variant="primary" onClick={handleSave}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Save Payment Settings
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
