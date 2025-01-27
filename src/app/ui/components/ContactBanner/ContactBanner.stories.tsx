import type { Meta, StoryObj } from '@storybook/react'
import { EColor } from '@theme/foundations/colors.foundations'
import ContactBanner from './ContactBanner'

const meta: Meta<typeof ContactBanner> = {
  component: ContactBanner,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ContactBanner>

export const Default: Story = {
  args: {
    topText: 'Contáctanos',
    title: 'Te ayudamos a seleccionar tu máster',
    button: 'Más información',
    backgroundColor: EColor.YELLOW
  }
}
