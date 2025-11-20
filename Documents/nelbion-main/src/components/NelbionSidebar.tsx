import { 
  Home, 
  Building2, 
  Lightbulb, 
  Heart, 
  Link, 
  Leaf, 
  Wallet, 
  Activity, 
  Building, 
  Brain, 
  FlaskConical, 
  GraduationCap, 
  Shield,
  DollarSign,
  Users,
  Mail
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: Building2 },
  { title: "Our Why", url: "/why", icon: Lightbulb },
];

const subsidiaryItems = [
  { title: "Nelbion Energy", url: "/energy", icon: Lightbulb },
  { title: "Nelbion Foundation", url: "/foundation", icon: Heart },
  { title: "Nelbion Blockchain", url: "/blockchain", icon: Link },
  { title: "Nelbion AgriTech", url: "/agritech", icon: Leaf },
  { title: "Nelbion FinTech", url: "/fintech", icon: Wallet },
  { title: "Nelbion HealthTech", url: "/healthtech", icon: Activity },
  { title: "Nelbion Infrastructure", url: "/infrastructure", icon: Building },
  { title: "Nelbion AI", url: "/ai", icon: Brain },
  { title: "Nelbion Labs", url: "/labs", icon: FlaskConical },
  { title: "Nelbion Academy", url: "/academy", icon: GraduationCap },
  { title: "Nelbion Security", url: "/security", icon: Shield },
];

const investorItems = [
  { title: "Investment", url: "/investment", icon: DollarSign },
  { title: "Leadership", url: "/leadership", icon: Users },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function NelbionSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={open ? "w-64" : "w-16"} collapsible="icon">
      <SidebarContent className="bg-sidebar">
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {open && (
            <div className="flex items-center gap-2">
              <img 
                src="/Nelbion New logo.jpg" 
                alt="Nelbion Logo" 
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-bold text-sidebar-foreground">Nelbion</span>
            </div>
          )}
          <SidebarTrigger className="ml-auto" />
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-smooth hover:bg-sidebar-accent" 
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Subsidiaries</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {subsidiaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-smooth hover:bg-sidebar-accent" 
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Investors</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {investorItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-smooth hover:bg-sidebar-accent" 
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
