import type { Meta, StoryObj } from '@storybook/react'
import UserFavorites from './UserFavorites'
import { ASSET_CARD_INDEX_MOCK } from '@components/AssetCardIndex/mock'

const meta: Meta<typeof UserFavorites> = {
  component: UserFavorites,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof UserFavorites>

export const Default: Story = {
  args: {
    title: 'Favoritos',
    items: [
      ASSET_CARD_INDEX_MOCK,
      ASSET_CARD_INDEX_MOCK,
      ASSET_CARD_INDEX_MOCK,
      ASSET_CARD_INDEX_MOCK,
      ASSET_CARD_INDEX_MOCK,
      ASSET_CARD_INDEX_MOCK,
      ASSET_CARD_INDEX_MOCK
    ]
  }
}
