import { useState, useRef, useEffect } from 'react'
import { Send, Eye, EyeOff, Bot, User, Settings } from 'lucide-react'

interface ChatMessage {
  role: 'developer' | 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  apiBaseUrl?: string // Made optional since we'll auto-detect
}

export default function ChatInterface({ apiBaseUrl }: ChatInterfaceProps) {
  // Auto-detect API base URL
  const defaultApiBaseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}`
    : 'http://localhost:3000'
  
  const effectiveApiBaseUrl = apiBaseUrl || defaultApiBaseUrl
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [developerMessage, setDeveloperMessage] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('gpt-4.1-mini')
  const [showApiKey, setShowApiKey] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [streamingContent, setStreamingContent] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, streamingContent])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!developerMessage.trim() || !userMessage.trim() || !apiKey.trim()) {
      alert('Please fill in all required fields')
      return
    }

    setIsLoading(true)
    setStreamingContent('')

    // Add user messages to chat
    const newMessages: ChatMessage[] = [
      { role: 'developer', content: developerMessage, timestamp: new Date() },
      { role: 'user', content: userMessage, timestamp: new Date() }
    ]
    setMessages(prev => [...prev, ...newMessages])

    try {
      const response = await fetch(`${effectiveApiBaseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          developer_message: developerMessage,
          user_message: userMessage,
          model: model,
          api_key: apiKey
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error('No response body')
      }

      let assistantContent = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = new TextDecoder().decode(value)
        assistantContent += chunk
        setStreamingContent(assistantContent)
      }

      // Add the complete assistant response to messages
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date()
      }])
      
      setStreamingContent('')
      setUserMessage('')
      setDeveloperMessage('')
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`,
        timestamp: new Date()
      }])
      setStreamingContent('')
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([])
    setStreamingContent('')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Configuration Section */}
      <div className="notion-card">
        <div className="flex items-center space-x-2 mb-4">
          <Settings className="w-5 h-5 text-notion-gray-600" />
          <h2 className="text-lg font-semibold text-notion-gray-800">Configuration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="notion-label">
                OpenAI API Key
              </label>
              <div className="relative">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="notion-input pr-10"
                  placeholder="sk-..."
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showApiKey ? (
                    <EyeOff className="w-4 h-4 text-notion-gray-500" />
                  ) : (
                    <Eye className="w-4 h-4 text-notion-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            <div>
              <label className="notion-label">
                Model
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="notion-select"
              >
                <option value="gpt-4.1-mini">GPT-4.1 Mini</option>
                <option value="gpt-4.1">GPT-4.1</option>
                <option value="gpt-4.1-nano">GPT-4.1 Nano</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="notion-label">
              Developer/System Message
            </label>
            <textarea
              value={developerMessage}
              onChange={(e) => setDeveloperMessage(e.target.value)}
              className="notion-textarea"
              rows={3}
              placeholder="Enter system instructions or developer context..."
              required
            />
          </div>
          
          <div>
            <label className="notion-label">
              User Message
            </label>
            <textarea
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="notion-textarea"
              rows={3}
              placeholder="Enter user message..."
              required
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              disabled={isLoading}
              className="notion-button flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            </button>
            
            <button
              type="button"
              onClick={clearChat}
              className="px-6 py-3 border border-notion-gray-300 text-notion-gray-700 rounded-lg hover:bg-notion-gray-50 transition-all duration-200"
            >
              Clear Chat
            </button>
          </div>
        </form>
      </div>

      {/* Chat Messages */}
      {(messages.length > 0 || streamingContent) && (
        <div className="notion-card">
          <h2 className="text-lg font-semibold text-notion-gray-800 mb-4">Chat Messages</h2>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="flex space-x-3">
                <div className="flex-shrink-0">
                  {message.role === 'developer' ? (
                    <div className="w-8 h-8 bg-notion-blue-100 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 text-notion-blue-600" />
                    </div>
                  ) : message.role === 'user' ? (
                    <div className="w-8 h-8 bg-notion-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-notion-gray-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-green-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-notion-gray-800 capitalize">
                      {message.role}
                    </span>
                    <span className="text-xs text-notion-gray-500">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  
                  <div className="text-notion-gray-700 whitespace-pre-wrap break-words">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Streaming message */}
            {streamingContent && (
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-notion-gray-800">
                      Assistant
                    </span>
                    <span className="text-xs text-notion-gray-500">
                      Typing...
                    </span>
                  </div>
                  
                  <div className="text-notion-gray-700 whitespace-pre-wrap break-words">
                    {streamingContent}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </div>
  )
} 