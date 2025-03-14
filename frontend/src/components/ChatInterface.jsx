"use client"

import { useState, useRef, useEffect } from "react"
import { Send, MessageCircle, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"

const TYPING_SPEED = 30 // milliseconds per character

function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const scrollAreaRef = useRef(null)

  const simulateTyping = async (text) => {
    const tempMessage = { role: "bot", content: "", isTyping: true }
    setMessages((prev) => [...prev, tempMessage])

    for (let i = 0; i <= text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, TYPING_SPEED))
      setMessages((prev) => {
        const newMessages = [...prev]
        const lastMessage = newMessages[newMessages.length - 1]
        lastMessage.content = text.slice(0, i)
        if (i === text.length) {
          lastMessage.isTyping = false
        }
        return newMessages
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    try {
      // Send message to backend
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      // Simulate typing for bot response
      await simulateTyping(data.response)
    } catch (error) {
      console.error("Error:", error)
      await simulateTyping("I'm sorry, I'm having trouble connecting to the server. Please try again later.")
    }
  }

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => {
            setIsOpen(true)
            setTimeout(scrollToBottom, 0)
          }}
          className="rounded-full w-16 h-16 shadow-lg"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      )}
      {isOpen && (
        <Card className="w-[350px] h-[500px] grid grid-rows-[auto_1fr_auto]">
          <CardHeader className="border-b flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/bot-avatar.png" alt="Bot Avatar" />
                <AvatarFallback>BOT</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg">Admission Enquiry</h2>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <ScrollArea ref={scrollAreaRef} className="p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`
                      max-w-[80%] rounded-lg px-4 py-2
                      ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}
                    `}
                  >
                    {message.content}
                    {message.isTyping && (
                      <span className="inline-flex ml-1">
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce delay-100">.</span>
                        <span className="animate-bounce delay-200">.</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <CardFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

export default ChatInterface

