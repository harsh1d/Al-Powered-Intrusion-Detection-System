import React from "react";
import { Progress, Card, CardBody } from "@heroui/react";

interface SystemMetric {
  name: string;
  value: number;
  status: "healthy" | "warning" | "critical";
}

const systemMetrics: SystemMetric[] = [
  { name: "CPU Usage", value: 42, status: "healthy" },
  { name: "Memory", value: 68, status: "warning" },
  { name: "Disk Space", value: 23, status: "healthy" },
  { name: "Network", value: 87, status: "critical" },
  { name: "Security Services", value: 98, status: "healthy" }
];

export const SystemHealthChart: React.FC = () => {
  const getColorForStatus = (status: SystemMetric["status"]) => {
    switch (status) {
      case "healthy": return "success";
      case "warning": return "warning";
      case "critical": return "danger";
      default: return "primary";
    }
  };
  
  return (
    <div className="space-y-4">
      {systemMetrics.map((metric) => (
        <div key={metric.name} className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-sm">{metric.name}</span>
            <span className="text-sm font-semibold">{metric.value}%</span>
          </div>
          <Progress 
            value={metric.value} 
            color={getColorForStatus(metric.status) as any}
            aria-label={`${metric.name} usage`}
            className="h-2"
          />
        </div>
      ))}
    </div>
  );
};