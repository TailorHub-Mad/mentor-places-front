import type { Meta, StoryObj } from '@storybook/react'
import HomePageBuilder from './HomePageBuilder'
import { HOME_PAGE_BUILDER_MOCK } from './mock'

const meta: Meta<typeof HomePageBuilder> = {
  component: HomePageBuilder,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof HomePageBuilder>

export const Default: Story = {
  args: {
    ...HOME_PAGE_BUILDER_MOCK
  }
}
