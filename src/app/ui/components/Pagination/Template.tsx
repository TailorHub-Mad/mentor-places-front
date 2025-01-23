import type { StoryFn } from '@storybook/react'
import Pagination, { type IPaginationProps } from '@components/Pagination/Pagination'
import { useState } from 'react'

export const Template: StoryFn<IPaginationProps> = (args) => {
  const [page, setPage] = useState(1) // Manage state here

  const handleOnChange = (page: number) => {
    setPage(page)
  }

  return (
    <Pagination
      {...args} // Spread any additional props passed to the template
      page={page} // Use state for page
      onChange={handleOnChange} // Update state on change
    />
  )
}
