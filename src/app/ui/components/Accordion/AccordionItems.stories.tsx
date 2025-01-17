import type { Meta, StoryObj } from '@storybook/react'
import AccordionItems from '@components/Accordion/AccordionItems'
import { ACCORDION_ITEMS_MOCK } from '@components/Accordion/mock'

const meta: Meta<typeof AccordionItems> = {
  component: AccordionItems,
  args: ACCORDION_ITEMS_MOCK,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof AccordionItems>

export const Default: Story = {}
