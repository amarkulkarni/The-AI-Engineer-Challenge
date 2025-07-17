import { useState } from 'react'
import Head from 'next/head'
import ChatInterface from '@/components/ChatInterface'
import HealthStatus from '@/components/HealthStatus'
import { MessageSquare } from 'lucide-react'

export default function Home() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [customApiBaseUrl, setCustomApiBaseUrl] = useState('')

  return (
    <>
      <Head>
        <title>OpenAI Chat Interface</title>
        <meta name="description" content="A beautiful chat interface for OpenAI API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-notion-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-notion-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-notion-blue-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-notion-gray-800">
                    OpenAI Chat Interface
                  </h1>
                  <p className="text-sm text-notion-gray-600">
                    A beautiful interface for the OpenAI chat API
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="px-3 py-1 text-sm border border-notion-gray-200 rounded-md bg-white hover:bg-notion-gray-50 transition-colors"
                >
                  {showAdvanced ? 'Hide Advanced' : 'Advanced Settings'}
                </button>
                <HealthStatus apiBaseUrl={customApiBaseUrl} />
              </div>
              
              {showAdvanced && (
                <div className="mt-4 p-4 bg-notion-gray-50 rounded-lg">
                  <label className="block text-xs font-medium text-notion-gray-600 mb-1">
                    Custom API Base URL (optional)
                  </label>
                  <input
                    type="text"
                    value={customApiBaseUrl}
                    onChange={(e) => setCustomApiBaseUrl(e.target.value)}
                    className="w-full px-3 py-1 text-sm border border-notion-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-notion-blue-500"
                    placeholder="Leave empty to use built-in API"
                  />
                  <p className="text-xs text-notion-gray-500 mt-1">
                    By default, the app uses its built-in API endpoints. Only set this if you want to use an external API.
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="py-8">
          <ChatInterface apiBaseUrl={customApiBaseUrl} />
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-notion-gray-200 mt-12">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="text-center text-sm text-notion-gray-500">
              <p>
                Built with Next.js, Tailwind CSS, and inspired by Notion's design.
              </p>
              <p className="mt-1">
                Unified app with built-in API - just add your OpenAI key and start chatting!
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
} 