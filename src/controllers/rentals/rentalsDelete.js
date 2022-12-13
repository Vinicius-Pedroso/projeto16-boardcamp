import { connection } from "../database.js";

export async function rentalsDelete (req, res) {
  const id = req.params.id;

  try {
    const checkId = await connection.query(`SELECT * FROM rentals WHERE ${id}`)
    if (!checkId){
        return res.status(404)
    }
    const checkReturn = await connection.query(`SELECT returnDate FROM rentals WHERE ${id}`)
    if (checkReturn != null){
        return res.status(400)
    }
    await connection.query(`DELETE FROM rentals WHERE ${id})`);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};