import type { ESearchType } from '@components/SearchBar/SearchBar'
import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'
import type { IHeroCourseFeedProps } from './HeroCourseFeed'
import { DISCIPLINES_MOCK_DATA, EUROPEAN_CITY_MOCK_DATA } from '@components/SearchBar/mock'

export const HERO_COURSE_FEED_MOCK: IHeroCourseFeedProps = {
  title: 'Ecuentra tu mejor opción',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageSrc: '/images/course-feed-hero-image_mentor-places.jpeg',
  onChange: function (value: IFilterSelection, type: ESearchType): void {
    console.log('onChange: ', { value, type })
  },
  valuesSelected: {
    discipline: '',
    location: ''
  },
  options: {
    discipline: DISCIPLINES_MOCK_DATA,
    location: EUROPEAN_CITY_MOCK_DATA
  }
}
