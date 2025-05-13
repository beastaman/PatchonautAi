'use client';

import React from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: '1', successful: 13, failed: 3 },
  { name: '2', successful: 15, failed: 2 },
  { name: '3', successful: 18, failed: 1 },
  { name: '4', successful: 14, failed: 4 },
  { name: '5', successful: 12, failed: 2 },
  { name: '6', successful: 16, failed: 1 },
  { name: '7', successful: 19, failed: 2 },
  { name: '8', successful: 21, failed: 3 },
  { name: '9', successful: 25, failed: 1 },
  { name: '10', successful: 22, failed: 0 },
  { name: '11', successful: 24, failed: 2 },
  { name: '12', successful: 27, failed: 1 },
  { name: '13', successful: 29, failed: 0 },
  { name: '14', successful: 26, failed: 3 },
];

export function PatchStatsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: -20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorSuccessful" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Successful
                      </span>
                      <span className="font-bold text-cyan-500">
                        {payload[0].value}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Failed
                      </span>
                      <span className="font-bold text-red-500">
                        {payload[1].value}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          }}
        />
        <Area
          type="monotone"
          dataKey="successful"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          fill="url(#colorSuccessful)"
          activeDot={{ r: 6 }}
        />
        <Area
          type="monotone"
          dataKey="failed"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          fill="url(#colorFailed)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}