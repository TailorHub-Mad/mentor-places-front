import type { Meta, StoryObj } from '@storybook/react'
import LogInForm, { ILogInRequest } from './LogInForm'

const meta: Meta<typeof LogInForm> = {
  component: LogInForm,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof LogInForm>

export const Default: Story = {
  args: {
    onSubmit: (data: ILogInRequest) => {
      console.log('onSubmit LogInForm =>', { data })
    }
  }
}
