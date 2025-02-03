import { useState, useEffect, useRef } from 'react'

export const useDropdownState = (isDisabled: boolean = false) => {
  const [isOpen, setIsOpen] = useState(false)
  const targetRef = useRef<HTMLButtonElement | HTMLInputElement>(null)
  const selectInputRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    if (!isDisabled) {
      setIsOpen((prev) => !prev)
    }
  }

  const closeOnOutsideClick = (event: MouseEvent) => {
    if (
      selectInputRef.current &&
      !selectInputRef.current.contains(event.target as Node) &&
      targetRef.current &&
      !targetRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  const handleShowDropdown = (value: boolean) => {
    if (!isDisabled) {
      setIsOpen(value)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => document.removeEventListener('mousedown', closeOnOutsideClick)
  }, [])

  return { isOpen, toggle, targetRef, selectInputRef, handleShowDropdown }
}
