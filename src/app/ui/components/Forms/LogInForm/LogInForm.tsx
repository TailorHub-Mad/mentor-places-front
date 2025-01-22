'use client'

import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useLogInValidation } from '../../../../lib/validations/auth.validations'
import { useTranslations } from 'next-intl'
import { checkIsFormCompleted } from '@utils/form.utils'
import { Link } from '../../../../../navigation'

export interface ILogInRequest {
  email: string
  password: string
}

const defaultValues: ILogInRequest = {
  email: '',
  password: ''
}

const LogInForm: FC = () => {
  const t = useTranslations('forms')
  const loginValidation = useLogInValidation()

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors }
  } = useForm<ILogInRequest>({
    defaultValues,
    resolver: joiResolver(loginValidation)
  })

  const onSubmit = async (data: ILogInRequest): Promise<void> => {
    try {
      console.log('LogInForm =>', data)
    } catch (err) {
      console.error('LogInForm - onSubmit', err)
    }
  }

  return (
    <div>
      <h1 className="m mb-5">{t('login.title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" {...register('email')} placeholder={t('placeholders.email')} className="mt-2" error={errors.email?.message} />
        <Input
          type="password"
          {...register('password')}
          placeholder={t('placeholders.password')}
          className="mt-2"
          error={errors.password?.message}
        />

        <Button className="w-full mt-7" type={'submit'} disabled={checkIsFormCompleted(watch) || isSubmitting}>
          {t('login.button')}
        </Button>
      </form>

      <p className="s mt-7 text-BLACK_60">
        {/* TODO - Link */}
        {t('login.notRegisteredYet')}{' '}
        <Link href={'/'}>
          <span className="underline text-BLACK"> {t('login.signUp')}</span>
        </Link>
      </p>
    </div>
  )
}

export default LogInForm
