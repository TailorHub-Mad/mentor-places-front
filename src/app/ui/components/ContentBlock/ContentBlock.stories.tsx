import type { Meta, StoryObj } from '@storybook/react'
import ContentBlock from './ContentBlock'

const meta: Meta<typeof ContentBlock> = {
  component: ContentBlock,
  parameters: {
    locale: 'es'
  },
  args: {
    title: 'Todo lo que necesitas para tomar una buena decisión',
    text: 'Te ofrecemos información detallada de miles de títulos para que puedas tomar una decisión informada. Nuestro comparador te permitirá decantarte por uno u otro título.',
    cta: 'Comparar',
    action: 'compare'
  }
}

export default meta

type Story = StoryObj<typeof ContentBlock>

export const Light: Story = {
  args: {
    theme: 'light'
  }
}

export const Dark: Story = {
  args: {
    theme: 'dark'
  }
}
