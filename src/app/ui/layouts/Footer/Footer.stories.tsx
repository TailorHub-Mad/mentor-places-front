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

export const Figma: Story = {
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

export const ThreeColumnsLong: Story = {
  args: {
    menus: [
      [
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' },
        { label: 'Contacto', href: '' },
        { label: 'Cursos', href: '' },
        { label: 'Comparador', href: '' },
        { label: 'Blog', href: '' }
      ],
      [
        { label: 'Política de privacidad', href: '' },
        { label: 'Términos y condiciones de uso de la web', href: '' },
        { label: 'Ajustes de Cookies', href: '' }
      ],
      [
        { label: 'Política de privacidad', href: '' },
        { label: 'Términos y condiciones de uso de la web', href: '' },
        { label: 'Ajustes de Cookies', href: '' }
      ]
    ],
    contact: {
      phone: '+34 639402948',
      email: 'info@mentorplaces.com'
    }
  }
}

export const FourColumns: Story = {
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
      ],
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

export const LongColumn: Story = {
  args: {
    menus: [
      [
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' },
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' },
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' },
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' },
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' },
        { label: 'Home', href: '/' },
        { label: 'Universidades', href: '' },
        { label: 'Másters', href: '' },
        { label: 'Cuenta', href: '' }
      ]
    ],
    contact: {
      phone: '+34 639402948',
      email: 'info@mentorplaces.com'
    }
  }
}
