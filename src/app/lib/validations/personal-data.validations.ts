import Joi from 'joi'
import useValidations from '@hooks/useValidations'

export const usePersonalDataValidation = () => {
  const { phoneValidation, requiredStringMinLenght2, emailValidation } = useValidations()

  return Joi.object({
    name: requiredStringMinLenght2,
    surname: requiredStringMinLenght2,
    email: emailValidation,
    prefix: requiredStringMinLenght2,
    phone: phoneValidation
  })
}
