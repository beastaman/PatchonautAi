'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  SearchIcon, 
  FilterIcon, 
  PlusCircleIcon,
  SlidersHorizontalIcon,
  MoreHorizontalIcon 
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Sample data
const patchData = [
  {
    id: 'PATCH-1234',
    name: 'Security Update KB5023778',
    severity: 'Critical',
    status: 'In Progress',
    progress: 65,
    created: '2025-02-17T10:30:00',
    servers: 128,
    assignee: 'Sarah Chen',
  },
  {
    id: 'PATCH-1235',
    name: 'Linux Kernel Update 5.15.91',
    severity: 'High',
    status: 'Queued',
    progress: 0,
    created: '2025-02-16T14:45:00',
    servers: 45,
    assignee: 'Michael Roberts',
  },
  {
    id: 'PATCH-1236',
    name: 'Apache HTTP Server 2.4.55',
    severity: 'Medium',
    status: 'Completed',
    progress: 100,
    created: '2025-02-15T09:15:00',
    servers: 37,
    assignee: 'Akira Tanaka',
  },
  {
    id: 'PATCH-1237',
    name: 'Java Runtime 17.0.6',
    severity: 'High',
    status: 'Failed',
    progress: 23,
    created: '2025-02-14T16:20:00',
    servers: 22,
    assignee: 'James Wilson',
  },
  {
    id: 'PATCH-1238',
    name: 'Windows Server Updates',
    severity: 'Critical',
    status: 'Completed',
    progress: 100,
    created: '2025-02-12T11:05:00',
    servers: 64,
    assignee: 'Emma Davis',
  },
  {
    id: 'PATCH-1239',
    name: 'MySQL Database 8.0.32',
    severity: 'Medium',
    status: 'Completed',
    progress: 100,
    created: '2025-02-10T08:50:00',
    servers: 18,
    assignee: 'Carlos Rodriguez',
  },
];

const statusColorMap = {
  'In Progress': 'text-yellow-500',
  'Queued': 'text-blue-500',
  'Completed': 'text-green-500',
  'Failed': 'text-red-500',
};

const severityColorMap: Record<string, string> = {
  'Critical': 'bg-red-500',
  'High': 'bg-orange-500',
  'Medium': 'bg-yellow-500',
  'Low': 'bg-green-500',
};

export default function PatchesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPatches = patchData.filter(patch => 
    patch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patch.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">Patches</h1>
            <p className="text-muted-foreground">Manage and monitor your system patches</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button size="sm" className="h-9 bg-cyan-500 hover:bg-cyan-600 text-white">
              <PlusCircleIcon className="h-4 w-4 mr-2" />
              New Patch
            </Button>
          </div>
        </div>
        
        <Card className="border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader className="border-b border-border/10 bg-muted/20 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-lg font-medium">Patch Management</CardTitle>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-auto">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search patches..."
                    className="pl-8 h-9 bg-background/50 border-border/50 w-full sm:w-[240px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm" className="h-9 border-border/50">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 border-border/50">
                  <SlidersHorizontalIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/10 bg-muted/10">
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">ID</th>
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Name</th>
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Severity</th>
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Status</th>
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Servers</th>
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Assignee</th>
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Created</th>
                    <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatches.map((patch, index) => (
                    <motion.tr
                      key={patch.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-border/5 hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-mono">{patch.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{patch.name}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center">
                          <span className={`h-2 w-2 rounded-full ${severityColorMap[patch.severity]} mr-2`}></span>
                          <span className="text-sm">{patch.severity}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm ${statusColorMap[patch.status]}`}>{patch.status}</span>
                      </td>
                      <td className="px-6 py-4 text-sm">{patch.servers}</td>
                      <td className="px-6 py-4 text-sm">{patch.assignee}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(patch.created).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontalIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-40 bg-card/95 backdrop-blur-lg border-muted/30">
                            <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Run Now</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500 cursor-pointer">Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}