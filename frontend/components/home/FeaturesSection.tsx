"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import FeatureCard from "./FeatureCard"
import { useEffect, useState } from "react"

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features-section")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="features-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className={`space-y-4 max-w-3xl ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-gradient">How It Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-blue-900/70 dark:text-blue-100/70">
              Transform your documents into interactive chatbots in three simple steps.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            }
            title="Upload PDF"
            description="Simply drag and drop your PDF documents to our secure platform. We support files up to 50MB with unlimited pages."
            delay="delay-100"
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="floating"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16 10-4 4-4-4" />
              </svg>
            }
            title="AI Processing"
            description="Our advanced AI analyzes your documents, understanding context, relationships, and key information in seconds."
            delay="delay-200"
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M13 8h2" />
                <path d="M13 12h2" />
              </svg>
            }
            title="Chat Away"
            description="Ask questions in natural language and get instant, accurate answers extracted directly from your documents."
            delay="delay-300"
          />
        </div>

        <div className={`flex justify-center mt-16 ${isVisible ? "fade-in-up delay-400" : "opacity-0"}`}>
          <Link href="/bot">
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-7 text-lg font-medium rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:text-white hover-float"
            >
              Generate Your Own Bot
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
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                <path d="m17 4 3 3" />
                <path d="m14 7 3 -3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

