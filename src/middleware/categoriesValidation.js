import { categoriesSchema } from "../schemas/categoriesSchema";

export async function categoriesValidation(req, res, next) {
    const name = req.body.name;

    const { error } = categoriesSchema.validate(name);

    if (error) {
      return res.status(400);
    }

    try {
        const nameCheck = await connection.query(`SELECT ${name} FROM categories`);
        if(nameCheck){
            return res.sendStatus(409)
        }
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

    next();
}