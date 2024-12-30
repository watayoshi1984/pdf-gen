'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

const formFields = [
  { id: 'name', label: '氏名' },
  { id: 'age', label: '年齢' },
  { id: 'address', label: '住所' },
  { id: 'phone', label: '電話番号' },
  { id: 'email', label: 'メールアドレス' },
  { id: 'occupation', label: '職業' },
  { id: 'hobby', label: '趣味' },
  { id: 'favoriteFood', label: '好きな食べ物' },
  { id: 'weekend', label: '休日の過ごし方' },
  { id: 'goal', label: '将来の目標' },
]

export function FormContent({ onPreview }) {
  const [formData, setFormData] = useState({})

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onPreview(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {formFields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id} className="text-sm sm:text-base">{field.label}</Label>
            <Input
              id={field.id}
              value={formData[field.id] || ''}
              onChange={handleInputChange}
              required
              className="w-full text-sm sm:text-base"
            />
          </div>
        ))}
      </div>
      <Button type="submit" className="w-full sm:w-auto text-sm sm:text-base">プレビュー</Button>
    </form>
  )
}

