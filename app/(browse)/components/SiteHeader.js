"use client"

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import React from 'react'
import { routeToTitle } from '../utils/functions';

export default function SiteHeader() {
    const { setTheme } = useTheme();
    const path = usePathname();

    const toggleMode = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex w-full items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />

                <h1 className="text-base font-medium">{ routeToTitle(path)}</h1>
                <div className="ml-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMode}
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
