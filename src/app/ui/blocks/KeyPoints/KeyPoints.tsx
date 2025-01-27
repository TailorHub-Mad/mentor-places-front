import ListCard from '@components/ListCard/ListCard'
import type { FC } from 'react'

interface IKeyPointsProps {
  title: string
  list: string[]
}

const KeyPoints: FC<IKeyPointsProps> = ({ title, list }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between font-l-mobile text-l-mobile md:text-l md:font-l gap-14">
      <p>{title}</p>
      <div className="flex flex-col gap-6">
        {list.map((elm, idx) => {
          return <ListCard key={elm} text={elm} number={idx + 1} />
        })}
      </div>
    </div>
  )
}

export default KeyPoints
