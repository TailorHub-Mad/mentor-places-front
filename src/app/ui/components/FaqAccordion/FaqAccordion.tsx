import type { FC } from 'react'
import AccordionBlock from '@components/Accordion/components/AccordionBlock'
import useAccordionItems from '@components/Accordion/useAccordionItems'

export interface IFaqAccordionProps {
  items: {
    title: string
    content: string
  }[]
  defaultOpen?: string
}

const FaqAccordion: FC<IFaqAccordionProps> = ({ items, defaultOpen }) => {
  const { openItems, handleAccordion } = useAccordionItems(defaultOpen)

  return (
    <div className="faq-accordion">
      {items.map(({ title, content }, index) => {
        return (
          <AccordionBlock key={`${title}-${index}`} title={title} index={`${index}`} onToggle={handleAccordion} openItems={openItems}>
            <div
              className="faq-accordion__content"
              dangerouslySetInnerHTML={{
                __html: content
              }}></div>
          </AccordionBlock>
        )
      })}
    </div>
  )
}

export default FaqAccordion
