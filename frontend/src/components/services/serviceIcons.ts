import {
  FileLock, Search, Repeat, Unplug, AlertTriangle, ShieldAlert, Boxes,
  Sparkles, Bot, Workflow, FileSearch, MessagesSquare, Headset,
  Database, BrainCircuit, MessageSquare, Zap, TrendingUp, FileText,
  ShieldCheck, ServerCog, Wrench, Rocket, Users, Handshake,
  HeartPulse, Landmark, Factory, Scale, GraduationCap, ShoppingBag,
  Building2, Cloud, Building, Globe, Code2, Gauge, Layers, Circle, type LucideIcon,
} from "lucide-react";

/** Map a string icon name (from servicesData) to a lucide component. */
const ICONS: Record<string, LucideIcon> = {
  FileLock, Search, Repeat, Unplug, AlertTriangle, ShieldAlert, Boxes,
  Sparkles, Bot, Workflow, FileSearch, MessagesSquare, Headset,
  Database, BrainCircuit, MessageSquare, Zap, TrendingUp, FileText,
  ShieldCheck, ServerCog, Wrench, Rocket, Users, Handshake,
  HeartPulse, Landmark, Factory, Scale, GraduationCap, ShoppingBag,
  Building2, Cloud, Building, Globe, Code2, Gauge, Layers,
};

export function getIcon(name?: string): LucideIcon {
  return (name && ICONS[name]) || Circle;
}
