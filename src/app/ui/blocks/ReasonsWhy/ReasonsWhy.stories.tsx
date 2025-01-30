import type { Meta, StoryObj } from '@storybook/react'
import ReasonsWhy from './ReasonsWhy'

const meta: Meta<typeof ReasonsWhy> = {
  component: ReasonsWhy,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ReasonsWhy>

export const Default: Story = {
  args: {
    title: '¿Por qué elegir este máster?',
    cards: [
      {
        title: 'Conocimientos',
        infoHeaderTitle: '1.',
        description: 'actualizados con certificaciones en soft skills y metodologías ágiles'
      },
      {
        title: 'Colaboración',
        infoHeaderTitle: '2.',
        description: 'con agencias de publicidad y marketing líderes'
      },
      {
        title: 'Aprendizaje',
        infoHeaderTitle: '3.',
        description: 'de herramientas de software especializado en marketing digital'
      }
    ]
  }
}
