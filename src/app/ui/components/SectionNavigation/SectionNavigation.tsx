import { FC } from 'react'
import { ContentTag } from '@components/ContentTag/ContentTag'

export interface SectionNavigationProps {
  navItems: {
    href: string
    title: string
  }[]
}

export const SectionNavigation: FC<SectionNavigationProps> = ({ navItems }) => {
  return (
    <div className="section-navigation">
      <div className="section-navigation__loop hide-scrollbar flex items-center gap-3 overflow-x-auto overflow-y-visible py-2 relative">
        {navItems.map((navItem, index) => {
          return <ContentTag key={`section-navigation-item-${index}`} title={navItem.title} href={navItem?.href} />
        })}
      </div>
    </div>
  )
}
