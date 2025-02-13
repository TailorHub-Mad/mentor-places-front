import type { Meta, StoryObj } from '@storybook/react'
import StudentProfile from './StudentProfile'

const meta: Meta<typeof StudentProfile> = {
  component: StudentProfile,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof StudentProfile>

export const Default: Story = {
  args: {
    profile: {
      __typename: 'profiles',
      content_title: 'Perfil estudiante',
      students: { title: 'Estudiantes curso', year: '(23/24)', value: 'N/D' },
      target: {
        title: 'Dirigido a',
        profile:
          'Profesionales y recién graduados en ADE, Marketing, Publicidad y RR.PP., Comunicación, Comunicación audiovisual, Economía, que tengan un interés demostrado por el marketing y las últimas tecnologías'
      },
      data: [
        {
          date: '2022/2023',
          source: 'SIIU',
          question: '¿Cuántos años de experiencia profesional tienes?',
          values: ['78%', '15%', '7%', '0%'],
          unit: ['0-2 años', '3-5 años', '6-10 años', '> 10 años']
        },
        {
          date: '2022/2023',
          source: 'University',
          question: 'Nacionalidad del estudiante',
          values: ['82%', '6%', '12%'],
          unit: ['española', 'Latam', 'otros']
        }
      ]
    }
  }
}
