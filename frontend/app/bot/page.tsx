"use client"

import { useState } from "react"
import ChatBox from "../../components/ChatBox"

const BotPage = () => {
  const [messages, setMessages] = useState<string[]>([])

  const handleUserInput = (input: string) => {
    // Add user input to messages array
    setMessages([...messages, input])

    // Call API to process the input and get a bot response
    // Simulate a response from the bot for now
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, "Bot: Here's a response to your query."])
    }, 1000)
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your AI Chatbot</h1>
      <ChatBox messages={messages} onUserInput={handleUserInput} />
    </div>
  )
}

export default BotPage

