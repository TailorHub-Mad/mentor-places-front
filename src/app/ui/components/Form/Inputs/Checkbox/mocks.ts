import type { IInputCheckboxProps } from '@components/Form/Inputs/Checkbox/InputCheckbox'
import { v4 as uuid4 } from 'uuid'

export const FILTER_INPUT_CHECKBOX_MOCKS: IInputCheckboxProps = {
  id: uuid4(),
  label: 'Diseño gráfico',
  checked: false,
  onChange: function (): void {
    console.log('Function not implemented.')
  },
  count: 30
}
