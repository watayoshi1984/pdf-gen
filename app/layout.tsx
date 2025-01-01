import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: '入力 de PDF',
  description: 'フォーム入力からPDFを簡単生成',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '入力 de PDF'
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <footer className="py-6 border-t">
          <div className="container mx-auto text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 入力 de PDF
            </p>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}

