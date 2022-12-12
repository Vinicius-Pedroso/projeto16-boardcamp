import { customersSchema } from "../schemas/customersSchemas";

export async function customersValidation(req, res, next) {
    const {name, phone, cpf, birthday} = req.body;

    const { error } = customersSchema.validate({name, phone, cpf, birthday});

    if (error) {
      return res.status(400);
    }

    next();
}