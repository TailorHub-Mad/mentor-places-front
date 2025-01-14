import type { ISelectInputProps } from '@components/Forms/Inputs/Select/SelectInput'

export const SELECT_INPUT_MOCK: ISelectInputProps = {
  placeholder: 'Select',
  options: [
    {
      value: '1',
      label: 'Option 1'
    }
  ],
  onChange: (value: string): void => console.info('SelectInput selected with value: ', value)
}
