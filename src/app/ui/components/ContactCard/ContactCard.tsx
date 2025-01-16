'use client'

import Button from '@components/Button/Button'
import type { EColor } from '@theme/foundations/colors.foundations'
import type { FC } from 'react'

interface IContactCardProps {
  topText: string
  title: string
  button: string
  backgroundColor: EColor
}

const ContactCard: FC<IContactCardProps> = ({ topText, title, button, backgroundColor }) => {
  const handleOnClick = () => {
    // TODO
  }

  return (
    <div
      className="px-6 py-12 rounded-lg min-h-[595px] lg:flex flex-col justify-between items-start lg:px-7 py-13 lg:min-h-[472px]"
      style={{ backgroundColor }}>
      <div>
        <p className="text-s">{topText}</p>
        <p className="text-xl-mobile font-xl-mobile mt-7">{title}</p>
      </div>
      <Button className="mt-6" onClick={handleOnClick}>
        {button}
      </Button>
    </div>
  )
}

export default ContactCard
