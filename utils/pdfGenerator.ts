import html2pdf from 'html2pdf.js'

export function generatePDF(formData: Record<string, string>) {
  const element = document.createElement('div')
  element.innerHTML = `
    <h1 style="font-size: 24px; margin-bottom: 20px;">フォーム入力内容</h1>
    ${Object.entries(formData)
      .map(([key, value]) => `<p style="margin-bottom: 10px;"><strong>${key}:</strong> ${value}</p>`)
      .join('')}
  `

  const opt = {
    margin: 10,
    filename: 'form-data.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }

  return html2pdf().from(element).set(opt).outputPdf('blob')
}

