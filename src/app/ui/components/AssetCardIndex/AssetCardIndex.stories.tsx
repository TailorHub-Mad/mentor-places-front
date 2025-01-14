import AssetCardIndex from '@components/AssetCardIndex/AssetCardIndex'
import type { Meta, StoryObj } from '@storybook/react'
import { ASSET_CARD_INDEX_MOCK } from '@components/AssetCardIndex/mock'

const meta: Meta<typeof AssetCardIndex> = {
  title: 'Components/Cards/AssetCardIndex',
  component: AssetCardIndex,
  args: undefined,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof AssetCardIndex>

export const Default: Story = {
  args: ASSET_CARD_INDEX_MOCK
}

export const IsOnFavPage: Story = {
  args: {
    ...ASSET_CARD_INDEX_MOCK,
    isOnFavPage: true
  }
}

export const IsOnComparePage: Story = {
  args: {
    ...ASSET_CARD_INDEX_MOCK,
    isOnComparePage: true
  }
}
