'use client'

import { type FC, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ESortDirection } from '../../../../lib/enums/globals.enums'
import { useDropdownState } from '@hooks/useDropdownState'
import SelectSearchDropdown from '@components/Form/Inputs/Select/components/SelectDropdownPortal/SelectDropdownPortal'
import OptionList from '@components/Form/Inputs/Select/components/OptionList/OptionList'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'
import SelectButton from '@components/Form/Inputs/Select/components/SelectButton/SelectButton'
import { useOverflowDetection } from '@hooks/useOverflowDetection'
import ArrowUp from '@components/icons/ArrowUp'
import { cx } from '@utils/cx'
import { useTranslations } from 'next-intl'

const SortSelectTrigger: FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = useTranslations()

  const selectedSortQuery = searchParams.get('sort') || 'recommended'
  const orderQuery = (searchParams.get('order') as ESortDirection) || ESortDirection.ASC

  const [selectedSort, setSelectedSort] = useState<string>(selectedSortQuery)
  const [order, setOrder] = useState<ESortDirection>(orderQuery)

  const sortOptions: ISelectOption[] = [
    {
      value: 'recommended',
      label: t('filters.recommended')
    },
    {
      value: 'date',
      label: t('filters.date')
    },
    {
      value: 'title',
      label: t('filters.title')
    }
  ]

  const { isOverflowing, parentRef, spanRef } = useOverflowDetection(selectedSort as string, selectedSort)
  const { isOpen, toggle, targetRef, selectInputRef } = useDropdownState()

  const updateQueryParams = (newSort: string, newOrder: ESortDirection) => {
    const params = new URLSearchParams(searchParams as never)
    params.set('sort', newSort)
    params.set('order', newOrder)
    router.push(`?${params.toString()}`)
  }

  const handleSetInputValue = (option: ISelectOption) => {
    setSelectedSort(option.value)
    updateQueryParams(option.value, order)
    toggle()
  }

  const handleSortOrder = () => {
    const newOrder = order === ESortDirection.ASC ? ESortDirection.DESC : ESortDirection.ASC
    setOrder(newOrder)
    updateQueryParams(selectedSort, newOrder)
  }

  const renderSortButton = () => {
    const isAsc = order === ESortDirection.ASC
    return (
      <button onClick={handleSortOrder}>
        <ArrowUp
          className={cx({
            'rotate-180': isAsc
          })}
        />
      </button>
    )
  }

  const labelValueSelected = sortOptions.find((option) => option.value === selectedSort)?.label || selectedSort

  return (
    <>
      <div className="flex items-center justify-between w-min">
        <SelectButton
          ref={targetRef}
          disabled={false}
          isOpen={isOpen}
          isOverflowing={isOverflowing}
          placeholder={''}
          label={labelValueSelected}
          onClick={toggle}
          parentRef={parentRef}
          spanRef={spanRef}
          isSelectInput={false}
        />
        {renderSortButton()}
      </div>
      {sortOptions?.length > 0 && (
        <SelectSearchDropdown
          className={'px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px] z-50'}
          targetRef={targetRef}
          isVisible={isOpen}>
          <OptionList options={sortOptions} selectedValue={selectedSort} onSelect={handleSetInputValue} ref={selectInputRef} />
        </SelectSearchDropdown>
      )}
    </>
  )
}

export default SortSelectTrigger
