import type React from "react"
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: string
}

export default function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-gray-800 card-shadow hover-float fade-in-up ${delay}`}
    >
      <div className="mb-6 p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl">
        <div className="text-blue-600 dark:text-blue-400 w-12 h-12 flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}

