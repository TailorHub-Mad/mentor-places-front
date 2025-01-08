import type { Meta, StoryObj } from '@storybook/react'
import NavMain from './NavMain'
import { NAV_MAIN_MOCKS } from '@components/Navs/NavMain/mock'

const meta: Meta<typeof NavMain> = {
  title: 'Components/Navigation/NavMain',
  component: NavMain,
  parameters: {
    layout: 'fullscreen'
  },
  args: NAV_MAIN_MOCKS,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof NavMain>

export const Default: Story = {}

export const Customized: Story = {
  render: () => (
    <div className="bg-gray-50">
      <NavMain />
    </div>
  )
}
