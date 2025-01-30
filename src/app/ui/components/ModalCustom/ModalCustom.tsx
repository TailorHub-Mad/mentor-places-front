import type { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import CrossIcon from '@components/icons/CrossIcon'

export interface IModalCustomProps {
  isOpen: boolean
  handleClose: () => void
}

const ModalCustom: FC<PropsWithChildren<IModalCustomProps>> = ({ children, handleClose }) => {
  // Create a reference to the 'modal-root' element
  const modalRoot = document.getElementById('modal-root') as HTMLElement

  // Ensure modal renders only if `modalRoot` exists
  if (!modalRoot) {
    console.error('No modal root element found. Please add a <div id="modal-root"></div> to your HTML.')
    return null
  }

  return createPortal(
    <div className="modal-custom absolute inset-0 flex items-center justify-center z-[1000]">
      <div className="modal-custom__container bg-WHITE min-h-full md:min-h-[500px] min-w-full md:min-w-[80vw] max-w-full max-h-svh overflow-y-auto relative z-20 rounded-[8px]">
        <button className="absolute right-[32px] top-[32px]" onClick={handleClose}>
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
