import { cx } from '@utils/cx'
import Button from '../../Button/Button'
import Link from 'next/link'
import Logo from '@components/Logo'

interface NavLink {
  name: string
  href: string
}

export interface NavProps {
  navLinks?: NavLink[]
}

const NavMain = (props: NavProps) => {
  const { navLinks } = props || {}

  return (
    <nav className={cx('flex items-center justify-between py-4 px-8')}>
      <div className="flex items-center gap-2">
        <Logo />
        <span className="bg-BLUE text-WHITE text-xs px-2 py-1 rounded-md">Masters</span>
      </div>

      <ul className="flex items-center space-x-6">
        {navLinks?.map((link) => (
          <Button variant="secondary" key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Button variant="secondary">Sign up</Button>
        <Button variant="primary">Log in</Button>
      </div>
    </nav>
  )
}

export default NavMain
