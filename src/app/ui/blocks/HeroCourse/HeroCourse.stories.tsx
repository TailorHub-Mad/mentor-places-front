import type { Meta, StoryObj } from '@storybook/react'
import HeroCourse from './HeroCourse'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { MOCK_ASSET_HERO_CARD } from '@components/AssetCard/mock'

const meta: Meta<typeof HeroCourse> = {
  component: HeroCourse,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof HeroCourse>

export const Default: Story = {
  args: {
    image: '/images/blog-post-example-mentor.jpeg',
    card: {
      variant: EAssetCardVariant.hero,
      data: {
        ...MOCK_ASSET_HERO_CARD.data,
        ranking: 5
      }
    },
    featuredDetails: {
      duration: '9 meses',
      format: 'Presencial',
      language: 'Español',
      campus: 'Madrid',
      startDate: '25 agosto'
    }
  }
}
