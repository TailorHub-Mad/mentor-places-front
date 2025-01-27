import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import PencilIcon from '@components/icons/Pencil'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: <>Primary</>
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: <>Secondary</>
  }
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    children: <PencilIcon />
  }
}
