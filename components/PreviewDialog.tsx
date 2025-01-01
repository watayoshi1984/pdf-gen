'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { generatePDF } from './PDFGenerator'
import { useState } from 'react'
import { FavoriteButton } from './FavoriteButton'
import { Toaster } from '@/components/ui/toaster'

interface PreviewDialogProps {
  isOpen: boolean
  onClose: () => void
  formData: Record<string, string>
  onEmailClick: () => void
}

const itemLabels: Record<string, string> = {
  item1: '項目1',
  item2: '項目2',
  item3: '項目3',
  item4: '項目4',
  item5: '項目5',
  item6: '項目6',
  item7: '項目7',
  item8: '項目8',
  item9: '項目9',
}

export function PreviewDialog({ isOpen, onClose, formData, onEmailClick }: PreviewDialogProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)
      const pdfBlob = await generatePDF(formData)
      const url = URL.createObjectURL(pdfBlob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'form.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to generate PDF:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle>プレビュー</DialogTitle>
            <FavoriteButton />
          </DialogHeader>
          <ScrollArea className="h-[60vh] rounded-md border p-4">
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="grid grid-cols-3 gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="font-medium text-gray-700 dark:text-gray-300">{itemLabels[key] || key}</div>
                  <div className="col-span-2 text-gray-900 dark:text-gray-100">{value}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DialogFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button onClick={handleDownload} disabled={isGenerating}>
                {isGenerating ? 'PDFを生成中...' : 'PDFダウンロード'}
              </Button>
              <Button onClick={onEmailClick}>メール送信</Button>
            </div>
            <Button variant="outline" onClick={onClose}>
              閉じる
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Toaster />
    </>
  )
}

