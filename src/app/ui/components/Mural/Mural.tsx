'use client'

import type { TMuralCard } from '@components/MuralCard/MuralCard'
import useBreakpoint from '@hooks/useBreakpoint'
import { type FC } from 'react'
import MuralMobile from './components/MuralMobile'
import MuralDesktop from './components/MuralDesktop'

export interface IMuralProps {
  data: TMuralCard[]
}

export interface IMuralSectionProps extends IMuralProps {
  title: string
}

const Mural: FC<IMuralSectionProps> = ({ title, data }) => {
  const { isMobile, isVerticalTablet } = useBreakpoint()

  return (
    <section>
      <h2 className="text-l-mobile font-l-mobile md:text-l md:font-l mb-10">{title}</h2>
      {isMobile || isVerticalTablet ? <MuralMobile data={data} /> : <MuralDesktop data={data} />}
    </section>
  )
}

export default Mural
