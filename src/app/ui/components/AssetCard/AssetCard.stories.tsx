import type { Meta, StoryObj } from '@storybook/react'
import AssetCard, { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { MOCK_ASSET_CARD, MOCK_ASSET_HERO_CARD, MOCK_ASSET_IMAGE_SRC } from '@components/AssetCard/mock'

const meta: Meta<typeof AssetCard> = {
  title: 'Components/Cards/AssetCard',
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
    variant: EAssetCardVariant.withIcons,
    data: MOCK_ASSET_CARD.data
  }
}

export const WithIconsAndRanking: Story = {
  args: {
    variant: EAssetCardVariant.withIcons,
    data: {
      ...MOCK_ASSET_CARD.data,
      ranking: 5
    }
  }
}

export const WithIconsAndImage: Story = {
  args: {
    variant: EAssetCardVariant.withIcons,
    data: {
      ...MOCK_ASSET_CARD.data,
      imageSrc: MOCK_ASSET_IMAGE_SRC
    }
  }
}

export const WithoutIcons: Story = {
  args: {
    variant: EAssetCardVariant.withoutIcons,
    data: MOCK_ASSET_CARD.data
  }
}

export const Hero: Story = {
  args: {
    variant: EAssetCardVariant.hero,
    data: {
      ...MOCK_ASSET_HERO_CARD.data,
      ranking: 5
    }
  }
}
