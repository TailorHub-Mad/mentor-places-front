import type { TMuralCard } from '@components/MuralCard/MuralCard'
import MuralCard from '@components/MuralCard/MuralCard'
import { type FC } from 'react'

const rowClasses = [
  'col-span-1 row-span-5 row-start-1',
  'col-span-1 row-span-4 row-start-1',
  'col-span-1 row-span-4 row-start-1',
  'col-span-1 row-span-4 row-start-1',
  'col-span-1 row-span-2 row-start-6',
  'col-span-1 row-span-3 row-start-5',
  'col-span-2 row-span-3 row-start-5'
]

interface IMural {
  data: TMuralCard[] // Developed for 7 items
}

const Mural: FC<IMural> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-7 gap-6 h-[762px]">
      {data.map((card, idx) => {
        return (
          <div className={rowClasses[idx]} key={`mural-card-${idx}`}>
            <MuralCard {...card} />
          </div>
        )
      })}
    </div>
  )
}

export default Mural
