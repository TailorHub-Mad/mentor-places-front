import type { FC, PropsWithChildren, ReactNode } from 'react'
import ChevronArrowDown from '@components/icons/ChevronArrowDown'
import { cx } from '@utils/cx'

interface IAccordionBlockProps {
  title: string | ReactNode
  index: string
  openItems: Set<string>
  onToggle: (index: string) => void
}

const AccordionBlock: FC<PropsWithChildren<IAccordionBlockProps>> = ({ title, children, index, onToggle, openItems }) => {
  const getCollapseClass = (isOpen: boolean) =>
    cx('h-auto overflow-hidden transition-all ease-in-out duration-500', isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-50')

  return (
    <div className="accordion-block relative">
      <button
        onClick={() => onToggle(index)}
        className="relative flex items-center w-full py-[8px] text-left transition-all ease-in border-b border-solid cursor-pointer border-BLACK/20 text-s font-s group justify-between"
        data-collapse-target={`collapse-${index}`}
        aria-expanded={openItems.has(index)}
        aria-controls={`accordion-panel-${index}`}>
        {typeof title === 'string' ? <span className="">{title}</span> : title}
        <ChevronArrowDown
          className={cx('ml-[11px]', {
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
        <div className="ml-2">{children}</div>
      </div>
    </div>
  )
}

export default AccordionBlock
