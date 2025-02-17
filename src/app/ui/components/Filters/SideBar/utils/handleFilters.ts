import type { IFilterCategory, IFilterSelection } from '@interfaces/filterSidebar.interfaces'

export const parseDateFilter = (params: URLSearchParams): IFilterSelection[] =>
  params.has('date')
    ? [
        {
          id: 'date',
          value: params.get('date')!.split(',')
        }
      ]
    : []

export const parsePriceFilter = (params: URLSearchParams): IFilterSelection[] =>
  params.has('price')
    ? [
        {
          id: 'price',
          value: params.get('price')!.split(',')
        }
      ]
    : []

export const parseCategoryFilters = (params: URLSearchParams, filters: IFilterCategory[]): IFilterSelection[] => {
  if (!params.has('cat')) return []
  return params
    .get('cat')!
    .split('|')
    .map((catFilter) => {
      const id = catFilter.split(':')[0]

      const nestedFilter = filters
        .flatMap((filter) => filter.filters || []) // Flatten all nested `filters` arrays
        .find((f) => f.id === id) // Find the one with a matching id

      return { id, value: nestedFilter?.title || id }
    })
}

export const updateFilter = (newFilter: IFilterSelection, currentFilters: IFilterSelection[] = []): IFilterSelection[] => {
  const FILTER_TYPES = ['date', 'price']
  const excludeFilters = (filters: IFilterSelection[], idPart: string) => filters.filter((filter) => !filter.id.includes(idPart))

  if (FILTER_TYPES.some((type) => newFilter.id.includes(type))) {
    return [...excludeFilters(currentFilters, newFilter.id), newFilter]
  }

  return currentFilters.some((filter) => filter.id === newFilter.id)
    ? currentFilters.filter((filter) => filter.id !== newFilter.id)
    : [...currentFilters, newFilter]
}

export const updateURLSearchParams = (filters: IFilterSelection[], memoizedSearchParams: string) => {
  const urlParams = new URLSearchParams(memoizedSearchParams)
  const categories: string[] = []

  filters.forEach((filter) => {
    if (filter.id === 'date' || filter.id === 'price') {
      urlParams.set(filter.id, Array.isArray(filter.value) ? filter.value.join(',') : String(filter.value))
    } else {
      categories.push(filter.id)
    }
  })

  if (categories.length > 0) {
    urlParams.set('cat', categories.join('|'))
  } else {
    urlParams.delete('cat')
  }

  return urlParams
}
