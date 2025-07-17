import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Return welcome information
  res.status(200).json({
    message: "🚀 Welcome to the Unified OpenAI Chat App!",
    description: "A beautiful Next.js app with integrated FastAPI-style backend",
    status: "✅ Running perfectly!",
    endpoints: {
      chat: "/api/chat (POST) - Send messages and get streaming responses",
      health: "/api/health (GET) - Check API health status",
      root: "/api (GET) - This welcome message"
    },
    frontend: "Built-in beautiful Notion-inspired chat interface!",
    version: "2.0.0",
    made_with: "❤️ Next.js + OpenAI + TypeScript"
  })
} 