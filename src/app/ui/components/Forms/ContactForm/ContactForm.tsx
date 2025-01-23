'use client'

import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useContactValidation } from '../../../../lib/validations/contact.validations'
import { useTranslations } from 'next-intl'
import { checkIsFormCompleted } from '@utils/form.utils'
import CheckboxInput from '@components/Checkbox'
import phoneCodes from '../../../../lib/constants/phoneCodes.json'
import InputSelect, { type ISelectOption } from '@components/Form/Inputs/Select/InputSelect'

export interface IContactRequest {
  name: string
  surname: string
  prefix: string
  phone: string
  country: string
  acceptPrivacyPolicy: boolean
}

const defaultValues: IContactRequest = {
  name: '',
  surname: '',
  prefix: '+34',
  phone: '',
  country: '',
  acceptPrivacyPolicy: false
}

interface IContactFormProps {
  onSubmit: (data: IContactRequest) => void
}

const ContactForm: FC<IContactFormProps> = ({ onSubmit }) => {
  const t = useTranslations('forms')
  const contactValidation = useContactValidation()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    control,
    formState: { isSubmitting, errors }
  } = useForm<IContactRequest>({
    defaultValues,
    resolver: joiResolver(contactValidation)
  })

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
        <div className="flex items-center justify-between gap-2">
          <Controller
            name="prefix"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputSelect options={phoneCodes} onChange={onChange} valueSelected={(value as unknown as ISelectOption)?.value || '+34'} />
            )}
          />
          <Input
            type="tel"
            {...register('phone')}
            placeholder={t('placeholders.phone')}
            className="mt-2 w-full"
            error={errors.phone?.message}
          />
        </div>

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
