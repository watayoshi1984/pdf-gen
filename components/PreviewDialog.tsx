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

interface PreviewDialogProps {
  isOpen: boolean
  onClose: () => void
  formData: Record<string, string>
  onEmailClick: () => void
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>プレビュー</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] rounded-md border p-4">
          <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3 gap-4">
                <div className="font-medium">{key}</div>
                <div className="col-span-2">{value}</div>
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
  )
}

