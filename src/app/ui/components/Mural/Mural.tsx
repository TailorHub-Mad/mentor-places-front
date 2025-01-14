'use client'

import type { TMuralCard } from '@components/MuralCard/MuralCard'
import useBreakpoint from '@hooks/useBreakpoint'
import { type FC } from 'react'
import MuralMobile from './components/MuralMobile'
import MuralDesktop from './components/MuralDesktop'

export interface IMuralProps {
  data: TMuralCard[]
}

const Mural: FC<IMuralProps> = ({ data }) => {
  const { isMobile, isVerticalTablet } = useBreakpoint()

  return isMobile || isVerticalTablet ? <MuralMobile data={data} /> : <MuralDesktop data={data} />
}

export default Mural
