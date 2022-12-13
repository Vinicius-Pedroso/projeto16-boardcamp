import { connection } from "../database.js";

export async function customersUpdate (req, res) {
  const {name, phone, cpf, birthday} = req.body;
  
  try {
    const checkCpf = await connection.query(`SELECT * FROM customers WHERE ${cpf}`)
    if (checkCpf){
        return res.status(409)
    }
    await connection.query(`UPDATE customers SET name=${name}, phone=${phone} birthday=${birthday} WHERE ${cpf}`);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};