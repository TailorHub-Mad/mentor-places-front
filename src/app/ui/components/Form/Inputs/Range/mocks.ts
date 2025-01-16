import type { IInputRangeProps } from '@components/Form/Inputs/Range/CustomInputRange'

export const RANGE_INPUT_MOCK: IInputRangeProps = {
  max: 10000,
  min: 1500,
  filterType: 'test',
  label: 'Precio anual en Euros',
  onChange: (type, range) => {
    console.log({ type, range })
  },
  selectedFilterValues: {}
}
