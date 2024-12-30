'use client'

import dynamic from 'next/dynamic'

interface PDFGeneratorProps {
  formData: Record<string, string>
}

async function generatePDFContent(formData: Record<string, string>): Promise<HTMLDivElement> {
  const content = document.createElement('div')
  content.style.padding = '20px'
  content.style.fontFamily = 'sans-serif'

  const title = document.createElement('h1')
  title.textContent = 'フォーム入力内容'
  title.style.marginBottom = '20px'
  title.style.borderBottom = '2px solid #333'
  title.style.paddingBottom = '10px'
  content.appendChild(title)

  Object.entries(formData).forEach(([key, value]) => {
    const row = document.createElement('div')
    row.style.marginBottom = '15px'
    row.style.display = 'grid'
    row.style.gridTemplateColumns = '1fr 2fr'
    row.style.gap = '10px'

    const label = document.createElement('div')
    label.textContent = key
    label.style.fontWeight = 'bold'
    label.style.color = '#333'

    const text = document.createElement('div')
    text.textContent = value
    text.style.color = '#666'

    row.appendChild(label)
    row.appendChild(text)
    content.appendChild(row)
  })

  return content
}

export async function generatePDF(formData: Record<string, string>): Promise<Blob> {
  try {
    const html2pdf = (await import('html2pdf.js')).default
    const content = await generatePDFContent(formData)

    const options = {
      margin: 10,
      filename: 'form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    const pdf = await html2pdf().from(content).set(options).outputPdf('blob')
    return pdf
  } catch (error) {
    console.error('Failed to generate PDF:', error)
    throw error
  }
} 