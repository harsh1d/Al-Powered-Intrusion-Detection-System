import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Dashboard } from "./components/dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar maxWidth="xl" className="border-b border-divider">
        <NavbarBrand>
          <Icon icon="lucide:shield-alert" className="text-primary text-2xl" />
          <p className="font-bold text-inherit ml-2">CyberShield IDS</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="foreground">Dashboard</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Alerts</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Reports</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Settings</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              variant="flat" 
              startContent={<Icon icon="lucide:bell" />}
              endContent={<span className="bg-danger text-tiny text-white rounded-full w-4 h-4 flex items-center justify-center">3</span>}
            >
              Alerts
            </Button>
          </NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="John Smith"
                size="sm"
                src="https://img.heroui.chat/image/avatar?w=150&h=150&u=js1"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">john.smith@company.com</p>
              </DropdownItem>
              <DropdownItem key="settings" startContent={<Icon icon="lucide:settings" />}>Settings</DropdownItem>
              <DropdownItem key="help" startContent={<Icon icon="lucide:help-circle" />}>Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger" startContent={<Icon icon="lucide:log-out" />}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <main className="flex-grow">
        <Dashboard />
      </main>
    </div>
  );
}