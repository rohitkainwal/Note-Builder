import Joi from "Joi"

export const registerSchema = Joi.object({
      email: Joi.string().email().min(5).max(50).required(),
  password: Joi.string().min(5).max(50).required(),
  username: Joi.string().min(3).max(50).required(),
})

export const loginSchema = Joi.object({
      email: Joi.string().email().min(5).max(50).required(),
  password: Joi.string().min(5).max(50).required(),
 
})