'use client'

import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { joiResolver } from '@hookform/resolvers/joi'
import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { usePersonalDataValidation } from '../../../lib/validations/personal-data.validations'
import InputSelect from '@components/Form/Inputs/Select/InputSelect'
import phoneCodes from '../../../lib/constants/phoneCodes.json'
import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'

interface IPersonalData {
  name: string
  surname: string
  email: string
  prefix: string
  phone: string
}

interface IPersonalDataProps {
  data: IPersonalData
  onSubmit: (data: IPersonalData) => void
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
    setValue,
    formState: { errors }
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

  const textData: (keyof IPersonalData)[] = ['name', 'surname', 'email']

  const { prefix } = getValues()

  return (
    <div className="bg-WHITE rounded-lg">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data)
          toggleEditing()
        })}>
        <div className="flex flex-col-reverse items-start lg:flex-row lg:justify-between lg:items-center">
          <p className="text-xl-mobile font-xl-mobile md:text-xl md:font-xl">{t('personalData.title')}</p>
          <div className="flex gap-6">
            <Button variant="primary" onClick={toggleEditing} type="button">
              {isEditing ? t('actions.cancel') : t('actions.edit')}
            </Button>
            {isEditing && <Button variant="primary">{t('actions.save')}</Button>}
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
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Controller
                    name="prefix"
                    control={control}
                    render={() => (
                      <InputSelect
                        options={phoneCodes}
                        onChange={(value: IFilterSelection) => setValue('prefix', value.id)}
                        valueSelected={prefix}
                      />
                    )}
                  />
                  <Input type="tel" {...register('phone')} placeholder={t('personalData.phone')} className="mt-2 w-full" />
                </div>
                {errors.prefix && <p className="text-RED s">{errors.prefix.message}</p>}
                {errors.phone && <p className="text-RED s">{errors.phone.message}</p>}
              </div>
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
