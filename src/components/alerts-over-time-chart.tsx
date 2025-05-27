import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { day: "Mon", critical: 2, high: 4, medium: 6, low: 8 },
  { day: "Tue", critical: 1, high: 3, medium: 7, low: 5 },
  { day: "Wed", critical: 3, high: 5, medium: 3, low: 6 },
  { day: "Thu", critical: 0, high: 2, medium: 4, low: 7 },
  { day: "Fri", critical: 2, high: 4, medium: 5, low: 3 },
  { day: "Sat", critical: 1, high: 1, medium: 2, low: 4 },
  { day: "Sun", critical: 0, high: 2, medium: 3, low: 2 }
];

export const AlertsOverTimeChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--heroui-danger))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--heroui-danger))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--heroui-warning))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--heroui-warning))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--heroui-secondary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--heroui-secondary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--heroui-primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--heroui-primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--heroui-divider))" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--heroui-content1))',
              borderColor: 'hsl(var(--heroui-divider))',
              borderRadius: '8px',
              boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="critical" name="Critical" stroke="hsl(var(--heroui-danger))" fillOpacity={1} fill="url(#colorCritical)" />
          <Area type="monotone" dataKey="high" name="High" stroke="hsl(var(--heroui-warning))" fillOpacity={1} fill="url(#colorHigh)" />
          <Area type="monotone" dataKey="medium" name="Medium" stroke="hsl(var(--heroui-secondary))" fillOpacity={1} fill="url(#colorMedium)" />
          <Area type="monotone" dataKey="low" name="Low" stroke="hsl(var(--heroui-primary))" fillOpacity={1} fill="url(#colorLow)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};