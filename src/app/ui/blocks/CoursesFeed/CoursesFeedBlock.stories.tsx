import type { Meta, StoryFn } from '@storybook/react'
import CoursesFeedBlock, { type ICoursesFeedBlockProps } from './CoursesFeedBlock'
import { COURSES_FEED_BLOCK_MOCK } from './mock'
import { useState } from 'react'
import type { ESortDirection } from '../../../lib/enums/globals.enums'

const meta: Meta = {
  component: CoursesFeedBlock,
  args: COURSES_FEED_BLOCK_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

const Template: StoryFn<ICoursesFeedBlockProps> = (args) => {
  const [page, setPage] = useState(args.page)
  const [sortSetting, setSortSetting] = useState({
    option: args.sortOption,
    order: args.sortOrder
  })

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handleSortChange = ({ sort, order }: { sort: string; order: ESortDirection }) => {
    setSortSetting({
      option: sort,
      order
    })
  }

  return (
    <CoursesFeedBlock
      {...args}
      handlePageChange={handlePageChange}
      page={page}
      sortOption={sortSetting.option}
      sortOrder={sortSetting.order}
      handleSortChange={handleSortChange}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
