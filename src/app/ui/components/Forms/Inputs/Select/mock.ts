import type { ISelectInputProps } from '@components/Forms/Inputs/Select/SelectInput'

export const SELECT_INPUT_MOCK: ISelectInputProps = {
  placeholder: 'Select an option',
  options: [
    {
      value: '1',
      label: 'Option 1'
    },
    {
      value: '2',
      label: 'This is a long option'
    },
    {
      value: '3',
      label: 'Another even longer option to test the layout'
    }
  ],
  onChange: (value: string | undefined): void => console.info('SelectInput selected with value: ', value)
}
