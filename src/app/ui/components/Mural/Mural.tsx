import type { TMuralCard } from '@components/MuralCard/MuralCard'
import MuralCard from '@components/MuralCard/MuralCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import useBreakpoint from '@hooks/useBreakpoint'
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
  const { isMobile, isVerticalTablet } = useBreakpoint()

  const chunkData = (arr: TMuralCard[], size: number) => {
    const chunks: TMuralCard[][] = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  }

  const slides = chunkData(data, 2)

  return isMobile || isVerticalTablet ? (
    <CustomSwiper
      items={slides.map((slide, idx) => {
        return (
          <div className="flex flex-col gap-6" key={`mural-slide-${idx}`}>
            <MuralCard {...slide[0]} height={232} />
            <MuralCard {...slide[1]} height={325} />
          </div>
        )
      })}
      position={SwiperNavigationPosition.BOTTOM_CENTER}
    />
  ) : (
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
