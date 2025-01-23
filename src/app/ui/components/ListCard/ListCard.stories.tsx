import type { Meta, StoryObj } from '@storybook/react'
import ListCard from './ListCard'

const meta: Meta<typeof ListCard> = {
  component: ListCard,
  args: undefined,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ListCard>

export const FirstElement: Story = {
  args: {
    number: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu'
  }
}

export const SecondElement: Story = {
  args: {
    number: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu'
  }
}

export const ThirdElement: Story = {
  args: {
    number: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu'
  }
}

export const FourthElement: Story = {
  args: {
    number: 4,
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu'
  }
}

export const FifthElement: Story = {
  args: {
    number: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu'
  }
}
