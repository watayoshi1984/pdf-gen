'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { sendEmail } from '../utils/emailSender'

export function EmailDialog({ isOpen, onClose, formData }) {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: 'フォーム入力内容',
    body: '添付のPDFをご確認ください。',
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setEmailData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await sendEmail(emailData, formData)
      onClose()
    } catch (error) {
      console.error('Error sending email:', error)
      alert('メールの送信中にエラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">メールで共有</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="to" className="text-sm sm:text-base">宛先</Label>
            <Input
              id="to"
              type="email"
              value={emailData.to}
              onChange={handleInputChange}
              required
              className="w-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm sm:text-base">件名</Label>
            <Input
              id="subject"
              value={emailData.subject}
              onChange={handleInputChange}
              required
              className="w-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="body" className="text-sm sm:text-base">本文</Label>
            <Textarea
              id="body"
              value={emailData.body}
              onChange={handleInputChange}
              required
              className="w-full text-sm sm:text-base"
            />
          </div>
          <Button type="submit" className="w-full text-sm sm:text-base">送信</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

