import type { Meta, StoryObj } from '@storybook/react'
import PersonalData from './PersonalData'

const meta: Meta<typeof PersonalData> = {
  component: PersonalData,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof PersonalData>

export const Dafault: Story = {
  args: {
    data: { name: 'Javier', surname: 'Cano', email: 'jcano@gmail.com', prefix: '+34', phone: '67390276' },
    onSubmit: (data) => {
      console.log('PersonalData saved =>', data)
    }
  }
}
