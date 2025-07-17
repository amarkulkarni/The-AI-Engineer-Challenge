import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

// Define the request body interface
interface ChatRequestBody {
  developer_message: string
  user_message: string
  model?: string
  api_key: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { developer_message, user_message, model = 'gpt-4.1-mini', api_key }: ChatRequestBody = req.body

    // Validate required fields
    if (!developer_message || !user_message || !api_key) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Initialize OpenAI client
    const client = new OpenAI({ apiKey: api_key })

    // Set up streaming response
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Transfer-Encoding', 'chunked')

    // Create streaming chat completion
    const stream = await client.chat.completions.create({
      model: model,
      messages: [
        { role: 'developer' as const, content: developer_message },
        { role: 'user' as const, content: user_message }
      ],
      stream: true
    })

    // Stream the response chunks
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content
      if (content) {
        res.write(content)
      }
    }

    // End the response
    res.end()

  } catch (error) {
    console.error('Chat API error:', error)
    res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    })
  }
} 