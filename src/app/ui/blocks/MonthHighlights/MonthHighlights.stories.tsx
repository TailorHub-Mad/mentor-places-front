import type { Meta, StoryObj } from '@storybook/react'
import MonthHighlights from './MonthHighlights'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { MOCK_ASSET_CARD } from '@components/AssetCard/mock'

const meta: Meta<typeof MonthHighlights> = {
  component: MonthHighlights,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof MonthHighlights>

export const Default: Story = {
  args: {
    title: 'Destacados de este mes',
    items: [
      {
        image: '/images/blog-post-example-mentor.jpeg',
        variant: EAssetCardVariant.withIcons,
        data: {
          ...MOCK_ASSET_CARD.data,
          ranking: 5
        }
      },
      {
        image: '/images/university-example-mentor.jpeg',
        variant: EAssetCardVariant.withIcons,
        data: {
          ...MOCK_ASSET_CARD.data,
          ranking: 5
        }
      },
      {
        image: '/images/blog-post-example-mentor.jpeg',
        variant: EAssetCardVariant.withIcons,
        data: {
          ...MOCK_ASSET_CARD.data,
          ranking: 5
        }
      }
    ]
  }
}
