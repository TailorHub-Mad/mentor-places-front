'use client'

import { useState, type FC } from 'react'
import type { CoursesInstitutionFragment } from '../../../../graphql/generated/client'
import StringToRichText from '@components/StringToRichText/StringToRichText'
import ShowMoreButton from '@components/ShowMoreButton'
import Button from '@components/Button/Button'
import { useTranslations } from 'next-intl'

interface IUniversityInfoProps {
  institutions: CoursesInstitutionFragment['institutions']
}

const UniversityInfo: FC<IUniversityInfoProps> = ({ institutions }) => {
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const institution = institutions?.[0]?.institution_id
  const institutionTrans = institution?.institutions_trans?.[0]

  if (!institutionTrans) return null

  const { commercial_name, intro, description, header_details } = institutionTrans
  if (!commercial_name || !intro || !header_details) return null

  return (
    <div>
      <div className="flex flex-col gap-7 md:gap-[118px] md:flex-row">
        <div>
          <h3 className="text-m font-m md:text-xl-mobile md:font-xl">{commercial_name}</h3>
          <Button href={`/${institution.id}`} className="mt-7">
            {t('contactBanner.button')}
          </Button>
        </div>
        <div>
          {!isExpanded && <StringToRichText text={intro} />}
          {description && (
            <>
              {isExpanded && <StringToRichText text={description} />}
              <ShowMoreButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-7 mt-10 md:mt-[96px]">
        {header_details.map((elm: { number: number; description: string }) => {
          return (
            <div className="flex-1" key={elm.description}>
              <p className="m md:text-xl-mobile md:font-xl">{elm.number}</p>
              <hr className="mt-4" />
              <p className="s md:text-m md: font-m mt-4">{elm.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UniversityInfo
