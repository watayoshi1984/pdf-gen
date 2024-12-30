'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { generatePDF } from '../utils/pdfGenerator'

export function PreviewDialog({ isOpen, onClose, formData, onEmailClick }) {
  const handleDownload = async () => {
    try {
      const pdfBlob = await generatePDF(formData)
      const pdfUrl = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'form-data.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(pdfUrl)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('PDFの生成中にエラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">プレビュー</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh]">
          {Object.entries(formData).map(([key, value]) => (
            <p key={key} className="mb-2 text-sm sm:text-base">
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </ScrollArea>
        <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
          <Button onClick={handleDownload} className="w-full sm:w-auto text-sm sm:text-base">PDFダウンロード</Button>
          <Button onClick={onEmailClick} className="w-full sm:w-auto text-sm sm:text-base">メールで共有</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

