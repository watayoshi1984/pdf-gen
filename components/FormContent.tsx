'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const formFields = [
  { id: 'name', label: '名前', type: 'text' },
  { id: 'email', label: 'メールアドレス', type: 'email' },
  { id: 'phone', label: '電話番号', type: 'tel' },
  { id: 'address', label: '住所', type: 'text' },
  { id: 'birthdate', label: '生年月日', type: 'date' },
  { id: 'occupation', label: '職業', type: 'text' },
  { id: 'company', label: '会社名', type: 'text' },
  { id: 'department', label: '部署', type: 'text' },
  { id: 'position', label: '役職', type: 'text' },
]

interface FormContentProps {
  onPreview: (data: Record<string, string>) => void
}

export function FormContent({ onPreview }: FormContentProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onPreview(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formFields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
              id={field.id}
              type={field.type}
              value={formData[field.id] || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
      </div>
      <Button type="submit" className="w-full">プレビュー</Button>
    </form>
  )
}

