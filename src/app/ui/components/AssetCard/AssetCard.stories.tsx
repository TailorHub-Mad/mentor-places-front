import type { Meta, StoryObj } from '@storybook/react'
import { AssetCard, AssetCardVariant } from '@components/AssetCard/AssetCard'
import { MOCK_ASSET_CARD, MOCK_ASSET_IMAGE_SRC } from '@components/AssetCard/mock'

const meta: Meta<typeof AssetCard> = {
  component: AssetCard,
  args: MOCK_ASSET_CARD,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof AssetCard>

export const WithIcons: Story = {
  args: {
    variant: AssetCardVariant.withIcons,
    data: MOCK_ASSET_CARD.data
  }
}

export const WithIconsAndImage: Story = {
  args: {
    variant: AssetCardVariant.withIcons,
    data: {
      ...MOCK_ASSET_CARD.data,
      imageSrc: MOCK_ASSET_IMAGE_SRC
    }
  }
}

export const WithoutIcons: Story = {
  args: {
    variant: AssetCardVariant.withoutIcons,
    data: MOCK_ASSET_CARD.data
  }
}
