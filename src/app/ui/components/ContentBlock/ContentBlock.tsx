'use client'

import Button from '@components/Button/Button'
import useAction, { type TCTAAction } from '@hooks/useAction'
import { EColor } from '@theme/foundations/colors.foundations'
import { cx } from '@utils/cx'
import type { FC } from 'react'

export interface IContentBlockProps {
  theme: 'light' | 'dark'
  title: string
  text?: string
  cta?: string
  action?: TCTAAction
  href?: string
}

const ContentBlock: FC<IContentBlockProps & { className?: string }> = ({ theme, title, text, cta, action, className, href }) => {
  const handleOnClick = useAction(action)

  return (
    <div className={cx('flex flex-col', className)} style={{ color: theme === 'dark' ? EColor.BLACK : EColor.WHITE }}>
      <h2 className="text-l-mobile font-l lg:text-l">{title}</h2>
      <p className="text-s mt-4">{text}</p>
      {cta && (
        <div className="constructor mt-7">
          <Button variant={theme === 'dark' ? 'primary' : 'secondary'} onClick={handleOnClick} href={href}>
            {cta}
          </Button>
        </div>
      )}
    </div>
  )
}

export default ContentBlock
