import type { FC, PropsWithChildren } from 'react'
import { createContext, useState } from 'react'

interface IUiOptions {
  isContactModalOpen: boolean
}

interface IUiContext extends IUiOptions {
  handleIsContactModalOpen: (value: boolean) => void
  isContactModalOpen: boolean
}

const UiContext = createContext<IUiContext>({} as IUiContext)

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [uiOptions, setUiOptions] = useState<IUiOptions>({
    isContactModalOpen: true
  })

  const handleIsContactModalOpen = (value: boolean) => {
    setUiOptions((prev) => ({ ...prev, isContactModalOpen: value }))
  }

  return (
    <UiContext.Provider value={{ handleIsContactModalOpen, isContactModalOpen: uiOptions.isContactModalOpen }}>
      {children}
    </UiContext.Provider>
  )
}

export default UiContext
