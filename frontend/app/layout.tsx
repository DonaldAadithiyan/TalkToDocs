import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PDF Chatbot Generator",
  description: "Upload your PDFs and create an AI chatbot that can answer questions about your documents.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="min-h-screen bg-background">
            <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
              <div className="container flex h-20 items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400 hover-float"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M16 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M12 13v5" />
                    <path d="M10 16h4" />
                  </svg>
                  <span>TalkToDocs</span>
                </Link>
                <nav className="flex items-center gap-8">
                  <Link
                    href="/"
                    className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/docs"
                    className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    Upload
                  </Link>
                  <Link
                    href="/bot"
                    className="text-sm font-medium bg-blue-500 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Chat
                  </Link>
                </nav>
              </div>
            </header>
            <div className="pt-20">{children}</div>
            <footer className="py-12 bg-blue-50 dark:bg-blue-950">
              <div className="container flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M16 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M12 13v5" />
                    <path d="M10 16h4" />
                  </svg>
                  <span>PDF Chatbot</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} PDF Chatbot. All rights reserved.
                </p>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

