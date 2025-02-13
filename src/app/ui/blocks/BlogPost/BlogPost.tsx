import RichText from '@components/RichText/RichText'
import Image from 'next/image'
import type { FC } from 'react'

interface IBlogPostProps {
  title: string
  description: string
  image: string
  post: string
}

const BlogPost: FC<IBlogPostProps> = ({ title, description, image, post }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-[100px] bg-YELLOW p-10">
        <Image src={image} alt={title} height={484} width={668} style={{ borderRadius: '8px' }} />
        <div>
          <h1 className="text-xl font-xl leading-xl">{title}</h1>
          <p className="s text-BLACK/60 mt-6">{description}</p>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <RichText content={post} disableTruncate width="50%" />
      </div>
    </div>
  )
}

export default BlogPost
