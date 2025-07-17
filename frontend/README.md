# OpenAI Chat Frontend

A beautiful, Notion-inspired frontend interface for the OpenAI Chat API. This Next.js application provides a clean and intuitive way to interact with your OpenAI chat backend.

## Features

- 🎨 **Notion-inspired Design**: Clean, minimal interface with beautiful typography and spacing
- 🔄 **Real-time Streaming**: Supports streaming responses from the OpenAI API
- 🔒 **Secure API Key Input**: Password-masked input field for API keys
- 🏥 **Health Monitoring**: Real-time API health status indicator
- 📱 **Responsive Design**: Works beautifully on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance

## API Integration

This frontend integrates with the following API endpoints:

- `POST /api/chat` - Main chat endpoint with streaming support
- `GET /api/health` - Health check endpoint

## Prerequisites

- Node.js 18+ and npm/yarn
- A running OpenAI Chat API backend (see `/api` directory)

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

1. **API Base URL**: Set the base URL of your OpenAI Chat API backend (default: `http://localhost:8000`)
2. **OpenAI API Key**: Enter your OpenAI API key in the interface
3. **Model Selection**: Choose from available models (GPT-4.1, GPT-4.1 Mini, GPT-4.1 Nano)

## Usage

1. **Configure API Settings**:
   - Enter your OpenAI API key
   - Select the desired model
   - Ensure the API base URL points to your backend

2. **Set Up Messages**:
   - **Developer/System Message**: Provide system instructions or context
   - **User Message**: Enter the user's question or prompt

3. **Start Chatting**:
   - Click "Send Message" to initiate the conversation
   - Watch the response stream in real-time
   - Continue the conversation by sending more messages

## Building for Production

To build the application for production:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Deployment

This frontend is designed to work with Vercel for easy deployment:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

## Project Structure

```
frontend/
├── components/
│   ├── ChatInterface.tsx    # Main chat interface component
│   └── HealthStatus.tsx     # API health status component
├── pages/
│   ├── _app.tsx            # Next.js app wrapper
│   └── index.tsx           # Main page
├── styles/
│   └── globals.css         # Global styles with Notion-inspired design
└── public/                 # Static assets
```

## Customization

The interface uses a custom Notion-inspired color scheme and typography that can be customized in:

- `tailwind.config.js` - Color scheme and theme settings
- `styles/globals.css` - Component styles and CSS classes

## Troubleshooting

**Common Issues:**

1. **API Connection Issues**: Ensure your backend is running and the API base URL is correct
2. **CORS Errors**: Make sure your backend allows cross-origin requests
3. **Streaming Not Working**: Verify your backend supports streaming responses

**Health Check**: The interface includes a real-time health check that monitors your API status every 30 seconds.

## Support

For issues related to the backend API, see the `/api` directory documentation.