'use client'

import Button from '@components/Button/Button'
import useAction, { TCTAAction } from '@hooks/useAction'
import type { FC } from 'react'

interface IBannerProps {
  text: string
  cta: string
  action: TCTAAction
}

const Banner: FC<IBannerProps> = ({ text, cta, action }) => {
  const handleOnClick = useAction(action)

  return (
    <div className="text-m-mobile font-m-mobile rounded-lg flex flex-col lg:flex-row justify-between items-start lg:items-center gap-24 bg-BLUE_LIGHT p-6">
      <p>{text}</p>
      <Button onClick={handleOnClick}>{cta}</Button>
    </div>
  )
}

export default Banner
