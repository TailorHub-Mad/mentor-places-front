import type { Meta, StoryObj } from '@storybook/react'
import InputRange from './InputRange'
import { RANGE_INPUT_MOCK } from '@components/Form/Inputs/Range/mocks'

const meta: Meta<typeof InputRange> = {
  component: InputRange,
  args: RANGE_INPUT_MOCK,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputRange>

export const Default: Story = {}
