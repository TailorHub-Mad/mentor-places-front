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

  const targetBoundingBox = targetRef?.current?.getBoundingClientRect() || null
  const dropdownStyles: CSSProperties = {
    position: 'absolute',
    height: 'min-content',
    ...calculateDropdownPosition(targetBoundingBox)
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

const calculateDropdownPosition = (boundingBox: DOMRect | null): CSSProperties => {
  if (!boundingBox) {
    return {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 'auto',
      maxHeight: '300px'
    }
  }

  const { top, left, width, height } = boundingBox
  const viewportWidth = window.innerWidth
  const scrollX = window.scrollX,
    scrollY = window.scrollY

  // Determine if the dropdown is in the right or left section of the screen
  const isRightSide = left + width / 2 > viewportWidth / 2

  // Calculate the relevant horizontal property (left or right)
  const horizontalPosition: CSSProperties = isRightSide
    ? { right: viewportWidth - (left + width) - scrollX } // Use 'right' if on right side
    : { left: left + scrollX } // Use 'left' otherwise

  return {
    top: top + scrollY + height,
    minWidth: width,
    width: 'auto',
    transform: 'none',
    maxHeight: `${window.innerHeight - (boundingBox.top + boundingBox.height + 20)}px`,
    ...horizontalPosition // Dynamically add the proper horizontal positioning
  }
}
