import Stars, { type IStarsOpinionsProps } from '@components/Stars/Stars'
import WishListButton from '@components/WishListButton/WishListButton'
import Image from 'next/image'
import type { FC } from 'react'

interface IHeroInstitutionProps {
  title: string
  logo: string
  image: string
  opinions: IStarsOpinionsProps
}

const HeroInstitution: FC<IHeroInstitutionProps> = ({ title, logo, image, opinions }) => {
  return (
    <div className="bg-GRAY">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between md:min-h-[172px]">
          <h1 className="l md:xl max-w-[577px]">{title}</h1>
          <Stars {...opinions} />
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="university-logo flex items-center gap-2 my-[8px]">
            <Image src={logo} alt={''} width={44} height={44} />
            <span className="s text-BLACK_60">{title}</span>
          </div>
          <WishListButton />
        </div>
      </div>
      <div className="relative w-full h-[456px] mt-8 md:mt-12">
        <Image src={image} alt={title} fill objectFit="cover" className="rounded-lg" />
      </div>
    </div>
  )
}

export default HeroInstitution
