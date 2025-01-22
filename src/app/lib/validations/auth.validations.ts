import Joi from 'joi'
import useValidations from '@hooks/useValidations'

export const useLogInValidation = () => {
  const { emailValidation, passwordValidation } = useValidations()

  return Joi.object({
    email: emailValidation,
    password: passwordValidation
  })
}

export const useSignUpValidation = () => {
  const { acceptPrivacyPolicyValidation, emailValidation, requiredStringMinLenght2, passwordValidation } = useValidations()

  return Joi.object({
    name: requiredStringMinLenght2,
    surname: requiredStringMinLenght2,
    email: emailValidation,
    password: passwordValidation,
    acceptPrivacyPolicy: acceptPrivacyPolicyValidation
  })
}
