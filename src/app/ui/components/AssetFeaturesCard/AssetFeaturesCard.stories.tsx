import type { Meta, StoryObj } from '@storybook/react'
import AssetFeaturesCard from '@components/AssetFeaturesCard/AssetFeaturesCard'

const meta: Meta<typeof AssetFeaturesCard> = {
  title: 'Components/Cards/AssetFeaturesCard',
  component: AssetFeaturesCard,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof AssetFeaturesCard>

export const Default: Story = {
  args: {
    title: 'Modalidad',
    description: 'En la Universidad Francisco Vitoria ofrece una amplia oferta de títulos en formato presencial, híbrido y online',
    array: [
      { label: 'Presencial', number: 35 },
      { label: 'Híbrido', number: 10 },
      { label: 'Online', number: 1 }
    ]
  }
}
