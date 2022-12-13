import { connection } from "../database.js";

export async function customersCreate (req, res) {
  const {name, phone, cpf, birthday} = req.body;
  
  try {
    await connection.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES (${{name, phone, cpf, birthday}})`);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};
