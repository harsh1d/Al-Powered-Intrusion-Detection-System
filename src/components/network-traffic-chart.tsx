import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { time: "00:00", inbound: 42, outbound: 28 },
  { time: "02:00", inbound: 30, outbound: 25 },
  { time: "04:00", inbound: 25, outbound: 20 },
  { time: "06:00", inbound: 35, outbound: 30 },
  { time: "08:00", inbound: 60, outbound: 45 },
  { time: "10:00", inbound: 80, outbound: 65 },
  { time: "12:00", inbound: 75, outbound: 60 },
  { time: "14:00", inbound: 85, outbound: 70 },
  { time: "16:00", inbound: 90, outbound: 75 },
  { time: "18:00", inbound: 80, outbound: 65 },
  { time: "20:00", inbound: 65, outbound: 50 },
  { time: "22:00", inbound: 50, outbound: 40 }
];

export const NetworkTrafficChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--heroui-divider))" />
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            formatter={(value) => [`${value} GB/h`, undefined]}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--heroui-content1))',
              borderColor: 'hsl(var(--heroui-divider))',
              borderRadius: '8px',
              boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="inbound" 
            name="Inbound" 
            stroke="hsl(var(--heroui-primary))" 
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="outbound" 
            name="Outbound" 
            stroke="hsl(var(--heroui-secondary))" 
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};