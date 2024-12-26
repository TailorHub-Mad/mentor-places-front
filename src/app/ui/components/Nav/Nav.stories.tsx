import type { Meta, StoryObj } from '@storybook/react'
import Nav from './Nav'
import { mock } from '@components/Nav/mock'

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen'
  },
  args: mock,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Nav>

export const Default: Story = {}

export const Customized: Story = {
  render: () => (
    <div className="bg-gray-50">
      <Nav />
    </div>
  )
}
