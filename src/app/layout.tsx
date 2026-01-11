import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: "Erujeje's Porfolio Website",
  description: 'Portfolio of Erujeje (Jeje) - Software Developer, AI Engineer, and professional bug hunter.',
  icons: {
    icon: '/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 dark:bg-zinc-950 light:bg-white min-h-screen text-zinc-100 dark:text-zinc-100 light:text-zinc-900 selection:bg-lime-400 selection:text-zinc-900 overflow-x-hidden">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}