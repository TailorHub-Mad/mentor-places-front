import type { IColumnContentProps } from './ColumnContent'

const RICH_TEXT_MOCK =
  'Las salidas profesionales y puestos en los que podrás trabajar variarán en funciónd de tu experiencia profesional y el curso que finalmente realices. Por lo general un máster en Business Analytics, IA y Machine Learning te dará conocimientos para trabajar profesionalmente como:'

const LIST_MOCK = [
  { title: 'Becas de mérito', description: 'Basadas en el rendimiento académico y profesional.' },
  { title: 'Becas de diversidad', description: 'Para promover la diversidad en el aula.' },
  { title: 'Becas de necesidad económica', description: 'Para estudiantes con limitaciones financieras.' },
  { title: 'Becas de mérito', description: 'Basadas en el rendimiento académico y profesional.' },
  { title: 'Becas de diversidad', description: 'Para promover la diversidad en el aula.' }
]

export const COLUMN_CONTENT_LIST_MOCK: IColumnContentProps = {
  columnTitle: {
    theme: 'dark',
    title: 'Salidas profesionales'
  },
  columnContent: {
    richText: RICH_TEXT_MOCK,
    list: LIST_MOCK,
    maxLinesShown: 10
  }
}

export const COLUMN_CONTENT_RICH_TEXT_MOCK: IColumnContentProps = {
  columnTitle: {
    theme: 'dark',
    title: 'Salidas profesionales'
  },
  columnContent: {
    richText: RICH_TEXT_MOCK,
    maxLinesShown: 10
  }
}

export const COLUMN_CONTENT_LIST_MOCK_2: IColumnContentProps = {
  columnTitle: {
    theme: 'dark',
    title: 'Sobre el Master',
    text: 'Top 5 Másters Online en Marketing Digital',
    cta: 'Saber más',
    href: '/master/marketing-digital'
  },
  columnContent: {
    list: LIST_MOCK,
    maxLinesShown: 3
  }
}
