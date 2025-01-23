'use client'

import type { Dispatch, SetStateAction, FC } from 'react'
import Button from '@components/Button/Button'
import { useTranslations } from 'next-intl'

interface IShowMoreButtonProps {
  isExpanded: boolean
  setIsExpanded: Dispatch<SetStateAction<boolean>>
}

const ShowMoreButton: FC<IShowMoreButtonProps> = ({ isExpanded, setIsExpanded }) => {
  const t = useTranslations()

  return (
    <Button variant="text" onClick={() => setIsExpanded(!isExpanded)} className="mt-4 text-[#666666] underline">
      {isExpanded ? t('actions.showLess') : t('actions.showMore')}
    </Button>
  )
}

export default ShowMoreButton
