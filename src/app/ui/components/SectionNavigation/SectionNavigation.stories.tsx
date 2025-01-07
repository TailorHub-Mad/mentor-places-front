import { SectionNavigation } from '@components/SectionNavigation/SectionNavigation'
import { Meta, StoryObj } from '@storybook/react'
import { SECTION_NAVIGATION_MOCK } from '@components/SectionNavigation/mock'

const meta: Meta<typeof SectionNavigation> = {
  component: SectionNavigation,
  parameters: {
    locale: 'es'
  },
  args: SECTION_NAVIGATION_MOCK,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof SectionNavigation>

export const Default: Story = {}
