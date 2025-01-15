import { CloudUpload, Lock, RefreshCw, Fingerprint } from 'lucide-react'

const iconMap = {
  deploy: CloudUpload,
  ssl: Lock,
  queues: RefreshCw,
  security: Fingerprint
}

export default function FeatureCard({ type, title, description }) {
  const Icon = iconMap[type]
  
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

