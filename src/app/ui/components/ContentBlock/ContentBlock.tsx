'use client'

import Button from '@components/Button/Button'
import useAction, { type TCTAAction } from '@hooks/useAction'
import { EColor } from '@theme/foundations/colors.foundations'
import { cx } from '@utils/cx'
import type { FC } from 'react'

export interface IContentBlockProps {
  theme: 'light' | 'dark'
  title: string
  text: string
  cta: string
  action: TCTAAction
}

const ContentBlock: FC<IContentBlockProps & { className?: string }> = ({ theme, title, text, cta, action, className }) => {
  const handleOnClick = useAction(action)

  return (
    <div className={cx('lg:w-[30%]', className)} style={{ color: theme === 'dark' ? EColor.BLACK : EColor.WHITE }}>
      <p className="text-l-mobile font-l lg:text-l">{title}</p>
      <p className="text-s mt-4">{text}</p>
      <Button variant={theme === 'dark' ? 'primary' : 'secondary'} className="mt-7" onClick={handleOnClick}>
        {cta}
      </Button>
    </div>
  )
}

export default ContentBlock
