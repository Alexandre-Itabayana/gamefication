import Joi, { ValidationResult  } from 'joi';

interface LoginForm {
    email: string;
    password: string;
}

const loginSchema = Joi.object({
    // email: Joi.string().email().required(),
    // password: Joi.string().min(6).required(),
    usuario: Joi.string(),
    senha: Joi.string(), 
})

export const validateLoginForm = (data: LoginForm): ValidationResult => {
    return loginSchema.validate(data, { abortEarly: false })
}