import { EFilterType, type IFilterItem } from '@interfaces/filterSidebar.interfaces'
import { type DisciplinesQuery } from '../../../graphql/generated/client'

type TDiscipline = { title: string; id: string; type: EFilterType; value: string; count: number }

type TFilterDiscipline = { [key: string]: TDiscipline }

export const useDisciplinesMapper = (disciplines: DisciplinesQuery['main_taxonomy']): IFilterItem[] => {
  const filter_disciplines: TFilterDiscipline = {}
  // const filter_level1 = {}
  // const filter_level2 = {}

  disciplines.forEach((taxonomy) => {
    if (taxonomy.discipline_visualization && taxonomy.discipline?.id) {
      const disciplineId = taxonomy.discipline.id
      if (!filter_disciplines[disciplineId]) {
        filter_disciplines[disciplineId] = {
          title: taxonomy.discipline?.taxonomy_trans?.[0]?.name ?? '',
          id: disciplineId,
          type: EFilterType.CHECKBOX,
          value: disciplineId,
          count: taxonomy.courses?.length ?? 0
        }
      } else {
        filter_disciplines[disciplineId].count += taxonomy.courses?.length ?? 0
      }
    }
  })

  return Object.values(filter_disciplines)
}

// filters: [
//         {
//           title: 'Marketing Digital',
//           id: 'id_digital_marketing',
//           type: EFilterType.CHECKBOX,
//           value: 'id_digital_marketing',
//           count: 15
//         },
//         {
//           title: 'Diseño gráfico',
//           id: 'id_diseno_grafico',
//           type: EFilterType.CHECKBOX,
//           value: 'id_diseno_grafico',
//           count: 60
//         },
//         {
//           title: 'Administración',
//           id: 'id_administracion',
//           type: EFilterType.CHECKBOX,
//           value: 'id_administracion',
//           count: 40
//         },
//         {
//           title: 'Derecho',
//           id: 'id_derecho',
//           type: EFilterType.CHECKBOX,
//           value: 'id_derecho',
//           count: 15
//         }
//       ]

// {
//   "menu": "ES_master",
//   "specialization_level2": null,
//   "discipline": {
//       "id": "e2929329-ff7f-42d7-9276-b54e8e11874f",
//       "taxonomy_trans": [
//           {
//               "name": "Artes, Música y Diseño",
//               "id": "cd49f603-8607-4713-b9d4-6b08cdba0133"
//           }
//       ]
//   },
//   "specialization_level1": {
//       "id": "bfea534a-60e8-461a-a0ed-b31d27ccb6e6",
//       "taxonomy_level1_trans": [
//           {
//               "name": "Pedagogía"
//           }
//       ]
//   },
//   "discipline_visualization": true,
//   "specialization_level1_visualization": true,
//   "specialization_level2_visualization": false,
//   "courses": [
//       {
//           "courses_id": {
//               "id": "1",
//               "id_mp": "ES1256789",
//               "course_trans": [
//                   {
//                       "commercial_name": "Z Máster en Business Analytics, Inteligencia Artificial & Machine Learning"
//                   }
//               ]
//           }
//       }
//   ]
// },
