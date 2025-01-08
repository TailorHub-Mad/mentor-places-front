import { Meta, StoryObj } from '@storybook/react'
import ContentTag from '@components/ContentTag/ContentTag'

const meta: Meta<typeof ContentTag> = {
  component: ContentTag,
  args: undefined,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ContentTag>

export const ButtonTag: Story = {
  args: {
    title: 'Presencial',
    href: '#title-on-same-page'
  }
}

export const ButtonTagDisabled: Story = {
  args: {
    title: 'Presencial',
    href: '#title-on-same-page',
    disabled: true
  }
}

export const InfoTag: Story = {
  args: {
    title: 'Descuentos (5%)'
  }
}
export const InfoTagLongText: Story = {
  args: {
    title: 'Top 5 Marketing Digital Online'
  }
}

export const InfoTagLongTextDisabled: Story = {
  args: {
    title: 'Top 5 Marketing Digital Online',
    disabled: true
  }
}
