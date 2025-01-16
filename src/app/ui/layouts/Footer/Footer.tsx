'use client'

import { type FC } from 'react'
import { EColor } from '@theme/foundations/colors.foundations'
import Link from 'next/link'
import Logo from '@components/icons/Logo'
import LogoText from '@components/icons/LogoText'
import Button from '@components/Button/Button'
import ArrowUp from '@components/icons/ArrowUp'
import { useTranslations } from 'next-intl'
import useBreakpoint from '@hooks/useBreakpoint'
import useAction from '@hooks/useAction'

interface IFooterLink {
  label: string
  href: string
}

interface IFooterProps {
  menus: IFooterLink[][]
  contact: {
    phone: string
    email: string
  }
}

export const Footer: FC<IFooterProps> = ({ menus, contact }) => {
  const t = useTranslations()
  const handleBackToTop = useAction('scrollToTop')
  const handleMoreInfoClick = useAction('contact')

  const { isMobile, isVerticalTablet, isLandscapeTablet } = useBreakpoint()
  const { email, phone } = contact

  const logoSize = isMobile || isVerticalTablet ? '110vw' : '30vw'

  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="lg:min-h-[450px] overflow-hidden lg:flex lg:justify-center"
      style={{ marginTop: 50, backgroundColor: EColor.BLUE_LIGHT }}>
      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-between lg:min-h-[450px] max-w-[1440px]">
        <div className="p-6 lg:p-12 lg:max-w-[680px] flex flex-col justify-between">
          <div className="flex flex-col gap-6 lg:gap-12 xl:gap-20">
            <div className="flex flex-wrap gap-6 lg:gap-12 xl:gap-20">
              {menus.map((menu, menuIdx) => {
                return (
                  <div className="flex flex-col gap-2 w-32" key={`footer-menu-${menuIdx}`}>
                    {menu.map((link, linkIdx) => {
                      return (
                        <Link href={link.href} key={link.label}>
                          <p className="text-s" style={{ color: menuIdx === 0 && linkIdx === 0 ? EColor.BLACK : '#575b66' }}>
                            {link.label}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            <div>
              {[
                { href: `tel:${phone.replace(/\s+/g, '')}`, label: phone },
                { href: `mailto:${email}`, label: email }
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <p className="text-s" style={{ color: '#575b66' }}>
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-14 lg:mt-22 xl:mt-32">
            <div className="lg:flex items-center justify-between lg:flex-col lg:items-start lg:gap-y-4 xl:flex-row xl:items-center">
              <LogoText width={isMobile || isVerticalTablet ? '214px' : '365px'} />
              <Button className="mt-6 lg:mt-0 text-nowrap" onClick={handleMoreInfoClick}>
                {t('moreInfo')}
              </Button>
            </div>
            <div className="lg:flex items-center gap-4 lg:mt-6">
              <div className="mt-5 lg:mt-0 flex gap-2 items-center cursor-pointer" onClick={handleBackToTop}>
                <p className="text-s text-nowrap underline">{t('actions.BackToTop')}</p>
                <ArrowUp />
              </div>
              <p className="text-s mt-2 lg:mt-0" style={{ color: '#575b66' }}>
                {currentYear} MentorPlaces. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        {isMobile || isVerticalTablet || isLandscapeTablet ? (
          <Logo width={logoSize} height={logoSize} />
        ) : (
          <div className="lg:flex lg:justify-center lg:items-center w-[30vw] relative">
            <div className="absolute bottom-[-3vw]" style={{ backgroundColor: EColor.BLUE_LIGHT }}>
              <Logo width={logoSize} height={logoSize} />
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
