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

export interface IFilterCategory {
  title: string
  id: string
  filters?: IFilterItem[]
}

export interface IFilterSelection extends IFilterValue {
  id: string
  label?: string
}

export interface IFilterSideBarProps {
  filters: IFilterCategory[]
  className?: string
}
