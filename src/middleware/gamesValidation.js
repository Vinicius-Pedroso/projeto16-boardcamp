import { gamesSchema } from "../schemas/gamesSchema";

export async function gamesValidation(req, res, next) {
    const {name, stockTotal, categoryId, pricePerDay} = req.body;

    const { error } = gamesSchema.validate({name, stockTotal, pricePerDay});

    if (error) {
      return res.status(400);
    }

    try {
        const nameCheck = await connection.query(`SELECT ${name} FROM games`);
        if(nameCheck){
            return res.sendStatus(409)
        }
        const idCheck = await connection.query(`SELECT ${categoryId} FROM games`);
        if(!idCheck){
            return res.sendStatus(409)
        }
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

    next();
}