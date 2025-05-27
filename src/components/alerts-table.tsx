import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

type AlertSeverity = "critical" | "high" | "medium" | "low";

interface Alert {
  id: string;
  timestamp: string;
  type: string;
  source: string;
  destination: string;
  severity: AlertSeverity;
  status: "new" | "investigating" | "resolved" | "false-positive";
}

const alerts: Alert[] = [
  {
    id: "ALT-7829",
    timestamp: "2023-07-12 14:23:45",
    type: "Brute Force Attack",
    source: "185.143.223.78",
    destination: "Internal Auth Server",
    severity: "critical",
    status: "new"
  },
  {
    id: "ALT-7828",
    timestamp: "2023-07-12 14:15:22",
    type: "SQL Injection Attempt",
    source: "103.35.74.192",
    destination: "Web Application Server",
    severity: "high",
    status: "investigating"
  },
  {
    id: "ALT-7827",
    timestamp: "2023-07-12 13:58:11",
    type: "Suspicious File Download",
    source: "Internal Network",
    destination: "172.16.254.12",
    severity: "medium",
    status: "investigating"
  },
  {
    id: "ALT-7826",
    timestamp: "2023-07-12 13:42:09",
    type: "Unusual Admin Login",
    source: "VPN Connection",
    destination: "Admin Portal",
    severity: "high",
    status: "new"
  },
  {
    id: "ALT-7825",
    timestamp: "2023-07-12 13:27:33",
    type: "Malware Detection",
    source: "Email Gateway",
    destination: "User Workstation",
    severity: "high",
    status: "resolved"
  }
];

export const AlertsTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  
  const renderSeverityCell = (severity: AlertSeverity) => {
    const severityConfig = {
      critical: { color: "danger", icon: "lucide:alert-circle" },
      high: { color: "warning", icon: "lucide:alert-triangle" },
      medium: { color: "secondary", icon: "lucide:alert-octagon" },
      low: { color: "primary", icon: "lucide:info" }
    };
    
    const config = severityConfig[severity];
    
    return (
      <Chip
        color={config.color as any}
        variant="flat"
        startContent={<Icon icon={config.icon} className="text-xs" />}
        size="sm"
      >
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </Chip>
    );
  };
  
  const renderStatusCell = (status: Alert["status"]) => {
    const statusConfig = {
      "new": { color: "danger", label: "New" },
      "investigating": { color: "warning", label: "Investigating" },
      "resolved": { color: "success", label: "Resolved" },
      "false-positive": { color: "default", label: "False Positive" }
    };
    
    const config = statusConfig[status];
    
    return (
      <Chip color={config.color as any} variant="dot" size="sm">
        {config.label}
      </Chip>
    );
  };
  
  return (
    <div>
      <Table 
        aria-label="Security alerts table"
        removeWrapper
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={Math.ceil(alerts.length / rowsPerPage)}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader>
          <TableColumn>ALERT ID</TableColumn>
          <TableColumn>TIMESTAMP</TableColumn>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>SOURCE</TableColumn>
          <TableColumn>DESTINATION</TableColumn>
          <TableColumn>SEVERITY</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {alerts.map((alert) => (
            <TableRow key={alert.id}>
              <TableCell>{alert.id}</TableCell>
              <TableCell>{alert.timestamp}</TableCell>
              <TableCell>{alert.type}</TableCell>
              <TableCell>{alert.source}</TableCell>
              <TableCell>{alert.destination}</TableCell>
              <TableCell>{renderSeverityCell(alert.severity)}</TableCell>
              <TableCell>{renderStatusCell(alert.status)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Tooltip content="View Details">
                    <Button isIconOnly size="sm" variant="light">
                      <Icon icon="lucide:eye" className="text-lg" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Investigate">
                    <Button isIconOnly size="sm" variant="light">
                      <Icon icon="lucide:search" className="text-lg" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Mark as Resolved">
                    <Button isIconOnly size="sm" variant="light" color="success">
                      <Icon icon="lucide:check" className="text-lg" />
                    </Button>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};