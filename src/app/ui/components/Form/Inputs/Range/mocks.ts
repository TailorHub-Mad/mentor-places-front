import type { IInputRangeProps } from '@components/Form/Inputs/Range/InputRange'

export const RANGE_INPUT_MOCK: IInputRangeProps = {
  max: 10000,
  min: 1500,
  id: 'test',
  label: 'Precio anual en Euros',
  onChange: (type) => {
    console.log({ type })
  },
  selectedFilterValues: []
}
