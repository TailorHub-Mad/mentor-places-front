import NavSection from '@components/Navs/NavSection/NavSection'
import type { Meta, StoryObj } from '@storybook/react'
import { NAV_SECTION_MOCK } from '@components/Navs/NavSection/mock'

const meta: Meta<typeof NavSection> = {
  title: 'Components/Navigation/NavSection',
  component: NavSection,
  parameters: {
    locale: 'es'
  },
  args: NAV_SECTION_MOCK,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof NavSection>

export const Default: Story = {}
