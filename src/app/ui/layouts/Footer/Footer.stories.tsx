import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  component: Footer,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    menus: [
      [
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' }
      ],
      [
        { label: 'Privacy Policy', href: '' },
        { label: 'Terms of Service', href: '' },
        { label: 'Cookies Settings', href: '' }
      ]
    ],
    contact: {
      phone: '+34 639402948',
      email: 'info@mentorplaces.com'
    }
  }
}
