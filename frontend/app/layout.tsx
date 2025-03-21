
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF Chatbot Generator",
  description: "Upload your PDFs and create an AI chatbot that can answer questions about your documents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-background">
            <header className="border-b">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xl">
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M16 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M12 13v5" />
                    <path d="M10 16h4" />
                  </svg>
                  <span>PDF Chatbot</span>
                </div>
                <nav className="flex items-center gap-4">
                  <a href="/" className="text-sm font-medium hover:underline">
                    Home
                  </a>
                  <a href="/docs" className="text-sm font-medium hover:underline">
                    Upload
                  </a>
                  <a href="/bot" className="text-sm font-medium hover:underline">
                    Chat
                  </a>
                </nav>
              </div>
            </header>
            {children}
            <footer className="border-t py-6">
              <div className="container flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} PDF Chatbot. All rights reserved.
                </p>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
