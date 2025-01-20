import type { FC, PropsWithChildren } from 'react'
import ChevronArrowDown from '@components/icons/ChevronArrowDown'
import { cx } from '@utils/cx'

interface IAccordionBlockProps {
  title: string
  index: number
  openItems: Set<number>
  onToggle: (index: number) => void
}

const AccordionBlock: FC<PropsWithChildren<IAccordionBlockProps>> = ({ title, children, index, onToggle, openItems }) => {
  const getCollapseClass = (isOpen: boolean) =>
    cx('h-auto overflow-hidden transition-all ease-in-out duration-500', isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-50')

  return (
    <div key={`accordion-item-${index}-${title}`} className="relative">
      <button
        onClick={() => onToggle(index)}
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
  )
}

export default AccordionBlock
