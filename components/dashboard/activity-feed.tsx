'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  AlertCircleIcon,
  ClockIcon
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'success',
    message: 'CVE-2023-4567 patched',
    time: '9 minutes ago',
    icon: CheckCircleIcon,
  },
  {
    id: 2,
    type: 'warning',
    message: 'New vulnerability detected',
    time: '37 minutes ago',
    icon: AlertCircleIcon,
  },
  {
    id: 3,
    type: 'error',
    message: 'Patch deployment failed',
    time: '1 hour ago',
    icon: XCircleIcon,
  },
  {
    id: 4,
    type: 'info',
    message: 'Scheduled patching started',
    time: '2 hours ago',
    icon: ClockIcon,
  },
  {
    id: 5,
    type: 'success',
    message: 'System update completed',
    time: '3 hours ago',
    icon: CheckCircleIcon,
  },
  {
    id: 6,
    type: 'warning',
    message: 'Server performance warning',
    time: '5 hours ago',
    icon: AlertCircleIcon,
  },
];

const activityColorMap = {
  success: 'text-green-500',
  warning: 'text-yellow-500',
  error: 'text-red-500',
  info: 'text-blue-500',
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function ActivityFeed() {
  return (
    <Card className="border border-border/40 bg-card/50 backdrop-blur-sm h-full">
      <CardHeader className="border-b border-border/10 bg-muted/20 backdrop-blur-sm">
        <CardTitle className="text-lg font-medium">Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="divide-y divide-border/5"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              variants={item}
              className="p-4 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className={`mt-0.5 ${activityColorMap[activity.type]}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}