'use client'

import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useSignUpValidation } from '../../../../lib/validations/auth.validations'
import { useTranslations } from 'next-intl'
import { checkIsFormCompleted } from '@utils/form.utils'
import CheckboxInput from '@components/Checkbox'
import { Link } from '../../../../../navigation'

export interface ISignUpRequest {
  email: string
  password: string
  name: string
  surname: string
  acceptPrivacyPolicy: boolean
}

const defaultValues: ISignUpRequest = {
  email: '',
  password: '',
  name: '',
  surname: '',
  acceptPrivacyPolicy: true
}

interface ISignUpFormProps {
  onSubmit: (data: ISignUpRequest) => void
}

const SignUpForm: FC<ISignUpFormProps> = ({ onSubmit }) => {
  const t = useTranslations('forms')
  const signUpValidation = useSignUpValidation()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { isSubmitting, errors }
  } = useForm<ISignUpRequest>({
    defaultValues,
    resolver: joiResolver(signUpValidation)
  })

  const { acceptPrivacyPolicy } = getValues()

  return (
    <div>
      <h1 className="m mb-5">{t('signup.title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('name')} placeholder={t('placeholders.name')} className="mt-2" error={errors.name?.message} />
        <Input
          type="text"
          {...register('surname')}
          placeholder={t('placeholders.surname')}
          className="mt-2"
          error={errors.surname?.message}
        />
        <Input type="email" {...register('email')} placeholder={t('placeholders.email')} className="mt-2" error={errors.email?.message} />
        <Input
          type="password"
          {...register('password')}
          placeholder={t('placeholders.password')}
          className="mt-2"
          error={errors.password?.message}
        />
        <CheckboxInput
          {...register('acceptPrivacyPolicy')}
          id="acceptPrivacyPolicy"
          label={t('signup.checkbox')}
          checked={acceptPrivacyPolicy}
          className="mt-7"
        />

        <Button className="w-full mt-7" type={'submit'} disabled={checkIsFormCompleted(watch) || isSubmitting}>
          {t('signup.button')}
        </Button>
      </form>

      <p className="s mt-7 text-BLACK_60">
        {/* TODO - Link */}
        {t('signup.alreadyRegistered')}{' '}
        <Link href={'/'}>
          <span className="underline text-BLACK"> {t('signup.login')}</span>
        </Link>
      </p>
    </div>
  )
}

export default SignUpForm
