'use client'

import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { contactValidation } from '../../../../lib/validations/contact.validations'
import { useTranslations } from 'next-intl'
import { checkIsFormCompleted } from '@utils/form.utils'
import CheckboxInput from '@components/Checkbox'

export interface IContactRequest {
  name: string
  surname: string
  phone: string
  country: string
  acceptPrivacyPolicy: boolean
}

const defaultValues: IContactRequest = {
  name: '',
  surname: '',
  phone: '',
  country: '',
  acceptPrivacyPolicy: false
}

const ContactForm: FC = () => {
  const t = useTranslations('forms')

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { isSubmitting, errors }
  } = useForm<IContactRequest>({
    defaultValues,
    resolver: joiResolver(contactValidation)
  })

  const onSubmit = async (data: IContactRequest): Promise<void> => {
    try {
      console.log('ContactForm =>', data)
    } catch (err) {
      console.error('ContactForm - onSubmit', err)
    }
  }

  const { acceptPrivacyPolicy } = getValues()

  return (
    <div>
      <h1 className="m mb-5">{t('contact.title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('name')} placeholder={t('placeholders.name')} className="mt-2" error={errors.name?.message} />
        <Input
          type="text"
          {...register('surname')}
          placeholder={t('placeholders.surname')}
          className="mt-2"
          error={errors.surname?.message}
        />

        <Input type="tel" {...register('phone')} placeholder={t('placeholders.phone')} className="mt-2" error={errors.phone?.message} />

        <Input
          type="text"
          {...register('country')}
          placeholder={t('placeholders.country')}
          className="mt-2"
          error={errors.country?.message}
        />

        <CheckboxInput
          {...register('acceptPrivacyPolicy')}
          id="acceptPrivacyPolicy"
          label={t('contact.checkbox')}
          checked={acceptPrivacyPolicy}
          className="mt-7"
        />

        <Button className="w-full mt-7" type={'submit'} disabled={checkIsFormCompleted(watch) || isSubmitting}>
          {t('contact.button')}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
