import EmptyStarIcon from '@components/icons/EmptyStarIcon'
import FullStarIcon from '@components/icons/FullStarIcon'
import HalfEmptyStarIcon from '@components/icons/HalfEmptyStarIcon'

export const getStars = (whole: number, decimal: number) => {
  const stars: JSX.Element[] = []

  for (let i = 0; i < whole; i++) {
    stars.push(<FullStarIcon key={i} />)
  }

  if (decimal > 0) {
    stars.push(<HalfEmptyStarIcon key={whole} />)
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<EmptyStarIcon width={20} height={20} key={i} />)
  }

  return stars
}
