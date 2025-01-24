import type { Control, FieldErrors, Path, PathValue, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import InputSelect from './Form/Inputs/Select/InputSelect'
import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'
import phoneCodes from '../../lib/constants/phoneCodes.json'
import Input from './Input/Input'
import { useTranslations } from 'next-intl'

interface IPrefixAndPhone {
  prefix: string
  phone: string
}

interface IPrefixAndPhoneInputsProps<T extends IPrefixAndPhone> {
  control: Control<T>
  setValue: UseFormSetValue<T>
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  prefix: string
}

const PrefixAndPhoneInputs = <T extends IPrefixAndPhone>({
  control,
  setValue,
  register,
  errors,
  prefix
}: IPrefixAndPhoneInputsProps<T>) => {
  const t = useTranslations()

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <Controller
          name={'prefix' as Path<T>}
          control={control}
          render={() => (
            <InputSelect
              options={phoneCodes}
              onChange={(value: IFilterSelection) => setValue('prefix' as Path<T>, value.id as PathValue<T, Path<T>>)}
              valueSelected={prefix}
            />
          )}
        />
        <Input type="tel" {...register('phone' as Path<T>)} placeholder={t('forms.placeholders.phone')} className="mt-2 w-full" />
      </div>
      {errors.prefix?.message && <p className="text-RED s">{errors.prefix.message.toString()}</p>}
      {errors.phone?.message && <p className="text-RED s">{errors.phone.message?.toString()}</p>}
    </div>
  )
}
export default PrefixAndPhoneInputs
