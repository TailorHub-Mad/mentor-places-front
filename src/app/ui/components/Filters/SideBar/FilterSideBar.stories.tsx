import type { Meta, StoryFn } from '@storybook/react'
import FilterSideBar from '@components/Filters/SideBar/FilterSideBar'
import { FILTER_SIDEBAR_MOCK } from '@components/Filters/SideBar/mock'
import type { IFilterSideBarProps } from '@interfaces/filterSidebar.interfaces'

const meta: Meta = {
  component: FilterSideBar,
  args: FILTER_SIDEBAR_MOCK,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

const Template: StoryFn<IFilterSideBarProps> = (args) => {
  return <FilterSideBar {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...FILTER_SIDEBAR_MOCK
}
