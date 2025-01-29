import type { IContactCardProps } from '@components/ContactCard/ContactCard'
import ContactCard from '@components/ContactCard/ContactCard'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import type { FC } from 'react'

interface ICampusItem extends IContactCardProps {
  image: string
}

interface ICampusProps extends IContactCardProps {
  data: ICampusItem[]
}

const Campus: FC<ICampusProps> = ({ data }) => {
  return (
    <CustomSwiper
      items={data.map((campus) => {
        const { image, ...contact } = campus

        return (
          <div
            style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '589px' }}
            className="relative p-5 flex items-end md:rounded-lg"
            key={contact.name}>
            <ContactCard {...contact} className="md:absolute md:bottom-12 md:right-20" />
          </div>
        )
      })}
    />
  )
}

export default Campus
