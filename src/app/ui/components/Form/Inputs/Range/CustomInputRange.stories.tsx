import type { Meta, StoryObj } from '@storybook/react'
import CustomInputRange from './CustomInputRange'
import { RANGE_INPUT_MOCK } from '@components/Form/Inputs/Range/mocks'

const meta: Meta<typeof CustomInputRange> = {
  component: CustomInputRange,
  args: RANGE_INPUT_MOCK,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CustomInputRange>

export const Default: Story = {}
