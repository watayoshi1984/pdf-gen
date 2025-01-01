'use client'

import { useState } from 'react'
import { AppBar } from '../components/AppBar'
import { Sidebar } from '../components/Sidebar'
import { FormContent } from '../components/FormContent'
import { PreviewDialog } from '../components/PreviewDialog'
import { EmailDialog } from '../components/EmailDialog'

interface FormData {
  [key: string]: any
}

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({})

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const openPreview = (data: FormData) => {
    setFormData(data)
    setIsPreviewOpen(true)
  }
  const closePreview = () => setIsPreviewOpen(false)
  const openEmail = () => setIsEmailOpen(true)
  const closeEmail = () => setIsEmailOpen(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <AppBar onMenuClick={toggleSidebar} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FormContent onPreview={openPreview} />
        </div>
      </main>
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

