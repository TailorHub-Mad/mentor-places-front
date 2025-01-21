import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { cx } from '@utils/cx'
import ChevronArrowDown from '@components/icons/ChevronArrowDown'

export interface IAccordionItem {
  title: string
  children: ReactNode
}

export interface IAccordionItemsProps {
  accordionItems: IAccordionItem[]
  firstItemOpen?: boolean
}

const AccordionItems: FC<IAccordionItemsProps> = ({ accordionItems, firstItemOpen }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([firstItemOpen ? 0 : -1]))

  const handleAccordion = (itemId: number) => {
    const newOpenItems = new Set(openItems)

    if (newOpenItems.has(itemId)) newOpenItems.delete(itemId)
    else newOpenItems.add(itemId)

    setOpenItems(newOpenItems)
  }

  const getCollapseClass = (isOpen: boolean) =>
    cx('h-auto overflow-hidden transition-all ease-in-out duration-500', isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-50')

  return (
    <div className="flex flex-col">
      {accordionItems.map(({ title, children }, index) => (
        <div key={`accordion-item-${index}-${title}`} className="relative">
          <button
            onClick={() => handleAccordion(index)}
            className="relative flex items-center w-full py-[8px] text-left transition-all ease-in border-t border-solid cursor-pointer border-BLACK/20 text-s font-s group justify-between"
            data-collapse-target={`collapse-${index}`}
            aria-expanded={openItems.has(index)}
            aria-controls={`accordion-panel-${index}`}>
            <span className="">{title}</span>
            <ChevronArrowDown
              className={cx({
                'rotate-180': openItems.has(index)
              })}
            />
          </button>
          <div
            id={`accordion-panel-${index}`}
            role="region"
            data-collapse={`collapse-${index}`}
            aria-hidden={!openItems.has(index)}
            className={getCollapseClass(openItems.has(index))}>
            <div className="mb-4 mt-2">{children}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AccordionItems
