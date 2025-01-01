import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
  }
}

export function FavoriteButton() {
  const [isPWAInstalled, setIsPWAInstalled] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    // PWAインストール状態の確認
    const checkPWAInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsPWAInstalled(true)
      }
    }

    checkPWAInstalled()

    // beforeinstallpromptイベントのハンドリング
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', () => setIsPWAInstalled(true))

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleClick = async () => {
    // モバイルの場合
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      if (isPWAInstalled) {
        toast({
          title: "インストール済み",
          description: "アプリケーションは既にインストールされています。",
        })
        return
      }

      if (deferredPrompt) {
        try {
          await deferredPrompt.prompt()
          const choiceResult = await deferredPrompt.userChoice
          if (choiceResult.outcome === 'accepted') {
            toast({
              title: "インストール完了",
              description: "アプリケーションがホーム画面に追加されました。",
            })
          }
        } catch (error) {
          console.error('PWAインストールエラー:', error)
        }
        setDeferredPrompt(null)
      } else {
        toast({
          title: "インストール方法",
          description: "ブラウザのメニューから「ホーム画面に追加」を選択してください。",
        })
      }
    } else {
      // PCの場合
      try {
        toast({
          title: "ブックマーク登録",
          description: `${navigator.platform.indexOf('Mac') !== -1 ? '⌘' : 'Ctrl'} + D キーでブックマークに追加できます。`,
        })
      } catch (error) {
        console.error('ブックマーク登録エラー:', error)
      }
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      className="ml-2"
      title={/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'ホーム画面に追加' : 'ブックマークに追加'}
    >
      <Star className="h-4 w-4" />
    </Button>
  )
} 