import type { Meta, StoryObj } from '@storybook/react'
import type { ISignUpRequest } from './SignUpForm'
import SignUpForm from './SignUpForm'

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof SignUpForm>

export const Default: Story = {
  args: {
    onSubmit: (data: ISignUpRequest) => {
      console.log('onSubmit SignUpForm =>', { data })
    }
  }
}
