import type { Meta, StoryObj } from '@storybook/react'
import BlogPost from './BlogPost'

const meta: Meta<typeof BlogPost> = {
  component: BlogPost,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof BlogPost>

export const Default: Story = {
  args: {
    title: 'Comparador MentorPlaces',
    description:
      'El máster en marketing digital online de la Universidad Alfonso X el Sabio ofrece una formación integral en estrategias digitales, analítica y redes',
    image: '/images/blog-post-example-mentor.jpeg',
    post: `
      <div>
      <h2>H2, How we collect your personal data</h2>
      <p>
        Felis et etiam diam ac nam sem ornare et. Etiam nulla fermentum amet commodo morbi sit. Rutrum eget eget tincidunt non sit tincidunt faucibus sed id. Sed orci consequat id odio ac nisl libero. Feugiat urna hendrerit porta ultrices lacus odio nam. Enim dictum massa purus amet sed. Risus mi pharetra massa morbi. Amet pellentesque luctus blandit vestibulum. Tortor at rutrum ipsum arcu. Ac a lorem urna nullam sit. Blandit diam habitasse enim odio quis aliquet. Orci nec tellus in platea ut faucibus quis malesuada orci. Lectus gravida amet neque nunc odio pellentesque ut. Dictum viverra amet eu arcu et proin id. Urna nisi curabitur nibh tempus magna turpis. Nunc enim quisque quam urna. Amet purus ridiculus adipiscing vitae pellentesque egestas molestie eget sit.
      </p>
      <h3>H3, How we collect your personal data</h3>
       <p>
        Felis et etiam diam ac nam sem ornare et. Etiam nulla fermentum amet commodo morbi sit. Rutrum eget eget tincidunt non sit tincidunt faucibus sed id. Sed orci consequat id odio ac nisl libero. Feugiat urna hendrerit porta ultrices lacus odio nam. Enim dictum massa purus amet sed. Risus mi pharetra massa morbi. Amet pellentesque luctus blandit vestibulum. Tortor at rutrum ipsum arcu. Ac a lorem urna nullam sit. Blandit diam habitasse enim odio quis aliquet. Orci nec tellus in platea ut faucibus quis malesuada orci. Lectus gravida amet neque nunc odio pellentesque ut. Dictum viverra amet eu arcu et proin id. Urna nisi curabitur nibh tempus magna turpis. Nunc enim quisque quam urna. Amet purus ridiculus adipiscing vitae pellentesque egestas molestie eget sit.
      </p>
      <img src="/images/blog-post-example-mentor.jpeg" alt="image" />
       <p>
       Felis et etiam diam ac nam sem ornare et. Etiam nulla fermentum amet commodo morbi sit. Rutrum eget eget tincidunt non sit tincidunt faucibus sed id. Sed orci consequat id odio ac nisl libero. Feugiat urna hendrerit porta ultrices lacus odio nam. Enim dictum massa purus amet sed. Risus mi pharetra massa morbi. Amet pellentesque luctus blandit vestibulum. <u><strong>Tortor at rutrum ipsum arcu</strong></u>. Ac a lorem urna nullam sit.
      </p>
      <hr/>
      <h3>Sources</h3>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
        <li><a href="https://www.google.com/">Link</a></li>
      </ul>
      <hr/>
    </div>
  `
  }
}
