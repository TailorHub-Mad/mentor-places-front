import { type FC } from 'react'

interface IListCardProps {
  number: number
  text: string
}

/**
 * Returns a value based on the input number 'n'.
 * - If n is 1, return 1.0.
 * - If n is 2, return 0.8.
 * - Each subsequent number decreases the returned value by 0.2.
 * - If the result goes below zero, return 0.
 */
const calculateOpacity = (n: number): number => {
  const value = 1.0 - (n - 1) * 0.2
  return Math.max(value, 0)
}

const ListCard: FC<IListCardProps> = ({ number, text }) => {
  const listNumber = number < 10 ? number.toString().padStart(2, '0') : number

  return (
    <li
      className="rounded-lg  list-none p-7 flex items-start  md:items-center gap-16"
      style={{ backgroundColor: `rgba(217, 228, 255, ${calculateOpacity(number)})` }}>
      <p className="xl">{listNumber}.</p>
      <p className="s text-BLACK/60">{text}</p>
    </li>
  )
}

export default ListCard
