import Stars, { type IStarsOpinionsProps } from '@components/Stars/Stars'
import WishListButton from '@components/WishListButton/WishListButton'
import useBreakpoint from '@hooks/useBreakpoint'
import Image from 'next/image'
import type { FC } from 'react'

interface IHeroInstitutionProps {
  title: string
  logo: string
  image: string
  opinions: IStarsOpinionsProps
}

const HeroInstitution: FC<IHeroInstitutionProps> = ({ title, logo, image, opinions }) => {
  const { isMobile } = useBreakpoint()

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch">
        <div className="flex flex-col justify-between md:min-h-[172px]">
          <h1 className="l md:xl max-w-[577px] mb-8 md:mb-0">{title}</h1>
          <Stars {...opinions} />
        </div>
        <div className="flex flex-col justify-between items-end">
          {!isMobile && (
            <div className="university-logo flex items-center gap-2 my-[8px]">
              <Image src={logo} alt={''} width={44} height={44} />
              <span className="s text-BLACK_60">{title}</span>
            </div>
          )}
          <WishListButton className="mt-8" />
        </div>
      </div>
      <div className="relative w-full h-[456px] mt-8 md:mt-12">
        <Image src={image} alt={title} fill objectFit="cover" className="rounded-lg" />
      </div>
    </section>
  )
}

export default HeroInstitution
