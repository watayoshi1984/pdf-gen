import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

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
                <a
                  href="#"
                  className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ホーム
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  フォーム一覧
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  設定
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

