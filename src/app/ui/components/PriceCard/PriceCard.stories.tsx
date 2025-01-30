import type { Meta, StoryObj } from '@storybook/react'
import PriceCard from './PriceCard'

const meta: Meta<typeof PriceCard> = {
  component: PriceCard,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof PriceCard>

export const Official: Story = {
  args: {
    title: 'Precio oficial',
    infoHeaderTitle: '12.000 €/año',
    type: 'official'
  }
}

export const Discount: Story = {
  args: {
    title: 'Precio descuento',
    infoHeaderTitle: '5.000 €/año',
    type: 'discount'
  }
}
