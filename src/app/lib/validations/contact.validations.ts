import Joi from 'joi'
import useValidations from '@hooks/useValidations'

export const useContactValidation = () => {
  const { acceptPrivacyPolicyValidation, phoneValidation, requiredStringMinLenght2 } = useValidations()

  return Joi.object({
    name: requiredStringMinLenght2,
    surname: requiredStringMinLenght2,
    prefix: requiredStringMinLenght2,
    phone: phoneValidation,
    country: requiredStringMinLenght2,
    acceptPrivacyPolicy: acceptPrivacyPolicyValidation
  })
}
