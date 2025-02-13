'use client'

import { type FC, type PropsWithChildren, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CrossIcon from '@components/icons/CrossIcon'
import { cx } from '@utils/cx'

export interface IModalCustomProps {
  isOpen: boolean
  handleClose: () => void
  className?: string
}

const ModalCustom: FC<PropsWithChildren<IModalCustomProps>> = ({ children, handleClose, isOpen, className }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null) // State to store modal root reference

  useEffect(() => {
    // This will run once the component is mounted
    const rootElement = document.getElementById('modal-root') as HTMLElement
    if (!rootElement) {
      console.error('No modal root element found. Please add a <div id="modal-root"></div> to your HTML.')
    }
    setModalRoot(rootElement) // Assign modal-root to the state
  }, [])

  // Only render when modalRoot is available and `isOpen` is true
  if (!modalRoot || !isOpen) return null

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
