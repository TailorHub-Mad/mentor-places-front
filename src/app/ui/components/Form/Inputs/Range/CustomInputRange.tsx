import { useEffect, useRef, useState } from 'react'
import { RangeBoxNumbers } from '@components/Form/Inputs/Range/components/RangeBoxNumbers'
import MultiRangeSlider from '@components/Form/Inputs/Range/components/MultiRangeSlider'

export type TFilterTypeProps = string // TODO: Define filter types

export interface IInputRangeProps {
  label?: string
  min?: number
  max?: number
  isOnModal?: boolean
  onChange: (type: TFilterTypeProps, range: [number, number]) => void
  selectedFilterValues: {
    [key: TFilterTypeProps]: {
      range: [number, number]
    }
  }
  filterType: TFilterTypeProps
}

const CustomInputRange = ({ isOnModal, selectedFilterValues, onChange, label, filterType, max, min }: IInputRangeProps) => {
  const [range, setRange] = useState({
    min: min ?? 0,
    max: max ?? 0
  })
  const [isChanging, setIsChanging] = useState(false)
  const hasChangedRef = useRef(false)

  useEffect(() => {
    const hasChanged = hasChangedRef.current

    if (!isChanging && hasChanged) {
      onChange(filterType, [range.min ?? 0, range.max ?? 0])
    } else {
      if (!hasChanged) hasChangedRef.current = true
    }
  }, [isChanging])

  const [selectedMin, selectedMax] = selectedFilterValues[filterType]?.range ?? [min, max]

  useEffect(() => {
    if (selectedMin && selectedMax) setRange({ min: selectedMin, max: selectedMax })
    else
      setRange({
        min: min ?? 0,
        max: max ?? 0
      })
  }, [selectedMin, selectedMax, min, max])

  const handleSetIsChanging = (isChanging: boolean) => {
    setIsChanging(isChanging)
  }

  return (
    <div className="relative z-50 max-w-[269px]">
      {label && !isOnModal && (
        <div className="label-wrapper mb-2">
          <span className="font-s text-s text-BLACK/60">{label}</span>
        </div>
      )}
      <div className="flex flex-col relative items-center">
        <RangeBoxNumbers className="mb-4" max={max ?? 0} min={min ?? 0} rangeValue={range} onChange={setRange} />
        <MultiRangeSlider onChange={setRange} max={max ?? 0} min={min ?? 0} setIsChanging={handleSetIsChanging} />
      </div>
    </div>
  )
}

export default CustomInputRange
