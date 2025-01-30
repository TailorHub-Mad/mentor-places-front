import type { IListContentItem } from '@components/ListContent/ListContent'
import ListContent from '@components/ListContent/ListContent'
import type { FC } from 'react'

interface IScholarshipsAndGrantsProps {
  title: string
  list: IListContentItem[]
}

const ScholarshipsAndGrants: FC<IScholarshipsAndGrantsProps> = ({ title, list }) => {
  return (
    <div className="flex flex-col gap-14 md:flex-row md:gap-[20%]">
      <h3 className="text-l-mobile font-l-mobile md:text-l md:font-l text-nowrap">{title}</h3>
      <ListContent list={list} />
    </div>
  )
}

export default ScholarshipsAndGrants
