import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jackie Zhang',
  description: 'Writer, tinkerer, and explorer — documenting life one page at a time.',
  authors: [{ name: 'Jackie Zhang' }],
  keywords: ['blog', 'portfolio', 'Jackie Zhang', 'writing'],
  openGraph: {
    title: 'Jackie Zhang',
    description: 'Writer, tinkerer, and explorer — documenting life one page at a time.',
    url: 'https://jackiezhang.life',
    siteName: 'Jackie Zhang',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jackie Zhang',
    description: 'Writer, tinkerer, and explorer — documenting life one page at a time.',
    creator: '@agaperste',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
