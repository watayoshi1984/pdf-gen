'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const formFields = [
  { id: 'item1', label: '項目1', type: 'text' },
  { id: 'item2', label: '項目2', type: 'text' },
  { id: 'item3', label: '項目3', type: 'text' },
  { id: 'item4', label: '項目4', type: 'text' },
  { id: 'item5', label: '項目5', type: 'text' },
  { id: 'item6', label: '項目6', type: 'text' },
  { id: 'item7', label: '項目7', type: 'text' },
  { id: 'item8', label: '項目8', type: 'text' },
  { id: 'item9', label: '項目9', type: 'text' },
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {formFields.map((field) => (
          <div
            key={field.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors"
          >
            <Label
              htmlFor={field.id}
              className="block text-base font-medium text-gray-900 dark:text-gray-100 mb-2"
            >
              {field.label}
            </Label>
            <Input
              id={field.id}
              type={field.type}
              value={formData[field.id] || ''}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
              placeholder={`${field.label}を入力`}
            />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button type="submit" className="w-full text-lg py-6">
          プレビュー
        </Button>
      </div>
    </form>
  )
}

