'use client'

interface EmailData {
  to: string
  subject: string
  message: string
  formData: Record<string, any>
}

export async function sendEmail(emailData: EmailData): Promise<void> {
  // メール送信の実装
  console.log('Sending email:', emailData)
  // ここにメール送信のロジックを実装
  await new Promise(resolve => setTimeout(resolve, 1000))
}

