export enum EFilterType {
  CHECKBOX = 'checkbox',
  DATE = 'date',
  PRICE = 'price'
}

interface IFilterValue {
  value: string | string[] | IFilterItem[]
}

export interface IFilterItem extends IFilterValue {
  title: string
  id: string
  type: EFilterType
  count?: number
}

interface IFilterCategory {
  title: string
  id: string
  filters: IFilterItem[]
}

export interface IFilterSelection extends IFilterValue {
  id: string
  label?: string
}

export interface IFilterSideBarProps {
  filterSelected: IFilterSelection[]
  onChange: (value: IFilterSelection) => void
  onClear: () => void
  filters: IFilterCategory[]
  defaultOpen?: string
}
