import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import HeartIcon from '@components/icons/HeartIcon'
import { cx } from '@utils/cx'

interface WishListButtonProps {
  isOnWishList?: boolean
  isDisabled?: boolean
  isFetching?: boolean
  className?: string
  isTextHidden?: boolean
}

const WishListButton: FC<WishListButtonProps> = ({
  isOnWishList = false,
  isDisabled = false,
  isFetching = false,
  className,
  isTextHidden
}) => {
  const t = useTranslations()

  //TODO: Implement real feature
  const handleWishlistAction = () => {
    console.log('Handle add/remove from wishlist')
  }

  const handleOnClick = () => {
    if (isDisabled || isFetching) return
    handleWishlistAction()
  }

  return (
    <button
      className={cx('flex items-center rounded-[8px] shadow px-[12px] py-[14px] bg-WHITE', className, {
        'cursor-not-allowed': isDisabled || isFetching
      })}
      onClick={handleOnClick}>
      {!isTextHidden && <span className="mr-4">{isOnWishList ? t('actions.remove') : t('actions.add')}</span>}
      <HeartIcon />
    </button>
  )
}

export default WishListButton
