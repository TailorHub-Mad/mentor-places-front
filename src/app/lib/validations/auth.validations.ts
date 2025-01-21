import Joi from 'joi'

const emailValidation = Joi.string().email({ tlds: false }).required()

const passwordValidation = Joi.string().required().min(6)

export const signUpValidation = Joi.object({
  name: Joi.string().required().min(2),
  surname: Joi.string().required().min(2),
  email: emailValidation,
  password: passwordValidation,
  acceptPrivacyPolicy: Joi.boolean().required().truthy()
})

export const loginValidation = Joi.object({
  email: emailValidation,
  password: passwordValidation
})
