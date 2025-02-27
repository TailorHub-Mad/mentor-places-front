import type { IHeroCourseFeedProps } from './HeroCourseFeed'
import { DISCIPLINES_MOCK_DATA, EUROPEAN_CITY_MOCK_DATA } from '@components/SearchBar/mock'

export const HERO_COURSE_FEED_MOCK: IHeroCourseFeedProps = {
  title: 'Encuentra tu mejor opción',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageSrc: '/images/course-feed-hero-image_mentor-places.jpeg',
  options: {
    discipline: DISCIPLINES_MOCK_DATA,
    location: EUROPEAN_CITY_MOCK_DATA
  }
}
