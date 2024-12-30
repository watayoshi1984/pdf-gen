'use client'

import { useState } from 'react'
import { AppBar } from '../components/AppBar'
import { Sidebar } from '../components/Sidebar'
import { FormContent } from '../components/FormContent'
import { PreviewDialog } from '../components/PreviewDialog'
import { EmailDialog } from '../components/EmailDialog'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [formData, setFormData] = useState({})

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const openPreview = (data) => {
    setFormData(data)
    setIsPreviewOpen(true)
  }
  const closePreview = () => setIsPreviewOpen(false)
  const openEmail = () => setIsEmailOpen(true)
  const closeEmail = () => setIsEmailOpen(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppBar onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              スタイリッシュフォーム & PDF生成アプリ
            </h1>
            <FormContent onPreview={openPreview} />
          </div>
        </main>
      </div>
      <PreviewDialog
        isOpen={isPreviewOpen}
        onClose={closePreview}
        formData={formData}
        onEmailClick={openEmail}
      />
      <EmailDialog isOpen={isEmailOpen} onClose={closeEmail} formData={formData} />
    </div>
  )
}

