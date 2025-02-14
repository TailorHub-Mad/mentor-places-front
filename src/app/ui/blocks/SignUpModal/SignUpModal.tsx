import LogInForm from '@components/Forms/LogInForm/LogInForm'
import SignUpForm from '@components/Forms/SignUpForm/SignUpForm'
import type { IModalCustomProps } from '@components/ModalCustom/ModalCustom'
import ModalCustom from '@components/ModalCustom/ModalCustom'
import Image from 'next/image'
import { useState, type FC } from 'react'

const SignUpModal: FC<IModalCustomProps> = (props) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true)

  const onSignUpSubmit = () => {
    // TODO
  }

  const onLogInSubmit = () => {
    // TODO
  }

  return (
    <ModalCustom {...props} isOpen={true}>
      <div className="flex px-7 md:px-10 py-12 justify-between gap-10">
        <div className="hidden md:block relative h-[465px] w-[420px]">
          <Image className="rounded-lg object-cover" src={'/images/sign-up.jpeg'} alt={'girl with laptop'} fill />
        </div>
        <div className="w-full md:w-[340px]">
          {isSignUp ? (
            <SignUpForm onSubmit={onSignUpSubmit} onLogInClick={() => setIsSignUp(false)} />
          ) : (
            <LogInForm onSubmit={onLogInSubmit} onSignUpClick={() => setIsSignUp(true)} />
          )}
        </div>
      </div>
    </ModalCustom>
  )
}

export default SignUpModal
