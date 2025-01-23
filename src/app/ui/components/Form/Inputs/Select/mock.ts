import type { ISelectInputProps, ISelectOption } from '@components/Form/Inputs/Select/InputSelect'
import { v4 as uuidv4 } from 'uuid'
import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'

export const createLongOptionMock = (): ISelectOption => ({
  value: uuidv4(),
  label: 'This is a long option to test the layout'
})

export const createOptionMock = (): ISelectOption => ({
  value: uuidv4(),
  label: 'Option selected'
})

export const SELECT_INPUT_MOCK: ISelectInputProps = {
  placeholder: 'Select an option',
  options: [createOptionMock(), createOptionMock(), createLongOptionMock()],
  onChange: (value: IFilterSelection): void => console.info('InputSelect selected with value: ', value)
}

export const LONG_OPTIONS_LIST_MOCK: ISelectInputProps = {
  ...SELECT_INPUT_MOCK,
  options: [
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock(),
    createOptionMock()
  ]
}
