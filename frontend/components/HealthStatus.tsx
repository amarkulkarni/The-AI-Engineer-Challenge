import { useState, useEffect } from 'react'
import { Activity, AlertCircle } from 'lucide-react'

interface HealthStatusProps {
  apiBaseUrl: string
}

export default function HealthStatus({ apiBaseUrl }: HealthStatusProps) {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${apiBaseUrl}/api/health`)
        const data = await response.json()
        setIsHealthy(data.status === 'ok')
      } catch (error) {
        setIsHealthy(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkHealth()
    const interval = setInterval(checkHealth, 30000) // Check every 30 seconds
    
    return () => clearInterval(interval)
  }, [apiBaseUrl])

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-notion-gray-500">
        <div className="w-2 h-2 bg-notion-gray-300 rounded-full animate-pulse"></div>
        <span className="text-sm">Checking API status...</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-2 ${isHealthy ? 'text-green-600' : 'text-red-600'}`}>
      {isHealthy ? (
        <Activity className="w-4 h-4" />
      ) : (
        <AlertCircle className="w-4 h-4" />
      )}
      <span className="text-sm">
        API Status: {isHealthy ? 'Healthy' : 'Unavailable'}
      </span>
    </div>
  )
} 