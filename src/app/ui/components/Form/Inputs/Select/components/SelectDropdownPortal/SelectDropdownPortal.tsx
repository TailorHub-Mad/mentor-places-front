import type { CSSProperties, FC, PropsWithChildren, RefObject } from 'react'
import ReactDOM from 'react-dom'
import { cx } from '@utils/cx'

interface ISelectDropdownPortalProps {
  isVisible: boolean
  targetRef: RefObject<HTMLElement>
  className?: string
}

const SelectDropdownPortal: FC<PropsWithChildren<ISelectDropdownPortalProps>> = ({ isVisible, targetRef, children, className }) => {
  if (!isVisible) return null

  const targetBox = targetRef?.current ? targetRef.current.getBoundingClientRect() : null
  const getDropdownPosition = () => {
    if (!targetBox) {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        maxHeight: '300px'
      }
    }
    return {
      top: targetBox.top + window.scrollY + targetBox.height,
      left: targetBox.left + window.scrollX,
      minWidth: targetBox.width,
      maxHeight: `${window.innerHeight - (targetBox.top + targetBox.height + 20)}px`,
      width: 'auto',
      bottom: 0,
      transform: 'none'
    }
  }

  const dropdownStyles: CSSProperties = {
    position: 'absolute',
    height: 'min-content',
    ...getDropdownPosition()
  }

  const dropdownElement = (
    <div
      className={cx('select-search-dropdown-wrapper absolute z-[1000] overflow-scroll no-scrollbar md:w-min', className)}
      style={dropdownStyles}>
      {children}
    </div>
  )

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    console.error('Modal root element not found in the document.')
    return null
  }

  return ReactDOM.createPortal(dropdownElement, modalRoot)
}

export default SelectDropdownPortal
