import { useState } from 'react'

const useAccordionItems = (defaultOpen?: string | undefined) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen))

  const handleAccordion = (itemId: string) => {
    const newOpenItems = new Set(openItems)

    if (newOpenItems.has(itemId)) newOpenItems.delete(itemId)
    else newOpenItems.add(itemId)

    setOpenItems(newOpenItems)
  }

  return { openItems, handleAccordion }
}

export default useAccordionItems
