import type { ESearchType } from '@components/SearchBar/SearchBar'
import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'
import type { IHeroCourseFeedProps } from './HeroCourseFeed'
import { LONG_OPTIONS_LIST_MOCK } from '@components/Form/Inputs/Select/mock'

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
    discipline: LONG_OPTIONS_LIST_MOCK.options,
    location: LONG_OPTIONS_LIST_MOCK.options
  }
}
