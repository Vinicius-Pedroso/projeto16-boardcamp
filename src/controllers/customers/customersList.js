import { connection } from "../database.js";

export async function customersList (req, res) {
  
  try {
    const listCustomers = await connection.query('SELECT * FROM customers');
    return res.status(201).send(listCustomers);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

//query string