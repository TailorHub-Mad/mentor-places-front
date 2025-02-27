import { EFilterType, type IFilterItem } from '@interfaces/filterSidebar.interfaces'
import { type DisciplinesQuery } from '../../../graphql/generated/client'
import { type ISelectOption } from '@components/Form/Inputs/Select/InputSelect'

type TDiscipline = { title: string; id: string; type: EFilterType; value: string; count: number; children?: TFilterDiscipline }

type TDisciplineMapper = { title: string; id: string; type: EFilterType; value: string; count: number; children?: TDisciplineMapper[] }

type TFilterDiscipline = { [key: string]: TDiscipline }
export const useDisciplinesMapper = (disciplines: DisciplinesQuery['main_taxonomy']): IFilterItem[] => {
  const filterDisciplines: TFilterDiscipline = {}

  for (const taxonomy of disciplines) {
    if (!taxonomy.discipline_visualization || !taxonomy.discipline?.id) continue

    const coursesCount = taxonomy.courses?.length ?? 0
    const disciplineId = taxonomy.discipline.id
    const disciplineName = taxonomy.discipline.taxonomy_trans?.[0]?.name ?? ''

    if (!filterDisciplines[disciplineId]) {
      filterDisciplines[disciplineId] = {
        title: disciplineName,
        id: disciplineId,
        type: EFilterType.CHECKBOX,
        value: disciplineName,
        count: coursesCount,
        children: {}
      }
    } else {
      filterDisciplines[disciplineId].count += coursesCount
    }

    if (taxonomy.specialization_level1_visualization && taxonomy.specialization_level1?.id) {
      const level1Id = taxonomy.specialization_level1.id
      const level1Name = taxonomy.specialization_level1.taxonomy_level1_trans?.[0]?.name ?? ''
      const disciplineChildren = filterDisciplines[disciplineId].children!

      if (!disciplineChildren[level1Id]) {
        disciplineChildren[level1Id] = {
          title: level1Name,
          id: level1Id,
          type: EFilterType.CHECKBOX,
          value: level1Name,
          count: coursesCount,
          children: {}
        }
      } else {
        disciplineChildren[level1Id].count += coursesCount
      }

      if (taxonomy.specialization_level2_visualization && taxonomy.specialization_level2?.id) {
        const level2Id = taxonomy.specialization_level2.id
        const level2Name = taxonomy.specialization_level2.taxonomy_level2_trans?.[0]?.name ?? ''
        const level1Children = disciplineChildren[level1Id].children!

        if (!level1Children[level2Id]) {
          level1Children[level2Id] = {
            title: level2Name,
            id: level2Id,
            type: EFilterType.CHECKBOX,
            value: level2Name,
            count: coursesCount
          }
        } else {
          level1Children[level2Id].count += coursesCount
        }
      }
    }
  }

  const transformChildren = (items: { [key: string]: TDiscipline }): TDisciplineMapper[] =>
    Object.values(items).map(({ children, ...rest }) => ({
      ...rest,
      children: children ? transformChildren(children) : []
    }))

  return transformChildren(filterDisciplines)
}

export const useDisciplinesSearch = (disciplines: IFilterItem[]) => {
  const searchDisciplines: ISelectOption[] = []

  const transformChildren = (items: IFilterItem[]) => {
    items.forEach(({ children, ...rest }) => {
      searchDisciplines.push({ label: rest.title, value: rest.id })
      if (children) transformChildren(children)
    })
  }
  transformChildren(disciplines)

  return searchDisciplines
}
