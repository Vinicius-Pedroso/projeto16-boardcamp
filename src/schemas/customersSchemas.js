import joi from 'joi';

export const customersSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().numeric().required().min(10).max(11),
    cpf: joi.string().numeric().required().min(11).max(11),
    birthday: joi.date().format('YYYY-MM-DD')
})
