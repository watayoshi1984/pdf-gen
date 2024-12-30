import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AppBarProps {
  onMenuClick: () => void
}

export function AppBar({ onMenuClick }: AppBarProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-2">
            <Menu className="h-6 w-6" />
            <span className="sr-only">サイドバーを開閉</span>
          </Button>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white truncate">
            スタイリッシュフォーム & PDF生成アプリ
          </h1>
        </div>
      </div>
    </header>
  )
}

