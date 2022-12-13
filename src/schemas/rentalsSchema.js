import joi from 'joi';

export const rentalsSchema = joi.object({
    daysRented: joi.number().required().min(1)
})