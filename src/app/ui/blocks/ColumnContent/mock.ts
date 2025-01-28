import type { IColumnContentProps } from './ColumnContent'

const RICH_TEXT_MOCK = `
      <div>
       <p>
        This is a <strong>rich text</strong> example. You can include various
        <em>HTML elements</em> like:
      </p>
       <p>
       El <strong>máster en marketing digital online de la Universidad Alfonso X el Sabio</strong> ofrece una formación integral en estrategias digitales, analítica y redes sociales. Con un enfoque práctico, permite desarrollar habilidades para gestionar campañas y optimizar resultados. Además, cuenta con más de.
      </p>
      <p>El máster en marketing digital online de la Universidad Alfonso X el Sabio ofrece una formación integral en estrategias digitales, analítica y redes sociales. Con un enfoque práctico, permite desarrollar habilidades para gestionar campañas y optimizar resultados.</p>
      <ul>
        <li>9 meses</li>
        <li>Online o presencial</li>
        <li>25 de agosto</li>
        <li><a href="https://www.google.com/">Ejemplo de link</a></li>
      </ul>
      <p>
        El máster en marketing digital online de la Universidad Alfonso X el Sabio ofrece una formación integral en estrategias digitales, analítica y redes sociales. Con un enfoque práctico, permite desarrollar habilidades para gestionar campañas y optimizar resultados.
      </p>
    </div>
  `

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
