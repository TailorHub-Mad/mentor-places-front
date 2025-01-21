import { EFilterType, type IFilterSelection, type IFilterSideBarProps } from '@components/Filters/SideBar/FilterSideBar'

export const FILTER_SIDEBAR_MOCK: IFilterSideBarProps = {
  filterSelected: [],
  onChange: function (value: IFilterSelection): void {
    console.log({ value })
  },
  filters: [
    {
      title: 'Precio',
      id: 'price',
      filters: [
        {
          title: 'Menor a $100',
          id: 'price_100',
          type: EFilterType.PRICE,
          value: 'price_100',
          count: 15
        }
      ]
    },
    {
      title: 'Fecha de inicio',
      id: 'date',
      filters: [
        {
          title: 'Mes',
          id: 'month',
          type: EFilterType.DATE,
          value: ['']
        }
      ]
    },
    {
      title: 'Disciplina',
      id: 'id_disciplina',
      filters: [
        {
          title: 'Marketing Digital',
          id: 'id_digital_marketing',
          type: EFilterType.CHECKBOX,
          value: 'id_digital_marketing',
          count: 15
        },
        {
          title: 'Diseño gráfico',
          id: 'id_diseno_grafico',
          type: EFilterType.CHECKBOX,
          value: 'id_diseno_grafico',
          count: 60
        },
        {
          title: 'Administración',
          id: 'id_administracion',
          type: EFilterType.CHECKBOX,
          value: 'id_administracion',
          count: 40
        },
        {
          title: 'Derecho',
          id: 'id_derecho',
          type: EFilterType.CHECKBOX,
          value: 'id_derecho',
          count: 15
        }
      ]
    },
    {
      title: 'Marketing nested',
      id: 'id_marketing_nested',
      filters: [
        {
          title: 'Marketing Digital Nested',
          id: 'id_marketing_digital_nested',
          type: EFilterType.CHECKBOX,
          count: 15,
          value: [
            {
              title: 'Email marketing',
              id: 'id_email_marketing_nested',
              type: EFilterType.CHECKBOX,
              value: 'id_email_marketing_nested',
              count: 15
            },
            {
              title: 'Copywriting',
              id: 'id_copywriting_nested',
              type: EFilterType.CHECKBOX,
              value: 'id_copywriting_nested',
              count: 11
            },
            {
              title: 'Redes sociales',
              id: 'id_redes_sociales_nested',
              type: EFilterType.CHECKBOX,
              value: 'id_redes_sociales_nested',
              count: 25
            },
            {
              title: 'Posicionamiento web',
              id: 'id_posicionamiento_web_nested',
              type: EFilterType.CHECKBOX,
              value: 'id_posicionamiento_web_nested',
              count: 30
            }
          ]
        }
      ]
    }
  ]
}
