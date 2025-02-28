import type { FC, ReactNode } from 'react'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import AccordionBlock from '@components/Accordion/components/AccordionBlock'

export interface IAccordionItem {
  title: string
  id: string
  children: ReactNode
}

export interface IAccordionItemsProps {
  accordionItems?: IAccordionItem[]
  defaultOpen?: string
}

const AccordionItems: FC<IAccordionItemsProps> = ({ accordionItems, defaultOpen }) => {
  const { openItems, handleAccordion } = useAccordionItems(defaultOpen)

  return (
    <div className="flex flex-col">
      {accordionItems?.map(({ title, children, id }, index) => (
        <AccordionBlock key={id} title={title} index={`${title}-${index}`} openItems={openItems} onToggle={handleAccordion}>
          {children}
        </AccordionBlock>
      ))}
    </div>
  )
}

export default AccordionItems
