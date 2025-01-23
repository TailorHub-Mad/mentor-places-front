import { useState } from 'react'

function useAccordionItems<T>(defaultOpen?: Iterable<T>) {
  const [openItems, setOpenItems] = useState<Set<T>>(new Set(defaultOpen))
  const handleAccordion = (itemId: T) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(itemId)) newOpenItems.delete(itemId)
    else newOpenItems.add(itemId)
    setOpenItems(newOpenItems)
  }
  return { openItems, handleAccordion }
}

export default useAccordionItems
