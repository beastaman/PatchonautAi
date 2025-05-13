'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SettingsPage() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Configure your patch management preferences</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="h-9">
              Cancel
            </Button>
            <Button size="sm" className="h-9 bg-cyan-500 hover:bg-cyan-600 text-white">
              Save Changes
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-muted/20 border-border/40 p-1">
            <TabsTrigger value="general" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              General
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Integrations
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Team
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              AI Settings
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Notifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-6">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Patch Management Settings</CardTitle>
                <CardDescription>
                  Configure your default patch management behaviors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="automatic-patching" className="text-base">Automatic Patching</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow Patchonaut to automatically apply non-critical patches
                      </p>
                    </div>
                    <Switch id="automatic-patching" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="approval-required" className="text-base">Approval Required for Critical Patches</Label>
                      <p className="text-sm text-muted-foreground">
                        Require admin approval before applying critical patches
                      </p>
                    </div>
                    <Switch id="approval-required" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenance-window" className="text-base">Respect Maintenance Windows</Label>
                      <p className="text-sm text-muted-foreground">
                        Only apply patches during configured maintenance windows
                      </p>
                    </div>
                    <Switch id="maintenance-window" defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="patch-timeout">Patch Timeout (minutes)</Label>
                  <div className="pt-2">
                    <Slider
                      id="patch-timeout"
                      defaultValue={[30]}
                      max={120}
                      step={5}
                      className="[&>[role=slider]]:bg-cyan-500"
                    />
                    <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                      <span>5</span>
                      <span>30</span>
                      <span>60</span>
                      <span>120</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="default-environment">Default Environment</Label>
                  <Select defaultValue="production">
                    <SelectTrigger>
                      <SelectValue placeholder="Select environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="staging">Staging</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="testing">Testing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Maintenance Windows</CardTitle>
                <CardDescription>
                  Configure when patches can be automatically applied
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="maintenance-schedule">Schedule</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input id="start-time" type="time" defaultValue="01:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Input id="end-time" type="time" defaultValue="05:00" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Days of Week</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Switch id={`day-${day}`} defaultChecked={day === 'Sat' || day === 'Sun'} />
                        <Label htmlFor={`day-${day}`} className="text-sm">{day}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai" className="space-y-6">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>AI Automation Settings</CardTitle>
                <CardDescription>
                  Configure AI behavior for patch management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="ai-enabled" className="text-base">Enable AI Automation</Label>
                      <p className="text-sm text-muted-foreground">
                        Use AI to automatically analyze and apply patches
                      </p>
                    </div>
                    <Switch id="ai-enabled" defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confidence-threshold">AI Confidence Threshold</Label>
                    <div className="pt-2">
                      <Slider
                        id="confidence-threshold"
                        defaultValue={[75]}
                        max={100}
                        step={5}
                        className="[&>[role=slider]]:bg-cyan-500"
                      />
                      <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                        <span>Low (50%)</span>
                        <span>Medium (75%)</span>
                        <span>High (95%)</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Higher threshold means AI will be more conservative when applying patches
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="learning-mode">AI Learning Mode</Label>
                    <Select defaultValue="active">
                      <SelectTrigger>
                        <SelectValue placeholder="Select learning mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active Learning</SelectItem>
                        <SelectItem value="passive">Passive Learning</SelectItem>
                        <SelectItem value="disabled">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Active learning allows the AI to improve based on your feedback
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="simulation-mode" className="text-base">Simulation Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        AI will suggest patches but not apply them
                      </p>
                    </div>
                    <Switch id="simulation-mode" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>AI Feedback</CardTitle>
                <CardDescription>
                  Help us improve our AI patch automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Share your experience with our AI automation..."
                  className="min-h-[120px]"
                />
                <Button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white">
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>
                  Connect Patchonaut with your other tools and services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">Integration settings will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>
                  Manage team members and permissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">Team settings will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Configure how and when you receive alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">Notification settings will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}