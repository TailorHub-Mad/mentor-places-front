import { type IFaqAccordionProps } from '@components/FaqAccordion/FaqAccordion'

const FAQ_ACCORDION_ITEM_MOCK = {
  title: '¿Hago un máster universitario (oficial) o un máster de formación permanente (título propio)?',
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
  `
}

export const FAQ_ACCORDION_MOCK: IFaqAccordionProps = {
  items: [FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK]
}
