import { Menu, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useState, useEffect } from 'react'

interface AppBarProps {
  onMenuClick: () => void
}

export function AppBar({ onMenuClick }: AppBarProps) {
  const [isPWA, setIsPWA] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsPWA(window.matchMedia('(display-mode: standalone)').matches)
  }, [])

  const handleFavorite = async () => {
    if (isPWA) {
      toast({
        title: "PWAとしてインストール済み",
        description: "このアプリはすでにホーム画面に追加されています。",
      })
      return
    }

    if ('beforeinstallprompt' in window) {
      const deferredPrompt = (window as any).deferredPrompt
      if (deferredPrompt) {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        if (outcome === 'accepted') {
          toast({
            title: "ホーム画面に追加しました",
            description: "アプリがホーム画面に追加されました。",
          })
        }
        (window as any).deferredPrompt = null
      }
    } else {
      toast({
        title: "ブックマークに追加",
        description: `${navigator.userAgent.includes('Mac') ? '⌘' : 'Ctrl'} + D でブックマークに追加できます。`,
      })
    }
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-4">
              <Menu className="h-6 w-6" />
              <span className="sr-only">サイドバーを開閉</span>
            </Button>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
              入力 de PDF
            </h1>
          </div>
          <Button
            variant="outline"
            onClick={handleFavorite}
            className="flex items-center gap-2"
          >
            <Star className="h-4 w-4" />
            <span>{isPWA ? 'インストール済み' : 'お気に入り登録'}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

