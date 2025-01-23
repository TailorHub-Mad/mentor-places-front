import type { Meta, StoryObj } from '@storybook/react'
import PersonalData from './PersonalData'

const meta: Meta<typeof PersonalData> = {
  component: PersonalData,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof PersonalData>

export const Dafault: Story = {
  args: {}
}
