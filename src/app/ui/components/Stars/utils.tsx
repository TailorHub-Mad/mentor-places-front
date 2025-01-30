import EmptyStarIcon from '@components/icons/EmptyStarIcon'
import FullStarIcon from '@components/icons/FullStarIcon'
import HalfEmptyStarIcon from '@components/icons/HalfEmptyStarIcon'
import { type ReactNode } from 'react'

const MAX_STARS = 5

const generateFullStars = (count: number): JSX.Element[] => Array.from({ length: count }, (_, i) => <FullStarIcon key={i} />)

const generateHalfStar = (hasHalfStar: boolean, startKey: number): JSX.Element[] =>
  hasHalfStar ? [<HalfEmptyStarIcon key={startKey} />] : []

const generateEmptyStars = (count: number, startKey: number): JSX.Element[] =>
  Array.from({ length: count }, (_, i) => <EmptyStarIcon width={20} height={20} key={startKey + i} />)

export const getStars = (fullStars: number, decimalPart: number): ReactNode[] => {
  const fullStarElements = generateFullStars(fullStars)
  const halfStarElements = generateHalfStar(decimalPart > 0, fullStars)
  const emptyStarElements = generateEmptyStars(MAX_STARS - (fullStars + halfStarElements.length), fullStars + halfStarElements.length)
  return [...fullStarElements, ...halfStarElements, ...emptyStarElements]
}
