import React from "react";
import { Progress } from "@heroui/react";

// This is a simplified representation of a threat map
// In a real application, you would use a mapping library like react-leaflet
export const ThreatMap: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-content2 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
      
      {/* World map outline - simplified representation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="https://img.heroui.chat/image/ai?w=800&h=400&u=worldmap1" 
          alt="World Map" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Attack points - these would be dynamically positioned in a real app */}
      <div className="absolute top-1/4 left-1/3">
        <AttackPoint size="md" color="danger" pulse />
      </div>
      <div className="absolute top-1/2 left-1/4">
        <AttackPoint size="sm" color="warning" />
      </div>
      <div className="absolute top-1/3 right-1/4">
        <AttackPoint size="lg" color="danger" pulse />
      </div>
      <div className="absolute bottom-1/4 right-1/3">
        <AttackPoint size="sm" color="warning" />
      </div>
      <div className="absolute bottom-1/3 left-1/5">
        <AttackPoint size="md" color="danger" />
      </div>
      
      {/* Connection lines - simplified */}
      <svg className="absolute inset-0 w-full h-full">
        <line x1="25%" y1="25%" x2="45%" y2="45%" stroke="rgba(243, 18, 96, 0.5)" strokeWidth="1" />
        <line x1="75%" y1="33%" x2="55%" y2="45%" stroke="rgba(243, 18, 96, 0.5)" strokeWidth="1" />
        <line x1="20%" y1="50%" x2="45%" y2="45%" stroke="rgba(245, 165, 36, 0.5)" strokeWidth="1" />
        <line x1="67%" y1="75%" x2="55%" y2="45%" stroke="rgba(245, 165, 36, 0.5)" strokeWidth="1" />
      </svg>
      
      {/* Target point - your network */}
      <div className="absolute top-[45%] left-[55%]">
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap">
          <span className="text-xs font-medium bg-background px-2 py-1 rounded">Your Network</span>
        </div>
      </div>
    </div>
  );
};

interface AttackPointProps {
  size: "sm" | "md" | "lg";
  color: "danger" | "warning";
  pulse?: boolean;
}

const AttackPoint: React.FC<AttackPointProps> = ({ size, color, pulse = false }) => {
  const sizeMap = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };
  
  return (
    <div className="relative">
      <div className={`rounded-full bg-${color} ${sizeMap[size]}`}></div>
      {pulse && (
        <div className={`absolute inset-0 rounded-full bg-${color} animate-ping opacity-75`}></div>
      )}
    </div>
  );
};