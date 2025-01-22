import { useEffect, useState } from 'react'
import { cx } from '@utils/cx'

export const RangeBoxNumbers = ({
  className,
  onChangeMin,
  onChangeMax,
  rangeValue
}: {
  className?: string
  onChangeMin: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeMax: (event: React.ChangeEvent<HTMLInputElement>) => void
  rangeValue: number[]
}) => {
  // Local state for rangeValue
  const [localRangeValue, setLocalRangeValue] = useState<string[]>([rangeValue[0].toString(), rangeValue[1].toString()])

  // Synchronize local state with incoming props
  useEffect(() => {
    setLocalRangeValue([rangeValue[0].toString(), rangeValue[1].toString()])
  }, [rangeValue])

  return (
    <div className={cx('w-full', className)}>
      <div className="flex justify-between gap-x-[6px]">
        <input
          disabled // TODO: Implement editing feature
          type="text"
          inputMode="decimal"
          value={localRangeValue[0]}
          onChange={onChangeMin}
          className={cx(
            'bg-GRAY text-BLACK/60 no-controls w-[121px] rounded-[8px] h-[40px] transition-all duration-300 ease-in-out text-center focus:outline-none'
          )}
        />
        <input
          disabled // TODO: Implement editing feature
          type="text"
          inputMode="decimal"
          value={localRangeValue[1]}
          onChange={onChangeMax}
          className={cx(
            'bg-GRAY text-BLACK/60 no-controls w-[121px] rounded-[8px] h-[40px] transition-all duration-300 ease-in-out text-center focus:outline-none'
          )}
        />
      </div>
    </div>
  )
}
