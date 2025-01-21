import type { ISelectInputProps, ISelectOption } from '@components/Forms/Inputs/Select/SelectInput'
import { v4 as uuidv4 } from 'uuid'

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
  onChange: (value: string | undefined): void => console.info('SelectInput selected with value: ', value)
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
