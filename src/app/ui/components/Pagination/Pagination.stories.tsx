import type { Meta, StoryFn } from '@storybook/react'
import Pagination, { type IPaginationProps } from '@components/Pagination/Pagination'
import { useState } from 'react'

const meta: Meta = {
  component: Pagination,
  tags: ['autodocs'],
  args: undefined,
  parameters: {
    locale: 'es'
  }
}

export default meta

const Template: StoryFn<IPaginationProps> = (args) => {
  const [page, setPage] = useState(args.page)

  const handleOnChange = (page: number) => {
    setPage(page)
  }

  return <Pagination {...args} page={page} onChange={handleOnChange} />
}

export const Default = Template.bind({}) // Reuse the Template
Default.args = {
  totalPages: 10
}

export const LongPagination = Template.bind({}) // Reuse the Template
LongPagination.args = {
  totalPages: 40
}
