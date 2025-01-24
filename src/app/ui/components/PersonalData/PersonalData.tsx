'use client'

import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { joiResolver } from '@hookform/resolvers/joi'
import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import { useForm } from 'react-hook-form'
import { usePersonalDataValidation } from '../../../lib/validations/personal-data.validations'
import PrefixAndPhoneInputs from '@components/PrefixAndPhoneInputs'
import { checkIsFormCompleted } from '@utils/form.utils'

interface IPersonalData {
  name: string
  surname: string
  email: string
  prefix: string
  phone: string
}

interface IPersonalDataProps {
  data: IPersonalData
  onSubmit: (data: IPersonalData) => Promise<void>
}

const PersonalData: FC<IPersonalDataProps> = ({ data, onSubmit }) => {
  const t = useTranslations()
  const personalDataValidation = usePersonalDataValidation()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    control,
    getValues,
    watch,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm<IPersonalData>({
    defaultValues: data,
    resolver: joiResolver(personalDataValidation)
  })

  const toggleEditing = () => setIsEditing((prev) => !prev)

  const renderEditableField = (fieldName: keyof IPersonalData, placeholderKey: string) => (
    <Input
      type="text"
      {...register(fieldName)}
      placeholder={t(`personalData.${placeholderKey}`)}
      className="mt-2"
      error={errors[fieldName]?.message}
    />
  )

  const renderReadOnlyField = (value: string) => (
    <>
      <p className="s">{value}</p>
      <hr className="h-[1px] border-BLACK/10" />
    </>
  )

  const handleSaveClick = async () => {
    await onSubmit(data)
    toggleEditing()
  }

  const textData: (keyof IPersonalData)[] = ['name', 'surname', 'email']

  const { prefix } = getValues()

  return (
    <div className="bg-WHITE rounded-lg">
      <form onSubmit={handleSubmit(handleSaveClick)}>
        <div className="flex flex-col-reverse items-start lg:flex-row lg:justify-between lg:items-center">
          <p className="text-xl-mobile font-xl-mobile md:text-xl md:font-xl">{t('personalData.title')}</p>
          <div className="flex gap-6">
            <Button variant="primary" onClick={toggleEditing} type="button" disabled={isSubmitting}>
              {isEditing ? t('actions.cancel') : t('actions.edit')}
            </Button>
            {isEditing && (
              <Button variant="primary" disabled={checkIsFormCompleted(watch) || isSubmitting}>
                {t('actions.save')}
              </Button>
            )}
          </div>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row w-full">
          {textData.map((field) => (
            <div key={field} className="w-full">
              {isEditing ? renderEditableField(field, field) : renderReadOnlyField(data[field])}
              <p className="s">{t(`personalData.${field}`)}</p>
            </div>
          ))}

          <div className="w-full">
            {isEditing ? (
              <PrefixAndPhoneInputs<IPersonalData>
                control={control}
                setValue={setValue}
                register={register}
                errors={errors}
                prefix={prefix}
              />
            ) : (
              renderReadOnlyField(`${data.prefix} ${data.phone}`)
            )}
            <p className="s">{t('personalData.phone')}</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalData
