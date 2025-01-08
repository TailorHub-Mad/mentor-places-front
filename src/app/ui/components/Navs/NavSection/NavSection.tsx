import { type FC } from 'react'
import ContentTag from '@components/ContentTag/ContentTag'

export interface NavSectionProps {
  navItems: {
    title: string
    href?: string
  }[]
}

const NavSection: FC<NavSectionProps> = ({ navItems }) => {
  return (
    <div className="section-navigation">
      <div className="section-navigation__loop hide-scrollbar flex items-center gap-3 overflow-x-auto overflow-y-visible py-2 relative">
        {navItems.map((navItem, index) => {
          return <ContentTag key={`section-navigation-item-${navItem.title + index}`} title={navItem.title} href={navItem?.href} />
        })}
      </div>
    </div>
  )
}

export default NavSection
