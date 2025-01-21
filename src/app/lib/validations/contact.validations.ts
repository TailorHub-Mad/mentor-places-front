import Joi from 'joi'

export const contactValidation = Joi.object({
  name: Joi.string().required().min(2),
  surname: Joi.string().required().min(2),
  phone: Joi.string()
    .required()
    .pattern(/^[0-9]{9}$/)
    .message('Phone number must contain only digits and be 9 characters long'),
  country: Joi.string().required().min(2)
})
