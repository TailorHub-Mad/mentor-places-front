import type { Meta, StoryObj } from '@storybook/react'
import About from './About'
import { STATS_INFO_MOCK } from '@components/StatsInfo/mock'
import { STRING_TO_RICH_TEXT_MOCK } from '@components/StringToRichText/mock'

const meta: Meta<typeof About> = {
  component: About,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof About>

export const Default: Story = {
  args: {
    title: 'Acerca de',
    intro:
      'La Universidad Alfonso X el Sabio (UAX) es una institución educativa privada ubicada en Madrid, destacada por su enfoque práctico y por ofrecer una formación de calidad orientada a las necesidades del mercado laboral. Con más de 25 años de historia, se caracteriza por su amplia oferta académica que abarca grados, másteres y programas de doctorado en diversas áreas como la salud, la ingeniería, las ciencias sociales y las artes. Además, destaca por su infraestructura moderna, como sus laboratorios, clínicas y aulas equipadas con tecnología avanzada. UAX también pone énfasis en el desarrollo de habilidades prácticas a través de convenios con empresas, prácticas profesionales y programas de internacionalización. Su modelo educativo se basa en la cercanía y el apoyo individualizado a los estudiantes, lo que facilita su integración al mundo laboral y su desarrollo personal.',
    description: STRING_TO_RICH_TEXT_MOCK,
    stats: STATS_INFO_MOCK.stats
  }
}
