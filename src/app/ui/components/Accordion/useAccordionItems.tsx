import { useState } from 'react'

const useAccordionItems = ({ firstItemOpen = false }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([firstItemOpen ? 0 : -1]))

  const handleAccordion = (itemId: number) => {
    const newOpenItems = new Set(openItems)

    if (newOpenItems.has(itemId)) newOpenItems.delete(itemId)
    else newOpenItems.add(itemId)

    setOpenItems(newOpenItems)
  }

  return { openItems, handleAccordion }
}

export default useAccordionItems
