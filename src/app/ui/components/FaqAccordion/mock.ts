import { type IFaqAccordionProps } from '@components/FaqAccordion/FaqAccordion'

const FAQ_ACCORDION_ITEM_MOCK = {
  title: '¿Hago un máster universitario (oficial) o un máster de formación permanente (título propio)?',
  content:
    '<div>\n  <h1>Lorem Ipsum</h1>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </p>\n  <p>\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  </p>\n</div>'
}

export const FAQ_ACCORDION_MOCK: IFaqAccordionProps = {
  items: [FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK, FAQ_ACCORDION_ITEM_MOCK]
}
