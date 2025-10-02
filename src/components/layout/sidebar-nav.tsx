'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Apple,
  Heart,
  Layers,
  LayoutGrid,
  Scale,
  Flame,
  BarChart,
  BarChart2,
  Trash2,
  Refrigerator,
  HeartPulse,
  Stethoscope,
  BookCopy,
  Shield,
  AlertTriangle,
  type LucideIcon,
  Home,
} from 'lucide-react';

type NavItem = {
  slug: string;
  title: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { slug: 'food-introduction', title: 'What is Food?', icon: Apple },
  { slug: 'food-importance', title: 'Importance of Food', icon: Heart },
  { slug: 'food-constituents', title: 'Constituents of Food', icon: Layers },
  { slug: 'food-classification', title: 'Classification of Food', icon: LayoutGrid },
  { slug: 'balanced-diet', title: 'Balanced Diet', icon: Scale },
  { slug: 'food-energy', title: 'Food Energy', icon: Flame },
  { slug: 'daily-requirements-adults', title: 'Adult Daily Requirements', icon: BarChart },
  { slug: 'daily-requirements-children', title: 'Children Daily Requirements', icon: BarChart2 },
  { slug: 'food-spoilage', title: 'Food Spoilage', icon: Trash2 },
  { slug: 'food-preservation', title: 'Food Preservation', icon: Refrigerator },
  { slug: 'health-introduction', title: 'Human Health', icon: HeartPulse },
  { slug: 'diseases-introduction', title: 'Understanding Diseases', icon: Stethoscope },
  { slug: 'disease-classification', title: 'Classification of Diseases', icon: BookCopy },
  { slug: 'disease-prevention', title: 'Disease Prevention', icon: Shield },
  { slug: 'health-hazards', title: 'Health Hazards', icon: AlertTriangle },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
           <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/'}
              tooltip="Home"
            >
              <Link href="/">
                <Home />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.slug}>
              <SidebarMenuButton
                asChild
                isActive={pathname === `/topics/${item.slug}`}
                tooltip={item.title}
              >
                <Link href={`/topics/${item.slug}`}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
