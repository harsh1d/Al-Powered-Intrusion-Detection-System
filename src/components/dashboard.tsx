import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Button, Tabs, Tab, Progress, Chip, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Pagination } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ThreatMap } from "./threat-map";
import { SystemHealthChart } from "./system-health-chart";
import { AlertsOverTimeChart } from "./alerts-over-time-chart";
import { NetworkTrafficChart } from "./network-traffic-chart";
import { AlertsTable } from "./alerts-table";

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Security Dashboard</h1>
          <p className="text-foreground-500">Real-time AI-powered threat detection and analysis</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button 
            color="primary" 
            variant="flat" 
            startContent={<Icon icon="lucide:refresh-cw" className="h-4 w-4" />}
          >
            Refresh
          </Button>
          <Button 
            color="primary" 
            startContent={<Icon icon="lucide:download" className="h-4 w-4" />}
          >
            Export Report
          </Button>
        </div>
      </div>
      
      <Tabs 
        aria-label="Dashboard Tabs" 
        selectedKey={activeTab} 
        onSelectionChange={(key) => setActiveTab(key as string)}
        className="mb-6"
      >
        <Tab key="overview" title="Overview" />
        <Tab key="threats" title="Threat Analysis" />
        <Tab key="alerts" title="Alert Management" />
        <Tab key="systems" title="System Health" />
      </Tabs>
      
      {activeTab === "overview" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard 
              title="Active Threats" 
              value="7" 
              change="+2"
              trend="up"
              icon="lucide:shield-alert"
              color="danger"
            />
            <StatCard 
              title="Blocked Attacks" 
              value="143" 
              change="+28"
              trend="up"
              icon="lucide:shield-check"
              color="success"
            />
            <StatCard 
              title="System Health" 
              value="98%" 
              change="-1%"
              trend="down"
              icon="lucide:activity"
              color="primary"
            />
            <StatCard 
              title="Network Traffic" 
              value="1.2 TB" 
              change="+0.3 TB"
              trend="up"
              icon="lucide:bar-chart-2"
              color="secondary"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Global Threat Map</h3>
                  <p className="text-foreground-500 text-sm">Real-time attack origins</p>
                </div>
                <Button variant="light" isIconOnly>
                  <Icon icon="lucide:more-horizontal" />
                </Button>
              </CardHeader>
              <CardBody>
                <ThreatMap />
              </CardBody>
              <CardFooter className="flex justify-between">
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-danger mr-2"></span>
                    <span className="text-sm">Attack Source</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-warning mr-2"></span>
                    <span className="text-sm">Suspicious Activity</span>
                  </div>
                </div>
                <Button variant="flat" size="sm" endContent={<Icon icon="lucide:external-link" className="h-4 w-4" />}>
                  Full Map
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">System Health</h3>
              </CardHeader>
              <CardBody>
                <SystemHealthChart />
              </CardBody>
              <CardFooter>
                <Button variant="flat" size="sm" fullWidth>View Details</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Alerts Over Time</h3>
                  <p className="text-foreground-500 text-sm">Last 7 days</p>
                </div>
                <Button variant="light" isIconOnly>
                  <Icon icon="lucide:more-horizontal" />
                </Button>
              </CardHeader>
              <CardBody>
                <AlertsOverTimeChart />
              </CardBody>
            </Card>
            
            <Card>
              <CardHeader className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Network Traffic</h3>
                  <p className="text-foreground-500 text-sm">Last 24 hours</p>
                </div>
                <Button variant="light" isIconOnly>
                  <Icon icon="lucide:more-horizontal" />
                </Button>
              </CardHeader>
              <CardBody>
                <NetworkTrafficChart />
              </CardBody>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">Recent Security Alerts</h3>
                <p className="text-foreground-500 text-sm">Prioritized by AI severity analysis</p>
              </div>
              <Button variant="flat" color="primary" endContent={<Icon icon="lucide:arrow-right" className="h-4 w-4" />}>
                View All
              </Button>
            </CardHeader>
            <CardBody>
              <AlertsTable />
            </CardBody>
          </Card>
        </>
      )}
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
  color: "primary" | "secondary" | "success" | "danger" | "warning";
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon, color }) => {
  return (
    <Card>
      <CardBody className="p-4">
        <div className="flex justify-between">
          <div className={`w-12 h-12 rounded-lg bg-${color}-100 flex items-center justify-center`}>
            <Icon icon={icon} className={`text-${color} text-2xl`} />
          </div>
          <div className={`flex items-center ${trend === "up" ? "text-danger" : "text-success"}`}>
            <Icon icon={trend === "up" ? "lucide:trending-up" : "lucide:trending-down"} className="mr-1" />
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
        <h3 className="text-foreground-500 mt-4 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </CardBody>
    </Card>
  );
};