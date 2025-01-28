import type { Meta, StoryObj } from '@storybook/react'
import Banner from './Banner'

const meta: Meta<typeof Banner> = {
  component: Banner,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    text: 'Find out which Master’s programmes match your personality!',
    cta: 'Haz tu test GRATIS!',
    action: 'contact'
  }
}
