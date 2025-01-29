import type { Meta, StoryFn } from '@storybook/react'
import ModalCustom, { type IModalCustomProps } from '@components/ModalCustom/ModalCustom'
import { useState } from 'react'
import Button from '@components/Button/Button'

const meta: Meta = {
  component: ModalCustom,
  tags: ['autodocs'],
  args: undefined,
  parameters: {
    locale: 'es'
  }
}

export default meta

const Template: StoryFn<IModalCustomProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  if (isModalOpen) return <ModalCustom {...props} isOpen={isModalOpen} handleClose={handleClose} />

  return (
    <div className="mocked-open-modal-feature">
      <Button type={'button'} className={''} onClick={handleOpenModal}>
        Open modal
      </Button>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
