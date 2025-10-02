'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Link href="/" className="flex items-center gap-2">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            <path d="M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4" />
            <path d="M15.5 10.5c-1 0-2 .5-2.5 1.5" />
          </svg>
          <span className="font-headline text-xl font-bold">NutriLearn</span>
        </Link>
      </div>
    </header>
  );
}
