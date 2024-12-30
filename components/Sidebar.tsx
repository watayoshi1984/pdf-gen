import { X } from 'lucide-react'
import { Button } from './ui/button'

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose}></div>
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">メニュー</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-6 w-6" />
            <span className="sr-only">サイドバーを閉じる</span>
          </Button>
        </div>
        <nav className="mt-5">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                使い方
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Q&A
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

