import type { IFilterInputCheckboxProps } from '@components/Filters/FilterItems/FilterInputCheckbox/FilterInputCheckbox'
import { v4 as uuid4 } from 'uuid'

export const FILTER_INPUT_CHECKBOX_MOCKS: IFilterInputCheckboxProps = {
  id: uuid4(),
  label: 'Diseño gráfico',
  checked: false,
  onChange: function (): void {
    console.log('Function not implemented.')
  },
  count: 30
}
