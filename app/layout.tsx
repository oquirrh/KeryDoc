import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Roboto_Mono, Playfair_Display } from 'next/font/google'

const darkerGrotesque = Inter({
  subsets: ['latin'],
  variable: '--font-darker-grotesque',
  display: 'swap'
})

const funnelDisplay = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-funnel-display',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "KeryDoc - Real-Time Documentation for AI Coding Assistants",
  description:
    "Empower your IDE's AI agent with always-updated documentation – scrape, structure, and sync the latest APIs, frameworks, and libraries in seconds.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${funnelDisplay.variable} ${darkerGrotesque.variable} ${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

