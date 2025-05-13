'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DownloadIcon, 
  FilterIcon,
  BarChart3Icon,
  LineChartIcon,
  PieChartIcon,
  CalendarIcon,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PatchStatsChart } from '@/components/reports/patch-stats-chart';

export default function ReportsPage() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">Reports</h1>
            <p className="text-muted-foreground">View detailed analytics and patch reports</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="h-9">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" className="h-9 bg-cyan-500 hover:bg-cyan-600 text-white">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-muted/20 border-border/40 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="patches" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Patch Statistics
            </TabsTrigger>
            <TabsTrigger value="compliance" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Compliance
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Performance
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BarChart3Icon className="h-5 w-5 mr-2 text-cyan-400" />
                    Patch Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <div className="relative h-32 w-32">
                      <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                      <div className="absolute inset-0 rounded-full border-8 border-cyan-400 border-r-transparent" style={{transform: 'rotate(45deg)'}}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {[
                      { label: 'Completed', value: '154', color: 'text-green-500' },
                      { label: 'Pending', value: '43', color: 'text-yellow-500' },
                      { label: 'Failed', value: '8', color: 'text-red-500' },
                      { label: 'Total', value: '205', color: 'text-cyan-500' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-2 bg-muted/20 rounded-md">
                        <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <LineChartIcon className="h-5 w-5 mr-2 text-purple-400" />
                    Patch Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <PatchStatsChart />
                  </div>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Last 30 days</span>
                    </div>
                    <Button variant="link" className="h-auto p-0 text-cyan-400">View Details</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <PieChartIcon className="h-5 w-5 mr-2 text-green-400" />
                    Severity Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                      {[
                        { label: 'Critical', value: '12', color: 'bg-red-500' },
                        { label: 'High', value: '28', color: 'bg-orange-500' },
                        { label: 'Medium', value: '47', color: 'bg-yellow-500' },
                        { label: 'Low', value: '67', color: 'bg-green-500' },
                      ].map((severity, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-muted/20 p-3 rounded-md">
                          <div className={`h-3 w-3 rounded-full ${severity.color}`}></div>
                          <div>
                            <p className="text-sm">{severity.label}</p>
                            <p className="text-lg font-bold">{severity.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader className="border-b border-border/10 bg-muted/20 backdrop-blur-sm">
                <CardTitle className="text-lg font-medium">Recent Compliance Reports</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/10 bg-muted/10">
                      <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Report Name</th>
                      <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Status</th>
                      <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Date</th>
                      <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Environment</th>
                      <th className="text-xs uppercase text-muted-foreground font-medium px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Monthly Compliance Audit', status: 'Compliant', date: '2025-02-15', env: 'Production' },
                      { name: 'Security Standards Review', status: 'Attention Required', date: '2025-02-10', env: 'Staging' },
                      { name: 'Weekly Vulnerability Scan', status: 'Compliant', date: '2025-02-07', env: 'Production' },
                      { name: 'PCI DSS Compliance Check', status: 'Compliant', date: '2025-02-01', env: 'Production' },
                    ].map((report, i) => (
                      <tr key={i} className="border-b border-border/5 hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium">{report.name}</td>
                        <td className="px-6 py-4">
                          <span className={`text-sm ${report.status === 'Compliant' ? 'text-green-500' : 'text-yellow-500'}`}>
                            {report.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">{report.date}</td>
                        <td className="px-6 py-4 text-sm">{report.env}</td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm" className="h-8 text-cyan-400 hover:text-cyan-500 hover:bg-cyan-500/10">
                            View Report
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="patches">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Patch Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed patch statistics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compliance">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Compliance Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Compliance reports will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Performance metrics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}