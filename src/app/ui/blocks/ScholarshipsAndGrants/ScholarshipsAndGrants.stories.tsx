import type { Meta, StoryObj } from '@storybook/react'
import ScholarshipsAndGrants from './ScholarshipsAndGrants'
import { LIST_CONTENT_MOCK_LONG } from '@components/ListContent/mocks'

const meta: Meta<typeof ScholarshipsAndGrants> = {
  component: ScholarshipsAndGrants,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ScholarshipsAndGrants>

export const Default: Story = {
  args: {
    title: 'Becas y ayudas',
    list: LIST_CONTENT_MOCK_LONG
  }
}
