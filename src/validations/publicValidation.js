import Joi from "joi"

export const validationRegis = Joi.object({
   nama: Joi.string().min(5).max(10).required(),
   email: Joi.string().required().email().lowercase(),
   username: Joi.string().required(),
   password: Joi.string().required(),
   userRole: Joi.string().required().valid('user', 'admin')
})

export const validationLogin = Joi.object({
   email: Joi.string().required().email().lowercase(),
   username: Joi.string().required(),
   password: Joi.string().required(),
})

