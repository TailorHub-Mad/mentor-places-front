import type { Meta, StoryObj } from '@storybook/react'
import { EColor } from '@theme/foundations/colors.foundations'
import ContactCard from './ContactCard'

const meta: Meta<typeof ContactCard> = {
  component: ContactCard,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ContactCard>

export const Default: Story = {
  args: {
    topText: 'Contáctanos',
    title: 'Te ayudamos a seleccionar tu máster',
    button: 'Más información',
    backgroundColor: EColor.YELLOW
  }
}
