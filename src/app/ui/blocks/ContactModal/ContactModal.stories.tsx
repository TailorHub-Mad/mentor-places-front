import type { Meta, StoryObj } from '@storybook/react'
import ContactModal from './ContactModal'
import { useState } from 'react'
import UiContext from '../../../lib/providers/UiProvider'

const meta: Meta = {
  component: ContactModal,
  tags: ['autodocs'],
  args: undefined,
  parameters: {
    locale: 'es'
  },
  decorators: [
    (Story) => {
      const [isContactModalOpen, setContactModalOpen] = useState(false)

      // Mock the `handleIsContactModalOpen` function
      const handleIsContactModalOpen = (isOpen: boolean) => {
        setContactModalOpen(isOpen)
      }

      return (
        <UiContext.Provider
          value={{
            handleIsContactModalOpen,
            isContactModalOpen
          }}>
          <button
            onClick={() => handleIsContactModalOpen(true)}
            style={{
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
            Open modal
          </button>
          <Story />
        </UiContext.Provider>
      )
    }
  ]
}

export default meta

type Story = StoryObj<typeof ContactModal>

export const Default: Story = {}
