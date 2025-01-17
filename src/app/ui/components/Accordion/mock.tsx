import type { IAccordionItem, IAccordionItemsProps } from '@components/Accordion/AccordionItems'

const CHILDREN_MOCK = (
  <div>
    <h1>Lorem Ipsum Title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a metus ac lectus dictum eleifend.</p>

    <h2>A Subheading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel odio nec mi sagittis tincidunt.</p>
  </div>
)

const ACCORDION_ITEM_MOCK: IAccordionItem = {
  title: 'Fecha de inicio',
  children: CHILDREN_MOCK
}

export const ACCORDION_ITEMS_MOCK: IAccordionItemsProps = {
  accordionItems: [ACCORDION_ITEM_MOCK, ACCORDION_ITEM_MOCK, ACCORDION_ITEM_MOCK, ACCORDION_ITEM_MOCK],
  firstItemOpen: true
}
