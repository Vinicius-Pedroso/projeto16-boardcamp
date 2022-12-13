import { rentalsSchema } from "../schemas/rentalsSchema";
import { connection } from "../database";

export async function rentalsValidation(req, res, next) {
    const {customerId, gameId, daysRented} = req.body;

    const { error } = rentalsSchema.validate(daysRented);

    if (error) {
      return res.status(400);
    }

    try {
        const customerIdCheck = await connection.query(`SELECT * FROM customers WHERE ${{customerId}}`)
        if (!customerIdCheck){
            return res.status(400)
        }
        const gameIdCheck = await connection.query(`SELECT * FROM games WHERE ${{gameId}}`)
        if (!gameIdCheck){
            return res.status(400)
        }
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

    next();
}