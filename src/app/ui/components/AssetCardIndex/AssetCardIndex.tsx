import type { FC, MouseEventHandler } from 'react'
import Image from 'next/image'
import WishListButton from '@components/WishListButton/WishListButton'
import type { IAssetCardData } from '@interfaces/assetCard.interface'
import AssetDetailCard from '@components/AssetCard/components/AssetDetailCard'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { useTranslations } from 'next-intl'
import Button from '@components/Button/Button'

export interface IAssetCardIndexProps extends IAssetCardData {
  title: string
  universityLogo?: string
  universityName?: string
  assetThumbnailUrl?: string | null
  isOnFavPage?: boolean
  isOnComparePage?: boolean
  handleRemove?: MouseEventHandler<HTMLButtonElement>
}

const AssetCardIndex: FC<IAssetCardIndexProps> = (props) => {
  const {
    universityLogo,
    universityName,
    assetThumbnailUrl,
    title,
    details,
    ctaHref,
    isOnFavPage = false,
    isOnComparePage = false,
    handleRemove
  } = props

  const t = useTranslations()

  return (
    <div className="asset-card-index__wrapper flex flex-col md:flex-row relative md:py-[24px] py-[20px] md:px-[32px] px-[22px] shadow-md rounded-[8px] bg-WHITE max-w-full">
      <div
        className="asset-card-index__image relative overflow-hidden h-[275px] w-auto md:w-[275px] md:h-[300px] md:mr-[50px] rounded-[8px] mb-[32px] md:mb-0"
        style={{
          backgroundImage: `url(${assetThumbnailUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        {!isOnFavPage && <WishListButton isTextHidden className="absolute md:hidden top-[14px] right-[14px]" />}
      </div>
      <div className="asset-card-index__content flex flex-col flex-grow justify-between">
        <div className="asset-card-index__content__header flex flex-row justify-between items-center mb-[34px]">
          {(universityLogo || universityName) && (
            <div className="university-logo flex items-center gap-2 my-[8px]">
              {universityLogo && <Image src={universityLogo} alt={universityName || ''} width={50} height={50} />}
              {universityName && <span>{universityName}</span>}
            </div>
          )}
          {!isOnFavPage && <WishListButton className="hidden md:flex" />}
        </div>
        <div className="asset-card-index__content__info mb-[30px]">
          <h3 className="font-s text-m-mobile lg:text-m mb-[20px]">{title}</h3>
          {details && (
            <div className="md:flex items-center gap-x-[24px] gap-y-[12px] md:gap-[12px] grid grid-cols-2">
              {details.map((item, index) => {
                if (!item.value) return null

                return (
                  <AssetDetailCard
                    key={`asset-detail-card-${item.value}-${index}`}
                    variant={EAssetCardVariant.index}
                    text={item.value}
                    type={item.type}
                  />
                )
              })}
            </div>
          )}
        </div>
        <div className="asset-card-index__content__footer flex items-center gap-[6px] md:gap-[16px]">
          <Button variant="primary" href={ctaHref}>
            {t('actions.showMore')}
          </Button>
          {isOnFavPage || isOnComparePage ? (
            <Button variant="text" onClick={handleRemove}>
              {t('actions.remove')}
            </Button>
          ) : (
            //TODO: Add CheckboxInput components when completed
            <div className="checkbox flex items-center">
              <input className="mr-2" type="checkbox" name="asset-card-index" id="asset-card-index" />
              <label htmlFor="asset-card-index" className="checkbox__label">
                {t('actions.compare')}
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AssetCardIndex
