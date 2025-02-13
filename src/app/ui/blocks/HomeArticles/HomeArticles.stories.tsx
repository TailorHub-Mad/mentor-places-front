import type { Meta, StoryObj } from '@storybook/react'
import HomeArticles from './HomeArticles'

const meta: Meta<typeof HomeArticles> = {
  component: HomeArticles,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof HomeArticles>

export const Default: Story = {
  args: {
    title: 'Artículos destacados',
    items: [
      {
        title: 'Blog post title 1',
        description: 'Ofrecer comparativas entre universidades, teniendo en cuenta una serie de variables para',
        date: '23/10/2024'
      },
      {
        title: 'Blog post title 2',
        description: 'Ofrecer comparativas entre universidades, teniendo en cuenta una serie de variables para',
        date: '23/10/2024'
      },
      {
        title: 'Blog post title 3',
        description: 'Ofrecer comparativas entre universidades, teniendo en cuenta una serie de variables para',
        date: '23/10/2024'
      }
    ]
  }
}
