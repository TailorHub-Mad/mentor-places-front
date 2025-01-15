import type { Meta, StoryObj } from '@storybook/react'
import RichText from './RichText'

const meta: Meta<typeof RichText> = {
  component: RichText,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof RichText>

export const Default: Story = {
  args: {
    content: `
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
  `,
    maxLines: 7,
    width: '30%'
  }
}
