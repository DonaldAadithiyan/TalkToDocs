"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 z-0"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className={`space-y-6 max-w-4xl ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-gradient">
              Chat with Your PDF Documents
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-blue-900/70 dark:text-blue-100/70 leading-relaxed">
              Transform your PDFs into intelligent chatbots that provide instant answers to your questions.
            </p>
          </div>

          <div className={`${isVisible ? "fade-in-up delay-200" : "opacity-0"}`}>
            <Link href="/docs">
              <Button size="lg" className="px-10 py-7 text-lg font-medium rounded-full btn-gradient">
                Let's Begin Here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Floating illustration */}
          <div className={`mt-16 relative ${isVisible ? "fade-in-up delay-300" : "opacity-0"}`}>
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden card-shadow">
                <div className="p-6 flex items-center border-b border-gray-100 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-sm font-medium text-gray-500 dark:text-gray-400">PDF Chatbot</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-blue-100 dark:bg-blue-900/40 rounded-2xl p-4 max-w-xs">
                      <p className="text-blue-800 dark:text-blue-100">How many pages does the document have?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-blue-500 text-white rounded-2xl p-4 max-w-xs">
                      <p>The document has 24 pages, with the main content spanning from page 3 to page 22.</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-100 dark:bg-blue-900/40 rounded-2xl p-4 max-w-xs">
                      <p className="text-blue-800 dark:text-blue-100">Can you summarize the key findings?</p>
                    </div>
                  </div>
                  <div className="flex justify-start floating">
                    <div className="bg-blue-500 text-white rounded-2xl p-4 max-w-xs">
                      <p>The key findings indicate a 27% increase in efficiency and a 15% reduction in costs...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

