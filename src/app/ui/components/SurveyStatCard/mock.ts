import type { ISurveyStatCardProps } from '@components/SurveyStatCard/SurveyStatCard'

export const SURVEY_STAT_CARD_MOCK: ISurveyStatCardProps = {
  question: '¿Cuántos años de experiencia profesional tienes?',
  stats: [
    {
      label: '0-2 años',
      value: '78%'
    },
    {
      label: '3-5 años',
      value: '15%'
    },
    {
      label: '6-10 años',
      value: '7%'
    },
    {
      label: '+10 años',
      value: '0%'
    }
  ]
}
