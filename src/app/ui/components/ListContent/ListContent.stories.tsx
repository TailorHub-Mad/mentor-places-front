import type { Meta, StoryObj } from '@storybook/react'
import ListContent from './ListContent'

const meta: Meta<typeof ListContent> = {
  component: ListContent,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ListContent>

export const ThreeItems: Story = {
  args: {
    list: [
      { title: 'Becas de mérito', description: 'Basadas en el rendimiento académico y profesional.' },
      { title: 'Becas de diversidad', description: 'Para promover la diversidad en el aula.' },
      { title: 'Becas de necesidad económica', description: 'Para estudiantes con limitaciones financieras.' }
    ]
  }
}

export const FiveItems: Story = {
  args: {
    list: [
      { title: 'Becas de mérito', description: 'Basadas en el rendimiento académico y profesional.' },
      { title: 'Becas de diversidad', description: 'Para promover la diversidad en el aula.' },
      { title: 'Becas de necesidad económica', description: 'Para estudiantes con limitaciones financieras.' },
      { title: 'Becas de mérito', description: 'Basadas en el rendimiento académico y profesional.' },
      { title: 'Becas de diversidad', description: 'Para promover la diversidad en el aula.' }
    ]
  }
}
