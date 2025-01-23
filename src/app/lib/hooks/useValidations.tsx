import Joi from 'joi'
import { useTranslations } from 'next-intl'

const PASSWORD_MIN_LENGTH = 6

const useValidations = () => {
  const t = useTranslations()

  const requiredMessage = { 'any.required': t('validations.required') }

  const requiredStringMinLenght2 = Joi.string()
    .required()
    .min(2)
    .messages({
      ...requiredMessage,
      'string.min': t('validations.min', { min: 2 })
    })

  const phoneValidation = Joi.string()
    .required()
    .pattern(/^[0-9]+$/)
    .messages({
      ...requiredMessage,
      'string.pattern.base': t('validations.phonePattern')
    })

  const acceptPrivacyPolicyValidation = Joi.boolean()
    .required()
    .truthy()
    .messages({ ...requiredMessage })

  const emailValidation = Joi.string()
    .email({ tlds: false })
    .required()
    .messages({ ...requiredMessage, 'string.email': t('validations.email') })

  const passwordValidation = Joi.string()
    .required()
    .min(PASSWORD_MIN_LENGTH)
    .messages({ ...requiredMessage, 'string.min': t('validations.min', { min: PASSWORD_MIN_LENGTH }) })

  return { requiredStringMinLenght2, phoneValidation, acceptPrivacyPolicyValidation, emailValidation, passwordValidation }
}

export default useValidations
