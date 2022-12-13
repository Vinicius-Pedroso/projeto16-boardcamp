import { connection } from "../database.js";

export async function customersListById (req, res) {
    const id = req.params.id;
  
    try {
        const listCustomers = await connection.query(`SELECT * FROM customers WHERE ${id}`);
        if (!listCustomers){
            return res.status(404)
        }
        return res.status(201).send(listCustomers);
    } catch (err) {
        console.log(err);
        return res.status(500);
    }
};