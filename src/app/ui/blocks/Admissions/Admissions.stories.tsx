import type { Meta, StoryObj } from '@storybook/react'
import Admissions from './Admissions'

const meta: Meta<typeof Admissions> = {
  component: Admissions,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof Admissions>

export const Default: Story = {
  args: {
    title: 'Admisiones',
    description:
      'Se requiere estar en posesión de un título de grado del EES o convalidado, de titulaciones afines. Para otros grados pueden ser necesarios complementos de formación.',
    start: { date: 'Sep-25', text: 'Inicio de curso' },
    application: { date: 'Mayo-25', text: 'Fecha limite aplicación' }
  }
}
