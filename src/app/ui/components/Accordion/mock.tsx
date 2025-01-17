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
      children: CHILDREN_MOCK
    },
    {
      title: 'Precio',
      children: CHILDREN_MOCK
    },
    {
      title: 'Duración',
      children: CHILDREN_MOCK
    },
    {
      title: 'Fecha de inicio',
      children: CHILDREN_MOCK
    }
  ],
  firstItemOpen: true
}
