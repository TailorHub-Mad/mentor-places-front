import type { HTMLInputTypeAttribute, KeyboardEvent } from 'react'

const VALIDATION_RULES: Record<string, (key: HTMLInputTypeAttribute, currentValue: string) => boolean> = {
  tel: (key: string, currentValue: string) =>
    (currentValue.length < 14 && /^[0-9]$/.test(key)) || ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'].includes(key),
  text: (key: string) => /^[a-zA-Z\u00C0-\u017F  ]$/.test(key) || ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'].includes(key)
}

const validateKey = (key: string, type: HTMLInputTypeAttribute | undefined, currentValue: string): boolean => {
  if (!type) return true
  const validate = VALIDATION_RULES[type]
  return validate ? validate(key, currentValue) : true // Default to allowing everything if no rule exists
}

export const handleInput = (e: KeyboardEvent<HTMLInputElement>, type: HTMLInputTypeAttribute | undefined) => {
  const currentValue = (e.target as HTMLInputElement).value
  if (!validateKey(e.key, type, currentValue)) {
    e.preventDefault()
  }
}
