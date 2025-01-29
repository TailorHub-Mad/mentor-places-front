import type { Meta, StoryObj } from '@storybook/react'
import CoursesFeedBlock from './CoursesFeedBlock'
import { ASSET_CARD_INDEX_MOCK } from '@components/AssetCardIndex/mock'

const meta: Meta = {
  component: CoursesFeedBlock,
  args: undefined,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CoursesFeedBlock>

const assetCardArray = Array.from({ length: 5 }).map(() => ASSET_CARD_INDEX_MOCK)

export const Default: Story = {
  args: {
    courses: assetCardArray
  }
}
