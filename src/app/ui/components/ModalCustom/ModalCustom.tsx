import type { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import CrossIcon from '@components/icons/CrossIcon'
import { cx } from '@utils/cx'

export interface IModalCustomProps {
  isOpen: boolean
  handleClose: () => void
  className?: string
}

const ModalCustom: FC<PropsWithChildren<IModalCustomProps>> = ({ children, handleClose, isOpen, className }) => {
  // Create a reference to the 'modal-root' element
  const modalRoot = document.getElementById('modal-root') as HTMLElement

  // Ensure modal renders only if `modalRoot` exists
  if (!modalRoot) {
    console.error('No modal root element found. Please add a <div id="modal-root"></div> to your HTML.')
    return null
  }

  if (!isOpen) return null

  return createPortal(
    <div className="modal-custom absolute inset-0 flex items-center justify-center z-[1000]">
      <div
        className={cx(
          'modal-custom__container flex flex-col bg-WHITE min-h-full md:min-h-[500px] w-full md:w-[700px] lg:w-[900px] max-h-svh overflow-y-auto relative z-20 rounded-[8px]',
          className
        )}>
        <button className="absolute right-[32px] top-[32px] z-50" onClick={handleClose}>
          <CrossIcon />
        </button>
        {children}
      </div>
      <div onClick={handleClose} className="modal-custom__overly bg-BLACK/10 absolute inset-0 z-10"></div>
    </div>,
    modalRoot
  )
}

export default ModalCustom
