import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import HeartIcon from '@components/icons/HeartIcon'
import { cx } from '@utils/cx'

interface WishListButtonProps {
  isOnWishList?: boolean
  onClick: () => void
  isDisabled?: boolean
  isFetching?: boolean
  className?: string
  isTextHidden?: boolean
}

const WishListButton: FC<WishListButtonProps> = ({
  isOnWishList = false,
  onClick,
  isDisabled = false,
  isFetching = false,
  className,
  isTextHidden
}) => {
  const t = useTranslations()

  const handleOnClick = () => {
    if (isDisabled || isFetching) return
    onClick()
  }

  return (
    <>
      <button
        className={cx('flex items-center rounded-[8px] shadow px-[12px] py-[14px] bg-WHITE', className, {
          'cursor-not-allowed': isDisabled || isFetching
        })}
        onClick={handleOnClick}>
        {!isTextHidden && (
          <span className="mr-4">
            {
              //TODO: Add localized strings
              isOnWishList ? t('Eliminar de fav') : t('Añadir a fav')
            }
          </span>
        )}
        <HeartIcon />
      </button>
    </>
  )
}

export default WishListButton
