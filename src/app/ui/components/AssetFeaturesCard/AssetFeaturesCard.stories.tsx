import type { Meta, StoryObj } from '@storybook/react'
import AssetFeaturesCard from '@components/AssetFeaturesCard/AssetFeaturesCard'
import {
  ASSET_FEATURES_CARD_HTML_DESCRIPTION_MOCK,
  ASSET_FEATURES_CARD_ICON_MOCK,
  ASSET_FEATURES_CARD_TITLE_MOCK
} from '@components/AssetFeaturesCard/mock'

const meta: Meta<typeof AssetFeaturesCard> = {
  title: 'Components/Cards/AssetFeaturesCard',
  component: AssetFeaturesCard,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof AssetFeaturesCard>

export const CardWithTitle: Story = {
  args: ASSET_FEATURES_CARD_TITLE_MOCK
}

export const CardWithIcon: Story = {
  args: ASSET_FEATURES_CARD_ICON_MOCK
}

export const CardWithScapendHtmlDescription: Story = {
  args: ASSET_FEATURES_CARD_HTML_DESCRIPTION_MOCK
}
