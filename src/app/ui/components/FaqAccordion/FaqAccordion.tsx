import type { FC } from 'react'
import AccordionBlock from '@components/Accordion/components/AccordionBlock'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import RichText from '@components/RichText/RichText'

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
            <RichText content={content} maxLines={30} width={'100%'} disableTruncate />
          </AccordionBlock>
        )
      })}
    </div>
  )
}

export default FaqAccordion
