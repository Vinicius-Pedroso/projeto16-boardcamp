import { connection } from "../database.js";

export async function rentalsList (req, res) {
  
  try {
    const listRentals = await connection.query('SELECT * FROM rentals');
    return res.status(201).send(listRentals);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

//query String