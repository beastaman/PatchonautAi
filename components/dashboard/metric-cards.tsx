'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldIcon, 
  ServerIcon, 
  ClockIcon, 
  AlertTriangleIcon 
} from 'lucide-react';

const metrics = [
  {
    name: 'Critical Patches',
    value: '7',
    change: '+2',
    icon: ShieldIcon,
    color: 'red',
  },
  {
    name: 'Total Servers',
    value: '128',
    change: '+3',
    icon: ServerIcon,
    color: 'cyan',
  },
  {
    name: 'Avg. Patch Time',
    value: '4.3m',
    change: '-12%',
    icon: ClockIcon,
    color: 'green',
  },
  {
    name: 'Drift Rate',
    value: '2.1%',
    change: '-0.5%',
    icon: AlertTriangleIcon,
    color: 'yellow',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function MetricCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {metrics.map((metric) => (
        <motion.div
          key={metric.name}
          variants={item}
          className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-5 relative overflow-hidden hover:border-cyan-500/20 transition-all group"
        >
          <div className="absolute top-0 right-0 h-16 w-16 -mt-6 -mr-6 rounded-full bg-gradient-to-br from-primary/5 to-primary/10"></div>
          
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">{metric.name}</p>
              <p className={`text-2xl font-bold mt-1 text-${metric.color}-500`}>{metric.value}</p>
              
              <div className="flex items-center mt-1">
                <span className={`text-xs ${metric.change.startsWith('-') ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs last week</span>
              </div>
            </div>
            
            <div className={`p-2 rounded-lg bg-${metric.color}-500/10 group-hover:bg-${metric.color}-500/20 transition-colors`}>
              <metric.icon className={`h-5 w-5 text-${metric.color}-500`} />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
        </motion.div>
      ))}
    </motion.div>
  );
}