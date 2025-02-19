import type { Meta, StoryObj } from '@storybook/react'
import PriceSection from './PriceSection'

const meta: Meta<typeof PriceSection> = {
  component: PriceSection,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof PriceSection>

export const Default: Story = {
  args: {
    title: 'Precios',
    description:
      'Se requiere estar en posesión de un título de grado del EES o convalidado, de titulaciones afines. Para otros grados pueden ser necesarios complementos de formación.',
    prices: [
      { title: 'Precio oficial', infoHeaderTitle: '€12.000/ año', type: 'official' },
      { title: 'Precio descuento', infoHeaderTitle: '€8.000/ año', type: 'discount' }
    ]
  }
}
