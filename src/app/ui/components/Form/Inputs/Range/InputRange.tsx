import { type FC } from 'react'
import MultiRangeSlider from '@components/Form/Inputs/Range/components/MultiRangeSlider'

import { type IFilterSelection } from '@interfaces/filterSidebar.interfaces'

export interface IInputRangeProps {
  id: string
  label?: string
  min?: number
  max?: number
  isOnModal?: boolean
  onChange: (value: IFilterSelection) => void
  selectedFilterValues?: IFilterSelection[]
}

const DEFAULT_MIN = 100
const DEFAULT_MAX = 10000

const InputRange: FC<IInputRangeProps> = ({
  id,
  isOnModal,
  selectedFilterValues,
  onChange,
  label,
  max = DEFAULT_MAX,
  min = DEFAULT_MIN
}) => {
  const rangeSelect = (selectedFilterValues?.find((f) => f.id === id)?.value as string[]) ?? [min, max]
  const rangeSelectToNumber =
    rangeSelect.length > 1 ? rangeSelect?.map((value) => Number(value)).filter((value) => !isNaN(value)) : [min, max]

  const handleSetRange = (value: string[]) => {
    onChange({
      value: value,
      id: 'price'
    })
  }

  return (
    <div className={`relative z-50 ${isOnModal ? 'max-w-full' : 'max-w-[269px]'}`}>
      {label && !isOnModal && (
        <div className="label-wrapper mb-2">
          <span className="font-s text-s text-BLACK/60">{label}</span>
        </div>
      )}
      <div className="flex flex-col relative items-center">
        <MultiRangeSlider range={rangeSelectToNumber} onChange={handleSetRange} />
      </div>
    </div>
  )
}

export default InputRange
