import type { Meta, StoryObj } from '@storybook/react'
import HomeCourses from './HomeCourses'
import { MOCK_ASSET_CARD } from '@components/AssetCard/mock'

const meta: Meta<typeof HomeCourses> = {
  component: HomeCourses,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof HomeCourses>

export const Default: Story = {
  args: {
    title: 'Todo lo que necesitas para tomar una buena decisión',
    text: 'Te ofrecemos información detallada de miles de títulos para que puedas tomar una decisión informada. Nuestro comparador te permitirá decantarte por uno u otro título.',
    cta: 'Comparar',
    action: 'compare',
    theme: 'dark',
    cards: [{ ...MOCK_ASSET_CARD.data }, { ...MOCK_ASSET_CARD.data }]
  }
}
