'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ReactNode } from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItemProps {
  label: string
  content: ReactNode
  description: JSX.Element
}

const menuItems: MenuItemProps[] = [
  {
    label: 'お知らせ',
    content: '最新のアップデート情報や重要なお知らせを確認できます。',
    description: (
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">最新のアップデート</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="font-medium text-primary">2024年1月15日: 入力項目のカスタマイズ機能を追加</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • 入力項目を自由にカスタマイズ可能に<br />
                • 項目名の変更機能を実装<br />
                • より柔軟なフォーム作成を実現
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <p className="font-medium text-primary">2024年1月10日: サイトリニューアル</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • サイト名を「入力 de PDF」に変更<br />
                • UI/UXを大幅に改善<br />
                • レスポンシブデザインの強化
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
              <p className="font-medium text-primary">2024年1月5日: 基本機能の実装完了</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • PWA対応を実装<br />
                • PDFプレビュー機能を追加<br />
                • オフライン対応を強化
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">今後の予定</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <p className="font-medium text-primary">今後のアップデート予定</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • テンプレート機能の追加<br />
                • PDFデザインのカスタマイズ機能<br />
                • クラウド保存機能の実装
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    label: '使い方',
    content: 'アプリケーションの基本的な使用方法や機能の説明を確認できます。',
    description: (
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">基本的な使い方</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="font-medium text-primary">Step 1: 情報入力</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • 必要な情報をフォームに入力<br />
                • すべての必須項目を埋める<br />
                • 入力内容を確認
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <p className="font-medium text-primary">Step 2: プレビュー確認</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • プレビューボタンをクリック<br />
                • 生成されたPDFを確認<br />
                • 必要に応じて情報を修正
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
              <p className="font-medium text-primary">Step 3: 保存・共有</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • PDFをダウンロード<br />
                • メールで送信（オプション）<br />
                • お気に入りに追加
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">便利な機能</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <p className="font-medium text-primary">スマートフォン向け機能</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • PWAとしてインストール可能<br />
                • ホーム画面からすぐにアクセス<br />
                • オフライン時でも使用可能
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
              <p className="font-medium text-primary">PC向け機能</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • ブックマークに追加可能<br />
                • キーボードショートカット対応<br />
                • 大画面での快適な操作
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    label: 'よくある質問',
    content: 'ユーザーからよく寄せられる質問と回答を確認できます。',
    description: (
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">基本的な使い方</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="font-medium text-primary">Q1: このアプリは何ができますか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: 入力フォームから簡単にPDFを生成し、ダウンロードやメール送信ができます。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="font-medium text-primary">Q2: 利用料金はかかりますか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: 完全無料でご利用いただけます。追加料金や隠れた費用はありません。</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">機能について</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <p className="font-medium text-primary">Q3: 生成したPDFは保存されますか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: いいえ、PDFはブラウザ上でのみ生成され、サーバーには保存されません。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <p className="font-medium text-primary">Q4: 対応しているブラウザは？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: Chrome, Firefox, Safari, Edgeの最新版に対応しています。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <p className="font-medium text-primary">Q5: スマートフォンでも使えますか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: はい、スマートフォンに最適化されており、PWAとしてインストールも可能です。</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">PDFについて</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
              <p className="font-medium text-primary">Q6: PDFのファイルサイズに制限はありますか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: 生成されるPDFは通常1MB以下で、サイズ制限はありません。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
              <p className="font-medium text-primary">Q7: PDFの保存形式は？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: PDF/A-1b形式で保存され、長期保存に適しています。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
              <p className="font-medium text-primary">Q8: 生成したPDFは編集できますか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: 生成後のPDFは読み取り専用です。編集が必要な場合は、フォームから再生成してください。</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">その他</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <p className="font-medium text-primary">Q9: 入力データは安全ですか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: すべての処理はブラウザ上で行われ、データは外部に送信されません。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <p className="font-medium text-primary">Q10: オフラインでも使用できますか？</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A: PWAとしてインストールすることで、オフラインでも基本機能を使用できます。</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    label: '問合せ',
    content: (
      <div className="w-[300px] space-y-2">
        <p className="font-medium text-primary">お問い合わせフォーム</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          • 不明点や技術的な問題について<br />
          • ご要望やフィードバック<br />
          • バグ報告や改善提案
        </p>
        <p className="text-xs text-gray-500 mt-2">
          クリックすると問い合わせフォームが開きます
        </p>
      </div>
    ),
    description: (
      <div className="w-full h-[calc(80vh-6rem)] overflow-hidden rounded-lg">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSchQxHrFWOtG34E5klripBytxf_6ACuyHlsUpqYe8cwB0Yscw/viewform?embedded=true" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
          title="お問い合わせフォーム"
        >
          読み込んでいます…
        </iframe>
      </div>
    )
  }
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItemProps | null>(null)

  const handleItemClick = (item: MenuItemProps) => {
    setSelectedItem(item)
  }

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
                        <button
                          onClick={() => handleItemClick(item)}
                          className="block w-full px-4 py-2 text-sm text-left rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.label}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-xs">
                        <p>{item.content}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </nav>
            </div>
            <div className="p-4 border-t text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 入力 de PDF
              </p>
            </div>
          </div>
        </div>
      )}

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{selectedItem?.label}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full max-h-[calc(90vh-6rem)] overflow-auto">
            <div className="mt-4 pr-6">
              {selectedItem?.description}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}

