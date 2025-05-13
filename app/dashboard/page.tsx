'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShieldAlertIcon, 
  ServerIcon, 
  ClockIcon, 
  BarChart2Icon, 
  ZapIcon, 
  RefreshCwIcon, 
  PlusCircleIcon 
} from 'lucide-react';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { MetricCards } from '@/components/dashboard/metric-cards';
import { PatchProgress } from '@/components/dashboard/patch-progress';

export default function DashboardPage() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your patch status and system health</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="h-9">
              <RefreshCwIcon className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="h-9 bg-cyan-500 hover:bg-cyan-600 text-white">
              <PlusCircleIcon className="h-4 w-4 mr-2" />
              New Patch
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-9 space-y-6">
            <MetricCards />
            
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="border-b border-border/10 bg-muted/20 backdrop-blur-sm">
                <CardTitle className="text-lg font-medium">Patch Progress</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <PatchProgress />
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader className="border-b border-border/10 bg-muted/20 backdrop-blur-sm">
                  <CardTitle className="text-lg font-medium">Critical Vulnerabilities</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {['CVE-2023-8745', 'CVE-2023-6654', 'CVE-2023-3321'].map((cve, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                          <span className="font-mono text-sm">{cve}</span>
                        </div>
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                          Apply Fix
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader className="border-b border-border/10 bg-muted/20 backdrop-blur-sm">
                  <CardTitle className="text-lg font-medium">Environment Health</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { name: 'Production', status: 'Healthy', color: 'green' },
                      { name: 'Staging', status: 'Warning', color: 'yellow' },
                      { name: 'Development', status: 'Healthy', color: 'green' }
                    ].map((env, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`h-2 w-2 rounded-full bg-${env.color}-500 mr-2`}></div>
                          <span className="text-sm">{env.name}</span>
                        </div>
                        <span className={`text-xs font-medium text-${env.color}-500`}>{env.status}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}