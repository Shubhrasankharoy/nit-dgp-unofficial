"use client"
import React from 'react'
import StoreProvider from './StoreProvider'
import { ThemeProvider } from './themeProvider'
import AuthProvider from './AuthProvider'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function ProviderWraper({ children }) {
    return (
        <StoreProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}
