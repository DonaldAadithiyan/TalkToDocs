"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Define the props interface for the ChatBox component
interface ChatBoxProps {
  messages: string[]
  onUserInput: (input: string) => void
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onUserInput }) => {
  const [input, setInput] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onUserInput(input)
      setInput("")
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-4 h-[60vh] overflow-y-auto">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <p className="text-center text-muted-foreground">Start a conversation with your AI assistant.</p>
          ) : (
            messages.map((message, index) => {
              const isUserMessage = !message.startsWith("Bot:")
              return (
                <div key={index} className={`flex ${isUserMessage ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      isUserMessage ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p>{message}</p>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" disabled={!input.trim()}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

export default ChatBox

