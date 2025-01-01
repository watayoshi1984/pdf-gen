'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Star } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

const formFields = [
  { id: 'name', label: '名前', type: 'text' },
  { id: 'email', label: 'メールアドレス', type: 'email' },
  { id: 'phone', label: '電話番号', type: 'tel' },
  { id: 'address', label: '住所', type: 'text' },
  { id: 'birthdate', label: '生年月日', type: 'date' },
  { id: 'occupation', label: '職業', type: 'text' },
  { id: 'company', label: '会社名', type: 'text' },
  { id: 'department', label: '部署', type: 'text' },
  { id: 'position', label: '役職', type: 'text' },
]

interface FormContentProps {
  onPreview: (data: Record<string, string>) => void
}

export function FormContent({ onPreview }: FormContentProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isPWA, setIsPWA] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // PWAとして実行されているかどうかを確認
    setIsPWA(window.matchMedia('(display-mode: standalone)').matches)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onPreview(formData)
  }

  const handleFavorite = async () => {
    if (isPWA) {
      toast({
        title: "PWAとしてインストール済み",
        description: "このアプリはすでにホーム画面に追加されています。",
      })
      return
    }

    if ('beforeinstallprompt' in window) {
      // PWAインストールプロンプトを表示
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
      // ブラウザのブックマーク機能を使用
      if (window.sidebar && window.sidebar.addPanel) {
        // Firefox
        window.sidebar.addPanel(document.title, window.location.href, '')
      } else if (window.external && 'AddFavorite' in window.external) {
        // IE
        ;(window.external as any).AddFavorite(window.location.href, document.title)
      } else {
        // その他のブラウザ
        toast({
          title: "ブックマークに追加",
          description: `${navigator.userAgent.includes('Mac') ? '⌘' : 'Ctrl'} + D でブックマークに追加できます。`,
        })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">フォーム入力</h2>
        <Button
          type="button"
          variant="outline"
          onClick={handleFavorite}
          className="flex items-center gap-2"
        >
          <Star className="h-4 w-4" />
          <span>{isPWA ? 'インストール済み' : 'お気に入り登録'}</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formFields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
              id={field.id}
              type={field.type}
              value={formData[field.id] || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
      </div>
      <Button type="submit" className="w-full">プレビュー</Button>
    </form>
  )
}

