import type { FC } from 'react'

interface IRankingTagProps {
  ranking: number
}

const RankingTag: FC<IRankingTagProps> = ({ ranking }) => {
  return <span className="absolute -top-4 right-8 px-2.5 py-1 bg-BLUE text-WHITE font-m font-thin rounded-md">Top {ranking}</span>
}

export default RankingTag
