import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItemProps {
  label: string
  content: string
}

const menuItems: MenuItemProps[] = [
  {
    label: 'お知らせ',
    content: '最新のアップデート情報や重要なお知らせを確認できます。'
  },
  {
    label: '使い方',
    content: 'アプリケーションの基本的な使用方法や機能の説明を確認できます。'
  },
  {
    label: 'よくある質問',
    content: 'ユーザーからよく寄せられる質問と回答を確認できます。'
  },
  {
    label: '問合せ',
    content: '不明点や技術的な問題について、サポートチームへ問い合わせることができます。'
  }
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/80" onClick={onClose} />
          <div className="relative flex w-80 max-w-sm flex-1 flex-col bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">メニュー</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
                <span className="sr-only">閉じる</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <nav className="space-y-2">
                <TooltipProvider>
                  {menuItems.map((item, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.label}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-xs">
                        <p>{item.content}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

