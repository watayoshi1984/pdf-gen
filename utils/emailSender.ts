import { generatePDF } from './pdfGenerator'

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail(emailData: EmailData, formData: Record<string, string>) {
  try {
    // Generate PDF
    const pdfBlob = await generatePDF(formData)

    // Convert PDF blob to base64
    const reader = new FileReader()
    reader.readAsDataURL(pdfBlob)
    reader.onloadend = function() {
      const base64data = reader.result as string

      // Open email client
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(
        emailData.subject
      )}&body=${encodeURIComponent(
        emailData.body
      )}&attachment=${encodeURIComponent(base64data.split(',')[1])}`

      window.location.href = mailtoLink
    }
  } catch (error) {
    console.error('Error sending email:', error)
    alert('メールの送信中にエラーが発生しました。もう一度お試しください。')
  }
}

