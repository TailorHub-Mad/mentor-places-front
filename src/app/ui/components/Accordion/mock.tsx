import type { IAccordionItemsProps } from '@components/Accordion/AccordionItems'

const CHILDREN_MOCK = (
  <div>
    <h1>Lorem Ipsum Title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a metus ac lectus dictum eleifend.</p>

    <h2>A Subheading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel odio nec mi sagittis tincidunt.</p>
  </div>
)

export const ACCORDION_ITEMS_MOCK: IAccordionItemsProps = {
  accordionItems: [
    {
      title: 'Disciplina',
      id: 'id_disciplina',
      children: CHILDREN_MOCK
    },
    {
      title: 'Precio',
      id: 'id_precio',
      children: CHILDREN_MOCK
    },
    {
      title: 'Duración',
      id: 'id_duración',
      children: CHILDREN_MOCK
    },
    {
      title: 'Fecha de inicio',
      id: 'id_fecha',
      children: CHILDREN_MOCK
    }
  ]
  // firstItemOpen: true
}
