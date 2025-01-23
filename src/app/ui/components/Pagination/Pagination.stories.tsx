import type { Meta } from '@storybook/react'
import Pagination from '@components/Pagination/Pagination'
import { Template } from '@components/Pagination/Template'

const meta: Meta = {
  component: Pagination,
  tags: ['autodocs'],
  args: undefined,
  parameters: {
    locale: 'es'
  }
}

export default meta

// Default story using the Template
export const Default = Template.bind({}) // Reuse the Template
Default.args = {
  totalPages: 10 // Template args (static values)
}
