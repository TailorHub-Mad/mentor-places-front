import type { TMuralCard } from '@components/MuralCard/MuralCard'
import MuralCard from '@components/MuralCard/MuralCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import { type FC } from 'react'
import type { IMuralProps } from '../Mural'
import { chunkData } from '@utils/chunkData.utils'

const MuralMobile: FC<IMuralProps> = ({ data }) => {
  const slides = chunkData<TMuralCard>(data, 2)

  return (
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
  )
}

export default MuralMobile
